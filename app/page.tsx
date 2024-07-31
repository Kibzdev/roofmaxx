import React from 'react';
import TeamView from './components/TeamView';
import ContactUs from './components/ContactUs';
import HeroBanner from './components/HeroBanner';
import ProjectsCard from './components/projects/ProjectCard';
import GetStartedCTO from './components/GetStartedCTO';

const Home: React.FC = () => {
  return (
    <main className='mx-auto'>
      <HeroBanner />
      {/* <InspireCTO/> */}
      <div className='bg-amber-300 mt-2'>
        <ProjectsCard />
        <TeamView />
        <ContactUs />
        <GetStartedCTO />
      </div>
    </main>
  );
}

export default Home;
