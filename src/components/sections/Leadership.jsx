import leadershipData from '../../data/leadership.json';
import ScrollReveal from '../ui/ScrollReveal';

export default function Leadership() {
  const { founder, mission } = leadershipData;

  return (
    <section id="leadership" className="section">
      <div className="container">
        <ScrollReveal>
          <div className="section-eyebrow">Leadership</div>
          <h2 className="section-title">
            Founder's <span>Vision</span>
          </h2>
        </ScrollReveal>
        <div className="leadership-grid">
          <article className="card founder-card reveal">
            <div className="founder-head">
              <div className="founder-avatar">
                <img
                  src={founder.avatar}
                  alt={founder.name}
                  onError={(e) => {
                    e.target.src =
                      "data:image/svg+xml;charset=UTF-8,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 200 200%22%3E%3Crect width=%22200%22 height=%22200%22 rx=%2234%22 fill=%22%230f0f0f%22/%3E%3Ccircle cx=%22100%22 cy=%2278%22 r=%2230%22 fill=%2222B46A%22 opacity=%220.7%22/%3E%3Cpath d=%22M40 160 C55 125, 145 125, 160 160%22 stroke=%2222B46A%22 stroke-width=%2212%22 fill=%22none%22 stroke-linecap=%22round%22/%3E%3C/svg%3E";
                  }}
                />
              </div>
              <div>
                <h3>{founder.name}</h3>
                <p>{founder.role}</p>
              </div>
            </div>
            <p className="founder-bio">{founder.bio}</p>
          </article>

          <article className="card mission-card reveal">
            <h3>Our Mission</h3>
            <div className="mission-quote" style={{ marginTop: '20px' }}>
              {mission}
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
