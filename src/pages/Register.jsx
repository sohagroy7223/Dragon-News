import React, { useContext } from "react";
import Navbar from "../Components/Navbar";
import { Link } from "react-router";
import { AuthContext } from "../Context/AuthContext";

const Register = () => {
  const { SignUpUser } = useContext(AuthContext);

  const handelRegister = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const photo = e.target.photo.value;
    const password = e.target.password.value;
    console.log(name, photo);

    SignUpUser(email, password)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="bg-base-300  min-h-screen">
      <div className="w-11/12 mx-auto py-4">
        <Navbar></Navbar>

        <div className="card bg-base-100 mx-auto mt-10 p-3 w-full max-w-sm shrink-0 shadow-2xl">
          <h1 className="text-2xl text-center font-bold">
            Register your account!
          </h1>
          <div className="card-body">
            <form onSubmit={handelRegister} className="fieldset">
              <label className="label">Name</label>
              <input
                type="text"
                className="input"
                name="name"
                placeholder="Enter your name"
                required
              />
              <label className="label">Photo URL</label>
              <input
                type="text"
                className="input"
                name="photo"
                placeholder="Enter your name"
              />

              <label className="label">Email</label>
              <input
                type="email"
                className="input"
                name="email"
                autoComplete="email"
                placeholder="Email"
                required
              />
              <label className="label">Password</label>
              <input
                type="password"
                className="input"
                name="password"
                autoComplete="current-password"
                placeholder="Password"
                required
              />
              <div></div>
              <button className="btn btn-neutral mt-4">Register</button>
            </form>
            <p className="text-center">
              Already Have An Account ?{" "}
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
