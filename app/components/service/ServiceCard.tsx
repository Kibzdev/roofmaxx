"use client";

import React from 'react';
import Link from 'next/link';

interface ServiceIdentification {
  service_id: string;
  service_name: string;
  service_desc: string;
}

interface Service {
  identification: ServiceIdentification;
  slug: { current: string } | null;
}

interface ServiceCardProps {
  services?: Service[];
}

const ServiceCard: React.FC<ServiceCardProps> = ({ services = [] }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-4 w-full h-full">
      
      {services.map((service, index) => (
        <Link
          key={index}
          href={service.slug?.current ? `/services/${service.slug.current}` : '#'}
          className="relative block w-full h-full cursor-pointer"
        >
          <div className="relative w-full h-full p-4 bg-white border border-gray-200 shadow-sm hover:shadow-md">
            <h3 className="text-center text-red-500 font-semibold mb-2 uppercase">
              {service.identification.service_name}
            </h3>
            <p className=" text-gray-700 font-medium leading-6 text-center mb-4 tracking-wide px-4 relative border-l-half">
              {service.identification.service_desc}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ServiceCard;
