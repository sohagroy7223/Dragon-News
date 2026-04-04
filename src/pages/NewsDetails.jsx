import React from "react";
import Header from "../Components/Header";
import RightAside from "../Components/RightAside";
import { useLoaderData, useParams } from "react-router";

const NewsDetails = () => {
  const data = useLoaderData();
  const { id } = useParams();

  console.log(data, id);
  return (
    <div className="w-11/12 mx-auto my-4">
      <header>
        <Header></Header>
      </header>
      <main className="grid grid-cols-12">
        <div className="col-span-9">
          <h3>dragon news</h3>
        </div>
        <aside className="col-span-3">
          <RightAside></RightAside>
        </aside>
      </main>
    </div>
  );
};

export default NewsDetails;
