import PropTypes from "prop-types";
import { FaArrowRight } from "react-icons/fa";


const Cart = ({ openCart, setOpenCart }) => {
  return (
    <div
      className={`${
        openCart ? "translate-x-0" : "translate-x-full"
      } w-60 border duration-300 h-screen bg-darkness absolute top-0 bottom-0 right-0`}
    >
      <div className="flex flex-col justify-between h-full pb-1 border">
        <div className="flex justify-between items-center px-3 text-white">
          <h2 className="text-xl font-bold">My Cart</h2>
          <button
            onClick={() => setOpenCart(false)}
            className="px-2 py-2 text-xl"
          >
           <FaArrowRight />
          </button>
        </div>
        <p>No items in your cart.</p>
        <button className="w-full py-2 border">Checkout</button>
      </div>
    </div>
  );
};
Cart.propTypes = {
  openCart: PropTypes.bool.isRequired,
  setOpenCart: PropTypes.func.isRequired,
};

export default Cart;
