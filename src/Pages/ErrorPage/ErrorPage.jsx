import errorImg from "../../assets/Error.json";
import Lottie from "lottie-react";
import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div className="flex flex-col min-h-screen items-center justify-center">
      <p>{error?.code}</p>
      <Lottie animationData={errorImg} className="max-w-[500px] "></Lottie>
      <Link
        to="/"
        className="bg-white/5 py-4 px-5 uppercase font-bold rounded-full flex justify-center items-center gap-4 hover:bg-white/10"
      >
        Go to home
      </Link>
    </div>
  );
};

export default ErrorPage;
