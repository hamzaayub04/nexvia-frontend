import { FaGraduationCap, FaTags, FaIndustry } from 'react-icons/fa';
import benefits from '../../data/benefits.json';
import ScrollReveal from '../ui/ScrollReveal';

const iconMap = {
  FaGraduationCap,
  FaTags,
  FaIndustry,
};

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="section">
      <div className="container">
        <ScrollReveal>
          <div className="section-eyebrow">Why Us</div>
          <h2 className="section-title">
            Built for <span>practical hardware</span> teams
          </h2>
        </ScrollReveal>
        <div className="benefits-grid">
          {benefits.map((benefit) => {
            const IconComponent = iconMap[benefit.icon];
            return (
              <article key={benefit.id} className="card benefit-card reveal">
                <span className="benefit-tag">{benefit.tag}</span>
                <div className="benefit-icon">
                  {IconComponent && <IconComponent />}
                </div>
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
