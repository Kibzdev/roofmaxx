// app/[slug]/page.tsx
import { Metadata } from 'next';
import { fetchServiceBySlug } from '@/sanity/lib/fetch';
import PageIntro from '@/app/components/PageIntro';
import Image from 'next/image';
import Container from '@/app/components/Container';
import ServiceFaqs from '@/app/components/service/ServiceFaqs';
import NicheCard from '@/app/components/niche/NicheCard';
import { urlFor } from '@/sanity/lib/sanityclient';
import ServiceProjects from '@/app/components/service/ServiceProjects';
import { PortableText } from '@portabletext/react';

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
    service_desc: any[]; // Updated to array of blocks
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

interface ServiceDataProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: ServiceDataProps): Promise<Metadata> {
  const { slug } = params;
  const service = await fetchServiceBySlug(slug);

  if (!service) {
    return {
      title: 'Service Not Found',
    };
  }

  // Extract plain text from the block content for the description
  const serviceDescriptionText = service.identification.service_desc
    ?.map((block: any) => block.children?.map((child: any) => child.text).join(''))
    .join(' ') || '';

  return {
    title: service.identification.service_name,
    description: serviceDescriptionText,
  };
}

const ServicePage = async ({ params }: ServiceDataProps) => {
  const { slug } = params;
  const service = await fetchServiceBySlug(slug);

  if (!service) {
    return <div>Service not found</div>;
  }

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
              style={{ objectFit: 'cover' }}
              className="rounded-lg"
            />
          )}
        </div>
      </div>

      <div className="flex w-full">
        <div className="text-gray-700 w-3/2 leading-relaxed items-center justify-center tracking-widest text-lg font-medium text-center p-8">
          {service.identification.service_desc && (
            <PortableText value={service.identification.service_desc} />
          )}
        </div>
      </div>

      <Container>
        <div className="flex flex-col md:flex-row justify-center gap-4 items-center md:justify-around py-4 px-4">
          <div className="flex flex-col">
            <h2 className="text-2xl font-bold mt-8 text-sky-800 uppercase">Service Niches</h2>
            <div className="flex flex-wrap justify-center gap-4 rounded-xl">
              {service.service_types?.map((niche: any) => (
                <NicheCard key={niche._id} niche={niche} serviceSlug={slug} />
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col w-full justify-center items-center">
          <h2 className="text-2xl font-bold text-sky-800 uppercase py-4 text-center mt-8">Service Projects</h2>
          <ServiceProjects />
        </div>
        <div>
          <h2 className="text-2xl font-bold mt-8">Testimonials</h2>
          {/* <ServiceProjects /> */}
        </div>

        <div className="flex max-w-6xl items-center justify-center">
          <ServiceFaqs faqs={service.faqs || []} />
        </div>
      </Container>
    </div>
  );
};

export default ServicePage;
