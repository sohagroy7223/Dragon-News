import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import NewsCard from "../Components/NewsCard";

const CategoryNews = () => {
  const [categoryNews, setCategoryNews] = useState([]);

  const { id } = useParams();
  const data = useLoaderData();

  useEffect(() => {
    const numericId = Number(id);

    if (numericId === 0) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setCategoryNews(data);
    } else if (numericId === 1) {
      const breaking = data.filter(
        (news) => news.others?.is_today_pick === true,
      );
      setCategoryNews(breaking);
    } else {
      const filterNews = data.filter(
        (news) => Number(news.category_id) === numericId,
      );
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
