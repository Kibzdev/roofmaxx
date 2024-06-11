import React from 'react';
import { teamMembers } from '@/constants';
import SectionIntro from './SectionIntro';
import ExpertCard from './team/ExpertCard';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import FadeIn from './FadeIn';

// Define the type for individual team members
type TeamMember = {
  _id: string;
  photo: string;  // URL for the expert's photo
  name: string;   // Expert's name
  expertise: string; // Description of the expert's area of expertise
};

const TeamView: React.FC = () => {
  return (
    <div className="flex flex-col bg-[#075985] w-full h-full mt-2 py-6 px-6 items-center gap-10">
      <div className="w-full">
        <SectionIntro subtitle="Meet our Experts" title="The Team">
          <p className='text-white font-medium'>Ready To Serve</p>
        </SectionIntro>
      </div>
      <FadeIn>
      <Carousel className="flex max-w-6xl">
        <CarouselContent className="-ml-1 md:gap-4">
          {teamMembers.map((teamMember: TeamMember) => (
            <CarouselItem 
              key={teamMember._id} 
              className="basis-full sm:basis-1/2  lg:basis-1/3 "
            >
              <div className="p-1">
                <ExpertCard {...teamMember} />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white text-black border border-white p-2 rounded-full shadow-lg z-10 hover:bg-[#ef4444] hover:text-white" />
        <CarouselNext className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-[#ef4444] text-white border border-white p-2 rounded-full shadow-lg z-10 hover:bg-white hover:text-[#ef4444]" />
      </Carousel>
      </FadeIn>
     
    </div>
  );
}

export default TeamView;
