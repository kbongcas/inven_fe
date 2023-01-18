import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    itemsPage:{
        showItemModal: false,
        currentItemShowing: null
    },
    containerPage: {
        showItemModal: false,
        currentItemShowing: null,
        showItemsInContainer: false,
        currentContainerShowing: null,
    }
}

export const appSlice = createSlice({
    name: "app",
    initialState: initialState,
    reducers: {
        reset: (state) => {
            state.containerPage.showItemsInContainer = false;
            state.containerPage.currentContainerShowing = null;
        },
        showItemsInContainer: (state, action) => {
            state.containerPage.showItemsInContainer = action.payload.showItemsInContainer ?? state.containerPage.showItemsInContainer
            state.containerPage.currentContainerShowing = action.payload.currentContainerShowing ?? state.containerPage.currentContainerShowing
        }
    }
});

export const { reset, showItemsInContainer } = appSlice.actions;
export default appSlice.reducer
