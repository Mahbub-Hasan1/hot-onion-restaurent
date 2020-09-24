import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CategoryContext } from '../../App';
import logo from '../imgs/logo2.png';
import './AppBar.css'

const AppBar = () => {
    const { cart } = useContext(CategoryContext);
    return (
        <div>
            <nav className="navbar navbar-expand-lg">
                <Link className="navbar-brand logo" to="/"><img className="logoImg" src={logo} alt="" /></Link>

                <div className="collapse navbar-collapse" id="navbarTogglerDemo03">

                    <Link to="/CartDetail"><button>CartDetail : {cart.length}</button></Link>
                    <button>Login</button>
                </div>
            </nav>
        </div>
    );
};

export default AppBar;