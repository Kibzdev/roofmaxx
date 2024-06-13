type Base = {
  _createdAt: string;
  _id: string;
  _rev: string;
  _type: string;
  _updatedAt: string;
};

interface Image {
  _type: "image";
  asset: Reference;
}

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
  question: string;
  answer: string;
}

//New Types

// types.ts
// export interface Service {
//   serviceId: string; // Ensure this matches the data structure you are fetching
//   serviceName: string;
//   serviceDescription: string;
//   _id: string;
//   service_types: Array<{
//     _ref: string;
//   }>;
//   slug: {
//     current: string;
//   };
//   service_banner: {
//     asset: {
//       _ref: string;
//     };
//   };
//   customerRequirements: {
//     pre_service_requirements: string[];
//     post_service_care: string[];
//   };
//   faqs: Array<{
//     question: string;
//     answer: string;
//   }>;
// }
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
  service_Id: string; // If needed
  serviceName: string;
  serviceDescription: string; // If the description field is named as such
}
// /types/index.ts

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
  slug:string;
}
export interface Niche {
  _id: string;
  niche_name: string;
  niche_banner: {
    asset: {
      url: string;
    };
  };
  slug: string;
  niche_desc: string;
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
export interface ProjectClient {
  name: string;       // Client's name
  photoUrl: string;   // URL to the client's photo
  testimonial: string; // Client's testimonial about the project
}


export interface GalleryCardProps {
  projects: Project[];
}
export interface NichecardProps {
  niches: Niche[];
}

// service
// app/types.ts
export interface ServiceParams {
  slug: string;
}

export interface ServiceIdentification {
  service_id: string;
  service_name: string;
  service_desc: string;
}


export interface Service {
  identification: {
    service_id: string;
    service_name: string;
    service_desc: string;
  };
  service_types: Niche[]; // Update to use the Niche type
  slug: {
    current: string;
  };
  service_banner: {
    asset: {
      url: string;
    };
  };
  customerRequirements: {
    pre_service_requirements: string[];
    post_service_care: string[];
  };
  faqs: {
    question: string;
    answer: string;
  }[];
}
