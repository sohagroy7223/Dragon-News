import React from "react";
import { FaRegBookmark, FaRegEye, FaShareAlt } from "react-icons/fa";
import { Link } from "react-router";

const NewsCard = ({ news }) => {
  const formatDate = new Date(news.author.published_date).toLocaleDateString();

  return (
    <div className=" border shadow-2xl items-center rounded-2xl mt-2">
      <div className="flex justify-between items-center w-full md:px-3 py-3 rounded-2xl bg-base-300">
        <div className="flex items-center gap-2 text-xs md:text-sm ">
          <div className="avatar w-8 h-8 md:h-11 md:w-11">
            <div className="ring-primary ring-offset-base-100 rounded-full ring-2 ring-offset-2">
              <img src={news.author.img} />
            </div>
          </div>
          <div className="text-sm">
            <h3 className="font-semibold">{news.author.name}</h3>
            <p>{formatDate}</p>
          </div>
        </div>
        {/* icon */}
        <div className="md:flex gap-2.5 hidden">
          <FaShareAlt></FaShareAlt>
          <FaRegBookmark></FaRegBookmark>
        </div>
      </div>
      <div className="mt-4 p-4">
        <p className="md:font-bold font-semibold px-3">{news.title}</p>
        <img
          className="w-full mx-auto rounded-xl mt-2"
          src={news.image_url}
          alt=""
        />
        <div className="flex gap-2.5 mt-2 mb-3 md:hidden">
          <FaShareAlt></FaShareAlt>
          <FaRegBookmark></FaRegBookmark>
        </div>

        <p>{news.details.slice(0, 150)}</p>

        <Link
          to="/newsDetails"
          className="text-green-700 font-semibold hover:underline"
        >
          show details
        </Link>
        <hr className="mt-6 bg-base-200" />
        <div className="flex justify-between items-center px-3  py-4">
          <div className="rating">
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
              aria-label="1 star"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
              aria-label="2 star"
              defaultChecked
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
              aria-label="3 star"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
              aria-label="4 star"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
              aria-label="5 star"
            />
          </div>
          <div className="flex gap-2.5 items-center ">
            <FaRegEye size={20}></FaRegEye>
            <p>{news.total_view}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
