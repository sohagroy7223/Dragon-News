import React from "react";
import Header from "../Components/Header";
import { Outlet } from "react-router-dom";
import LatestNews from "../Components/LatestNews";
import Navbar from "../Components/Navbar";
import LeftAside from "../Components/homeLayouts/LeftAside";
import RightAside from "../Components/RightAside";

const HomeLayout = () => {
  return (
    <div>
      <Header></Header>
      <section className="w-11/12 mx-auto my-3">
        <LatestNews></LatestNews>
      </section>
      <nav className="w-11/12 mx-auto my-3">
        <Navbar></Navbar>
      </nav>
      <main className="w-11/12 mx-auto my-3 *:border grid grid-cols-12">
        <aside className="col-span-3">
          <LeftAside></LeftAside>
        </aside>
        <section className="main col-span-6">
          <Outlet></Outlet>
        </section>
        <aside className="col-span-3">
          <RightAside></RightAside>
        </aside>
      </main>
    </div>
  );
};

export default HomeLayout;
