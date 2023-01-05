import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import {itemsService} from "../services/items.service";

const initialValue = {
    items: [],
    isLoading: false,
    message: ''
}

export const getAllItems = createAsyncThunk('items/getAllItems', async (_, thunkAPI) => {
    const response = await itemsService.getAllItems()
    return response.data;
    
})

export const deleteItem = createAsyncThunk('items/deleteItem', async (itemId, thunkAPI) => {
    const response = await itemsService.deleteItem(itemId)
    return response.data;

})

export const createItem = createAsyncThunk('items/createItem', async (item, thunkAPI) => {
    const response = await itemsService.createItem(item)
    return response.data;
})

export const updateItem = createAsyncThunk('items/updateItem', async ({itemId, item} , thunkAPI) => {
    const response = await itemsService.updateItem(itemId, item)
    return response.data;
})

export const itemsSlice = createSlice({
    name: "items",
    initialState: initialValue,
    reducers: {
        reset: (state) => {
            state.isLoading = false;
            state.message = ''
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getAllItems.pending, (state) =>{
                state.isLoading = true;
            })
            .addCase(getAllItems.fulfilled, (state, action) =>{
                state.isLoading = false;
                state.items = action.payload
                if (!state.items) state.items = [];
            })
            .addCase(getAllItems.rejected, (state, action) =>{
                state.isLoading = false;
                state.message = action.payload
            })
            .addCase(deleteItem.fulfilled, (state, action) =>{
                state.items = state.items.filter((item) => item.id !== Number(action.payload.id))
            })
            .addCase(createItem.pending, (state) =>{
                state.isLoading = true;
            })
            .addCase(createItem.fulfilled, (state, action) =>{
                state.isLoading = false;
                state.items = [...state.items, action.payload]
            })
            .addCase(createItem.rejected, (state, action) =>{
                state.isLoading = false;
                state.message = action.payload
            })
            .addCase(updateItem.pending, (state, action) =>{
                state.isLoading = true;
            })
            .addCase(updateItem.fulfilled, (state, action) =>{
                state.isLoading = false;
                state.items = state.items.map( (item) => {
                    if(item.id === Number(action.payload.id)){
                        return action.payload;
                    }
                    return item
                })
            })
            .addCase(updateItem.rejected, (state, action) =>{
                state.isLoading = false;
                state.message = action.payload
            })

    }
});

export const { reset } = itemsSlice.actions;
export default itemsSlice.reducer