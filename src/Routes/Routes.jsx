import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    // children: [
    //   { path: "products", element: <ProductsList /> },
    //   { path: "products/:productId", element: <ProductDetails /> },
    //   { path: "cart", element: <Cart /> },
    //   { path: "*", element: <NotFound /> },
    // ],
  },
]);

export default Routes;
