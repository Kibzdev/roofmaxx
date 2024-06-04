// ./app/(blog)/layout.tsx
import type { ReactNode } from 'react';  // Import ReactNode from 'react'
import { Inter } from "next/font/google";  // Correct imports assuming these are valid
import { VisualEditing } from "next-sanity";  // Assuming next-sanity is correctly installed
import { draftMode } from "next/headers";  // Assuming this is the correct import for draftMode
import "./globals.css";
import Header from './components/Header';
import Footer from './components/Footer';
const inter = Inter({ subsets: ["latin"] });  // Inter font setup

export const metadata = {
  title: "Roofmax",
  description: "Roof Solution Center",
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet"></link>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
