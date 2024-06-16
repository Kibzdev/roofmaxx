type Base = {
  _createdAt: string;
  _id: string;
  _rev: string;
  _type: string;
  _updatedAt: string;
};


interface Reference {
  _type: "reference";
  current: string;
}

interface Slug {
  _type: "slug";
  current: string;
}

interface Block {
  _key: string;
  _type: "block";
  children: Span[];
  markDefs: any[];
  style: "normal" | "h1" | "h2" | "h3" | "h4" | "blockquote";
}

interface Span {
  _key: string;
  _type: "span";
  marks: string[];
  text: string;
}

interface Category extends Base {
  description: string;
  title: string;
}

interface ServiceType {
  type_name: string;
  type_banner: Image;
  desc: Block[];
  slug: Slug;
}

interface CustomerRequirements {
  pre_service_requirements: string[];
  post_service_care: string[];
}

interface FAQ {
  _key: string;
  question: string;
  answer: string;
}

// New Types
export interface ProjectClient {
  name: string;
  photoUrl: string;
  testimonial: string;
}

export interface ImageAsset {
  _type: 'image';
  asset: {
    _ref: string;
  };
}

export interface ServiceIdentification {
  service_id: string;
  service_name: string;
  service_desc: string;
}

export interface Project {
  projectid: string;
  project_name: string;
  projectbannerUrl: string;
  client: {
    name: string;
    category: string;
    clientImage: string;
    testimonial: string;
  };
  service_used: {
    name: string;
    description: string;
  };
  start_date: string;
  end_date: string;
  status: string;
  budget: number;
  description: string;
  outcome: string;
  images: { url: string }[];
  documents: { url: string }[];
  client_attachments: { url: string }[];
  slug: string; // Ensure this is a string
}
export interface Asset {
  url: string;
}

export interface Faq {
  _key: string;
  question: string;
  answer: string;
}
export interface Image {
  asset: Asset;
}
export interface Asset {
  url: string;
}


export interface Faq {
  _key: string;
  question: string;
  answer: string;
}

export interface Niche {
  category: {
    _id: string;
    title: string;
  };
  niche_name: string;
  niche_banner: Image | null;
  niche_desc: string;
  niche_benefits: string;
  slug: {
    current: string;
  };
  faqs: Faq[];
}

export interface Location {
  _id: string;
  name: string;
  address?: string;
}

export interface Client {
  client_id: string;
  name: string;
  category: 'Residential' | 'Commercial' | 'Industrial';
  phone: string;
  location: Location;
  photoUrl: string;
  testimonial: string;
  project_ref: Array<{ _id: string }>;
}

export interface ProjectDetailProps {
  projects: Project[];
  clients: Client[];
  locations: Location[];
}

export interface GalleryCardProps {
  projects: Project[];
}

export interface NichecardProps {
  niches: Niche[];
}

// Service
export interface ServiceParams {
  slug: string;
}

export interface ServiceIdentification {
  service_id: string;
  service_name: string;
  service_desc: string;
}

export interface FaqItem {
  _key: string;
  question: string;
  answer: string;
}

export interface Service {
  identification: {
    service_id: string;
    service_name: string;
    service_desc: string;
  };
  service_types?: any[];
  slug: string;
  service_banner?: {
    asset: {
      url: string;
    };
  };
  customerRequirements?: {
    pre_service_requirements?: string[];
    post_service_care?: string[];
  };
  faqs?: FaqItem[];
  serviceProjects?: Project[];
  clients?: Client[];
}

export interface Params {
  slug: string;
}
