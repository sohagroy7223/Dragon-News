import React, { useState } from "react";
import { FaRegBookmark, FaShareAlt } from "react-icons/fa";

const NewsCard = ({ news }) => {
  const [details, setDetails] = useState(false);

  const handelShowDetails = () => {
    setDetails(!details);
  };

  return (
    <div className="p-2 border shadow-2xl rounded-2xl mt-2">
      <div className="flex justify-between items-center w-full md:px-3 py-2 bg-base-300">
        <div className="flex gap-4 ">
          <div className="avatar w-8 h-8 md:h-11 md:w-11">
            <div className="ring-primary ring-offset-base-100 rounded-full ring-2 ring-offset-2">
              <img src={news.author.img} />
            </div>
          </div>
          <div className="text-sm">
            <h3>{news.author.name}</h3>
            <p>{news.author.published_date}</p>
          </div>
        </div>
        {/* icon */}
        <div className="flex gap-2.5">
          <FaShareAlt></FaShareAlt>
          <FaRegBookmark></FaRegBookmark>
        </div>
      </div>
      <div className="mt-4">
        <p className="md:font-bold px-3">{news.title}</p>
        <img
          className="w-full mx-auto rounded-xl mt-2"
          src={news.image_url}
          alt=""
        />

        <p>{details ? news.details : news.details.slice(0, 150)}</p>
        <button
          className="text-green-700 font-semibold hover:underline"
          onClick={handelShowDetails}
        >
          {details ? "show less" : "show details"}
        </button>
      </div>
    </div>
  );
};

export default NewsCard;
