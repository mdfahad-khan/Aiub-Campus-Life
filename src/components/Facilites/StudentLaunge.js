import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Lounge1 from "../../assets/Facilities-Image/StodentLounge/student-launge.png";
import Lounge2 from "../../assets/Facilities-Image/StodentLounge/louge1.png";
import Lounge3 from "../../assets/Facilities-Image/StodentLounge/lounge2.png";
import Lounge4 from "../../assets/Facilities-Image/StodentLounge/lounge3.png";

const StudentLounge = () => {
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
        </Slider>
      </div>
      <div className="mt-8 p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold mb-4 text-center">Student Lounge</h2>
        <p className="text-gray-700 leading-relaxed text-justify">
          Several student lounges and social rooms are dotted around the AIUB
          campus. These university social rooms serve as dynamic spaces
          fostering connections and relaxation for students, faculty, and staff.
          Designed for versatility, they accommodate various activities, from
          group study sessions to casual gatherings. Equipped with comfortable
          seating and board games, they promote both productivity and leisure.
        </p>
      </div>
    </div>
  );
};

export default StudentLounge;
