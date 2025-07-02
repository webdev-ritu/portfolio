import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaFigma, FaGithub, FaPython } from 'react-icons/fa';
import { SiExpress, SiMongodb, SiJavascript, SiHtml5, SiCss3, SiGit } from 'react-icons/si';

const skills = [
  { name: 'React', icon: <FaReact size={32} />, color: '#61DAFB' },
  { name: 'JavaScript', icon: <SiJavascript size={32} />, color: '#F7DF1E' },
  { name: 'HTML5', icon: <SiHtml5 size={32} />, color: '#E34F26' },
  { name: 'CSS3', icon: <SiCss3 size={32} />, color: '#1572B6' },
  { name: 'Node.js', icon: <FaNodeJs size={32} />, color: '#68A063' },
  { name: 'Express.js', icon: <SiExpress size={28} className="text-black dark:text-white" /> },
  { name: 'MongoDB', icon: <SiMongodb size={32} />, color: '#47A248' },
  { name: 'Figma', icon: <FaFigma size={32} />, color: '#F24E1E' },
  { name: 'Git', icon: <SiGit size={32} />, color: '#F05032' },
  { name: 'GitHub', icon: <FaGithub size={28} className="text-black dark:text-white" /> },
  { name: 'Python', icon: <FaPython size={32} />, color: '#3776AB' }
];
export default function Skills() {
  return (
   <section id="skills" className="skills-section">
  <div className="skills-container">
    <motion.div
      className="skills-heading"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <h2>Skills & Technologies</h2>
    </motion.div>

    <motion.div
      className="skills-grid-wrapper"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            className="skill-circle"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              delay: index * 0.05
            }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.1 }}
          >
            <div
              className="skill-icon-wrapper"
              style={{
                backgroundColor: `${skill.color}20`,
                borderColor: skill.color
              }}
            >
              <div className="skill-icon" style={{ color: skill.color }}>
                {skill.icon}
              </div>
            </div>
            <span className="skill-name">{skill.name}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  </div>
</section>

  );
}

