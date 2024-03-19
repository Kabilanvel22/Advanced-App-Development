import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectUser } from '../../components/Redux/Userslice';

const PrivateRoutes = () => {
    const user = useSelector(selectUser);
    const isLoggedIn = user.email !== null;

    return isLoggedIn ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;
