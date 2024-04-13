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



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: '/',
        element: <CardSection></CardSection>,
       
      },
      {
        path: '/cardDetails/:id',
        element: <CardDetails></CardDetails>,
        loader: () => fetch('/Industrial.json'),
      }
      ,
      {
        path: "/login",
        element: <Login></Login>,
      }
    ]
  },
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
