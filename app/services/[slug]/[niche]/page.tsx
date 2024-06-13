import { Metadata } from 'next';
import Image from 'next/image';
import { fetchNicheBySlug } from '@/sanity/lib/fetch';
import { Niche } from '@/types';

interface NichePageProps {
  params: {
    slug: string;
  };
}

export const metadata: Metadata = {
  title: 'Niche Details',
  description: 'Detailed information about the selected niche',
};

export default async function NichePage({ params }: NichePageProps) {
  const { slug } = params;

  let niche: Niche | null = null;
  let error: string | null = null;

  try {
    niche = await fetchNicheBySlug(slug);
  } catch (err) {
    error = 'Failed to fetch niche';
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!niche) {
    return <div>Niche not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mt-8">{niche.niche_name}</h2>
      <div className="w-full h-auto my-8 rounded-lg shadow-lg">
        <Image
          src={niche.niche_banner.asset.url}
          alt={niche.niche_name}
          width={1920}
          height={1080}
          layout="responsive"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>
      <p>{niche.niche_desc}</p>
      <h3 className="text-xl font-semibold mt-4">Benefits:</h3>
      <ul>
        {niche.niche_benefits.map((benefit, index) => (
          <li key={index}>{benefit}</li>
        ))}
      </ul>
      <h3 className="text-xl font-semibold mt-4">FAQs:</h3>
      <ul>
        {niche.faqs.map((faq, index) => (
          <li key={index}>
            <strong>{faq.question}</strong>: {faq.answer}
          </li>
        ))}
      </ul>
    </div>
  );
}
