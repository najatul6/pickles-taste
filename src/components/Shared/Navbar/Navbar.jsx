import logo from "../../../assets/logo.svg";
import { PiShoppingCartThin } from "react-icons/pi";
import { MdClose, MdMenu } from "react-icons/md";
import { useContext, useState } from "react";
import { NavMenu } from "../../../Utils/utils";
import ResponsiveMenu from "../../ResponsiveMenu/ResponsiveMenu";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";

const Navbar = () => {
  const { user } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggle = () => {
    setIsMenuOpen(!isMenuOpen);
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
            <button className="text-2xl text-brand-color hover:text-white hover:bg-brand-color font-bold p-2 rounded-full duration-200">
              <PiShoppingCartThin />
            </button>
            {/* User Button  */}
            {user ? (
              <div className="flex items-center max-sm:ml-auto space-x-6">
                <ul>
                  <li className="relative px-1 after:absolute after:bg-black after:w-full after:h-[2px] after:block after:top-8 after:left-0 after:transition-all after:duration-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24px"
                      height="24px"
                      className="cursor-pointer hover:fill-black"
                      viewBox="0 0 512 512"
                      onClick={handleToggle}
                    >
                      <path
                        d="M437.02 74.981C388.667 26.629 324.38 0 256 0S123.333 26.629 74.98 74.981C26.629 123.333 0 187.62 0 256s26.629 132.667 74.98 181.019C123.333 485.371 187.62 512 256 512s132.667-26.629 181.02-74.981C485.371 388.667 512 324.38 512 256s-26.629-132.667-74.98-181.019zM256 482c-66.869 0-127.037-29.202-168.452-75.511C113.223 338.422 178.948 290 256 290c-49.706 0-90-40.294-90-90s40.294-90 90-90 90 40.294 90 90-40.294 90-90 90c77.052 0 142.777 48.422 168.452 116.489C383.037 452.798 322.869 482 256 482z"
                        data-original="#000000"
                      />
                    </svg>
                    {isMenuOpen && (
                      <div className="bg-darkness z-[999] shadow-md py-6 px-6 sm:min-w-[320px] max-sm:min-w-[250px] absolute right-0 top-10">
                        <h6 className="font-semibold text-[15px]">Welcome</h6>
                        <p className="text-sm text-gray-500 mt-1">
                          To access account and manage orders
                        </p>
                        <button
                          type="button"
                          className="bg-transparent border-2 border-gray-300 hover:border-black rounded px-4 py-2.5 mt-4 text-sm text-black font-semibold"
                        >
                          LOGIN / SIGNUP
                        </button>
                        <hr className="border-b-0 my-4" />
                        <ul className="space-y-1.5">
                          <li>
                            <a
                              href="#"
                              className="text-sm text-gray-500 hover:text-black"
                            >
                              Order
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="text-sm text-gray-500 hover:text-black"
                            >
                              Wishlist
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="text-sm text-gray-500 hover:text-black"
                            >
                              Gift Cards
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="text-sm text-gray-500 hover:text-black"
                            >
                              Contact Us
                            </a>
                          </li>
                        </ul>
                        <hr className="border-b-0 my-4" />
                        <ul className="space-y-1.5">
                          <li>
                            <a
                              href="#"
                              className="text-sm text-gray-500 hover:text-black"
                            >
                              Coupons
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="text-sm text-gray-500 hover:text-black"
                            >
                              Saved Credits
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="text-sm text-gray-500 hover:text-black"
                            >
                              Contact Us
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="text-sm text-gray-500 hover:text-black"
                            >
                              Saved Addresses
                            </a>
                          </li>
                        </ul>
                      </div>
                    )}
                  </li>
                </ul>

                {/* Toggle Button for smaller screens */}
                <button onClick={handleToggle} className="lg:hidden ml-7">
                  <svg
                    className="w-7 h-7"
                    fill="#000"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </button>
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
