import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowDown,
  FaCode,
  FaLaptopCode,
  FaServer,
  FaMobileAlt,
  FaAward,
  FaUsers,
  FaRocket,
  FaCheckCircle,
  FaPython,
  FaReact,
  FaDatabase,
  FaGitAlt,
  FaFigma,
  FaCss3Alt,
  FaHtml5,
  FaJs,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiTypescript,
  SiFlask,
  SiFastapi,
  SiPostgresql,
  SiSqlite,
} from "react-icons/si";
import { HiLightningBolt, HiBriefcase } from "react-icons/hi";
import { TbApi } from "react-icons/tb";
import "./Hero.css";
import profileImage from "../assets/profile.jpeg";

const services = [
  {
    title: "Frontend Development",
    icon: <FaLaptopCode />,
    desc: "Building modern, responsive and animated interfaces using React, TypeScript & Tailwind.",
    gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
  },
  {
    title: "Backend Systems",
    icon: <FaServer />,
    desc: "Developing secure APIs, authentication systems and scalable backend services with Python, Flask & FastAPI.",
    gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
  },
  {
    title: "Database Management",
    icon: <FaDatabase />,
    desc: "Designing and managing PostgreSQL and SQLite databases for optimal performance.",
    gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
  },
  {
    title: "API Integration",
    icon: <TbApi />,
    desc: "Integrating third-party APIs including Daraja API for payment solutions.",
    gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
  },
];

const achievements = [
  { number: "1+", label: "Years Experience", icon: <FaAward /> },
  { number: "20+", label: "Projects Completed", icon: <FaRocket /> },
  { number: "15+", label: "Happy Clients", icon: <FaUsers /> },
  { number: "100%", label: "Client Satisfaction", icon: <FaCheckCircle /> },
];

const technicalSkills = [
  { name: "HTML5", icon: <FaHtml5 />, color: "#E34F26" },
  { name: "CSS3", icon: <FaCss3Alt />, color: "#1572B6" },
  { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "#06B6D4" },
  { name: "JavaScript", icon: <FaJs />, color: "#F7DF1E" },
  { name: "React.js", icon: <FaReact />, color: "#61DAFB" },
  { name: "TypeScript", icon: <SiTypescript />, color: "#3178C6" },
  { name: "Python", icon: <FaPython />, color: "#3776AB" },
  { name: "Flask", icon: <SiFlask />, color: "#000000" },
  { name: "FastAPI", icon: <SiFastapi />, color: "#009688" },
  { name: "PostgreSQL", icon: <SiPostgresql />, color: "#4169E1" },
  { name: "SQLite", icon: <SiSqlite />, color: "#003B57" },
  { name: "Git/GitHub", icon: <FaGitAlt />, color: "#F05032" },
  { name: "Figma", icon: <FaFigma />, color: "#F24E1E" },
  { name: "Daraja API", icon: <TbApi />, color: "#00A86B" },
];

const softSkills = [
  "Good Communication",
  "Problem Solving",
  "Team Collaboration",
  "Time Management",
  "Critical Thinking",
  "Adaptability",
];

