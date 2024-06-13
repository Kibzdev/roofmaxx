"use client"
import React, { useState, useEffect } from 'react';

import { groq } from 'next-sanity';
import { sanityClient } from '@/sanity/lib/sanityclient';

import PageIntro from '../PageIntro';
import GalleryCard from './GalleryCard';
import Container from '../Container';

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
      <Container>
      {error ? <p>{error}</p> : <GalleryCard projects={projects}/>}
      </Container>
     
      
      
     
    </div>
  );
};

export default ProjectsCard;
