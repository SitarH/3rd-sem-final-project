import React, { useEffect } from 'react'
import {createContext, useReducer, useState} from 'react';
import { UserReducer } from '../Reducer/UserReducer';

export const UserContext = createContext();

export default function UserContextProvider(props) {

    let initialState = {
    users: [],
    currentUser: null
    }    

    useEffect(()=>{
        let local_users = JSON.parse(localStorage.getItem('users'));
        if(local_users != null)
            initialState.users = local_users
    },[]);

    const [state, dispatch] = useReducer(UserReducer, initialState);


    return (
        <UserContext.Provider value={{state, dispatch}}>
            {props.children}
        </UserContext.Provider>
    )
}


