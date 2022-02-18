import React from 'react';
import './Admin.css';
import UsersList from '../../Components/UsersList/UsersList';
import {useState} from 'react';
import AddProduct from '../../Components/AddProduct/AddProduct';

function Admin() {

    const [showAddProduct, setShowAddProduct] = useState(false)

    const ToggleAdd = (event) =>{
        event.preventDefault();
        setShowAddProduct(!showAddProduct);
      }
    


  return (
        <div className="admin flex-container flex-cols">

            <h1>Hello, Admin</h1>
            <UsersList/>
            <button onClick={ToggleAdd}>Add a Product</button>
            {showAddProduct? <AddProduct/> : null}


        </div>
    
    
    
    
    
    
    
    
    );
}

export default Admin;
