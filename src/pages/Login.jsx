import React from "react";
import Navbar from "../Components/Navbar";

const Login = () => {
  return (
    <div className="bg-base-300  min-h-screen">
      <div className="w-11/12 mx-auto py-4">
        <Navbar></Navbar>

        <div className="card bg-base-100 mx-auto mt-20 p-3 w-full max-w-sm shrink-0 shadow-2xl">
          <h1 className="text-3xl text-center font-bold">Login now!</h1>
          <div className="card-body">
            <fieldset className="fieldset">
              <label className="label">Email</label>
              <input type="email" className="input" placeholder="Email" />
              <label className="label">Password</label>
              <input type="password" className="input" placeholder="Password" />
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button className="btn btn-neutral mt-4">Login</button>
            </fieldset>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
