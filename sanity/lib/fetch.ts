import { SanityClient, groq, type ClientPerspective, type QueryParams } from "next-sanity";
import { draftMode } from "next/headers";
import { sanityClient } from "./sanityclient";
import { token } from "./token";
import { Service, Project, Niche } from '../../types';

// Interface for Project Banner
interface ProjectBanner {
  _type: 'image';
  asset: {
    _ref: string;
  };
}

// Interface for Gallery Card Project
interface GalleryCardProject {
  projectid: string;
  project_name: string;
  projectbannerUrl: string; // This will be derived from the projectbanner asset
}

// Function to fetch data with built-in support for handling Draft Mode and perspectives
export async function sanityFetch<QueryResponse>({
  query,
  params = {},
  perspective = draftMode().isEnabled ? "previewDrafts" : "published",
  stega = perspective === "previewDrafts" ||
    process.env.VERCEL_ENV === "preview",
}: {
  query: string;
  params?: QueryParams;
  perspective?: Omit<ClientPerspective, "raw">;
  stega?: boolean;
}) {
  if (perspective === "previewDrafts") {
    return sanityClient.fetch<QueryResponse>(query, params, {
      stega,
      perspective: "previewDrafts",
      token,
      useCdn: false,
      next: { revalidate: 0 },
    });
  }
  return sanityClient.fetch<QueryResponse>(query, params, {
    stega,
    perspective: "published",
    useCdn: true,
    next: { revalidate: 60 },
  });
}

/* Services Fetch */

// Fetch all services
export const fetchServiceData = async (): Promise<Service[]> => {
  const query = groq`
    *[_type == "service"] {
      "serviceName": identification.service_name,
      "serviceDescription": identification.service_desc
    }
  `;
  const data: Service[] = await sanityClient.fetch(query);
  return data;
}

// Fetch navigation data for services
export const fetchNavigationData = async () => {
  const query = groq`
    *[_type == "service"]{
      "id": _id,
      "label": identification.service_name
    }
  `;
  const data = await sanityClient.fetch(query);
  return data;
}

/* Projects Fetch */

// Fetch all projects
export const fetchProjects = async () => {
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
  const data = await sanityFetch<{ [key: string]: any }[]>({
    query
  });
  return data;
}

// Fetch project gallery card data
export async function fetchGalleryCard(): Promise<GalleryCardProject[]> {
  const query = groq`
    *[_type == "project"]{
      projectid,
      project_name,
      "projectbannerUrl": projectbanner.asset->url
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
}

/* Services Fetch by Slug */

// Fetch service details by slug
export const fetchServiceBySlug = async (slug: string): Promise<Service | null> => {
  const query = groq`
    *[_type == "service" && slug.current == $slug][0] {
      identification {
        service_id,
        service_name,
        service_desc
      },
      service_types[]->{
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
           _key,
          question,
          answer
        }
      },
      slug,
      service_banner {
        asset->{
          url
        }
      },
      customerRequirements {
        pre_service_requirements,
        post_service_care
      },
      faqs[] {
        question,
        answer
      }
    }
  `;
  const service = await sanityClient.fetch(query, { slug });
  return service;
}

/* Niche Fetch */

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
}

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
}

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
