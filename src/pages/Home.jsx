import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { useState, useEffect, useCallback } from 'react';
import ParticlesBackground from '../components/ParticlesBackground';

const Typewriter = ({ 
  texts = [], 
  typingSpeed = 150, 
  deletingSpeed = 50, 
  delayBetweenTexts = 2000 
}) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  const typeText = useCallback(() => {
    const currentText = texts[currentIndex % texts.length];
    
    if (isTyping) {
      if (displayedText.length < currentText.length) {
        setTimeout(() => {
          setDisplayedText(currentText.substring(0, displayedText.length + 1));
        }, typingSpeed);
      } else {
        setTimeout(() => setIsTyping(false), delayBetweenTexts);
      }
    } else {
      if (displayedText.length > 0) {
        setTimeout(() => {
          setDisplayedText(displayedText.substring(0, displayedText.length - 1));
        }, deletingSpeed);
      } else {
        setIsTyping(true);
        setCurrentIndex(currentIndex + 1);
      }
    }
  }, [displayedText, currentIndex, isTyping, texts, typingSpeed, deletingSpeed, delayBetweenTexts]);

  useEffect(() => {
    const timer = setTimeout(typeText, 100);
    return () => clearTimeout(timer);
  }, [typeText]);

  return (
    <span className="typewriter-text">
      {displayedText}
      <span className="typewriter-cursor">|</span>
    </span>
  );
};

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="home" className="home-section">
      <div className="gradient-bg">
        <div className="gradients-container">
          <div className="g1"></div>
          <div className="g2"></div>
          <div className="g3"></div>
        </div>
      </div>

      <ParticlesBackground />

      <div className="container">
        <motion.div
          className="home-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants}>
            <h4 className="greeting">Hi, my name is</h4>
          </motion.div>

          <motion.h1 variants={itemVariants}>
            Ritu Saxena.
          </motion.h1>

          <motion.h2 variants={itemVariants} className="typewriter-container">
            <Typewriter 
              texts={[
                'MERN Stack Developer',
                'UI/UX Designer',
                'Web Designer'
              ]}
            />
          </motion.h2>

          <motion.p 
            className="intro-text"
            variants={itemVariants}
          >
            I build exceptional digital experiences with modern technologies. 
            Currently focused on creating accessible, human-centered web applications.
          </motion.p>

          <motion.div 
            className="cta-buttons"
            variants={itemVariants}
          >
            <Link 
              to="projects" 
              smooth={true} 
              duration={500} 
              className="btn primary-btn"
            >
              View My Work
            </Link>
            <Link 
              to="contact" 
              smooth={true} 
              duration={500} 
              className="btn secondary-btn"
            >
              Contact Me
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}