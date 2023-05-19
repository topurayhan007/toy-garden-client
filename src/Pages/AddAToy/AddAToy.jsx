/* eslint-disable react/no-unescaped-entities */
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const AddAToy = () => {
  const { user } = useContext(AuthContext);
  console.log(user.email);
  return (
    <div>
      <div className="mt-10 pb-10  px-3 md:px-0">
        <div className="card flex-shrink-0 w-full border border-purple-100 max-w-4xl mx-auto mt-16 drop-shadow-sm shadow-md bg-[#fffeff]">
          <p className="text-5xl font-bold text-center text-[#2F0743] card-body pb-5 mt-4">
            Add Your Toy
          </p>

          <form onSubmit={""}>
            <div className="card-body pb-9 pt-5 ">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-lg font-semibold">
                      Toy's Name
                    </span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Your toy name"
                    className="input input-bordered border-[1.8px] rounded-full border-[#722495] text-lg"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-lg font-semibold">
                      Toy's Sub Category
                    </span>
                  </label>
                  <input
                    type="text"
                    name="subCategory"
                    required
                    placeholder="Your toy subcategory"
                    className="input input-bordered border-[1.8px] rounded-full border-[#722495] text-lg"
                  />
                </div>
                <div className="form-control">
                  <label className="label ">
                    <span className="label-text text-lg font-semibold">
                      Your Name
                    </span>
                  </label>
                  <input
                    type="text"
                    name="sellerName"
                    required
                    defaultValue={user.displayName}
                    placeholder="Your name"
                    className="input input-bordered border-[1.8px] rounded-full border-[#722495] text-lg"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-lg font-semibold">
                      Your Email
                    </span>
                  </label>
                  <input
                    type="email"
                    name="sellerEmail"
                    required
                    defaultValue={user.email}
                    placeholder="Your email"
                    className="input input-bordered border-[1.8px] rounded-full border-[#722495] text-lg"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-lg font-semibold">
                      Toy's Price
                    </span>
                  </label>
                  <input
                    type="number"
                    name="price"
                    required
                    placeholder="Your toy price"
                    className="input input-bordered border-[1.8px] rounded-full border-[#722495] text-lg"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-lg font-semibold">
                      Toy's Rating
                    </span>
                  </label>
                  <input
                    type="number"
                    name="rating"
                    required
                    placeholder="Your toy rating"
                    className="input input-bordered border-[1.8px] rounded-full border-[#722495] text-lg"
                  />
                </div>
                <div className="form-control">
                  <label className="label ">
                    <span className="label-text text-lg font-semibold">
                      Toy's Quantity
                    </span>
                  </label>
                  <input
                    type="number"
                    name="quantity"
                    required
                    placeholder="Your toy quantity"
                    className="input input-bordered border-[1.8px] rounded-full border-[#722495] text-lg"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-lg font-semibold">
                      Toy's Photo URL
                    </span>
                  </label>
                  <input
                    type="text"
                    name="pictureURL"
                    required
                    placeholder="Your toy photo url"
                    className="input input-bordered border-[1.8px] rounded-full border-[#722495] text-lg"
                  />
                </div>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-lg font-semibold">
                    Toy's Description
                  </span>
                </label>
                <textarea
                  type="text"
                  name="description"
                  required
                  placeholder="Your toy description"
                  className="input input-bordered border-[1.8px] h-24 py-4 rounded-3xl border-[#722495] text-lg"
                ></textarea>
              </div>
              <div className="form-control mt-8">
                <button
                  type="submit"
                  className="btn hover:bg-purple-800 bg-[#722495] text-white rounded-full font-bold px-6 mb-12 normal-case text-lg border-0"
                >
                  Sumbit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddAToy;
