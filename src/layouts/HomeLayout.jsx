import React, { useState } from "react";
import Header from "../Components/Header";
import { Outlet } from "react-router-dom";
import LatestNews from "../Components/LatestNews";
import Navbar from "../Components/Navbar";
import LeftAside from "../Components/homeLayouts/LeftAside";
import RightAside from "../Components/RightAside";
import { IoMdMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { useNavigation } from "react-router";
import Loading from "../pages/Loading";

const HomeLayout = () => {
  const [showMenu, setShowMenu] = useState(false);

  const { state } = useNavigation();

  const handelShow = () => {
    setShowMenu(!showMenu);
  };

  const menu = (
    <>
      <RightAside></RightAside>;
    </>
  );

  return (
    <div>
      <Header></Header>
      <section className="w-11/12 mx-auto my-3">
        <LatestNews></LatestNews>
      </section>
      <nav className="w-11/12 mx-auto my-3">
        <Navbar></Navbar>
      </nav>
      <main className="w-11/12 mx-auto my-3 gap-4 mt-7 grid grid-cols-12">
        <aside className="col-span-2 md:col-span-2 sticky top-0 h-fit">
          <LeftAside></LeftAside>
        </aside>
        <section className="main col-span-9 md:col-span-9">
          {state === "loading" ? <Loading></Loading> : <Outlet></Outlet>}
        </section>
        <aside className="md:col-span-1  col-span-1 mx-auto relative ">
          <div className="md:ml-8 mt-3" onClick={handelShow}>
            {showMenu ? (
              <IoClose size={25}></IoClose>
            ) : (
              <IoMdMenu size={25}></IoMdMenu>
            )}
          </div>
          <div
            className={`${showMenu ? "block" : "-mt-315"}  bg-base-300 md:p-8 p-4 md:w-56 rounded-2xl duration-1000 -ml-30 `}
          >
            {menu}
          </div>
        </aside>
      </main>
    </div>
  );
};

export default HomeLayout;
