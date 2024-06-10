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
    <div className="grid grid-cols-1 items-center justify-center px-2 border-white w-full">
      <div className="w-full flex justify-center">
        <Image
          src={photo}
          alt={name} // Update alt to reflect the name or a more descriptive text
          objectFit='scale-down'
          width={340}
          height={240} // Assuming this was meant to be a square aspect ratio
          className="border-white rounded-2xl h-[240px] w-[240px] md:rounded-full shadow-md shadow-sky-500 md:w-[440px] md:h-[540px]"
        />
      </div>
      <h2 className="text-white text-lg font-semibold text-center mt-2">{name}</h2>
      <p className="font-medium text-red-500 text-center">{expertise}</p>
    </div>
  );
}

export default ExpertCard;
