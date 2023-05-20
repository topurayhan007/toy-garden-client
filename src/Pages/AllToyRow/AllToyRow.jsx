/* eslint-disable react/prop-types */
import { RxUpdate } from "react-icons/rx";
import Rating from "react-rating";
import { BsStarFill, BsStar } from "react-icons/bs";
import { Link } from "react-router-dom";

const AllToyRow = ({ toy }) => {
  const {
    _id,
    name,
    subCategory,
    rating,
    sellerEmail,
    sellerName,
    pictureURL,
    price,
    quantity,
    description,
  } = toy;

  return (
    <tr className=" ">
      <td className="border-b-2 border-b-purple-50">
        <div className="flex items-center gap-3 text-lg mx-0">
          <div className="avatar">
            <div className="mask mask-circle w-24 h-24">
              <img src={pictureURL} alt="" className="" />
            </div>
          </div>
          <div>
            <div className="font-bold mr-0 text-xl text-[#2F0743]">{name}</div>
            <p className="mt-1 bg-transparent hover:bg-transparent text-orange-500 normal-case text-base font-bold flex justify-start items-center">
              <Rating
                readonly="true"
                className="me-1"
                initialRating={rating}
                emptySymbol={<BsStar className="" />}
                fullSymbol={<BsStarFill className="" />}
              />
              <span className="text-black">{rating}</span>
            </p>
            <div className="text-purple-800 bg-purple-50 w-max px-5 rounded-full py-1 mt-2">
              {subCategory}
            </div>
          </div>
        </div>
      </td>
      <td className="border-b-2 border-b-purple-50">
        <p className="font-medium text-lg text-center">${price}</p>
      </td>
      <td className="border-b-2 border-b-purple-50">
        <p className="font-medium text-lg text-center">{quantity}</p>
      </td>

      <td className="min-w-[12rem] max-w-[23rem] whitespace-normal border-b-2 border-b-purple-50">
        <div className="flex justify-left">
          <p className="">{description}</p>
        </div>
      </td>
      <td className="border-b-2 border-b-purple-50">
        <div className="flex items-center space-x-3 text-lg justify-center">
          <Link to={`/toy/${_id}`}>
            <button className="btn normal-case text-lg rounded-full font-medium bg-indigo-200 hover:bg-indigo-300 hover:border-blue-400 border-2 border-blue-400 text-blue-700">
              View Details <RxUpdate className="ms-2 text-blue-700" />
            </button>
          </Link>
        </div>
      </td>
    </tr>
  );
};

export default AllToyRow;
