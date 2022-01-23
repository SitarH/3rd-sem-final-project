import React from 'react'
import Navbar from '../Navbar/Navbar'
import '../../../Layouts/MainLayout.css';
import {Link} from 'react-router-dom';

function Header() {
    return (
     <header className="flex-container flex-rows w-100 align-center pos-absolute">
         <div>
            <Link to="/">
          <img src={require('../../../Images/logo11.jpg')} alt="logo"/>
          </Link>
          </div>
        <div className="flex-container flex-rows">
        <Navbar/>
        </div>
    </header>
    )
}

export default Header
