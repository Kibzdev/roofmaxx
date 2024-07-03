// pages/contact.tsx
import ContactDetails from '../components/ContactDetails';
import Container from '../components/Container';
import PageIntro from '../components/PageIntro';
import ContactForm from '../components/ContactFormy';

const ContactPage = () => {
  return (
    <>
      <div className='mt-40 flex-col'>
        <PageIntro title="Contact Us">
          <p>We cannot wait to hear from you.</p>
        </PageIntro>
        <Container className="flex mt-6">
          <div className="grid grid-cols-1 gap-x-8 gap-y-24 lg:grid-cols-2 mb-4">
            <div className="md:col-span-1">
              <ContactDetails />
            </div>
            <div className="md:col-span-1">
              <ContactForm />
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default ContactPage;
