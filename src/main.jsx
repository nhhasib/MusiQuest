import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {

  RouterProvider,
} from "react-router-dom";
import { router } from './Component/Routes/Routes';
import { AuthContext } from './Component/AuthProvider/AuthProvider';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContext.Provider>
      <RouterProvider router={router} />
    </AuthContext.Provider>
  </React.StrictMode>,
)
