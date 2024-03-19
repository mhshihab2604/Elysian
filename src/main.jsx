import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Home from './Components/Home'
import About from './Components/About';
import Contact from './Components/Contact';
import User from './Components/Users'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "/about",
        element: <About></About>
      },
      {
        path: "/users",
        loader: () => fetch('card.json'),
        element: <User></User>
      },
      {
        path: "/contact",
        element: <Contact></Contact>
      }
    ]
  },
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
