import React from 'react'
import CartItem from '../CartItem/CartItem';
import {Table} from 'react-bootstrap';
import {useState, useEffect} from 'react';

function CartList() {

    const [cartList, setCartList] = useState([])

    const [totalPrice, setTotalPrice] = useState()

    useEffect(() => {
      let cart = JSON.parse(localStorage.getItem('cart'))
        setCartList(cart)
    }, [localStorage.getItem('cart')])

    useEffect(() => {
        calculateTotal()

    }, [totalPrice])

    const calculateTotal = () => {
        let price=0
        cartList.map((item) => price = price + (item.price))
        setTotalPrice(price) 
      }

  return (
    <Table>
      <thead>
        <tr>
        <th>Image</th>
        <th>Product Name</th>
        <th>Price</th>
        <th>Quantity</th>
        </tr>
        </thead>
        <tbody>
        {cartList === null || cartList.length === 0? <h1>Empty Cart</h1>: cartList.map((item, index) =>(<CartItem key={index} data={item} />))}
        </tbody>
        <h3>Total: {totalPrice}$</h3>
         
    </Table>
  )
}

export default CartList