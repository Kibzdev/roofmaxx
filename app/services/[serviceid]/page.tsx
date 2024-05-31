import React from 'react'; // Import React, standard practice in TSX files
import { groq } from "next-sanity";
import { client } from '@/sanity/lib/client';

import ServiceDesc from '../../components/service/ServiceDesc';
import GetQuoteButton from '../../components/GetQuoteButton';
import ServiceBenefits from '../../components/service/ServiceBenefits';
import ServiceProcess from '../../components/service/ServiceProcess';
import ServiceProjects from '../../components/service/ServiceProject';
import ServiceTestimonial from '../../components/service/ServiceTestimonial';
import ServiceFaqs from '../../components/service/ServiceFaqs';




// GROQ query to fetch all service documents
// GROQ query to fetch all service documents
const query =  groq`
*[_type == "service"]{
  "serviceId": identification.service_id,
  "serviceName": identification.service_name,
  "description": identification.description,
  "serviceTypes": service_types[]{
    type_name,
    type_banner {
      asset->{
        _id,
        url
      },
      alt
    },
    desc,
    slug
  },
  "slug": slug.current,
  "serviceBanner": service_banner.asset->{
    _id,
    url
  },
  "customerRequirements": customerRequirements{
    pre_service_requirements,
    post_service_care
  },
  "faqs": faqs[]{
    question,
    answer
  }
}
`;
 export default async function ServicesList () {

  const services = await  client.fetch(query)
  console.log(services)
  return (
  
<div className='flex flex-col w-full items-center '>
  
<GetQuoteButton />
   <div className="flex flex-col w-4/5">
      <ServiceDesc/>
      <ServiceBenefits/>
      <ServiceProcess/>
      <ServiceProjects/>
      <ServiceTestimonial/>
      <ServiceFaqs/>
   </div>


</div>
  
    
  );
}


