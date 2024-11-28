import PropTypes from "prop-types";


const Cart = ({ openCart, setOpenCart }) => {
    return (
        <div
            className={`${
                openCart ? "translate-x-0" : "translate-x-full"
            } w-56 border duration-300 h-screen bg-darkness absolute top-[77px] bottom-0 right-0`}
        >
            <div className="flex flex-col justify-between h-3/4 md:h-[89%] border">

            <button
                onClick={() => setOpenCart(false)}
                className="w-full py-1 border"
                >
                Close
            </button>
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
