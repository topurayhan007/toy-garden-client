import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const AddAToy = () => {
  const { user } = useContext(AuthContext);
  console.log(user.email);
  return (
    <div>
      This is Add A Toy Page
      <div className="mt-10 pb-10  px-3 md:px-0">
        <div className="card flex-shrink-0 w-full border border-purple-100 max-w-md mx-auto mt-16 drop-shadow-sm shadow-md bg-[#fffeff]">
          <p className="text-3xl font-bold text-center card-body pb-5">
            Sign Up
          </p>

          <form onSubmit={""}>
            <div className="card-body pb-9 pt-5">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-base font-semibold">
                    Name
                  </span>
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
    </div>
  );
};

export default AddAToy;
