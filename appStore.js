import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice"


const appStore= configureStore({
    // it takes slices....
    reducer: {
        cart:cartReducer
    }
})

export default appStore;
