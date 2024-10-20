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
        <ToastContainer>
          <div className="max-w-screen-7xl mx-auto">
            <RouterProvider router={Routes} />
          </div>
        </ToastContainer>
      </HelmetProvider>
    </AuthProvider>
  </StrictMode>
);
