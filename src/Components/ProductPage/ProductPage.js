import React from 'react';
import './ProductPage.css';
import {useState, useEffect} from 'react';


function ProductPage() {

    const [productData, setProductData] = useState(JSON.parse(sessionStorage.getItem('product')))

    useEffect(() => {
      let product = JSON.parse(sessionStorage.getItem('product'))
      console.log(product)
      setProductData(product)
     
    }, [])


     const AddTocart = () =>{
      let newCart = []
		  if (localStorage.getItem('cart'))
			  newCart = JSON.parse(localStorage.getItem('cart'))
		  newCart.push(productData)
		  localStorage.setItem('cart',JSON.stringify(newCart))
      alert('Product added to cart')
    }
 

  return (

    <div>
        <div className="item">
            <div className="images">
              
            {productData.img.map((img, index) => {
        return  <img key={index} value={img} src={img}></img>  
   })}
         
            </div>
            <div className="details">
                <h1>{productData.productName}</h1>
                <h2>{productData.price}$</h2>
                <p>{productData.serialNum}</p>
                <h3>{productData.description}</h3>
                <h3 className="categoryP">{productData.category}</h3>
                <button className="btn Add" onClick={AddTocart}>Add to Cart</button>
            </div>
            





        </div>





    </div>


    
  )

}

export default ProductPage