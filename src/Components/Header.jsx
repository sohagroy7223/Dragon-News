import React from "react";
import logo from "../assets/logo.png";
import dayjs from "dayjs";
import Marquee from "react-easy-marquee";

const Header = () => {
  return (
    <div className="flex justify-center flex-col items-center gap-3 mt-1">
      <img className="w-96" src={logo} alt="" />
      <p className="text-accent">Journalism Without Fear or Favour</p>

      <div className="text-center text-accent font-semibold flex gap-5">
        <p>{dayjs().format("hh:m:a")}</p>
        <p>{dayjs().format("dddd, MMMM DD, YYYY")}</p>
      </div>

      <div className="w-11/12 mx-auto flex items-center gap-5 bg-base-200 px-2">
        <p className="bg-secondary text-white p-1.5">Latest</p>
        <Marquee reverse pauseOnHover duration={30000}>
          <p className=" font-bold">
            Match Highlights: Germany vs Spain — as it happened ! Match
            Highlights: Germany vs Spain as...
          </p>
          <p className=" font-bold">
            Match Highlights: Germany vs Spain — as it happened ! Match
            Highlights: Germany vs Spain as...
          </p>
          <p className=" font-bold">
            Match Highlights: Germany vs Spain — as it happened ! Match
            Highlights: Germany vs Spain as...
          </p>
        </Marquee>
      </div>
    </div>
  );
};

export default Header;
