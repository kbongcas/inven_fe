import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import {itemsService} from "../services/items.service";

const initialValue = {
    itemsInContainer: [],
    isLoading: false,
    message: ''
}

export const getAllItemsInContainer = createAsyncThunk('items/getAllItemsInContainer', async (containerId , thunkAPI) => {
    const response = await itemsService.getAllItemsInContainer(containerId)
    return response.data;
})

export const addItemIntoContainer = createAsyncThunk('items/addItemIntoContainer', async ({itemId, containerId} , thunkAPI) => {
    const response = await itemsService.addItemIntoContainer(itemId,containerId)
    return response.data;
})

export const deleteItemFromContainer = createAsyncThunk('items/deleteItemFromContainer', async ({itemId, containerId} , thunkAPI) => {
    const response = await itemsService.deleteItemFromContainer(itemId,containerId)
    return response.data;
})

export const moveItemInContainer = createAsyncThunk('items/moveItemInContainer', async ({item, newContainerId} , thunkAPI) => {
    const currentContainer = item.containerId;
    const updatedItem = {...item, containerId: newContainerId }
    const response = await itemsService.updateItemInContainer(item.id, currentContainer, updatedItem)
    return response.data;
})

export const updateItemInContainer = createAsyncThunk('items/updateItemInContainer', async (item , thunkAPI) => {
    const response = await itemsService.updateItemInContainer(item.id, item.containerId, item)
    return response.data;
})

export const itemsInContainerSlice = createSlice({
    name: "itemsInContainer",
    initialState: initialValue,
    reducers: {
        reset: (state) => {
            state.isLoading = false;
            state.message = ''
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getAllItemsInContainer.pending, (state) =>{
                state.isLoading = true;
            })
            .addCase(getAllItemsInContainer.fulfilled, (state, action) =>{
                state.isLoading = false;
                state.itemsInContainer = action.payload
                if (!state.itemsInContainer) state.itemsInContainer = [];
            })
            .addCase(getAllItemsInContainer.rejected, (state, action) =>{
                state.isLoading = false;
                state.message = action.payload
            })
            .addCase(addItemIntoContainer.pending, (state) =>{
                state.isLoading = true;
            })
            .addCase(addItemIntoContainer.fulfilled, (state, action) =>{
                state.isLoading = false;
                state.itemsInContainer = [...state.itemsInContainer, action.payload]
            })
            .addCase(addItemIntoContainer.rejected, (state, action) =>{
                state.isLoading = false;
                state.message = action.payload
            })
            .addCase(deleteItemFromContainer.fulfilled, (state, action) =>{
                state.itemsInContainer = state.itemsInContainer.filter((item) => item.id !== Number(action.payload.id))
            })
            .addCase(moveItemInContainer.fulfilled, (state, action) =>{
                state.itemsInContainer = state.itemsInContainer.filter((item) => item.id !== Number(action.payload.id))
            })
            .addCase(updateItemInContainer.pending, (state, action) =>{
                state.isLoading = true;
            })
            .addCase(updateItemInContainer.fulfilled, (state, action) =>{
                state.isLoading = false;
                state.itemsInContainer = state.itemsInContainer.map( (item) => {
                    if(item.id === Number(action.payload.id)){
                        return action.payload;
                    }
                    return item
                })
            })
            .addCase(updateItemInContainer.rejected, (state, action) =>{
                state.isLoading = false;
                state.message = action.payload
            })
    }
});

export const { reset } = itemsInContainerSlice.actions;
export default itemsInContainerSlice.reducer