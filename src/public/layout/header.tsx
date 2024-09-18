import React from "react";

export default () => {
  return (
    <div className="bg-blue-500 ">
      <div className="mx-4 md:mx-24 py-3">
        <img src="/assets/SVG/logo.svg" className="h-8 w-10 inline" />
        <span className="font-bold text-white text-lg">
          {" "}
          dogecoin_chain_bot
        </span>
        <div className="float-right">
          <a
            href="https://t.me/dogecoin_chain_bot"
            className="bg-white text-black py-2 px-5 rounded rounded-full hover:bg-white text-sm"
          >
            Начать использовать
          </a>
        </div>
      </div>
    </div>
  );
};
