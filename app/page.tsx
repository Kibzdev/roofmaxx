// Home.tsx
import React from 'react';
import InspireCTO from './components/InspireCto';
import TeamView from './components/TeamView';
import ContactUs from './components/ContactUs';
import LatestPost from './components/LatestPost';
import HeroBanner from './components/HeroBanner';
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
