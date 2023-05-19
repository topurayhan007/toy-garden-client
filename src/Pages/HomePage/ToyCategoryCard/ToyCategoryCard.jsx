/* eslint-disable react/prop-types */
import LazyLoad from "react-lazy-load";
import Rating from "react-rating";
import { BsStarFill, BsStar } from "react-icons/bs";
import { FaArrowRight } from "react-icons/fa";

const ToyCategoryCard = ({ toy }) => {
  const { _id, name, pictureURL, price, rating } = toy;
  return (
    <div className="card card-compact md:w-96 w-80 bg-base-100 shadow-md border border-slate-200 hover:scale-105 transition-transform duration-300 ease-out transform">
      <figure className="md:h-[450px] h-[300px]">
        <img
          src={pictureURL}
          alt={`${name}'s Image`}
          className="w-full h-full object-cover"
        />
      </figure>
      <div className="card-body bg-[#f2e3ff] p-0">
        <p className="bg-transparent hover:bg-transparent text-orange-500 normal-case text-xl font-bold flex justify-center items-center">
          <Rating
            readonly="true"
            className="me-2"
            initialRating={rating}
            emptySymbol={<BsStar className="me-1" />}
            fullSymbol={<BsStarFill className="me-1" />}
          />
          <span className="text-black">{rating}</span>
        </p>
        <div className="flex justify-between items-center">
          <div className="flex-grow w-max">
            <h2 className="card-title text-3xl">${price}</h2>
          </div>
          <div>
            <button className="btn btn-circle bg-[#2F0743] text-orange-500 hover:bg-purple-900">
              <FaArrowRight className="text-xl" />
            </button>
          </div>
        </div>
      </div>
      <div className="card-body justify-center text-center items-center bg-[#2F0743] text-white rounded-br-2xl rounded-bl-2xl">
        <h2 className="card-title text-center ">{name}</h2>
      </div>
    </div>
  );
};

export default ToyCategoryCard;
