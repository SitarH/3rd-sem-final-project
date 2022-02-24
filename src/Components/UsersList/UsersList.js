import React from 'react'
import User from './User/User';
import {useState, useContext, useEffect} from 'react';
import {UserContext} from '../../Context/UserContext';
import {Table} from 'react-bootstrap';

function UsersList() {

  const {state} = useContext(UserContext);
  const [usersList, setUsersList] = useState([])

    useEffect(() => {
      let list = JSON.parse(localStorage.getItem('users'))
      setUsersList(list)
    }, [])


  return (
    <Table>
      <thead>
        <tr>
        <th>Image</th>
        <th>User Name</th>
        <th>Full Name</th>
        <th>Date of Birth</th>
        <th>Address</th>
        <th>Email</th>
        </tr>
        </thead>
        <tbody>
        {usersList === null || usersList.length === 0? <h1>No users</h1>: usersList.map((item, index) =>(<User key={index} data={item} />))}
        </tbody>
         
    </Table>
  )
}

export default UsersList