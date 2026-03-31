import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import NewsCard from "../Components/NewsCard";

const CategoryNews = () => {
  const [categoryNews, setCategoryNews] = useState([]);

  const { id } = useParams();
  const data = useLoaderData();

  useEffect(() => {
    if (id === "0") {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setCategoryNews(data);
      return;
    } else if (id === "1") {
      const braking = data.filter((news) => news.others.is_today_pick === true);
      setCategoryNews(braking);
      return;
    } else {
      const filterNews = data.filter((news) => news.category_id == id);
      // console.log(filterNews);
      setCategoryNews(filterNews);
    }
  }, [data, id]);

  return (
    <div>
      <h3 className="font-bold text-center">
        Total <span className="text-green-700">{categoryNews.length}</span> news
        found
      </h3>
      <div className="grid grid-cols-1 gap-3 p-2">
        {categoryNews.map((news) => (
          <NewsCard key={news.id} news={news}></NewsCard>
        ))}
      </div>
    </div>
  );
};

export default CategoryNews;
