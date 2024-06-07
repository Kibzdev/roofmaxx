// ./sanity/lib/fetch.ts

import { SanityClient, groq, type ClientPerspective, type QueryParams } from "next-sanity";
import { draftMode } from "next/headers";
import { sanityClient } from "./sanityclient";
import { token } from "./token";
import { Service,Project } from '../../types'

/**
 * Used to fetch data in Server Components, it has built in support for handling Draft Mode and perspectives.
 * When using the "published" perspective then time-based revalidation is used, set to match the time-to-live on Sanity's API CDN (60 seconds)
 * and will also fetch from the CDN.
 * When using the "previewDrafts" perspective then the data is fetched from the live API and isn't cached, it will also fetch draft content that isn't published yet.
 */
interface ProjectBanner {
  _type: 'image';
  asset: {
    _ref: string;
  };
}

interface GalleryCardProject {
  projectid: string;
  project_name: string;
  projectbannerUrl: string; // This will be derived from the projectbanner asset
}








export async function sanityFetch<QueryResponse>({
  query,
  params = {},
  perspective = draftMode().isEnabled ? "previewDrafts" : "published",
  /**
   * Stega embedded Content Source Maps are used by Visual Editing by both the Sanity Presentation Tool and Vercel Visual Editing.
   * The Sanity Presentation Tool will enable Draft Mode when loading up the live preview, and we use it as a signal for when to embed source maps.
   * When outside of the Sanity Studio we also support the Vercel Toolbar Visual Editing feature, which is only enabled in production when it's a Vercel Preview Deployment.
   */
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
      // The token is required to fetch draft content
      token,
      // The `previewDrafts` perspective isn't available on the API CDN
      useCdn: false,
      // And we can't cache the responses as it would slow down the live preview experience
      next: { revalidate: 0 },
    });
  }
  return sanityClient.fetch<QueryResponse>(query, params, {
    stega,
    perspective: "published",
    // The `published` perspective is available on the API CDN
    useCdn: true,
    // Only enable Stega in production if it's a Vercel Preview Deployment, as the Vercel Toolbar supports Visual Editing
    // When using the `published` perspective we use time-based revalidation to match the time-to-live on Sanity's API CDN (60 seconds)
    next: { revalidate: 60 },
  });
}

/*services fetch*/


// All services
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
// Service Nav
export const fetchNavigationData = async () => {
  const query = `
    *[_type == "service"]{
      "id": _id,
      "label": identification.service_name
    }
  `;
  const data = await sanityClient.fetch(query);
  return data;
};
// description 



/*Projects */

// all projects

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

// fetch projec_name project banner
export async function fetchGalleryCard(): Promise<GalleryCardProject[]> {
  const query = `*[_type == "project"]{
    projectid,
    project_name,
    "projectbannerUrl": projectbanner.asset->url
  }`;

  try {
    const projects: GalleryCardProject[] = await sanityClient.fetch(query);
    return projects;
  } catch (error) {
    console.error("Failed to fetch gallery card data:", error);
    throw new Error('Failed to fetch gallery card data');
  }
}

// fetch project details
export const fetchProjectBySlug = async (slug: string): Promise<Project> => {
  const query = groq`*[_type == "project" && slug.current == $slug][0] {
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
  }`;
  return await sanityClient.fetch(query, { slug });
};