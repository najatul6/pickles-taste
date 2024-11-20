import { motion, AnimatePresence } from "framer-motion";
import { NavMenu } from "../../Utils/utils";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
const ResponsiveMenu = ({ setIsOpen, open, positionMenu }) => {
  return (
    <AnimatePresence mode="wait">
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.3 }}
          className={positionMenu}
        >
          <div className="text-xl font-semibold uppercase shadow-inner text-white py-10 bg-black/90 backdrop-blur-[50px]">
            <ul className="flex flex-col justify-center items-center gap-6">
             
              {NavMenu.map((item) => {
                return (
                  <li key={item?.id}>
                    <NavLink
                      to={item?.link}
                      onClick={() => setIsOpen(!open)}
                      className={({ isActive }) =>
                        `inline-block py-1 px-3 font-semibold uppercase ${
                          isActive ? 'text-brand-color' : 'hover:text-brand-color'
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
        </motion.div>
      )}
    </AnimatePresence>
  );
};

ResponsiveMenu.propTypes = {
  open: PropTypes.node.isRequired,
  positionMenu: PropTypes.object.isRequired,
  setIsOpen: PropTypes.func.isRequired,
};

export default ResponsiveMenu;
