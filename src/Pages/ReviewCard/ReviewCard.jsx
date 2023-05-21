/* eslint-disable react/prop-types */

import { BsStarFill } from "react-icons/bs";

const ReviewCard = ({ review }) => {
  return (
    <div>
      <div className=" bg-blue-50 h-96 shadow-md rounded-xl relative">
        <div className="card-body">
          <div className=" flex justify-end">
            <div className="px-7 py-2 bg-[#ffad00] border-2 border-black rounded-full text-black text-lg font-bold">
              <p className="flex justify-center items-center">
                <BsStarFill className="me-2" />
                {review.rating}
              </p>
            </div>
          </div>
        </div>
        <div className="card-body items-center text-left text-xl py-2 flex-1">
          <p className="text-transparent drop-shadow-[0_1px_1px_rgba(0,0,0,0.2)] bg-clip-text py-3 bg-gradient-to-r from-[#090748]  to-[#2F0743]">
            {review.review}
          </p>
        </div>
        <div className="absolute bottom-0">
          <div className="card-body flex-row justify items-center text-lg text-[#2F0743]">
            <div className="avatar">
              <div className="w-20 rounded-full">
                <img src={review.image} />
              </div>
            </div>
            <h2>{review.name}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
