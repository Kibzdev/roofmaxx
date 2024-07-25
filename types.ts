// Base type definition for common properties
export type Base = {
  _createdAt: string;
  _id: string;
  _rev: string;
  _type: string;
  _updatedAt: string;
};

// Define the types for sections and page data
// Content can include images

interface BlockContent {
  _type: 'block';
  children: { text: string }[];
}

interface ImageContent {
  _type: 'image';
  asset: { url: string };
  alt: string;
}

type Content = BlockContent | ImageContent;

// Define the Section type
export interface Section {
  _key: string;
  heading: string;
  content: Content[];
  location: string;
}

// Define the PageData type
export interface PageData extends Base {
  title: string;
  sections: Section[];
}
export interface Post extends Base {
  author: Author;
  body: Block[];
  categories: Category[];
  mainImage: Image;
  slug: Slug;
  title: string;
  description: string;
}

// Define Portable Text types
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

// Block type definition
export interface Block {
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
export interface Span {
  _key: string;
  _type: "span";
  marks: string[];
  text: string;
}

// Define Author type
export interface Author extends Base {
  description: string;
  image: Image;
  name: string;
  slug: Slug;
}

// Define Image type
export interface Image {
  asset: Asset;
}

// Define Asset type
export interface Asset {
  url: string;
}

// Define Slug type
interface Slug {
  _type: "slug";
  current: string;
}

// Define TeamMember type
export type TeamMember = {
  _id: string;
  workid: string;
  photo: string;
  firstname: string;
  lastname: string;
  expertise: string;
  description: any[];
  slug: string;
  projects: {
    _id: string;
    title: string;
    bannerUrl: string;
  }[];
};

// Define Category type extending Base
export interface Category extends Base {
  description: string;
  title: string;
}

// Define GalleryCardProject type
export interface GalleryCardProject {
  projectid: string;
  project_name: string;
  projectbannerUrl: string;
}

// Define Portable Text types for lists
export type PortableTextListComponents = {
  bullet: React.ComponentType<{ children: React.ReactNode }>;
  number: React.ComponentType<{ children: React.ReactNode }>;
};

export type PortableTextListItemComponents = React.ComponentType<{ children: React.ReactNode }>;

// Define ServiceLink type
export interface ServiceLink {
  href: string;
  label: string;
  service_id: string;
}

// Define ServiceType type
export interface ServiceType {
  type_name: string;
  type_banner: Image;
  desc: Block[];
  slug: Slug;
}

// Define CustomerRequirements type
export interface CustomerRequirements {
  pre_service_requirements: string[];
  post_service_care: string[];
}

// Define FAQ type
export interface FAQ {
  _key: string;
  question: string;
  answer: string;
}

// Define ProjectClient type
export interface ProjectClient {
  name: string;
  photoUrl: string;
  testimonial: string;
}

// Define ImageAsset type
export interface ImageAsset {
  _type: 'image';
  asset: {
    _ref: string;
  };
}

// Define ServiceIdentification type
export interface ServiceIdentification {
  service_id: string;
  service_name: string;
  service_desc: Block[];
  order: number;
}

// Define Project type
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

// Define Faq type
export interface Faq {
  _key: string;
  question: string;
  answer: string;
}

// Define Niche type extending Base
export interface Niche extends Base {
  category: {
    _id: string;
    title: string;
  };
  niche_name: string;
  niche_banner: Image | null;
  niche_desc: Block[];
  niche_benefits: Block[]; // Updated to array of blocks
  slug: Slug;
  faqs: Faq[];
}

// Define Location type
export interface Location {
  _id: string;
  name: string;
  address?: string;
}

// Define Client type
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

// Define ProjectDetailProps type
export interface ProjectDetailProps {
  projects: Project[];
  clients: Client[];
  locations: Location[];
}

// Define GalleryCardProps type
export interface GalleryCardProps {
  projects: Project[];
}

// Define NichecardProps type
export interface NichecardProps {
  niches: Niche[];
}

// Define ServiceParams type
export interface ServiceParams {
  slug: string;
}

// Define FaqItem type
export interface FaqItem {
  _key: string;
  question: string;
  answer: string;
}

// Define Service type
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

// Define Params type
export interface Params {
  slug: string;
}

// Define ServiceDataProps type
export interface ServiceDataProps {
  params: {
    slug: string;
  };
}
