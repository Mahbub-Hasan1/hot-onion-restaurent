import React, { useContext } from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import firebaseConfig from "./firebaseConfig"
import { CategoryContext } from '../../App';
import { useForm } from "react-hook-form";

const SignUp = () => {
    const { SignUpUser, setSignUpUser } = useContext(CategoryContext);

    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }

    let GoogleProvider = new firebase.auth.GoogleAuthProvider();
    const handleGoogleSignup = () => {
        firebase.auth().signInWithPopup(GoogleProvider)
            .then(function (result) {
                var user = result.user;
                console.log(user);
                var { displayName, email } = user;
                const signedInUser = { name: displayName, email }
                setSignUpUser(signedInUser)

            }).catch(function (error) {
                var errorCode = error.code;
                var errorMessage = error.message;
                var email = error.email;
                var credential = error.credential;
                console.log(errorMessage, errorCode, email, credential);
                // ...
            });
    }

    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => {

        // setSignUpUser(data)
        console.log(data)
        firebase.auth().createUserWithEmailAndPassword(data.email, data.password)
            .then(response => {

                var { displayName, email } = response.user;
                const signedInUser = { name: displayName, email }

                signedInUser.error = "";
                signedInUser.success = true;
                setSignUpUser(signedInUser);

            })
            .catch(error => {
                const newUserInfo = { ...SignUpUser };
                newUserInfo.error = error.message;
                newUserInfo.success = false;
                setSignUpUser(newUserInfo)
            });


    };


    return (
        <div style={{ width: '50%', margin: '0 auto' }}>
            <button onClick={handleGoogleSignup}>SignUp</button>
            <h1>SignUp:{SignUpUser.Name}</h1>


            <form onSubmit={handleSubmit(onSubmit)}>
                <input name="Name" ref={register({ required: true, minLength: 3, maxLength: 35 })} className='inputBox' /><br />
                {errors.Name && <span style={{ color: 'red' }}>This field is required ,minLength: 3, maxLength: 35 </span>}

                <input name="email" ref={register({ required: true, pattern: /\S+@\S+\.\S+/ })} className='inputBox' /><br />
                {errors.email && <span style={{ color: 'red' }}>This field is required pattern: S+@+S+.S+</span>}

                <input name="password" type="password" ref={register({ required: true, minLength: 6, maxLength: 13, pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{4,8}$/ })} className='inputBox' /><br />
                {errors.password && <span style={{ color: 'red' }}>This field is required and pattern A-Z, a-z, 4,8 ,minLength: 6,  maxLength: 13 </span>}
                <input type="submit" className='inputBtn' />
            </form>

            <p style={{ color: 'red' }}>{SignUpUser.error}</p>
            {SignUpUser.success && <p style={{ color: 'green' }}>User created successfully</p>}


        </div>
    );
};

export default SignUp;