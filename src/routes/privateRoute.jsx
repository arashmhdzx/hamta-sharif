import React from 'react';
import { Navigate } from 'react-router-dom';



const PrivateRoute = ({ children }) => {
    const auth = JSON.parse(localStorage.getItem("hamta-login-token"));


    return (
        // Show the component only when the user is logged in
        // Otherwise, redirect the user to /signin page
        auth?.token ?
            children
            :
            children
            // <Navigate to="/auth/login" />

    );
};

export default PrivateRoute;