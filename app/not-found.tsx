import React from 'react'
import Container from './components/Container';
import FadeIn from './components/FadeIn';
import Link from "next/link";

const NotFound: React.FC = () => {
  return (
    <Container className="flex h-full items-center pt-20 sm:pt-24 lg:pt-32 border-l-orange-200">
      <FadeIn className="flex flex-col items-center">
        <p className="font-display text-4xl font-semibold text-sky-800 sm:text-5xl">
          404
        </p>
        <h1 className="mt-4 font-display text-2xl font-semibold text-sky-800">
          Page not found
        </h1>
        <p className="mt-2 text-sm text-sky-600">
          Sorry, we could not find the page you are looking for.
        </p>
        <Link
          href="/"
          className="mt-4 text-sm font-semibold text-sky-800 transition hover:text-neutral-700"
        >
          Go to the home page
        </Link>
      </FadeIn>
    </Container>
  );
};

export default NotFound;