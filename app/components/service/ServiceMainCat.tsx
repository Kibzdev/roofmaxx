import React from 'react';
import Image from "next/image";
import { IoIosArrowRoundForward } from "react-icons/io";
import { commercial, residential } from "../../../public/assets";

const ServiceMainCat: React.FC = () => {
  return (
    <div className="flex sm:flex-col md:flex-row">
      {/* Top section */}
      <div className="flex w-1/2 flex-col items-center justify-center">
        <div className="flex items-center justify-center">
          <Image
            src={residential}
            alt="residential"
            width={300}
            height={200}
            layout="responsive"
            className="rounded-none"
            placeholder="blur"
            blurDataURL="/path/to/your/blurred-image.jpg"
          />
        </div>
        <div className="flex w-full px-6 flex-col justify-center items-center">
          <h3 className="text-xl font-bold text-sky-800 py-8 text-center">Residential</h3>
          <p className="text-gray-600 mb-4 text-center font-light">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint, earum, provident inventore accusamus hic accusamus labore pariatur voluptatibus quos magni?</p>
          <div className="flex items-center justify-center">
            <a href="#" className="flex flex-row text-red-500 font-semibold mr-2">Learn More</a>
            <p><IoIosArrowRoundForward className="text-4xl text-red-500" /></p>
          </div>
        </div>
      </div>

      {/* Lower section */}
      <div className="flex flex-col w-1/2">
        <div className="flex items-center justify-center">
          <Image
            src={commercial}
            alt="commercial"
            layout="responsive"
            width={300}
            height={200}
            className="rounded-none"
          />
        </div>
        <div className="flex flex-col px-6 w-full justify-center items-center">
          <h3 className="text-xl font-bold text-sky-800 py-8 text-center">Commercial</h3>
          <p className="text-gray-600 mb-4 font-light text-center">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Flores dignissimos ipsam temporibus magni aliquid, error nihil! Autem?</p>
          <div className="flex items-center justify-center">
            <a href="#" className="flex flex-row text-red-500 font-semibold mr-2">Learn More</a>
            <p><IoIosArrowRoundForward className="text-4xl text-red-500" /></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceMainCat;
