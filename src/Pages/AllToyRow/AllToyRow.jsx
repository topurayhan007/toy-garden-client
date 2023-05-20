/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const AllToyRow = ({ toy }) => {
  const { _id, name, subCategory, sellerName, pictureURL, price, quantity } =
    toy;

  return (
    <tr className=" ">
      <td className="border-b-2 border-b-purple-50 px-10">
        <p className="font-bold text-xl text-center text-purple-800">
          {sellerName}
        </p>
      </td>
      <td className="border-b-2 border-b-purple-50">
        <div className="flex items-center gap-3 text-lg mx-0">
          <div className="avatar">
            <div className="mask mask-circle w-24 h-24">
              <img src={pictureURL} alt="" className="" />
            </div>
          </div>
          <div>
            <div className="font-bold mr-0 text-lg text-purple-800">{name}</div>
            <p className="mt-1 bg-transparent hover:bg-transparent text-orange-500 normal-case text-base font-bold flex justify-start items-center"></p>
          </div>
        </div>
      </td>
      <td className="border-b-2 border-b-purple-50 ">
        <div className="flex justify-center">
          <div className="text-purple-800 bg-purple-50 w-max px-5 rounded-full py-1 mt-2 ">
            {subCategory}
          </div>
        </div>
      </td>

      <td className="border-b-2 border-b-purple-50">
        <div className="flex justify-center text-lg text-purple-800">
          <p className="">${price}</p>
        </div>
      </td>
      <td className="border-b-2 border-b-purple-50">
        <p className="font-medium text-lg text-center text-purple-800">
          {quantity}
        </p>
      </td>
      <td className="border-b-2 border-b-purple-50">
        <div className="flex items-center space-x-3 text-lg justify-center">
          <Link to={`/toy/${_id}`}>
            <button className="btn normal-case text-lg rounded-full font-medium bg-purple-100 hover:bg-purple-300 hover:border-purple-400 border-2 border-purple-400 text-purple-600">
              View Details{" "}
              <FaArrowRight className="text-xl ms-2 text-purple-600" />
            </button>
          </Link>
        </div>
      </td>
    </tr>
  );
};

export default AllToyRow;
