// app/services/page.tsx
import React from 'react';
import { Service } from '../../../types';  // Adjust this path as necessary
import ServiceDesc from '../../components/service/ServiceDesc';
import GetQuoteButton from '../../components/GetQuoteButton';
import ServiceBenefits from '../../components/service/ServiceBenefits';
import ServiceProcess from '../../components/service/ServiceProcess';
import ServiceProjects from '../../components/service/ServiceProject';
import ServiceTestimonial from '../../components/service/ServiceTestimonial';
import ServiceFaqs from '../../components/service/ServiceFaqs';
import { groq } from 'next-sanity';
import { client } from '@/sanity/lib/client';

interface ServicesPageProps {
  services: Service[];
}

const query =groq`*[_type == "service"] {
  "serviceId": identification.service_id,
  "serviceName": identification.service_name,
  "serviceDescription": identification.service_desc
}`;

export default async function ServicesPage(){
  const services = await client.fetch(query)

  return (
    <div className='flex flex-col w-full items-center '>
      <GetQuoteButton />
      <div className="flex flex-col w-4/5">
        <ServiceDesc services={services}/>
        <ServiceBenefits/>
        <ServiceProcess/>
        <ServiceProjects/>
        <ServiceTestimonial/>
        <ServiceFaqs/>
      </div>
    </div>
  );
}



