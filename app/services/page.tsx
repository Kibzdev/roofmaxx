import React from 'react'; // Import React, standard practice in TSX files
import { groq } from "next-sanity";
import { client } from '@/sanity/lib/client';
import ServiceContent from '../components/service/ServiceContent';


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
    <div>
   <ServiceContent services={services} />
    </div>
  );
}


