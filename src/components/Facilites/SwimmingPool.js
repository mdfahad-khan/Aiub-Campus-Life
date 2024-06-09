import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Lounge1 from "../../assets/Facilities-Image/SwimmingPool/swimming.png";
import Lounge2 from "../../assets/Facilities-Image/SwimmingPool/pool1.png";
import Lounge3 from "../../assets/Facilities-Image/SwimmingPool/pool2.png";
import Lounge4 from "../../assets/Facilities-Image/SwimmingPool/pool3.png";
import Lounge5 from "../../assets/Facilities-Image/SwimmingPool/pool4.png";

const SwimmingPool = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };

  return (
    <div className="w-full max-w-6xl mx-auto mt-8">
      <div className="relative">
        <Slider {...settings}>
          <div>
            <img
              src={Lounge1}
              alt="Student Lounge"
              className="w-full h-[500px] object-cover rounded-lg shadow-md"
            />
          </div>
          <div>
            <img
              src={Lounge2}
              alt="Student Lounge"
              className="w-full h-[500px] object-cover rounded-lg shadow-md"
            />
          </div>
          <div>
            <img
              src={Lounge3}
              alt="Student Lounge"
              className="w-full h-[500px] object-cover rounded-lg shadow-md"
            />
          </div>
          <div>
            <img
              src={Lounge4}
              alt="Student Lounge"
              className="w-full h-[500px] object-cover rounded-lg shadow-md"
            />
          </div>
          <div>
            <img
              src={Lounge5}
              alt="Student Lounge"
              className="w-full h-[500px] object-cover rounded-lg shadow-md"
            />
          </div>
        </Slider>
      </div>
      <div className="mt-8 p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold mb-4 text-center">
          AIUB SwimmingPool
        </h2>
        <p className="text-gray-700 leading-relaxed text-justify">
          AIUB is equipped with a state-of-the-art aquatic facility situated on
          the 11th floor of the D Building. The integration of this swimming
          pool into the university campus not only introduces a rejuvenating
          recreational amenity but also offers a myriad of advantages for the
          physical, mental, and social well-being of our diverse community.
          Moreover, the facility features segregated steam baths for both male
          and female users, ensuring a comfortable and private experience.
          Additionally, there are distinct shower zones designated for male and
          female individuals, promoting a sense of privacy and convenience. To
          further enhance the experience, designated male and female instructors
          are available to provide guidance and assistance, contributing to a
          comprehensive and inclusive aquatic environment at AIUB.
        </p>
      </div>
    </div>
  );
};

export default SwimmingPool;