const Home = () => {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const move = (e) => {
      setMouse({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      });
    };

    window.addEventListener("mousemove", move);
    setIsVisible(true);

    // Preload image for faster loading
    const img = new Image();
    img.src = profileImage;
    img.onload = () => setImageLoaded(true);

    return () => window.removeEventListener("mousemove", move);
  }, []);

  const scrollToNext = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <div className="home-container">
      {/* Animated Background */}
      <div className="animated-bg">
        <div className="gradient-bg"></div>
        <div className="grid-pattern"></div>
      </div>

      {/* HERO SECTION */}
      <section id="home" className="hero-section">
        <div className="hero-content">
          {/* LEFT COLUMN */}
          <motion.div
            className="hero-left"
            initial="hidden"
            animate="visible"
            variants={fadeInUpVariants}
          >
            <p className="hero-greeting">Hello, I'm</p>

            <h1 className="hero-title">
              BRIAN <br />
              <span className="hero-title-highlight">IRARU</span>
            </h1>

            <div className="typed-container">
              <p className="hero-description">
                A passionate full-stack software engineer with 1+ year of experience,
                focused on building beautiful, scalable and high-performing digital
                experiences. Specialized in modern web technologies and API integrations.
              </p>
            </div>

            <div className="hero-buttons">
              <Link to="/contact">
                <motion.button
                  className="btn-primary"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Contact Me
                  <span className="btn-glow"></span>
                </motion.button>
              </Link>

              <a href="/brianiraru.pdf" target="_blank" rel="noreferrer">
                <motion.button
                  className="btn-secondary"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Resume
                </motion.button>
              </a>
            </div>

            {/* SOCIAL LINKS */}
            <motion.div
              className="social-links"
              initial="hidden"
              animate="visible"
              variants={staggerContainerVariants}
            >
              {[
                { icon: <FaGithub />, link: "https://github.com/brianiraru", label: "GitHub" },
                { icon: <FaLinkedin />, link: "https://linkedin.com/in/brianiraru", label: "LinkedIn" },
                { icon: <FaEnvelope />, link: "mailto:brian.o.iraru@gmail.com", label: "Email" },
              ].map((item, i) => (
                <motion.a
                  key={i}
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  className="social-icon"
                  variants={fadeInUpVariants}
                  whileHover={{ y: -5, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.icon}
                  <span className="social-tooltip">{item.label}</span>
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* RIGHT COLUMN - IMAGE */}
          <motion.div
            className="hero-right"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="image-glow"></div>
            
            {/* Floating Elements */}
            <motion.div
              className="floating-element floating-1"
              animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 4 }}
            >
              <FaCode />
            </motion.div>
            <motion.div
              className="floating-element floating-2"
              animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 5, delay: 1 }}
            >
              <HiLightningBolt />
            </motion.div>
            <motion.div
              className="floating-element floating-3"
              animate={{ y: [0, -15, 0], rotate: [0, 15, 0] }}
              transition={{ repeat: Infinity, duration: 6, delay: 2 }}
            >
              <FaReact />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="about-section">
        <div className="about-content">
          {/* IMAGE COLUMN - Optimized with lazy loading and placeholder */}
          <motion.div
            className="about-image"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="about-image-glow"></div>
            <div className="about-image-border">
              <div className="image-stats">
                <div className="stat-item">
                  <span className="stat-number">1+</span>
                  <span className="stat-label">Years</span>
                </div>
              </div>
              {!imageLoaded && (
                <div className="image-placeholder">
                  <div className="placeholder-shimmer"></div>
                </div>
              )}
              <img
                src={profileImage}
                alt="Brian Iraru - Software Engineer"
                className={`about-profile-img ${imageLoaded ? 'loaded' : 'loading'}`}
                loading="eager"
                fetchpriority="high"
                decoding="async"
                onLoad={() => setImageLoaded(true)}
              />
            </div>
          </motion.div>

          {/* CONTENT COLUMN */}
          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="section-header">
              <p className="section-label">About Me</p>
              <div className="section-line"></div>
            </div>
            
            <h2 className="section-title">
              Who <span className="highlight">Am I</span>
            </h2>

            <p className="about-description">
              I am Brian Iraru, a creative and results-driven software engineer with 1+ year
              of professional experience. Passionate about designing elegant user experiences
              and powerful web applications. I specialize in modern frontend and backend
              technologies, API integrations including Daraja API, and database management.
            </p>

            {/* Achievements */}
            <div className="achievements-grid">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  className="achievement-card"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <div className="achievement-icon">{achievement.icon}</div>
                  <div className="achievement-number">{achievement.number}</div>
                  <div className="achievement-label">{achievement.label}</div>
                </motion.div>
              ))}
            </div>

            {/* TECH STACK */}
            <div className="tech-stack">
              <h3 className="tech-title">Technical Skills</h3>
              <div className="tech-grid">
                {technicalSkills.map((skill, index) => (
                  <motion.div
                    key={index}
                    className="tech-item"
                    whileHover={{ scale: 1.05, y: -2 }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.01, duration: 0.3 }}
                    viewport={{ once: true }}
                  >
                    <div className="tech-icon" style={{ color: skill.color }}>
                      {skill.icon}
                    </div>
                    <span>{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Soft Skills */}
            <div className="soft-skills">
              <h3 className="tech-title">Soft Skills</h3>
              <div className="soft-skills-grid">
                {softSkills.map((skill, index) => (
                  <motion.div
                    key={index}
                    className="soft-skill-item"
                    whileHover={{ scale: 1.02 }}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05, duration: 0.3 }}
                    viewport={{ once: true }}
                  >
                    <span className="soft-skill-dot"></span>
                    {skill}
                  </motion.div>
                ))}
              </div>
            </div>

            <Link to="/contact">
              <motion.button
                className="btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Download CV
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="services" className="services-section">
        <div className="services-header">
          <div className="section-header">
            <p className="section-label">My Services</p>
            <div className="section-line"></div>
          </div>
          <h2 className="section-title">
            What <span className="highlight">Can I Do</span>
          </h2>
          <p className="services-subtitle">
            Transforming ideas into exceptional digital experiences
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="service-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div className="service-icon" style={{ background: service.gradient }}>
                {service.icon}
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.desc}</p>
              <div className="service-hover-effect"></div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="cta-section">
        <motion.div
          className="cta-content"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="cta-text">
            <h2 className="cta-title">
              Let's Work Together <br />
              On Your Next Project
            </h2>
            <p className="cta-description">
              With 1+ year of experience in full-stack development, I'm ready to
              collaborate with you to create powerful digital experiences that
              elevate your brand and deliver real business value.
            </p>
          </div>

          <Link to="/contact">
            <motion.button
              className="btn-primary btn-large"
              whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(220, 38, 38, 0.4)" }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
              <span className="btn-glow"></span>
            </motion.button>
          </Link>
        </motion.div>
      </section>

      {/* SCROLL INDICATOR */}
      <motion.div
        className="scroll-indicator"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        onClick={scrollToNext}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <FaArrowDown />
        <span className="scroll-text">Scroll</span>
      </motion.div>
    </div>
  );
};

export default Home;