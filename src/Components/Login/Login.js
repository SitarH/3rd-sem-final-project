import React from 'react'
import './Login.css';
import {useState, useContext, useReducer, useEffect} from 'react';
import {UserContext} from '../../Context/UserContext'
import {ACTIONS as USER_ACTIONS} from '../../Reducer/UserReducer'
import { Link } from 'react-router-dom';


function Login() {

    const {state,dispatch} = useContext(UserContext);

    const [login, setLogin] = useState({username: '', password: ''});

    const [currentUser, setCurrentUser] = useState({});

    useEffect(() => {
        console.log(state.users)
      }, [])
   

    // const onSignIn= (event) =>{
    //     event.preventDefault();
    //     if (login.username == 'admin' && login.password =='admin1234admin'){
    //         window.location.href = '/admin';
    //     }
    //     else{
    //         dispatch({type: USER_ACTIONS.FIND_USER , login})
    //         console.log(state.users)
    //         let currentUser =JSON.parse(sessionStorage.getItem('currentUser'))
    //         setCurrentUser(currentUser)
    //         console.log(currentUser)
    //         if (currentUser != null) {
    //             window.location.href = '/userProfile';

    //     }
    //     else{
    //         alert('bla')
    //     }
    // }
       

    // }
 
    return (
        <form className="login flex-container flex-cols">
            <h2>LOGIN</h2>
            <label>Username</label>
            <input type="username" maxLength={60} required={true} pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z])+" value={login.username} onChange={(event)=>setLogin({...login, username: event.target.value})}></input>
            <label>Password</label>
            <input type="password" minLength={7} maxLength={15} required={true} pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^*_=+-])+" value={login.password} onChange={(event) => setLogin({...login, password: event.target.value})}></input>
            <button><Link to="/admin">Sign In</Link></button>
        </form>
    )
}

export default Login
