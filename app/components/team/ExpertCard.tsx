import Image from 'next/image';
import React from 'react';
import { Card, CardHeader, CardContent } from '@/components/ui/card';

// Define the type for the props
type ExpertCardProps = {
  photo: string;     // URL for the photo
  firstname: string; // Expert's first name
  lastname: string;  // Expert's last name
  expertise: string; // Description of the expert's area of expertise
};

const ExpertCard: React.FC<ExpertCardProps> = ({ photo, firstname, lastname, expertise }) => {
  const fullName = `${firstname} ${lastname}`;

  return (
    <Card className="flex flex-col border-b-4 border-b-[#ef4444] bg-[#075985] shadow-b-md shadow-[#ef4444] w-[375px] h-[375px] sm:w-full sm:h-full md:w-80 lg:w-80">
      <CardHeader className="relative w-full h-[375px] sm:h-60 md:h-48 lg:h-64 flex justify-center items-center bg-gray-200 overflow-hidden rounded-sm shadow-lg shadow-black">
        <Image
          src={photo}
          alt={fullName} // Update alt to reflect the full name or a more descriptive text
          fill
          sizes="100vw"
          className="rounded-sm object-cover grayscale hover:grayscale-0 transition duration-300 ease-in-out"
        />
      </CardHeader>
      <CardContent className="text-center p-4">
        <h2 className="text-white text-lg font-bold mt-2 uppercase">{fullName}</h2>
        <p className="text-[#ef4444] font-semibold">{expertise}</p>
      </CardContent>
    </Card>
  );
};

export default ExpertCard;
