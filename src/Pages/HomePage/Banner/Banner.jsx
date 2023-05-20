/* eslint-disable react/no-unknown-property */
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div>
      <div className="">
        <div className="hero py-7 px-3 gap-0 bg-blue-100">
          <div className="text-center text-neutral-content">
            <div className=" flex justify-center items-center">
              <div className="flex-1 w-full h-4/5">
                <img
                  src="./assets/images/banner-5.png"
                  className=" object-cover"
                  alt=""
                />
              </div>
              <div className="flex flex-col justify-center items-left">
                <h1 className="lg:text-8xl text-transparent bg-clip-text py-3 bg-gradient-to-r from-[#090748]  to-[#2F0743] text-left font-extrabold">
                  Elevate Your Collection <br />{" "}
                  <span className=" text-7xl">with Premium</span> <br /> Action
                  Figures
                </h1>
                <p className="text-left py-5 text-base-content text-lg">
                  Immerse yourself in a universe of imagination and wonder as{" "}
                  <br />
                  you explore our extensive selection of action figures from{" "}
                  <br />
                  your favorite franchises.
                </p>
                <div className="flex justify-start">
                  <Link to="/register">
                    <button className=" py-4 px-8 flex items-center rounded-full btn-outline border-[3px] hover:bg-[#2F0743] hover:text-white normal-case text-xl font-bold text-[#5e1781] border-[#5e1781]">
                      Get Started <FaArrowRight className="text-xl ms-2" />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
