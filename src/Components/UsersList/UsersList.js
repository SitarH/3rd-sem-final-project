import React from 'react'
import User from './User/User';
import {useState, useContext, useEffect} from 'react';
import {UserContext} from '../../Context/UserContext';

function UsersList() {

  const {state} = useContext(UserContext);
  const [usersList, setUsersList] = useState([])

    useEffect(() => {
      let list = JSON.parse(localStorage.getItem('users'))
      console.log(list)
      setUsersList(list)
    }, [])


  return (
    <table>
      <thead>
        <tr>
        <td>User Name</td>
        <td>Full Name</td>
        <td>Date of Birth</td>
        <td>Address</td>
        <td>Email</td>
        </tr>
        {usersList.map((item, index) =>(<User key={index} data={item} />))}
        </thead>  
    </table>
  )
}

export default UsersList