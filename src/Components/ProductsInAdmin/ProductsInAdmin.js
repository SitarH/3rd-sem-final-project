import React from 'react';
import {useState, useContext, useEffect} from 'react';
import {ProductContext} from '../../Context/ProductContext';
import { ACTIONS as PRODUCT_ACTIONS } from '../../Reducer/ProductReducer';
import ProductInAdmin from '../ProductInAdmin/ProductInAdmin';
import {Table} from 'react-bootstrap';


function ProductList() {

const {state, dispatch} = useContext(ProductContext);

const [productList, setProductList] = useState(JSON.parse(localStorage.getItem('products')));


useEffect(() => {
 const products = JSON.parse(localStorage.getItem('products'));
 console.log(productList)
 setProductList(products)
}, [localStorage.getItem('products')])



  return (

    <Table>
    <thead>
      <tr>
      <th>Image</th>
      <th>Product Name</th>
      <th>Serial Number</th>
      <th>Price</th>
      <th>Category</th>
      </tr>
      </thead>
      <tbody>
      {productList.map((item, index) =><ProductInAdmin key={index} data={item} remove={()=>{dispatch({ type: PRODUCT_ACTIONS.REMOVE_FROM_LS, item })}}/>)}
      </tbody>
       
  </Table>
 
  )
}

export default ProductList