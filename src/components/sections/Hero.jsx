import { Link } from 'react-router-dom';
import ScrollReveal from '../ui/ScrollReveal';

export default function Hero() {
  return (
    <section id="home" className="section">
      <div className="container">
        <div className="hero-grid">
          <ScrollReveal>
            <div className="hero-eyebrow">PCB Design & Manufacturing</div>
            <h1 className="hero-title">
              Precision <span>PCB Design</span> & Manufacturing
            </h1>
            <p className="hero-desc">
              Nexvia delivers modern PCB design, manufacturing, assembly, and
              consultancy. We help students, startups, and hardware teams move from
              idea to production-ready boards with confidence.
            </p>
            <div className="hero-btns">
              <Link to="/quote" className="btn btn-primary">
                <i className="fas fa-paper-plane"></i> Get a Quote
              </Link>
              <Link to="/projects" className="btn btn-outline">
                See Projects
              </Link>
            </div>
            <div className="hero-highlights">
              <div className="highlight-item">
                <i className="fas fa-graduation-cap"></i> Student-friendly
              </div>
              <div className="highlight-item">
                <i className="fas fa-tags"></i> Cost-effective
              </div>
              <div className="highlight-item">
                <i className="fas fa-industry"></i> Industry-ready
              </div>
            </div>
          </ScrollReveal>

          <div className="hero-visual reveal">
            <svg viewBox="0 0 460 460" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="3.5" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>
              <g
                fill="none"
                stroke="#22B46A"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                filter="url(#glow)"
              >
                <path className="trace-anim" d="M 60,380 L 60,280 L 160,180 L 250,180 L 310,120 L 420,120" />
                <path className="trace-anim d1" d="M 100,420 L 100,320 L 200,220 L 310,220 L 360,170 L 400,170" />
                <path className="trace-anim d2" d="M 140,460 L 140,360 L 240,260 L 240,80 L 340,40" />
                <path className="trace-anim d3" d="M 380,380 L 280,380 L 240,340 L 240,260" />
              </g>
              <g filter="url(#glow)">
                <circle cx="60" cy="380" r="5" fill="#111" stroke="#22B46A" strokeWidth="2" />
                <circle cx="420" cy="120" r="7" fill="#22B46A" />
                <circle cx="100" cy="420" r="5" fill="#111" stroke="#22B46A" strokeWidth="2" />
                <circle cx="400" cy="170" r="7" fill="#22B46A" />
                <circle cx="340" cy="40" r="7" fill="#22B46A" />
                <circle cx="250" cy="180" r="4" fill="#111" stroke="#22B46A" strokeWidth="2" />
                <circle cx="310" cy="220" r="4" fill="#111" stroke="#22B46A" strokeWidth="2" />
                <circle cx="380" cy="380" r="5" fill="#111" stroke="#22B46A" strokeWidth="2" />
              </g>
              <circle className="pulse-circle" cx="420" cy="120" r="14" fill="none" stroke="#22B46A" strokeWidth="1.5" />
              <circle className="pulse-circle d1" cx="400" cy="170" r="14" fill="none" stroke="#22B46A" strokeWidth="1.5" />
              <circle className="pulse-circle d2" cx="340" cy="40" r="14" fill="none" stroke="#22B46A" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
