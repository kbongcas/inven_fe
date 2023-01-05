import { configureStore } from "@reduxjs/toolkit";
import authReducer  from "../slices/authSlice";
import itemsReducer from "../slices/itemsSlice"
import containersReducer from '../slices/containersSlice'
import itemsInContainerReducer from '../slices/itemsInContainerSlice'

export const store = configureStore({
    reducer: {
        auth: authReducer,
        items: itemsReducer,
        itemsInContainer: itemsInContainerReducer,
        containers:  containersReducer,
    }
})