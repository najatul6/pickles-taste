import PropTypes from "prop-types";
const MenuItemCard = ({ item }) => {
  const { name, recipe, image, price } = item;
  return (
    <div className="flex justify-center items-center gap-6 text-white">
      <img src={image} alt={name} className="rounded-e-full rounded-es-full"/>
      <div>
        <h3 className="text-xl uppercase">{name} -----------</h3>
        <p>{recipe}</p>
      </div>
      <p className="text-brand-color text-xl">&#2547; {price}</p>
    </div>
  );
};

MenuItemCard.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    recipe: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }),
};

export default MenuItemCard;
