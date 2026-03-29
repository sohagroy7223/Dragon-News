import React from "react";
import Marquee from "react-easy-marquee";

const LatestNews = () => {
  return (
    <div className=" flex items-center gap-5 bg-base-200 px-2">
      <p className="bg-secondary text-white p-1.5">Latest</p>
      <Marquee className="flex gap-5" reverse pauseOnHover duration={30000}>
        <p className=" font-bold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid,
          corrupti laudantium nostrum ut quos facere?...,
        </p>
        <p className=" font-bold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid,
          corrupti laudantium nostrum ut quos facere?...,
        </p>
        <p className=" font-bold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid,
          corrupti laudantium nostrum ut quos facere?...,
        </p>
      </Marquee>
    </div>
  );
};

export default LatestNews;
