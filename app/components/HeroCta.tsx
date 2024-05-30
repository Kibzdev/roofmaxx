// components/HeroCta.tsx
import React from 'react';
import Button from "./Button";
import Image from "next/image";
import { rocket } from "../../public/assets";

const HeroCta: React.FC = () => {
  return (
    <div className="flex mx-auto flex-col lg:gap-8 items-center justify-center max-w-sm p-12 lg:py-12 
    bg-red-500 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <Image className="rounded-t-lg" src={rocket} alt="rocket" width={64} height={64} />
      </a>
      <a href="#">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">Innovative Technology</h5>
      </a>
      <a className="mb-3 font-normal text-gray-50 dark:text-gray-400">
        From initial consultation to project completion, we prioritize your satisfaction and work to exceed your expectations.
      </a>
      <Button className="flex items-center w-full text-red-500 py-4 px-4">
        Get a Quote
      </Button>
    </div>
  );
}

export default HeroCta;
