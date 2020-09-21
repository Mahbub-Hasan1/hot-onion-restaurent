import React from 'react';
import './Header.css'
import logo from '../../imgs/logo2.png';

const Header = () => {
    return (
        <div>
            <nav style={{position:"fixed", width:'100%',top:'0'}} className="navbar navbar-expand-lg">
                <a className="navbar-brand logo" href="#logo"><img className="logoImg" src={logo} alt="" /></a>

                <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                    <button>Login</button>
                </div>
            </nav>
            <div className="d-flex align-items-center justify-content-center SearchSection">
                <h2>Best food waiting for your belly</h2>
                <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
            </div>
        </div>
    );
};

export default Header;