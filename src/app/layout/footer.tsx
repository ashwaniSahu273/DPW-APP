import React from "react";

import { github, version, appTitle } from "../../config";

// const linkClasses = "mx-2 md:mx-5 block md:inline";
export default () => (
  <footer
    className="bg-secondary-300 font-extralight"
    // style={{ height: "100px" }}
  >
    <div className="grid grid-cols-2 md:grid-cols-4">
      <div className="md:col-span-3">
        <div className={`md:mx-5 mt-3 ml-2 md:ml-5`}>
          <small className="block">
            {appTitle} &copy; Doge-J {new Date().getFullYear()}
          </small>

          <small>
            <a href={github.version} className="block">
              {version}
            </a>
          </small>
        </div>
      </div>
      <div>
        <img
          className="m-4 h-10 mr-10 w-auto float-right"
          src="/assets/SVG/logo.svg"
          alt="logo"
          style={{ filter: "brightness(1.5)" }}
        />
      </div>
    </div>
  </footer>
);
