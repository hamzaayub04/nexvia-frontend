import { useState } from 'react';
import faqs from '../../data/faqs.json';
import ScrollReveal from '../ui/ScrollReveal';

export default function FAQ() {
  const [openId, setOpenId] = useState(null);

  const toggle = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faqs" className="section">
      <div className="container">
        <ScrollReveal style={{ textAlign: 'center' }}>
          <div className="section-eyebrow" style={{ margin: '0 auto 18px' }}>
            FAQs
          </div>
          <h2 className="section-title">
            Common <span>Questions</span>
          </h2>
        </ScrollReveal>
        <div className="faq-wrap">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className={`reveal ${openId === faq.id ? 'faq-open' : ''}`}
            >
              <details open={openId === faq.id} onClick={(e) => { e.preventDefault(); toggle(faq.id); }}>
                <summary>{faq.question}</summary>
                {openId === faq.id && <p>{faq.answer}</p>}
              </details>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
