import React from "react";
import logo from "../assets/logo.png";
import dayjs from "dayjs";
import Marquee from "react-easy-marquee";

const Header = () => {
  return (
    <div className="flex justify-center flex-col items-center gap-3 mt-1">
      <img className="md:w-96 w-80" src={logo} alt="" />
      <p className="text-accent">Journalism Without Fear or Favour</p>

      <div className="text-center text-accent font-semibold flex gap-5">
        <p>{dayjs().format("hh:m:a")}</p>
        <p>{dayjs().format("dddd, MMMM DD, YYYY")}</p>
      </div>
    </div>
  );
};

export default Header;
