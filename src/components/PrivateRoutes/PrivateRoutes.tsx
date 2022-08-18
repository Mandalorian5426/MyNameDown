import { getAuth } from 'firebase/auth';
import React from 'react';
import { Outlet, useLocation, Navigate } from 'react-router-dom';
import useCurrentUser from '../../hooks/useCurrentUser';
import Routes from '../../types/routes';

const PrivateRoutes = () => {
  const location = useLocation();
  const { currentUser } = useCurrentUser(getAuth());
  return currentUser
    ? <Outlet />
    : <Navigate to={Routes.ROUTE_LOGIN} replace state={{ from: location }} />;
};

export default PrivateRoutes;
