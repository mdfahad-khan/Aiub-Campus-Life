import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Banner1 from "../../assets/Home-Image/home2.jpg";
import Banner2 from "../../assets/Facilities-Image/Gym/gym2.JPG";
import Banner3 from "../../assets/Home-Image/club.jpg";
import Banner5 from "../../assets/Facilities-Image/Library/liabary.jpg";

const SliderImage = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false,
  };

  return (
    <div className="w-full h-[400px] relative">
      <Slider {...settings}>
        <div className="relative">
          <img
            src={Banner1}
            alt="Home"
            className="w-full h-[400px] object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-3xl md:text-4xl font-bold text-white bg-black bg-opacity-50 rounded md:px-4 px-2 py-2 inline-block">
              Welcome to AIUB Campus
            </h1>
          </div>
        </div>
        <div className="relative">
          <img
            src={Banner5}
            alt="Library"
            className="w-full h-[400px] object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-3xl md:text-4xl font-bold text-white bg-black bg-opacity-50 rounded px-4 py-2 inline-block">
              Welcome to AIUB Library
            </h1>
          </div>
        </div>
        <div className="relative">
          <img
            src={Banner3}
            alt="Club"
            className="w-full h-[400px] object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-3xl md:text-4xl font-bold text-white bg-black bg-opacity-50 rounded px-4 py-2 inline-block">
              Welcome to AIUB Club
            </h1>
          </div>
        </div>
        <div className="relative">
          <img
            src={Banner2}
            alt="Gym"
            className="w-full h-[400px] object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className=" text-3xl md:text-4xl font-bold text-white bg-black bg-opacity-50 rounded px-4 py-2 inline-block">
              Welcome to AIUB Gym
            </h1>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default SliderImage;
