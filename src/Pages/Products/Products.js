import React from 'react';
import ProductList from '../../Components/ProductList/ProductList';
import './Products.css';
import {ACTIONS as PRODUCT_ACTIONS} from '../../Reducer/ProductReducer';
import {useState, useContext, useEffect} from 'react';
import {ProductContext} from '../../Context/ProductContext';


function Products() {

    const {state, dispatch} = useContext(ProductContext);


    const Filter = (value) =>{
      debugger
      dispatch({type: PRODUCT_ACTIONS.FILTER_PRODUCT , value})
      console.log(state.filteredProducts)

    }


    return (
        <div className= "Products flex-container flex-cols">
            <h1>Products</h1>
            <select name="categories" onChange={(event) => Filter(event.target.value)}>
                <option value="Ski">Ski</option>
                <option value="Snowboard">Snowboard</option>
                <option value="Lifestyle">Lifestyle</option>
            </select>
            <select name="price">
                <option value="">Low to High</option>
                <option value="">High to Low</option>
            </select>
           <ProductList/>
        </div>
    )
}

export default Products
