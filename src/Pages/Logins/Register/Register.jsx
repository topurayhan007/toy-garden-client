import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { toast } from "react-toastify";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import { Helmet } from "react-helmet-async";

const Register = () => {
  const { createUser, updateUserInfo, logOut, signInWithGoogle } =
    useContext(AuthContext);

  const navigate = useNavigate();

  const handleSignUp = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photoLink = form.photo.value;

    console.log(name, email, password, photoLink);

    // check password length >= 6 chars
    if (password.length < 6) {
      toast("Password must be at least 6 characters!", {
        position: "top-center",
        type: "error",
      });
      return;
    }

    // SignUp func of Firebase
    createUser(email, password)
      .then((result) => {
        const createdUser = result.user;
        console.log(createdUser);

        // Updates the User info after User is created
        updateUserInfo(name, photoLink)
          .then(() => {
            console.log("User info updated!");
            form.reset();
          })
          .catch((error2) => {
            console.log(error2.message);
            toast(error2.message, {
              position: "top-center",
              type: "error",
            });
          });

        // Calling LogOut otherwise logs in User upon account creation
        logOut()
          .then((result) => {
            console.log(result);
            toast("User created successfully!", {
              position: "top-center",
              type: "success",
            });
          })
          .catch((error) => {
            console.log(error.message);
          });

        // Catch any user creation error
      })
      .catch((error) => {
        console.log(error.message);
        toast(error.message, {
          position: "top-center",
          type: "error",
        });
      });
  };

  // Handle Google PopUp Login
  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        console.log(result.user);
        toast("User created successfully!", {
          position: "top-center",
          type: "success",
        });

        navigate("/");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="mt-10 pb-10  px-3 md:px-0">
      <Helmet>
        <title>Toy Garden | Register</title>
      </Helmet>
      <div className="card flex-shrink-0 w-full border border-purple-100 max-w-md mx-auto mt-16 drop-shadow-sm shadow-md bg-[#fffeff]">
        <p className="text-3xl font-bold text-center card-body pb-5">Sign Up</p>

        <div className="px-8 mt-0 pt-8 flex flex-col gap-4">
          <div className="form-control mb-4 ">
            <div className="">
              <button
                onClick={handleGoogleSignIn}
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

        <form onSubmit={handleSignUp}>
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
