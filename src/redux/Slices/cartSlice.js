import { createSlice } from "@reduxjs/toolkit";

// Initial state is an empty array

export const CartSlice = createSlice({
    name: "cart",
    initialState:[],
    reducers:{
        add : (state,action) => {
            state.push(action.payload);
        },
        remove : (state,action) => {
            return state.filter((items) => items.id !== action.payload);
        },
    }

});

export const {add,remove} = CartSlice.actions ;
export default CartSlice.reducer ;