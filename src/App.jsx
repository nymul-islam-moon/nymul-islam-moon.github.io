import { useState } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Header from './components/Header/Header';
import ThemeCustomizer from './components/ThemeCustomizer/ThemeCustomizer';
import BackToTop from './components/BackToTop/BackToTop';
import MainPage from './pages/MainPage';
import BlogPage from './pages/BlogPage';
import PortfolioPage from './pages/PortfolioPage';
import './assets/css/style.css';

export default function App() {
  const [isThemeOpen, setIsThemeOpen] = useState(false);

  const handleThemeToggle = () => {
    setIsThemeOpen(!isThemeOpen);
  };

  const handleThemeClose = () => {
    setIsThemeOpen(false);
  };

  return (
    <HelmetProvider>
      <HashRouter>
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          <Header onThemeToggle={handleThemeToggle} />
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
          </Routes>
          <ThemeCustomizer isOpen={isThemeOpen} onClose={handleThemeClose} />
          <BackToTop />
        </div>
      </HashRouter>
    </HelmetProvider>
  );
}
