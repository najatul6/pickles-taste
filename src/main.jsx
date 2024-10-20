import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import Routes from "./Routes/Routes.jsx";
import { HelmetProvider } from "react-helmet-async";
import AuthProvider from "./providers/AuthProvider.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <HelmetProvider>
        <div className="max-w-screen-7xl mx-auto">
          <ToastContainer
            position="top-center"
            autoClose={1500}
            closeOnClick
            pauseOnFocusLoss
            pauseOnHover
            transition:Bounce
          />
          <RouterProvider router={Routes} />
        </div>
      </HelmetProvider>
    </AuthProvider>
  </StrictMode>
);
