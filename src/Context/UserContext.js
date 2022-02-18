import React from 'react'
import {createContext, useReducer, useState} from 'react';
import { UserReducer } from '../Reducer/UserReducer';

export const UserContext = createContext();

export default function UserContextProvider(props) {

    let initialState = {
    users: [],
    currentUser: null
    }    

    const [state, dispatch] = useReducer(UserReducer, initialState);


    return (
        <UserContext.Provider value={{state, dispatch}}>
            {props.children}
        </UserContext.Provider>
    )
}


