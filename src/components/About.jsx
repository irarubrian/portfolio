import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaPhone, FaEnvelope, FaMapMarkerAlt, FaUser, 
  FaGraduationCap, FaBriefcase, FaQuoteLeft, 
  FaTrophy, FaRocket, FaCode, FaUsers, FaHeart,
  FaLightbulb, FaGlobe, FaLaptopCode
} from 'react-icons/fa';
import './About.css';

// Import all SVGs
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

const techSkills = [
  { name: 'HTML5', percent: 90, icon: <img src={html5Logo} alt="HTML5" className="tech-img" />, color: '#E44D26' },
  { name: 'CSS3', percent: 92, icon: <img src={css3Logo} alt="CSS3" className="tech-img" />, color: '#264DE4' },
  { name: 'JavaScript', percent: 85, icon: <img src={javascriptLogo} alt="JavaScript" className="tech-img" />, color: '#F7DF1E' },
  { name: 'React.js', percent: 88, icon: <img src={reactLogo} alt="React" className="tech-img" />, color: '#61DAFB' },
  { name: 'Tailwind CSS', percent: 90, icon: <img src={tailwindLogo} alt="Tailwind CSS" className="tech-img" />, color: '#38B2AC' },
  { name: 'Python', percent: 85, icon: <img src={pythonLogo} alt="Python" className="tech-img" />, color: '#3776AB' },
  { name: 'Flask', percent: 85, icon: <img src={flaskLogo} alt="Flask" className="tech-img" />, color: '#000000' },
  { name: 'PostgreSQL', percent: 85, icon: <img src={postgresqlLogo} alt="PostgreSQL" className="tech-img" />, color: '#336791' },
];

const achievements = [
  { title: '8+ months', desc: 'Professional Development Experience', icon: <FaRocket /> },
  { title: '15+', desc: 'Projects Completed', icon: <FaTrophy /> },
  { title: '10+', desc: 'Happy Clients', icon: <FaUsers /> },
  { title: '20+', desc: 'Open Source Contributions', icon: <FaCode /> },
];

const personalDetails = [
  { icon: <FaUser />, label: 'Full Name', value: 'Brian Iraru' },
  { icon: <FaEnvelope />, label: 'Email', value: 'brian.o.iraru@gmail.com', link: 'mailto:brian.o.iraru@gmail.com' },
  { icon: <FaPhone />, label: 'Phone', value: '+254 743 435 490', link: 'tel:+254743435490' },
  { icon: <FaMapMarkerAlt />, label: 'Location', value: 'Nairobi, Kenya' },
  { icon: <FaGraduationCap />, label: 'Education', value: 'Applied Software Engineering' },
  { icon: <FaBriefcase />, label: 'Availability', value: 'Open for Opportunities' },
];

// My Programming Journey Story
const myJourney = `My journey into programming began with a simple question: "How do websites actually work?" 

I remember spending countless nights debugging my first lines of HTML, feeling frustrated yet oddly excited every time I fixed a bug. That spark of curiosity quickly grew into a burning passion. I realized that programming wasn't just about writing code—it was about creating solutions that could impact lives.

I decided to join programming because I wanted to be a creator, not just a consumer. Growing up in Nairobi's tech scene, I saw how digital solutions were transforming businesses and communities. I wanted to be part of that transformation.

What drives me is the ability to turn abstract ideas into tangible products that people actually use and love. Every line of code I write has the potential to solve a real problem, simplify a complex task, or bring joy to someone's day.

The moment I built my first web application that helped a small business manage their inventory, I knew I had found my calling. Technology is my canvas, and code is my paintbrush. I'm not just coding—I'm building the future, one line at a time.`;

