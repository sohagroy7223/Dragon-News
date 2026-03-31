import React from "react";
import Navbar from "../Components/Navbar";
import { Link } from "react-router";

const Register = () => {
  return (
    <div className="bg-base-300  min-h-screen">
      <div className="w-11/12 mx-auto py-4">
        <Navbar></Navbar>

        <div className="card bg-base-100 mx-auto mt-10 p-3 w-full max-w-sm shrink-0 shadow-2xl">
          <h1 className="text-2xl text-center font-bold">
            Register your account!
          </h1>
          <div className="card-body">
            <form className="fieldset">
              <label className="label">Name</label>
              <input
                type="text"
                className="input"
                placeholder="Enter your name"
              />

              <label className="label">Email</label>
              <input type="email" className="input" placeholder="Email" />
              <label className="label">Password</label>
              <input type="password" className="input" placeholder="Password" />
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button className="btn btn-neutral mt-4">Login</button>
            </form>
            <p className="text-center">
              Dont’t Have An Account ?{" "}
              <Link to="/login">
                <span className="text-blue-500 font-semibold hover:underline cursor-pointer">
                  Login
                </span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
