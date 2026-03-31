import React from "react";
import swimming from "../assets/swimming.png";
import playGround from "../assets/playground.png";
import classP from "../assets/class.png";

const Q_zone = () => {
  return (
    <div className="font-bold bg-base-300 p-3">
      <h3>Q-zone</h3>
      <div className="flex flex-col gap-10 mt-5">
        <img src={swimming} alt="" />
        <img src={playGround} alt="" />
        <img src={classP} alt="" />
      </div>
    </div>
  );
};

export default Q_zone;
