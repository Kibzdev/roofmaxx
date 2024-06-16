import { fetchNicheBySlug } from '@/sanity/lib/fetch';
import Image from 'next/image';
import Container from '@/app/components/Container';
import { Niche } from '@/types';
import { v4 as uuidv4 } from 'uuid';
import { sanityClient } from '@/sanity/lib/sanityclient';
import { groq } from 'next-sanity';
import SectionIntro from '@/app/components/SectionIntro';

interface NichePageProps {
  params: {
    serviceSlug: string;
    nicheSlug: string;
  };
}

const generateUniqueKeysForFAQs = (faqs: { _key: string; question: string; answer: string; }[]) => {
  return faqs.map(faq => ({
    ...faq,
    _key: faq._key || uuidv4()
  }));
};

const checkForDuplicateKeys = (faqs: { _key: string; question: string; answer: string; }[]) => {
  const keys = faqs.map(faq => faq._key);
  const uniqueKeys = new Set(keys);
  if (keys.length !== uniqueKeys.size) {
    console.warn('Duplicate _key values found in faqs:', keys);
  } else {
    console.log('No duplicate _key values found in faqs');
  }
};

const NichePage = async ({ params }: NichePageProps) => {
  const { nicheSlug } = params;
  const niche: Niche | null = await fetchNicheBySlug(nicheSlug);

  if (!niche) {
    return <div>Niche not found</div>;
  }

  // Log the entire niche object to inspect its structure
  console.log('Fetched niche object:', niche);

  const bannerUrl = niche.niche_banner?.asset?.url;

  if (!bannerUrl) {
    console.error('Banner URL is undefined. niche_banner:', niche.niche_banner);
  }

  if (niche.faqs) {
    niche.faqs = generateUniqueKeysForFAQs(niche.faqs);
    checkForDuplicateKeys(niche.faqs);
  }

  return (
    <Container>
      <div className="flex flex-col items-center justify-center container mx-auto px-4 py-8 w-full">
        <h1 className="text-3xl font-bold mb-4">{niche.niche_name}</h1>
        <div className="w-full h-auto my-8 rounded-lg shadow-lg max-w-5xl items-center justify-center">
          {bannerUrl && (
            <Image
              src={bannerUrl}
              alt={`${niche.niche_name} banner`}
              width={1920}
              height={400}
              style={{ objectFit: 'cover', width: '100%', height: 'auto' }}
              className="rounded-lg"
            />
          )}
        </div>
        <SectionIntro subtitle="Solutions For you" title={niche.niche_name} />
        <div className="flex items-center justify-center w-full">
          <p className="text-gray-700 w-3/2 leading-relaxed items-center justify-center tracking-widest text-lg font-medium text-center p-8">{niche.niche_desc}</p>
        </div>
        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4 text-center uppercase text-sky-800 tracking-wide">Benefits</h2>
          <p className="text-gray-700 w-3/2 leading-relaxed items-center justify-center tracking-widest text-lg font-medium text-center p-8">{niche.niche_benefits}</p>
        </div>
        {niche.faqs && (
          <div className="flex flex-col mt-8 justify-center max-w-4xl items-center">
            <h2 className="text-2xl font-bold mb-4 text-center text-sky-900">FAQs</h2>
            {niche.faqs.map((faq) => (
              <div key={faq._key} className="mb-4">
                <h3 className="font-semibold text-sky-800 text-xl">{faq.question}</h3>
                <p className="font-medium tracking-widest text-lg">{faq.answer}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </Container>
  );
};

export async function generateStaticParams() {
  const query = groq`*[_type == "niche"]{ "slug": slug.current }`;
  const niches = await sanityClient.fetch(query);
  return niches
    .filter((niche: { slug: string | null }) => niche.slug !== null)
    .map((niche: { slug: string }) => ({
      nicheSlug: niche.slug.toString(),
    }));
}

export default NichePage;