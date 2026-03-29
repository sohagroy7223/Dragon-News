import React from "react";
import { Outlet } from "react-router";

const HomeLayout = () => {
  return (
    <div>
      <header></header>
      <section className="left-nav"></section>
      <main>
        <section className="main">
          <Outlet></Outlet>
        </section>
        <section className="right-nav"></section>
      </main>
    </div>
  );
};

export default HomeLayout;
