import React from 'react';
import {Link} from 'react-router-dom';
import './AccountPopUp.css';

function AccountPopUp() {



    return (
        <div className="login-popup">
            <h2>Login or Register</h2>
            <div className="buttons">
            <div>
            <Link to="/login">
            <button className="btn one">Login</button>
            </Link>
            </div>
            <div>
            <Link to="/register">
            <button className="btn two">Register</button>
            </Link>
            </div>
            </div>
            
        </div>
    )
}

export default AccountPopUp
