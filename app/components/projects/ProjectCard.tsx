"use client";
import React, { useState, useEffect } from 'react';
import { groq } from 'next-sanity';
import { sanityClient } from '@/sanity/lib/sanityclient';
import PageIntro from '../PageIntro';
import GalleryCard from './GalleryCard';
import Container from '../Container';
import Button from '../Button';
import Link from 'next/link';
import { FaChevronLeft, FaChevronRight, FaTimes } from 'react-icons/fa';
import { Project } from '@/types';
import { Skeleton } from "@/components/ui/skeleton";

const query = groq`*[_type == "project"] {
  projectid,
  project_name,
  "projectbannerUrl": projectbanner.asset->url,
  "slug": slug.current
}`;

const ProjectsCard: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);
  const [currentProjectIndex, setCurrentProjectIndex] = useState<number | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const data: Project[] = await sanityClient.fetch(query);
        setProjects(data);
        setLoading(false);
      } catch (err) {
        console.error("Failed to fetch projects:", err);
        setError('Failed to load projects');
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const openModal = (index: number) => {
    setCurrentProjectIndex(index);
  };

  const closeModal = () => {
    setCurrentProjectIndex(null);
  };

  const handleNext = () => {
    if (currentProjectIndex !== null) {
      setCurrentProjectIndex((prevIndex) => (prevIndex !== null ? (prevIndex + 1) % projects.length : 0));
    }
  };

  const handlePrev = () => {
    if (currentProjectIndex !== null) {
      setCurrentProjectIndex((prevIndex) => (prevIndex !== null ? (prevIndex - 1 + projects.length) % projects.length : projects.length - 1));
    }
  };

  return (
    <div className="relative mt-4 md:mt-[40px]">
      <PageIntro eyebrow='Our Work' title="Showcasing Excellence">
        <p className="font-normal text-sm md:text-lg text-gray-600 leading-6">
          With precision craftsmanship, innovative techniques, and unwavering service, we are dedicated to maximizing satisfaction and ensuring peace of mind for every client we serve.
        </p>
      </PageIntro>
      <div className='mt-8'>
        <Container>
          {loading ? (
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-center items-center'>
              {[...Array(6)].map((_, index) => (
                <SkeletonCard key={index} />
              ))}
            </div>
          ) : error ? (
            <p>{error}</p>
          ) : (
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-center items-center'>
              {projects.map((project, index) => (
                <div key={project.projectid} onClick={() => openModal(index)} className='cursor-pointer'>
                  <GalleryCard project={project} />
                </div>
              ))}
            </div>
          )}
          <div className='flex justify-end w-full mt-4'>
            <Link href="/projects">
              <Button className='bg-red-500 text-white px-4 py-4'> View More</Button>
            </Link>
          </div>
        </Container>
      </div>

      {currentProjectIndex !== null && (
        <div className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50'>
          <div className='relative bg-white p-4 rounded-lg max-w-xl w-full mx-2'>
            <button className='absolute top-4 right-4 text-white bg-red-500 p-2 rounded-full' onClick={closeModal}>
              <FaTimes size={24} />
            </button>
            <div className='mt-12'>
              <GalleryCard project={projects[currentProjectIndex]} isModal={true} />
            </div>
            <div className='flex justify-between mt-4'>
              <button onClick={handlePrev} className='bg-red-500 text-white p-2 rounded-full'>
                <FaChevronLeft />
              </button>
              <button onClick={handleNext} className='bg-red-500 text-white p-2 rounded-full'>
                <FaChevronRight />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const SkeletonCard: React.FC = () => (
  <div className='p-4'>
    <Skeleton className='w-full h-48 rounded-md' />
    <Skeleton className='mt-2 w-3/4 h-6' />
    <Skeleton className='mt-2 w-1/2 h-6' />
  </div>
);

export default ProjectsCard;
