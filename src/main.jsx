import React from 'react';
import ReactDOM from 'react-dom/client';

import { Profile } from './pages/Profile';
import App from './App';

import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';

import './index.css';
import { Mobile } from './pages/Mobile';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/profile',
    element: <Profile />,
  },
  {
    path: '/mobile',
    element: <Mobile />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
