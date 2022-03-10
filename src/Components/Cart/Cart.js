import React from 'react';
import CartList from '../CartList/CartList';
import {useState, useEffect} from 'react';
import './Cart.css';

function Cart() {

  const purchase = () =>{
    alert('Purchase completed');
    localStorage.setItem('cart', null)
  }


  return (
    <div className="cart flex-container flex-cols">
        <h1>YOUR CART</h1>
        <CartList/>
        <button className="btn">CHECKOUT</button>



    </div>
  )
}

export default Cart