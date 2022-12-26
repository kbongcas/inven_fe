import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import {containerService} from "../services/containers.service";

const initialValue = {
    containers: [],
    isLoading: false,
    message: ''
}

export const getAllContainers = createAsyncThunk('items/getAllContainers', async (_, thunkAPI) => {
    const response = await containerService.getAllContainers();
    return response.data;

})

export const createContainer = createAsyncThunk('items/createContainer', async (container, thunkAPI) => {
    const response = await containerService.createContainer(container);
    return response.data;

})

export const deleteContainer = createAsyncThunk('items/deleteContainer', async (containerId, thunkAPI) => {
    const response = await containerService.deleteContainer(containerId)
    return response.data;

})

export const updateContainer = createAsyncThunk('items/updateContainer', async ({containerId, container} , thunkAPI) => {
    const response = await containerService.updateContainer(containerId, container)
    return response.data;
})

export const containersSlice = createSlice({
    name: "containers",
    initialState: initialValue,
    reducers: {
        reset: (state) => {
            state.isLoading = false;
            state.message = ''
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getAllContainers.pending, (state) =>{
                state.isLoading = true;
            })
            .addCase(getAllContainers.fulfilled, (state, action) =>{
                state.isLoading = false;
                state.containers = action.payload
                console.log(action.payload)
                if (!state.containers) state.containers = [];
            })
            .addCase(getAllContainers.rejected, (state, action) =>{
                state.isLoading = false;
                state.message = action.payload
                console.log(action.payload)
            })
            .addCase(createContainer.pending, (state) =>{
                state.isLoading = true;
            })
            .addCase(createContainer.fulfilled, (state, action) =>{
                state.isLoading = false;
                state.containers = [...state.containers, action.payload]
            })
            .addCase(createContainer.rejected, (state, action) =>{
                state.isLoading = false;
                state.message = action.payload
            })
            .addCase(deleteContainer.fulfilled, (state, action) =>{
                state.containers = state.containers.filter((container) => container.id !== Number(action.payload.id))
            })
            .addCase(updateContainer.pending, (state, action) =>{
                state.isLoading = true;
            })
            .addCase(updateContainer.fulfilled, (state, action) =>{
                state.isLoading = false;
                state.containers = state.containers.map( (item) => {
                    if(item.id === Number(action.payload.id)){
                        return action.payload;
                    }
                    return item
                })
            })
            .addCase(updateContainer.rejected, (state, action) =>{
                state.isLoading = false;
                state.message = action.payload
            })
    }
});

export const { reset } = containersSlice.actions;
export default containersSlice.reducer
