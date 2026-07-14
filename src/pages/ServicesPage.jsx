import { Helmet } from 'react-helmet-async';
import Services from '../components/sections/Services';
import ManufacturingProcess from '../components/sections/ManufacturingProcess';
import { Link } from 'react-router-dom';
import ScrollReveal from '../components/ui/ScrollReveal';

export default function ServicesPage() {
  return (
    <>
      <Helmet>
        <title>Services | Nexvia</title>
        <meta name="description" content="Explore Nexvia's PCB design, manufacturing, assembly, and consultancy services." />
      </Helmet>
      <section className="section" style={{ paddingTop: '140px' }}>
        <div className="container">
          <ScrollReveal>
            <div className="section-eyebrow">Our Services</div>
            <h2 className="section-title">
              End-to-end <span>PCB solutions</span>
            </h2>
            <p className="section-sub">
              From initial concept to final production, we handle every step of the PCB development process.
            </p>
            <div style={{ marginTop: '24px' }}>
              <Link to="/quote" className="btn btn-primary">
                <i className="fas fa-paper-plane"></i> Get a Quote
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
      <Services />
      <ManufacturingProcess />
    </>
  );
}
