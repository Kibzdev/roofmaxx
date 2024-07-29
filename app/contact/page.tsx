import ContactDetails from '../components/ContactDetails';

import PageIntro from '../components/PageIntro';
import ContactForm from '../components/ContactFormy';
import GetStartedCTO from '../components/GetStartedCTO';
import StylizedImage from '../components/contact/ContactStyleImg';
import { contactImg } from '@/public/assets';
import FadeIn from '../components/FadeIn';

const ContactPage = () => {
  return (
    <>
      <div className='mt-40 flex-col'>
        <PageIntro eyebrow='Contact us' title="Get In Touch with Experts" >
          <p className='mt-4 text-gray-500 tracking-normal md:text-lg text-sm'>
            Ready to start your project? Contact us today and let &lsquo;s build the future together.
          </p>
        </PageIntro>
        <div className="flex flex-col w-full mt-16">
          <div className="flex w-full flex-col-reverse gap-x-8 gap-y-24 lg:grid-cols-2 mb-4">
            <div className="flex flex-col w-full md:max-w-6xl   px-4 md:col-span-1 mx-auto">
              <ContactDetails />
            </div>
            <div className='flex flex-col-reverse md:flex-row md:w-full'>
              <div className='hidden md:flex justify-center lg:w-1/2 lg:justify-end lg:pr-12'>
                <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
                  <StylizedImage 
                    src={contactImg}  
                    sizes="(min-width: 1024px) 41rem, 31rem" 
                    className="justify-center lg:justify-end"
                    width={440}
                    height={450}
                  />
                </FadeIn>
              </div>
              <div className='w-full flex items-center justify-center'>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
        <GetStartedCTO />
      </div>
    </>
  );
};

export default ContactPage;
