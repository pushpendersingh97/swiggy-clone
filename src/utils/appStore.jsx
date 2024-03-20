import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";

export default appStore = configureStore({
    reducer: {
        cart: cartSlice
    }
})