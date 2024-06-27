// Base type definition for common properties
type Base = {
  _createdAt: string;
  _id: string;
  _rev: string;
  _type: string;
  _updatedAt: string;
};

// Reference type definition
interface Reference {
  _type: "reference";
  current: string;
}

// Slug type definition
interface Slug {
  _type: "slug";
  current: string;
}

// Portable Text types
export interface PortableTextSpan {
  _key: string;
  text: string;
  marks?: string[];
}

export interface PortableTextBlock {
  _key: string;
  _type: string;
  children: PortableTextSpan[];
  markDefs?: any[];
  style?: string;
}

interface Block {
  _type: 'block';
  children: Array<{
    _type: 'span';
    text: string;
    marks?: string[];
  }>;
  markDefs?: Array<{
    _key: string;
    _type: string;
  }>;
  style?: string;
}

// Span type definition
interface Span {
  _key: string;
  _type: "span";
  marks: string[];
  text: string;
}

// Category type definition extending Base
interface Category extends Base {
  description: string;
  title: string;
}

// ServiceLink type definition
export interface ServiceLink {
  href: string;
  label: string;
  service_id: string;
}

// ServiceType type definition
interface ServiceType {
  type_name: string;
  type_banner: Image;
  desc: Block[];
  slug: Slug;
}

// CustomerRequirements type definition
interface CustomerRequirements {
  pre_service_requirements: string[];
  post_service_care: string[];
}

// FAQ type definition
interface FAQ {
  _key: string;
  question: string;
  answer: string;
}

// ProjectClient type definition
export interface ProjectClient {
  name: string;
  photoUrl: string;
  testimonial: string;
}

// ImageAsset type definition
export interface ImageAsset {
  _type: 'image';
  asset: {
    _ref: string;
  };
}

// ServiceIdentification type definition
export interface ServiceIdentification {
  service_id: string;
  service_name: string;
  service_desc: Block[];
}

// Project type definition
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
  description: Block[];
  outcome: string;
  images: { url: string }[];
  documents: { url: string }[];
  client_attachments: { url: string }[];
  slug: string;
}

// Asset type definition
export interface Asset {
  url: string;
}

// Faq type definition
export interface Faq {
  _key: string;
  question: string;
  answer: string;
}

// Image type definition
export interface Image {
  asset: Asset;
}

// Niche type definition extending Base
export interface Niche extends Base {
  category: {
    _id: string;
    title: string;
  };
  niche_name: string;
  niche_banner: Image | null;
  niche_desc: Block[];
  niche_benefits: string;
  slug: Slug;
  faqs: Faq[];
}

// Location type definition
export interface Location {
  _id: string;
  name: string;
  address?: string;
}

// Client type definition
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

// ProjectDetailProps type definition
export interface ProjectDetailProps {
  projects: Project[];
  clients: Client[];
  locations: Location[];
}

// GalleryCardProps type definition
export interface GalleryCardProps {
  projects: Project[];
}

// NichecardProps type definition
export interface NichecardProps {
  niches: Niche[];
}

// ServiceParams type definition
export interface ServiceParams {
  slug: string;
}

// FaqItem type definition
export interface FaqItem {
  _key: string;
  question: string;
  answer: string;
}

// Service type definition
export interface Service {
  identification: ServiceIdentification;
  service_types?: Niche[];
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

// Params type definition
export interface Params {
  slug: string;
}

// ServiceDataProps type definition
export interface ServiceDataProps {
  params: {
    slug: string;
  };
}
