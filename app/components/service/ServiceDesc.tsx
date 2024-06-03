// pages/services.tsx
import React from 'react';
import { Service } from '../../../types';

interface ServiceDescProps {
  services: Service[];
}
console

const ServiceDesc = ({ services }: ServiceDescProps) => {
  console.log(services);
  return (
    <div>
      {services.map(service => (
        <article key={service.serviceId}>
          <p>{service.serviceName || "No Service Name Available"}</p>
          <h2>{service.serviceDescription || "No Description Available"}</h2>
        </article>
      ))}
    </div>
  );
};


export default ServiceDesc;
