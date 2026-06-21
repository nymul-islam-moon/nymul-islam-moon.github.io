import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Home from '../components/Home/Home';
import About from '../components/About/About';
import Services from '../components/Services/Services';
import Experience from '../components/Experience/Experience';
import Pricing from '../components/Pricing/Pricing';
import Portfolio from '../components/Portfolio/Portfolio';
import Testimonials from '../components/Testimonials/Testimonials';
import BlogPreview from '../components/BlogPreview/BlogPreview';
import BlogModal from '../components/BlogModal/BlogModal';
import Contact from '../components/Contact/Contact';
import Footer from '../components/Footer/Footer';

export default function MainPage() {
  const [selectedBlogId, setSelectedBlogId] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 0);
  }, []);

  const handleBlogClick = (blogId) => {
    setSelectedBlogId(blogId);
  };

  const handleCloseBlogModal = () => {
    setSelectedBlogId(null);
  };

  return (
    <>
      <Helmet>
        <title>Nymul Islam Moon - AI & Backend Engineer | Portfolio & Projects</title>
        <meta name="description" content="Explore the portfolio of Nymul Islam Moon, an Applied AI & Backend Engineer specializing in RAG systems, Python, FastAPI, and enterprise backends. View projects, services, and experience." />
        <meta name="keywords" content="AI Engineer, Backend Developer, Python, FastAPI, RAG Systems, LLM Projects, AI Infrastructure, Portfolio, Bangladesh" />
        <meta property="og:title" content="Nymul Islam Moon - Portfolio" />
        <meta property="og:description" content="Explore my AI engineering portfolio, projects, and professional experience in building scalable AI systems." />
        <link rel="canonical" href="https://nymul-islam-moon.github.io/" />
      </Helmet>
      <main className="main-content">
        <Home />
        <About />
        <Services />
        <Experience />
        <Pricing />
        <Portfolio />
        <Testimonials />
        <BlogPreview onBlogClick={handleBlogClick} />
        <Contact />
        <Footer />
        <BlogModal blogId={selectedBlogId} onClose={handleCloseBlogModal} />
      </main>
    </>
  );
}
