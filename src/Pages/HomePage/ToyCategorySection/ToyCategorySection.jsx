import { useContext, useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "./ToyCategorySection.css";
import ToyCategoryCard from "../ToyCategoryCard/ToyCategoryCard";
import { AuthContext } from "../../../providers/AuthProvider";
import { useNavigate } from "react-router-dom";
import Rating from "react-rating";
import { BsStarFill, BsStar } from "react-icons/bs";
import { IoMdCloseCircle } from "react-icons/io";

const ToyCategorySection = () => {
  const subCategories = {
    0: "Marvel",
    1: "DC",
    2: "Star Wars",
    3: "Transformers",
  };

  const [loading, setLoading] = useState(true);
  const [tabIndex, setTabIndex] = useState(0);
  const [toys, setToys] = useState([]);
  // console.log("TabIndex", tabIndex);
  const { user } = useContext(AuthContext);
  const [modalState, setModalState] = useState(false);
  const [toyDetails, setToyDetails] = useState(null);
  const [id, setId] = useState(null);
  const navigate = useNavigate();

  const selectedCategory = subCategories[tabIndex];
  console.log(selectedCategory);

  useEffect(() => {
    fetch("https://toy-garden-server.vercel.app/toys")
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
        setLoading(false);
      });
  }, []);

  const subCategoryData = toys.filter(
    (toy) => toy.subCategory === selectedCategory
  );

  console.log(subCategoryData);

  const handleOpenModal = (iD) => {
    if (!user?.email) {
      console.log("entered");
      navigate("/login");
    } else {
      setId(iD);
    }
  };

  useEffect(() => {
    if (id && user?.email) {
      const url = `https://toy-garden-server.vercel.app/toy/${id}`;
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          setToyDetails(data);
          setModalState(true);
          console.log(data);
        });
    }
  }, [id, user?.email]);

  console.log(toyDetails);

  const handleCloseModal = () => {
    setToyDetails(null);
    setId(null);
    console.log("asda", toyDetails);
    setModalState(false);
  };

  return (
    <div className="">
      <div className="">
        <div
          className="hero lg:h-[320px] h-[200px]"
          style={{
            backgroundImage: `url("./assets/images/sub-banner2.jpg")`,
          }}
        >
          <div className="hero-overlay bg-[#090836] bg-opacity-60 "></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-2xl">
              <div className="bg-base-300 backdrop-blur-sm bg-white/30 text-white card p-4 md:p-5 lg:p-10 h-50 flex justify-center items-center">
                <div>
                  <h1 className="mb-5 text-xl md:text-3xl font-bold">asdas</h1>
                  <div className="flex justify-center mb-2">
                    <hr className="border-[1.2px] w-16 border-orange-400  rounded" />
                  </div>
                  <p className="mb-5 font-extrabold text-base md:text-xl text-green-500">
                    ~ sada
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-screen-xl mx-auto px-3 justify-center items-center mt-3">
        <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList>
            <Tab>Marvel</Tab>
            <Tab>DC</Tab>
            <Tab>Star Wars</Tab>
            <Tab>Transformers</Tab>
          </TabList>
          {loading === true ? (
            <div className="my-14 flex justify-center mt-20">
              <div
                className="radial-progress animate-spin text-[#ea6802]"
                style={{ "--value": 85 }}
              ></div>
            </div>
          ) : (
            <div className="">
              <TabPanel>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
                  {subCategoryData.map((toy) => (
                    <ToyCategoryCard
                      key={toy._id}
                      toy={toy}
                      handleOpenModal={handleOpenModal}
                      handleCloseModal={handleCloseModal}
                    ></ToyCategoryCard>
                  ))}
                </div>
              </TabPanel>
              <TabPanel>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
                  {subCategoryData.map((toy) => (
                    <ToyCategoryCard
                      key={toy._id}
                      toy={toy}
                      handleOpenModal={handleOpenModal}
                      handleCloseModal={handleCloseModal}
                    ></ToyCategoryCard>
                  ))}
                </div>
              </TabPanel>
              <TabPanel>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
                  {subCategoryData.map((toy) => (
                    <ToyCategoryCard
                      key={toy._id}
                      toy={toy}
                      handleOpenModal={handleOpenModal}
                      handleCloseModal={handleCloseModal}
                    ></ToyCategoryCard>
                  ))}
                </div>
              </TabPanel>
              <TabPanel>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
                  {subCategoryData.map((toy) => (
                    <ToyCategoryCard
                      key={toy._id}
                      toy={toy}
                      handleOpenModal={handleOpenModal}
                      handleCloseModal={handleCloseModal}
                    ></ToyCategoryCard>
                  ))}
                </div>
              </TabPanel>
            </div>
          )}
        </Tabs>
      </div>
      <div>
        {modalState && (
          <>
            <div
              className={
                modalState === true
                  ? "fixed z-10 md:overflow-y-auto top-0 w-full left-0 overflow-y-scroll h-screen"
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
                    className="inline-block align-center bg-white rounded-2xl text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full md:max-w-2xl md:h-[450px]"
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby="modal-headline"
                  >
                    <div className="card md:card-side bg-[#f9f4fd] shadow-xl h-full">
                      <div className="card-body p-0 order-2 md:order-1 flex-1">
                        <div className="card-body">
                          <h2 className="card-title md:text-2xl">
                            {toyDetails.name}
                          </h2>
                          <p className="">
                            <span className="text-base font-bold text-[#2F0743]">
                              Seller Name:{" "}
                            </span>{" "}
                            {toyDetails.sellerName}
                          </p>
                          <p className="">
                            <span className="text-base font-bold text-[#2F0743]">
                              Seller Email:{" "}
                            </span>{" "}
                            {toyDetails.sellerEmail}
                          </p>
                          <p className="">
                            <span className="text-base font-bold text-[#2F0743]">
                              Quantity:{" "}
                            </span>{" "}
                            {toyDetails.quantity}
                          </p>
                          <p className="">
                            <span className="text-base font-bold text-[#2F0743]">
                              Rating:{" "}
                            </span>{" "}
                            <Rating
                              readonly="true"
                              className="me-2"
                              initialRating={toyDetails.rating}
                              emptySymbol={
                                <BsStar className="ms-1 text-orange-500" />
                              }
                              fullSymbol={
                                <BsStarFill className="ms-1 text-orange-500" />
                              }
                            />
                            {toyDetails.rating}
                          </p>
                          <p className="">
                            <span className="text-base font-bold text-[#2F0743]">
                              Description:{" "}
                            </span>{" "}
                            {toyDetails.description}
                          </p>
                        </div>

                        <div className="card-actions justify-end pt-2">
                          <div className="flex justify-center items-center h-16 py-3 text-white w-full bg-[#2F0743] md:rounded-none text-2xl">
                            ${toyDetails.price}
                          </div>
                        </div>
                      </div>
                      <figure className="relative flex-1 order-1 md:order-2 h-full w-full rounded-bl-none rounded-br-none md:rounded-bl-none md:rounded-br-">
                        <img
                          src={toyDetails.pictureURL}
                          alt=""
                          className="h-full w-full object-cover"
                        />
                        <IoMdCloseCircle
                          onClick={handleCloseModal}
                          className="absolute top-0 right-0 btn btn-circle  bg-white text-[#2F0743] hover:bg-white hover:text-[#2F0743]"
                        />
                      </figure>
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

export default ToyCategorySection;
