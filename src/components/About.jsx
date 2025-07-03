import React from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaUser, FaGraduationCap, FaBriefcase } from 'react-icons/fa';
import { SiFlask, SiTailwindcss } from 'react-icons/si';
import { Link } from 'react-router-dom';

// Import all SVGs directly for robust Vite/React compatibility
import html5Logo from '../assets/html5.svg';
import css3Logo from '../assets/css3.svg';
import githubLogo from '../assets/github.svg';
import figmaLogo from '../assets/figma.svg';
import javascriptLogo from '../assets/javascript.svg';
import reactLogo from '../assets/react.svg';
import tailwindLogo from '../assets/tailwind.svg';
import pythonLogo from '../assets/python.svg';
import flaskLogo from '../assets/flask.svg';
import sqlalchemyLogo from '../assets/sqlalchemy.svg';
import postgresqlLogo from '../assets/postgresql.svg';
import databaseLogo from '../assets/database.svg';

const softSkills = [
  {
    skill: 'Communication',
    description: 'Proven ability to clearly explain technical concepts to both technical and non-technical audiences, as demonstrated in team projects and client interactions.'
  },
  {
    skill: 'Teamwork & Collaboration',
    description: 'Worked effectively in diverse teams, contributing to open-source projects and collaborating on group assignments with positive feedback.'
  },
  {
    skill: 'Problem Solving',
    description: 'Consistently delivered creative solutions to coding challenges and project obstacles, as shown in hackathons and real-world projects.'
  },
  {
    skill: 'Adaptability',
    description: 'Quickly learned new technologies and adapted to changing project requirements, thriving in fast-paced environments.'
  },
  {
    skill: 'Time Management',
    description: 'Managed multiple deadlines and balanced coursework, freelance work, and personal learning with strong organizational skills.'
  }
];

const techSkills = [
  { name: 'HTML', percent: 90, icon: <img src={html5Logo} alt="HTML5" className="tech-img" width="48" height="48" style={{maxWidth: '100%', height: 'auto', display: 'block'}} />, color: 'green' },
  { name: 'CSS', percent: 92, icon: <img src={css3Logo} alt="CSS3" className="tech-img" width="48" height="48" style={{maxWidth: '100%', height: 'auto', display: 'block'}} />, color: 'green' },
  { name: 'GitHub', percent: 80, icon: <img src={githubLogo} alt="GitHub" className="tech-img" width="48" height="48" style={{maxWidth: '100%', height: 'auto', display: 'block'}} />, color: 'green' },
  { name: 'Agile', percent: 88, icon: <span className="tech-img" style={{fontWeight:'bold',fontSize:'2rem',color:'green',minWidth:48,minHeight:48,display:'inline-block',textAlign:'center',lineHeight:'48px'}}>A</span>, color: 'green' },
  { name: 'Figma', percent: 85, icon: <img src={figmaLogo} alt="Figma" className="tech-img" width="48" height="48" style={{maxWidth: '100%', height: 'auto', display: 'block'}} />, color: 'green' },
  { name: 'JavaScript', percent: 75, icon: <img src={javascriptLogo} alt="JavaScript" className="tech-img" width="48" height="48" style={{maxWidth: '100%', height: 'auto', display: 'block'}} />, color: 'green' },
  { name: 'React.js', percent: 80, icon: <img src={reactLogo} alt="React" className="tech-img" width="48" height="48" style={{maxWidth: '100%', height: 'auto', display: 'block'}} />, color: 'green' },
  { name: 'Tailwind CSS', percent: 80, icon: <img src={tailwindLogo} alt="Tailwind CSS" className="tech-img" width="48" height="48" style={{maxWidth: '100%', height: 'auto', display: 'block'}} />, color: 'green' },
  { name: 'Python', percent: 85, icon: <img src={pythonLogo} alt="Python" className="tech-img" width="48" height="48" style={{maxWidth: '100%', height: 'auto', display: 'block'}} />, color: 'green' },
  { name: 'Flask', percent: 85, icon: <img src={flaskLogo} alt="Flask" className="tech-img" width="48" height="48" style={{maxWidth: '100%', height: 'auto', display: 'block'}} />, color: 'green' },
  { name: 'SQLAlchemy', percent: 82, icon: <img src={sqlalchemyLogo} alt="SQLAlchemy" className="tech-img" width="48" height="48" style={{maxWidth: '100%', height: 'auto', display: 'block'}} />, color: 'green' },
  { name: 'PostgreSQL', percent: 85, icon: <img src={postgresqlLogo} alt="PostgreSQL" className="tech-img" width="48" height="48" style={{maxWidth: '100%', height: 'auto', display: 'block'}} />, color: 'green' },
  { name: 'Database Design', percent: 80, icon: <img src={databaseLogo} alt="Database Design" className="tech-img" width="48" height="48" style={{maxWidth: '100%', height: 'auto', display: 'block'}} />, color: 'green' },
];

