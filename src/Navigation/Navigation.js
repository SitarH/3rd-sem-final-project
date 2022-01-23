import React from 'react'
import {Routes, Route} from 'react-router-dom';
import Home from '../Pages/Home/Home';
import About from '../Pages/About/About';
import Snowboard from '../Pages/Snowboard/Snowboard';
import Ski from '../Pages/Ski/Ski';
import Lifestyle from '../Pages/Lifestyle/Lifestyle';
import Login from '../Components/Login/Login';
import Register from '../Components/Register/Register';
import UserContextProvider from '../Context/UserContext';

function Navigation() {
    return (
      
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/about" element={<About/>}></Route>
            <Route path="/snowboard" element={<Snowboard/>}></Route>
            <Route path="/ski" element={<Ski/>}></Route>
            <Route path="/lifestyle" element={<Lifestyle/>}></Route>
            <Route path="/login" element={<UserContextProvider><Login/></UserContextProvider>}></Route>
            <Route path="/register" element={<UserContextProvider><Register/></UserContextProvider>}></Route>
        </Routes>
      
    )
}

export default Navigation
