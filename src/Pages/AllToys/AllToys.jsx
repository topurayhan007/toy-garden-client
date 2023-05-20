import { useEffect, useState } from "react";
import AllToyRow from "../AllToyRow/AllToyRow";

const AllToys = () => {
  const [allToys, setAllToys] = useState([]);
  const [slicedToys, setSlicedToys] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://toy-garden-server.vercel.app/toys`)
      .then((res) => res.json())
      .then((data) => {
        setAllToys(data);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    const slicedDatas = allToys.slice(0, 20);
    setSlicedToys(slicedDatas);
  }, [allToys]);

  return (
    <div className="mb-24">
      <div className="mt-24 mx-auto max-w-7xl text-center">
        <h2 className="font-bold text-5xl text-[#2F0743] mb-8">All Toys</h2>
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
                    Seller Name
                  </th>
                  <th className="bg-[#f8efff] border-b-2 border-purple-100 normal-case text-xl text-center">
                    Toy Name
                  </th>
                  <th className="bg-[#f8efff] border-b-2 border-purple-100 normal-case text-xl text-center">
                    Sub Category
                  </th>
                  <th className="bg-[#f8efff] border-b-2 border-purple-100 normal-case text-xl text-center ">
                    Price
                  </th>
                  <th className="bg-[#f8efff] border-b-2 border-purple-100 normal-case text-xl text-center ">
                    Available Quantiy
                  </th>
                  <th className="bg-[#f8efff] border-b-2 border-purple-100 normal-case text-xl text-center">
                    Actions
                  </th>
                </tr>
              </thead>

              <tbody className="">
                {/* Row */}
                {slicedToys.map((toy) => (
                  <AllToyRow key={toy._id} toy={toy}></AllToyRow>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Pagination Maybe in Future */}
      <div className="mt-24 mx-auto max-w-7xl text-center">
        <div className="text-right flex justify-end">
          <p className="text-xl p-4 rounded-xl bg-purple-50 w-max text-[#9491f5]">
            Showing{" "}
            <span className="font-extrabold text-xl px-2 text-purple-500">
              {slicedToys.length}
            </span>{" "}
            of{" "}
            <span className="font-extrabold text-xl px-2 text-purple-500">
              {" "}
              {allToys.length}
            </span>
          </p>
        </div>
        {/* Pagination design goes here */}
        <div></div>
      </div>
    </div>
  );
};

export default AllToys;
