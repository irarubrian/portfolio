import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { 
  FaGithub, FaLinkedin, FaEnvelope, FaTwitter, FaArrowDown, 
  FaCode, FaRocket, FaCloudUploadAlt, FaUsers, 
  FaStar, FaMobile, FaDatabase, FaCloud, FaLaptopCode,
  FaMoneyBillWave, FaExchangeAlt
} from "react-icons/fa";
import { 
  SiJavascript, SiHtml5, SiCss3, SiFramer, 
  SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, 
  SiNodedotjs, SiPython, SiPostgresql, SiMongodb
} from "react-icons/si";
import { FiCopy } from "react-icons/fi";
import { GiStarsStack } from "react-icons/gi";
import profileImage from "../assets/profile.jpeg";
import "./Hero.css";

// Fix: Use FaAws instead of SiAmazonaws
const techSkills = [
  { name: 'JavaScript', percent: 90, color: '#F7DF1E', icon: <SiJavascript /> },
  { name: 'HTML5', percent: 95, color: '#E44D26', icon: <SiHtml5 /> },
  { name: 'CSS3', percent: 92, color: '#264DE4', icon: <SiCss3 /> },
  { name: 'React.js', percent: 92, color: '#61DAFB', icon: <SiReact /> },
  { name: 'Next.js', percent: 88, color: '#000000', icon: <SiNextdotjs /> },
  { name: 'TypeScript', percent: 86, color: '#3178C6', icon: <SiTypescript /> },
  { name: 'Tailwind CSS', percent: 94, color: '#06B6D4', icon: <SiTailwindcss /> },
  { name: 'Node.js', percent: 89, color: '#68A063', icon: <SiNodedotjs /> },
  { name: 'Python', percent: 90, color: '#3572A5', icon: <SiPython /> },
  { name: 'Daraja API', percent: 85, color: '#00B341', icon: <FaMoneyBillWave /> },
  { name: 'Framer Motion', percent: 88, color: '#0055FF', icon: <SiFramer /> },
  { name: 'PostgreSQL', percent: 88, color: '#336791', icon: <SiPostgresql /> },
  { name: 'MongoDB', percent: 86, color: '#47A248', icon: <SiMongodb /> },
  { name: 'AWS', percent: 85, color: '#FF9900', icon: <FaCloud /> },
  { name: 'REST APIs', percent: 90, color: '#00ACC1', icon: <FaExchangeAlt /> },
];

