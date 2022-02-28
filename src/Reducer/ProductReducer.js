
export const ACTIONS = {
    ADD_PRODUCT: 'add',
    REMOVE_PRODUCT: 'remove',
    UPDATE_PRODUCT: 'update',
    FILTER_PRODUCT: 'filter',
    SORT_PRODUCT: 'sort',
    REMOVE_FROM_LS: 'removels'
}


export const ProductReducer = (state, action) =>{
    switch (action.type) {
        case ACTIONS.ADD_PRODUCT:
            console.log(action.newProduct)
            localStorage.setItem('products', JSON.stringify([...state.all, {...action.newProduct}]));
            return { ...state, all: [...state.all, {...action.newProduct}] }
           

        break;
        case ACTIONS.REMOVE_FROM_LS:
            let products = JSON.parse(localStorage.getItem('products'))
            const updatedProd = RemoveProduct(action.item, products);
            localStorage.setItem('products', JSON.stringify(updatedProd));
            return updatedProd;
            break;

        case ACTIONS.REMOVE_PRODUCT:
            let cart = JSON.parse(localStorage.getItem('cart'))
            const updated = RemoveProduct(action.item, cart);
            localStorage.setItem('cart', JSON.stringify(updated));
            return updated;
        break;

        case ACTIONS.UPDATE_PRODUCT:
            let productslist = JSON.parse(localStorage.getItem('products'))
            const updatedP = UpdateProduct(productslist, action.CurrentProduct, action.newProduct)
            localStorage.setItem('products', JSON.stringify(updatedP));
            return updatedP
        break;
        case ACTIONS.FILTER_PRODUCT:
            let sorted = filterProduct(state, action.value);
            localStorage.setItem('filterProducts', JSON.stringify(sorted));
            return  {
                ...state,
                filteredProducts:sorted
            }
        break;
        case ACTIONS.SORT_PRODUCT:
            let sortedPrice = SortProduct(state, action.value);
            localStorage.setItem('filterProducts', JSON.stringify(sortedPrice));
            return  {
                ...state,
                filteredProducts:sortedPrice
            }
            break;

        default:
            return state;
    }

}

function filterProduct(state, value){
  let sorted = state.all.filter(item => value === item.category);
   return sorted;
}

function SortProduct(state, value) { 
    let sortArr;
    if(value == 'low'){
        sortArr = state.all.sort((a, b) => a.price - b.price);

    }
    if(value == 'high'){
        sortArr = state.all.sort((a, b) => b.price-a.price);

    }
    return sortArr;
 

}

function AddProduct(newUser, state) { 
 

}

function RemoveProduct(product, cart){
    const newProductsArr = cart.filter(item => product.productName !== item.productName)
    return newProductsArr;
  

}

function UpdateProduct(Productlist, currentP, updatedP) {
    const UpdatedArr = Productlist.map(item => {
         if (item.productName === currentP.productName) 
             item = updatedP;
         return item;
     }
     )
     return UpdatedArr;
     
 }


