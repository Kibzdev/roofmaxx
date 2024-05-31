
import "server-only";
import { createClient, type QueryParams } from 'next-sanity'
import ImageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: "fjfiw14y",
  dataset: "production",
  apiVersion:"2024-06-01",
  useCdn:false,
  perspective: 'published',
  stega : {
    enabled:false,
    studioUrl: "/studio",
  },
});

export async function sanityFetch<QueryResponse>({
  query,
  params = {},
  tags,
}:{

  query: string;
  params?: QueryParams;
  tags?: string[];
}) {
  return client.fetch<QueryResponse>(query, params, {
    next: {
      revalidate: process.env.NODE_ENV === 'development' ? 30:3600,
      tags,
    },
  });
}
const builder = ImageUrlBuilder(client);
export const urlFor = (source: any) => {
  return builder.image(source);
};