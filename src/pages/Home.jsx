import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Hero from '../components/sections/Hero';
import QuoteForm from '../components/sections/QuoteForm';
import WhyChooseUs from '../components/sections/WhyChooseUs';
import Services from '../components/sections/Services';
import ManufacturingProcess from '../components/sections/ManufacturingProcess';
import Contact from '../components/sections/Contact';
import FAQ from '../components/sections/FAQ';
import { handleHashNavigation } from '../utils/helpers';

export default function Home() {
  useEffect(() => {
    handleHashNavigation();
  }, []);

  return (
    <>
      <Helmet>
        <title>Nexvia | PCB Design & Manufacturing</title>
        <meta name="description" content="Nexvia is a modern PCB design and manufacturing startup focused on premium, cost-effective, industry-ready electronics." />
      </Helmet>
      <Hero />
      <QuoteForm />
      <WhyChooseUs />
      <Services />
      <ManufacturingProcess />
      <Contact />
      <FAQ />
    </>
  );
}
