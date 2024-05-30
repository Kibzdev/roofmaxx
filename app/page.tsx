// Home.tsx
import React from 'react';
import Hero from './components/Hero';
import CompBriefCta from './components/CompBriefCta';
import InspireCTO from './components/InspireCto';
import RoofingServices from './components/RoofingService';
import UspPointsList from './components/UspPointsList';
import ProjectsGallery from './components/ProjectsGallery';
import TeamView from './components/TeamView';
import Stats from './components/Stats';
import TestimonialCard from './components/TestimonialCard';
import ContactUs from './components/ContactUs';
import LatestPost from './components/LatestPost';

const Home: React.FC = () => {
  return (
    <main>
      <Hero/>
      <CompBriefCta />
      <RoofingServices/>
      <InspireCTO/>
      <UspPointsList/>
      <ProjectsGallery/>
      <TeamView/>
      <Stats/>
      <TestimonialCard/>
      <ContactUs/>
      <LatestPost/>

    </main>
  );
}

export default Home;
