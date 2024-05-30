import React from 'react';
import Image from 'next/image';
import clsx from 'clsx';
import { delivery } from '@/public/assets';
import Container from '../Container';

const OurDelivery: React.FC = () => {
  return (

    <Container>
         <div className={clsx(
      "flex flex-col md:flex-row",
      "justify-center items-center",
      "bg-white p-6 md:p-12"
    )}>
      <div className={clsx(
        "md:flex-1",
        "flex justify-center md:justify-start mb-4 md:mb-0"
      )}>
        <Image 
          src={delivery} // Replace with your actual image path
          alt="Consultants at work"
          width={500}
          height={150}
          className="rounded-lg"
        />
      </div>
      <div className={clsx(
        "md:flex-1",
        "flex flex-col justify-center items-center md:items-start"
      )}>
        <h2 className="text-4xl font-bold text-sky-800 mb-4 uppercase">
       Consultation centric
        </h2>
        <p className="text-gray-500 mb-4 text-2xl tracking-wider">
          Our consultants help address your most challenging issues by providing strategic, financial, operational, and IT services.
        </p>
        <button className="bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4">
          Read More  <span className="px-2 text-white-500 text-xl">→</span>
        </button>
       
      </div>
    </div>
    </Container>
 
  );
};

export default OurDelivery;
