import MyToyRow from "../MyToyRow/MyToyRow";


const MyToys = () => {
  return (
    <div className="my-24 mx-auto max-w-7xl text-center">
      <h2 className="font-bold text-5xl text-[#2F0743] mb-8">My Added Toys</h2>
      <div className="overflow-x-auto w-full border border-purple-900 border-t-[10px]  rounded-xl">
        <table className="table w-full">
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
              <th className="bg-[#f8efff] border-b-2 border-purple-100 normal-case text-xl w-72 text-center">
                Description
              </th>
              <th className="bg-[#f8efff] border-b-2 border-purple-100 normal-case text-xl text-center">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {/* Row */}
            <MyToyRow></MyToyRow>
            <MyToyRow></MyToyRow>
            <MyToyRow></MyToyRow>
            <MyToyRow></MyToyRow>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyToys;
