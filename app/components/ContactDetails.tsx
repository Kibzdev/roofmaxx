// components/ContactDetails.tsx
import React from "react";
import Link from "next/link";
import FadeIn from '../components/FadeIn';
import Offices from '../components/Offices';
import SocialMedia from '../components/SocialMedia';
import Border from '../components/Border';

const ContactDetails: React.FC = () => {
  return (
    <FadeIn>
      <h2 className="font-display text-base font-bold text-sky-800 uppercase">
        Our offices
      </h2>
      <p className="mt-6 text-sm md:text-xl text-neutral-700">
        Prefer doing things in person? We don’t but we have to list our
        addresses here for legal reasons.
      </p>
      <Offices className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2" />
      <Border className="mt-8 pt-8">
        <h2 className="font-display text-sm md:text-xl font-semibold text-red-500">
          Email us
        </h2>
        <dl className="mt-6 grid grid-cols-1 gap-8 text-sm md:text-xl sm:grid-cols-2">
          {[
            ["Careers", "careers@roofmax.co.ke"],
            ["Sales", "sales@roofmax.co.ke"],
          ].map(([label, email]) => (
            <div key={email}>
              <dt className="font-semibold text-sky-800 ">{label}</dt>
              <dd>
                <Link
                  href={`mailto:${email}`}
                  className="text-sky-800 hover:text-sky-600 "
                >
                  {email}
                </Link>
              </dd>
            </div>
          ))}
        </dl>
      </Border>
      <Border className="mt-8 pt-8">
        <h2 className="font-display text-sm md:text-xl font-semibold text-red-500">
          Follow us
        </h2>
        <SocialMedia className="mt-6" />
      </Border>
    </FadeIn>
  );
};

export default ContactDetails;
