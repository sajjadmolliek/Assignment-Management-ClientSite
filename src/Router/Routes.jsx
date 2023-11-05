import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import MainLayout from "../Layouts/MainLayout";
import ErrorPage from "../Components/ErrorPage";
import Logins from "../Pages/Logins/Logins";
import Resister from "../Pages/Resister/Resister";
import AllAssignment from "../Pages/AllAssignment/AllAssignment";
import PrivateRoute from "../Private/PrivateRoute";
import CreateAssignment from "../Pages/CreateAssignment/CreateAssignment";
import MyAssignment from "../Pages/MyAssignment/MyAssignment";
import SubmittedAssignment from "../Pages/SubmittedAssignment/SubmittedAssignment";



const Routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
       
      },
      {
        path: "/All-Assignment",
        element: <AllAssignment></AllAssignment>,
       
      },
      {
        path: "/Create-Assignment",
        element: <PrivateRoute><CreateAssignment></CreateAssignment></PrivateRoute>,
       
      },
      {
        path: "/My-Assignment",
        element: <PrivateRoute><MyAssignment></MyAssignment></PrivateRoute>,
       
      },
      {
        path: "/Submitted-Assignment",
        element: <PrivateRoute><SubmittedAssignment></SubmittedAssignment></PrivateRoute>,
       
      },
      {
        path: "/logins",
        element: <Logins></Logins>,
      },
      {
        path: "/resister",
        element: <Resister></Resister>,
      },
     
    ],
  },
]);

export default Routes;
