// authReducer.js
const initialState = {
    token: null,
    error: false,
  };
  
  const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'LOGIN_SUCCESS':
        return { ...state,  token: action.payload, error: false };
      case 'LOGIN_FAILURE':
        return { ...state,  error: action.payload };
      default:
        return state;
    }
  };
  
  export default authReducer;
  