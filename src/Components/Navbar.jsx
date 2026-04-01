import React, { use } from "react";
import { Link, NavLink } from "react-router";
import userI from "../assets/user.png";
import { AuthContext } from "../Context/AuthContext";

const Navbar = () => {
  const { user, SignOut } = use(AuthContext);

  const handelSignOut = () => {
    SignOut()
      .then(() => {
        console.log("sign out success fully");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="flex justify-between">
      <div className="">{user && user.email}</div>
      <div className="nav flex gap-4 items-center">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/About">About</NavLink>
        <NavLink to="/career">Career</NavLink>
      </div>
      <div className="login flex gap-3">
        <img src={userI} alt="user" />
        {user ? (
          <button onClick={handelSignOut} className="btn btn-primary">
            Log out
          </button>
        ) : (
          <button className="btn btn-primary">Login</button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
