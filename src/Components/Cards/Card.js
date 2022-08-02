import React from "react";
import { BsBookmark } from "react-icons/bs";

const Card = () => {
  return (
    <div className="mb-10">
      <div className="w-[300px] h-48 rounded-xl bg-red-200 relative">
        <div className="absolute right-5 top-5 w-8 h-8 rounded-full bg-black/40 flex items-center justify-center">
          <BsBookmark />
        </div>
      </div>
      <div className="">
        <div className="flex items-center space-x-4 text-xs mt-2 text-slate-500">
          <span>2019</span>
          <span>Movie</span>
          <span>PG</span>
        </div>
        <h1 className="text-xl font-bold">Movie title title title</h1>
      </div>
    </div>
  );
};

export default Card;
