import React, { useEffect, useState } from "react";
import useContent from "../../hooks/useContent";
import Card from "../Cards/Card";
import TrendingCard from "../Cards/TrendingCard";
import Input from "./Input";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Search from "./Search";

const Content = () => {
  const [text, setText] = useState("");
  const { trending, recommended, searchData } = useContent(text);

  return (
    <div className="w-full md:ml-10">
      <Input text={text} setText={setText} />
      {text ? (
        <Search searchData={searchData} text={text} />
      ) : (
        <div>
          <div className="my-5">
            <h1 className="text-2xl mb-5">Trending</h1>
            <div className="flex overflow-hidden">
              <Swiper
                slidesPerView={4}
                spaceBetween={230}
                breakpoints={{
                  320: { slidesPerView: 1 },
                  480: { slidesPerView: 2, spaceBetween: 300 },
                  768: { slidesPerView: 2, spaceBetween: 50 },
                  1024: { slidesPerView: 2, spaceBetween: 50 },
                  1280: { slidesPerView: 3, spaceBetween: 320 },
                  1536: { slidesPerView: 4, spaceBetween: 300 },
                }}
              >
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
            <div className="grid-responsive">
              {recommended?.map((movie) => (
                <Card key={movie.id} movie={movie} />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Content;
