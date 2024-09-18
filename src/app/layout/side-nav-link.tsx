import React from "react";
import { Link, useLocation } from "react-router-dom";

const generalClasses = `
  after:ease-soft-in-out 
  after:font-awesome-5-free 
  ease-soft-in-out 
  py-1.6 ml-5.4 pl-4 my-0 mr-4 pr-4
  text-sm 
  before:-left-5 
  relative 
  flex 
  items-center 
  whitespace-nowrap 
  rounded-lg 
  bg-transparent 
  shadow-none 
  transition-colors 
  dark:text-white dark:opacity-100 dark:before:bg-white dark:before:opacity-80 dark:after:text-white
  cursor-pointer`;
const inactiveClasses = `font-medium text-slate-800/50
  before:absolute before:top-1/2 before:h-1 before:w-1 before:-translate-y-1/2 before:rounded-3xl before:bg-slate-800/50 before:content-[''] 
  `;
const activeClasses = `font-semibold text-slate-800
  before:absolute before:top-1/2 before:h-2 before:w-2 before:-translate-y-1/2 before:rounded-3xl before:bg-slate-800 before:content-[''] `;

export default ({ url, title }: { url: string; title: string }) => {
  const loc = useLocation();
  const isActive = loc.pathname.endsWith(url);
  return (
    <li className="w-full">
      <Link
        className={`${generalClasses} ${
          isActive ? activeClasses : inactiveClasses
        }`}
        to={url}
      >
        <span className="w-0 text-center transition-all duration-200 opacity-0 pointer-events-none ease-soft-in-out">
          {" "}
        </span>
        <span className="transition-all duration-100 pointer-events-none ease-soft">
          {" "}
          {title}
        </span>
      </Link>
    </li>
  );
};
