// reducers.js
const initialState = {
    products: [],
    cart: [],
    error:false
  };
  
  const productsReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_SUCCESS':
        return { ...state, products: action.payload , error:false};
      case 'FETCH_FAILURE':
        return { ...state, error: action.payload };

      case 'ADD_TO_CART':
        const item = action.payload;
        const isItemExist = state.cart.find((i) => i.id === item.id);
        if (isItemExist===undefined) {
          return { ...state, cart: [...state.cart, action.payload] };

        }

      
      case 'REMOVE_FROM_CART':
        return { ...state, cart: state.cart.filter(item => item.id !== action.payload) };
      default:
        return state;
    }
  };
  
  export default productsReducer;
  