"use client";
import React, { useEffect, useState } from 'react';
import SectionIntro from './SectionIntro';
import ExpertCard from './team/ExpertCard';
import FadeIn from './FadeIn';
import { fetchTeamMembers } from '@/sanity/lib/fetch'; // Adjust the import path as necessary


// Define the type for individual team members
type TeamMember = {
  _id: string;
  photo: string;     // URL for the expert's photo
  firstname: string; // Expert's first name
  lastname: string;  // Expert's last name
  expertise: string; // Description of the expert's area of expertise
};

const TeamView: React.FC = () => {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getTeamMembers = async () => {
      try {
        const data = await fetchTeamMembers();
        setTeamMembers(data);
      } catch (err) {
        setError('Failed to fetch team members');
      }
    };

    getTeamMembers();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="flex flex-col bg-[#075985] w-full h-full mt-2 py-6 px-6 items-center  justify-center gap-10 ">
      <div className="w-full">
        <SectionIntro subtitle="Meet our Experts" title="The Team" >
        <p className='mt-4 text-white tracking-normal md:text-lg text-sm'>At Roofmax we Invest heavily in competence training and qualifications for our installers, ensuring they receive all support
        and expert advice they need to deliver a high quality roof installation that we are proud to put our name to.</p>
        </SectionIntro>
      </div>
      <FadeIn>
        <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-4 md:gap-1  max-w-8xl w-full justify-center items-center px-4 sm:px-0">
          {teamMembers.map((teamMember: TeamMember) => (
            <div key={teamMember._id} className=" flex flex-col p-4 justify-center items-center">
              <ExpertCard 
                photo={teamMember.photo} 
                firstname={teamMember.firstname} 
                lastname={teamMember.lastname} 
                expertise={teamMember.expertise} 
              />
            </div>
          ))}
         
        </div>
      </FadeIn>
      <div className=' flex w-full items-center justify-center mt-4 mb-4'>
            <h3 className='md:font-extrabold font-bold tracking-wider text-lg md:text-3xl text-white  text-center'> We &apos; ve built an amazing team at Roofmax and we are still growing</h3>
        </div>
    </div>
  );
};

export default TeamView;
