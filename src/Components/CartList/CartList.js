import React from 'react'
import CartItem from '../CartItem/CartItem';
import {Table} from 'react-bootstrap';
import {useState, useEffect, useContext} from 'react';
import { ProductContext } from '../../Context/ProductContext'
import { ACTIONS as PRODUCT_ACTIONS } from '../../Reducer/ProductReducer';

function CartList() {

  const { state, dispatch } = useContext(ProductContext);

    const [cartList, setCartList] = useState([])

    const [totalPrice, setTotalPrice] = useState()

    const [totalQuantity, setTotalQuantity] = useState()

    useEffect(() => {
      let cart = JSON.parse(localStorage.getItem('cart'))
        setCartList(cart)
        calculateTotal(cart)
        
    }, [])

    const calculateTotal = (cart) => {
        let price=0
        cart.map((item) => price = price + (item.price* item.quantity))
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
        {cartList === null || cartList.length === 0? <h1>Empty Cart</h1>: cartList.map((item, index) =>(<CartItem key={index} data={item} calc ={calculateTotal} remove={()=>{dispatch({ type: PRODUCT_ACTIONS.REMOVE_PRODUCT, item })}}/>))}
        </tbody>
        <h3>Total: {totalPrice}$</h3>
         
    </Table>
  )
}

export default CartList