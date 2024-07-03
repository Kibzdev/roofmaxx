import ContactDetails from '../components/ContactDetails';
import Container from '../components/Container';
import PageIntro from '../components/PageIntro';
import ContactForm from '../components/ContactFormy';

const ContactPage = () => {
  return (
    <>
      <div className='mt-28'>
      <PageIntro eyebrow="Contact us" title="services">
        <p>We can not wait to hear from you.</p>
      </PageIntro>
      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <div className="grid grid-cols-1 gap-x-8 gap-y-24 lg:grid-cols-2 mb-4">
          <ContactDetails />
          <ContactForm />
        </div>
      </Container>
      </div>
    </>
  );
};

export default ContactPage;