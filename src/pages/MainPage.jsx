import { useState, useEffect } from 'react';
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
  );
}
