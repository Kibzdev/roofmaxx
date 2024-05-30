import React from 'react';
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";


const SocialIcons: React.FC = () => {
  return (
    <div className="flex items-center gap-4 text-sky-800 justify-center">
      <p className="font-semibold text-white text-lg text-center">Follow us On:</p>
      <p><span><FaFacebookF /></span></p>
      <p><span><FaXTwitter /></span></p> {/* Corrected from FaXTwitter to FaTwitter */}
      <p><span><FaInstagram /></span></p>
    </div>
  );
}

export default SocialIcons;
