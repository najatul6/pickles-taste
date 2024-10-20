import PropTypes from "prop-types";
import { IoIosCloseCircle } from "react-icons/io";
import { TbCircleCheckFilled } from "react-icons/tb";
import { toast } from "react-toastify";

const ProfileMenu = ({ user, logOut }) => {
  const handleLogOUt = async () => {
    // Show a processing toast message
    const processingToast = toast.loading("Logging Out...");
    try {
      // Attempt to log out the user
      await logOut();
      // If logout is successful, show a success message
      toast.update(processingToast, {
        render: "Logged Out Successfully!",
        type: "success",
        isLoading: false,
        autoClose: 1500,
        closeButton: true,
      });
    } catch (error) {
      // Show an error message if logout fails
      toast.update(processingToast, {
        render: "Failed to log out",
        type: "error",
        isLoading: false,
        autoClose: 3000,
        closeButton: true,
      });
      console.error(error);
    }
  };
  return (
    <div className="bg-darkness/90 z-[999] rounded-xl shadow-inner shadow-white/25 py-6 px-6 text-white sm:min-w-[320px] max-sm:min-w-[250px] absolute right-0 top-10">
     <div className="mb-5">
     <h6 className="font-semibold text-xl">{user?.displayName ? `${user?.displayName}`:"Author"}</h6>
      <p className="text-sm text-white/50 flex gap-2 justify-start items-center">
        {user?.email} {user?.emailVerified?<TbCircleCheckFilled className="text-green-600" />:<IoIosCloseCircle className="text-red-600" /> }
      </p>
     </div>

      {/* <ul className="space-y-1.5">
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
      </ul> */}
      <button
        onClick={handleLogOUt}
        type="button"
        className="md:block font-semibold mt-5 text-white border-2 rounded-md border-white px-6 py-2 duration-200 hover:bg-brand-color hover:text-white w-full"
      >
        Log Out
      </button>
    </div>
  );
};
ProfileMenu.propTypes={
    user:PropTypes.object,
    logOut:PropTypes.func.isRequired

}

export default ProfileMenu;
