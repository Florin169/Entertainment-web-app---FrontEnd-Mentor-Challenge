import React from "react";
import Content from "../Components/Home/Content";
import Navbar from "../Components/Navbar/Navbar";

const Home = () => {
  return (
    <div className="h-full p-5 text-white md:flex">
      <Navbar />
      <Content />
    </div>
  );
};

export default Home;
