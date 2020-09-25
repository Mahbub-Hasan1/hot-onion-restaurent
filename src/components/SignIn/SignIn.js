import React, { useContext } from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { CategoryContext } from '../../App';
import { useForm } from "react-hook-form";
import firebaseConfig from '../SignUp/firebaseConfig';

const SignIn = () => {
    const {loggedInUser, setLoggedInUser} = useContext(CategoryContext);
    const { register, handleSubmit, errors } = useForm();

            if (firebase.apps.length === 0) {
                firebase.initializeApp(firebaseConfig);
            }

    const onSubmit = data => {
       firebase.auth().signInWithEmailAndPassword(data.email, data.password)
       .then(response => {

            var { displayName, email } = response.user;
            const signedInUser = { name: displayName, email }

            signedInUser.error = "";
            signedInUser.success = true;
            setLoggedInUser(signedInUser);

        })
       .catch(function(error) {
            const newUserInfo = { ...loggedInUser };
            newUserInfo.error = error.message;
            newUserInfo.success = false;
            setLoggedInUser(newUserInfo)
        });

    };

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input name="email" ref={register({  required: true, pattern: /\S+@\S+\.\S+/ })} className='inputBox' /><br/>
                    {errors.email &&  <span style={{color: 'red'}}>This field is required pattern: S+@+S+.S+</span>}

                <input name="password" type="password" ref={register({  required: true, minLength: 6, maxLength: 13, pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{4,8}$/ })} className='inputBox' /><br/>
                    {errors.password &&  <span style={{color: 'red'}}>This field is required and pattern A-Z, a-z, 4,8 ,minLength: 6,  maxLength: 13 </span>}
                <input type="submit" className='inputBtn' />
            </form>

                <p style={{ color: 'red' }}>{loggedInUser.error}</p>
                {loggedInUser.success && <p style={{ color: 'green' }}>User created successfully</p>}
        </div>
    );
};

export default SignIn;