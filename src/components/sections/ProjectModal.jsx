import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function ProjectModal({ project, onClose }) {
  const [flipped, setFlipped] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    requestAnimationFrame(() => setVisible(true));

    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  const handleClose = () => {
    setVisible(false);
    setTimeout(onClose, 300);
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) handleClose();
  };

  return (
    <div
      className={`modal ${visible ? 'open visible' : 'open'}`}
      onClick={handleBackdropClick}
    >
      <div className="modal-panel">
        <button className="modal-close" onClick={handleClose}>
          <i className="fas fa-times"></i>
        </button>

        <div className="modal-img-col">
          <div
            className={`modal-flip-wrap ${flipped ? 'flipped' : ''}`}
            onClick={() => setFlipped(!flipped)}
          >
            <div className="modal-flip-inner">
              <div className="modal-face modal-face-front">
                <img src={project.front} alt={`${project.title} Front`} />
                <span className="modal-face-label">Front</span>
              </div>
              <div className="modal-face modal-face-back">
                <img src={project.back} alt={`${project.title} Back`} />
                <span className="modal-face-label">Back</span>
              </div>
            </div>
          </div>
          <p className="modal-flip-hint">
            &#8635; Hover or click to flip between front &amp; back
          </p>
        </div>

        <div className="modal-text-col">
          <h2 className="modal-title">{project.title}</h2>
          <p className="modal-summary">{project.summary}</p>
          <p className="modal-desc">{project.detail}</p>
          <div className="modal-notes">
            {project.notes.map((note, i) => (
              <div key={i} className="modal-note">
                <i className="fas fa-check-circle"></i>
                <span>{note}</span>
              </div>
            ))}
          </div>
          <Link
            to="/quote"
            className="btn btn-primary"
            style={{ alignSelf: 'flex-start' }}
            onClick={handleClose}
          >
            <i className="fas fa-paper-plane"></i> Start Similar Project
          </Link>
        </div>
      </div>
    </div>
  );
}
