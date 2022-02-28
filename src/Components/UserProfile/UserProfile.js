import React from 'react';
import './UserProfile.css';
import {useState, useContext, useEffect} from 'react';
import {UserContext} from '../../Context/UserContext';
import { Link } from 'react-router-dom';
import {ACTIONS as USER_ACTIONS} from '../../Reducer/UserReducer';
import UpdateUser from '../UpdateUser/UpdateUser';
import {useNavigate} from 'react-router-dom';



function UserProfile() {

  const route = useNavigate();

  const {state, dispatch} = useContext(UserContext);

  const [currentUser, setCurrentUser] = useState(sessionStorage.getItem('currentUser'));
  const [showUpdate, setShowUpdate] = useState(false);

  
  useEffect(() => {
    BringUser()
 
  }, [sessionStorage.getItem('currentUser')])


  const BringUser = () =>{
    const user = JSON.parse(sessionStorage.getItem('currentUser'));
    if (user != null){
    setCurrentUser(user)

    }
    
  }


  const ToggleUpdate = (event) =>{
    console.log(state.users);
    event.preventDefault();
    setShowUpdate(!showUpdate);
  }

  const GotoGame = () =>{
    

  }


  const LogOut = () => {
    sessionStorage.clear();
    route('/login')

  }

  return(
   <div>
 <form className="login flex-container flex-cols">
   <img src={currentUser.image} width="75px" height="75px"></img>
    <h1>Hello, {currentUser.fname} </h1>
   <label>{currentUser.email}</label>
   <label>{currentUser.city}, {currentUser.street}</label>
   <label>{new Date(currentUser.dateOfBirth).getDate()}/{new Date(currentUser.dateOfBirth).getMonth()}/{new Date(currentUser.dateOfBirth).getFullYear()}</label>
   <div className="btns flex-container">
   <button className="btn use" onClick={ToggleUpdate}>Update Details</button>
   <button className="btn use" onClick={GotoGame}>Game</button>
   <button className="btn use" onClick={LogOut}>Log Out</button>
   </div>
 </form>

  
 {showUpdate?<UpdateUser Cuser={currentUser}/>: null}
 </div>
  );
}

export default UserProfile;
