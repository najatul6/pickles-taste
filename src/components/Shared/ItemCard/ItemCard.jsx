import PropTypes from "prop-types";
import useAuth from "../../../hooks/useAuth";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useCart from "../../../hooks/useCart";

const ItemCard = ({ item }) => {
  const { name, recipe, image, price, _id } = item;
  const { user } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const axiosSecure = useAxiosSecure();
  const [, refetch] = useCart();
  const handleCart = () => {
    // Add to cart functionality here
    if (user && user?.email) {
      // send items to save data base
      const cartsItem = {
        menuId: _id,
        userEmail: user?.email,
        name,
        image,
        price,
        quantity: '1 kg',
      };
      axiosSecure.post("/carts", cartsItem).then((res) => {
        if (res.data.acknowledged === true) {
          // update carts after carts is placed
          refetch();

          Swal.fire({
            position: "top-center",
            icon: "success",
            title: `${name} added to your cart`,
            showConfirmButton: false,
            timer: 500,
          });
          
        }
      });
    } else {
      Swal.fire({
        title: "You Are Not Logged In!",
        text: "Please Log in First!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Log In",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
          
        }
      });
    }
  };
  return (
    <div className="text-white bg-white/10 shadow-inner shadow-white rounded-b-3xl">
      <div className="relative">
        <img src={image} alt={name} className="w-full" />
        <p className="text-xl font-bold absolute top-2 right-0 z-10 bg-black/50 px-5 py-3 rounded-s-full">
          &#2547; {price}
        </p>
      </div>
      <div className="items-center text-center py-10 px-10 space-y-5">
        <h2 className="text-2xl font-bold">{name}</h2>
        <p className="font-light">{recipe}</p>
        <div className="flex justify-center items-center">
          <button
            onClick={handleCart}
            className="text-white py-5 px-8 rounded-full bg-white/5 border-b-4 uppercase text-xl font-medium hover:bg-brand-color hover:border-white transition-colors duration-300 border-brand-color"
          >
           Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

ItemCard.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    recipe: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    _id: PropTypes.string.isRequired,
  }),
};

export default ItemCard;
