import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";

const CategoryNews = () => {
  const [categoryNews, setCategoryNews] = useState([]);

  const { id } = useParams();
  const data = useLoaderData();

  useEffect(() => {
    if (id == "0") {
      setCategoryNews(data);
      return;
    } else if (id == "1") {
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
      <h3>Total {categoryNews.length} news found</h3>
    </div>
  );
};

export default CategoryNews;
