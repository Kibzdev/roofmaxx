// app/services/page.tsx
import React from 'react';
import ServiceDesc from '../../components/service/ServiceDesc';
import GetQuoteButton from '../../components/GetQuoteButton';
import ServiceBenefits from '../../components/service/ServiceBenefits';
import ServiceProcess from '../../components/service/ServiceProcess';
import ServiceTestimonial from '../../components/service/ServiceTestimonial';
import ServiceFaqs from '../../components/service/ServiceFaqs';
import { groq } from 'next-sanity';
import { sanityClient } from '@/sanity/lib/sanityclient';
import ServiceProjects from '@/app/components/service/ServiceProject';

const query = groq`
  *[_type == "service"] {
    "serviceId": identification.service_id,
    "serviceName": identification.service_name,
    "serviceDescription": identification.service_desc
  }
`;

export default async function ServicesPage() {
  const services = await sanityClient.fetch(query);

  return (
    <div className='flex flex-col w-full items-center'>
      <GetQuoteButton />
      <div className="flex flex-col w-4/5">
        <ServiceDesc services={services} />
        <ServiceBenefits />
        <ServiceProcess />
        <ServiceProjects />
        <ServiceTestimonial />
        <ServiceFaqs />
      </div>
    </div>
  );
}
