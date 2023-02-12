import React from 'react';
import { useRouteError } from 'react-router-dom';
import Error404 from './404';
import Error500 from './500';

const ErrorBoundary = () => {
  const error = useRouteError() as Response;

  if (error.status === 404) return <Error404 />;

  return <Error500 />;
};

export default ErrorBoundary;
