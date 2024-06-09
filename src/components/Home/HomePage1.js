import React from "react";
import { Link } from "react-router-dom";
import SliderImage from "./SliderImage";
import nightImage from "../../assets/Home-Image/night.PNG";
import club from "../../assets/Home-Image/club1.JPG";
import acitvity from "../../assets/Home-Image/activity.JPG";
import facilities from "../../assets/Facilities-Image/Library/liabary1.jpg";
import contact from "../../assets/contact1.jpg";

const Homepage = () => {
  const features = [
    {
      name: "Student Activities",
      link: "/student-activities",
      image: acitvity,
    },
    {
      name: "Clubs",
      link: "/clubs",
      image: club,
    },
    {
      name: "Facilities",
      link: "/facilities",
      image: facilities,
    },
    {
      name: "Contact",
      link: "/contact",
      image: contact,
    },
  ];

  return (
    <div className="">
      <div className="overflow-hidden">
        <SliderImage />
      </div>

      <div className="bg-gray-100 flex items-center justify-center p-8">
        <div className="w-full max-w-5xl bg-white shadow-lg rounded-lg overflow-hidden">
          <div
            className="bg-cover bg-center h-80 p-4"
            style={{
              backgroundImage: `url(${nightImage})`,
            }}
          >
            <h1 className=" text-3xl md:text-4xl font-bold text-white bg-black bg-opacity-50 rounded px-4 py-2 inline-block">
              AIUB Campus Life
            </h1>
          </div>
          <div className="p-3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
              {features.map((feature, index) => (
                <Link to={feature.link} key={index} className="block">
                  <div className="relative bg-gray-300 h-48 rounded-lg overflow-hidden shadow-lg">
                    <img
                      src={feature.image}
                      alt={feature.name}
                      className="w-full h-full object-cover  "
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                      <h2 className="text-2xl font-bold text-white">
                        {feature.name}
                      </h2>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            <p className="text-gray-700 mt-2 font-semibold text-xl mb-4">
              Explore student activities, clubs, facilities, and more!
            </p>
            <p className="text-gray-700">
              At AIUB, we offer a diverse range of activities and facilities to
              enhance your campus experience. Whether you're interested in
              joining a club, participating in sports, or making use of our
              state-of-the-art facilities, we have something for everyone. Dive
              into the vibrant campus life and make the most of your time here!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
