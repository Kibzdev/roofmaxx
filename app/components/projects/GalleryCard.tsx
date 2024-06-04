import Image from "next/image";
import React from 'react';
import { Project } from "../../../types"; // Ensure the path is correct and types are defined

interface GalleryCardProps {
  projects: Project[];
}

const GalleryCard = ({ projects }: GalleryCardProps) => {
  return (
    <div className="flex sm:flex-col md:flex-row gap-4 w-full h-full items-center justify-center">
      {projects.map((project, index) => (
        project ? (
          <div className="flex relative w-[340px] h-[450px]" key={index}>
            <Image src={project.projectbannerUrl || '/default.jpg'} alt={project.project_name} className="w-full object-cover brightness-60" width={240} height={340} />
            <h3 className="absolute bottom-2 right-0 left-0 text-white text-lg text-center font-bold hover:underline hover:underline-offset-8 hover:bg-sky-800 hover:text-white hover:bg-opacity-80">
              {project.project_name}
            </h3>
          </div>
        ) : (
          <p key={index}>No service available</p>
        )
      ))}
    </div>
  );
}

export default GalleryCard;