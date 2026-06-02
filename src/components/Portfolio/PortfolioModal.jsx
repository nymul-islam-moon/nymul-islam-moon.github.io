import { portfolioData } from '../../data/portfolioData';

export default function PortfolioModal({ projectId, onClose }) {
  const project = portfolioData.find(p => p.id === projectId);

  if (!project) return null;

  return (
    <div className="modal" style={{ display: 'block' }} onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <span className="close" onClick={onClose}>&times;</span>

        <img src={project.image} alt={project.title} className="portfolio-modal-image" />

        <h2>{project.title}</h2>
        <p className="portfolio-modal-category">{project.term}</p>

        <p className="portfolio-modal-description">{project.description}</p>

        <div className="portfolio-tech-stack">
          {project.techStack.map((tech, index) => (
            <span key={index} className="tech-badge">{tech}</span>
          ))}
        </div>

        <div className="portfolio-modal-actions">
          <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="btn btn-default">
            <i className="fa-brands fa-github"></i> View Code
          </a>
          <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="btn btn-default">
            <i className="fa-solid fa-arrow-up-right-from-square"></i> Live Demo
          </a>
        </div>
      </div>
    </div>
  );
}
