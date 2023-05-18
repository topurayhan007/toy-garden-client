/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return (
      <div className="my-14 flex justify-center">
        <div
          className="radial-progress animate-spin text-[#ea6802]"
          style={{ "--value": 85 }}
        ></div>
      </div>
    );
  }

  if (user?.email) {
    return children;
  }

  return <Navigate state={{ from: location }} to="/login" replace></Navigate>;
};

export default PrivateRoute;
