import { useContext, useEffect, useState } from "react";
import MyToyRow from "../MyToyRow/MyToyRow";
import { AuthContext } from "../../providers/AuthProvider";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [userToys, setUserToys] = useState([]);
  const [loading, setLoading] = useState(true);
  const url = `https://toy-garden-server.vercel.app/my-toys/${user?.email}`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setUserToys(data);
        setLoading(false);
      });
  }, [url]);

  return (
    <div className="my-24 mx-auto max-w-7xl text-center">
      <h2 className="font-bold text-5xl text-[#2F0743] mb-8">My Added Toys</h2>
      {loading === true ? (
        <div className="my-14 flex justify-center">
          <div
            className="radial-progress animate-spin text-[#ea6802]"
            style={{ "--value": 85 }}
          ></div>
        </div>
      ) : (
        <div className="overflow-x-auto w-full border border-purple-900 border-t-[10px] rounded-xl">
          <table className="table w-full even:bg-slate-900 table-auto">
            {/* head */}
            <thead>
              <tr>
                <th className="bg-[#f8efff] border-b-2 border-purple-100 normal-case text-xl w-36 text-center">
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
                <MyToyRow key={toy._id} toy={toy}></MyToyRow>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default MyToys;
