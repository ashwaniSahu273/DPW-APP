import React from "react";

export default ({
  children,
  label,
}: {
  children: React.ReactNode;
  label: string;
}) => {
  return (
    <div className="group cursor-pointer relative inline-block mt-2 mr-2">
      {children}
      <div className="opacity-0 w-28 bg-coolGray-700 text-white text-center text-xs rounded-lg py-2 absolute z-10 group-hover:opacity-100 bottom-full left-1/2 px-3 transform -translate-x-1/2 pointer-events-none">
        {label}
        <svg
          className="absolute text-black h-2 w-full left-0 top-full"
          x="0px"
          y="0px"
          viewBox="0 0 255 255"
        >
          <polygon
            className="fill-current text-coolGray-700"
            points="0,0 127.5,127.5 255,0"
          />
        </svg>
      </div>
    </div>
  );
};
