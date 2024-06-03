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
export interface Service {
  serviceId: string; // Ensure this matches the data structure you are fetching
  serviceName: string;
  serviceDescription: string;
  _id: string;
  service_types: Array<{
    _ref: string;
  }>;
  slug: {
    current: string;
  };
  service_banner: {
    asset: {
      _ref: string;
    };
  };
  customerRequirements: {
    pre_service_requirements: string[];
    post_service_care: string[];
  };
  faqs: Array<{
    question: string;
    answer: string;
  }>;
}

export interface ServiceIdentification {
  service_Id: string; // If needed
  serviceName: string;
  serviceDescription: string; // If the description field is named as such
}
export interface Service {
  
  // Add other properties as needed
}