"use client";
import Link from 'next/link';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

const NavSocials: React.FC = () => {
  return (
    <div className="hidden md:flex fixed top-1/2 right-4 transform -translate-y-1/2 flex-col items-center space-y-4 z-50">
      <Link href="https://www.facebook.com/profile.php?id=61560885807834" className="social-icon" target="_blank" rel="noopener noreferrer">
        <FaFacebookF />
      </Link>
      <Link href="https://instagram.com" className="social-icon" target="_blank" rel="noopener noreferrer">
        <FaInstagram />
      </Link>
      <Link href="https://twitter.com" className="social-icon" target="_blank" rel="noopener noreferrer">
        <FaTwitter />
      </Link>
      <Link href="https://linkedin.com" className="social-icon" target="_blank" rel="noopener noreferrer">
        <FaLinkedinIn />
      </Link>
    </div>
  );
};

export default NavSocials;
