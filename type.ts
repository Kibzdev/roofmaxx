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

interface ServiceIdentification {
  service_id: string;
  service_name: string;
  description: string;
}

interface CustomerRequirements {
  pre_service_requirements: string[];
  post_service_care: string[];
}

interface FAQ {
  question: string;
  answer: string;
}

export interface Service extends Base {
  identification: ServiceIdentification;
  service_types: ServiceType[];
  slug: Slug;
  service_banner: Image;
  customerRequirements: CustomerRequirements;
  faqs: FAQ[];
}
