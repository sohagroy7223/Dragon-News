import React, { use } from "react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../Context/AuthContext";

const SocialLogin = () => {
  const { loginWithGoogle, loginWithGitHub } = use(AuthContext);

  const handelLoginWithGoogle = () => {
    loginWithGoogle()
      .then((result) => {
        console.log(result);
      })
      .then((error) => {
        console.log(error);
      });
  };

  const handelLoginWithGitHub = () => {
    loginWithGitHub()
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="space-y-2 text-sm mt-4">
      <h3 className="font-bold">Login With</h3>
      <button
        onClick={handelLoginWithGoogle}
        className="btn btn-outline w-full flex items-center justify-center gap-2 text-xs md:text-sm"
      >
        {" "}
        <FcGoogle size={25}></FcGoogle> Login With Google
      </button>
      <button
        onClick={handelLoginWithGitHub}
        className="btn btn-outline w-full flex items-center justify-center gap-2 text-xs md:text-sm"
      >
        {" "}
        <FaGithub size={25}></FaGithub> Login With GitHub
      </button>
    </div>
  );
};

export default SocialLogin;
