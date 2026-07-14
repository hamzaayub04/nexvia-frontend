import { FaEnvelope, FaWhatsapp, FaMapMarkerAlt } from 'react-icons/fa';
import contactData from '../../data/contact.json';
import ScrollReveal from '../ui/ScrollReveal';

const iconMap = {
  FaEnvelope,
  FaWhatsapp,
  FaMapMarkerAlt,
};

export default function Contact() {
  return (
    <section id="contact">
      <div className="container">
        <ScrollReveal>
          <div className="section-eyebrow">Contact</div>
          <h2 className="section-title">
            Reach <span>Nexvia</span> directly
          </h2>
        </ScrollReveal>
        <div className="contact-details-card reveal">
          {contactData.map((item) => {
            const IconComponent = iconMap[item.icon];
            const isLink = item.type === 'link';
            return (
              <div key={item.id} className="contact-item">
                <span className="contact-label">{item.label}</span>
                {isLink ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-value"
                  >
                    {IconComponent && <IconComponent />}
                    {item.value}
                  </a>
                ) : (
                  <span className="contact-value plain">
                    {IconComponent && <IconComponent />}
                    {item.value}
                  </span>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
