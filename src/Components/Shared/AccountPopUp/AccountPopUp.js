import React from 'react';
import {Link} from 'react-router-dom';
import './AccountPopUp.css';

function AccountPopUp() {




    return (
        <div className="login-popup">
            <h2>Login or Register</h2>
            <Link to="/login">
            <button className="btn">Login</button>
            </Link>
            <Link to="/register">
            <button className="btn">Register</button>
            </Link>
            
        </div>
    )
}

export default AccountPopUp
