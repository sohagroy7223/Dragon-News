import React from "react";
import { Link } from "react-router";

const NewsDetailCard = ({ news }) => {
  // console.log(news);
  return (
    <div className="my-4">
      <h3 className=" my-1 font-bold">dragon news</h3>
      <div className="p-3 rounded-lg border">
        <img
          className="rounded-lg w-full h-80 bg-cover"
          src={news.image_url}
          alt=""
        />
      </div>
      <h3 className="md:text-2xl font-bold mb-5">{news.title}</h3>
      <p className="md:text-lg text-xs">{news.details}</p>
      <Link
        to={`/category/${news.category_id}`}
        className="mt-5 btn bg-secondary text-base-100"
      >
        all news in this category
      </Link>
    </div>
  );
};

export default NewsDetailCard;
