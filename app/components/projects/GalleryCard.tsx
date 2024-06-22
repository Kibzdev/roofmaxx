"use client";

import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import { Project } from '@/types';

interface GalleryCardProps {
  projects: Project[];
}

const GalleryCard: React.FC<GalleryCardProps> = ({ projects }) => {
  const displayedProjects = projects.slice(0, 6);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-4 w-full h-full">
      {displayedProjects.map((project, index) => (
        <Link
          key={index}
          href={`/projects/${project.slug}`}
          className="relative block w-full h-full cursor-pointer"
        >
          <div className="relative w-full h-full group">
            <Image
              src={project.projectbannerUrl || '/default.jpg'}
              alt={project.project_name}
              className="w-full h-[340px] object-cover brightness-60 shadow-lg transition-transform duration-300 group-hover:brightness-100"
              width={340}
              height={340}
            />
            <div className="absolute inset-0 bg-sky-800 bg-opacity-40 group-hover:bg-opacity-0 transition-opacity duration-300"></div>
            <h3 className="absolute bottom-2 right-0 left-0 text-white text-lg text-center font-bold group-hover:underline group-hover:underline-offset-8 group-hover:bg-sky-800 group-hover:text-white group-hover:bg-opacity-80">
              {project.project_name}
            </h3>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default GalleryCard;
