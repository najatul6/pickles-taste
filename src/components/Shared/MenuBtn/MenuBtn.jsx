import PropTypes from "prop-types";
const MenuBtn = ({text}) => {
  return (
    <button className="flex justify-center items-center mx-auto my-4">
        <p className="text-white py-5 px-8 rounded-xl border-b-4 uppercase text-xl font-medium hover:bg-brand-color hover:border-white transition-colors duration-300 border-brand-color">{text}</p>
    </button>
  )
}

MenuBtn.propTypes = {
  text: PropTypes.string.isRequired,
}

export default MenuBtn