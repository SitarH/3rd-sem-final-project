
export const ACTIONS = {
    ADD_USER: 'add',
    REMOVE_USER: 'remove',
    UPDATE_USER: 'update',
    FIND_USER: 'find',
    LOAD_USERS: 'load'
}

export const UserReducer = (state, action) => {
    switch (action.type) {
        case ACTIONS.ADD_USER:
            let verifyUser = AddUser(action.user, state);
            if (verifyUser) {
                console.log('first', JSON.stringify([...state.users, {...action.user}]))
                localStorage.setItem('users', JSON.stringify([...state.users, {...action.user}]));
                return { ...state, users: [...state.users, {...action.user}] }
            }
            else
                alert('email already exists, please try again')

            break;
        case ACTIONS.REMOVE_USER:
            debugger
            const users = RemoveUser(action.data, state);
            localStorage.setItem('users', JSON.stringify(users));
            return {...state,
                users: users
            }
            break;
        case ACTIONS.UPDATE_USER:
            debugger
            console.log(state.users)
            console.log(action.user)
            console.log(action.Cuser)
            const updated = UpdateUser(state, action.Cuser, action.user)
            console.log(updated)
            localStorage.setItem('users', JSON.stringify(updated));
            let currentUserUpdate = JSON.parse(sessionStorage.getItem('currentUser'));
            if (currentUserUpdate != null){
                sessionStorage.setItem('currentUser', JSON.stringify(action.user));
            }
            return {...state,
                users: updated
            }

            break;
        case ACTIONS.FIND_USER:
            console.log(state.users)
            let user = FindUser(action.login, state)
            if (user != null) {
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
    console.log('newUser', newUser)
    if(state.users != null) {
    if (state.users.some(user => user.email === newUser.email)) {
        return false;
    }
    return true;
    }
    else {
        return true;
    }

}

function RemoveUser(user, state) {
    const newUsersArr = state.users.filter(item => user.email !== item.email)
    return newUsersArr;

}

function UpdateUser(state, user, updatedUser) {
   const UpdatedArr = state.users.map(item => {
        if (item.email === user.email)
            item = updatedUser;
        return item;
    }
    )
    return UpdatedArr;
    
}

function FindUser(checkUser, state) {
    if (state.users && state.users.find(item => item.username === checkUser.username && item.password === checkUser.password)) {
        let currentUser = state.users.map(item => { if (item.username === checkUser.username) return item });
        console.log(currentUser[0])
        return currentUser[0];
    }

}