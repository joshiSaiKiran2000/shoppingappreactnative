import {  createSlice } from "@reduxjs/toolkit";
const initialState ={
    cartItems:[]
}

const accountSlice = createSlice(
    
   { name:'cart',
    initialState,
    reducers:{
        addToCart:(state, action) => {
          
            state.cartItems.push(action.payload);

        }
    }

}
)



export const {addToCart} = accountSlice.actions;

export default accountSlice.reducer;