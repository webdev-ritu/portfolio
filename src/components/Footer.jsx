import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import '../styles/Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="social-links">
          <a href="https://github.com/webdev-ritu" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/ritu-saxena-78325334b/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          
        </div>
        <p>© {currentYear} My Portfolio. All rights reserved.</p>
      </div>
    </footer>
  );
}