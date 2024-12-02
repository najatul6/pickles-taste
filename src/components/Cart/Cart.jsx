import PropTypes from "prop-types";
import { FaArrowRight, FaTrash } from "react-icons/fa";
import { MdOutlineShoppingCartCheckout } from "react-icons/md";
import { useEffect, useState } from "react";
import useCart from "../../hooks/useCart";
import { HiOutlineCurrencyBangladeshi } from "react-icons/hi";

const Cart = ({ openCart, setOpenCart }) => {
  const [carts, setCarts] = useCart(); // Assume useCart returns [cartItems, setCartItems]
  const [previousCartLength, setPreviousCartLength] = useState(
    carts?.length || 0
  );

  const updateQuantity = (index, action) => {
    setCarts((prevCarts) => {
      return prevCarts.map((cart, i) => {
        if (i === index) {
          const newQuantity =
            action === "increment"
              ? cart.quantity + 1
              : Math.max(cart.quantity - 1, 1); // Ensure quantity doesn't drop below 1
          return { ...cart, quantity: newQuantity };
        }
        return cart;
      });
    });
  };

  const deleteItem = (index) => {
    setCarts((prevCarts) => prevCarts.filter((_, i) => i !== index));
  };

  const totalAmount = carts.reduce((acc, cart) => {
    const price = parseFloat(cart.price) || 0;
    const quantity = parseFloat(cart.quantity) || 0;
    return acc + price * quantity;
  }, 0);

  useEffect(() => {
    if (carts.length > previousCartLength) {
      setOpenCart(true);
    }
    setPreviousCartLength(carts.length);
  }, [carts, previousCartLength, setOpenCart]);

  return (
    <div
      className={`${
        openCart ? "translate-x-0" : "translate-x-full"
      } w-80 duration-300 h-screen bg-darkness absolute top-0 bottom-0 right-0`}
    >
      <div className="flex flex-col justify-between h-full pb-1 border">
        <div className="flex justify-between items-center px-3 text-white bg-brand-color">
          <h2 className="text-xl font-bold">My Cart</h2>
          <button
            onClick={() => setOpenCart(false)}
            className="px-2 py-2 text-xl"
          >
            <FaArrowRight />
          </button>
        </div>
        <div className="flex-1 border px-3">
          <div className="flex justify-between py-2">
            <p className="capitalize font-bold">Total Items: {carts?.length}</p>
            <p className="capitalize font-bold flex items-center">
              Amount: <HiOutlineCurrencyBangladeshi className="ml-2" />
              {totalAmount.toFixed(2)}
            </p>
          </div>
          {carts.length === 0 ? (
            <p>No items in your cart.</p>
          ) : (
            <ul className="divide-y divide-gray-300">
              {carts.map((cart, index) => {
                const price = parseFloat(cart.price) || 0;
                const quantity = parseFloat(cart.quantity) || 0;
                const total = price * quantity;

                return (
                  <li
                    key={index}
                    className="flex justify-between items-center py-2"
                  >
                    <div>
                      <p className="font-bold">{cart.name}</p>
                      <p className="text-sm flex items-center">
                        Basic Price:{" "}
                        <HiOutlineCurrencyBangladeshi className="ml-2" />
                        {price.toFixed(2)}
                      </p>
                      <div className="flex items-center gap-2 mt-2">
                        <button
                          className="px-2 py-1 border"
                          onClick={() => updateQuantity(index, "decrement")}
                        >
                          -
                        </button>
                        <p className="text-sm">{quantity} kg</p>
                        <button
                          className="px-2 py-1 border"
                          onClick={() => updateQuantity(index, "increment")}
                        >
                          +
                        </button>
                      </div>
                      <p className="text-sm font-medium flex items-center">
                        Total: <HiOutlineCurrencyBangladeshi className="ml-2" />
                        {total.toFixed(2)}
                      </p>
                    </div>
                    <button
                      onClick={() => deleteItem(index)}
                      className="text-red-500"
                    >
                      <FaTrash />
                    </button>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
        <button className="w-full py-2 border flex justify-center items-center gap-4 hover:text-white border-brand-color text-brand-color hover:bg-brand-color text-lg font-bold uppercase duration-300">
          Checkout <MdOutlineShoppingCartCheckout />
        </button>
      </div>
    </div>
  );
};

Cart.propTypes = {
  openCart: PropTypes.bool.isRequired,
  setOpenCart: PropTypes.func.isRequired,
};

export default Cart;
