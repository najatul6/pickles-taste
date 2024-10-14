import { motion, AnimatePresence } from "framer-motion";
import { NavMenu } from "../../Utils/utils";
import PropTypes from "prop-types";
const ResponsiveMenu = ({ open, absolute }) => {
  return (
    <AnimatePresence mode="wait">
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.3 }}
          className={absolute}
        >
          <div className="text-xl font-semibold uppercase shadow-inner text-white py-10 bg-gradient-back backdrop-blur-[50px]">
            <ul className="flex flex-col justify-center items-center gap-6">
             
              {NavMenu.map((item) => {
                return (
                  <li key={item.id}>
                    <a
                      href={item.link}
                      className="inline-block py-1 px-3 font-semibold hover:text-primary"
                    >
                      {item.name}
                    </a>
                  </li>
                );
              })}
               <button className=" md:block font-semibold text-white border-2 rounded-md border-white px-6 py-2 duration-200 hover:bg-white hover:text-primary">
                Login
              </button>
            </ul>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

ResponsiveMenu.propTypes = {
  open: PropTypes.node.isRequired,
  absolute: PropTypes.node.isRequired,
};

export default ResponsiveMenu;
