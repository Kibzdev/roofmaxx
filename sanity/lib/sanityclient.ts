import { createClient, type QueryParams } from 'next-sanity';
import ImageUrlBuilder from '@sanity/image-url';

// Create the Sanity client
export const sanityClient = createClient({
  projectId: "fjfiw14y",
  dataset: 'production',
  apiVersion: '2024-06-01',
  useCdn: false,
  perspective: 'published',
  stega: {
    enabled: false,
    studioUrl: '/studio',
  },
});

// Function to fetch data from Sanity
export async function sanityFetch<QueryResponse>({
  query,
  params = {},
  tags,
}: {
  query: string;
  params?: QueryParams;
  tags?: string[];
}): Promise<QueryResponse> {
  return sanityClient.fetch<QueryResponse>(query, params, {
    next: {
      revalidate: process.env.NODE_ENV === 'development' ? 30 : 3600,
      tags,
    },
  });
}

// Image URL builder
const builder = ImageUrlBuilder(sanityClient);
export const urlFor = (source: any) => builder.image(source);
