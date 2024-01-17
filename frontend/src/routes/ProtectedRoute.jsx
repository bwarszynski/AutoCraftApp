/* eslint-disable react/prop-types */
import React from 'react';
import {AuthContext} from "../context/AuthContext.jsx";
import {useContext} from "react";
import {Navigate} from "react-router-dom";

function ProtectedRoute ({children, allowedRoles}) {
    const {token, role} = useContext(AuthContext);

    const isRoleAllowed = allowedRoles.includes(role);
    const accessibleRoute = token && isRoleAllowed ? children : <Navigate to="/login" replace={true} />;

    return accessibleRoute;
}

export default ProtectedRoute;
