import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

  return isAuthenticated ? <Component {...rest} /> : <Navigate to="/authentication" />;
};

export default PrivateRoute;
