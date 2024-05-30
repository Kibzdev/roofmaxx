// components/Stats.tsx
import React from 'react';
import { FaLocationDot } from "react-icons/fa6";
import { PiUsersThreeFill } from "react-icons/pi";
import { GiDiamondTrophy } from "react-icons/gi";
import { RiHomeSmileFill } from "react-icons/ri";

const Stats: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center min-h-screen diagonal-bg bg-opacity-50">
      <div className="flex space-x-4">
        {/* Left card */}
        <div className="illusion-card bg-red-500 shadow-lg rounded-lg p-6 transform scale-110">
          <div>
            <h2 className="text-6xl font-bold text-sky-800">35</h2>
            <p className="text-white font-medium">Counties</p>
          </div>
          <FaLocationDot className="text-xl text-white mt-3 text-center" />
        </div>

        {/* Middle-left card */}
        <div className="illusion-card bg-red-500 shadow-lg rounded-lg p-6 transform scale-90 -rotate-3">
          <div>
            <h2 className="text-lg font-bold text-white">40+</h2>
            <p className="text-white font-medium">Team Members</p>
          </div>
          <div>
            <PiUsersThreeFill className="text-4xl text-white mt-3 text-center" />
          </div>
        </div>

        {/* Middle-right card */}
        <div className="illusion-card bg-red-500 shadow-lg rounded-lg p-6 transform scale-90 rotate-3">
          <h2 className="text-lg font-bold text-white">65</h2>
          <p className="text-white font-medium">Successful Projects</p>
          <div>
            <GiDiamondTrophy className="text-4xl text-white mt-3 text-center" />
          </div>
        </div>

        {/* Right card */}
        <div className="illusion-card bg-red-500 shadow-lg rounded-lg p-6 transform scale-110">
          <div>
            <h2 className="text-lg text-white font-bold">100%</h2>
            <p className="text-white font-medium">Happy Clients</p>
          </div>
          <div>
            <RiHomeSmileFill className="text-4xl text-white mt-3 text-center" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
