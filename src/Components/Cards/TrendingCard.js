import React from "react";
import { BsBookmark } from "react-icons/bs";

const TrendingCard = ({ movie }) => {
  return (
    <div className="w-[350px] lg:w-[500px] h-56 bg-red-200 rounded-md relative">
      <img
        src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
        alt=""
        className="w-full h-full bg-cover rounded-md"
      />
      <div className="absolute right-5 top-5 w-8 h-8 rounded-full bg-black/40 flex items-center justify-center">
        <BsBookmark />
      </div>
      <div className="absolute bottom-5 left-5">
        <div className="flex items-center space-x-4 text-xs mt-2 text-slate-300">
          <span>
            {movie?.release_date?.slice(0, 4) ||
              movie?.first_air_date?.slice(0, 4)}
          </span>
          <span>{movie?.media_type}</span>
          <span>{movie?.adult ? "18+" : "PG"}</span>
        </div>
        <h1 className="text-xl font-bold text-slate-200">
          {movie?.title || movie?.name}
        </h1>
      </div>
    </div>
  );
};

export default TrendingCard;
