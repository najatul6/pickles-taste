import logo from "../../../assets/logo.svg";
import { PiShoppingCartThin } from "react-icons/pi";
import { MdClose, MdMenu } from "react-icons/md";
import { useContext, useState } from "react";
import { NavMenu } from "../../../Utils/utils";
import ResponsiveMenu from "../../ResponsiveMenu/ResponsiveMenu";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import ProfileMenu from "./ProfileMenu";
import { motion } from "framer-motion";
import useOrders from "../../../hooks/useOrders";
const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [orders]=useOrders()
  const variants = {
    openMenu: { opacity: 1, x: 0 } ,
    closedMenu: { opacity: 0, x: "100%" },
  };

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
        <div className="container relative flex justify-between items-center py-2  backdrop-blur-md bg-black/10">
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
                    <NavLink
                      to={item?.link}
                      className={({ isActive }) =>
                        `inline-block py-1 px-3 font-semibold uppercase ${
                          isActive
                            ? "text-brand-color"
                            : "hover:text-brand-color"
                        }`
                      }
                    >
                      {item?.name}
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </div>
          {/* Icons Section  */}
          <div className="flex items-center gap-4">
            <button className="relative text-2xl text-brand-color hover:text-white hover:bg-brand-color font-bold p-2 rounded-full duration-200 group">
              <PiShoppingCartThin />
              <p className={`${orders?.length >0 && "hidden"} absolute top-0  -left-10 text-base group-hover:border-0 group-hover:bg-brand-color border text-white rounded-full px-2 py-1`}>+ {orders?.length}</p>
            </button>
            {/* User Button  */}
            {user ? (
              <div className="flex items-center max-sm:ml-auto space-x-6">
                <ul>
                  <li className="relative px-1 after:absolute after:w-full after:h-[2px] after:block after:top-8 after:left-0 after:transition-all after:duration-300">
                    {user?.photoURL ? (
                      <img
                        src={user?.photoURL}
                        alt={`${user?.displayName} photo`}
                      />
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24px"
                        height="24px"
                        className="cursor-pointer fill-brand-color"
                        viewBox="0 0 512 512"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                      >
                        <path
                          d="M437.02 74.981C388.667 26.629 324.38 0 256 0S123.333 26.629 74.98 74.981C26.629 123.333 0 187.62 0 256s26.629 132.667 74.98 181.019C123.333 485.371 187.62 512 256 512s132.667-26.629 181.02-74.981C485.371 388.667 512 324.38 512 256s-26.629-132.667-74.98-181.019zM256 482c-66.869 0-127.037-29.202-168.452-75.511C113.223 338.422 178.948 290 256 290c-49.706 0-90-40.294-90-90s40.294-90 90-90 90 40.294 90 90-40.294 90-90 90c77.052 0 142.777 48.422 168.452 116.489C383.037 452.798 322.869 482 256 482z"
                          data-original="#000000"
                        />
                      </svg>
                    )}

                    {isMenuOpen && (
                      <motion.div
                      initial="closedMenu"
                        animate={isMenuOpen ? "openMenu" : "closedMenu"}
                        variants={variants}
                        transition={{ duration: 0.5 }}
                      >
                        {" "}
                        <ProfileMenu user={user} logOut={logOut} />
                      </motion.div>
                    )}
                  </li>
                </ul>
              </div>
            ) : (
              <Link to="/login">
                <button className=" md:block font-semibold text-white border-2 rounded-md border-white px-6 py-2 duration-200 hover:bg-brand-color hover:text-white">
                  Login
                </button>
              </Link>
            )}
          </div>
        </div>
      </nav>
      {/* Mobile Sidebar section  */}
      <ResponsiveMenu open={isOpen} positionMenu={positionMenu} />
    </>
  );
};

export default Navbar;
