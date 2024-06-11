import Image from 'next/image';
import React from 'react';
import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card';

// Define the type for the props
type ExpertCardProps = {
  photo: string;     // URL for the photo
  name: string;      // Expert's name
  expertise: string; // Description of the expert's area of expertise
};

const ExpertCard: React.FC<ExpertCardProps> = ({ photo, expertise, name }) => {
  return (
    <Card className="border-b-4 border-b-[#ef4444] bg-[#075985] shadow-b-md shadow-[#ef4444] lg:w-80 md:w-80">
      <CardHeader className="relative w-full h-64 sm:h-80 flex justify-center items-center bg-gray-200 overflow-hidden rounded-sm shadow-lg shadow-black">
        <Image
          src={photo}
          alt={name} // Update alt to reflect the name or a more descriptive text
          fill
          sizes="100vw"
          className="rounded-sm object-cover grayscale hover:grayscale-0 transition duration-300 ease-in-out"
        />
      </CardHeader>
      <CardContent className="text-center p-4">
        <h2 className="text-white text-lg font-bold mt-2 uppercase">{name}</h2>
        <p className=" text-[#ef4444] font-semibold">{expertise}</p>
      </CardContent>
    </Card>
  );
}

export default ExpertCard;
