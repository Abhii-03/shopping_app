import { createSlice } from "@reduxjs/toolkit";



export const cartSlice = createSlice({
    name: 'cart',
    initialState:[] ,
    reducers: {
        add:(state, action) => {
            // actions.payload access input parameter here input 
            // parameter is post access from product 
            state.push(action.payload)
        },
        remove:(state, action) => {
            return state.filter((post) => post.id != action.payload)
        }
    }
});

export const {add, remove} = cartSlice.actions;
export default cartSlice.reducer;