import React from 'react'
import '../../Layouts/MainLayout.css';
import ProductList from '../../Components/ProductList/ProductList';
import {useState, useContext, useEffect} from 'react';
import {ProductContext} from '../../Context/ProductContext';
import {UserContext} from '../../Context/UserContext';
import {ACTIONS as USER_ACTIONS} from '../../Reducer/UserReducer';
import './Home.css';

function Home() {

  const {state} = useContext(ProductContext);
  const {dispatch} = useContext(UserContext);

  useEffect(()=>{
    //dispatch({type:USER_ACTIONS.LOAD_USERS});
  },[]);

    return (
        <div className="w-100">
          <div className="main">
          <img className="chairlift" src={require('../../Images/chairlift.png')}/>
          <img className="w-100" src={require('../../Images/Homepage23.jpg')}/>
          </div>
          <div className="shop">
          <div className="shop-sec">
          <img className="size400" src={require('../../Images/shop men2.png')}/>
          <div className="categories">
          <img className="size400" src={require('../../Images/ski men small.jpg')}/>
          <img className="size400" src={require('../../Images/snowb men small.jpg')}/>
          <img className="size400" src={require('../../Images/lifestyle men.jpg')}/>
          </div>
          
          </div>
          <div className="shop-sec">
          <img className="size400" src={require('../../Images/shop woman2.png')}/>
          <div className="categories">
          <img className="size400" src={require('../../Images/ski w small.jpg')}/>
          <img className="size400" src={require('../../Images/snowb w small.jpg')}/>
          <img className="size400" src={require('../../Images/lifestyle w small.jpg')}/>
          </div>
          </div>
         
          </div>
          <div className="bestsellers">
          <h2>BEST SELLESRS</h2>
          <ProductList data={state.bestSellers}/>
          </div>
        </div>
    )
}

export default Home
