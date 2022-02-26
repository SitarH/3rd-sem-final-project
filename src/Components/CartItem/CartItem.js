import React from 'react';
import {useState, useContext} from'react';
import { ProductContext } from '../../Context/ProductContext'
import { ACTIONS as PRODUCT_ACTIONS } from '../../Reducer/ProductReducer';

function CartItem({data}) {

    const { state, dispatch } = useContext(ProductContext);

    const [quantity, setQuantity] = useState(1)

    const handleQuantity = (action) =>{
        if (action == 'decrement'){
            if (quantity <= 1){
                setQuantity(1)
            }
            else{
                setQuantity(quantity-1) 
            }
        }
            
        if (action == 'increment')
            setQuantity(quantity+1)
    }

    const DeleteUser = () => {
        dispatch({ type: PRODUCT_ACTIONS.REMOVE_PRODUCT, data })
    
      }

  return (
    <>
     <tr className="productDetails">
        <td>
          <img width="100px" height="100px" src={data.img[0]} />
        </td>
        <td>{data.productName}</td>
        <td>{data.price}$</td>
        <td><span className="decrement" onClick={()=>handleQuantity('decrement')}>-</span><span className='num'>{quantity}</span><span className="increment" onClick={()=>handleQuantity('increment')}>+</span></td>
        <td><button className="btn" onClick={DeleteUser}>Delete product</button></td>
      </tr>
      </>
   
  )
}

export default CartItem