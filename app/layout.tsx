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
  
        {draftMode().isEnabled && (
          <div>
            <p className="p-4 bg-blue-300 block" onClick={() => window.location.href = '/api/disable-draft'}>
              Disable preview mode
            </p>
          </div>
        )}
        <Header/>
        {children}
        <Footer/>

        {draftMode().isEnabled && <VisualEditing />}
      </body>
    </html>
  );
}
