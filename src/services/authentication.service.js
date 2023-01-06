import axios from "axios";
import jwtDecode from "jwt-decode"

const API_URL = "http://localhost:3001/auth/";

const getRefreshTokenEndpoint = () => {
    return API_URL + 'refresh';
}

const register = async ({email, password}) => {
    const userData = {
        email: email,
        password: password
    }
    console.log('Register: ', userData)
    const response = await axios.post(API_URL + "register", userData)
    if(response.data){
        localStorage.setItem('user', JSON.stringify(response.data))
    }
    return response.data
}


const login = async ({email, password}) => {
    const userData = {
        email: email,
        password: password
    }
    const response = await axios.post(API_URL + 'signin', userData)

    if (response.data) {
        localStorage.setItem('user', JSON.stringify(response.data))
    }

    return response.data
}


const logout = async (userData) => {
    const response = axios.post(API_URL + 'logout',
        userData,
        {
            headers:{ 'Authorization': 'Bearer ' + authService.getLocalAccessToken()}
        }
    )
    localStorage.removeItem('user')
    return response.data
}

const getLocalAccessToken = () =>  {
    const user = JSON.parse(localStorage.getItem('user'));
    return user?.accessToken;
}

const getLocalRefreshToken = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    return user?.refreshToken;
}


const isLocalRefreshTokenExpired = () => {
    const refreshToken = getLocalRefreshToken()
    if(!refreshToken) return true;
    const decodedJwt = jwtDecode(refreshToken);
    console.log(decodedJwt)
    const currentTime = Date.now() / 1000;
    return currentTime > decodedJwt.exp;
}

export const authService = {
    isLocalRefreshTokenExpired,
    getRefreshTokenEndpoint,
    getLocalAccessToken,
    getLocalRefreshToken,
    register,
    logout,
    login,
}
