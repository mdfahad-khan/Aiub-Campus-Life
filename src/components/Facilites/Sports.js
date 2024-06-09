// src/Sports.js
import React from "react";

// Import images
import chess from "../../assets/Facilities-Image/Sports/chess.png";
import billiard from "../../assets/Facilities-Image/Sports/pool.png";
import carom from "../../assets/Facilities-Image/Sports/carom.png";
import tableTennis from "../../assets/Facilities-Image/Sports/table-tennis.png";
import footballField from "../../assets/Facilities-Image/Sports/football-field.png";
import cricketPitch from "../../assets/Facilities-Image/Sports/cricket-pitch.png";
import basketballCourt from "../../assets/Facilities-Image/Sports/basketball-court.png";
import badmintonCourt from "../../assets/Facilities-Image/Sports/badminton-court.png";
import volleyballCourt from "../../assets/Facilities-Image/Sports/volleyball-court.png";

const sportsFacilities = [
  {
    image: chess,
    name: "Chess",
    description:
      "Chess is an indoor game of strategy and tactics, requiring critical thinking and foresight. It’s a mental challenge that can be played one-on-one, developing patience and concentration.",
  },
  {
    image: billiard,
    name: "Pool",
    description:
      "Billiard, also known as pool, is an indoor cue sport where players use cues to pocket balls into designated holes on a table. It’s a game of precision and skill.",
  },
  {
    image: carom,
    name: "Carom",
    description:
      "Carom is an indoor disc game that requires players to flick discs into pockets on a square board. It combines elements of strategy, accuracy, and dexterity.",
  },
  {
    image: tableTennis,
    name: "Table Tennis",
    description:
      "Table Tennis, or ping-pong, is an indoor racquet sport played with small paddles and a lightweight ball. It’s fast-paced and demands quick reflexes and strategic shot placement.",
  },
  {
    image: footballField,
    name: "Football ",
    description:
      "Our outdoor football field is perfect for practicing and playing football. It’s a large, well-maintained space that accommodates team practices, matches, and recreational play.",
  },
  {
    image: cricketPitch,
    name: "Cricket",
    description:
      "The cricket practice pitch is designed for honing batting and bowling skills. It provides a realistic environment for cricket enthusiasts to practice and improve their game.",
  },
  {
    image: basketballCourt,
    name: "Basketball",
    description:
      "Our outdoor basketball court offers a great venue for playing and practicing basketball. It features standard hoops and ample space for full-court games and drills.",
  },
  {
    image: badmintonCourt,
    name: "Badminton ",
    description:
      "The outdoor badminton court is ideal for both casual and competitive play. It’s equipped with proper netting and markings, suitable for singles and doubles matches.",
  },
  {
    image: volleyballCourt,
    name: "Volleyball ",
    description:
      "Our outdoor volleyball court provides a space for engaging in this dynamic and team-oriented sport. It’s perfect for recreational play and organized matches.",
  },
];

const Sports = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-8 mt-3">
        AIUB Sports Facilities
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {sportsFacilities.map((facility, index) => (
          <div
            key={index}
            className="border rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105"
          >
            <img
              src={facility.image}
              alt={facility.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2 text-blue-600">
                {facility.name}
              </h3>
              <p className="text-gray-700">{facility.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sports;
