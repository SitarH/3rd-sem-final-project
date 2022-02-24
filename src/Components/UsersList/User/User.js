import React from 'react';
import { useState, useContext, useEffect } from 'react';
import { UserContext } from '../../../Context/UserContext'
import { ACTIONS as USER_ACTIONS } from '../../../Reducer/UserReducer';
import './UserList.css';
import UpdateUser from '../../UpdateUser/UpdateUser';
import { Table } from 'react-bootstrap';

function User({ data }) {

  const { state, dispatch } = useContext(UserContext);

  const [showUpdateForm, setUpdateForm] = useState(false)

  const DeleteUser = () => {
    dispatch({ type: USER_ACTIONS.REMOVE_USER, data })

  }

  const ToggleUpdate = (event) => {
    event.preventDefault();
    setUpdateForm(!showUpdateForm);
    console.log(showUpdateForm)
  }


  return (
    <>
      <tr className="userDetails">
        <td>
          <img width="50px" height="50px" src={data.image} />
        </td>
        <td>{data.username}</td>
        <td>{data.fname} {data.lname}</td>
        <td>{new Date(data.dateOfBirth).getDate()}/{new Date(data.dateOfBirth).getMonth()}/{new Date(data.dateOfBirth).getFullYear()}</td>
        <td>{data.city}</td>
        <td>{data.email}</td>
        <td><button className="btn" onClick={DeleteUser}>Delete User</button></td>
        <td><button className="btn" onClick={ToggleUpdate}>Update User</button></td>
      </tr>
      <tr>
        <td colSpan={8}>
          {showUpdateForm ? <UpdateUser Cuser={data} /> : null}
        </td>
      </tr>
    </>

  )
}

export default User