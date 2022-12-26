import axios from 'axios';
import createAuthRefreshInterceptor from 'axios-auth-refresh';
import {authService} from "./authentication.service";
export const ITEM_API_URL = "http://localhost:3001/items";


// Function that will be called to refresh authorization
const refreshAuthLogic = (failedRequest) =>
    axios.post(authService.getRefreshTokenEndpoint(),
        null,
        {
            headers:{ 'Authorization': 'Bearer ' + authService.getLocalRefreshToken()}
        }
    ).then((tokenRefreshResponse) => {
        if(tokenRefreshResponse.data.accessToken && tokenRefreshResponse.data.refreshToken){
            localStorage.setItem('user', JSON.stringify(tokenRefreshResponse.data));
        }
        failedRequest.response.config.headers['Authorization'] = 'Bearer ' + tokenRefreshResponse.data.accessToken;
        return Promise.resolve();
    });

// Instantiate the interceptor
createAuthRefreshInterceptor(axios, refreshAuthLogic);

const getAllItems = async () => {
    return axios.get(ITEM_API_URL,
        {
            headers:{ 'Authorization': 'Bearer ' + authService.getLocalAccessToken()}
        }
    );
}

const deleteItem = async (itemId) => {
    return axios.delete(ITEM_API_URL + `/${itemId}`,
        {
            headers:{ 'Authorization': 'Bearer ' + authService.getLocalAccessToken()}
        }
    );
}

const createItem = async (item) => {
    return axios.post(ITEM_API_URL,
        item,
        {
            headers:{ 'Authorization': 'Bearer ' + authService.getLocalAccessToken()}
        }
    );
}

const updateItem = async (itemId, item) => {
    return axios.patch(ITEM_API_URL + `/${itemId}`,
        item,
        {
            headers:{ 'Authorization': 'Bearer ' + authService.getLocalAccessToken()}
        }
    );
}


export const itemsService = {
    updateItem,
    createItem,
    deleteItem,
    getAllItems,
    ITEM_API_URL
}