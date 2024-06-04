import React from 'react';
import { Service } from '../../../types';
import clsx from 'clsx';

interface ServiceDescProps {
  services: Service[];
}

const ServiceDesc = ({ services }: ServiceDescProps) => {
  const service = services[0]; // Get the first service
  return (
    <div className={clsx('flexflex-col md:flex-row p-4 gap-4 ')}>
      {service ? (
        <div className={clsx('md:w-full')}>
          <article key={service.serviceId}>
          <h1  className={clsx('text-xl text-center  uppercase  font-bold mb-3')}>{service.serviceName || "No Service Name Available"}</h1>
          <p className="font-light text-center tracking-wide">{service.serviceDescription || "No Description Available"}</p>
        </article>
        </div>
        
      ) : (
        <p>No service available</p> // Handle the case where no services are available
      )}
    </div>
  );
};

export default ServiceDesc;
