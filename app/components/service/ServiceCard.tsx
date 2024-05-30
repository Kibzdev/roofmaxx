// components/ServiceCard.tsx
import React from 'react';
import { services } from "@/constants"
import Container from '../Container';

// Define the types for the props
type ServiceCardProps = {
  title: string;
  desc: string;
};

const ServiceCard: React.FC<ServiceCardProps> = ({ title, desc }) => {
  return (
    <Container>
      <div className="flex-col items-center gap-4 mx-auto  max-w-sm bg-white border-t-8 border-t-sky-800 mt-8 p-6">
      <h3 className="text-center text-red-500 font-semibold">{title}</h3>
      <p className="font-light text-center">{desc}</p>
      <a href="#" className="inline-flex font-medium items-center text-red-500 hover:underline mt-4">
        Learn More
        <svg className="w-3 h-3 ms-2.5 rtl:rotate-[270deg]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"/>
        </svg>
      </a>
    </div>
    </Container>
    
  );
}

export default ServiceCard;
