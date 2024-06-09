// Home.tsx
import React from 'react';
import Hero from './components/Hero';
import CompBriefCta from './components/CompBriefCta';
import InspireCTO from './components/InspireCto';
import RoofingService from './components/RoofingService';
import UspPointsList from './components/UspPointsList';
import TeamView from './components/TeamView';
import Stats from './components/Stats';
import TestimonialCard from './components/TestimonialCard';
import ContactUs from './components/ContactUs';
import LatestPost from './components/LatestPost';
import HeroBanner from './HeroBanner';

const Home: React.FC = () => {
  return (
    <main>
  <HeroBanner/>
      <CompBriefCta />
      <RoofingService title="one" desc="new" />
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
