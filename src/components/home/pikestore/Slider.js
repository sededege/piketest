import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import banner1 from "./assets/banner1.png";

const Slider = () => {
  return (
    <>
      <Carousel
        showStatus={false}
        showThumbs={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={5000}
        showArrows={false}
      >
        <div className="h-[180px] md:h-[300px]  mb-4 hover:opacity-70  cursor-pointer relative">
          <div className="bg-pike2 w-full h-full rounded-lg  "></div>
        </div>
        <div className="h-[180px] md:h-[300px] mb-4 hover:opacity-70  cursor-pointer relative">
          <div className="bg-pike w-full h-full rounded-lg h-full"></div>
        </div>
      </Carousel>
    </>
  );
};

export default Slider;
