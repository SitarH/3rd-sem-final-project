import React from 'react'
import './Login.css';
import {useState, useContext, useReducer, useEffect} from 'react';
import {UserContext} from '../../Context/UserContext'
import {ACTIONS as USER_ACTIONS} from '../../Reducer/UserReducer'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


function Login() {

    const {state,dispatch} = useContext(UserContext);

    const [login, setLogin] = useState({username: '', password: ''});

    const [currentUser, setCurrentUser] = useState({});

    const route = useNavigate();

    useEffect(() => {
        console.log(state.users)
      }, [])
   

    const onSignIn= (event) =>{
        event.preventDefault();
        if (login.username == 'admin' && login.password =='admin1234admin'){
            route('/admin');
        }
        else{
            dispatch({type: USER_ACTIONS.FIND_USER , login})
            console.log(state.users)
            let currentUser =JSON.parse(sessionStorage.getItem('currentUser'))
            setCurrentUser(currentUser)
            console.log(currentUser)
            if (currentUser != null) {
                route('/userProfile');

        }
        else{
            alert('bla')
        }
    }
       

    }
 
    return (
        <form className="login flex-container flex-cols">
            <h2>LOGIN</h2>
            <input type="username" placeholder="Username" maxLength={60} required={true} pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z])+" value={login.username} onChange={(event)=>setLogin({...login, username: event.target.value})}></input>
            <input type="password" placeholder="Password" maxLength={60} required={true} pattern=""minLength={7} maxLength={15} required={true} pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^*_=+-])+" value={login.password} onChange={(event) => setLogin({...login, password: event.target.value})}></input>
            <button className="btn sign" onClick={onSignIn}>Sign In</button>
        </form>
    )
}

export default Login
