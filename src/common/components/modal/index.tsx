import React from "react";

interface Props {
  // title?: string;
  open: boolean;
  children?: React.ReactNode;
  // onClose?: () => void;
}
export default (props: Props) => {
  const { open, children } = props;

  return (
    <div
      className={`fixed inset-0 w-full h-full z-20 bg-black bg-opacity-50 duration-300 overflow-y-auto ${
        !open && "hidden"
      }`}
    >
      <div className="relative sm:w-3/4 w-1/2 lg:w-1/3 mx-2 sm:mx-auto my-10 opacity-100">
        <div className="relative bg-white shadow-lg rounded-lg text-gray-900 z-20 p-3">
          {children}
        </div>
      </div>
    </div>
  );
};
