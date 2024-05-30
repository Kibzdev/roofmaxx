// components/ExpertCard.tsx
import Image from "next/image";
import React from 'react';

// Define the type for the props
type ExpertCardProps = {
    photo: string;     // URL for the photo
    name: string;      // Expert's name
    expertise: string; // Description of the expert's area of expertise
};

const ExpertCard: React.FC<ExpertCardProps> = ({ photo, expertise, name }) => {
  return (
    <div className="flex flex-col items-center justify-center px-2 border-white">  
      <div className="flex w-full">
        <Image
          src={photo} 
          alt={name} // Update alt to reflect the name or a more descriptive text
          layout="responsive"
          width={340}
          height={340} // Assuming this was meant to be a square aspect ratio
          className="border-white rounded-md shadow-md shadow-sky-500" />
      </div>
      <h2 className="text-white text-lg font-semibold">{name}</h2>
      <p className="font-medium text-red-500">{expertise}</p>
    </div>
  );
}

export default ExpertCard;
