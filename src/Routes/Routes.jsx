import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/",
         element: <Home /> 
        },
        {
          path:'dashboard',
          element:<DashBoard/>
        },
        {
path:'our-menu',
element:<OurMenu/>,
        },
        {
          path:'contact-us',
          element:<Contact/>,
        },
        {
          path:'our-shop',
          element:<OurShop/>,
        },
    ],
  },
]);

export default Routes;
