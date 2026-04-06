import React, { useContext, useState } from "react";
import Navbar from "../Components/Navbar";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../Context/AuthContext";

const Register = () => {
  const { SignUpUser, setUser, updateUser, sendEmailVerify } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");
  const [success, setSuccess] = useState(false);

  const handelRegister = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const photo = e.target.photo.value;
    const password = e.target.password.value;
    console.log(name, photo);

    // password validation

    const passwordRegEx = /(?=.*\d)/;
    const passwordRegEx2 = /(?=.*[A-Z])/;
    const passwordRegEx3 = /(?=.*[a-z])/;
    const passwordRegEx4 = /(?=.*[@$!%*?&])/;
    const passwordRegEx5 = /.{8,}/;

    if (passwordRegEx.test(password) === false) {
      setErrorMessage("add any number character");
      return;
    } else if (passwordRegEx2.test(password) === false) {
      setErrorMessage("Must include an uppercase letter");
      return;
    } else if (passwordRegEx3.test(password) === false) {
      setErrorMessage("Must include a lowercase letter");
      return;
    } else if (passwordRegEx4.test(password) === false) {
      setErrorMessage("Must include a special (@#$&*?) character");
      return;
    } else if (passwordRegEx5.test(password) === false) {
      setErrorMessage("Password must be at least 8 characters");
      return;
    }

    SignUpUser(email, password)
      .then((result) => {
        console.log(result);
        const user = result.user;
        sendEmailVerify().then(() => {
          alert("we send a massage in your email, please verified your email");
        });
        updateUser({ displayName: name, photoURL: photo })
          .then(() => {
            setUser({ ...user, displayName: name, photoURL: photo });
          })
          .catch((error) => {
            console.log(error);
            setUser(user);
          });
        setSuccess(true);
        navigate("/category/0");
      })
      .catch((error) => {
        console.log(error);
        setErrorMessage(error.message);
      });

    setErrorMessage("");
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
                required
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
              <p className="text-red-500 text-xs">{errorMessage}</p>

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
              <p className="text">{success && " user register successfully"}</p>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
