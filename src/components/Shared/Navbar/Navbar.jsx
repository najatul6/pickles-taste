import logo from "../../../assets/logo.svg";
import { PiShoppingCartThin } from "react-icons/pi";
import { MdClose, MdMenu } from "react-icons/md";
import { useState } from "react";
import { NavMenu } from "../../../Utils/utils";
import ResponsiveMenu from "../../ResponsiveMenu/ResponsiveMenu";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const positionMenu = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100vh",
  };
  return (
    <>
      <nav>
        <div className="container relative flex justify-between items-center py-2 bg-gradient-back backdrop-blur">
          {/* Mobile hamburger Menu Section  */}
          <div className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <MdClose className="text-4xl" />
            ) : (
              <MdMenu className="text-4xl" />
            )}
          </div>
          {/* Logo Section  */}
          <Link to="/" className="w-28">
            <img src={logo} alt="brand logo" className="w-full" />
          </Link>
          {/* Menu Section  */}
          <div className="hidden lg:block">
            <ul className="flex justify-center items-center gap-6 text-white">
              {NavMenu?.map((item) => {
                return (
                  <li key={item?.id}>
                    <a
                      href={item?.link}
                      className="inline-block py-1 px-3 font-semibold hover:text-brand-color uppercase"
                    >
                      {item?.name}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
          {/* Icons Section  */}
          <div className="flex items-center gap-4">
            <button className="text-2xl text-brand-color hover:text-white hover:bg-brand-color font-bold p-2 rounded-full duration-200">
              <PiShoppingCartThin />
            </button>
            <button className=" md:block font-semibold text-white border-2 rounded-md border-white px-6 py-2 duration-200 hover:bg-brand-color hover:text-white">
              Login
            </button>
          </div>
          
        </div>
      </nav>
      {/* Mobile Sidebar section  */}
      <ResponsiveMenu open={isOpen} positionMenu={positionMenu} />
    </>
  );
};

export default Navbar;
