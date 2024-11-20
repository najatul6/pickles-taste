
const Cart = ({openCart}) => {
    return (
        <div className={`${openCart?"block":"hidden"} w-48 h-screen bg-black absolute top-0 bottom-0 left-0`}>
            <h2>Your Cart</h2>
            <p>No items in your cart.</p>
        </div>
    );
};

export default Cart;