import React from "react";
import { FaFacebook, FaGithub, FaInstagram } from "react-icons/fa";

const FindUs = () => {
  return (
    <div>
      <h3 className="font-bold bg-base-300 p-3">find us on</h3>

      <div className="join join-vertical w-full ">
        <button className="btn justify-start bg-base-100 hover:bg-base-300 join-item">
          {" "}
          <FaFacebook size={17}></FaFacebook> Facebook
        </button>
        <button className="btn justify-start bg-base-100 hover:bg-base-300 join-item">
          <FaGithub size={17}></FaGithub> GitHub
        </button>
        <button className="btn justify-start bg-base-100 hover:bg-base-300 join-item">
          <FaInstagram size={17}></FaInstagram> Instagram
        </button>
      </div>
    </div>
  );
};

export default FindUs;
