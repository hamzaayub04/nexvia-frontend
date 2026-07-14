import { Helmet } from 'react-helmet-async';
import Leadership from '../components/sections/Leadership';
import WhyChooseUs from '../components/sections/WhyChooseUs';
import ScrollReveal from '../components/ui/ScrollReveal';

export default function About() {
  return (
    <>
      <Helmet>
        <title>About | Nexvia</title>
        <meta name="description" content="Learn about Nexvia - our mission, leadership, and commitment to PCB excellence." />
      </Helmet>
      <section className="section" style={{ paddingTop: '140px' }}>
        <div className="container">
          <ScrollReveal>
            <div className="section-eyebrow">About Us</div>
            <h2 className="section-title">
              Engineering <span>precision</span> into every board
            </h2>
            <p className="section-sub">
              Nexvia was founded with a clear mission: make professional-grade PCB design and manufacturing
              accessible to students, startups, and hardware teams. We combine hands-on engineering expertise
              with modern design practices to deliver boards that perform in the real world.
            </p>
          </ScrollReveal>
        </div>
      </section>
      <WhyChooseUs />
      <Leadership />
    </>
  );
}
