import Image from "next/image";
import React from 'react';

// Define the types for the props
interface GalleryCardProps {
  img: string;      // URL of the image
  location: string; // Location text
  service: string;  // Service text
  imgNo: number;    // Image number, assuming it's a number
}

const GalleryCard: React.FC<GalleryCardProps> = ({ img, location, service, imgNo }) => {
  return (
    <div className="flex relative flex-col w-full h-full">
      <div className="flex w-full">
        <Image src={img} alt={service} className="w-full object-cover brightness-60" width={240} height={340} />
      </div>
      <h3 className="absolute bottom-2 right-0 left-0 text-white text-lg text-center font-bold hover:underline hover:underline-offset-8 hover:bg-sky-800 hover:text-white hover:bg-opacity-80">
        {location}
      </h3>
      <h4 className="absolute bottom-6 right-0 left-0 text-white font-semibold text-light py-4 text-center hover:text-2xl">
        {service}
      </h4>
      {/* badge */}
      <p className="absolute top-4 right-4 font-extrabold text-2xl text-white hover:text-red-500 hover:border-2 hover:rounded-full hover:px-4">
        {imgNo}
      </p>
    </div>
  );
}

export default GalleryCard;
