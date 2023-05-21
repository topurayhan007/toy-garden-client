const DownloadAppSection = () => {
  return (
    <div>
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-center items-center md:flex-row flex-col">
          <div className="flex-1">
            <img
              src="https://img.freepik.com/free-vector/home-screen-concept-illustration_114360-4703.jpg?w=2000"
              alt=""
            />
          </div>
          <div className="flex-1 flex flex-col text-center justify-center">
            <h1 className="lg:text-8xl text-4xl text-transparent drop-shadow-[0_1.5px_1.5px_rgba(0,0,0,0.8)] bg-clip-text py-3 bg-gradient-to-r from-[#090748]  to-[#2F0743] text-center font-extrabold">
              Download
            </h1>
            <h3 className="md:text-7xl text-3xl md:font-bold font-semibold text-[#ffad00] drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
              Our App
            </h3>
            <div className=" mx-auto mt-16">
              <button className="flex bg-black text-white justify-center items-center w-60 px-3 py-3 rounded-2xl gap-3">
                <div>
                  <img src="./assets/images/playstore.png" alt="" />
                </div>
                <div className="flex flex-col items-start">
                  <p className="font-light text-base font-poppins">GET IT ON</p>
                  <p className=" font-medium text-2xl font-poppins">
                    Google Play
                  </p>
                </div>
              </button>
              <button className="mt-6 flex bg-black text-white justify-center items-center font-[Poppins] w-60 px-3 py-3 rounded-2xl gap-3">
                <div>
                  <img src="./assets/images/appstore.png" alt="" />
                </div>
                <div className="flex flex-col items-start">
                  <p className="font-bold text-base font-mono">
                    Download on the
                  </p>
                  <p className=" font-medium text-3xl font-poppins">
                    App Store
                  </p>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadAppSection;
