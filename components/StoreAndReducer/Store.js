// store.js
import { createStore, applyMiddleware } from 'redux';
import { combineReducers } from 'redux';

import thunk from 'redux-thunk';
import productsReducer from './productReducer';
import authReducer from './authencationReducer';

//combining reducers

const combinationreducer = combineReducers({
    authentication: authReducer,       
    productItem: productsReducer,
})

//store created
const store = createStore(combinationreducer,  applyMiddleware(thunk));

export default store;