import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

export default function Header({ onThemeToggle }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasScroll, setHasScroll] = useState(false);
  const [activeLink, setActiveLink] = useState('home');
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 80) {
        setHasScroll(true);
      } else {
        setHasScroll(false);
      }

      // Nav highlighter
      if (location.pathname === '/') {
        const sections = document.querySelectorAll("section[id]");
        let scrollY = window.pageYOffset;

        sections.forEach(current => {
          const sectionHeight = current.offsetHeight;
          const sectionTop = current.offsetTop - 100;
          const sectionId = current.getAttribute("id");

          if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            setActiveLink(sectionId);
          }
        });

        // Special handling for contact section
        const contactSection = document.querySelector('#contact');
        if (contactSection) {
          const contactTop = contactSection.offsetTop - 100;
          const documentHeight = document.documentElement.scrollHeight;
          const windowHeight = window.innerHeight;

          if (scrollY + windowHeight >= documentHeight - 50 || scrollY >= contactTop) {
            setActiveLink('contact');
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location]);

  const closeMenu = () => setIsMenuOpen(false);

  const handleHomeClick = () => {
    closeMenu();
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/');
      window.scrollTo({ top: 0, behavior: 'auto' });
    }
  };

  const handleSectionClick = (sectionId) => {
    closeMenu();
    if (location.pathname === '/') {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  return (
    <header className={`header ${hasScroll ? 'scroll-header' : ''}`} id="header">
      <nav className="nav container padd-15">
        <Link to="/" className="nav-logo">
          <h2>Moon</h2>
        </Link>

        <div className={`nav-menu ${isMenuOpen ? 'show-menu' : ''}`} id="nav-menu">
          <ul className="nav-list">
            <li className="nav-item">
              <Link
                to="/"
                className={`nav-link ${location.pathname === '/' && activeLink === 'home' ? 'active-link' : ''}`}
                onClick={handleHomeClick}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <a
                href="#about"
                className={`nav-link ${location.pathname === '/' && activeLink === 'about' ? 'active-link' : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleSectionClick('about');
                }}
              >
                About
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#experience"
                className={`nav-link ${location.pathname === '/' && activeLink === 'experience' ? 'active-link' : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleSectionClick('experience');
                }}
              >
                Experience
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#pricing"
                className={`nav-link ${location.pathname === '/' && activeLink === 'pricing' ? 'active-link' : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleSectionClick('pricing');
                }}
              >
                Pricing
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#portfolio"
                className={`nav-link ${location.pathname === '/' && activeLink === 'portfolio' ? 'active-link' : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleSectionClick('portfolio');
                }}
              >
                Portfolio
              </a>
            </li>
            <li className="nav-item">
              <Link
                to="/blog"
                className={`nav-link ${location.pathname === '/blog' ? 'active-link' : ''}`}
                onClick={closeMenu}
              >
                Blog
              </Link>
            </li>
            <li className="nav-item">
              <a
                href="#contact"
                className={`nav-link ${location.pathname === '/' && activeLink === 'contact' ? 'active-link' : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleSectionClick('contact');
                }}
              >
                Contact
              </a>
            </li>
          </ul>

          <div className="nav-close" id="nav-close" onClick={closeMenu}>
            <i className="lni lni-close"></i>
          </div>
        </div>

        <div className="nav-btns">
          <i
            className="lni lni-pallet change-theme"
            id="theme-button"
            onClick={onThemeToggle}
          ></i>
          <div className="nav-toggle" id="nav-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <i className="lni lni-grid-alt"></i>
          </div>
        </div>
      </nav>
    </header>
  );
}
