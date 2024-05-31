// components/ServiceCard.tsx

import React from 'react';

type ServiceCardProps = {
  title: string;
  desc: string;
  serviceItem: string;  // Add this if it is meant to be part of the props
};

const ServiceCard: React.FC<ServiceCardProps> = ({ title, desc, serviceItem }) => {
  return (
    <div className="flex-col items-center gap-4 mx-auto max-w-sm bg-white border-t-8 border-t-sky-800 mt-8 p-6">
      <h3 className="text-center text-red-500 font-semibold">{title}</h3>
      <p className="font-light text-center">{desc}</p>
      {/* Assuming serviceItem is used somewhere here, for example: */}
      <p>{serviceItem}</p>
      <a href="#" className="inline-flex font-medium items-center text-red-500 hover:underline mt-4">
        Learn More
      </a>
    </div>
  );
}

export default ServiceCard;
