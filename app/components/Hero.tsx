// components/Hero.tsx
import React from 'react';
import Container from "./Container";

import { BsPlayCircle } from "react-icons/bs";
import Button from "./Button";

import Title from './Title';
import HeroCta from './HeroCta';
import BackgroundDesign from './BackgroundDesign';

const Hero: React.FC = () => {
  return (
    <section id="Home" className="overflow-hidden py-20 sm:py-32 lg:pb-32 xl:pb-3">
      <Container>
        <div className="lg:grid lg:grid-cols-12 lg:gap-x-8 lg:gap-y-20">
          {/* Left Side */}
          <div className="relative z-10 mx-auto max-w-2xl lg:col-span-7 lg:max-w-none lg:pt-6 xl:col-span-6">
            <Title title="BRING YOUR ROOF BACK TO LIFE" className="lg:text-8xl text-4xl font-extrabold"/>
            <p className="mt-6 text-lg text-red-500">Get premium roofing services without breaking the bank, thanks to our transparent and fair pricing.</p>

            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-4">
              <Button variant="outline" className="flex px-12 py-4 justify-center mx-auto text-sky-800"> 
                <BsPlayCircle className="text-xl" />
                <span className="ml-2.5">Learn More</span>
              </Button>
            </div>
          </div>
          {/* Right Side */}
          <div className="relative flex items-center mt-10 sm:mt-20 lg:col-span-5 lg:row-span-2 lg:mt-0 xl:col-span-6">
            <HeroCta />
            <BackgroundDesign className="absolute left-1/2 top-4 h-[1026px] w-[1026px] -translate-x-1/3 stroke-gray-300/70 [mask-image:linear-gradient(to_bottom, white_20%, transparent_75%)] sm:top-16 sm-translate-x-1/2 lg:top-16 lg:ml-12 xl:top-14 xl:ml-0" />
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Hero;
