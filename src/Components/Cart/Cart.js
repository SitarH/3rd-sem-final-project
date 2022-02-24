import React from 'react';
import ProductList from '../ProductList/ProductList';
import {useState, useEffect} from 'react';
import './Cart.css';

function Cart() {

const [cart, setCart] = useState([])

const [totalPrice, setTotalPrice] = useState(0)

useEffect(() => {
  InsertToCart()
  setTotalPrice(cart.map(i => i+=i.price))
}, [])

const InsertToCart = () =>{
  let cartP = JSON.parse(localStorage.getItem('cart'));
  console.log(cart)
  setCart(cartP)

}



  return (
    <div className="cart flex-container flex-cols">
        <h1>YOUR CART</h1>
        {cart === null? <h2>CART IS EMPTY</h2>: <ProductList data={cart} />}
       <p>Total:{totalPrice}</p>
        <button className="btn">CHECKOUT</button>



    </div>
  )
}

export default Cart