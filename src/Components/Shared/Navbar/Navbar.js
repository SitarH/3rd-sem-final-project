import React from 'react'
import {Link} from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    return (
        <nav className="navbar">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/products">Products</Link></li>
                <li><Link to="/snowboard">Snowboard</Link></li>
                <li><Link to="/ski">Ski</Link></li>
                <li><Link to="/lifestyle">Lifestyle</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar
