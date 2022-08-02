import React from "react";
import { MdLocalMovies, MdMovie } from "react-icons/md";
import { FiMonitor } from "react-icons/fi";
import { BsFillBookmarkFill } from "react-icons/bs";
import menu from "../../assets/menu.svg";

const Navbar = () => {
  return (
    <div className="flex md:flex-col justify-between items-center bg-[#161D2F] w-full md:w-20 h-20 md:h-screen rounded-2xl px-5 md:py-10">
      <MdMovie className="w-16 h-16 md:mb-20 text-orange-600" />
      <div className="space-x-5 md:space-x-0 md:space-y-10 flex md:flex-col">
        <img src={menu} alt="menu" className="w-8 cursor-pointer text-white" />
        <MdLocalMovies className="w-8 h-8 cursor-pointer" />
        <FiMonitor className="w-8 h-8 cursor-pointer" />
        <BsFillBookmarkFill className="w-8 h-8 cursor-pointer" />
      </div>

      <div className="h-full flex items-center md:items-end">
        <div className="bg-orange-300 rounded-full w-10 h-10 cursor-pointer"></div>
      </div>
    </div>
  );
};

export default Navbar;
