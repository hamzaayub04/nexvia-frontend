import { useState } from 'react';
import projectsData from '../../data/projects.json';
import ProjectModal from './ProjectModal';
import ScrollReveal from '../ui/ScrollReveal';

export default function Projects({ limit, showHeader = true }) {
  const [selectedProject, setSelectedProject] = useState(null);
  const projects = limit
    ? Object.values(projectsData).slice(0, limit)
    : Object.values(projectsData);

  const openProject = (key) => {
    setSelectedProject(projectsData[key]);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = '';
  };

  return (
    <section id="projects">
      <div className="container">
        {showHeader && (
          <ScrollReveal>
            <div className="section-eyebrow">Our Projects</div>
            <h2 className="section-title">
              Featured <span>Projects</span>
            </h2>
            <p className="section-sub">
              Click any project to explore full details, or hover to flip between
              front and back PCB views.
            </p>
          </ScrollReveal>
        )}

        <div className="projects-grid">
          {projects.map((project) => (
            <article
              key={project.id}
              className={`project-card ${project.size === 'large' ? 'large' : ''} ${project.size === 'wide' ? 'wide' : ''} reveal`}
              onClick={() => openProject(project.id)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  openProject(project.id);
                }
              }}
              tabIndex={0}
              role="button"
              aria-label={`View details of ${project.title}`}
            >
              <div className="flip-wrap">
                <div className="flip-inner">
                  <div className="flip-f">
                    <img
                      src={project.front}
                      alt={`${project.title} Front`}
                      onError={(e) => {
                        e.target.parentElement.innerHTML =
                          '<div class="pcb-placeholder"></div>';
                      }}
                    />
                    <span className="flip-badge">Front</span>
                  </div>
                  <div className="flip-b">
                    <img
                      src={project.back}
                      alt={`${project.title} Back`}
                      onError={(e) => {
                        e.target.parentElement.innerHTML =
                          '<div class="pcb-placeholder"></div>';
                      }}
                    />
                    <span className="flip-badge">Back</span>
                  </div>
                </div>
              </div>
              <div className="project-info">
                <h4>{project.title}</h4>
                <p>{project.summary}</p>
                <span className="project-link">
                  <i className="fas fa-arrow-right"></i> View Details
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>

      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={closeModal} />
      )}
    </section>
  );
}
