/* eslint-disable react/no-unknown-property */
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div>
      <div className="">
        <div className="hero py-7 px-3 gap-0 bg-blue-100">
          <div className="text-center text-neutral-content">
            <div className=" flex justify-center items-center flex-col md:flex-row">
              <div className="flex-1 w-full h-72 md:h-4/5">
                <img
                  src="./assets/images/banner-5.png"
                  className="md:h-full w-full object-cover"
                  alt=""
                />
              </div>
              <div className="flex flex-col justify-center items-left">
                <h1 className="lg:text-8xl text-4xl text-transparent drop-shadow-[0_1.5px_1.5px_rgba(0,0,0,0.8)] bg-clip-text py-3 bg-gradient-to-r from-[#090748]  to-[#2F0743] text-left font-extrabold">
                  Elevate Your Collection <br />{" "}
                  <span className="md:text-7xl text-3xl md:font-bold font-semibold text-[#ffad00] drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
                    with Premium
                  </span>{" "}
                  <br /> Action Figures
                </h1>
                <p className="text-left md:py-5 py-2 mb-3 md:mb-3 md:leading-normal leading-tight text-base-content text-lg">
                  Immerse yourself in a universe of imagination and wonder as{" "}
                  <br />
                  you explore our extensive selection of action figures from{" "}
                  <br />
                  your favorite franchises.
                </p>
                <div className="flex justify-start">
                  <Link to="/register">
                    <button className="md:py-4 py-2 px-8 flex items-center rounded-full btn-outline border-[3px] hover:bg-[#2F0743] hover:text-white normal-case text-xl font-bold text-[#5e1781] border-[#5e1781]">
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
