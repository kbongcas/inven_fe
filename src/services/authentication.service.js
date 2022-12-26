import axios, {isAxiosError} from "axios";

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


const logout = () => {
    localStorage.removeItem('user')
}

const getLocalAccessToken = () =>  {
    const user = JSON.parse(localStorage.getItem('user'));
    return user?.accessToken;
}

const getLocalRefreshToken = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    return user?.refreshToken;
}


export const authService = {
    getRefreshTokenEndpoint,
    getLocalAccessToken,
    getLocalRefreshToken,
    register,
    logout,
    login,
}
