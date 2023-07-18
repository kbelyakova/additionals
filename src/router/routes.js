import React from 'react';
import Main from '../pages/Main';
import Entry from '../pages/Entry';
import CreateSchedule from '../pages/CreateSchedule';
import Account from '../pages/Account';
import EditAdditional from '../pages/EditAdditional';

const routes = [
  {
    path: '/',
    element: <Main />,
  },
  {
    path: '/entry/:id',
    element: <Entry />
  },
  {
    path: '/schedule',
    element: <CreateSchedule />
  },
  {
    path: '/account',
    element: <Account />
  },
  {
    path: '/edit-additional/:id',
    element: <EditAdditional />
  }
];

export default routes;
