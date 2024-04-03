import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import './index.css'

import ErrorPage from './pages/ErrorPage.jsx';
import Home from './pages/Home.jsx';
import Menu from './pages/Menu.jsx';
import MenuItem from './pages/MenuItem';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage/>
  },
  {
    path: "/menu",
    element: <Menu/>,
  },
  {
    path: "/menu/:item",
    element: <MenuItem/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
