import React from "react";
import Card from "../Cards/Card";

const Search = ({ searchData, text }) => {
  return (
    <div>
      <h1 className="text-2xl font-semibold my-10">
        Found {searchData?.length} results for '{text}'
      </h1>
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {searchData?.map((movie) => (
          <Card key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default Search;
