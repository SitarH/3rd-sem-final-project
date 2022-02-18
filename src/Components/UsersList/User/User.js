import React from 'react';
import {useState, useContext, useEffect} from 'react';
import {UserContext} from '../../../Context/UserContext'
import {ACTIONS as USER_ACTIONS} from '../../../Reducer/UserReducer';

function User({data}) {

  const {state, dispatch} = useContext(UserContext);

  const DeleteUser = () =>{
    //dispatch({type: USER_ACTIONS.REMOVE_USER , user})

  }

  return (
    <tbody>
       <tr className="userDetails">
         
           <td>{data.user.username}</td>
           <td>{data.user.fname} {data.lname}</td>
           <td>{data.user.dateOfBirth}</td>
           <td>{data.user.email}</td>
           <button onClick={DeleteUser}>Delete User</button>
          <button>Edit User</button>
       </tr>
       
       </tbody>

   
  )
}

export default User