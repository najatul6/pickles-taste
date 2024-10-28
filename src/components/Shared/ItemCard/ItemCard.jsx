import PropTypes from "prop-types";
import useAuth from "../../../hooks/useAuth";
import Swal from "sweetalert2";
import { Navigate, useLocation } from "react-router-dom";

const ItemCard = ({ item }) => {
  const { name, recipe, image, price } = item;
  const { user } = useAuth();
  const location=useLocation()
  const handleOrder = (food) => {
    // Add order to cart functionality here
    if (user && user?.email) {
      // TODO: send to server
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
          <Navigate to="/login" state={{from:location}}/>
          Swal.fire({
            title: "Log in here!",
            text: "Provide your data to go to log in!",
            icon: "success",
          });
        }
      });
    }
    console.log("Order added to cart", food);
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
            onClick={() => handleOrder(item)}
            className="text-white py-5 px-8 rounded-full bg-white/5 border-b-4 uppercase text-xl font-medium hover:bg-brand-color hover:border-white transition-colors duration-300 border-brand-color"
          >
            Buy Now
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
  }).isRequired,
};

export default ItemCard;