const Hero = () => {
  const [isHoveringLogo, setIsHoveringLogo] = useState(false);
  const [copied, setCopied] = useState(false);
  const [activeSkill, setActiveSkill] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const controls = useAnimation();
  const containerRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    if (isHoveringLogo) {
      controls.start({
        rotate: 360,
        transition: { duration: 10, ease: "linear", repeat: Infinity },
      });
    } else {
      controls.start({
        rotate: 0,
        transition: { duration: 0.8, ease: "easeOut" },
      });
    }
  }, [isHoveringLogo, controls]);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("brian.o.iraru@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] },
    },
  };

  return (
    <section ref={containerRef} className="hero-section">
      {/* Background */}
      <div className="hero-gradient-bg">
        <div className="hero-gradient-overlay" />
      </div>

      {/* Hire Me Logo */}
      <motion.div
        className="hero-hire-logo"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        whileHover={{ scale: 1.05 }}
        onMouseEnter={() => setIsHoveringLogo(true)}
        onMouseLeave={() => setIsHoveringLogo(false)}
      >
        <motion.div
          style={{ transformStyle: "preserve-3d" }}
          animate={{
            rotateX: mousePosition.y * 15 - 7.5,
            rotateY: mousePosition.x * 15 - 7.5,
          }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
        >
          <motion.a
            href="/contact"
            className="relative block w-full h-full rounded-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 shadow-2xl overflow-hidden"
            animate={controls}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-white/30 to-transparent"
              animate={{ x: ["-100%", "100%"] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-white font-bold text-sm md:text-base z-10 tracking-wider">
                Hire Me
              </span>
            </div>
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Main Content */}
      <motion.div
        className="relative z-10 flex flex-col items-center justify-center max-w-7xl mx-auto w-full px-4 md:px-8 pt-20 pb-24"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Profile Section */}
        <motion.div variants={itemVariants} className="hero-profile-container">
          <div className="relative">
            <div className="hero-ring-outer" />
            <div className="hero-ring-inner" />
            
            <motion.div
              className="hero-profile-image"
              animate={{
                y: mousePosition.y * -10,
                x: mousePosition.x * -10,
              }}
              transition={{ type: "spring", stiffness: 150, damping: 20 }}
            >
              <div className="hero-profile-overlay" />
              <img
                src={profileImage}
                alt="Brian Iraru"
                className="hero-profile-img"
              />
              <div className="hero-profile-gradient" />
            </motion.div>
          </div>
        </motion.div>

        {/* Welcome Badge */}
        <motion.div variants={itemVariants} className="hero-welcome-badge">
          <span className="hero-welcome-text">
            ✨ Software Engineer | Full Stack Developer ✨
          </span>
        </motion.div>
        
        {/* Main Title */}
        <motion.h1 variants={itemVariants} className="hero-title">
          <span className="hero-title-prefix">I'm </span>
          <motion.span
            className="hero-title-name"
            animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
            transition={{ duration: 6, repeat: Infinity }}
            style={{ backgroundSize: "200% auto" }}
          >
            Brian Iraru
          </motion.span>
        </motion.h1>

        {/* Typing Animation */}
        <motion.div variants={itemVariants} className="hero-typing">
          <TypeAnimation
            sequence={[
              "Building digital solutions", 1500,
              "Creating animations", 1500,
              "Integrating Daraja API", 1500,
              "Crafting experiences", 1500,
            ]}
            wrapper="div"
            speed={50}
            deletionSpeed={60}
            repeat={Infinity}
          />
        </motion.div>

        {/* Short Story / Bio */}
        <motion.div variants={itemVariants} className="hero-bio">
          <motion.p className="hero-bio-text">
            I'm a software engineer passionate about building web applications that make a difference. 
            I specialize in React, animations with Framer Motion, and integrating Daraja API for M-Pesa payments. 
            My goal is to create fast, beautiful, and user-friendly solutions that people love to use.
          </motion.p>
        </motion.div>

        {/* Key Stats */}
        <motion.div variants={itemVariants} className="hero-stats">
          <div className="hero-stat">
            <FaCode />
            <span>15+ Projects</span>
          </div>
          <div className="hero-stat">
            <FaUsers />
            <span>20+ Clients</span>
          </div>
          <div className="hero-stat">
            <FaStar />
            <span>100% Satisfaction</span>
          </div>
        </motion.div>

        {/* Tech Skills Grid */}
        <motion.div variants={itemVariants} className="hero-skills-section">
          <div className="hero-skills-header">
            <h3 className="hero-skills-title">
              <GiStarsStack />
              Technical Arsenal
              <GiStarsStack />
            </h3>
            <p className="hero-skills-subtitle">Tools & technologies I master</p>
          </div>
          
          <div className="hero-skills-grid">
            {techSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 + index * 0.03 }}
                whileHover={{ scale: 1.03, y: -2 }}
                onMouseEnter={() => setActiveSkill(skill.name)}
                onMouseLeave={() => setActiveSkill(null)}
                className="hero-skill-card"
                style={{ borderColor: `${skill.color}40` }}
              >
                <div className="hero-skill-header">
                  <div className="hero-skill-name-wrapper">
                    <span className="hero-skill-icon" style={{ color: skill.color }}>
                      {skill.icon}
                    </span>
                    <span className="hero-skill-name">{skill.name}</span>
                  </div>
                  <span className="hero-skill-percent" style={{ color: skill.color }}>
                    {skill.percent}%
                  </span>
                </div>
                <div className="hero-skill-bar">
                  <motion.div
                    className="hero-skill-progress"
                    style={{ background: skill.color, width: 0 }}
                    whileInView={{ width: `${skill.percent}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.5 + index * 0.03 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div variants={itemVariants} className="hero-buttons">
          <Link to="/contact" style={{ textDecoration: "none" }}>
            <motion.button className="hero-btn-primary">
              <span style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem" }}>
                <FaRocket />
                Hire Me
              </span>
            </motion.button>
          </Link>

          <a href="/brianiraru.pdf" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
            <motion.button className="hero-btn-secondary">
              <span style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem" }}>
                <FaCloudUploadAlt />
                View Resume
              </span>
            </motion.button>
          </a>
        </motion.div>

        {/* Social Links */}
        <motion.div variants={itemVariants} className="hero-social">
          {[
            { icon: <FaGithub size={20} />, url: "https://github.com/brianiraru", color: "#ffffff", label: "GitHub" },
            { icon: <FaLinkedin size={20} />, url: "https://linkedin.com/in/brianiraru", color: "#0a66c2", label: "LinkedIn" },
            { icon: <FaEnvelope size={20} />, action: handleCopyEmail, color: "#ea4335", label: copied ? "Copied!" : "Email" },
            { icon: <FaTwitter size={20} />, url: "https://twitter.com/brianiraru", color: "#1d9bf0", label: "Twitter" },
          ].map((item, index) => (
            <motion.a
              key={index}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={item.action}
              className="hero-social-link"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="hero-social-icon"
                whileHover={{
                  background: `radial-gradient(circle at 30% 30%, ${item.color}30, transparent)`,
                  boxShadow: `0 0 20px ${item.color}40`,
                }}
              >
                {item.icon}
              </motion.div>
              <span className="hero-social-label">{item.label}</span>
            </motion.a>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="hero-scroll"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        whileHover={{ y: 5 }}
        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: "smooth" })}
      >
        <span className="hero-scroll-text">EXPLORE</span>
        <div className="hero-scroll-icon">
          <div className="hero-scroll-dot" />
        </div>
      </motion.div>

      {/* Skill Highlight Effect */}
      <AnimatePresence>
        {activeSkill && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 pointer-events-none z-0"
            style={{
              background: `radial-gradient(circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, 
                ${techSkills.find(s => s.name === activeSkill)?.color}15 0%, 
                transparent 60%)`,
            }}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Hero;