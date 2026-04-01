import React, { use } from "react";
import { Link, NavLink } from "react-router";
import user from "../assets/user.png";
import { AuthContext } from "../Context/AuthContext";

const Navbar = () => {
  const userInfo = use(AuthContext);
  console.log(userInfo);

  return (
    <div className="flex justify-between">
      <div className=""></div>
      <div className="nav flex gap-4 items-center">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/About">About</NavLink>
        <NavLink to="/career">Career</NavLink>
      </div>
      <div className="login flex gap-3">
        <img src={user} alt="user" />
        <Link to="/login">
          <button className="btn btn-primary">Login</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
