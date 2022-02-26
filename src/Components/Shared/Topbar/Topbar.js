import React from 'react'
import { useState } from 'react'
import '../../../Layouts/MainLayout.css'
import AccountPopUp from '../AccountPopUp/AccountPopUp';
import {Link} from 'react-router-dom';

function Topbar() {

const [showPopup, setshowPopUp] = useState(false);

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
            <a className="icon account" onMouseOver={showPopup? ClosePopUp: OpenPopUp}>Account</a>
            <div className="icon"><Link to='/cart'>Cart</Link></div>
            </div>
        </div>
            <div className="dropdown">{showPopup ? <AccountPopUp/> : null}</div>
            </div>
    )
}

export default Topbar
