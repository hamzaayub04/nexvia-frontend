import processSteps from '../../data/process.json';
import ScrollReveal from '../ui/ScrollReveal';

export default function ManufacturingProcess() {
  return (
    <section id="process" className="section">
      <div className="container">
        <ScrollReveal>
          <div className="section-eyebrow">Process</div>
          <h2 className="section-title">
            Requirement to delivery in <span>five clear steps</span>
          </h2>
        </ScrollReveal>
        <div className="process-track">
          {processSteps.map((step) => (
            <div key={step.step} className="step-card reveal">
              <div className="step-num">{step.step}</div>
              <h4>{step.title}</h4>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
