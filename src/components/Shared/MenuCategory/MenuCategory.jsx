import { Link } from "react-router-dom";
import MenuBtn from "../MenuBtn/MenuBtn";
import MenuItemCard from "../MenuItemCard/MenuItemCard";
import PropTypes from "prop-types";
const MenuCategory = ({ items,title }) => {
  console.log(title);
  return (
    <div className="space-y-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {items?.map((item) => (
          <MenuItemCard key={item?._id} item={item} />
        ))}
      </div>
      <Link to={title}>
        <MenuBtn text="ORDER YOUR favourite FOOD" />
      </Link>
    </div>
  );
};

MenuCategory.propTypes = {
  items: PropTypes.any,
};

export default MenuCategory;
