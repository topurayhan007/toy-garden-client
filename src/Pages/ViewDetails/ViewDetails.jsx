import { useLoaderData } from "react-router-dom";
import Rating from "react-rating";
import { BsStarFill, BsStar } from "react-icons/bs";
import { Helmet } from "react-helmet-async";

const ViewDetails = () => {
  const toyDetails = useLoaderData();

  return (
    <div className=" ">
      <Helmet>
        <title>Toy Garden | Toy Details</title>
      </Helmet>
      <div className="flex justify-center mt-16 mb-5">
        <h2 className="card-title md:text-5xl text-purple-900">
          {toyDetails.name}
        </h2>
      </div>
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-center pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <div
            className="inline-block align-center bg-white rounded-2xl text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle  md:h-[650px]"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-headline"
          >
            <div className="card md:card-side bg-[#f9f4fd] shadow-xl border h-full">
              <div className="card-body p-0 order-2 md:order-1 flex-1">
                <div className="card-body p-16">
                  <p className="text-2xl text-md text-[#53445b]">
                    <span className="text-2xl font-bold text-purple-900">
                      Seller Name:{" "}
                    </span>{" "}
                    {toyDetails.sellerName}
                  </p>
                  <p className="text-2xl text-md text-[#53445b]">
                    <span className="text-2xl font-bold text-purple-900">
                      Seller Email:{" "}
                    </span>{" "}
                    {toyDetails.sellerEmail}
                  </p>
                  <p className="text-2xl text-md text-[#53445b]">
                    <span className="text-2xl font-bold text-purple-900">
                      Quantity:{" "}
                    </span>{" "}
                    {toyDetails.quantity}
                  </p>
                  <p className="text-2xl text-md text-[#53445b]">
                    <span className="text-2xl font-bold text-purple-900">
                      Rating:{" "}
                    </span>{" "}
                    <Rating
                      readonly="true"
                      className="me-2"
                      initialRating={toyDetails.rating}
                      emptySymbol={<BsStar className="ms-1 text-orange-500" />}
                      fullSymbol={
                        <BsStarFill className="ms-1 text-orange-500" />
                      }
                    />
                    {toyDetails.rating}
                  </p>
                  <p className="text-2xl text-md text-[#53445b] leading-relaxed">
                    <span className="text-2xl font-bold text-purple-900">
                      Description:{" "}
                    </span>{" "}
                    {toyDetails.description}
                  </p>
                </div>

                <div className="card-actions justify-end pt-2">
                  <div className="flex justify-center items-center py-6 text-white w-full bg-[#2F0743] md:rounded-none text-3xl">
                    ${toyDetails.price}
                  </div>
                </div>
              </div>
              <figure className="relative flex-1 order-1 md:order-2 h-[650px] w-full rounded-bl-none rounded-br-none md:rounded-bl-none md:rounded-br-">
                <img
                  src={toyDetails.pictureURL}
                  alt=""
                  className="h-full w-full object-cover"
                />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;
