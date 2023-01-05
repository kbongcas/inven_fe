import Layout from "./components/shared/Layout";
import {Route, Routes} from "react-router-dom";
import NotFoundPage from "./pages/NotFoundPage";
import ItemsPage from "./pages/ItemsPage";
import ContainersPage from "./pages/ContainersPage";
import PlayersPage from "./pages/PlayersPage";
import TestPage from "./pages/TestPage";
import LoginPage from "./pages/LoginPage";
import RegistrationPage from "./pages/RegistrationPage";
import React from "react";
import ProtectedRoute from "./components/shared/ProtectedRoute";

const App = () => {
    
    return (
        <>
            <Routes>
                <Route path="/" element={<Layout />} >
                    <Route element={<ProtectedRoute />}>
                        <Route path="/items" element={<ItemsPage />} />
                        <Route path="/containers" element={<ContainersPage />} />
                        <Route path="/players" element={<PlayersPage />} />
                    </Route>
                    <Route path="/test" element={<TestPage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/register" element={<RegistrationPage />} />
                    <Route path="/*" element={<NotFoundPage />} />
                </Route>
            </Routes>
        </>
    );
}

export default App;
