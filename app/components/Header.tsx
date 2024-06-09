"use client"
import React, { ReactNode } from 'react';
import Container from "./Container"
import TopBar from "./Topbar"
import Navbar from './Navbar';


const Header = () => {
  return (
    <header className='flex flex-col items-center w-full z-1000'>
      <TopBar/>
      <Navbar />
      <Container className="relative z-50 flex justify-between ">
      <div className="flex items-center gap-6">
            </div>
      </Container>
    </header>
  )
}
export default Header;