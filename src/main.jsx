import React from 'react';
import ReactDOM from 'react-dom/client';

import { Profile } from './pages/Profile';
import App from './App';

import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';

import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/profile',
    element: <Profile />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
