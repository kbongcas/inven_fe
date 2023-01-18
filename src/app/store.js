import { configureStore } from "@reduxjs/toolkit";
import authReducer  from "../slices/authSlice";
import itemsReducer from "../slices/itemsSlice"
import containersReducer from '../slices/containersSlice'
import itemsInContainerReducer from '../slices/itemsInContainerSlice'
import appReducer from '../slices/appSlice'

export const store = configureStore({
    reducer: {
        app: appReducer,
        auth: authReducer,
        items: itemsReducer,
        itemsInContainer: itemsInContainerReducer,
        containers:  containersReducer,
    }
})