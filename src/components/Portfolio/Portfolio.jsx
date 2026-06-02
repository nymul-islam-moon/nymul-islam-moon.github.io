import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { portfolioData } from '../../data/portfolioData';
import { formatCategoryName } from '../../utils/stringUtils';
import PortfolioModal from './PortfolioModal';

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProjectId, setSelectedProjectId] = useState(null);

  const categories = useMemo(() => ['all', ...new Set(portfolioData.map(item => item.category))], []);

  const filtered = useMemo(
    () => activeFilter === 'all' ? portfolioData : portfolioData.filter(item => item.category === activeFilter),
    [activeFilter]
  );

  return (
    <section className="portfolio section" id="portfolio">
      <div className="container">
        <h2 className="section-title padd-15">Portfolio</h2>
        <div className="row">
          <div className="portfolio-filter padd-15">
            <div className="portfolio-filter-inner">
              {categories.map(category => (
                <button
                  key={category}
                  type="button"
                  className={activeFilter === category ? 'active' : ''}
                  data-filter={category}
                  onClick={() => setActiveFilter(category)}
                >
                  {formatCategoryName(category)}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="row">
          {filtered.map(item => (
            <div key={item.id} className="portfolio-item padd-15 show" data-category={item.category}>
              <div
                className="portfolio-item-inner"
                onClick={() => setSelectedProjectId(item.id)}
              >
                <div className="portfolio-item-thumbnail">
                  <img src={item.image} alt={item.title} loading="lazy" />
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
