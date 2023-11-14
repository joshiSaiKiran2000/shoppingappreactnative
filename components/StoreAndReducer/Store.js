// store.js
import { createStore, applyMiddleware } from 'redux';
import { combineReducers } from 'redux';

import thunk from 'redux-thunk';
import productsReducer from './productReducer';
import authReducer from './authencationReducer';
const combinationreducer = combineReducers({
    authentication: authReducer,       
    productItem: productsReducer,
})
const store = createStore(combinationreducer,  applyMiddleware(thunk));

export default store;