// pages/contact.tsx
import ContactDetails from '../components/ContactDetails';
import Container from '../components/Container';
import PageIntro from '../components/PageIntro';
import ContactForm from '../components/ContactFormy';
import GetStartedCTO from '../components/GetStartedCTO';

const ContactPage = () => {
  return (
    <>
      <div className='mt-40 flex-col'>
        <PageIntro  eyebrow='Contact us'  title="Get In Touch with Experts" >
          <p className='mt-4 text-gray-500 tracking-normal md:text-lg text-sm'>Ready to start your project? Contact us today and lets build the future together.</p>
        </PageIntro>
        <Container className="flex mt-16">
          <div className="grid grid-cols-1 gap-x-8 gap-y-24 lg:grid-cols-2 mb-4">
            <div className="md:col-span-1">
              <ContactDetails />
            </div>
            <div className="md:col-span-1">
              <ContactForm />
            </div>
          </div>
        </Container>
        <GetStartedCTO/>
      </div>
    </>
  );
};

export default ContactPage;