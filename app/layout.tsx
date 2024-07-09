import type { ReactNode } from 'react'; 
import { Inter } from "next/font/google"; 
import { VisualEditing } from "next-sanity"; 
import { draftMode } from "next/headers"; 
import "./globals.css";
import Header from './components/Header';
import Footer from './components/Footer';
import Head from 'next/head';
import { Metadata } from 'next';
import BottomMenu from './components/BottomMenu';
import Cookies from './components/Cookies';
import CopyRight from './components/Copyright';



const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Roofmax",
  description: "Roof Solution Center",
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet"></link>
      </Head>
      <body className={`${inter.className} overflow-x-hidden`}>
        <Header />
        <BottomMenu />

        {children}
        <Footer />
        <CopyRight/>
        <Cookies />
      </body>
    </html>
  );
}
