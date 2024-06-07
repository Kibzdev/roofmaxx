// pages/api/projects.ts

import type { NextApiRequest, NextApiResponse } from 'next';
import { fetchProjects } from '@/sanity/lib/fetch';

// Define a type for the expected JSON response structure, if known
interface ResponseData {
  [key: string]: any; // Replace `any` with more specific types as needed
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData | { message: string }>
) {
  if (req.method === 'GET') {
    try {
      const projects = await fetchProjects(); // Assuming fetchProjects returns data fitting the ResponseData interface
      res.status(200).json(projects);
    } catch (error) {
      console.error('Failed to fetch projects:', error);
      res.status(500).json({ message: 'Failed to fetch projects' });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
