import React from 'react';
import {useState, useContext, useEffect} from 'react';
import {ProductContext} from '../../Context/ProductContext';
import './Product.css'



function Product({data}) {


    const {state, dispatch} = useContext(ProductContext);


  return (
    <div className="product flex-container flex-cols">
        <h3>{data.productName}</h3>
        <img className="Pimg" src={data.img}></img>
        <p>{data.serialNum}</p>
        <p className="price">{data.price}$</p>
        <p>{data.description}</p>
        <p>{data.category}</p>
    </div>



    
  )
}

export default Product