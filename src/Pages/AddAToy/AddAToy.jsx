/* eslint-disable react/no-unescaped-entities */
import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../providers/AuthProvider";
import { toast } from "react-toastify";

const AddAToy = () => {
  const { user } = useContext(AuthContext);
  // console.log(user.email);

  const handleAddToy = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const subCategory = form.subCategory.value;
    const sellerName = form.sellerName.value;
    const sellerEmail = form.sellerEmail.value;
    const price = parseFloat(form.price.value);
    const rating = parseFloat(form.rating.value);
    const quantity = parseInt(form.quantity.value);
    const pictureURL = form.pictureURL.value;
    const description = form.description.value;

    if (rating > 5 || rating < 0) {
      toast("Rating must be between 0 and 5!", {
        position: "top-center",
        type: "error",
      });
      return;
    }

    const newToy = {
      name,
      subCategory,
      sellerName,
      sellerEmail,
      price,
      rating,
      quantity,
      pictureURL,
      description,
    };
    console.log(newToy);

    // Send toy info to server to add to DB
    fetch("https://toy-garden-server.vercel.app/toy", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newToy),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged > 0) {
          Swal.fire({
            title: "Success!",
            text: "Toy added successfully!",
            icon: "success",
            confirmButtonText: "Okay",
          });
          form.reset();
        }
      });
  };

  return (
    <div>
      <div className="mt-10 pb-10  px-3 md:px-0">
        <div className="card flex-shrink-0 w-full border border-purple-100 max-w-4xl mx-auto mt-16 drop-shadow-sm shadow-md bg-[#fffeff]">
          <p className="text-5xl font-bold text-center text-[#2F0743] card-body pb-5 mt-4">
            Add Your Toy
          </p>

          <form onSubmit={handleAddToy}>
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
                    step="0.01"
                    name="price"
                    pattern="^\d+(?:\.\d{1,2})?$"
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
                    step="0.1"
                    pattern="^\d+(?:\.\d{1,2})?$"
                    min="0"
                    max="5"
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
