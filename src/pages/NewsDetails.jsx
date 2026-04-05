import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import RightAside from "../Components/RightAside";
import { useLoaderData, useParams } from "react-router";
import NewsDetailCard from "./NewsDetailCard";

const NewsDetails = () => {
  const data = useLoaderData();
  const { id } = useParams();

  const [news, setNews] = useState({});

  useEffect(() => {
    const newsDetails = data.find((singleNews) => singleNews.id == id);
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setNews(newsDetails);
  }, [data, id]);

  // console.log(data, id, news);
  return (
    <div className="w-11/12 mx-auto my-4">
      <header>
        <Header></Header>
      </header>
      <main className="grid grid-cols-12 gap-3 justify-center">
        <div className="md:col-span-9 col-span-8">
          <NewsDetailCard news={news}></NewsDetailCard>
        </div>
        <aside className="md:col-span-3 col-span-4">
          <RightAside></RightAside>
        </aside>
      </main>
    </div>
  );
};

export default NewsDetails;
