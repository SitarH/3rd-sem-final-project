import React from 'react';
import './UserProfile.css';
import {useState, useContext, useEffect} from 'react';
import {UserContext} from '../../Context/UserContext';
import { Link } from 'react-router-dom';
import {ACTIONS as USER_ACTIONS} from '../../Reducer/UserReducer';
import UpdateUser from '../UpdateUser/UpdateUser';

function UserProfile() {

  const {state, dispatch} = useContext(UserContext);

  const [currentUser, setCurrentUser] = useState({});
  const [showUpdate, setShowUpdate] = useState(false);

  
  useEffect(() => {
    BringUser()
 
  }, [])


  const BringUser = () =>{
    console.log(state.users)
    const user = JSON.parse(sessionStorage.getItem('currentUser'));
    if (user != null){
    setCurrentUser(user)

    }
    
  }

  //why state resets?????

  const ToggleUpdate = (event) =>{
    console.log(state.users);
    event.preventDefault();
    setShowUpdate(!showUpdate);
  }


  const LogOut = () => {
    sessionStorage.clear();

  }

  return(
   <div>
 <form className="login flex-container flex-cols">
    <h1>Hello, {currentUser.fname} </h1>
   <label>{currentUser.email}</label>
   <label>{currentUser.city}, {currentUser.street}</label>
   <label>{currentUser.dateOfBirth}</label>
   <button onClick={ToggleUpdate}>Update Details</button>
   <button>Game</button>
   <button onClick={LogOut}><Link to="/login">LogOut</Link></button>
 </form>

  
 {showUpdate?<UpdateUser Cuser={currentUser}/>: null}
 </div>
  );
}

export default UserProfile;
