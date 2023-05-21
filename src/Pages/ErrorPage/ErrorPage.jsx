import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="h-screen bg-sky-100">
      <Helmet>
        <title>Toy Garden | Errorpage</title>
      </Helmet>
      <div className="flex items-center flex-col">
        <div className="h-1/2 w-1/2">
          <img src="./assets/images/404.png" alt="" className="" />
        </div>
        <div className="absolute bottom-0  mb-3 drop-shadow-[0_1.2px_1.6px_rgba(0,0,0,0.8)]">
          <Link to="/">
            <button className="px-14 py-4 text-2xl font-bold text-black rounded-full bg-[#ffad00] border-[3px] border-black ">
              Go Home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
