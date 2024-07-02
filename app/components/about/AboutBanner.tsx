import React from 'react';
import Image from "next/image";
import { bgservice } from "../../../public/assets";

const ServiceBanner: React.FC = () => {
  // TypeScript definitions aren't required here as no props or complex states are used

  return (
    <div className="relative w-full max-h-screen mt-0">
      <Image 
        src={bgservice}
        alt="Service Image" // Modified alt text for better clarity
        className="object-contain max-h-screen w-full h-full"
        width={1200}
        height={400}
      />
    </div>
  );
};

export default ServiceBanner;
