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
            const isItemExist = state.cartItems.find((i) => i.id === item.id);
            if (isItemExist===undefined){
                state.cartItems.push(item);
          }
          },

          deleteFromCart: (state, action) => {
            state.cartItems = state.cartItems.filter((i) => i.id !== action.payload);
        },
    }

}
)



export const {addToCart,deleteFromCart} = accountSlice.actions;

export default accountSlice.reducer;