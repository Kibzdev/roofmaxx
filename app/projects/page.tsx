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
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';
import { FaChevronLeft, FaChevronRight, FaTimes } from 'react-icons/fa';
import { Project } from '@/types';

const query = groq`*[_type == "project"] {
  projectid,
  project_name,
  "projectbannerUrl": projectbanner.asset->url,
  "slug": slug.current
}`;

const Projects: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [error, setError] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [currentProjectIndex, setCurrentProjectIndex] = useState<number | null>(null);
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

  const openModal = (index: number) => {
    setCurrentProjectIndex(index);
  };

  const closeModal = () => {
    setCurrentProjectIndex(null);
  };

  const handleNext = () => {
    if (currentProjectIndex !== null) {
      setCurrentProjectIndex((prevIndex) => prevIndex !== null ? (prevIndex + 1) % projects.length : 0);
    }
  };

  const handlePrev = () => {
    if (currentProjectIndex !== null) {
      setCurrentProjectIndex((prevIndex) => prevIndex !== null ? (prevIndex - 1 + projects.length) % projects.length : projects.length - 1);
    }
  };

  return (
    <div>
      <PageIntro eyebrow='Our Work' title="Showcasing Excellence">
        <p>
          With precision craftsmanship, innovative techniques, and unwavering service, we are dedicated to maximizing satisfaction and ensuring peace of mind for every client we serve.
        </p>
      </PageIntro>
      <div className='mt-4 py-4'>
        <Container>
          {error ? <p>{error}</p> : (
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
              {currentProjects.map((project, index) => (
                <div key={project.projectid} onClick={() => openModal(index)} className='cursor-pointer'>
                  <GalleryCard project={project} />
                </div>
              ))}
            </div>
          )}
        </Container>
        <div className='mt-4'>
          <Pagination>
            <PaginationContent>
              <PaginationPrevious onClick={() => handlePageChange(currentPage - 1)} className='text-sky-800 p-2 rounded-full'>
                <FaChevronLeft className='text-red-500' />
              </PaginationPrevious>
              {Array.from({ length: totalPages }, (_, i) => (
                <PaginationLink
                  key={i}
                  href={`#`} // You might want to replace `#` with the actual URL if needed
                  onClick={() => handlePageChange(i + 1)}
                >
                  {i + 1}
                </PaginationLink>
              ))}
              <PaginationNext onClick={() => handlePageChange(currentPage + 1)} className='bg-sky-800 text-white px-4 py-2 hover:text-red-500 rounded-full'>
                <FaChevronRight className='text-red-500' />
              </PaginationNext>
            </PaginationContent>
          </Pagination>
        </div>
      </div>

      {currentProjectIndex !== null && (
        <div className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50'>
          <div className='relative bg-white p-4 rounded-lg max-w-xl w-full'>
            <button className='absolute top-4 right-4 text-white bg-sky-800 p-2 rounded-full' onClick={closeModal}>
              <FaTimes size={24} />
            </button>
            <div className='mt-12'> {/* Add margin to create space between the image and the close button */}
              <GalleryCard project={projects[currentProjectIndex]} isModal={true} />
            </div>
            <div className='flex justify-between mt-4'>
              <button
                onClick={handlePrev}
                className='bg-red-500 text-white p-2 rounded-full'
              >
                <FaChevronLeft />
              </button>
              <button
                onClick={handleNext}
                className='bg-red-500 text-white p-2 rounded-full'
              >
                <FaChevronRight />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
