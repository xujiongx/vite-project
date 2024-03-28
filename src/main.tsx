import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './global.css';
import Root from './routes/root';
import ErrorPage from './error-page';
import { ROUTES_OPTIONS } from './routes/const'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: ROUTES_OPTIONS.map((item) => ({
      path: item.path,
      element: item.element,
    })),
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
