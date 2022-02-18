import React from 'react'
import {Routes, Route} from 'react-router-dom';
import Home from '../Pages/Home/Home';
import Products from '../Pages/Products/Products';
import Snowboard from '../Pages/Snowboard/Snowboard';
import Ski from '../Pages/Ski/Ski';
import Lifestyle from '../Pages/Lifestyle/Lifestyle';
import Login from '../Components/Login/Login';
import Register from '../Components/Register/Register';
import UserContextProvider from '../Context/UserContext';
import UserProfile from '../Components/UserProfile/UserProfile';
import Admin from '../Pages/Admin/Admin';
import UpdateUser from '../Components/UpdateUser/UpdateUser';
import ProductContextProvider from '../Context/ProductContext';

function Navigation() {
    return (
      
        <Routes>
            <Route path="/" element={<ProductContextProvider><Home/></ProductContextProvider>}></Route>
            <Route path="/products" element={<ProductContextProvider><Products/></ProductContextProvider>}></Route>
            <Route path="/snowboard" element={<Snowboard/>}></Route>
            <Route path="/ski" element={<Ski/>}></Route>
            <Route path="/lifestyle" element={<Lifestyle/>}></Route>
            <Route path="/login" element={<UserContextProvider><Login/></UserContextProvider>}></Route>
            <Route path="/register" element={<UserContextProvider><Register/></UserContextProvider>}></Route>
            <Route path="/userProfile" element={<UserContextProvider><UserProfile/></UserContextProvider>}></Route>
            <Route path="/admin" element={<ProductContextProvider><UserContextProvider><Admin/></UserContextProvider></ProductContextProvider>}></Route>
            <Route path="/updateuser" element={<UserContextProvider><UpdateUser/></UserContextProvider>}></Route>
        </Routes>
      
    )
}

export default Navigation