const achievements = [
  { title: '7+ months', desc: 'Professional Development Experience' },
  { title: '10+', desc: 'Projects Completed' },
  { title: '5+', desc: 'Satisfied Clients' },
  { title: '12+', desc: 'Open Source Contributions' },
];

const personalDetails = [
  { icon: <FaUser className="detail-icon" />, label: 'Name', value: 'Brian Iraru' },
  { 
    icon: <FaEnvelope className="detail-icon" />, 
    label: 'Email', 
    value: 'brian.o.iraru@gmail.com',
    link: 'mailto:brian.o.iraru@gmail.com' 
  },
  { 
    icon: <FaPhone className="detail-icon" />, 
    label: 'Phone', 
    value: '+254 743435490',
    link: 'tel:+254743435490' 
  },
  { 
    icon: <FaMapMarkerAlt className="detail-icon" />, 
    label: 'Location', 
    value: 'Nairobi, Kenya',
    link: 'https://www.google.com/maps/place/Nairobi' 
  },
  { icon: <FaGraduationCap className="detail-icon" />, label: 'Education', value: 'Applied Software Engineering' },
  { icon: <FaBriefcase className="detail-icon" />, label: 'Availability', value: 'Open for freelance opportunities' },
];

const circleVariants = {
  animate: percent => ({
    strokeDashoffset: 314 - (314 * percent) / 100,
    transition: { duration: 1.2, ease: 'easeInOut' }
  })
};

const myStory = `I am a passionate software developer with a strong foundation in both frontend and backend technologies. My journey began at Moringa School in Nairobi, where I completed the Applied Software Engineering program. This intensive training equipped me with hands-on experience in modern web development technologies and agile methodologies. 

I specialize in building responsive, user-friendly applications using React.js for frontend development and Python with Flask for backend services. My approach combines clean code principles with efficient problem-solving to deliver robust solutions.

What drives me is the opportunity to create impactful software that solves real-world problems. I thrive in collaborative environments and am constantly expanding my skill set to stay at the forefront of technology.`;

