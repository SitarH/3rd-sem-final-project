import React from 'react'
import { useState, useEffect} from 'react'
import '../../../Layouts/MainLayout.css'
import AccountPopUp from '../AccountPopUp/AccountPopUp';
import {Link} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Topbar() {

    const route = useNavigate();

const [showPopup, setshowPopUp] = useState(false);

const [currentUser, setcurrentUser] = useState(false)

useEffect(() => {
    const user = sessionStorage.getItem('currentUser');
    console.log(user)
    if(user != null)
        setcurrentUser(true);
 
}, [])

const goToprofile = () =>{
    route('/userProfile');
}



   const OpenPopUp = () =>{
    setshowPopUp(true);

   }

   const ClosePopUp = () =>{
    setshowPopUp(false);

   }
    return (
        <div className="flex-cols z-one">
        <div className="topbar flex-container space-b align-center">
            <div>Search</div>
            <div className="right-side flex-container flex-rows">
        {currentUser? <a className="icon account" onClick={goToprofile}>Account</a>: <a className="icon account" onMouseOver={showPopup? ClosePopUp: OpenPopUp}>Account</a>}
           
            <div className="icon"><Link to='/cart'>Cart</Link></div>
            </div>
        </div>
            <div className="dropdown">{showPopup ? <AccountPopUp/> : null}</div>
            </div>
    )
}

export default Topbar
