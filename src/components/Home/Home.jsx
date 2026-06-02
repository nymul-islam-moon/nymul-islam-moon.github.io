import TypingAnimation from '../TypingAnimation/TypingAnimation';

export default function Home() {
  return (
    <section className="home" id="home">
      <div className="container">
        <div className="intro">
          <img src="https://avatars.githubusercontent.com/u/67011212?v=4" alt="Nymul Islam Moon" />
          <h1>Nymul Islam Moon</h1>
          <span><TypingAnimation /></span>

          <ul className="social-icons">
            <li><a href="#"><i className="fa-brands fa-instagram"></i></a></li>
            <li><a href="#"><i className="fa-brands fa-twitter"></i></a></li>
            <li><a href="#"><i className="fa-brands fa-behance"></i></a></li>
            <li><a href="#"><i className="fa-brands fa-facebook"></i></a></li>
            <li><a href="#"><i className="fa-brands fa-github"></i></a></li>
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
