// ./app/(blog)/layout.tsx
import type { ReactNode } from 'react';  // Import ReactNode from 'react'
import "./globals.css";
export const metadata = {
  title: "Roofmax Services ",
  description: "Roof Solution Center",
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
       <div>
       {children}
       </div>
      </body>
    </html>
  );
}
