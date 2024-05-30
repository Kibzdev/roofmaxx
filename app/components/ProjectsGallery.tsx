// pages/gallery.tsx
import React from 'react';
import GalleryCard from "../components/GalleryCard";
import { sanityDocument } from "next-sanity"
import { sanityFetch } from '../../sanity/lib/client';

// Define the structure of the image object
type Image = {
    asset: {
        _id: string;
        url: string;
    };
    alt?: string; // Making alt text optional
};

// Define the structure of a project
type Project = {
    _id: string;
    project_name: string;
    images: Image[];
};

// Define the props for the GalleryPage component
type ProjectsGalleryProps = {
    projects: Project[];
};
const PROJECTSGALLERY = `*[_type == "project" && defined(images)]{
  _id,
  project_name,
  images[]{
    asset->{
      _id,
      url
    },
    alt
  }
}
`



// Define the GalleryPage component using the GalleryPageProps
const ProjectsGallery: React.FC<ProjectsGalleryProps> = ({ projects= [] }) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 p-4">
            {projects.map((project) => (
                project.images.map((image, index) => (
                    <GalleryCard key={image.asset._id} img={image.asset.url} title={project.project_name} brief={image.alt} />
                ))
            ))}
        </div>
    );
}

export default ProjectsGallery;
