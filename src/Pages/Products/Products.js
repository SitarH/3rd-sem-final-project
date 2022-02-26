import React from 'react';
import ProductList from '../../Components/ProductList/ProductList';
import './Products.css';
import {ACTIONS as PRODUCT_ACTIONS} from '../../Reducer/ProductReducer';
import {useState, useContext, useEffect} from 'react';
import {ProductContext} from '../../Context/ProductContext';


function Products() {

    const {state, dispatch} = useContext(ProductContext);

    const [filterValue, setFilterValue] = useState('disable')

    const [sortValue, setSortValue] = useState('disable')

    const [filter, setFilter] = useState([])

    const [products, setProducts] = useState([])

        useEffect(() => { //using local storage cause initialstate doesnt update
            let products = JSON.parse(localStorage.getItem('products'))
            setProducts(products)
          }, [localStorage.getItem('products')])
    


    useEffect(() => {
        if (filterValue != 'disabled') {
            Filter(filterValue)

        }
        if (sortValue != 'disabled') {
            Sort(sortValue)
        }
        
    
    }, [filterValue, sortValue])
    


    const Filter = (value) =>{
    setFilterValue(value)
      dispatch({type: PRODUCT_ACTIONS.FILTER_PRODUCT , value})
      let Filtered = JSON.parse(localStorage.getItem('filterProducts'));
      setFilter(Filtered)

    }

    const Sort = (value) =>{
        setSortValue(value)
        dispatch({type: PRODUCT_ACTIONS.SORT_PRODUCT , value})
        let Sorted = JSON.parse(localStorage.getItem('filterProducts'));
        setFilter(Sorted)


    }


    return (
        <div className= "Products flex-container flex-cols">
            <h1>Products</h1>
            <div className= "sortFilter">
                <div className= "filter">
            <select name="categories" onChange={(event) => Filter(event.target.value)}>
            <option value="disable" >Choose Filter</option>
                <option value="Ski">Ski</option>
                <option value="Snowboard">Snowboard</option>
                <option value="lifestyle">Lifestyle</option>
                <option value="disable">All</option>
            </select>
            </div>
            <div className="sort">
            <select name="price" onChange={(event) => Sort(event.target.value)}>
            <option value="disable" >Choose Price Sort</option>
                <option value="low">Low to High</option>
                <option value="high">High to Low</option>
            </select>
            </div>
            </div>
            {filterValue === 'disable' && sortValue === 'disable'? <ProductList data={products}/> : <ProductList data={filter}/>}
           
        </div>
    )
}

export default Products
