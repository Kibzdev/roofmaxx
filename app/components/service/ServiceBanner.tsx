import React from 'react';
import Image from "next/image";
import { bgservice } from "../../../public/assets";

// Define an interface for the component props
interface ServiceBannerProps {
  serviceId: string; // Assuming serviceId is a string, adjust the type as needed
}

const ServiceBanner: React.FC<ServiceBannerProps> = ({serviceId}) => {
  // Example of using the serviceId to find service details if needed
  // const service = servicesBannerData.find(service => service.id === serviceId);

  return (
    <div className="relative w-full h-64 sm:h-96 bg-gray-300">
      <Image src={bgservice} alt="roofing" className="object-cover w-full h-full" width={1440} height={640} />
    </div>
  );
};

export default ServiceBanner;
