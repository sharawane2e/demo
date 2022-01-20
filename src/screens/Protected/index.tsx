import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import clsx from "clsx";

interface Props {}

export const Protected = (props: Props) => {

  const[sideBar, setSideBar] = useState(true);

  const toggleSidebar = () =>{
    setSideBar(!sideBar);
  }

  return (
    <main>
      <div className={clsx({'sidebar':true,'sidebar--expanded':sideBar})} >
        <div className="logoBlock">LOGO</div>
        <Sidebar />
      </div>
      <section className={clsx({'main-content':true,'main-content--expanded':sideBar})}>
        <Header onClick={toggleSidebar} />
        <Outlet />
      </section>
    </main>
  );
};
