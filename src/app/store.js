import { configureStore } from "@reduxjs/toolkit";
import authReducer  from "../slices/authSlice";
import itemsReducer from "../slices/itemsSlice"
import containersReducer from '../slices/containersSlice'

export const store = configureStore({
    reducer: {
        auth: authReducer,
        items: itemsReducer,
        containers:  containersReducer,
    }
})