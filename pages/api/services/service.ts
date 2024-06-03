// Importing necessary types from 'next' module
import type { NextApiRequest, NextApiResponse } from 'next';

// Importing the Service type from a relative path
import type { Service } from '../../../types'; 

// Importing the function to fetch service data from the defined module path
import { fetchServiceData } from '@/sanity/lib/fetch';

// Definition of the ErrorResponse interface for structured error handling
interface ErrorResponse {
  message: string;
}

// The API handler function responsible for getting service data
export default async function handler(
  req: NextApiRequest, 
  res: NextApiResponse<Array<Service> | ErrorResponse>
): Promise<void> {
  try {
    // Attempt to fetch services data using the imported function
    const services = await fetchServiceData();

    // Sending a successful response back with the fetched services data
    res.status(200).json(services);
  } catch (error) {
    // Error handling to catch any issues during the fetch process
    const message = error instanceof Error ? error.message : 'Unknown error';
    
    // Logging the error to the server console for debugging purposes
    console.error("Fetch error:", message);

    // Sending a response with a 500 status code and error message
    res.status(500).json({ message: `Failed to fetch services: ${message}` });
  }
}
