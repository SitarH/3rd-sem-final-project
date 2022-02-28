import React from 'react';
import {useEffect, useState} from 'react';
import UpdateProduct from '../UpdateProduct/UpdateProduct'


function ProductInAdmin({data, remove}) {

  const [showUpdateForm, setUpdateForm] = useState(false)

useEffect(() => {
console.log(data)
}, [])

const ToggleUpdate = (event) => {
  event.preventDefault();
  setUpdateForm(!showUpdateForm);
  console.log(showUpdateForm)
}

  return (
    <>
    <tr className="productDetails">
       <td>
         <img width="50px" height="50px" src={data.img[0]} />
       </td>
       <td>{data.productName}</td>
       <td>{data.serialNum}</td>
       <td>{data.price}$</td>
       <td>{data.category}</td>
       <td><button className="btn" onClick={()=>{remove()}}>Delete product</button></td>
       <td><button className="btn" onClick={ToggleUpdate}>Update product</button></td>
     </tr>
      <tr>
      <td colSpan={8}>
        {showUpdateForm ? <UpdateProduct CurrentProduct={data} /> : null}
      </td>
    </tr>
    </>
  )
}

export default ProductInAdmin