import { groq } from 'next-sanity';
import { sanityClient } from './sanityclient';
import {
  Service,
  ServiceLink,
  Project,
  Niche,
  GalleryCardProject,
  ProjectClient,
  TeamMember
} from '../../types'; // Adjust the import path as necessary


export const fetchTeamMembers = async (): Promise<TeamMember[]> => {
  const query = groq`
    *[_type == "team"]{
      _id,
      workid,
      "photo": image.asset->url,
      firstname,
      lastname,
      expertise,
      description,
      "slug": slug.current,
      "projects": projects[]->{
        _id,
        title,
        "bannerUrl": banner.asset->url
      }
    }
  `;
  const data: TeamMember[] = await sanityClient.fetch(query);
  return data;
};

// Fetch all service links for navigation
export const fetchServiceLinks = async (): Promise<ServiceLink[]> => {
  const query = groq`
    *[_type == "service"]{
      "href": slug.current,
      "label": identification.service_name,
      "service_id": identification.service_id
    }
  `;
  const data = await sanityClient.fetch<ServiceLink[]>(query);
  return data;
};

// Fetch all services
export const fetchServiceData = async (): Promise<Service[]> => {
  const query = groq`
    *[_type == "service"] {
      identification {
        service_id,
        service_name,
        service_desc
      },
      slug {
        current
      },
      service_banner {
        asset {
          url
        }
      }
    }
  `;
  const data: Service[] = await sanityClient.fetch(query);
  return data;
};

// Fetch all projects
export const fetchProjects = async (): Promise<Project[]> => {
  const query = groq`
    *[_type == "project"]{
      projectid,
      project_name,
      "projectbannerUrl": projectbanner.asset->url,
      "slug": slug.current,
      client->{
        name,
        "category": client->category,
        "phone": client->phone,
        "location": client->location->name,
        "photoUrl": client->photo.asset->url,
        "testimonial": client->testimonial
      },
      "serviceUsed": service_used->name,
      start_date,
      end_date,
      status,
      budget,
      description,
      outcome,
      "images": images[].asset->url,
      "documents": documents[].asset->url,
      "clientAttachments": client_attachments[].asset->url
    }
  `;
  const data: Project[] = await sanityClient.fetch(query);
  return data;
};

// Fetch project gallery card data
export async function fetchGalleryCard(): Promise<GalleryCardProject[]> {
  const query = groq`
    *[_type == "project"]{
      projectid,
      project_name,
      "projectbannerUrl": projectbanner.asset->url,
      slug
    }
  `;
  try {
    const projects: GalleryCardProject[] = await sanityClient.fetch(query);
    return projects;
  } catch (error) {
    console.error("Failed to fetch gallery card data:", error);
    throw new Error('Failed to fetch gallery card data');
  }
}

// Fetch project details by slug
export const fetchProjectBySlug = async (slug: string): Promise<Project> => {
  const query = groq`
    *[_type == "project" && slug.current == $slug][0] {
      projectid,
      project_name,
      "projectbannerUrl": projectbanner.asset->url,
      client,
      service_used,
      start_date,
      end_date,
      status,
      budget,
      description,
      outcome,
      images[]{_key, asset->{url}},
      documents[]{_key, asset->{url}},
      client_attachments[]{_key, asset->{url}}
    }
  `;
  return await sanityClient.fetch(query, { slug });
};

// Fetch service details by slug
export async function fetchServiceBySlug(slug: string): Promise<Service> {
  const query = groq`
  *[_type == "service" && slug.current == $slug][0]{
    identification {
      service_name,
      service_desc[]{
        ...,
        children[]{
          ...,
          text
        }
      }
    },
    service_banner{
      asset->{
        url
      }
    },
    service_types[]->{
      _id,
      title,
      description,
      niche_name,  // Add this line
      niche_banner{
        asset->{
          url
        }
      },
      slug
    },
    faqs[] {
      _key,
      question,
      answer
    }
  }
`;
  const service: Service = await sanityClient.fetch(query, { slug });
  return service;
}

export const fetchAllServiceSlugs = async (): Promise<string[]> => {
  const query = groq`
    *[_type == "service"]{
      "slug": slug.current
    }
  `;
  const data = await sanityClient.fetch<{ slug: string }[]>(query);
  return data.map(service => service.slug);
};

// Fetch all niches
export const fetchNicheData = async (): Promise<Niche[]> => {
  const query = groq`
    *[_type == "niche"]{
      _id,
      category->{
        _id,
        title
      },
      niche_name,
      niche_banner,
      niche_desc,
      slug,
      niche_benefits,
      faqs[]{
        question,
        answer
      }
    }
  `;
  const niches: Niche[] = await sanityClient.fetch(query);
  return niches;
};

// Fetch niche details by slug
export const fetchNicheBySlug = async (slug: string): Promise<Niche | null> => {
  const query = groq`
    *[_type == "nicheType" && slug.current == $slug][0] {
      _id,
      category->{
        _id,
        title
      },
      niche_name,
      niche_banner{
        asset->{
          _id,
          url
        }
      },
      niche_desc,
      slug,
      niche_benefits,
      faqs[]{
        _key,
        question,
        answer
      }
    }
  `;
  const niche: Niche = await sanityClient.fetch(query, { slug });
  return niche;
};

export const fetchAllNiches = async (): Promise<Niche[]> => {
  const query = groq`
    *[_type == "niche"] {
      _id,
      niche_name,
      niche_banner {
        asset->{
          url
        }
      },
      slug,
      niche_desc,
      niche_benefits,
      faqs[] {
        question,
        answer
      }
    }
  `;
  const data: Niche[] = await sanityClient.fetch(query);
  return data;
};