const About = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        {/* My Story Section */}
        <motion.div 
          className="about-card" 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            <span className="title-accent"></span>
            My Journey in Tech
          </h2>
          <p>{myStory}</p>
        </motion.div>

        {/* Soft Skills Section */}
        <motion.div 
          className="about-card"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="section-title">
            <span className="title-accent"></span>
            Soft Skills
          </h2>
          <ul className="soft-skills-list">
            {softSkills.map((item, idx) => (
              <motion.li 
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <span className="soft-skill-name">{item.skill}</span>
                <span className="soft-skill-desc">{item.description}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Technical Skills Section */}
        <motion.div 
          className="about-card"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="section-title">
            <span className="title-accent"></span>
            Technical Skills
          </h2>
          <div className="tech-skills-grid">
            {techSkills.map((skill, idx) => (
              <motion.div
                key={skill.name}
                className="tech-skill-circle"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.07, duration: 0.7 }}
                whileHover={{ y: -5, scale: 1.05 }}
              >
                <div className="skill-circle-container">
                  <svg width="100" height="100">
                    <circle
                      cx="50" cy="50" r="45" 
                      className="skill-circle-bg"
                    />
                    <motion.circle
                      cx="50" cy="50" r="45" 
                      className="skill-circle-progress"
                      custom={skill.percent}
                      variants={circleVariants}
                      animate="animate"
                      initial={false}
                      style={{ stroke: skill.color }}
                    />
                  </svg>
                  <div className="skill-circle-icon">
                    {React.cloneElement(skill.icon, { 
                      style: { color: skill.color } 
                    })}
                  </div>
                  <div className="skill-percent" style={{ color: skill.color }}>
                    {skill.percent}%
                  </div>
                </div>
                <div className="skill-name">{skill.name}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Achievements Section */}
        <motion.div 
          className="about-card"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="section-title">
            <span className="title-accent"></span>
            Key Achievements
          </h2>
          <div className="achievements-grid">
            {achievements.map((ach, idx) => (
              <motion.div 
                key={idx} 
                className="achievement-card"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="achievement-bg-accent"></div>
                <div className="achievement-content">
                  <h3>{ach.title}</h3>
                  <p>{ach.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Personal Details Section */}
        <motion.div 
          className="about-card"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="section-title">
            <span className="title-accent"></span>
            Contact & Details
          </h2>
          <div className="about-info">
            {personalDetails.map((item, idx) => (
              <motion.div 
                key={idx} 
                className="info-item"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ 
                  background: item.link ? 'rgba(37, 99, 235, 0.05)' : 'rgba(37, 99, 235, 0.03)',
                  transform: item.link ? 'translateX(5px)' : 'none'
                }}
                onClick={() => item.link && window.open(item.link, '_blank')}
              >
                <span className="info-icon">
                  {item.icon}
                </span>
                <div>
                  <h4>{item.label}</h4>
                  <p>{item.value}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        .about-section {
          max-width: 1200px;
          margin: 0 auto;
          padding: 2rem 1rem;
          font-family: 'Inter', sans-serif;
          color: #333;
        }

        .about-container {
          display: flex;
          flex-direction: column;
          gap: 2.5rem;
        }

        .about-card {
          background: white;
          border-radius: 12px;
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08);
          padding: 2.5rem;
          border: 1px solid rgba(37, 99, 235, 0.1);
        }

        .section-title {
          color: #2563eb;
          margin-bottom: 1.5rem;
          font-size: 1.8rem;
          font-weight: 700;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .title-accent {
          background: #2563eb;
          width: 8px;
          height: 30px;
          display: inline-block;
          border-radius: 4px;
        }

        /* My Story Section */
        .about-card p {
          font-size: 1.15rem;
          color: #4a5568;
          line-height: 1.7;
          margin: 0;
          text-align: justify;
        }

        /* Soft Skills Section */
        .soft-skills-list {
          list-style: none;
          padding: 0;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 1.5rem;
        }

        .soft-skills-list li {
          background: rgba(37, 99, 235, 0.03);
          border-radius: 8px;
          padding: 1.5rem;
          border: 1px solid rgba(37, 99, 235, 0.1);
        }

        .soft-skill-name {
          font-weight: 600;
          color: #2563eb;
          font-size: 1.1rem;
          display: block;
          margin-bottom: 0.8rem;
        }

        .soft-skill-desc {
          display: block;
          color: #4a5568;
          line-height: 1.6;
        }

        /* Technical Skills Section */
        .tech-skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
          gap: 2rem;
          justify-content: center;
        }

        .tech-skill-circle {
          display: flex;
          flex-direction: column;
          align-items: center;
          cursor: default;
        }

        .skill-circle-container {
          position: relative;
          width: 100px;
          height: 100px;
          margin-bottom: 1rem;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .skill-circle-bg {
          fill: none;
          stroke: #e5e7eb;
          stroke-width: 8;
          stroke-dasharray: 314;
          stroke-dashoffset: 0;
        }

        .skill-circle-progress {
          fill: none;
          stroke-width: 8;
          stroke-dasharray: 314;
          stroke-dashoffset: 314;
          transform: rotate(-90deg);
          transform-origin: center;
        }

        .skill-circle-icon {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: white;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        }

        .skill-percent {
          position: absolute;
          bottom: -15px;
          left: 0;
          width: 100%;
          text-align: center;
          font-weight: 700;
          font-size: 1rem;
          background: white;
          padding: 2px 0;
          border-radius: 20px;
        }

        .skill-name {
          font-weight: 600;
          color: #1a1a1a;
          font-size: 1rem;
          text-align: center;
          margin-top: 0.5rem;
        }

        /* Achievements Section */
        .achievements-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 1.5rem;
        }

        .achievement-card {
          background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
          border-radius: 12px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.03);
          padding: 1.8rem;
          text-align: center;
          border: 1px solid rgba(37, 99, 235, 0.1);
          position: relative;
          overflow: hidden;
        }

        .achievement-bg-accent {
          position: absolute;
          top: -20px;
          right: -20px;
          width: 60px;
          height: 60px;
          background: rgba(37, 99, 235, 0.1);
          border-radius: 50%;
        }

        .achievement-card h3 {
          color: #2563eb;
          font-size: 1.5rem;
          margin-bottom: 0.5rem;
          font-weight: 700;
          position: relative;
          z-index: 2;
        }

        .achievement-card p {
          color: #4a5568;
          font-size: 1rem;
          line-height: 1.5;
          position: relative;
          z-index: 2;
        }

        /* Personal Details Section */
        .about-info {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.5rem;
        }

        .info-item {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          padding: 1.2rem;
          background: rgba(37, 99, 235, 0.03);
          border-radius: 8px;
          border: 1px solid rgba(37, 99, 235, 0.1);
        }

        .info-icon {
          font-size: 1.2rem;
          background: rgba(37, 99, 235, 0.1);
          width: 50px;
          height: 50px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          color: #2563eb;
        }

        .info-item h4 {
          margin: 0;
          color: #2563eb;
          font-weight: 600;
          font-size: 1rem;
          margin-bottom: 0.3rem;
        }

        .info-item p {
          margin: 0;
          color: #1a1a1a;
          font-size: 1.1rem;
          font-weight: 500;
        }

        /* Responsive Styles */
        @media (max-width: 768px) {
          .about-info {
            grid-template-columns: 1fr;
          }

          .about-card {
            padding: 1.5rem;
          }

          .section-title {
            font-size: 1.5rem;
          }

          .tech-skills-grid {
            grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
            gap: 1.5rem;
          }

          .achievements-grid {
            grid-template-columns: 1fr 1fr;
          }
        }

        @media (max-width: 480px) {
          .soft-skills-list {
            grid-template-columns: 1fr;
          }

          .achievements-grid {
            grid-template-columns: 1fr;
          }

          .footer-content {
            grid-template-columns: 1fr;
            gap: 2.5rem;
          }
        }
      `}</style>
    </section>
  );
};

export default About;