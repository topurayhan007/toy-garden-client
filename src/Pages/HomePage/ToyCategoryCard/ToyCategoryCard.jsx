const ToyCategoryCard = ({ toy }) => {
  const { _id, name, pictureURL, price, rating } = toy;
  return (
    <div className="card card-compact md:w-96 w-80 bg-base-100 shadow-xl">
      <figure>
        <img src={pictureURL} alt={`${name}'s Image`} />
      </figure>
      <div className="card-body bg-[#e3f8ff] p-0">
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="flex justify-between items-center">
          <div className="flex-grow w-max">
            <h2 className="card-title text-3xl">${price}</h2>
          </div>
          <div>
            <button className="btn btn-circle bg-[#090748] text-orange-500">
              {"=>"}
            </button>
          </div>
        </div>
      </div>
      <div className="card-body justify-center text-center items-center bg-[#090748] text-white rounded-br-2xl rounded-bl-2xl">
        <h2 className="card-title text-center ">{name}</h2>
      </div>
    </div>
  );
};

export default ToyCategoryCard;
