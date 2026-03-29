import React from "react";
import { NavLink } from "react-router";
import user from "../assets/user.png";

const Navbar = () => {
  return (
    <div className="flex justify-between">
      <div className=""></div>
      <div className="nav flex gap-4">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/About">About</NavLink>
        <NavLink to="/career">Career</NavLink>
      </div>
      <div className="login flex gap-3">
        <img src={user} alt="user" />
        <button className="btn btn-primary">Login</button>
      </div>
    </div>
  );
};

export default Navbar;
