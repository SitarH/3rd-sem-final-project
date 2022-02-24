import React from 'react';
import {useState, useContext} from 'react';
import {ProductContext} from '../../Context/ProductContext';
import {ACTIONS as PRODUCT_ACTIONS} from '../../Reducer/ProductReducer';

function AddProduct() {

const {state, dispatch} = useContext(ProductContext);

const [newProduct, setNewProduct] = useState({
                productName: '' ,
                serialNum: '' ,
                img: '' ,
                price: 0 ,
                description: '' ,
                category: '',
})

const UploadImage = async (event) =>{
    const files = event.target.files
    const data = new FormData();
    data.append('file', files[0])
    data.append('upload_preset', 'final_3rd_sem')
    const res = await fetch ('https://api.cloudinary.com/v1_1/dupaj3sj2/image/upload',
    {
        method: 'POST',
        body: data
    }
    )
    const file = await res.json()
    console.log(file.secure_url)
    setNewProduct({...newProduct,img: file.secure_url})
}

const AddProduct = (event)=>{
    event.preventDefault()
    console.log(newProduct)
    dispatch({type: PRODUCT_ACTIONS.ADD_PRODUCT , newProduct});
    console.log(state.all);




}

  return (
    <form onSubmit={AddProduct}>
        <div className="input-group flex-cols">
       
        <input placeholder="Serial Number" type="text" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z])+" required={true} value={newProduct.serialNum} onChange={(event) =>  setNewProduct({...newProduct, serialNum: event.target.value})}></input>

        <input placeholder="Product Name" type="text" pattern="(?=.*[a-z])(?=.*[A-Z])+" required={true} value={newProduct.productName} onChange={(event) =>  setNewProduct({...newProduct, productName: event.target.value})}></input>

        <input placeholder="Price" type="number" pattern=" 0+\.[0-9]*[1-9][0-9]*$" required={true} value={newProduct.price} onChange={(event) =>  setNewProduct({...newProduct, price: event.target.value})}></input>
  
        <input type="file" name="file" onChange={UploadImage}></input>
      
        <textarea name="des" placeholder="Description" type="text" pattern="(?=.*[a-z])(?=.*[A-Z])+" required={true} value={newProduct.description} onChange={(event) =>  setNewProduct({...newProduct, description: event.target.value})}/>

        <select name="category" required={true} value={newProduct.category} onChange={(event) =>  setNewProduct({...newProduct, category: event.target.value})}>
            <option value="disable" disabled selected hidden>Choose Category</option>
            <option value="ski">Ski</option>
            <option value="snowboard">Snowboard</option>
            <option value="lifestyle">Lifestyle</option>
        </select>
        {newProduct.productName && newProduct.serialNum && newProduct.price && newProduct.img && newProduct.description && newProduct.category ? <button className="btn">Submit</button> : <button disabled={true}>Submit</button>}
        </div>
    </form>
  )
}

export default AddProduct