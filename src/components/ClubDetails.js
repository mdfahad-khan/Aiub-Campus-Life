import React from "react";
import { useParams } from "react-router-dom";
import { FaEnvelope } from "react-icons/fa";
import clubs from "../assets/clubs.json";

// Importing images statically
import englishClubImage from "../assets/englishClub.png";
import environmentClubImage from "../assets/enviromentClub.png";
import researchClubImage from "../assets/researchClub.png";
import computerClubImage from "../assets/computerClub.jpg";
import performingArtClubImage from "../assets/perfomingClub.png";
import roboticClubImage from "../assets/robotic.png";
import flimClubImage from "../assets/flim.png";

const imageMap = {
  "englishClub.png": englishClubImage,
  "enviromentClub.png": environmentClubImage,
  "computerClub.jpg": computerClubImage,
  "perfomingClub.png": performingArtClubImage,
  "researchClub.png": researchClubImage,
  "robotic.png": roboticClubImage,
  "flim.png": flimClubImage,
};

const ClubDetails = () => {
  const { id } = useParams();
  const club = clubs.find((club) => club.id === parseInt(id));

  if (!club) return <div>Club not found!</div>;

  return (
    <div className="bg-gray-100 min-h-screen p-8 flex flex-col items-center">
      <div className="max-w-4xl w-full mx">
        <h2 className="text-3xl font-bold text-center mt-6 mb-8 text-gray-800">
          {club.name} Details
        </h2>
        <div className=" bg-white border rounded-sm shadow-lg p-3">
          <img
            src={imageMap[club.image]}
            alt={club.name}
            className="w-4/5 h-[350px] md:ml-20 mb-4 rounded-sm"
          />
          <p className=" mb-4 text-xl font-bold">Objective:</p>
          <p className="text-gray-700 mb-4 text-lg text-justify">
            {club.description}
          </p>
          <p className=" mb-4 text-xl font-bold">Activity:</p>
          <p className="text-gray-700 mb-4 text-lg text-justify">
            {club.objective}
          </p>
          <p className=" mb-4 text-xl font-bold">Membership:</p>
          <p className="text-gray-700 mb-4 text-lg text-justify">
            {club.membership}
          </p>
          <p className=" mb-4 text-xl font-bold">Leadership:</p>
          <p className="text-gray-700 mb-4 text-lg text-justify">
            {club.leadership}
          </p>
          <p className=" mb-4 text-xl font-bold">Future Outlook:</p>
          <p className="text-gray-700 mb-4 text-lg text-justify">
            {club.futeroutlook}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ClubDetails;
