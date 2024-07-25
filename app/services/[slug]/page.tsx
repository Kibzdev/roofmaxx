// app/pages/ServicePage.tsx
import { Metadata } from 'next';
import { fetchServiceBySlug, fetchAllServiceSlugs } from '@/sanity/lib/fetch';
import PageIntro from '@/app/components/PageIntro';
import Image from 'next/image';
import ServiceFaqs from '@/app/components/service/ServiceFaqs';
import { PortableText } from '@portabletext/react';
import GetStartedCTO from '@/app/components/GetStartedCTO';
import { Service, FaqItem } from '@/types';
import { urlFor } from '@/sanity/lib/sanityclient';
import components from '@/app/components/CustomPortableText';


interface ServiceDataProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const slugs = await fetchAllServiceSlugs();
  return slugs.map((slug: string) => ({ slug }));
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

  return (
    <div className="flex flex-col w-full mt-32 md:mt-36">
      <div className="md:bg-white md:max-w-8xl md:mx-16" style={{ boxShadow: '10px 0px 15px -3px rgba(0, 0, 0, 0.1), -10px 0px 15px -3px rgba(0, 0, 0, 0.1)' }}>
        <div className="relative flex w-full mt-0 mx-o">
          {serviceBannerUrl && (
            <Image
              src={serviceBannerUrl}
              alt={service.identification.service_name}
              layout="responsive"
              width={1400}
              height={400}
              className="object-contain w-full max-h-screen md:max-h-[640px]"
            />
          )}
        </div>

        <div className="container mx-auto px-4 py-8">
          <PageIntro title={service.identification.service_name} />

          <div className="flex w-full">
            <div className="text-gray-600 w-full md:w-3/2 leading-relaxed items-center justify-center tracking-wide text-sm md:text-lg font-normal text-left p-8">
              {service.identification.service_desc && (
                <PortableText
                  value={service.identification.service_desc}
                  components={components} // Apply custom components here
                />
              )}
            </div>
          </div>

          <div className="flex flex-col w-full md:max-w-6xl items-center justify-center mx-auto">
            <ServiceFaqs faqs={service.faqs || []} />
          </div>
        </div>
      </div>
      <GetStartedCTO />
    </div>
  );
};

export const revalidate = 60; // Revalidate every 60 seconds

export default ServicePage;
