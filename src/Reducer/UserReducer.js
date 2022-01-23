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
           let verifyUser = AddUser(action.user, state);
           if (verifyUser)
                return {users: [...state.users, action.user]}
            else
                alert('email already exists, please try again')
            break;
        case ACTIONS.REMOVE_USER:

            break;
        case ACTIONS.UPDATE_USER:

            break;
        case ACTIONS.FIND_USER:

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

function RemoveUser(user){

}

function UpdateUser(user){

}

function FindUser(user){

}