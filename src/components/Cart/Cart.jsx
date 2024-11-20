
const Cart = ({openCart}) => {
    return (
        <div className={`${openCart?"translate-y-0":"-translate-x-full"} w-48 h-screen bg-black absolute top-[77px] bottom-0 right-0`}>
            <h2>Your Cart</h2>
            <p>No items in your cart.</p>
        </div>
    );
};

export default Cart;