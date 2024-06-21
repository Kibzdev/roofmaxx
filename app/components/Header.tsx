"use client"
import React from 'react';
import Container from "./Container";
import TopBar from "./Topbar";
import Navbar from './Navbar';

const Header = () => {
  return (
    <header className='flex flex-col items-center w-full z-1000 overflow-hidden'>
      <TopBar />
      <Navbar />
      <Container className="relative z-50 flex justify-between overflow-hidden">
        <div className="flex items-center gap-6">
          {/* Add other elements if necessary */}
        </div>
      </Container>
    </header>
  );
}

export default Header;
