import { Outlet } from "react-router-dom";
import Navbar from "../components/Shared/Navbar/Navbar";
import Footer from "../components/Shared/Footer/Footer";

const MainLayout = () => {
  return (
    <div>
      <div className="fixed top-0 z-[999] w-full">
      <Navbar />
      </div>
      <div className="mt-[38%]">
      <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
