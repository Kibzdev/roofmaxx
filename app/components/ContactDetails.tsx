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
      <h2 className="font-display text-base font-semibold text-sky-800">
        Our offices
      </h2>
      <p className="mt-6 text-base text-neutral-600">
        Prefer doing things in person? We don’t but we have to list our
        addresses here for legal reasons.
      </p>
      <Offices className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2" />
      <Border className="mt-16 pt-16">
        <h2 className="font-display text-base font-semibold text-red-500">
          Email us
        </h2>
        <dl className="mt-6 grid grid-cols-1 gap-8 text-sm sm:grid-cols-2">
          {[
            ["Careers", "careers@roofmax.com"],
            ["Sales", "sales@roofmax.com"],
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
      <Border className="mt-16 pt-16">
        <h2 className="font-display text-base font-semibold text-red-500">
          Follow us
        </h2>
        <SocialMedia className="mt-6" />
      </Border>
    </FadeIn>
  );
};

export default ContactDetails;
