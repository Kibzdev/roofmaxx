import { sanityClient } from './sanityclient';


export const fetcher = async <T>(query: string, params: Record<string, any> = {}): Promise<T> => {
  return sanityClient.fetch(query, params);
};
