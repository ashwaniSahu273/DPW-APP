import React from "react";
import { Link } from "react-router-dom";

export default ({
  className = "bg-white",
  textColor = "black",
}: {
  className?: string;
  textColor?: string;
}) => (
  <footer className={className}>
    <div className="mx-4 md:mx-24 py-3">
      <Link to="/">
        <img src="/assets/SVG/logo.svg" className="h-8 w-10 md:inline" />
        <span className={`text-${textColor} font-bold text-sm`}> DOGE-J </span>
      </Link>

      <div className="float-right md:grid md:grid-cols-4">
        <Link
          to="/00001_our_services"
          className={`text-${textColor} font-bold text-sm pr-5 text-right md:pb-0`}
        >
          Что мы делаем ?
        </Link>

        <Link
          to="/00000_how_to"
          className={`text-${textColor} font-bold text-sm pl-5 text-right 
          md:pb-0 md:text-left md:border-${textColor} md:border-l-2`}
        >
          Как пользоваться ?
        </Link>

        <a
          href="mailto:team@dogej.org"
          className={`md:text-${textColor} font-bold text-white text-sm text-right  md:col-span-2 hidden md:inline pt-5 md:pt-0`}
        >
          team@dogej.org
        </a>
      </div>
    </div>
  </footer>
);
