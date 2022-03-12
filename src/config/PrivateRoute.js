import React from 'react';
import { Redi, Redirect, RediRedirect } from 'react-router-dom';
import { useAuth } from './Auth';

export const PrivateRoute = ({ children }) => {
	const { authToken } = useAuth();

	return authToken ? children : <Redirect to="/" />;
};

export const RestrictedRoute = ({ children }) => {
	const { authToken } = useAuth();

	return authToken ? <Redirect to={-1} /> : children;
};
