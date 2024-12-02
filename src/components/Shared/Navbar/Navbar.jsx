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
import Cart from "../../Cart/Cart";
import useCart from "../../../hooks/useCart";
import { HiOutlineCurrencyBangladeshi } from "react-icons/hi";
const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openCart, setOpenCart] = useState(false);
  const [carts] = useCart();
  const variants = {
    openMenu: { opacity: 1, x: 0 },
    closedMenu: { opacity: 0, x: "100%" },
  };

  const positionMenu = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100vh",
  };

  const totalPrice = carts?.reduce((acc, item) => acc + item?.price, 0);
  return (
    <>
      <nav>
        <div className="container relative flex justify-between items-center py-2  backdrop-blur-md bg-black/50">
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
            <div className="flex justify-center items-center">
              <p className="flex justify-center items-center gap-1 text-brand-color">
                <HiOutlineCurrencyBangladeshi size={20} /> {totalPrice===0 ? '0.00' : totalPrice.toFixed(2)}
              </p>
              <button
                onClick={() => setOpenCart(true)}
                className="relative text-2xl text-brand-color hover:text-white hover:bg-brand-color font-bold p-2 rounded-full duration-200 group"
              >
                <PiShoppingCartThin />
                <p
                  className={`${
                    carts?.length === 0 && "hidden"
                  } absolute -top-[5px] flex justify-center items-center w-full left-[17px] text-base group-hover:border-0  text-white rounded-full`}
                >
                  + {carts?.length}
                </p>
              </button>
            </div>
            {/* User Button  */}
            {user ? (
              <div className="flex items-center max-sm:ml-auto space-x-6">
                <ul>
                  <li className="relative px-1 after:absolute after:w-full after:h-[2px] after:block after:top-8 after:left-0 after:transition-all after:duration-300">
                    <div
                      onClick={() => setIsMenuOpen(!isMenuOpen)}
                      className="w-8 h-8 rounded-full border-white border-2 overflow-hidden"
                    >
                      <img
                        src={user?.photoURL}
                        alt={`${user?.displayName} photo`}
                        className="wf-full h-full object-cover"
                      />
                    </div>

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
      <div className="max-w-screen-7xl">
        <Cart openCart={openCart} setOpenCart={setOpenCart} />
      </div>
      {/* Mobile Sidebar section  */}
      <ResponsiveMenu
        setIsOpen={setIsOpen}
        open={isOpen}
        positionMenu={positionMenu}
      />
    </>
  );
};

export default Navbar;
