import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import banner1 from "./assets/summer2.jpg";
import {IoMdArrowDropleft,IoMdArrowDropright} from 'react-icons/io'
const Slider = () => {
  return (
    <>
      <Carousel
        showStatus={false}
        showThumbs={false}
        infiniteLoop={true}
        /* autoPlay={true} */
        interval={5000}
        showArrows={true}
        renderArrowPrev={(clickHandler, hasPrev) => {
          return (
            <div
              className={`${
                hasPrev ? "absolute" : "hidden"
              } top-0 bottom-0 left-0 flex justify-center items-center  p-3 hover:opacity-80 cursor-pointer z-20`}
              onClick={clickHandler}
            >
              <IoMdArrowDropleft className="w-9 h-9 text-white fill-black" />
            </div>
          );
        }}
        renderArrowNext={(clickHandler, hasNext) => {
          return (
            <div
              className={`${
                hasNext ? "absolute" : "hidden"
              } top-0 bottom-0 right-0 flex justify-center items-center  p-3 hover:opacity-80 cursor-pointer z-20`}
              onClick={clickHandler}
            >
              <IoMdArrowDropright className="w-9 h-9  fill-black" />
            </div>
          );
        }}
      >
        <div className="h-[120px] md:h-full rounded-lg mb-4 hover:opacity-70  cursor-pointer relative">
          <img src={banner1} className=" rounded-lg object-contain"/>
        </div>
        <div className="h-[120px] md:h-full rounded-lg mb-4 hover:opacity-70  cursor-pointer relative">
          <img src={banner1} className=" w-1/2 rounded-lg object-cover"/>
        </div>
       
      </Carousel>
    </>
  );
};

export default Slider;
