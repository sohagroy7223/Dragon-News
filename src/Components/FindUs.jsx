import React from "react";
import { FaFacebook, FaGithub, FaInstagram } from "react-icons/fa";
import { Link } from "react-router";

const FindUs = () => {
  return (
    <div>
      <h3 className="font-bold bg-base-300 p-3">find us on</h3>

      <div className="join join-vertical w-full ">
        <Link
          to="https://www.facebook.com/sohag.roy.283426"
          className="btn justify-start bg-base-100 hover:bg-base-300 join-item"
        >
          {" "}
          <FaFacebook size={17}></FaFacebook> Facebook
        </Link>
        <Link
          to="https://github.com/sohagroy7223"
          className="btn justify-start bg-base-100 hover:bg-base-300 join-item"
        >
          <FaGithub size={17}></FaGithub> GitHub
        </Link>
        <Link
          to="https://www.instagram.com/sohagroy7223/?hl=en"
          className="btn justify-start bg-base-100 hover:bg-base-300 join-item"
        >
          <FaInstagram size={17}></FaInstagram> Instagram
        </Link>
      </div>
    </div>
  );
};

export default FindUs;
