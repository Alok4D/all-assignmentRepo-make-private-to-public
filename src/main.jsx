import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Root from './Components/Layouts/Root';
import Error from './Components/Error-Page/Error';
import CardSection from './Components/Industrial-Card/CardSection';
import CardDetails from './Components/Card-Details/CardDetails';
import Login from './Components/Login-Page/Login';
import Register from './Components/Login-Page/Register-page/Register';
import AuthProvider from './Components/Auth-Provider/AuthProvider';

import ProtectedRoute from './Components/Protected-Routes/ProtectedRoute';
import UpdateProfile from './Components/Update-Profile/UpdateProfile';
import AboutUs from './Components/About-Us/AboutUs';

import { HelmetProvider } from 'react-helmet-async';
import Contact from './Components/Contact-Section/Contact';





const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: '/aboutUs',
        element: <AboutUs></AboutUs>,
      },
      {
        path: '/',
        element: <CardSection></CardSection>,
       
      },
     
      {
        path: '/cardDetails/:id',
        element: <ProtectedRoute>
          <CardDetails></CardDetails>
        </ProtectedRoute>,
        loader: () => fetch('/Industrial.json'),
      }
      ,
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>
      },
  
      {
        path: "/updateProfile",
        element: <UpdateProfile></UpdateProfile>
      },
      {
        path: '/contact',
        element: <Contact></Contact>
      }
     
     
    ]
  },
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
    </AuthProvider>
  </React.StrictMode>,
)
