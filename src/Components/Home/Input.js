import React from "react";
import { BiSearch } from "react-icons/bi";

const Input = ({ text, setText }) => {
  return (
    <div className="w-full h-14 flex items-center">
      <BiSearch className="w-8 h-8" />
      <input
        type="text"
        value={text}
        placeholder="Search for Movies or Tv series"
        className="w-full h-full bg-transparent px-5 text-xl outline-none"
        onChange={(e) => setText(e.target.value)}
      />
    </div>
  );
};

export default Input;
