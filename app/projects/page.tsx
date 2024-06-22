"use client";

import React, { useState, useEffect } from 'react';
import PageIntro from '../components/PageIntro';
import { groq } from 'next-sanity';
import { sanityClient } from '@/sanity/lib/sanityclient';
import GalleryCard from '../components/projects/GalleryCard';
import Container from '../components/Container';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';

const query = groq`*[_type == "project"] {
  projectid,
  project_name,
  "projectbannerUrl": projectbanner.asset->url,
  "slug": slug.current
}`;

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [error, setError] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

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

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const totalPages = Math.ceil(projects.length / itemsPerPage);
  const currentProjects = projects.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  return (
    <div>
      <PageIntro eyebrow='Our Work' title="Showcasing Excellence">
        <p>
          With precision craftsmanship, innovative techniques, and unwavering service, we are dedicated to maximizing satisfaction and ensuring peace of mind for every client we serve.
        </p>
      </PageIntro>
      <div className='mt-4 py-4'>
        <Container>
          {error ? <p>{error}</p> : <GalleryCard projects={currentProjects} />}
        </Container>
        <div className='mt-4'>
          <Pagination>
            <PaginationContent>
              <PaginationPrevious onClick={() => handlePageChange(currentPage - 1)} />
              {Array.from({ length: totalPages }, (_, i) => (
                <PaginationLink
                  key={i}
                  href={`#`} // You might want to replace `#` with the actual URL if needed
                  onClick={() => handlePageChange(i + 1)}
                >
                  {i + 1}
                </PaginationLink>
              ))}
              <PaginationNext onClick={() => handlePageChange(currentPage + 1)} />
            </PaginationContent>
          </Pagination>
        </div>
      </div>
    </div>
  );
};

export default Projects;
