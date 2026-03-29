import React from "react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const SocialLogin = () => {
  return (
    <div className="space-y-2">
      <h3 className="font-bold ">Login With</h3>
      <button className="btn btn-outline w-full">
        {" "}
        <FcGoogle size={25}></FcGoogle> Login With Google
      </button>
      <button className="btn btn-outline w-full">
        {" "}
        <FaGithub size={25}></FaGithub> Login With GitHub
      </button>
    </div>
  );
};

export default SocialLogin;
