import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";

export const Routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "products", element: <ProductsList /> },
      { path: "products/:productId", element: <ProductDetails /> },
      { path: "cart", element: <Cart /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

