import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { toast } from "react-toastify";

const Register = () => {
  return (
    <div className="mt-10 pb-10  px-3 md:px-0">
      <div className="card flex-shrink-0 w-full border border-purple-100 max-w-md mx-auto mt-16 drop-shadow-sm shadow-md bg-[#fffeff]">
        <p className="text-3xl font-bold text-center card-body pb-5">Sign Up</p>

        <div className="px-8 mt-0 pt-8 flex flex-col gap-4">
          <div className="form-control mb-4 ">
            <div className="">
              <button
                onClick={""}
                className="btn btn-ghost w-full bg-transparent rounded-full border-[#722495] border-2 text-black font-bold px-8 normal-case text-base"
              >
                <FcGoogle className="me-3 text-2xl" /> Sign Up with Google
              </button>
            </div>
          </div>

          <div className="flex items-center px-2">
            <hr className="flex-1 border-gray-300 border-[1px]" />
            <div className="mx-4 label-text text-base font-medium">Or</div>
            <hr className="flex-1 border-gray-300 border-[1px]" />
          </div>
        </div>

        <form onSubmit={""}>
          <div className="card-body pb-9 pt-5">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-base font-semibold">Name</span>
              </label>
              <input
                type="text"
                name="name"
                required
                placeholder="Your name"
                className="input input-bordered border-[1.8px] rounded-full border-[#722495]"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-base font-semibold">
                  Email
                </span>
              </label>
              <input
                type="email"
                name="email"
                required
                placeholder="Your email"
                className="input input-bordered border-[1.8px] rounded-full border-[#722495]"
              />
            </div>
            <div className="form-control">
              <label className="label ">
                <span className="label-text text-base font-semibold">
                  Password
                </span>
              </label>
              <input
                type="password"
                name="password"
                required
                placeholder="Your password"
                className="input input-bordered border-[1.8px] rounded-full border-[#722495]"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-base font-semibold">
                  Photo URL
                </span>
              </label>
              <input
                type="text"
                name="photo"
                required
                placeholder="Your photo url"
                className="input input-bordered border-[1.8px] rounded-full border-[#722495]"
              />
            </div>
            <div className="form-control mt-8">
              <button
                type="submit"
                className="btn hover:bg-purple-800 bg-[#722495] text-white rounded-full font-bold px-6 normal-case text-lg border-0"
              >
                Sign Up
              </button>
            </div>
          </div>
        </form>

        <p className="text-center px-8 pt-0 mt-0 pb-8">
          <span className="label-text text-base font-semibold">
            Already have an account?
            <Link
              to="/login"
              className="label-text-alt font-bold text-base link link-hover ps-2 text-[#722495]"
            >
              Login!
            </Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Register;
