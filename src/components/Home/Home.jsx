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
            <li><a href="https://stackoverflow.com/users/13756777/nymul-islam-moon" target="_blank" rel="noopener noreferrer" title="Stack Overflow">🔗</a></li>
            <li><a href="https://github.com/nymul-islam-moon" target="_blank" rel="noopener noreferrer" title="GitHub">🐙</a></li>
            <li><a href="https://www.linkedin.com/in/nymul-islam-moon-5b7622200/" target="_blank" rel="noopener noreferrer" title="LinkedIn">💼</a></li>
            <li><a href="https://www.facebook.com/nymulislammoon/" target="_blank" rel="noopener noreferrer" title="Facebook">📘</a></li>
            <li><a href="https://medium.com/@nymulislam.dev" target="_blank" rel="noopener noreferrer" title="Medium">📝</a></li>
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
