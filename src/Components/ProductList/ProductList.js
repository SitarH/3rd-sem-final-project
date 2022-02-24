import React from 'react';
import {useState, useContext, useEffect} from 'react';
import {ProductContext} from '../../Context/ProductContext';
import Product from '../Product/Product';
import './ProductList.css';



function ProductList({data}) {

    const {state, dispatch} = useContext(ProductContext);

  return (
    <div className="product-list">
        {data.map((item, index) =><Product key={index} data={item}/>)}
    </div>
  )
}

export default ProductList