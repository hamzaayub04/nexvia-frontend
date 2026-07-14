import { Helmet } from 'react-helmet-async';
import Contact from '../components/sections/Contact';
import FAQ from '../components/sections/FAQ';

export default function ContactPage() {
  return (
    <>
      <Helmet>
        <title>Contact | Nexvia</title>
        <meta name="description" content="Get in touch with Nexvia for PCB design and manufacturing inquiries." />
      </Helmet>
      <section className="section" style={{ paddingTop: '140px' }}></section>
      <Contact />
      <FAQ />
    </>
  );
}
