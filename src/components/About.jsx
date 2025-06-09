import React from 'react';
import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaGithub, FaReact, FaPython, FaDatabase, FaFigma, FaProjectDiagram, FaPhone, FaEnvelope, FaMapMarkerAlt, FaUser, FaGraduationCap, FaBriefcase, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';
import { SiJavascript, SiFlask, SiTailwindcss } from 'react-icons/si';

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
  { name: 'HTML', percent: 95, icon: <FaHtml5 className="tech-icon" />, color: '#e34c26' },
  { name: 'CSS', percent: 92, icon: <FaCss3Alt className="tech-icon" />, color: '#1572b6' },
  { name: 'GitHub', percent: 90, icon: <FaGithub className="tech-icon" />, color: '#222' },
  { name: 'Agile', percent: 88, icon: <FaProjectDiagram className="tech-icon" />, color: '#2563eb' },
  { name: 'Figma', percent: 85, icon: <FaFigma className="tech-icon" />, color: '#a259ff' },
  { name: 'JavaScript', percent: 90, icon: <SiJavascript className="tech-icon" />, color: '#f7df1e' },
  { name: 'React.js', percent: 85, icon: <FaReact className="tech-icon" />, color: '#61dafb' },
  { name: 'Tailwind CSS', percent: 80, icon: <SiTailwindcss className="tech-icon" />, color: '#38bdf8' },
  { name: 'Python', percent: 88, icon: <FaPython className="tech-icon" />, color: '#3776ab' },
  { name: 'Flask', percent: 85, icon: <SiFlask className="tech-icon" />, color: '#222' },
  { name: 'SQLAlchemy', percent: 82, icon: <FaDatabase className="tech-icon" />, color: '#2563eb' },
  { name: 'PostgreSQL', percent: 85, icon: <FaDatabase className="tech-icon" />, color: '#336791' },
  { name: 'Database Design', percent: 80, icon: <FaDatabase className="tech-icon" />, color: '#2563eb' },
];

