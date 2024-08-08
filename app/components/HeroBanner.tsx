"use client";
import { useState } from 'react';
import { homebg, mobileBg } from '@/public/assets';
import NavSocials from './NavSocials';
import Image from 'next/image';
import ScheduleForm from './ScheduleForm';
import FadeIn from './FadeIn';

const HeroBanner: React.FC = () => {
  const [result, setResult] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState<boolean>(false);

  const sendEmail = () => {
    fetch('/api/emails', {
      method: 'POST'
    })
      .then(response => response.json())
      .then(data => setResult(data))
      .catch(error => setResult(error))
      .finally(() => setLoading(false));
  };

  return (
    <div className="relative w-full h-[640px] mt-24 sm:mt-32 md:mt-38 bg-gray-50 flex flex-col-reverse md:flex-row items-center justify-center md:justify-between">
      <div className="absolute md:w-full md:h-full inset-0 md:block hidden">
        <Image
          src={mobileBg}
          alt="Background Image"
          height={640}
          width={1200}
          className="w-full h-[640px] object-cover group-hover:scale-105 duration-500 rounded-tl-md rounded-bl-md"
        />
       <div className='absolute bottom-8 right-8 sm:bottom-12 sm:right-16 md:bottom-16 md:right-24 lg:bottom-12 lg:right-24 xl:bottom-12 xl:right-36 p-2 sm:p-4 bg-black/20 animated-border'>
        <h1 className='text-white text-xl sm:text-2xl md:text-4xl lg:text-6xl xl:text-8xl font-bold'>MAKING</h1>
        <h1 className='text-white text-xl sm:text-2xl md:text-4xl lg:text-6xl xl:text-8xl font-bold'>ROOFS <span className='text-red-500'>LAST</span></h1>
      </div>

      </div>
      <div className="absolute mt-4 inset-0 block md:hidden z-20">
        <div className='relative w-full h-[240px] sm:h-[340px] md:h-[640px]'>
          <Image
            src={mobileBg}
            alt="Mobile Background Image"
            height={240}
            width={500}
            className="w-full h-[240px] sm:h-[340px] md:h-[640px] object-cover group-hover:scale-105 duration-500 rounded-tl-md rounded-bl-md"
          />
          <div className='absolute bottom-4 sm:bottom-6 right-8 sm:right-12 p-4 bg-black/20 animated-border'>
            <h1 className='text-white text-xl sm:text-2xl md:text-4xl font-bold'>MAKING</h1>
            <h1 className='text-white text-xl sm:text-2xl md:text-4xl font-bold'>ROOFS <span className='text-red-500'>LAST</span></h1>
          </div>
        </div>
      </div>
      <ScheduleForm className="absolute mt-[422px] sm:mt-[340px] md:ml-20 lg:ml-44" />
      <div className="relative mt-0 sm:mt-32 md:mt-48 w-full md:w-2/3 flex justify-center h-full">
        {/* Optionally, additional content can go here */}
      </div>
      <NavSocials />
    </div>
  );
};

export default HeroBanner;
