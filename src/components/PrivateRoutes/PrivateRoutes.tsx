import { getAuth } from 'firebase/auth';
import React from 'react';
import { Outlet, useLocation, Navigate } from 'react-router-dom';
import useCurrentUser from '../../hooks/useCurrentUser';

const PrivateRoutes = () => {
  const location = useLocation();
  const { currentUser } = useCurrentUser(getAuth());
  return currentUser
    ? <Outlet />
    : <Navigate to="/login" replace state={{ from: location }} />;
};

export default PrivateRoutes;
