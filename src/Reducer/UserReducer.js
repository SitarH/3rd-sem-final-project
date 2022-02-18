import {useReducer} from "react";

export const ACTIONS = {
    ADD_USER: 'add',
    REMOVE_USER: 'remove',
    UPDATE_USER: 'update',
    FIND_USER: 'find'
}

export const UserReducer = (state, action) =>{
    switch (action.type) {
        case ACTIONS.ADD_USER:
            console.log(action.user)
            console.log(state.users)
           let verifyUser = AddUser(action.user, state);
           console.log(verifyUser)
           if (verifyUser)
                return {
                    users:[...state.users, action.user]
                };
            else
                alert('email already exists, please try again')

            break;
        case ACTIONS.REMOVE_USER:
            let users = RemoveUser(action.user, state);
            return {
                users: users
            }
            break;
        case ACTIONS.UPDATE_USER:
            debugger
            console.log(action.user)
            console.log(action.currentUser)
            console.log(action.users)
            UpdateUser(action.user,state, action.updatedUser)

            break;
        case ACTIONS.FIND_USER:
            console.log(state.users)
            let user = FindUser(action.login, state)
            if (user != null){
                console.log(action.user)
                sessionStorage.setItem('currentUser', JSON.stringify(user));
            }
            else
                alert('user not found, please try again')
            break;
        default:
            return state;
    }

}

function AddUser(newUser, state) { 
    if(state.users.some(user => user.email === newUser.email)){
        return false;
    }
    else{
        return true;
    }

}

function RemoveUser(user, state){
    state.users.filter(item => user.email !== item.email)
    return state.users;

}

function UpdateUser(user,state, updatedUser){
    debugger
    state.users.map(item =>{ 
        if (item.password === user.password && item.email === user.email)
            return updatedUser;
        return item;
    }

    )}

function FindUser(checkUser, state){
    if(state.users && state.users.find(item => item.username === checkUser.username && item.password === checkUser.password)){
        let currentUser = state.users.map(item=> {if (item.username === checkUser.username) return item});
        console.log(currentUser[0])
        return currentUser[0];
    }

}