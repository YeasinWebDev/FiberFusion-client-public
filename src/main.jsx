import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { gsap } from 'gsap'; 
import {
  RouterProvider,
} from "react-router-dom";
import ContextProvider from './provider/ContextProvider.jsx'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { router } from './Routers.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ContextProvider>
      <RouterProvider router={router} />
    <ToastContainer />
  </ContextProvider>
)
