import Head from 'next/head';

interface SEOProps {
  seo: {
    title: string;
    description: string;
  };
}

const SEO = ({ seo}: SEOProps) => {
  if (!seo) return null;

}