import { GetStaticProps } from 'next';
import { groq } from 'next-sanity';
import { sanityClient } from '@/sanity/lib/sanityclient';
import { Service } from '@/types';
import PageIntro from '@/app/components/PageIntro';
import Image from 'next/image';
import Container from '@/app/components/Container';
import { fetchServiceBySlug } from '@/sanity/lib/fetch';
import imageUrlBuilder from '@sanity/image-url';
import { Metadata } from 'next';

// Configure the URL builder for Sanity
const builder = imageUrlBuilder(sanityClient);

function urlFor(source: any) {
  return builder.image(source).url();
}

interface ServiceDataProps {
  service: Service;
}

const ServiceData: React.FC<ServiceDataProps> = ({ service }) => {
  // Directly use the URL if it's already provided
  const serviceBannerUrl = service.service_banner.asset.url || urlFor(service.service_banner.asset);

  return (
    <div className="container mx-auto px-4 py-8">
      <PageIntro eyebrow="Service Details" title={service.identification.service_name} />
      <div className='flex w-full justify-center'>
        <div className="w-full h-auto my-8 rounded-lg shadow-lg max-w-5xl items-center justify-center">
          <Image
            src={serviceBannerUrl}
            alt={service.identification.service_name}
            width={1920}
            height={1080}
            layout="responsive"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
      </div>

      <div className='flex w-full'>
        <p className="text-gray-700 w-3/2 leading-relaxed items-center justify-center tracking-widest text-lg font-medium text-center p-8">
          {service.identification.service_desc}
        </p>
      </div>

      <Container>
        <div className='flex bg-red-900 flex-col md:flex-row justify-center gap-4 items-center md:justify-around py-4 px-4'>
          <div className='flex flex-col'>
            <h2 className="text-2xl font-bold mt-8 text-sky-800 uppercase">Service Niches</h2>
            {/* <Nichecard/> */}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 my-8">
          <h2 className="text-2xl font-bold mt-8">Service Projects</h2>
          {/* <ServiceProjects/> */}
        </div>

        <div>
          <h2>FAQS</h2>
          {/* ServiceFaq */}
        </div>
      </Container>
    </div>
  );
};

export async function generateStaticParams() {
  const query = groq`*[_type == "service"]{ "slug": slug.current }`;
  const services = await sanityClient.fetch(query);
  return services
    .filter((service: { slug: string | null }) => service.slug !== null) // Filter out null slugs
    .map((service: { slug: string }) => ({
      slug: service.slug.toString(), // Ensure slug is a string
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