const achievements = [
  { title: '7+ months', desc: 'Professional Development Experience' },
  { title: '25+', desc: 'Projects Completed' },
  { title: '10+', desc: 'Satisfied Clients' },
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
    <section className="about-section" style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem 1rem', fontFamily: "'Inter', sans-serif", color: '#333' }}>
      <div className="about-container">
        {/* My Story Section */}
        <motion.div className="about-card" style={{ marginBottom: '2.5rem', background: 'white', borderRadius: '12px', boxShadow: '0 8px 30px rgba(0, 0, 0, 0.08)', padding: '2.5rem', border: '1px solid rgba(37, 99, 235, 0.1)' }} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h2 className="section-title" style={{ color: '#2563eb', marginBottom: '1.5rem', fontSize: '1.8rem', fontWeight: '700', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span style={{ background: '#2563eb', width: '8px', height: '30px', display: 'inline-block', borderRadius: '4px' }}></span>
            My Journey in Tech
          </h2>
          <p style={{ fontSize: '1.15rem', color: '#4a5568', lineHeight: '1.7', margin: 0, textAlign: 'justify' }}>{myStory}</p>
        </motion.div>

        {/* Soft Skills Section */}
        <motion.div 
          className="about-card" 
          style={{ 
            marginBottom: '2.5rem', 
            background: 'white', 
            borderRadius: '12px', 
            boxShadow: '0 8px 30px rgba(0, 0, 0, 0.08)', 
            padding: '2.5rem',
            border: '1px solid rgba(37, 99, 235, 0.1)'
          }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="section-title" style={{ 
            color: '#2563eb', 
            marginBottom: '1.5rem',
            fontSize: '1.8rem',
            fontWeight: '700',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}>
            <span style={{ 
              background: '#2563eb', 
              width: '8px', 
              height: '30px', 
              display: 'inline-block', 
              borderRadius: '4px' 
            }}></span>
            Soft Skills
          </h2>
          <ul className="soft-skills-list" style={{ 
            listStyle: 'none', 
            padding: 0,
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '1.5rem'
          }}>
            {softSkills.map((item, idx) => (
              <motion.li 
                key={idx}
                style={{ 
                  background: 'rgba(37, 99, 235, 0.03)',
                  borderRadius: '8px',
                  padding: '1.5rem',
                  border: '1px solid rgba(37, 99, 235, 0.1)'
                }}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <span style={{ 
                  fontWeight: '600', 
                  color: '#2563eb',
                  fontSize: '1.1rem',
                  display: 'block',
                  marginBottom: '0.8rem'
                }}>
                  {item.skill}
                </span>
                <span className="soft-desc" style={{ 
                  display: 'block',
                  color: '#4a5568',
                  lineHeight: '1.6'
                }}>
                  {item.description}
                </span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Technical Skills Section */}
        <motion.div 
          className="about-card" 
          style={{ 
            marginBottom: '2.5rem', 
            background: 'white', 
            borderRadius: '12px', 
            boxShadow: '0 8px 30px rgba(0, 0, 0, 0.08)', 
            padding: '2.5rem',
            border: '1px solid rgba(37, 99, 235, 0.1)'
          }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="section-title" style={{ 
            color: '#2563eb', 
            marginBottom: '2rem',
            fontSize: '1.8rem',
            fontWeight: '700',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}>
            <span style={{ 
              background: '#2563eb', 
              width: '8px', 
              height: '30px', 
              display: 'inline-block', 
              borderRadius: '4px' 
            }}></span>
            Technical Skills
          </h2>
          <div className="tech-skills-grid" style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))',
            gap: '2rem',
            justifyContent: 'center'
          }}>
            {techSkills.map((skill, idx) => (
              <motion.div
                key={skill.name}
                className="tech-skill-circle"
                style={{ 
                  display: 'flex', 
                  flexDirection: 'column', 
                  alignItems: 'center',
                  cursor: 'default',
                }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.07, duration: 0.7 }}
                whileHover={{ 
                  y: -5,
                  scale: 1.05
                }}
              >
                <div style={{ 
                  position: 'relative', 
                  width: 100, 
                  height: 100, 
                  marginBottom: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <svg width="100" height="100" style={{ display: 'block' }}>
                    <circle
                      cx="50" cy="50" r="45" 
                      fill="none" 
                      stroke="#e5e7eb" 
                      strokeWidth="8" 
                      style={{ strokeDasharray: 314, strokeDashoffset: 0 }} 
                    />
                    <motion.circle
                      cx="50" cy="50" r="45" 
                      fill="none" 
                      stroke={skill.color} 
                      strokeWidth="8"
                      strokeDasharray="314"
                      strokeDashoffset="314"
                      style={{ rotate: '-90deg', transformOrigin: 'center' }}
                      custom={skill.percent}
                      variants={circleVariants}
                      animate="animate"
                      initial={false}
                    />
                  </svg>
                  <div style={{ 
                    position: 'absolute', 
                    top: '50%', 
                    left: '50%', 
                    transform: 'translate(-50%, -50%)',
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%',
                    background: 'white',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
                  }}>
                    {React.cloneElement(skill.icon, { 
                      style: { 
                        color: skill.color,
                        fontSize: '28px'
                      } 
                    })}
                  </div>
                  <div style={{ 
                    position: 'absolute', 
                    bottom: '-15px', 
                    left: 0, 
                    width: '100%', 
                    textAlign: 'center', 
                    fontWeight: '700', 
                    color: skill.color, 
                    fontSize: '1rem',
                    background: 'white',
                    padding: '2px 0',
                    borderRadius: '20px'
                  }}>
                    {skill.percent}%
                  </div>
                </div>
                <div style={{ 
                  fontWeight: '600', 
                  color: '#1a1a1a', 
                  fontSize: '1rem',
                  textAlign: 'center',
                  marginTop: '0.5rem'
                }}>
                  {skill.name}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Achievements Section */}
        <motion.div 
          className="about-card" 
          style={{ 
            marginBottom: '2.5rem', 
            background: 'white', 
            borderRadius: '12px', 
            boxShadow: '0 8px 30px rgba(0, 0, 0, 0.08)', 
            padding: '2.5rem',
            border: '1px solid rgba(37, 99, 235, 0.1)'
          }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="section-title" style={{ 
            color: '#2563eb', 
            marginBottom: '2rem',
            fontSize: '1.8rem',
            fontWeight: '700',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}>
            <span style={{ 
              background: '#2563eb', 
              width: '8px', 
              height: '30px', 
              display: 'inline-block', 
              borderRadius: '4px' 
            }}></span>
            Key Achievements
          </h2>
          <div className="achievements-grid" style={{ 
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '1.5rem'
          }}>
            {achievements.map((ach, idx) => (
              <motion.div 
                key={idx} 
                className="achievement-card" 
                style={{ 
                  background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)', 
                  borderRadius: '12px', 
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.03)', 
                  padding: '1.8rem', 
                  textAlign: 'center',
                  border: '1px solid rgba(37, 99, 235, 0.1)',
                  position: 'relative',
                  overflow: 'hidden'
                }}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ 
                  y: -5, 
                  boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)',
                }}
              >
                <div style={{
                  position: 'absolute',
                  top: '-20px',
                  right: '-20px',
                  width: '60px',
                  height: '60px',
                  background: 'rgba(37, 99, 235, 0.1)',
                  borderRadius: '50%'
                }}></div>
                <div className="achievement-icon" style={{ 
                  fontSize: '2.5rem', 
                  marginBottom: '1rem',
                  position: 'relative',
                  zIndex: '2'
                }}>
                  {ach.icon}
                </div>
                <h3 style={{ 
                  color: '#2563eb', 
                  fontSize: '1.5rem', 
                  marginBottom: '0.5rem',
                  fontWeight: '700',
                  position: 'relative',
                  zIndex: '2'
                }}>
                  {ach.title}
                </h3>
                <p style={{ 
                  color: '#4a5568', 
                  fontSize: '1rem',
                  lineHeight: '1.5',
                  position: 'relative',
                  zIndex: '2'
                }}>
                  {ach.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Personal Details Section - Updated to 2 columns */}
        <motion.div 
          className="about-card" 
          style={{ 
            background: 'white', 
            borderRadius: '12px', 
            boxShadow: '0 8px 30px rgba(0, 0, 0, 0.08)', 
            padding: '2.5rem',
            border: '1px solid rgba(37, 99, 235, 0.1)'
          }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="section-title" style={{ 
            color: '#2563eb', 
            marginBottom: '2rem',
            fontSize: '1.8rem',
            fontWeight: '700',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}>
            <span style={{ 
              background: '#2563eb', 
              width: '8px', 
              height: '30px', 
              display: 'inline-block', 
              borderRadius: '4px' 
            }}></span>
            Contact & Details
          </h2>
          <div className="about-info" style={{ 
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '1.5rem'
          }}>
            {personalDetails.map((item, idx) => (
              <motion.div 
                key={idx} 
                className="info-item" 
                style={{ 
                  display: 'flex', 
                  alignItems: 'flex-start',
                  gap: '1rem',
                  padding: '1.2rem',
                  background: 'rgba(37, 99, 235, 0.03)',
                  borderRadius: '8px',
                  border: '1px solid rgba(37, 99, 235, 0.1)',
                  cursor: item.link ? 'pointer' : 'default'
                }}
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
                <span className="info-icon" style={{ 
                  fontSize: '1.2rem', 
                  background: 'rgba(37, 99, 235, 0.1)',
                  width: '50px',
                  height: '50px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  color: '#2563eb'
                }}>
                  {item.icon}
                </span>
                <div>
                  <h4 style={{ 
                    margin: 0, 
                    color: '#2563eb', 
                    fontWeight: '600',
                    fontSize: '1rem',
                    marginBottom: '0.3rem'
                  }}>
                    {item.label}
                  </h4>
                  <p style={{ 
                    margin: 0, 
                    color: '#1a1a1a', 
                    fontSize: '1.1rem',
                    fontWeight: '500'
                  }}>
                    {item.value}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Footer-style Quick Links & Get in Touch Section */}
      <div className="about-footer-links">
        <div className="about-footer-content">
          <h3 className="about-footer-title">Quick Links</h3>
          <nav className="about-footer-nav">
            <a href="/" className="about-footer-link">Home</a>
            <a href="/about" className="about-footer-link">About Me</a>
            <a href="/portfolio" className="about-footer-link">Projects</a>
            <a href="/contact" className="about-footer-link">Get in Touch</a>
          </nav>

          <h3 className="about-footer-title" style={{marginTop: '2rem'}}>Get in Touch</h3>
          <div className="about-footer-contact-list">
            <div className="about-footer-contact-item"><span className="about-footer-label">Email:</span> <a href="mailto:joshuamusira01@gmail.com" className="about-footer-contact-link">joshuamusira01@gmail.com</a></div>
            <div className="about-footer-contact-item"><span className="about-footer-label">Alt Email:</span> <a href="mailto:joshuamusira38@gmail.com" className="about-footer-contact-link">joshuamusira38@gmail.com</a></div>
            <div className="about-footer-contact-item"><span className="about-footer-label">Phone:</span> <a href="tel:+254111779815" className="about-footer-contact-link">+254 11177 9815</a></div>
            <div className="about-footer-contact-item"><span className="about-footer-label">Alt Phone:</span> <a href="tel:+254111235047" className="about-footer-contact-link">+254 11123 5047</a></div>
          </div>

          <h3 className="about-footer-title" style={{marginTop: '2rem'}}>Follow Me</h3>
          <div className="about-footer-social-links">
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="about-footer-social-link"><FaTwitter style={{marginRight: 8}} />twitter</a>
            <a href="https://x.com/" target="_blank" rel="noopener noreferrer" className="about-footer-social-link"><FaTwitter style={{marginRight: 8}} />x-twitter</a>
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="about-footer-social-link"><FaGithub style={{marginRight: 8}} />Github</a>
            <a href="https://wa.me/" target="_blank" rel="noopener noreferrer" className="about-footer-social-link"><FaPhone style={{marginRight: 8}} />whatsapp</a>
            <a href="https://wa.me/" target="_blank" rel="noopener noreferrer" className="about-footer-social-link"><FaPhone style={{marginRight: 8}} />whatsapp</a>
            <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="about-footer-social-link"><FaLinkedin style={{marginRight: 8}} />LinkedIn</a>
            <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" className="about-footer-social-link"><FaInstagram style={{marginRight: 8}} />instagram</a>
            <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" className="about-footer-social-link"><FaInstagram style={{marginRight: 8}} />instagram</a>
          </div>
        </div>
      </div>

      <style global>{`
        .tech-icon {
          width: 28px;
          height: 28px;
        }
        .detail-icon {
          width: 20px;
          height: 20px;
        }
        @media (max-width: 768px) {
          .about-info {
            grid-template-columns: 1fr !important;
          }
        }
        .about-footer-links {
          width: 100%;
          margin: 3rem auto 0 auto;
          padding: 2.5rem 1.5rem 1.5rem 1.5rem;
          background: rgba(24, 31, 42, 0.95);
          color: #93c5fd;
          border-top: 4px solid #2563eb;
          text-align: center;
          border-radius: 0 0 16px 16px;
        }
        .about-footer-content {
          max-width: 500px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1.5rem;
        }
        .about-footer-title {
          font-size: 1.3rem;
          color: #fff;
          margin-bottom: 1rem;
          letter-spacing: 1px;
          font-weight: 700;
        }
        .about-footer-nav {
          display: flex;
          flex-direction: column;
          gap: 0.7rem;
        }
        .about-footer-link {
          color: #93c5fd;
          text-decoration: none;
          font-size: 1.08rem;
          font-weight: 500;
          transition: color 0.2s;
        }
        .about-footer-link:hover {
          color: #2563eb;
        }
        .about-footer-contact-list {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          align-items: center;
        }
        .about-footer-contact-item {
          color: #fff;
          font-size: 1.05rem;
        }
        .about-footer-label {
          color: #93c5fd;
          font-weight: 600;
          margin-right: 0.5rem;
        }
        .about-footer-contact-link {
          color: #fff;
          text-decoration: underline;
          font-weight: 500;
        }
        .about-footer-social-links {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          justify-content: center;
          margin-top: 0.5rem;
        }
        .about-footer-social-link {
          display: flex;
          align-items: center;
          gap: 0.3rem;
          color: #fff;
          text-decoration: none;
          font-size: 1.08rem;
          font-weight: 500;
          background: rgba(37,99,235,0.10);
          padding: 0.5rem 1.1rem;
          border-radius: 9999px;
          transition: background 0.2s, color 0.2s;
        }
        .about-footer-social-link:hover {
          background: #2563eb;
          color: #fff;
        }
        @media (max-width: 600px) {
          .about-footer-content {
            max-width: 100%;
            padding: 0;
          }
          .about-footer-links {
            padding: 1.5rem 0.5rem 1rem 0.5rem;
          }
          .about-footer-social-links {
            flex-direction: column;
            gap: 0.7rem;
          }
        }
      `}</style>
    </section>
  );
};

export default About;