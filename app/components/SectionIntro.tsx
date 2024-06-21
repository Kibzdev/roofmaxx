// components/PageIntro.tsx
import React from 'react';
import Container from './Container';
import FadeIn from './FadeIn';
import clsx from 'clsx';

// Define TypeScript types for the props
type PageIntroProps = {
    subtitle?: string;    // Optional string prop
    title?: string;      // Optional string prop
    children?: React.ReactNode; // Optional children prop
    centered?: boolean;  // Optional boolean prop, defaults to false
};

const SectionIntro: React.FC<PageIntroProps> = ({ subtitle, title, children, centered = false }) => {
  return (
    <Container className={clsx("mt-12 sm:mt-32 lg:mt-16 w-full")}>
      <FadeIn>
         <h1>
          <span className='block font-display text-base font-semibold text-white'>{subtitle}</span>
          <span className="sr-only"> - </span>
          <span className={clsx("mt-6 font-bold block max-w-5xl font-display text-5xl tracking-tight text-red-500 [text-wrap:balance] sm:text-6xl", centered && "mx-auto")}>{title}</span>
         </h1>
         <div className={clsx(
            "mt-6 max-w-3xl text-xl text-red-500",
            centered && "mx-auto"
          )}>
           {children}
         </div>
      </FadeIn>
      
    </Container>
  );
}

export default SectionIntro;
