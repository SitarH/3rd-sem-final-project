import React from 'react'
import { createContext, useReducer, useState, useEffect } from 'react';
import { ProductReducer } from '../Reducer/ProductReducer';
import bestseller1 from '../Images/bestseller1.jpg';
import bestseller2 from '../Images/bestseller2.jpg';
import bestseller3 from '../Images/bestseller3.jpg';
import bestseller4 from '../Images/bestseller4.jpg';
import bestseller5 from '../Images/bestseller5.jpg';
import bataleondistoria from '../Images/bataleondistoria.jpg';
import montecJacket1 from '../Images/montecJacket1.jpg';
import montecJacket2 from '../Images/montecJacket2.jpg';
import dopeJacket1 from '../Images/dopeJacket1.jpg';
import dopeJacket2 from '../Images/dopeJacket2.jpg';
import burtonHoodie2 from '../Images/burtonHoodie2.jpg';
import burtonHoodie3 from '../Images/burtonHoodie3.jpg';
import distoria1 from '../Images/distoria1.jpg';
import distoria2 from '../Images/distoria2.jpg';
import goggles1 from '../Images/goggles1.jpg';
import goggles2 from '../Images/goggles2.jpg';

export const ProductContext = createContext();

export default function ProductContextProvider(props) {

    let initialState = {
        all: [
            {
                productName: "Blizzard Ski Jacket",
                serialNum: "SJM12",
                img: [bestseller1,dopeJacket1, dopeJacket2],
                price: 180,
                description: "Simplicity redefined. The Adept is a reliable zip-through jacket with all the features you need for a long day on the mountain. ",
                category: "Ski",
                bestSeller: false

            },

            {
                productName: "Roc Women's Snowboard Jacket",
                serialNum: "SJW11",
                img: [bestseller2,montecJacket1,montecJacket2],
                price: 220,
                description: "Simplicity redefined. The Adept is a reliable zip-through jacket with all the features you need for a long day on the mountain. ",
                category: "Snowboard",
                bestSeller: true

            },

            {
                productName: "Lowball Zip Sweater Black",
                serialNum: "HM10",
                img: [bestseller3,burtonHoodie2,burtonHoodie3],
                price: 100,
                description: "Simplicity redefined. The Adept is a reliable zip-through jacket with all the features you need for a long day on the mountain. ",
                category: "lifestyle",
                bestSeller: true

            },

            {

                productName: "Sight Medium Ski Goggle",
                serialNum: "GG18",
                img: [bestseller4,goggles1,goggles2],
                price: 120,
                description: "Simplicity redefined. The Adept is a reliable zip-through jacket with all the features you need for a long day on the mountain. ",
                category: "lifestyle",
                bestSeller: true

            },
            {
                productName: "Burton Mitt gloves",
                serialNum: "GB11",
                img: [bestseller5,bestseller5,bestseller5],
                price: 100,
                description: "Simplicity redefined. The Adept is a reliable zip-through jacket with all the features you need for a long day on the mountain. ",
                category: "lifestyle",
                bestSeller: true
            },
            {
                productName: "Bataleon Distoria",
                serialNum: "BD01",
                img: [bataleondistoria,distoria1,distoria2],
                price: 499,
                description: "Simplicity redefined. The Adept is a reliable zip-through jacket with all the features you need for a long day on the mountain. ",
                category: "snowboard",
                bestSeller: false
            }
        ]
        ,
        bestSellers: [
            {
                productName: "Roc Women's Snowboard Jacket",
                serialNum: "SJW11",
                img: [bestseller2,montecJacket1,montecJacket2],
                price: 220,
                description: "Simplicity redefined. The Adept is a reliable zip-through jacket with all the features you need for a long day on the mountain. ",
                category: "Snowboard",
                bestSeller: true

            },

            {
                productName: "Lowball Zip Sweater Black",
                serialNum: "HM10",
                img: [bestseller3,burtonHoodie2,burtonHoodie3],
                price: 100,
                description: "Simplicity redefined. The Adept is a reliable zip-through jacket with all the features you need for a long day on the mountain. ",
                category: "lifestyle",
                bestSeller: true

            },

            {

                productName: "Sight Medium Ski Goggle",
                serialNum: "GG18",
                img: [bestseller4,goggles1,goggles2],
                price: 120,
                description: "Simplicity redefined. The Adept is a reliable zip-through jacket with all the features you need for a long day on the mountain. ",
                category: "lifestyle",
                bestSeller: true

            }
        ],
        filteredProducts: []
    }

    useEffect(() => {
        let local_products = JSON.parse(localStorage.getItem('products'));
        console.log('local_products', local_products)
        if (local_products === null || local_products.length ===0)
            localStorage.setItem('products', JSON.stringify(initialState.all))
        else if(initialState.all.length < local_products.length){
            console.log('111', 111)
            initialState.all = local_products
            console.log('initialState.all', initialState.all)
        }
            
    }, []);


    const [state, dispatch] = useReducer(ProductReducer, initialState);


    return (
        <ProductContext.Provider value={{ state, dispatch }}>
            {props.children}
        </ProductContext.Provider>
    )
}
