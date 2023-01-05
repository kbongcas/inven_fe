import React from 'react';
import {Outlet} from "react-router-dom";
import LoginPage from "../../pages/LoginPage";
import {useSelector} from "react-redux";


const ProtectedRoutes = () => {
    const { user } = useSelector((state) => state.auth)
    
    return  user ? <Outlet /> : <LoginPage />
};

export default ProtectedRoutes;
