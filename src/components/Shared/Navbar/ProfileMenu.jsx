const ProfileMenu = () => {
  return (
    <div className="bg-darkness z-[999] shadow-md py-6 px-6 sm:min-w-[320px] max-sm:min-w-[250px] absolute right-0 top-10">
      <h6 className="font-semibold text-[15px]">Welcome</h6>
      <p className="text-sm text-gray-500 mt-1">
        To access account and manage orders
      </p>
      <button
        type="button"
        className="bg-transparent border-2 border-gray-300 hover:border-black rounded px-4 py-2.5 mt-4 text-sm text-black font-semibold"
      >
        LOGIN / SIGNUP
      </button>
      <ul className="space-y-1.5">
        <li>
          <a href="#" className="text-sm text-gray-500 hover:text-black">
            Order
          </a>
        </li>
        <li>
          <a href="#" className="text-sm text-gray-500 hover:text-black">
            Wishlist
          </a>
        </li>
        <li>
          <a href="#" className="text-sm text-gray-500 hover:text-black">
            Gift Cards
          </a>
        </li>
        <li>
          <a href="#" className="text-sm text-gray-500 hover:text-black">
            Contact Us
          </a>
        </li>
      </ul>
      <hr className="border-b-0 my-4" />
      <ul className="space-y-1.5">
        <li>
          <a href="#" className="text-sm text-gray-500 hover:text-black">
            Coupons
          </a>
        </li>
        <li>
          <a href="#" className="text-sm text-gray-500 hover:text-black">
            Saved Credits
          </a>
        </li>
        <li>
          <a href="#" className="text-sm text-gray-500 hover:text-black">
            Contact Us
          </a>
        </li>
        <li>
          <a href="#" className="text-sm text-gray-500 hover:text-black">
            Saved Addresses
          </a>
        </li>
      </ul>
    </div>
  );
};

export default ProfileMenu;
