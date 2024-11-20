
const Cart = ({openCart,setOpenCart}) => {
    return (
        <div className={`${openCart?"translate-y-0":"translate-x-full"} w-48 duration-300 h-screen bg-darkness absolute top-[77px] bottom-0 right-0`}>
            <button onClick={()=>setOpenCart(false)} className="w-full py-1 border">Close</button>
            <p>No items in your cart.</p>
        </div>
    );
};

export default Cart;