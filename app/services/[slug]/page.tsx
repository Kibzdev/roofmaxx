import { groq } from 'next-sanity';
import { sanityClient } from '@/sanity/lib/sanityclient';
import PageIntro from '@/app/components/PageIntro';
import Image from 'next/image';
import Container from '@/app/components/Container';
import { fetchServiceBySlug } from '@/sanity/lib/fetch';
import imageUrlBuilder from '@sanity/image-url';
import { Metadata } from 'next';
import ServiceFaqs from '@/app/components/service/ServiceFaqs';
import { v4 as uuidv4 } from 'uuid';

// Define FaqItem type
interface FaqItem {
  _key: string;
  question: string;
  answer: string;
}

// Example Service type
interface Service {
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
}

// Configure the URL builder for Sanity
const builder = imageUrlBuilder(sanityClient);

function urlFor(source: any): string {
  return builder.image(source).url();
}

interface ServiceDataProps {
  service: Service;
}

const ServiceData: React.FC<ServiceDataProps> = ({ service }) => {
  const serviceBannerUrl = service.service_banner?.asset.url || urlFor(service.service_banner?.asset);

  // Check for duplicate keys
  const checkForDuplicateKeys = (faqs: FaqItem[]) => {
    const keys = faqs.map(faq => faq._key);
    const uniqueKeys = new Set(keys);
    if (keys.length !== uniqueKeys.size) {
      console.warn('Duplicate _key values found in faqs:', keys);
    } else {
      console.log('No duplicate _key values found in faqs');
    }
  };

  if (service.faqs) {
    checkForDuplicateKeys(service.faqs);
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <PageIntro eyebrow="Service Details" title={service.identification.service_name} />
      <div className="flex w-full justify-center">
        <div className="w-full h-auto my-8 rounded-lg shadow-lg max-w-5xl items-center justify-center">
          {serviceBannerUrl && (
            <Image
              src={serviceBannerUrl}
              alt={service.identification.service_name}
              width={1920}
              height={1080}
              layout="responsive"
              objectFit="cover"
              className="rounded-lg"
            />
          )}
        </div>
      </div>

      <div className="flex w-full">
        <p className="text-gray-700 w-3/2 leading-relaxed items-center justify-center tracking-widest text-lg font-medium text-center p-8">
          {service.identification.service_desc}
        </p>
      </div>

      <Container>
        <div className="flex bg-red-900 flex-col md:flex-row justify-center gap-4 items-center md:justify-around py-4 px-4">
          <div className="flex flex-col">
            <h2 className="text-2xl font-bold mt-8 text-sky-800 uppercase">Service Niches</h2>
            {/* <Nichecard /> */}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 my-8">
          <h2 className="text-2xl font-bold mt-8">Service Projects</h2>
          {/* <ServiceProjects /> */}
        </div>

        <div className="flex max-w-6xl items-center justify-center">
          <ServiceFaqs faqs={service.faqs || []} />
        </div>
      </Container>
    </div>
  );
};

export async function generateStaticParams() {
  const query = groq`*[_type == "service"]{ "slug": slug.current }`;
  const services = await sanityClient.fetch(query);
  return services
    .filter((service: { slug: string | null }) => service.slug !== null)
    .map((service: { slug: string }) => ({
      slug: service.slug.toString(),
    }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const { slug } = params;
  const service = await fetchServiceBySlug(slug);

  if (!service) {
    return {
      title: 'Service Not Found',
    };
  }

  return {
    title: service.identification.service_name,
    description: service.identification.service_desc,
  };
}

export default async function Page({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const service = await fetchServiceBySlug(slug);

  if (!service) {
    return <div>Service not found</div>;
  }

  return <ServiceData service={service} />;
}
