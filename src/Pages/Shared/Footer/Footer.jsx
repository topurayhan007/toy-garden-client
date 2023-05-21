import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { FiGlobe } from "react-icons/fi";

const Footer = () => {
  return (
    <div className="bg-gradient-to-b from-[#2F0743] to-[#090748] md:mt-60 mt-20">
      <div className="mx-auto max-w-7xl pb-12 pt-24">
        <footer className="p-10  text-white grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 md:gap-0">
          <div className="flex flex-col gap-3">
            <span className="font-extrabold text-[#fcd787] text-2xl">
              Company
            </span>
            <a className="link font-bold text-lg link-hover">About Us</a>
            <a className="link font-bold text-lg link-hover">Our Team</a>
            <a className="link font-bold text-lg link-hover">Partnerships</a>
            <a className="link font-bold text-lg link-hover">Contact Us</a>
          </div>
          <div className="flex flex-col gap-3">
            <span className="font-extrabold text-[#fcd787] text-2xl">
              Services
            </span>
            <a className="link font-bold text-lg link-hover">Toy Sourcing</a>
            <a className="link font-bold text-lg link-hover">Fast Delivery</a>
            <a className="link font-bold text-lg link-hover">
              Customer Support
            </a>
            <a className="link font-bold text-lg link-hover">Advertisement</a>
          </div>
          <div className="flex flex-col gap-3">
            <span className="font-extrabold text-[#fcd787] text-2xl">
              Legal
            </span>
            <a className="link font-bold text-lg link-hover">Terms of Policy</a>
            <a className="link font-bold text-lg link-hover">Privacy Policy</a>
            <a className="link font-bold text-lg link-hover">Cookie Policy</a>
          </div>
        </footer>
        <footer className="footer p-10 text-white">
          <div className=" flex flex-col gap-8">
            <div className="flex items-center">
              <img src="./assets/logos/logo.png" className="w-20" alt="" />
              <p className="">
                <span className="text-5xl tracking-wide font-extrabold font-frosty">
                  {" "}
                  Toy Garden
                </span>
              </p>
            </div>
            <div>
              <span className="font-extrabold text-[#fcd787] text-2xl">
                Social
              </span>
              <div className="grid grid-flow-col gap-4 mt-5">
                <a href="https://github.com/topurayhan007">
                  <FaGithub className="text-4xl" />
                </a>
                <a href="https://www.linkedin.com/in/topurayhan007/">
                  <FaLinkedinIn className="text-4xl" />
                </a>
                <a href="https://www.topurayhan.live/">
                  <FiGlobe className="text-4xl" />
                </a>
                <a href="https://www.instagram.com/topurayhan007">
                  <FaInstagram className="text-4xl" />
                </a>
                <a href="https://www.facebook.com/topurayhan007">
                  <FaFacebook className="text-4xl" />
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="mt-8">
              <span className="font-extrabold text-[#fcd787] text-2xl">
                Newsletter
              </span>
              <div className="form-control w-80">
                <label className="label">
                  <span className="text-white text-xl font-bold mt-5 label-text">
                    Enter your email
                  </span>
                </label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="username@site.com"
                    className="input input-bordered w-full pr-16"
                  />
                  <button className="btn bg-[#ffad00] border-0 text-black absolute top-0 right-0 rounded-l-none">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
      <footer className="footer footer-center p-4 bg-[#2F0743] text-white text-bold text-xl">
        <div>
          <p>
            Copyright © 2023. All Right Reserved by{" "}
            <code>
              <a
                href="https://www.linkedin.com/in/topurayhan007/"
                className="text-[#fcd787] px-3"
              >
                topurayhan007
              </a>
            </code>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
