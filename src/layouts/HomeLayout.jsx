import React from "react";
import Header from "../Components/Header";
import { Outlet } from "react-router-dom";
import LatestNews from "../Components/LatestNews";
import Navbar from "../Components/Navbar";

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
      <main>
        <section className="left-nav"></section>
        <section className="main">
          <Outlet></Outlet>
        </section>
        <section className="right-nav"></section>
      </main>
    </div>
  );
};

export default HomeLayout;
