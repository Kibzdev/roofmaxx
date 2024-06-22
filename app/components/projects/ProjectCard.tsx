"use client"
import React, { useState, useEffect } from 'react';
import { groq } from 'next-sanity';
import { sanityClient } from '@/sanity/lib/sanityclient';
import PageIntro from '../PageIntro';
import GalleryCard from './GalleryCard';
import Container from '../Container';
import Button from '../Button';
import Link from 'next/link';

const query = groq`*[_type == "project"] {
  projectid,
  project_name,
  "projectbannerUrl": projectbanner.asset->url,
  "slug": slug.current
}`;

const ProjectsCard = () => {
  const [projects, setProjects] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const data = await sanityClient.fetch(query);
        setProjects(data);
      } catch (err) {
        console.error("Failed to fetch projects:", err);
        setError('Failed to load projects');
      }
    };

    fetchProjects();
  }, []);

  return (
    <div>
      <PageIntro eyebrow='Our Work' title="Showcasing Excellence">
        <p>
          With precision craftsmanship, innovative techniques, and unwavering service, we are dedicated to maximizing satisfaction and ensuring peace of mind for every client we serve.
        </p>
      </PageIntro>
      <div className='mt-8'>
      <Container>
        {error ? <p>{error}</p> : <GalleryCard projects={projects} />}
        <div className='flex justify-end w-full mt-4'>
        <Link href="/projects">
          <Button className='bg-red-500 text-white px-4 py-4'> View More</Button>
        </Link>
      </div>
      </Container>
      </div>
   
      
    </div>
  );
};

export default ProjectsCard;
