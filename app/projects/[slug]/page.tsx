import React from 'react';
import { groq } from 'next-sanity';
import { sanityClient } from '@/sanity/lib/sanityclient';
import { Project } from '@/types';
import PageIntro from '@/app/components/PageIntro';
import Image from 'next/image';

interface ProjectDataProps {
  project: Project;
}

const ProjectData: React.FC<ProjectDataProps> = ({ project }) => {
  return (
    <div className="container mx-auto px-4 py-8">
      <PageIntro eyebrow="Project Details" title={project.project_name}>
        <p className="text-gray-700">{project.description}</p>
      </PageIntro>
      <div className="w-full h-auto my-8 rounded-lg shadow-lg">
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

      <h2 className="text-2xl font-bold mt-8">Client Information</h2>
      <p className="text-gray-700">{project.client.name}</p>

      <h2 className="text-2xl font-bold mt-8">Service Used</h2>
      <p className="text-gray-700">{project.service_used.name}</p>

      <h2 className="text-2xl font-bold mt-8">Project Timeline</h2>
      <p className="text-gray-700">Start Date: {new Date(project.start_date).toLocaleDateString()}</p>
      <p className="text-gray-700">End Date: {new Date(project.end_date).toLocaleDateString()}</p>

      <h2 className="text-2xl font-bold mt-8">Status</h2>
      <p className="text-gray-700">{project.status}</p>

      <h2 className="text-2xl font-bold mt-8">Budget</h2>
      <p className="text-gray-700">${project.budget}</p>

      <h2 className="text-2xl font-bold mt-8">Outcome</h2>
      <p className="text-gray-700">{project.outcome}</p>

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

      <h2 className="text-2xl font-bold mt-8">Documents</h2>
      <ul className="list-disc list-inside my-4">
        {project.documents && project.documents.map((doc) => (
          <li key={doc.url}>
            <a href={doc.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Download Document</a>
          </li>
        ))}
      </ul>

      <h2 className="text-2xl font-bold mt-8">Client Attachments</h2>
      <ul className="list-disc list-inside my-4">
        {project.client_attachments && project.client_attachments.map((att) => (
          <li key={att.url}>
            <a href={att.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Download Attachment</a>
          </li>
        ))}
      </ul>
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
    slug: project.slug,
  }));
}

export default async function Page({ params }: { params: { slug: string } }) {
  const project = await getProject(params.slug);
  if (!project) {
    return <div>Project not found</div>;
  }
  return <ProjectData project={project} />;
}
