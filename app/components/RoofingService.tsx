// components/RoofingServices.tsx
import React from 'react';
import ServiceCard from "./service/ServiceCard";
import { services } from "@/constants";

// Assuming the type for a single service item
type Service = {
  _id: string;
  title:string;
  desc: string;
  // Add other properties that ServiceCard needs
  [key: string]: any; // Example placeholder, specify actual expected properties
};

const RoofingServices: React.FC = () => {
  return (
    <div className="flex gap-10 flex-wrap mx-auto md:mt-11">
      {services.map((service: Service) => (
        <ServiceCard key={service._id} {...service} />
      ))}
    </div>
  );
}

export default RoofingServices;
