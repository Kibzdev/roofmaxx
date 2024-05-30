// components/TeamView.tsx
import React from 'react';
import Button from "./Button";

import { teamMembers } from "@/constants";
import ExpertCard from './ExpertCard';

// Assuming a type definition for individual team members
type TeamMember = {
  _id: string;
  // Define other properties expected by ExpertCard
  [key: string]: any; // Replace with specific fields used by ExpertCard for better type safety
};

const TeamView: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row bg-sky-800 w-full h-full mt-6 py-10 px-6 gap-2">
      <div className="flex flex-col w-full md:w-1/2 gap-4 items-center justify-center">
        <h3 className="font-medium text-white text-lg">Team Members</h3>
        <h2 className="text-red-500 font-semibold text-lg">Meet Our Qualified Team</h2>
        <p className="text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id dicta suscipit quam tempore, corporis provident omnis
          repudiandae veniam vitae nisi distinctio veritatis culpa ratione eos laborum! Dolor autem officia maiores.
        </p>
        <Button className="rounded-none bg-red-500 px-2 py-2 w-1/2 text-white items-center justify-center">
          View More
        </Button>
      </div>
      <div className="flex w-full items-center justify-center">
        {teamMembers.map((teamMember: TeamMember) => (
          <ExpertCard key={teamMember._id} {...teamMember} />
        ))}
      </div>
    </div>
  );
}

export default TeamView;
