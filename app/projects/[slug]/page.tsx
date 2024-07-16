import React from 'react';
import { groq } from 'next-sanity';
import { sanityClient } from '@/sanity/lib/sanityclient';
import { Project } from '@/types';
import PageIntro from '@/app/components/PageIntro';
import Image from 'next/image';
import Container from '@/app/components/Container';
import { PortableText } from '@portabletext/react';

interface ProjectDataProps {
  project: Project;
}

const ProjectData: React.FC<ProjectDataProps> = ({ project }) => {
  return (
    <div className="flex w-full flex-col container mx-auto px-4 py-8 items-center justify-center">
      <div className='flex w-full bg-gray-50 shadow-sm justify-center'>
        <div className="w-full h-auto my-8 rounded-lg shadow-lg max-w-5xl items-center justify-center">
          <Image
            src={project.projectbannerUrl}
            alt={project.project_name}
            width={1920}
            height={1080}
            layout="responsive"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
      </div>
      <div className='flex items-center justify-center w-full'> 
        <h1 className='md:text-2xl text-lg font-bold text-center text-sky-800 uppercase'>{project.project_name}</h1>
      </div>
      <div className='flex flex-col w-full max-w-4xl justify-center items-center'>
        <div className="text-gray-700 w-3/2 leading-relaxed text-left md:text-center items-center justify-center tracking-widest text-lg font-medium p-8">
          <PortableText value={project.description} />
        </div>
      </div>
      <div className='flex flex-col w-full max-w-4xl justify-center items-center'>
        <h2 className="text-2xl font-bold text-center text-sky-800 uppercase mt-8">Outcome</h2>
        <p className="text-gray-700 w-3/2 leading-relaxed text-left md:text-center md:items-center justify-center tracking-widest text-lg font-medium p-8">{project.outcome}</p>
      </div>   
      <h2 className="text-2xl font-bold mt-8">Project Images</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 my-8">
        {project.images && project.images.map((image) => (
          <Image
            key={image.url}
            src={image.url}
            alt={project.project_name}
            width={600}
            height={400}
            layout="responsive"
            objectFit="cover"
            className="rounded-lg shadow-lg"
          />
        ))}
      </div>
    </div>
  );
};

async function getProject(slug: string): Promise<Project | null> {
  const query = groq`
    *[_type == "project" && slug.current == $slug][0]{
      projectid,
      project_name,
      "projectbannerUrl": projectbanner.asset->url,
      client->{
        name,
        category,
        "clientImage": photo.asset->url,
        testimonial
      },
      service_used->{
        name,
        description
      },
      start_date,
      end_date,
      status,
      budget,
      description,
      outcome,
      images[]{
        "url": asset->url
      },
      documents[]{
        "url": asset->url
      },
      client_attachments[]{
        "url": asset->url
      },
      expert->{
        firstname,
        lastname,
        expertise,
        "expertImage": image.asset->url
      }
    }
  `;
  const project = await sanityClient.fetch(query, { slug });
  return project;
}

export async function generateStaticParams() {
  const query = groq`*[_type == "project"]{"slug": slug.current}`;
  const projects = await sanityClient.fetch(query);
  return projects.map((project: { slug: string }) => ({
    slug: String(project.slug), // Ensuring slug is a string
  }));
}

export default async function Page({ params }: { params: { slug: string } }) {
  const project = await getProject(params.slug);
  if (!project) {
    return <div>Project not found</div>;
  }
  return <ProjectData project={project} />;
}
