import { FaPencilRuler, FaCogs, FaLayerGroup, FaUserTie } from 'react-icons/fa';
import servicesData from '../../data/services.json';
import ScrollReveal from '../ui/ScrollReveal';

const iconMap = {
  FaPencilRuler,
  FaCogs,
  FaLayerGroup,
  FaUserTie,
};

export default function Services() {
  return (
    <section id="services">
      <div className="container">
        <ScrollReveal>
          <div className="section-eyebrow">Services</div>
          <h2 className="section-title">
            Core services built around <span>PCB delivery</span>
          </h2>
        </ScrollReveal>
        <div className="services-grid">
          {servicesData.map((service) => {
            const IconComponent = iconMap[service.icon];
            return (
              <article key={service.id} className="service-card reveal">
                <div className="service-icon">
                  {IconComponent && <IconComponent />}
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
