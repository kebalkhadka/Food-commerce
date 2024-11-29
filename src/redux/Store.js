import { configureStore } from "@reduxjs/toolkit";
import CartSlice from './slices/CartSlice'
import CategorySlice from './slices/CategorySlice'
import  SearchSlice  from "./slices/SearchSlice,jsx";
const Store = configureStore(
    {
        reducer:{
            cart: CartSlice,
            category: CategorySlice,
            search: SearchSlice,
        },
    },
);

export default Store;