import React from "react";
import { Link, useLocation } from "react-router-dom";

// text-coolGray-800 dark:

const getPageTitleByLocation = (loc: string): string => {
  switch (loc) {
    case "/app":
      return "Dashboard";
    case "/app/e-commerce":
      return "E-commerce";
    case "/login":
      return "Sign in";
    case "/app/profile":
      return "Profile";
    default:
      return "";
  }
};

export default () => {
  const loc = useLocation();
  const title = getPageTitleByLocation(loc.pathname);
  return (
    <nav
      navbar-main
      className="relative flex flex-wrap items-center justify-between px-0 py-2 mx-6 mt-6 transition-all shadow-none duration-250 ease-soft-in rounded-2xl lg:flex-nowrap lg:justify-start"
      navbar-scroll="true"
    >
      <div className="flex items-center justify-between w-full px-4 py-1 mx-auto flex-wrap-inherit">
        <nav>
          <h6 className="mb-0 font-bold capitalize dark:text-white">{title}</h6>
        </nav>

        <div className="flex items-center text-sm text-slate-500">
          <Link to={"/app/profile"} className="mr-5">
            <i className="fa-regular fa-user mr-2" /> Profile
          </Link>
          <Link to={"/app/logout"}>
            <i className="fa-solid fa-arrow-right-from-bracket mr-2" />
            Logout
          </Link>
        </div>
      </div>
    </nav>
  );
};
