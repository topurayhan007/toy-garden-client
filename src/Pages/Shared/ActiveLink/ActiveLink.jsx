/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";

const ActiveLink = ({ to, children }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive
          ? "bg-gradient-to-r from-[#ea6802] to-[#fbbf04] text-transparent bg-clip-text font-extrabold"
          : "text-white"
      }
    >
      {children}
    </NavLink>
  );
};

export default ActiveLink;
