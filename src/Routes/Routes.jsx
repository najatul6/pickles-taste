import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import DashBoard from "../Pages/DashBoard/DashBoard";
import OurMenu from "../Pages/OurMenu/OurMenu";
import ContactUs from "../Pages/ContactUs/ContactUs";
import OurShop from "../Pages/OurShop/OurShop";
import LogIn from "../Pages/LogIn/LogIn";
import Register from "../Pages/Register/Register";
import PrivateRoute from "./PrivateRoute";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/dashboard",
        element:<PrivateRoute> <DashBoard /></PrivateRoute>,
      },
      {
        path: "/our-menu",
        element: <OurMenu />,
      },
      {
        path: "/contact-us",
        element: <ContactUs />,
      },
      {
        path: "/our-shop/:category",
        element: <OurShop />,
      },
    ],
  },
  {
    path:"/login",
    element:<LogIn/>
  },
  {
    path:"/register",
    element:<Register/>
  }
]);

export default Routes;
