import { motion } from 'framer-motion';
import GreenStepsImg from '../assets/greenstep-dashboard.png';
import KiddoQuizImg from '../assets/kiddoQuiz.png';

const projects = [
  {
    title: 'GreenSteps',
    description: 'An eco-friendly platform tracking carbon footprints with interactive dashboards and sustainability tips.',
    technologies: ['React','Bootstrap','Chart.js' ],
    github: 'https://github.com/webdev-ritu/greenstep.git',
    deploy: 'https://greensteps-697dc.web.app/',
    image: GreenStepsImg
  },
  {
    title: 'KiddoQuiz',
    description: 'KiddoQuiz is an engaging and educational quiz app designed for children. It offers fun categories, real-time feedback with sounds, animated visuals, and a playful user interface to make learning enjoyable. ',
    technologies: ['React', 'Bootstrap', 'Firebase', 'Howler.js','Lottie Files'],
    github: 'https://github.com/webdev-ritu/kiddoquiz.git',
    deploy: 'https://kiddoquiz-ced8c.web.app',
    image: KiddoQuizImg
  }
];

export default function Projects() {
  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2>Featured Projects</h2>
          
          <div className="projects-grid">
            {projects.map((project, index) => (
              <motion.div 
                key={project.title}
                className="project-card"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="project-image-container">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="project-image"
                  />
                  <div className="image-overlay"></div>
                </div>
                
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  
                  <div className="tech-tags">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="project-links">
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="project-link github"
                    >
                      GitHub Repo
                    </a>
                    <a 
                      href={project.deploy} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="project-link deploy"
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}