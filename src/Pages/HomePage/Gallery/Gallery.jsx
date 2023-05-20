/* eslint-disable react/no-unknown-property */
import "./Gallery.css";

const Gallery = () => {
  return (
    <div className="md:my-32 mt-10 mb-14">
      <h2 className="text-xl md:text-5xl pb-6 md:pb-12 font-bold text-[#2F0743]">
        Our Featured Gallery
      </h2>
      <div className="mx-auto max-w-7xl">
        <div className="parent md:h-[800px] px-3 md:px-0">
          <div className="div2 w-full rounded-lg overflow-hidden">
            <img
              className="rounded-lg w-full h-full object-cover transform transition-all duration-300 hover:scale-110"
              src="https://live.staticflickr.com/65535/48696359333_3128e089f4_b.jpg"
              alt=""
            />{" "}
          </div>
          <div className="div3 w-full rounded-lg overflow-hidden">
            <img
              className="rounded-lg w-full h-full object-cover transform transition-all duration-300 hover:scale-110"
              src="https://live.staticflickr.com/65535/46858076645_a1cb5744bb_b.jpg"
              alt=""
            />{" "}
          </div>
          <div className="div1 w-full rounded-lg overflow-hidden">
            <img
              className="rounded-lg w-full h-full object-cover transform transition-all duration-300 hover:scale-110"
              src="https://c0.wallpaperflare.com/preview/878/814/409/guardians-of-the-galaxy-groot-ceramic-figurine.jpg"
              alt=""
            />{" "}
          </div>
          <div className="div4 w-full rounded-lg overflow-hidden">
            <img
              className="rounded-lg w-full h-full object-cover transform transition-all duration-300 hover:scale-110"
              src="https://p1.pxfuel.com/preview/877/838/473/superman-super-strength-muscles-superhero-hero.jpg"
              alt=""
            />{" "}
          </div>
          <div className="div5 w-full rounded-lg overflow-hidden">
            <img
              className="rounded-lg w-full h-full object-cover transform transition-all duration-300 hover:scale-110"
              src="https://live.staticflickr.com/65535/49395861763_f0317a9864_b.jpg"
              alt=""
            />{" "}
          </div>
          <div className="div6 w-full rounded-lg overflow-hidden">
            <img
              className="rounded-lg w-full h-full object-cover transform transition-all duration-300 hover:scale-110"
              src="https://live.staticflickr.com/8519/8488933878_e85e63f4ea_b.jpg"
              alt=""
            />{" "}
          </div>
          <div className="div7 w-full rounded-lg overflow-hidden">
            <img
              className="rounded-lg w-full h-full object-cover transform transition-all duration-300 hover:scale-110"
              src="https://live.staticflickr.com/65535/49602768971_97bffedc8a_b.jpg"
              alt=""
            />{" "}
          </div>
          <div className="div8 w-full rounded-lg overflow-hidden">
            <img
              className="rounded-lg w-full h-full object-cover transform transition-all duration-300 hover:scale-110"
              src="https://www.maxpixel.net/static/photo/1x/Toy-Bear-Art-Teddy-Hulk-Modern-Battle-Superhero-6878197.jpg"
              alt=""
            />{" "}
          </div>
          <div className="div9 w-full rounded-lg overflow-hidden">
            <img
              className="rounded-lg w-full h-full object-cover transform transition-all duration-300 hover:scale-110"
              src="https://live.staticflickr.com/7317/8747641624_649bf6c6fe_b.jpg"
              alt=""
            />{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
