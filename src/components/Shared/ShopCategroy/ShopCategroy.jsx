import PropTypes from "prop-types";
import ItemCard from "../ItemCard/ItemCard"
const ShopCategroy = ({items}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {
                items?.map(item=><ItemCard key={item?._id} item={item}/>)
            }
        </div>
  )
}
ShopCategroy.propTypes={
    items:PropTypes.any
}

export default ShopCategroy