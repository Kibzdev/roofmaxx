"use client";

import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import { Project } from '@/types';

interface GalleryCardProps {
  projects: Project[];
}

const GalleryCard: React.FC<GalleryCardProps> = ({ projects }) => {
  return (
    <div   className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-4 w-full h-full">
      {projects.map((project, index) => (
        <Link
          key={index}
          href={`/projects/${project.slug}`}
          className="relative block w-full h-full cursor-pointer"
        >
          <div className="relative w-full h-full">
            <Image
              src={project.projectbannerUrl || '/default.jpg'}
              alt={project.project_name}
              className="w-full h-[340px] object-cover brightness-60"
              width={340}
              height={340}
            />
            <h3 className="absolute bottom-2 right-0 left-0 text-white text-lg text-center font-bold hover:underline hover:underline-offset-8 hover:bg-sky-800 hover:text-white hover:bg-opacity-80">
              {project.project_name}
            </h3>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default GalleryCard;
