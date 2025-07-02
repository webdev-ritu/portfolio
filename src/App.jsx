import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import ParticlesBackground from './components/ParticlesBackground';
import './styles/global.css';

export default function App() {
  const [theme, setTheme] = useState('dark');
  const [scrollProgress, setScrollProgress] = useState(0);

  // Set theme on initial load
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  // Scroll progress tracker
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.body.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Theme toggle handler
  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  // Page transition variants
  const pageVariants = {
    initial: { opacity: 0 },
    animate: { 
      opacity: 1,
      transition: { duration: 0.5 }
    },
    exit: { opacity: 0 }
  };

  return (
    <div className={`app ${theme}`}>
      {/* Scroll progress indicator */}
      <div 
        className="scroll-progress" 
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Particles background (only on home section) */}
      <ParticlesBackground />

      {/* Navbar with theme toggle */}
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      {/* Main content with smooth transitions */}
      <AnimatePresence mode="wait">
        <motion.main
          key="main-content"
          initial="initial"
          animate="animate"
          exit="exit"
          variants={pageVariants}
        >
          <Home />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </motion.main>
      </AnimatePresence>

      {/* Footer */}
      <Footer />
    </div>
  );
}
