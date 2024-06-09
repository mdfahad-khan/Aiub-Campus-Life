import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";
import {
  FaBook,
  FaDumbbell,
  FaUtensils,
  FaSwimmer,
  FaUsers,
  FaFutbol,
  FaCouch,
} from "react-icons/fa";
import { Link } from "react-router-dom";

import Gym from "../../assets/Facilities-Image/Gym/gym.jpg";
import Library from "../../assets/Facilities-Image/Library/liabary.jpg";
import Cafeteria from "../../assets/Facilities-Image/Cafeteria/cafeteria.jpg";
import SwimmingPool from "../../assets/Facilities-Image/SwimmingPool/swimming.png";
import Sports from "../../assets/Facilities-Image/Sports/sports.png";
import StudentLounge from "../../assets/Facilities-Image/StodentLounge/student-launge.png";
import Diversity from "../../assets/Facilities-Image/Diversity/diversity.png";

// Sample facilities data with images
const facilities = [
  {
    id: 1,
    type: "Library",
    name: "Main Library",
    description:
      "A place to read and borrow books.",
    location: "Building C",
    image: Library,
    icon: FaBook,
    color: "text-blue-600",
    link: "/library",
  },
  {
    id: 2,
    type: "Gym",
    name: "Campus Gym",
    description: "A place to exercise and stay fit.",
    location: "Building D",
    image: Gym,
    icon: FaDumbbell,
    color: "text-red-600",
    link: "/gym",
  },
  {
    id: 3,
    type: "Cafeteria",
    name: "Central Cafeteria",
    description: "A place to eat and socialize.",
    location: "Anex 1",
    image: Cafeteria,
    icon: FaUtensils,
    color: "text-green-600",
    link: "/cafeteria",
  },
  {
    id: 4,
    type: "Sports",
    name: "Sports Complex",
    description: "Facilities for various sports activities.",
    location: "Sposts Gellery",
    image: Sports,
    icon: FaFutbol,
    color: "text-yellow-600",
    link: "/sports",
  },
  {
    id: 5,
    type: "Student Lounge",
    name: "Student Lounge",
    description: "A place for students to relax and socialize.",
    image: StudentLounge,
    icon: FaCouch,
    color: "text-purple-600",
    link: "/student-lounge",
  },
  {
    id: 6,
    type: "Swimming Pool",
    name: "Swimming Pool",
    description: "A place to swim and relax.",
    location: "Building D",
    image: SwimmingPool,
    icon: FaSwimmer,
    color: "text-aqua-600",
    link: "/swimming-pool",
  },
  {
    id: 7,
    type: "Diversity Center",
    name: "Diversity Center",
    description: "Promoting diversity and inclusion on campus.",
    location: "Annex",
    image: Diversity,
    icon: FaUsers,
    color: "text-teal-600",
    link: "/diversity",
  },
  // Add more facilities here
];

const Facilities = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredFacilities = facilities.filter((facility) =>
    facility.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-gray-100 min-h-screen py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Campus Facilities
        </h2>
        <div className="relative mb-12 max-w-lg mx-auto">
          <div className="relative">
            <input
              type="text"
              value={searchTerm}
              onChange={handleSearch}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500"
              placeholder="Search facilities..."
            />
            <BiSearch
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              size={20}
            />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredFacilities.map((facility) => {
            const Icon = facility.icon;
            return (
              <Link to={facility.link} key={facility.id} className="block">
                <div className="bg-white border rounded-lg overflow-hidden shadow-lg transition transform hover:scale-105">
                  <img
                    src={facility.image}
                    alt={facility.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-2xl font-semibold mb-3 text-gray-800 flex items-center">
                      <Icon className={`mr-2 ${facility.color}`} />{" "}
                      {facility.name}
                    </h3>
                    <p className="text-gray-600 mb-4">{facility.description}</p>
                    <p className="text-sm text-gray-500">{facility.location}</p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Facilities;
