import React from 'react';
import clsx from 'clsx';
import Container from '../Container';
import FadeIn from '../FadeIn';

const OurClient: React.FC = () => {
  return (
    <Container>
      <FadeIn>
      <div className={clsx(
      "flex flex-col justify-center items-center",
      "bg-white p-8",
      "text-center",
      "sm:p-12 md:flex-row md:text-left"
    )}>
      <div className={clsx(
        "mb-8 md:mb-0",
        "md:flex md:flex-col md:justify-center md:mr-12"
      )}>
        <h1 className="text-4xl font-bold leading-tight text-sky-800 uppercase">How we work with our Clients.</h1>
        <button className="bg-red-500 hover:bg-sky-800 text-white font-medium uppercase py-2 px-6 rounded w-1/2  mt-6">
     Contact us <span className="text-white-500 text-md text-lg">→</span>
     </button>
      </div>
      <div className="flex flex-col justify-between w-full ">
      <p className="mt-4 text-gray-500 tracking-wider text-xl">
          Growing customer expectations. Market-shaping AI. Self-optimizing systems.
          The post-digital age shows no signs of slowing down, and the need for rapid
          business transformation has never been greater.
          We meet clients wherever they are on their paths to change—in every industry
          across the globe—and partner with them to create lasting value.
        </p>
        
       
      </div>
    </div>
      </FadeIn>
       
    </Container>
   
  );
};

export default OurClient;
