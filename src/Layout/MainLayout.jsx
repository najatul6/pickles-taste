import { Outlet } from "react-router-dom";
import Navbar from "../components/Shared/Navbar/Navbar";
import Footer from "../components/Shared/Footer/Footer";

const MainLayout = () => {
  return (
    <div>
      <div className="fixed top-0 z-[999] w-full mx-auto left-0 right-0">
      <Navbar />
      </div>
      <div className="mt-[20%] md:mt-[0%] lg:mt-0">
      <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
