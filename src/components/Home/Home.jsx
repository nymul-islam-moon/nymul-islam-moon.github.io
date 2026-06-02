import TypingAnimation from '../TypingAnimation/TypingAnimation';

export default function Home() {
  return (
    <section className="home" id="home">
      <div className="container">
        <div className="intro">
          <div className="about-img-container">
            <div className="glassmorphism-glow glow-1"></div>
            <div className="glassmorphism-glow glow-2"></div>
            <div className="about-img-wrapper">
              <img src="https://avatars.githubusercontent.com/u/67011212?v=4" alt="Nymul Islam Moon" />
            </div>
          </div>
          <h1>Nymul Islam Moon</h1>
          <span><TypingAnimation /></span>

          <ul className="social-icons">
            <li><a href="https://stackoverflow.com/users/13756777/nymul-islam-moon" target="_blank" rel="noopener noreferrer" title="Stack Overflow">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.16 16.29H6.84v2.49h10.32v-2.49zm-7.91-6.28l8.18 1.71.36-1.71-8.18-1.72-.36 1.72zM7.59 9.6l7.59-3.58-.75-1.59L6.84 8zm6.84-6.75L5.93 5.59l1.13 1.44 8.5-3.74-1.13-1.44zM4.4 19.78h10.32v-2.49H4.4v2.49z"/></svg>
            </a></li>
            <li><a href="https://github.com/nymul-islam-moon" target="_blank" rel="noopener noreferrer" title="GitHub">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            </a></li>
            <li><a href="https://www.linkedin.com/in/nymul-islam-moon-5b7622200/" target="_blank" rel="noopener noreferrer" title="LinkedIn">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.731-2.004 1.437-.103.252-.129.604-.129.955v5.413h-3.554V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.931-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.134-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/></svg>
            </a></li>
            <li><a href="https://www.facebook.com/nymulislammoon/" target="_blank" rel="noopener noreferrer" title="Facebook">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </a></li>
            <li><a href="https://medium.com/@nymulislam.dev" target="_blank" rel="noopener noreferrer" title="Medium">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M2.846 6.887c.03-.295-.083-.586-.303-.784l-2.24-2.7v-.403h6.958l5.378 11.795 4.728-11.795h6.633v.403l-1.916 1.837c-.153.117-.231.302-.215.487v12.27c-.016.185.062.37.215.487l1.916 1.837v.403h-9.695v-.403l1.916-1.837c.153-.117.231-.302.215-.487v-10.37l-5.332 13.737h-.72l-6.216-13.737v9.21c-.044.382.097.77.526 1.047l2.497 1.916v.403h-7.09v-.403l2.497-1.916c.43-.276.57-.665.526-1.047v-10.605z"/></svg>
            </a></li>
          </ul>

          <div>
            <a href="https://www.linkedin.com/in/nymul-islam-moon-5b7622200/" target="_blank" rel="noopener noreferrer" className="btn btn-default">Hire Me</a>
          </div>

          <div className="scroll-down">
            <a href="#about" className="mouse-wrapper">
              <span>Scroll Down</span>
              <span className="mouse">
                <span className="wheel"></span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
