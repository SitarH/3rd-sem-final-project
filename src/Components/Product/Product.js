import React from 'react';
import {useState, useContext, useEffect} from 'react';
import {ProductContext} from '../../Context/ProductContext';
import './Product.css';
import { useNavigate } from 'react-router-dom';



function Product({data}) {

    const {state, dispatch} = useContext(ProductContext);

    const route = useNavigate()

    const GoToProductPage = () =>{

      sessionStorage.setItem('product', JSON.stringify(data));
      route('/productpage')


    }


  return (
    <div className="product flex-container flex-cols">
        <img className="Pimg" src={data.img[0]}></img>
        <h3>{data.productName}</h3>
        <p className="serialN">{data.serialNum}</p>
        <p className="price">{data.price}$</p>
        <p height="52px">{data.description}</p>
        <p className="category">{data.category}</p>
        <button className="btn s" onClick={GoToProductPage}>Shop Now</button>
    </div>



    
  )
}

export default Product