// Why Programming Section
const whyProgramming = [
  {
    icon: <FaLightbulb />,
    title: "Creative Problem Solving",
    description: "Programming allows me to solve complex problems creatively and build innovative solutions."
  },
  {
    icon: <FaGlobe />,
    title: "Global Impact",
    description: "Technology transcends borders. My code can help people anywhere in the world."
  },
  {
    icon: <FaHeart />,
    title: "Continuous Learning",
    description: "Tech evolves daily, and I love the challenge of staying ahead and learning new things."
  },
  {
    icon: <FaLaptopCode />,
    title: "Building the Future",
    description: "Every application I build contributes to the digital transformation of our society."
  }
];

const TechSkillCircle = ({ skill, index }) => {
  const circleVariants = {
    hidden: { strokeDashoffset: 314, opacity: 0 },
    visible: (percent) => ({
      strokeDashoffset: 314 - (314 * percent) / 100,
      opacity: 1,
      transition: { duration: 1.5, ease: "easeInOut", delay: index * 0.1 }
    })
  };

  const iconVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: { type: "spring", stiffness: 200, damping: 20, delay: index * 0.1 + 0.8 }
    }
  };

  const textVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5, delay: index * 0.1 + 1.2 } }
  };

  return (
    <motion.div
      className="tech-skill-circle"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ y: -10, scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
      custom={skill.percent}
    >
      <div className="skill-circle-container">
        <svg width="120" height="120" viewBox="0 0 120 120">
          <circle cx="60" cy="60" r="50" className="skill-circle-bg" />
          <motion.circle
            cx="60" cy="60" r="50"
            className="skill-circle-progress"
            variants={circleVariants}
            custom={skill.percent}
            style={{ stroke: skill.color }}
            strokeLinecap="round"
          />
        </svg>
        
        <motion.div className="skill-circle-icon" variants={iconVariants}>
          {React.cloneElement(skill.icon, { style: { color: skill.color, width: '40px', height: '40px' } })}
        </motion.div>
        
        <motion.div className="skill-percent" style={{ color: skill.color }} variants={textVariants}>
          {skill.percent}%
        </motion.div>
      </div>
      
      <motion.div className="skill-name" variants={textVariants}>
        {skill.name}
      </motion.div>
    </motion.div>
  );
};

const About = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        {/* My Journey Section */}
        <motion.div 
          className="about-card" 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            <span className="title-accent"></span>
             My Programming Journey
          </h2>
          <p className="journey-text">{myJourney}</p>
        </motion.div>

        {/* Quote Section */}
        <motion.div 
          className="about-card about-quote"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <FaQuoteLeft size={40} style={{ opacity: 0.3, marginBottom: '1rem' }} />
          <p>"The best way to predict the future is to build it. Every line of code is a step toward creating something meaningful."</p>
          <div className="about-quote-author">— Brian Iraru</div>
        </motion.div>

        {/* Why Programming Section */}
        <motion.div 
          className="about-card"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">
            <span className="title-accent"></span>
             Why I Chose Programming
          </h2>
          <div className="why-programming-grid">
            {whyProgramming.map((item, idx) => (
              <motion.div 
                key={idx}
                className="why-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="why-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Technical Skills Section */}
        <motion.div 
          className="about-card"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">
            <span className="title-accent"></span>
             Technical Expertise
          </h2>
          <div className="tech-skills-grid">
            {techSkills.map((skill, idx) => (
              <TechSkillCircle key={skill.name} skill={skill} index={idx} />
            ))}
          </div>
        </motion.div>

        {/* Achievements Section */}
        <motion.div 
          className="about-card"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
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
                whileHover={{ y: -8 }}
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
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">
            <span className="title-accent"></span>
             Quick Info
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
                  background: item.link ? 'rgba(37, 99, 235, 0.08)' : 'rgba(37, 99, 235, 0.06)',
                  transform: item.link ? 'translateX(5px)' : 'none'
                }}
                onClick={() => item.link && window.open(item.link, '_blank')}
                style={{ cursor: item.link ? 'pointer' : 'default' }}
              >
                <span className="info-icon">{item.icon}</span>
                <div>
                  <h4>{item.label}</h4>
                  <p>{item.value}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;