"use client"
// app/services/[slug]/page.tsx
import { sanityClient } from '@/sanity/lib/sanityclient';
import React, { useState,useEffect} from 'react';
import ServiceCard from '../components/service/ServiceCard';
import { groq } from 'next-sanity';
import PageIntro from '../components/PageIntro';
import Container from '../components/Container';
import ServiceMainCat from '../components/service/ServiceMainCat';
import SectionIntro from '../components/SectionIntro';
import ServicesHeading from '../components/service/ServiceHeading';
import OurService from '../components/service/OurService';


const query = groq`*[_type == "service"]{
  identification {
    service_id,
    service_name,
    service_desc
  },
    slug
}`;

const Services = () => {
  const [services, setServices] =useState([])
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const data = await sanityClient.fetch(query);
        setServices(data);
      } catch (err) {
        console.error("Failed to fetch services:", err);
        setError('Failed to load services');
      }
    };

    fetchServices();
  }, []);

  return (
   
    <div>
      <PageIntro eyebrow='Our Services' title="What we Do" centered/>
    
      <ServiceMainCat/>
      <ServicesHeading/>
   
      <Container>
        {error ? <p>{error}</p> :<ServiceCard services={services} />}
      </Container>
      <OurService/>
     
    </div>
  );
}
 

export default Services;
