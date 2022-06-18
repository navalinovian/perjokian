import React, { useEffect } from "react";
import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "./useAuth";

const RequireAuth = ({ allowedRoles }) => {
    const { auth } = useAuth();
    const location = useLocation();

    return (
        (auth?.user?.roleId === allowedRoles)?
        <Outlet />
        : auth?.user ?
        <Navigate to="/" state={{ from: location }} replace />
        : <Navigate to="/login" state={{ from: location }} replace />
    );
}

export default RequireAuth;