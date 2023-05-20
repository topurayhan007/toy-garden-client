/* eslint-disable react/prop-types */
import LazyLoad from "react-lazy-load";
import Rating from "react-rating";
import { BsStarFill, BsStar } from "react-icons/bs";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const ToyCategoryCard = ({ toy, handleOpenModal }) => {
  const { _id, name, pictureURL, price, rating } = toy;

  return (
    <div>
      <div className="card card-compact md:w-96 w-full bg-base-100 shadow-md border border-slate-200 hover:scale-105 transition-transform duration-300 ease-out transform">
        <LazyLoad height={450} offset={200} threshold={0.95} className="">
          <figure className="h-[450px] rounded-tr-2xl rounded-tl-2xl">
            <img
              src={pictureURL}
              alt={`${name}'s Image`}
              className="w-full h-full object-cover"
            />
          </figure>
        </LazyLoad>

        <div className="card-body bg-[#f9f4fd] p-0">
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
            <div className="flex-grow w-max ">
              <h2 className="card-title text-4xl">${price}</h2>
            </div>
            <div>
              <Link /* to={`/toy/${_id}`} */>
                <label
                  htmlFor="my-modal"
                  onClick={() => {
                    handleOpenModal(_id);
                  }}
                  className="btn rounded-full text-lg normal-case bg-[#2F0743] text-white hover:bg-purple-900"
                >
                  View Details{" "}
                  <FaArrowRight className="text-xl ms-2 text-orange-500" />
                </label>
              </Link>
            </div>
          </div>
        </div>
        <div className="card-body justify-center text-center items-center bg-[#2F0743] text-white rounded-br-2xl rounded-bl-2xl">
          <h2 className="card-title text-center ">{name}</h2>
        </div>
      </div>
    </div>
  );
};

export default ToyCategoryCard;
