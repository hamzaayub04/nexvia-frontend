import { Helmet } from 'react-helmet-async';
import QuoteForm from '../components/sections/QuoteForm';

export default function QuotePage() {
  return (
    <>
      <Helmet>
        <title>Get a Quote | Nexvia</title>
        <meta name="description" content="Request a quote for your PCB design and manufacturing project." />
      </Helmet>
      <section className="section" style={{ paddingTop: '140px' }}></section>
      <QuoteForm />
    </>
  );
}
