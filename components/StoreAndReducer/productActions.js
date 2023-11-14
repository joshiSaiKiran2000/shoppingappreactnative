// actions.js
import axios from 'axios';

export const fetchProducts = () => async (dispatch) => {
  try {
    const response = await axios.get('https://fakestoreapi.com/products');

    console.log('Response:', response.data);
    dispatch({ type: 'FETCH_SUCCESS', payload: response.data });
  } catch (error) {
    dispatch({ type: 'FETCH_FAILURE', payload: true});
  }
};


// actions.js
export const addToCart = (product) => {
    return { type: 'ADD_TO_CART', payload: product };
  };
  
  export const removeFromCart = (productId) => {
    return { type: 'REMOVE_FROM_CART', payload: productId };
  };
