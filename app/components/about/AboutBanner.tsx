import React from 'react';
import Image from "next/image";
import { bgservice } from "../../../public/assets";

const ServiceBanner: React.FC = () => {
  // TypeScript definitions aren't required here as no props or complex states are used

  return (
    <div className="relative w-full h-64 sm:h-96 bg-gray-300 mt-0">
      <Image 
        src={bgservice}
        alt="Service Image" // Modified alt text for better clarity
        className="object-cover w-full h-full"
        width={1440}
        height={640}
      />
    </div>
  );
};

export default ServiceBanner;
