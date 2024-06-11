// Home.tsx
import React from 'react';
import CompBriefCta from './components/CompBriefCta';
import InspireCTO from './components/InspireCto';
import UspPointsList from './components/UspPointsList';
import TeamView from './components/TeamView';
import Stats from './components/Stats';
import TestimonialCard from './components/TestimonialCard';
import ContactUs from './components/ContactUs';
import LatestPost from './components/LatestPost';
import HeroBanner from './components/HeroBanner';

const Home: React.FC = () => {
  return (
    <main className='mx-auto'>
      <HeroBanner/>
      <CompBriefCta />
      <InspireCTO/>
      <UspPointsList/>
      <TeamView/>
      <Stats/>
      <TestimonialCard/>
      <ContactUs/>
      <LatestPost/>

    </main>
  );
}

export default Home;
