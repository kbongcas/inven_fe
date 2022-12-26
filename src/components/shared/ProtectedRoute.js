import React from 'react';
import {Navigate, Outlet} from "react-router-dom";
import RegistrationPage from "../../pages/RegistrationPage";
import LoginPage from "../../pages/LoginPage";
import {useSelector} from "react-redux";


const ProtectedRoutes = () => {
    const { user } = useSelector((state) => state.auth)
    
    return  user ? <Outlet /> : <LoginPage />
};

export default ProtectedRoutes;
