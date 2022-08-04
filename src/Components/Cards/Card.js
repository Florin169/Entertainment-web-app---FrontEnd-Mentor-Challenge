import React, { useState } from "react";
import { BsBookmark, BsFillBookmarkFill } from "react-icons/bs";

const Card = ({ movie }) => {
  const [addToggle, setAddToggle] = useState(false);
  return (
    <div className="mb-10">
      <div className=" h-48 rounded-xl bg-red-200 relative">
        <img
          src={`https://image.tmdb.org/t/p/original/${
            movie?.backdrop_path || movie?.poster_path
          }`}
          alt=""
          className="w-full h-full bg-cover rounded-xl"
        />
        <div
          className="absolute right-5 top-5 w-8 h-8 rounded-full bg-black/40 flex items-center justify-center cursor-pointer hover:bg-black/60 transition duration-200"
          onClick={() => setAddToggle(!addToggle)}
        >
          {!addToggle ? <BsBookmark /> : <BsFillBookmarkFill />}
        </div>
      </div>
      <div className="">
        <div className="flex items-center space-x-4 text-xs mt-2 text-slate-500">
          <span>{movie?.release_date?.slice(0, 4)}</span>
          <span>Movie</span>
          <span>{movie?.adult ? "18+" : "PG"}</span>
        </div>
        <h1 className="text-xl font-bold">{movie?.title}</h1>
      </div>
    </div>
  );
};

export default Card;
