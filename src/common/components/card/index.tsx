import React from "react";

export default ({
  children,
  title,
}: {
  children: React.ReactNode;
  title?: string;
}) => {
  return (
    <div className="relative min-h-screen flex flex-col min-w-0 mb-6 break-words  dark:bg-gray-950 shadow-soft-xl dark:shadow-soft-dark-xl rounded-2xl bg-clip-border">
      <div className="flex-auto h-full p-5">
        <div className="flex h-full flex-wrap -mx-3">
          <div className="flex-none max-h-full w-full max-w-full px-3">
            <div>
              <p className="mb-0 font-sans font-semibold leading-normal text-sm dark:opacity-60">
                {title}
              </p>
            </div>
            <div className="mt-5  ">{children}</div>
          </div>
          {/* <div className="w-4/12 max-w-full px-3 text-right flex-0">
            <div className="inline-block w-12 h-12 text-center rounded-lg bg-gradient-to-tl from-purple-700 to-pink-500 shadow-soft-2xl">
              <i
                className="ni leading-none ni-money-coins text-lg relative top-3.5 text-white"
                aria-hidden="true"
              ></i>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};
