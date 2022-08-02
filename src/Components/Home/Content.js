import React from "react";
import useContent from "../../hooks/useContent";
import Card from "../Cards/Card";
import TrendingCard from "../Cards/TrendingCard";
import Input from "./Input";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Content = () => {
  const { trending } = useContent();

  return (
    <div className="w-full md:ml-10">
      <Input />
      <div className="my-5">
        <h1 className="text-2xl mb-5">Trending</h1>
        <div className="flex space-x-10">
          <Swiper slidesPerView={3}>
            {trending?.map((movie) => (
              <SwiperSlide key={movie.id}>
                <TrendingCard movie={movie} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div>
        <h1 className="text-2xl mb-5">Recommended for you</h1>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
};

export default Content;
