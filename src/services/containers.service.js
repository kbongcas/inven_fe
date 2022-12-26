import axios from 'axios';
import createAuthRefreshInterceptor from 'axios-auth-refresh';
import {authService} from "./authentication.service";
export const CONTAINER_API_URL = "http://localhost:3001/containers";


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

const getAllContainers= async () => {
    return axios.get(CONTAINER_API_URL,
        {
            headers:{ 'Authorization': 'Bearer ' + authService.getLocalAccessToken()}
        }
    );
}

const createContainer = async (item) => {
    return axios.post(CONTAINER_API_URL,
        item,
        {
            headers:{ 'Authorization': 'Bearer ' + authService.getLocalAccessToken()}
        }
    );
}

const deleteContainer = async (containerId) => {
    return axios.delete(CONTAINER_API_URL + `/${containerId}`,
        {
            headers:{ 'Authorization': 'Bearer ' + authService.getLocalAccessToken()}
        }
    );
}

const updateContainer = async (containerId, container) => {
    return axios.patch(CONTAINER_API_URL + `/${containerId}`,
        container,
        {
            headers:{ 'Authorization': 'Bearer ' + authService.getLocalAccessToken()}
        }
    );
}

export const containerService = {
    updateContainer,
    deleteContainer,
    createContainer,
    getAllContainers,
    CONTAINER_API_URL
}
