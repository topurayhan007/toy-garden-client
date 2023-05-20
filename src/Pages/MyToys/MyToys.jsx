import { useContext, useEffect, useState } from "react";
import MyToyRow from "../MyToyRow/MyToyRow";
import { AuthContext } from "../../providers/AuthProvider";
import { IoMdCloseCircle } from "react-icons/io";
import Swal from "sweetalert2";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [userToys, setUserToys] = useState([]);
  // const [remainingToys, setRemainingToys] = useState([]);
  const [selectedToy, setSelectedToy] = useState({});
  const [loading, setLoading] = useState(true);
  const [modalState, setModalState] = useState(false);

  useEffect(() => {
    const url = `https://toy-garden-server.vercel.app/my-toys/${user?.email}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setUserToys(data);
        setLoading(false);
      });
  }, [user?.email]);

  const handleOpenModal = (iD) => {
    console.log(iD);
    const filteredToy = userToys.filter((toy) => toy._id === iD);
    console.log(filteredToy[0]);
    setSelectedToy(filteredToy[0]);

    setModalState(true);
  };
  const handleCloseModal = () => {
    setModalState(false);
  };

  const handleUpdateToy = (event) => {
    event.preventDefault();
    const form = event.target;
    const price = parseFloat(form.price.value);
    const quantity = parseInt(form.quantity.value);
    const description = form.description.value;

    const updatedToy = {
      price,
      quantity,
      description,
    };

    // Updated data sent to server
    fetch(`https://toy-garden-server.vercel.app/toys/${selectedToy._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedToy),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Toy info updated successfully!",
            icon: "success",
            confirmButtonText: "Okay",
          });

          fetch(`https://toy-garden-server.vercel.app/my-toys/${user?.email}`)
            .then((res) => res.json())
            .then((data) => {
              const remaining = userToys.filter(
                (toy) => toy._id !== selectedToy._id
              );
              const updated = data.find((toy) => toy._id === selectedToy._id);
              const newUserToys = [updated, ...remaining];
              console.log(newUserToys);
              setUserToys(newUserToys);
            });

          // form.reset();
        } else {
          Swal.fire(
            "Error!",
            "Toy info couldn't be updated. Please try again!",
            "error"
          );
        }
      });
  };

  // Delete toy function
  const handleToyDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://toy-garden-server.vercel.app/toys/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "The toy has been deleted.", "success");

              const remaining = userToys.filter((toy) => toy._id !== _id);
              setUserToys(remaining);
            } else {
              Swal.fire(
                "Error!",
                "The toy couldn't be deleted. Please try again!",
                "error"
              );
            }
          });
      }
    });
  };

  return (
    <div className="">
      <div className="my-24 mx-auto max-w-7xl text-center">
        <h2 className="font-bold text-5xl text-[#2F0743] mb-8">
          My Added Toys
        </h2>
        {loading === true ? (
          <div className="my-14 flex justify-center">
            <div
              className="radial-progress animate-spin text-[#ea6802]"
              style={{ "--value": 85 }}
            ></div>
          </div>
        ) : (
          <div className="overflow-x-auto w-full border-purple-900 border-t-[10px] border-l-2 border-l-purple-50 border-r-2 border-r-purple-50 rounded-xl">
            <table className="table w-full even:bg-slate-900 table-auto">
              {/* head */}
              <thead>
                <tr>
                  <th className="bg-[#f8efff] border-b-2 border-purple-100 normal-case text-xl z-0 text-center">
                    Name & Info
                  </th>
                  <th className="bg-[#f8efff] border-b-2 border-purple-100 normal-case text-xl text-center">
                    Price
                  </th>
                  <th className="bg-[#f8efff] border-b-2 border-purple-100 normal-case text-xl text-center">
                    Quantity
                  </th>
                  <th className="bg-[#f8efff] border-b-2 border-purple-100 normal-case text-xl text-center ">
                    Description
                  </th>
                  <th className="bg-[#f8efff] border-b-2 border-purple-100 normal-case text-xl text-center">
                    Actions
                  </th>
                </tr>
              </thead>

              <tbody className="">
                {/* Row */}
                {userToys.map((toy) => (
                  <MyToyRow
                    key={toy._id}
                    toy={toy}
                    handleOpenModal={handleOpenModal}
                    handleToyDelete={handleToyDelete}
                  ></MyToyRow>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
      {/* Modal */}
      <div>
        {modalState && (
          <>
            <div
              className={
                modalState === true
                  ? "fixed z-50 md:overflow-y-auto top-0 w-full left-0 overflow-y-scroll h-screen"
                  : "hidden"
              }
              id="modal"
            >
              <div className="relative">
                <div className="flex items-center justify-center min-height-100vh pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                  <div className="fixed inset-0 transition-opacity">
                    <div className="absolute inset-0 bg-gray-900 opacity-75" />
                  </div>
                  <span className="hidden sm:inline-block sm:align-middle sm:h-screen">
                    &#8203;
                  </span>
                  <div
                    className="inline-block align-center bg-white rounded-2xl text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full md:max-w-3xl md:h-[550px]"
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby="modal-headline"
                  >
                    <div className="card md:card-side bg-[#f9f4fd] shadow-xl h-full">
                      <figure className="relative flex-1 order-1 md:order-1 h-full w-full rounded-bl-none rounded-br-none md:rounded-bl-none md:rounded-br-">
                        <img
                          src={selectedToy.pictureURL}
                          alt=""
                          className="h-full w-full object-cover"
                        />
                      </figure>
                      <div className="card-body p-0 order-2 md:order-1">
                        <div className="card-body">
                          <div className="flex justify-center">
                            <h2 className="card-title md:text-2xl text-center text-[#2F0743]">
                              Update Info of {selectedToy.name}
                            </h2>
                          </div>
                          <form onSubmit={handleUpdateToy}>
                            <div className=" card-body pb-9 pt-5">
                              <div className="form-control">
                                <label className="label">
                                  <span className="label-text font-semibold text-lg">
                                    Toy Price
                                  </span>
                                </label>
                                <input
                                  type="number"
                                  step="0.01"
                                  name="price"
                                  pattern="^\d+(?:\.\d{1,2})?$"
                                  defaultValue={selectedToy.price}
                                  required
                                  placeholder="Your toy price"
                                  className="input input-bordered border-[1.8px] rounded-full border-[#722495] text-lg"
                                />
                              </div>
                              <div className="form-control">
                                <label className="label">
                                  <span className="label-text font-semibold text-lg">
                                    Toy Quantity
                                  </span>
                                </label>
                                <input
                                  type="number"
                                  name="quantity"
                                  min="0"
                                  step="1"
                                  required
                                  defaultValue={selectedToy.quantity}
                                  placeholder="Your toy quantity"
                                  className="input input-bordered border-[1.8px] rounded-full border-[#722495] text-lg"
                                />
                              </div>
                              <div className="form-control">
                                <label className="label">
                                  <span className="label-text font-semibold text-lg">
                                    Toy Description
                                  </span>
                                </label>
                                <textarea
                                  type="text"
                                  name="description"
                                  required
                                  defaultValue={selectedToy.description}
                                  placeholder="Your toy description"
                                  className="input input-bordered border-[1.8px] h-[105px] py-1 no-scrollbar rounded-3xl border-[#722495] text-base"
                                ></textarea>
                              </div>
                              <div className="card-actions justify-end mt-3">
                                <button className="btn normal-case rounded-full py-3 h-14 text-white w-full bg-[#2F0743] text-xl">
                                  Update Toy
                                </button>
                              </div>
                            </div>
                          </form>
                        </div>

                        <IoMdCloseCircle
                          onClick={handleCloseModal}
                          className="absolute top-0 right-0 btn btn-circle  bg-white text-[#2F0743] hover:bg-white hover:text-[#2F0743]"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default MyToys;
