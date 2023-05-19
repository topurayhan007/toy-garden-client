import { RxUpdate } from "react-icons/rx";
import { AiFillDelete } from "react-icons/ai";

const MyToyRow = () => {
  return (
    <tr className="">
      <td>
        <div className="flex items-center gap-3 text-lg mx-0">
          <div className="avatar">
            <div className="mask mask-circle w-24 h-24">
              <img
                src="https://c0.wallpaperflare.com/preview/878/814/409/guardians-of-the-galaxy-groot-ceramic-figurine.jpg"
                alt=""
              />
            </div>
          </div>
          <div>
            <div className="font-bold mr-0 text-xl text-[#2F0743]">
              Obi-Wan Kenobi Action Figure
            </div>
            <div className="text-purple-800 bg-purple-50 w-max px-5 rounded-full py-1 mt-2">
              Marvel
            </div>
          </div>
        </div>
      </td>
      <td>
        <p className="font-medium text-lg text-center">$24.99</p>
      </td>
      <td>
        <p className="font-medium text-lg text-center">59</p>
      </td>

      <td>
        <div className="flex justify-left">
          <p className="">The quick brown fox killed the bear</p>
        </div>
      </td>
      <td>
        <div className="flex items-center space-x-3 text-lg justify-center">
          <button className="btn normal-case text-lg rounded-full font-medium bg-green-200 hover:bg-green-300 hover:border-emerald-400 border-2 border-emerald-400 text-emerald-700">
            Update <RxUpdate className="ms-2 text-emerald-700" />
          </button>
          <button className="btn normal-case text-lg rounded-full font-medium bg-red-200 hover:bg-red-300 hover:border-rose-400 border-2 border-rose-400 text-rose-700">
            Delete <AiFillDelete className="ms-2 text-rose-700" />
          </button>
        </div>
      </td>
    </tr>
  );
};

export default MyToyRow;
