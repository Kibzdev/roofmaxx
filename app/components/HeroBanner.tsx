"use client";
import { useState } from 'react';
import { homebg } from '@/public/assets';
import NavSocials from './NavSocials';
import Image from 'next/image';
import ScheduleForm from './ScheduleForm'; // Import the new component

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
  }

  return (
    <div className="relative w-full h-screen mt-24 md:mt-0 bg-slate-500 flex flex-col-reverse md:flex-row items-center justify-center md:justify-between">
      <div className="absolute inset-0">
        <Image
          src={homebg}
          alt="Background Image"
          fill
          style={{ objectFit: 'cover' }}
          sizes="(max-width: 768px) 100vw, 50vw"
          className="z-0"
        />
        <div className="absolute inset-0 bg-black opacity-10 z-10"></div> {/* Optional overlay for better contrast */}
      </div>

      <ScheduleForm className="md:ml-44" /> {/* Add margin-left class to align right */}
      <div className="relative mt-0 md:mt-48 w-full md:w-2/3 flex justify-center h-full">
        {/* Optionally, additional content can go here */}
      </div>
      <NavSocials />
    </div>
  );
};

export default HeroBanner;
