import React from 'react';
import clsx from 'clsx';
import Image from 'next/image';
import { SERVICE_INTRO } from "@/constants";
import ServiceMainCat from './ServiceMainCat';


// Define interfaces for the SERVICE_INTRO structure
interface CallToAction {
  text: string;
  phone: string;
  subText: string;
}

interface ServiceIntroData {
  callToAction: CallToAction;
}

const ServiceIntro: React.FC = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
            <h2 className="text-4xl font-bold text-blue-700 mb-4">{SERVICE_INTRO.callToAction.text}</h2>
            <p className="text-2xl text-yellow-600 mb-4">{SERVICE_INTRO.callToAction.phone}</p>
            <p className="text-xl text-blue-700">{SERVICE_INTRO.callToAction.subText}</p>
          </div>
          <div className="flex">
            <ServiceMainCat />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServiceIntro;
