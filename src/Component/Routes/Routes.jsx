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
import SelectedClass from "../pages/Dashboard/SelectedClass/SelectedClass";
import EnrolledClass from "../pages/Dashboard/EnrolledClass/EnrolledClass";
import AddClass from "../pages/Dashboard/addClass/AddClass";
import MyClass from "../pages/Dashboard/myClass/MyClass";
import PrivateRoute from "./PrivateRoute";
import Payment from "../pages/Dashboard/payment/Payment";

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
            element: <PrivateRoute><DMain></DMain></PrivateRoute>,
            children: [
                {
                    path: '/dashboard',
                    element:<DHome></DHome>
                },
                {
                    path: 'allusers',
                    element: <AllUsers></AllUsers>,
                },
                {
                    path: 'selectedClass',
                    element:<SelectedClass></SelectedClass>
                },
                {
                    path: 'payment',
                    element:<Payment></Payment>
                },
                {
                    path: 'enrolledClass',
                    element:<EnrolledClass></EnrolledClass>
                },
                {
                    path: 'addClass',
                    element:<AddClass></AddClass>
                },
                {
                    path: 'myClass',
                    element:<MyClass></MyClass>
                }
            ]
        }
  ]);