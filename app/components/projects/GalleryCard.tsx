"use client";

import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import { Project } from '@/types';

interface GalleryCardProps {
  projects?: Project[];
  project?: Project;
  isModal?: boolean;
}

const GalleryCard: React.FC<GalleryCardProps> = ({ projects, project }) => {
  if (project) {
    return (
      <div className="flex flex-col relative md:block justify-center items-center w-full h-full cursor-pointer">
        <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[375px] group">
          <Image
            src={project.projectbannerUrl || '/default.jpg'}
            alt={project.project_name}
            className="w-full h-full object-cover brightness-60 shadow-lg transition-transform duration-300 group-hover:brightness-100"
            layout="fill"
            objectFit="cover"
          />
          <div className="absolute inset-0 bg-sky-800 bg-opacity-40 group-hover:bg-opacity-0 transition-opacity duration-300"></div>
          <h3 className="absolute bottom-2 right-0 left-0 text-white text-lg text-center font-bold group-hover:underline group-hover:underline-offset-8 group-hover:bg-sky-800 group-hover:text-white group-hover:bg-opacity-80">
            {project.project_name}
          </h3>
        </div>
      </div>
    );
  }

  const displayedProjects = projects ? projects.slice(0, 6) : [];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full h-full justify-center items-center">
      {displayedProjects.map((project, index) => (
        <Link
          key={index}
          href={`/projects/${project.slug}`}
          className="relative block w-full h-full cursor-pointer"
        >
          <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[375px] group">
            <Image
              src={project.projectbannerUrl || '/default.jpg'}
              alt={project.project_name}
              className="w-full h-full object-cover brightness-60 shadow-lg transition-transform duration-300 group-hover:brightness-100"
              layout="fill"
              objectFit="cover"
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
