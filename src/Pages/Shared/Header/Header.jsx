import { Link } from "react-router-dom";
import ActiveLink from "../ActiveLink/ActiveLink";
import { useContext, useState } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import { toast } from "react-toastify";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { VscTriangleDown, VscTriangleUp } from "react-icons/vsc";
import { BsPersonCircle } from "react-icons/bs";
import { IoMdLogOut } from "react-icons/io";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const [showAccountInfo, setAccountInfo] = useState(false);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        setAccountInfo(false);
        toast("Logged out successfully!", {
          position: "top-center",
          type: "success",
        });
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="bg-gradient-to-r from-[#090748] via-[#2F0743] to-[#090748]">
      <div className="navbar bg-transparent text-white mx-auto max-w-screen-xl lg:px-0 py-4">
        <div className="navbar-start">
          <div className="dropdown">
            <label
              tabIndex={0}
              className="btn btn-ghost md:hidden text-3xl ps-2 pe-2"
            >
              <AiOutlineMenuUnfold />
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact font-bold dropdown-content mt-5 p-2 text-white shadow bg-[#2F0743] rounded-md w-52"
            >
              <li className="hover:bg-orange-200 rounded-md mb-1 text-white hover:text-black">
                <ActiveLink to="/">Home</ActiveLink>
              </li>
              <li className="hover:bg-orange-200 rounded-md mb-1 text-white hover:text-black">
                <ActiveLink to="/toys">All Toys</ActiveLink>
              </li>

              {user && (
                <>
                  <li className="hover:bg-orange-200 rounded-md mb-1 text-white hover:text-black">
                    <ActiveLink to="/my-toys">My Toys</ActiveLink>
                  </li>
                  <li className="hover:bg-orange-200 rounded-md mb-1 text-white hover:text-black">
                    <ActiveLink to="/add-toy">Add A Toy</ActiveLink>
                  </li>
                </>
              )}

              <li className="hover:bg-orange-200 rounded-md mb-1 text-white hover:text-black">
                <ActiveLink to="/blog">Blogs</ActiveLink>
              </li>
            </ul>
          </div>
          <Link to="/">
            <h4 className="w-max cursor-pointer font-extrabold text-2xl lg:text-3xl flex items-center font-frosty tracking-wider">
              <span>
                <img
                  src="/assets/logos/logo.png"
                  className="w-10 font-bold"
                  alt=""
                />
              </span>{" "}
              Toy Garden
            </h4>
          </Link>
        </div>
        <div className="navbar-center hidden md:flex">
          <ul className="menu font-bold text-xl menu-horizontal px-1">
            <li>
              <ActiveLink to="/">Home</ActiveLink>
            </li>
            <li>
              <ActiveLink to="/toys">All Toys</ActiveLink>
            </li>
            {user && (
              <>
                <li>
                  <ActiveLink to="/my-toys">My Toys</ActiveLink>
                </li>
                <li>
                  <ActiveLink to="/add-toy">Add A Toy</ActiveLink>
                </li>
              </>
            )}
            <li>
              <ActiveLink to="/blog">Blogs</ActiveLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          {user === null ? (
            <Link to="/login">
              <button className="btn bg-transparent border-[2.5px] border-white rounded-full px-8 hover:bg-[#ffad00] hover:text-black hover:border-[#ffad00] text-white font-bold normal-case text-xl">
                Login
              </button>
            </Link>
          ) : (
            <div className="dropdown dropdown-end">
              <label
                tabIndex={0}
                onMouseEnter={() => setAccountInfo(true)}
                onClick={() => setAccountInfo(!showAccountInfo)}
                className="btn bg-transparent hover:bg-transparent hover:border-white btn-circle avatar border-2 border-white flex justify-between items-center w-max gap-1 h-15 p-1"
              >
                <div className="w-9 rounded-full">
                  {user?.photoURL !== null ? (
                    <>
                      <img src={user.photoURL} />
                    </>
                  ) : (
                    <>
                      <BsPersonCircle className="text-white" />
                    </>
                  )}
                </div>
                {showAccountInfo === false ? (
                  <VscTriangleDown className="text-xl pe-1" />
                ) : (
                  <VscTriangleUp className="text-xl pe-1" />
                )}
              </label>
              <ul
                tabIndex={0}
                onMouseLeave={() => setAccountInfo(false)}
                className={`mt-6 p-2 shadow menu menu-compact font-semibold ${
                  showAccountInfo ? "absolute z-50 right-0" : "hidden"
                }  text-white bg-[#2F0743]  rounded-md w-52`}
              >
                {user?.displayName && (
                  <li onClick={() => setAccountInfo(false)}>
                    <a className="justify-between hover:bg-orange-200 hover:text-black rounded-md mb-1">
                      {user.displayName}
                    </a>
                  </li>
                )}
                <li
                  onClick={handleLogOut}
                  className="text-red-600 hover:bg-orange-200 rounded-md"
                >
                  <a>
                    Logout <IoMdLogOut className="font-extrabold text-lg" />
                  </a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
