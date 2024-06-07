// /pages/api/projects/[slug].ts

import { NextApiRequest, NextApiResponse } from 'next';
import { groq } from 'next-sanity';
import { sanityClient } from '@/sanity/lib/sanityclient';
import { Project } from '@/types';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Project | { message: string }>
) {
    const { slug } = req.query;

    if (typeof slug !== 'string') {
        return res.status(400).json({ message: 'Slug is required and must be a string' });
    }

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

    try {
        const project = await sanityClient.fetch(query, { slug });
        if (!project) {
            return res.status(404).json({ message: 'Project not found' });
        }
        res.status(200).json(project);
    } catch (error) {
        console.error('Failed to fetch project details:', error);
        res.status(500).json({ message: 'Server error while fetching project details' });
    }
}
