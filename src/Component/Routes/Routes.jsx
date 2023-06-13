import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import Instructors from "../pages/Instructors/Instructors";
import Classes from "../pages/Classes/Classes";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import DMain from "../pages/Dashboard/Layout/DMain";
import DHome from "../pages/Dashboard/home/DHome";
import AllUsers from "../pages/Dashboard/AllUsers/AllUsers";

export const router = createBrowserRouter(
    [
    {
      path: "/",
        element: <Main></Main>,
        children:[
            {
                path: '/',
                element:<Home></Home>
            },
            {
                path: '/instructors',
                element: <Instructors></Instructors>,
                loader:()=>fetch('../../../public/instructors.json')
            },
            {
                path: '/classes',
                element: <Classes></Classes>,
                loader:()=>fetch('../../../public/classes.json')
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element:<Register></Register>
            }
      ]
        },
        {
            path: '/dashboard',
            element: <DMain></DMain>,
            children: [
                {
                    path: '/dashboard',
                    element:<DHome></DHome>
                },
                {
                    path: 'allusers',
                    element: <AllUsers></AllUsers>,
                }
            ]
        }
  ]);