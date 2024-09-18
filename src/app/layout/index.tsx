import React from "react";

import Header from "./header";
//import Footer from "./footer";
import SideNav from "./side-nav";

const Layout = ({ children }: { children: any }) => {
  return (
    <div
      className={`m-0 font-sans antialiased font-normal text-left leading-default text-base dark:bg-slate-950 bg-gray-50 text-slate-500 dark:text-white `}
    >
      <SideNav />

      <main
        className={`min-h-screen relative h-full max-h-screen  ml-64 rounded-xl`}
      >
        <Header />
        <div className="ml-10 mr-10">{children} </div>
      </main>
    </div>
  );
};
export default Layout;
