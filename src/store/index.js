import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth-slice";
import cartSlice from "./cartSlice";
import uiSlice from "./uiSlice";

const store = configureStore({
    reducer:{
        auth: authSlice.reducer,
        cart:cartSlice.reducer,
        ui: uiSlice.reducer,
    }
})

export default store;