import {  createSlice } from "@reduxjs/toolkit";
const initialState ={
    cartItems:[]
}

const accountSlice = createSlice(
    
   { name:'cart',
    initialState,
    reducers:{
        addToCart:(state, action) => {
            const item = action.payload;
            state.cartItems.push(item);
          

        }
    }

}
)



export const {addToCart} = accountSlice.actions;

export default accountSlice.reducer;