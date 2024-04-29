import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Root from './pages/Root.jsx'
import ErrorPage from './pages/ErrorPage'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home.jsx'
import Signin from './pages/SignIn.jsx'
import ContextProvider from './provider/ContextProvider.jsx'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Signup from './pages/Signup.jsx'
import AllArt from './pages/AllArt.jsx'
import AddCraft from './pages/AddCraft.jsx'
import PrivateRoute from './PrivateRoute.jsx'
import MyArt from './pages/MyArt.jsx'
import Details from './pages/Details.jsx'
import Details2 from './pages/Details2.jsx'
import SubCategoryItem from './pages/SubCategoryItem.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/signin",
        element: <Signin />
      },
      {
        path: "/signup",
        element: <Signup />
      },
      {
        path: '/all-Art',
        element: <AllArt />
      },
      {
        path: "/addCraft",
        element: <PrivateRoute><AddCraft /></PrivateRoute>,
      },
      {
        path: "/myArt",
        element: <PrivateRoute><MyArt /></PrivateRoute>,
      },{
        path:'/details/:id',
        element: <PrivateRoute><Details /></PrivateRoute>
      },
      {
        path:'/details2/:id',
        element: <PrivateRoute><Details2 /></PrivateRoute>
      },
      {
        path:'/subCategoryItem/:name',
        element: <PrivateRoute><SubCategoryItem /></PrivateRoute>
      }
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <ContextProvider>
    <RouterProvider router={router} />
    <ToastContainer />
  </ContextProvider>
)
