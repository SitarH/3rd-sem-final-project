import React from 'react'
import {createContext, useReducer, useState} from 'react';
import { ProductReducer } from '../Reducer/ProductReducer';
import bestseller1 from '../Images/bestseller1.jpg';
import bestseller2 from '../Images/bestseller2.jpg';
import bestseller3 from '../Images/bestseller3.jpg';
import bestseller4 from '../Images/bestseller4.jpg';

export const ProductContext = createContext();

export default function ProductContextProvider(props) {

   let initialState = {
        all: [
            {
                productName: "Blizzard Ski Jacket" ,
                serialNum: "SJM12" ,
                img: bestseller1,
                price: 180 ,
                description: "Simplicity redefined. The Adept is a reliable zip-through jacket with all the features you need for a long day on the mountain. " ,
                category: "Ski",
                bestSeller: false
        
            }, 
        
            {
                productName: "Roc Women's Snowboard Jacket" ,
                serialNum: "SJW11" ,
                img: bestseller2,
                price: 220 ,
                description: "Simplicity redefined. The Adept is a reliable zip-through jacket with all the features you need for a long day on the mountain. " ,
                category: "Snowboard",
                bestSeller: true
        
            }, 
        
            {
                productName: "Lowball Zip Sweater Black" ,
                serialNum: "HM10" ,
                img: bestseller3 ,
                price: 100 ,
                description: "Simplicity redefined. The Adept is a reliable zip-through jacket with all the features you need for a long day on the mountain. " ,
                category: "lifestyle",
                bestSeller: true
        
            },
        
            {
        
                productName: "Sight Medium Ski Goggle" ,
                serialNum: "GG18" ,
                img: bestseller4 ,
                price: 120 ,
                description: "Simplicity redefined. The Adept is a reliable zip-through jacket with all the features you need for a long day on the mountain. " ,
                category: "lifestyle",
                bestSeller: true
        
            }
        ]
        ,
        bestSellers: [],
        filteredProducts: []
    }
    

    const [state, dispatch] = useReducer(ProductReducer, initialState);


    return (
        <ProductContext.Provider value={{state, dispatch}}>
            {props.children}
        </ProductContext.Provider>
    )
}
