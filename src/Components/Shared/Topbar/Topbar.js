import React from 'react'
import { useState } from 'react'
import '../../../Layouts/MainLayout.css'
import AccountPopUp from '../AccountPopUp/AccountPopUp'

function Topbar() {

const [showPopup, setshowPopUp] = useState(false);

   const OpenPopUp = () =>{
       let show = !showPopup;
    setshowPopUp(show);

   }
    return (
        <div className="flex-cols">
        <div className="topbar flex-container space-b align-center">
            <div>Search</div>
            <div className="right-side flex-container flex-rows">
            <a className="icon account" onMouseOver={OpenPopUp}>Login</a>
            <div className="icon">Favs</div>
            <div className="icon">Cart</div>
            </div>
        </div>
            <div className="dropdown">{showPopup ? <AccountPopUp/> : null}</div>
            </div>
    )
}

export default Topbar
