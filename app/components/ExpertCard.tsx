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
    <div className="flex flex-col items-center justify-center px-2 border-white w-[340px]  height-340px">  
      <div className="flex w-full">
        <Image
          src={photo} 
          alt={name} // Update alt to reflect the name or a more descriptive text
         objectFit='scale-down'
        //  layout='responsive'
          width={340}
          height={240} // Assuming this was meant to be a square aspect ratio
          className=" border-white rounded-2xl h-[240px] w-[240]  md:rounded-full shadow-md shadow-sky-500 md:w-[440px] md:h-[540px]" />
      </div>
      <h2 className="text-white text-lg font-semibold">{name}</h2>
      <p className="font-medium text-red-500">{expertise}</p>
    </div>
  );
}

export default ExpertCard;
