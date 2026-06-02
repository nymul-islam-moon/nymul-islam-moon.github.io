import { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import PortfolioModal from '../components/Portfolio/PortfolioModal';
import Footer from '../components/Footer/Footer';

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProjectId, setSelectedProjectId] = useState(null);

  const filteredProjects = activeFilter === 'all'
    ? portfolioData
    : portfolioData.filter(item => item.category === activeFilter);

  const categories = ['all', ...new Set(portfolioData.map(item => item.category))];

  return (
    <main className="main-content" style={{ minHeight: '100vh', paddingTop: '100px' }}>
      <section className="portfolio section" id="portfolio">
        <div className="container">
          <h2 className="section-title padd-15">My Portfolio</h2>

          <div className="row">
            <div className="portfolio-filter padd-15">
              <div className="portfolio-filter-inner">
                {categories.map(category => (
                  <button
                    key={category}
                    type="button"
                    className={activeFilter === category ? 'active' : ''}
                    onClick={() => setActiveFilter(category)}
                  >
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="row">
            {filteredProjects.map(project => (
              <div key={project.id} className="portfolio-item padd-15 show">
                <div
                  className="portfolio-item-inner"
                  onClick={() => setSelectedProjectId(project.id)}
                  style={{ cursor: 'pointer' }}
                >
                  <div className="portfolio-item-thumbnail">
                    <img src={project.image} alt={project.title} />
                    <div className="mask"></div>
                  </div>
                  <span className="term">{project.term}</span>
                  <h3 className="portfolio-item-title">{project.title}</h3>
                  <span className="more-button">&hellip;</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedProjectId && (
        <PortfolioModal
          projectId={selectedProjectId}
          onClose={() => setSelectedProjectId(null)}
        />
      )}

      <Footer />
    </main>
  );
}
