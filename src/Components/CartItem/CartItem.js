import React from 'react';
import {useState, useEffect} from'react';

function CartItem({data, remove, calc}) {


    const [quantity, setQuantity] = useState(1)

    const [total, setTotal] = useState(data.quantity*data.price)

    useEffect(() => {

      setQuantity(data.quantity)
     
    }, [])

    

    const handleQuantity = (action) =>{
        if (action == 'decrement'){
            if (quantity <= 1){
                setQuantity(1)
                data.quantity = quantity;
            }
            else{
                setQuantity(quantity-1);
                data.quantity = quantity;
                const cart = JSON.parse(localStorage.getItem('cart')); 
                cart.map((item)=> {
                  if(item.productName === data.productName)
                    item.quantity = quantity;
                  return item;
                })
                localStorage.setItem('cart', JSON.stringify(cart));
                calc(cart)
            }
        }
            
        else if (action == 'increment'){
            setQuantity(quantity+1)
            data.quantity = quantity;
            const cart = JSON.parse(localStorage.getItem('cart')); 
            cart.map((item)=> {
              if(item.productName === data.productName)
                item.quantity +=1;
              return item;
            })
            localStorage.setItem('cart', JSON.stringify(cart));
            calc(cart)
        }
    }


  return (
    <>
     <tr className="productDetails">
        <td>
          <img width="100px" height="100px" src={data.img[0]} />
        </td>
        <td>{data.productName}</td>
        <td className="quantity">{(data.price)* quantity}$</td>
        <td><span className="decrement" onClick={()=>handleQuantity('decrement')}>-</span><span className='num'>{quantity}</span><span className="increment" onClick={()=>handleQuantity('increment')}>+</span></td>
        <td><button className="btn" onClick={()=>{remove()}}>Delete product</button></td>
      </tr>
      </>
   
  )
}

export default CartItem