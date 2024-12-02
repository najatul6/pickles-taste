import PropTypes from "prop-types";
import { FaArrowRight } from "react-icons/fa";
import { MdDelete, MdOutlineShoppingCartCheckout } from "react-icons/md";
import { useEffect, useState } from "react";
import useCart from "../../hooks/useCart";
import { HiOutlineCurrencyBangladeshi } from "react-icons/hi";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const Cart = ({ openCart, setOpenCart }) => {
  const [carts,refetch] = useCart(); 
  const axiosSecure=useAxiosSecure();
  const [previousCartLength, setPreviousCartLength] = useState(
    carts?.length || 0
  );

  const totalAmount = carts.reduce((acc, cart) => {
    const price = parseFloat(cart.price) || 0; 
    const quantity = parseFloat(cart.quantity) || 0; 
    return acc + price * quantity;
  }, 0);

  useEffect(() => {
    // Open cart if a new item is added
    if (carts.length > previousCartLength) {
      setOpenCart(true);
    }

    // Update the previous cart length
    setPreviousCartLength(carts.length); 
  }, [carts, previousCartLength, setOpenCart]);

  const deleteItem = (id) => {
    // Delete item functionality here
    axiosSecure.delete(`/carts/${id}`).then((res) => {
      if (res.data.deletedCount >0) {
        // Update carts after item is deleted
        refetch()
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "Item removed from your cart",
          showConfirmButton: false,
          timer: 500,
        });
      }
    });
  }

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
        <div className="flex-1 border  overflow-hidden overflow-y-auto">
          <div className="flex justify-between py-2 px-3 text-brand-color">
            <p className="capitalize font-bold">Total Items: {carts?.length}</p>
            <p className="capitalize font-bold flex justify-center items-center">
              Amount: <HiOutlineCurrencyBangladeshi className="ml-1"/>{totalAmount.toFixed(2)}
            </p>
          </div>
          <hr  className="mb-4 "/>
          {carts.length === 0 ? (
            <p className="w-full h-full flex justify-center items-center text-red-500 capitalize">No items in your cart.</p>
          ) : (
            <ul className="divide-y divide-gray-300">
              {carts.map((cart, index) => {
                const price = parseFloat(cart.price) || 0; // Ensure price is a number
                const quantity = parseFloat(cart.quantity) || 0; // Ensure quantity is a number
                const total = price * quantity;

                return (
                  <li
                    key={index}
                    className="flex justify-between items-center py-2 px-3"
                  >
                    <div>
                      <p className="font-bold text-white">{cart.name}</p>
                      <p className="text-sm flex justify-start items-center">Basic Price: <HiOutlineCurrencyBangladeshi className="ml-2"/>{price.toFixed(2)}</p>
                      <p className="text-sm">Quantity: {quantity} kg</p>
                      <p className="text-sm font-medium flex justify-start items-center">
                        Total: <HiOutlineCurrencyBangladeshi className="ml-2"/>{total.toFixed(2)}
                      </p>
                    </div>
                    <button
                      onClick={() => deleteItem(cart._id)}
                      className="px-2 py-1 text-white bg-red-500 hover:bg-red-600 rounded"
                    >
                     <MdDelete />
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
