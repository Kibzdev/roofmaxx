import React from 'react';
import GalleryCard from "./GalleryCard";
import { projectGallerys } from "@/constants";


interface ProjectGallery {
    _id: string;
    img: string;
    location: string;
    service: string;
    imgNo: number; // Ensure that this is a string as per your error details
  }
  

const ProjectsGallery: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 md:gap-0 px-6">
      {projectGallerys.map((projectGallery: ProjectGallery, index: number) => (
        <GalleryCard
          key={projectGallery._id}
          img={projectGallery.img}
          location={projectGallery.location}
          service={projectGallery.service}
          imgNo={projectGallery.imgNo}
        />
      ))}
    </div>
  );
}

export default ProjectsGallery;
