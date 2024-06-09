import React from "react";
import { FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";
import clubs from "../../assets/clubs.json";
import englishClubImage from "../../assets/englishClub.png";
import environmentClubImage from "../../assets/enviromentClub.png";
import researchClubImage from "../../assets/researchClub.png";
import computerClubImage from "../../assets/computerClub.jpg";
import performingArtClubImage from "../../assets/perfomingClub.png";
import roboticClubImage from "../../assets/robotic.png";
import flimClubImage from "../../assets/flim.png";

const imageMap = {
  "englishClub.png": englishClubImage,
  "enviromentClub.png": environmentClubImage,
  "computerClub.jpg": computerClubImage,
  "perfomingClub.png": performingArtClubImage,
  "researchClub.png": researchClubImage,
  "robotic.png": roboticClubImage,
  "flim.png": flimClubImage,
};

const Clubs = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-8 flex flex-col items-center">
      <div className="max-w-4xl w-full mt-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Student Clubs
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6  ">
          {clubs.map((club) => (
            <Link key={club.id} to={`/club/${club.id}`}>
              <div className="p-2 bg-white border rounded-sm h-[600px] shadow-lg  overflow-hidden">
                <img
                  src={imageMap[club.image]}
                  alt={club.name}
                  className="w-full h-[200px] mb-4 rounded-sm"
                />
                <h3 className="text-2xl font-semibold mb-2 text-blue-600">
                  {club.name}
                </h3>
                <p className="text-gray-700 mb-4">{club.objective}</p>
                <div className="flex items-center text-gray-600">
                  <FaEnvelope className="mr-2" />
                  <span>{club.contact}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Clubs;
