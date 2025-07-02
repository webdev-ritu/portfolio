import { motion } from 'framer-motion';
import profileImage from '../assets/profile-photo.jpg';
export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2>About Me</h2>
          
          <div className="about-content">


          {/* left side - Profile image */}
            <motion.div 
              className="profile-image-container"
              initial={{ scale: 0.9 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="profile-image-wrapper">
                <img 
                  src={profileImage} 
                  alt="Profile" 
                  className="profile-image"
                />
                <div className="image-border"></div>
              </div>
            </motion.div>



            {/* right side - Professional summary */}
            <div className="about-text">
              
              <p>
                I’m a passionate MERN Stack Developer and UI/UX Designer with a strong interest in building full-stack web applications that are both functional and visually appealing. As a fresher, I’ve worked on several hands-on projects using React, Node.js, Express, and MongoDB, along with designing intuitive user interfaces in Figma.
              </p>
              <p>
              I enjoy blending creativity with code to create seamless digital experiences, and I’m always eager to learn new tools, improve my skills, and collaborate on meaningful projects that solve real-world problems.
              </p>
              <p>
                I’m currently seeking opportunities to contribute my skills in a dynamic team environment where I can grow as a developer and designer.
              </p>
              
            </div>
            
            
          </div>
        </motion.div>
      </div>
    </section>
  );
}