
export const ACTIONS = {
    ADD_PRODUCT: 'add',
    REMOVE_PRODUCT: 'remove',
    UPDATE_PRODUCT: 'update',
    FILTER_PRODUCT: 'filter'
}


export const ProductReducer = (state, action) =>{
    switch (action.type) {
        case ACTIONS.ADD_PRODUCT:
            console.log(action.newProduct)
            return  {
                ...state,
                all:[...state.all, action.newProduct]
            }

        break;

        case ACTIONS.REMOVE_PRODUCT:

        break;

        case ACTIONS.UPDATE_PRODUCT:
      

        break;
        case ACTIONS.FILTER_PRODUCT:
            debugger
            let sorted = filterProduct(state, action.value);
            return {
                ...state,filteredProducts: sorted
            };
        break;

        default:
            return state;
    }

}

function filterProduct(state, value){
  let sorted = state.all.filter(item => value === item.category);
   return sorted;
}

function AddProduct(newUser, state) { 
 

}

function RemoveProduct(user, state){
  

}

function UpdateProduct(user,state, updatedUser){

  }


