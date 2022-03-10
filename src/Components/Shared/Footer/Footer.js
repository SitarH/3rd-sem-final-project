import React from 'react'
import './Footer.css';
import logofooter1 from '../../../Images/logofooter1.png';


function Footer() {
  return (
    <div className="footer flex-container">
        <img className="size" src={logofooter1}></img>
        <div className="item">
                <h3>INFO</h3>
                <a>Terms&Conditions</a>
                <a>Privecy policy</a>
                <a>Returns</a>
            </div>
            <div className="item">
                <h3>SUPPORT</h3>
                <a>Size guide</a>
                <a>Track your order</a>
                <a>Giftcards</a>
            </div>
    
    
    
    </div>
  )
}

export default Footer