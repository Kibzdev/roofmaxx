import React from 'react';
import Image from 'next/image';
import { kev, logo } from '@/public/assets';

const OurService: React.FC = () => {
  return (
    <div className="relative bg-sky-700 text-white py-16 md:py-24">
      <div className="container mx-auto px-4 flex  md:flex-row items-center">
        <div className="flex flex-col w-3/5  md:w-1/2 items-center justify-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-center md:text-start">
            Get the <span className="text-[#ef4444]">best</span> roofing solutions with Roofmax
          </h2>
          <p className="text-lg md:text-xl mb-6 text-center md:text-start">
            Roofmax offers top-notch roofing services, ensuring durability and quality with expert craftsmanship and the latest roofing technologies.
          </p>
          <div className="flex ">
            <Image src={logo} alt="roofmax Logo" width={32} height={32} className="mr-2" />
            <span className="text-xl font-semibold md:text-start">Roofmax</span>
          </div>
        </div>
        <div className="flex w-1/2  md:w-1/2 mt-8 md:mt-0 relative justify-center items-center ">
          <div className="flex w-3/5 md:w-full">
            <Image
              src={kev}
              alt="Banner"
              width={400}
              height={200}
              className="rounded-t-full md:rounded-tl-full md:rounded-tr-none object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurService;
