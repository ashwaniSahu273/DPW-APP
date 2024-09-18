import React from "react";
import SideLink from "./side-nav-link";
import { Link } from "react-router-dom";

const routes = [
  { url: "/app", title: "Dashboard" },
  { url: "/app/e-commerce", title: "E-commerce" },
];

//  -translate-x-full
// bg-white

export default () => {
  return (
    <aside
      className="mt-4 fixed inset-y-0 left-0 flex-wrap items-center justify-between block w-full p-0 overflow-y-auto transition-all duration-200 border-0 shadow-none xl:ml-4 dark:bg-gray-950 ease-soft-in-out z-990 max-w-64 rounded-2xl xl:translate-x-0 xl:bg-transparent"
      id="sidenav-main"
    >
      <div className="h-20">
        <Link
          className="block px-8 py-6 m-0 text-sm whitespace-nowrap text-slate-700 dark:text-white"
          to="/app"
          target="_blank"
        >
          <img
            src="/assets/img/logo.png"
            className="inline-block h-full max-w-full transition-all duration-200 ease-soft-in-out max-h-8 dark:hidden"
            alt="main_logo"
          />
          <span className="ml-3 font-semibold transition-all duration-200 ease-soft-in-out">
            DogeJ
          </span>
        </Link>
      </div>

      <hr className="h-px mt-0 bg-transparent bg-gradient-to-r from-transparent via-black/40 to-transparent dark:bg-gradient-to-r dark:from-transparent dark:via-white dark:to-transparent"></hr>

      <div
        className="items-center block w-full h-auto grow basis-full"
        id="sidenav-collapse-main"
      >
        <ul className="flex flex-col pl-0 mb-0 list-none ml-8">
          {routes.map((route,idx) => {
            return <SideLink key={idx} url={route.url} title={route.title} />;
          })}
        </ul>
      </div>
      <hr className="h-px mt-0 bg-transparent bg-gradient-to-r from-transparent via-black/40 to-transparent dark:bg-gradient-to-r dark:from-transparent dark:via-white dark:to-transparent"></hr>
      <div
        className="items-center block w-full h-auto grow basis-full"
        id="sidenav-collapse-main"
      >
        <ul className="flex flex-col pl-0 mb-0 list-none ml-8">
          <SideLink url={"/app/profile"} title="Profile" />
        </ul>
      </div>
    </aside>
  );
};
