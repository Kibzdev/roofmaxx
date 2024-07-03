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
import { Service, FaqItem, Niche } from '@/types';

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

  const serviceBannerUrl = service.service_banner?.asset.url || urlFor(service.service_banner?.asset).url();

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
    <div className="flex flex-col w-full mt-28 md:mt-36">
      <div className="relative w-full max-h-screen mt-0">
        {serviceBannerUrl && (
          <Image
            src={serviceBannerUrl}
            alt={service.identification.service_name}
            className="object-contain max-h-screen w-full h-full"
             width={1200}
             height={400}
          />
        )}
      </div>
      <div className="container mx-auto px-4 py-8">
        <PageIntro title={service.identification.service_name} />

        <div className="flex w-full">
          <div className="text-gray-700 w-full md:w-3/2 leading-relaxed items-center justify-center tracking-wide text-lg font-medium text-left p-8">
            {service.identification.service_desc && (
              <PortableText value={service.identification.service_desc} />
            )}
          </div>
        </div>

        <Container>
          {/* <div className="flex flex-col md:flex-row justify-center gap-4 items-center md:justify-around py-4 px-4">
            <div className="flex flex-col">
              <h2 className="text-2xl font-bold mt-8 text-sky-800 uppercase">Service Niches</h2>
              <div className="flex flex-wrap justify-center gap-4 rounded-xl">
                {service.service_types?.map((niche: Niche) => (
                  <NicheCard key={niche._id} niche={niche} serviceSlug={slug} />
                ))}
              </div>
            </div>
          </div> */}

          <div className="flex flex-col w-full justify-center items-center">
            <h2 className="text-2xl font-bold text-sky-800 uppercase py-4 text-center mt-8">Similar Projects</h2>
            <ServiceProjects />
          </div>
          <div className="flex max-w-6xl items-center justify-center">
            <ServiceFaqs faqs={service.faqs || []} />
          </div>
        </Container>
      </div>
    </div>
  );
};

export default ServicePage;
