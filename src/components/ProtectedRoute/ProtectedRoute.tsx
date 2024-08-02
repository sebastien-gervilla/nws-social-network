import { useContext } from 'react';
import { Outlet, Navigate } from 'react-router-dom'
import { AuthContext } from '../../contexts/AuthContext';

const ProtectedRoute = () => {

    const { user } = useContext(AuthContext);

    return (
        user
            ? <Outlet />
            : <Navigate to="/login" />
    );
}

export default ProtectedRoute;