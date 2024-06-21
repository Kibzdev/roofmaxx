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
import ServicesBlock from './components/service/ServicesBlock';
import ProjectsCard from './components/projects/ProjectCard';

const Home: React.FC = () => {
  return (
    <main className='mx-auto'>
      <HeroBanner/>
      <InspireCTO/>
      <ProjectsCard/>
      <TeamView/>
      <ContactUs/>
      <LatestPost/>

    </main>
  );
}

export default Home;
