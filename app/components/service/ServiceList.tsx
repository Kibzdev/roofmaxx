import React from 'react';
import ServiceCard from './ServiceCard';
import { servicesData } from "@/constants";

interface ServiceItem {
  _id: string;
  title: string;
  services: string[]; // Assuming 'services' is an array of strings
}

const ServiceList: React.FC = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {servicesData.map((service: ServiceItem) => (
          <ServiceCard key={service._id} title={service.title} serviceItem={service.services.join(', ')} desc="Some default description"/>
        ))}
      </div>
    </div>
  );
};

export default ServiceList;
