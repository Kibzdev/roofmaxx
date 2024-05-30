// components/ServicesBanner.tsx
import { serviceBanner } from "@/constants";
import clsx from "clsx";
import Image from "next/image";
import React from 'react';
import { servicebg } from "../../../public/assets";

// Assuming serviceBanner has a specific type, define it
type ServiceBannerType = {
  _id: string;
  title: string;
  description: string;
  buttonText: string;
};

const ServicesBanner: React.FC = () => {
  return (
    <section id={serviceBanner._id} className="relative w-full h-screen bg-gray-100">
      <div className="absolute inset-0 z-0">
        <Image
          src={servicebg}
          alt="Service background"
          layout="fill" // Correct usage for full background images
          objectFit="cover" // Directly use objectFit as a prop
          quality={100}
        />
      </div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4 md:px-0">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">{serviceBanner.title}</h1>
        <p className="text-xl md:text-2xl mb-8">{serviceBanner.description}</p>
        <button className={clsx(
          "bg-red-500 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg",
          "transition duration-300"
        )}>
          {serviceBanner.buttonText}
        </button>
      </div>
    </section>
  );
};

export default ServicesBanner;
