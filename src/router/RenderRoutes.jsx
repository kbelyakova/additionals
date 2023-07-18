import React from 'react';
import { useRoutes } from 'react-router-dom';
import routes from './routes';

const RenderRoutes = () => {
  const routesConfig = useRoutes(routes);

  return (
    <div>{ routesConfig }</div>
  );
};

export default RenderRoutes;
