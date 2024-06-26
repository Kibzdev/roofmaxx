import React from 'react';
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa"; // Corrected from FaXTwitter to FaTwitter
import { FaInstagram } from "react-icons/fa";

const SocialIcons: React.FC = () => {
  return (
    <div className="flex items-center gap-4 text-sky-800 justify-center">
      <p className="font-semibold text-white text-lg text-center">Follow us On:</p>
      <p><span className="hover:text-white"><FaFacebookF /></span></p>
      <p><span className="hover:text-white"><FaTwitter /></span></p>
      <p><span className="hover:text-white"><FaInstagram /></span></p>
    </div>
  );
}

export default SocialIcons;
