import React from 'react'
import '../../Layouts/MainLayout.css';
import ProductList from '../../Components/ProductList/ProductList'

function Home() {
    return (
        <div className="w-100">
          <img className="w-100" src={require('../../Images/Homepage23.jpg')}/>
          <div className="w-100 flex-container flex-rows space-a">
          <img className="size400" src={require('../../Images/shop men2.png')}/>
          <img className="size400" src={require('../../Images/shop woman2.png')}/>
          </div>
          <div>
          <img className="size400" src={require('../../Images/ski men small.jpg')}/>
          <img className="size400" src={require('../../Images/snowb men small.jpg')}/>
          <img className="size400" src={require('../../Images/lifestyle men.jpg')}/>
          <img className="size400" src={require('../../Images/ski w small.jpg')}/>
          <img className="size400" src={require('../../Images/snowb w small.jpg')}/>
          <img className="size400" src={require('../../Images/lifestyle w small.jpg')}/>
         
          </div>
          <h2>BEST SELLESRS</h2>
          <ProductList/>
        </div>
    )
}

export default Home
