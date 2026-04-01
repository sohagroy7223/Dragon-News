import React, { use } from "react";
import Navbar from "../Components/Navbar";
import { Link } from "react-router";
import { AuthContext } from "../Context/AuthContext";

const Login = () => {
  const { SignInUser } = use(AuthContext);

  const handelLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    SignInUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="bg-base-300  min-h-screen">
      <div className="w-11/12 mx-auto py-4">
        <Navbar></Navbar>

        <div className="card bg-base-100 mx-auto mt-15 p-3 w-full max-w-sm shrink-0 shadow-2xl">
          <h1 className="text-2xl text-center font-bold">
            Login your account!
          </h1>
          <div className="card-body">
            <form onSubmit={handelLogin} className="fieldset">
              <label className="label">Email</label>
              <input
                type="email"
                className="input"
                name="email"
                placeholder="Email"
                required
              />
              <label className="label">Password</label>
              <input
                type="password"
                className="input"
                name="password"
                autoComplete="current_password"
                placeholder="Password"
                required
              />
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button className="btn btn-neutral mt-4">Login</button>
            </form>
            <p className="text-center">
              Dont’t Have An Account ?{" "}
              <Link to="/register">
                <span className="text-blue-500 font-semibold hover:underline cursor-pointer">
                  Register
                </span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
