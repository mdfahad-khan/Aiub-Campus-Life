// src/Diversity.js
import React from "react";

// Import images
import mosque from "../../assets/Facilities-Image/Diversity/mosque.png";
import church from "../../assets/Facilities-Image/Diversity/church.png";
import temple from "../../assets/Facilities-Image/Diversity/temple.png";
import synagogue from "../../assets/Facilities-Image/Diversity/synagogue.png";

const religiousSpaces = [
  {
    image: mosque,
    name: "Mosque",
    description:
      "A place of worship for Muslims to perform their prayers, read the Quran, and engage in community gatherings.",
  },
  {
    image: church,
    name: "Church",
    description:
      "A place of worship for Christians where they can pray, read the Bible, and participate in community services.",
  },
  {
    image: temple,
    name: "Temple",
    description:
      "A sacred space for Hindus to perform rituals, pray, and engage in religious ceremonies.",
  },
  {
    image: synagogue,
    name: "Synagogue",
    description:
      "A place of worship for Jews to pray, study the Torah, and engage in community activities.",
  },
];

const Diversity = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-8 mt-3">
        Religious Spaces at Our Campus
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {religiousSpaces.map((space, index) => (
          <div
            key={index}
            className="border rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105"
          >
            <img
              src={space.image}
              alt={space.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2 text-blue-600">
                {space.name}
              </h3>
              <p className="text-gray-700">{space.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Diversity;
