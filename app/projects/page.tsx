import React from 'react';
import PageIntro from '../components/PageIntro';
import { groq } from 'next-sanity';
import { client } from '@/sanity/lib/client';
import GalleryCard from '../components/projects/GalleryCard';

const query = groq`*[_type == "project"] {
  project_name,
  "projectbannerUrl": projectbanner.asset->url
}`;

export default async function Projects() {
  try {
    const projects = await client.fetch(query);
    console.log(projects);
    return (
      <div>
        <PageIntro eyebrow='Our Work' title="Showcasing Excellence">
          <p>
            With precision craftsmanship, innovative techniques, and unwavering service, we are dedicated to maximizing satisfaction and ensuring peace of mind for every client we serve.
          </p>
        </PageIntro>
        <GalleryCard projects={projects}/>
      </div>
    );
  } catch (error) {
    console.error("Failed to fetch projects:", error);
    return <p>Error loading projects.</p>; // Display an error message or fallback component
  }
}