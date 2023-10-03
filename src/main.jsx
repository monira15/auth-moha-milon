/* eslint-disable react/jsx-no-undef */
import React from 'react';
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import { Children } from 'react';
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Root from './components/Root';
import AuthProvider from './Provider/AuthProvider';
import Orders from './components/Orders';
import PrivateRoutes from './components/Routes/PrivateRoutes';
import Profile from './components/Profile';
// import React from 'react';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
  children:[
    {
      path:'/',
      element:<Home></Home>,
    },
    {
      path:'/login',
      element:<Login></Login>,
    },
    {
      path:'/register',
      element:<Register></Register>
    },
    {
      path:'/orders',
      element:<PrivateRoutes><Orders></Orders></PrivateRoutes>
    },
    {
      path :'/profile',
      element:<PrivateRoutes ><Profile></Profile></PrivateRoutes>
    }
  ]
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<AuthProvider>
<RouterProvider router={router}></RouterProvider>
</AuthProvider>
  </React.StrictMode>
)
