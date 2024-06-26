import React from 'react';
import Image from "next/image";

import Container from '../Container';
import { commercial, residential } from '@/public/assets';

const ServiceMainCat: React.FC = () => {
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-1 gap-4 mt-8">
      <Container>
        {/* Top section */}
        <div className="flex px-4 items-center justify-center">
          <div className=" flex w-full relative ">
            <Image
              src={residential}
              alt="residential"
              className="rounded-none object-cover" 
              sizes="(max-width: 768px) 100vw, 50vw"
              height={200}
              width={400}
                          

            />
          </div>
          <div className="flex flex-col w-full px-6 justify-center items-center">
            <h3 className="text-xl font-bold text-sky-800 py-8 text-center">Residential</h3>
            <p className="text-gray-700 mb-4 tracking-wider max-w-2xl text-left md:text-center font-medium text-sm md:text-lg">
              RoofMax is your premier provider of comprehensive residential roofing solutions. Our commitment to excellence and attention to detail ensures that your home is protected and aesthetically pleasing. Here&#39;s a closer look at the services we offer:
            </p>
          </div>
        </div>

        {/* Lower section */}
        <div className="flex items-center justify-center">
          <div className="flex flex-col px-6 w-full justify-center items-center">
            <h3 className="text-xl font-bold text-sky-800 py-8 text-center">Commercial</h3>
            <p className="text-gray-700 mb-4 font-medium tracking-wider text-left md:text-center text-sm md:text-lg">
              RoofMax is your trusted partner for comprehensive commercial roofing solutions. Our expertise and commitment to quality ensure that your business is protected and visually appealing. Here’s an overview of the services we provide for commercial properties:
            </p>
          </div>
          <div className=" flex w-full relative">
            <Image
              src={commercial}
              alt="commercial"
              className="rounded-none object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              height={200}
              width={400}
              
            />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default ServiceMainCat;
