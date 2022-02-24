
export const ACTIONS = {
    ADD_PRODUCT: 'add',
    REMOVE_PRODUCT: 'remove',
    UPDATE_PRODUCT: 'update',
    FILTER_PRODUCT: 'filter',
    SORT_PRODUCT: 'sort',
}


export const ProductReducer = (state, action) =>{
    switch (action.type) {
        case ACTIONS.ADD_PRODUCT:
            console.log(action.newProduct)
            localStorage.setItem('products', JSON.stringify([...state.all, {...action.newProduct}]));
            return { ...state, all: [...state.all, {...action.newProduct}] }
           

        break;

        case ACTIONS.REMOVE_PRODUCT:

        break;

        case ACTIONS.UPDATE_PRODUCT:
      

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

function RemoveProduct(user, state){
  

}

function UpdateProduct(user,state, updatedUser){

  }


