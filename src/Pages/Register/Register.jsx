import { useContext, useState } from "react";
import { Helmet } from "react-helmet-async"
import bannerImg from "../../assets/banner/4.jfif"
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { AuthContext } from "../../providers/AuthProvider";

const Register = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [isShow, setIsShow] = useState(true);
  const {createUser,signInUserWithGoogle}=useContext(AuthContext)
  const onSubmit = async (data) => {
    // Show a processing toast message
    const processingToast = toast.loading("Creating Data...");
    try {
      // Attempt to log in the user
      const result = await createUser(data.email, data.password);

      // If login is successful, show a success message
      toast.update(processingToast, {
        render: "Account Created Successfully!",
        type: "success",
        isLoading: false,
        autoClose: 1500,
        closeButton: true,
      });
      console.log("User:", result.user);
    } catch (error) {
      // Show an error message if login fails
      toast.update(processingToast, {
        render: `${error.message}`,
        type: "error",
        isLoading: false,
        autoClose: 3000,
        closeButton: true,
      });
      console.error(error);
    }
  };

  // Sign In With Google
  const handleGoogleSignIn = async () => {
    // Show a processing toast message
    const processingToast = toast.loading("Checking User Data...");

    try {
      // Attempt to sign in the user with Google
      const result = await signInUserWithGoogle();

      // If login is successful, show a success message
      toast.update(processingToast, {
        render: "Successfully logged in!",
        type: "success",
        isLoading: false,
        autoClose: 1500,
        closeButton: true,
      });
      console.log("User:", result.user);
    } catch (error) {
      // Show an error message if login fails
      toast.update(processingToast, {
        render: "Failed to log in with Google",
        type: "error",
        isLoading: false,
        autoClose: 3000,
        closeButton: true,
      });
      console.error(error);
    }
  };

  return (
    <div>
      <Helmet>
        <title>Register | Pickles Taste</title>
        
        </Helmet>
        <section className=" min-h-screen flex box-border justify-center items-center p-2">
        <div className="bg-white/5 rounded-2xl flex lg:w-3/4 py-5 md:p-5 items-center text-white">
          <div className="md:w-1/2 p-5 md:px-8">
            <h2 className="font-bold text-3xl ">Register</h2>
            <p className="text-sm mt-4 ">
              Welcome to Pickles Taste, easily Register now.
            </p>

            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
              {/* Name input field  */}
              <input
                className="p-2 mt-8 rounded-xl border"
                type="text"
                name="name"
                placeholder="Enter Your Name"
              />
              {/* Email input field  */}
              <div className="w-full">
                <input
                  className="p-2 mt-8 rounded-xl border w-full"
                  type="email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                      message: "Enter a valid email address",
                    },
                  })}
                  aria-invalid={errors.email ? "true" : "false"}
                  placeholder="Enter Your Email"
                />
                {errors.email && (
                  <p role="alert" className="text-red-500 text-sm">
                    {errors.email.message}
                  </p>
                )}
              </div>
              {/* Password input  */}
              <div>
                <div className="relative">
                  <input
                    className="p-2 rounded-xl border w-full"
                    type={isShow ? "password" : "text"}
                    {...register("password", {
                      required: "Password is required",
                      minLength: {
                        value: 6,
                        message: "Password must be at least 6 characters long",
                      },
                    })}
                    aria-invalid={errors.password ? "true" : "false"}
                    placeholder="Enter Your Password"
                  />
                  {/* Eye Button  */}
                  <button
                    type="button"
                    onClick={() => setIsShow(!isShow)}
                    className="absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer z-20 opacity-100"
                  >
                    {isShow ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="gray"
                        id="togglePassword"
                        className="bi bi-eye "
                        viewBox="0 0 16 16"
                      >
                        <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"></path>
                        <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"></path>
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-eye-slash-fill "
                        viewBox="0 0 16 16"
                      >
                        <path d="m10.79 12.912-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7.029 7.029 0 0 0 2.79-.588zM5.21 3.088A7.028 7.028 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474L5.21 3.089z"></path>
                        <path d="M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829l-2.83-2.829zm4.95.708-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829zm3.171 6-12-12 .708-.708 12 12-.708.708z"></path>
                      </svg>
                    )}
                  </button>
                </div>
                {errors.password && (
                  <p role="alert" className="text-red-500 text-sm">
                    {errors.password.message}
                  </p>
                )}
              </div>

              {/* Register In button  */}
              <button
                className="bg-[#002D74] text-white py-2 rounded-xl hover:scale-105 duration-300 hover:bg-[#206ab1] font-medium"
                type="submit"
              >
                Register Now
              </button>
            </form>

            {/* Or Text  */}
            <div className="mt-6  items-center text-gray-100">
              <hr className="border-gray-300" />
              <p className="text-center text-sm my-2">OR</p>
              <hr className="border-gray-300" />
            </div>

            {/* Google Button */}
            <button onClick={handleGoogleSignIn} className="bg-white/10 border py-2 w-full rounded-xl mt-5 flex justify-center items-center text-sm hover:scale-105 duration-300 hover:bg-[#60a8bc4f] font-medium">
              <svg
                className="mr-3"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 48"
                width="25px"
              >
                <path
                  fill="#FFC107"
                  d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                ></path>
                <path
                  fill="#FF3D00"
                  d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                ></path>
                <path
                  fill="#4CAF50"
                  d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                ></path>
                <path
                  fill="#1976D2"
                  d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                ></path>
              </svg>
              Login with Google
            </button>

          {/* Register Link  */}
            <div className="mt-4 text-sm flex justify-between items-center container-mr">
              <p className="mr-3 md:mr-0 ">
                Already have an account..
              </p>
              <Link to="/login">
              <button className="hover:border register text-white bg-[#002D74] hover:border-gray-400 rounded-xl py-2 px-5 hover:scale-110 hover:bg-[#002c7424] font-semibold duration-300">
                Log In
              </button>
              </Link>
            </div>
          </div>

          {/* Banner  */}
          <div className="md:block hidden w-1/2">
            <img
              className="rounded-2xl min-h-[500px]"
              src={bannerImg}
              alt="login form image"
            />
          </div>
        </div>
      </section>
        </div>
  )
}

export default Register