import React from "react";

interface ButtonProps {
    onOpen?:()=>void;
    value:string;
}

function Button({onOpen,value}:ButtonProps) {
    
  return (
    <div className="w-52 h-52 flex justify-center items-center">
      <div className="flex flex-col justify-center items-center gap-0 ">
      
        <button onClick={()=>onOpen()} className="flex flex-col justify-center items-center px-8 pt-0 pb-2 m-0 text-xs font-bold text-center text-white uppercase align-middle transition-all border-0 rounded-lg cursor-pointer ease-soft-in leading-pro tracking-tight-soft bg-gradient-to-tl from-purple-700 to-pink-500 shadow-soft-md bg-150 bg-x-25 hover:scale-102 active:opacity-85">  <p className="m-0 p-0">+</p> {value}</button>
      </div>
    </div>
  );
}

export default Button;
