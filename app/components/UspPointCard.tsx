// components/UspPointsCard.tsx
import Image from "next/image";
import React from 'react';

// Define the type for the props
type UspPointsCardProps = {
    icon: string;  // Assuming icon is a URL path to an image
    title: string;
    brief: string;
    badge?: string;  // Optional prop, if 'badge' is not always present
};

const UspPointsCard: React.FC<UspPointsCardProps> = ({ icon, title, brief, badge }) => {
  return (
    <div className="mx-auto w-full h-full md:w-1/3 md:h-[340px] flex flex-col gap-4 px-8 py-6 mt-6 h-120 items-center justify-center max-w-sm bg-gradient-to-t from-red-500 to-red-600 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mb-4">
      <Image className="rounded-full" src={icon} alt={title} width={64} height={64} />
      <h5 className="mb-2 text-4xl font-bold tracking-tight text-white dark:text-white text-center">{title}</h5>
      <p className="mb-3 font-light text-white dark:text-gray-400">{brief}</p>
    </div>
  );
}

export default UspPointsCard;
