import React from 'react'
import './Login.css';

function Login() {
    return (
        <form className="login flex-container flex-cols">
            <h2>LOGIN</h2>
            <label>Username</label>
            <input type="username"></input>
            <label>Password</label>
            <input type="password"></input>
            <button>Sign in</button>
        </form>
    )
}

export default Login
