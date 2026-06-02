import { useState } from 'react';
import { Link } from 'react-router-dom';
import { portfolioData } from '../../data/portfolioData';
import PortfolioModal from './PortfolioModal';

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProjectId, setSelectedProjectId] = useState(null);

  const filtered = portfolioData.filter(item =>
    activeFilter === 'all' || item.category === activeFilter
  );

  const handleFilter = (filter) => {
    setActiveFilter(filter);
  };

  return (
    <section className="portfolio section" id="portfolio">
      <div className="container">
        <h2 className="section-title padd-15">Portfolio</h2>
        <div className="row">
          <div className="portfolio-filter padd-15">
            <div className="portfolio-filter-inner">
              <button
                type="button"
                className={activeFilter === 'all' ? 'active' : ''}
                data-filter="all"
                onClick={() => handleFilter('all')}
              >
                Everything
              </button>
              <button
                type="button"
                className={activeFilter === 'art' ? 'active' : ''}
                data-filter="art"
                onClick={() => handleFilter('art')}
              >
                Art
              </button>
              <button
                type="button"
                className={activeFilter === 'creative' ? 'active' : ''}
                data-filter="creative"
                onClick={() => handleFilter('creative')}
              >
                Creative
              </button>
              <button
                type="button"
                className={activeFilter === 'design' ? 'active' : ''}
                data-filter="design"
                onClick={() => handleFilter('design')}
              >
                Design
              </button>
            </div>
          </div>
        </div>

        <div className="row">
          {filtered.map(item => (
            <div key={item.id} className="portfolio-item padd-15 show" data-category={item.category}>
              <div
                className="portfolio-item-inner"
                onClick={() => setSelectedProjectId(item.id)}
                style={{ cursor: 'pointer' }}
              >
                <div className="portfolio-item-thumbnail">
                  <img src={item.image} alt={item.title} />
                  <div className="mask"></div>
                </div>
                <span className="term">{item.term}</span>
                <h3 className="portfolio-item-title">{item.title}</h3>
                <span className="more-button">&hellip;</span>
              </div>
            </div>
          ))}
        </div>

        <div className="row" style={{ marginTop: '2rem', justifyContent: 'center' }}>
          <Link to="/portfolio" className="btn btn-default">
            View All Projects
          </Link>
        </div>
      </div>

      {selectedProjectId && (
        <PortfolioModal
          projectId={selectedProjectId}
          onClose={() => setSelectedProjectId(null)}
        />
      )}
    </section>
  );
}
