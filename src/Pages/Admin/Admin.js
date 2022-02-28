import React from 'react';
import './Admin.css';
import UsersList from '../../Components/UsersList/UsersList';
import {useState, useEffect} from 'react';
import AddProduct from '../../Components/AddProduct/AddProduct';
import ProductsInAdmin from '../../Components/ProductsInAdmin/ProductsInAdmin'

function Admin() {

    const [showAddProduct, setShowAddProduct] = useState(false);
    

    const ToggleAdd = (event) =>{
        event.preventDefault();
        setShowAddProduct(!showAddProduct);
      }
    

  return (
        <div className="admin flex-container flex-cols">

            <h1>Hello, Admin</h1>
            <h2>Users:</h2>
            <UsersList/>
            <h2>Products:</h2>
            <ProductsInAdmin/>
            <button className="btn" onClick={ToggleAdd}>Add a Product</button>
            {showAddProduct? <AddProduct/> : null}

        </div>
    
    );
}

export default Admin;
