// components/PageIntro.tsx
import React from 'react';
import Container from './Container';
import FadeIn from './FadeIn';
import clsx from 'clsx';

// Define TypeScript types for the props
type PageIntroProps = {
    eyebrow?: string;    // Optional string prop
    title?: string;      // Optional string prop
    children?: React.ReactNode; // Optional children prop
    centered?: boolean;  // Optional boolean prop, defaults to false
};

const PageIntro: React.FC<PageIntroProps> = ({ eyebrow, title, children, centered = false }) => {
  return (
    <Container className={clsx("mt-18 sm:mt-32 lg:mt-20")}>
      <FadeIn>
         <h1>
          <span className='block font-display text-xl font-semibold text-sky-600'>{eyebrow}</span>
          <span className="sr-only"> - </span>
          <span className={clsx("mt-6 block max-w-5xl font-display text-5xl font-medium tracking-tight text-sky-800 [text-wrap:balance] sm:text-6xl", centered && "mx-auto")}>{title}</span>
         </h1>
         <div className={clsx(
            "mt-6 max-w-3xl text-xl text-gray-700",
            centered && "mx-auto"
          )}>
           {children}
         </div>
      </FadeIn>
      
    </Container>
  );
}

export default PageIntro;
