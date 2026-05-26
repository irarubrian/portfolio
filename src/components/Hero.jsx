import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { 
  FaGithub, FaLinkedin, FaEnvelope, FaTwitter, FaArrowDown, 
  FaCode, FaRocket, FaCloudUploadAlt, FaUsers, FaAward,
  FaShieldAlt, FaInfinity, FaStar, FaLightbulb, FaTrophy
} from "react-icons/fa";
import { FiCopy } from "react-icons/fi";
import { GiStarsStack, GiBrain } from "react-icons/gi";
import "./Hero.css";

const techSkills = [
  { name: 'React.js', percent: 92, color: '#61DAFB' },
  { name: 'Next.js', percent: 88, color: '#000000' },
  { name: 'TypeScript', percent: 86, color: '#3178C6' },
  { name: 'Tailwind CSS', percent: 94, color: '#06B6D4' },
  { name: 'Node.js', percent: 89, color: '#68A063' },
  { name: 'Express.js', percent: 85, color: '#000000' },
  { name: 'Python', percent: 90, color: '#3572A5' },
  { name: 'FastAPI', percent: 84, color: '#009688' },
  { name: 'MongoDB', percent: 86, color: '#47A248' },
  { name: 'PostgreSQL', percent: 88, color: '#336791' },
  { name: 'AWS', percent: 85, color: '#FF9900' },
  { name: 'Docker', percent: 83, color: '#2496ED' },
];

const inspiringQuotes = [
  { text: "Code is like poetry — elegant solutions to complex problems.", author: "Brian Iraru" },
  { text: "Building the future, one commit at a time.", author: "Brian Iraru" },
  { text: "Simplicity is the ultimate sophistication in engineering.", author: "Brian Iraru" },
  { text: "Great developers don't just write code — they craft experiences.", author: "Brian Iraru" },
  { text: "Innovation distinguishes between a leader and a follower.", author: "Brian Iraru" },
];

const Hero = () => {
  const [isHoveringLogo, setIsHoveringLogo] = useState(false);
  const [copied, setCopied] = useState(false);
  const [activeSkill, setActiveSkill] = useState(null);
  const [activeQuoteIndex, setActiveQuoteIndex] = useState(0);
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
    const interval = setInterval(() => {
      setActiveQuoteIndex((prev) => (prev + 1) % inspiringQuotes.length);
    }, 5000);
    return () => clearInterval(interval);
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
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Brian Iraru"
                className="hero-profile-img"
              />
              <div className="hero-profile-gradient" />
            </motion.div>
          </div>

          {/* Floating Badges */}
          {techSkills.slice(0, 6).map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ 
                opacity: 1, 
                scale: 1,
                x: index % 2 === 0 ? [0, -10, 0] : [0, 10, 0],
                y: [0, -5, 0],
              }}
              transition={{ 
                delay: 0.8 + index * 0.15,
                x: { duration: 4, repeat: Infinity, delay: index },
                y: { duration: 3, repeat: Infinity, delay: index * 0.5 },
              }}
              className="hero-badge"
              style={{
                top: index < 3 ? `${5 + index * 12}%` : `${75 + (index - 3) * 8}%`,
                [index % 2 === 0 ? "left" : "right"]: index < 3 ? "-10%" : "-8%",
                backgroundColor: `${skill.color}20`,
                borderColor: `${skill.color}60`,
                boxShadow: `0 0 15px ${skill.color}30`,
              }}
              whileHover={{ scale: 1.15, backgroundColor: `${skill.color}40` }}
              onMouseEnter={() => setActiveSkill(skill.name)}
              onMouseLeave={() => setActiveSkill(null)}
            >
              <span style={{ display: "flex", alignItems: "center", gap: "0.375rem" }}>
                <span style={{ width: "0.375rem", height: "0.375rem", borderRadius: "50%", background: skill.color }} />
                {skill.name}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Welcome Badge */}
        <motion.div variants={itemVariants} className="hero-welcome-badge">
          <span className="hero-welcome-text">
            ✨ Welcome to my digital universe ✨
          </span>
        </motion.div>
        
        {/* Main Title */}
        <motion.h1 variants={itemVariants} className="hero-title">
          <span className="hero-title-prefix">Hi, I'm </span>
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
              "Creative Technologist", 1200,
              "Full Stack Architect", 1200,
              "Problem Solver", 1200,
              "Innovation Driver", 1200,
              "Tech Entrepreneur", 1200,
            ]}
            wrapper="div"
            speed={40}
            deletionSpeed={60}
            repeat={Infinity}
          />
        </motion.div>

        {/* Quote Rotator */}
        <motion.div variants={itemVariants} className="hero-quote">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeQuoteIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="hero-quote-card"
            >
              <p className="hero-quote-text">"{inspiringQuotes[activeQuoteIndex].text}"</p>
              <p className="hero-quote-author">— {inspiringQuotes[activeQuoteIndex].author}</p>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Professional Bio */}
        <motion.div variants={itemVariants} className="hero-bio">
          <motion.p className="hero-bio-text">
            I craft digital experiences that blend cutting-edge technology with human-centered design. 
            As a full-stack architect and creative technologist, I transform complex challenges into 
            elegant, scalable solutions that drive real impact. With expertise across the modern web stack, 
            I deliver high-performance applications that users love.
          </motion.p>
        </motion.div>

        {/* Key Stats */}
        <motion.div variants={itemVariants} style={{ display: "flex", gap: "1rem", flexWrap: "wrap", justifyContent: "center", marginTop: "0.5rem" }}>
          <div style={{ background: "rgba(59,130,246,0.1)", padding: "0.5rem 1rem", borderRadius: "2rem", border: "1px solid rgba(59,130,246,0.2)", display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <FaTrophy style={{ color: "#f59e0b" }} />
            <span style={{ fontSize: "0.875rem", color: "#d1d5db" }}>10+ Projects Completed</span>
          </div>
          <div style={{ background: "rgba(59,130,246,0.1)", padding: "0.5rem 1rem", borderRadius: "2rem", border: "1px solid rgba(59,130,246,0.2)", display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <FaUsers style={{ color: "#10b981" }} />
            <span style={{ fontSize: "0.875rem", color: "#d1d5db" }}>15+ Happy Clients</span>
          </div>
          <div style={{ background: "rgba(59,130,246,0.1)", padding: "0.5rem 1rem", borderRadius: "2rem", border: "1px solid rgba(59,130,246,0.2)", display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <FaStar style={{ color: "#fbbf24" }} />
            <span style={{ fontSize: "0.875rem", color: "#d1d5db" }}>100% Client Satisfaction</span>
          </div>
        </motion.div>

        {/* Tech Skills Grid */}
        <motion.div variants={itemVariants} className="hero-skills-section">
          <div className="hero-skills-header">
            <h3 className="hero-skills-title">
              <GiStarsStack style={{ color: "#60a5fa" }} />
              Technical Arsenal
              <GiStarsStack style={{ color: "#a78bfa" }} />
            </h3>
            <p className="hero-skills-subtitle">Tools & technologies I master</p>
          </div>
          
          <div className="hero-skills-grid">
            {techSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 + index * 0.05 }}
                whileHover={{ scale: 1.03, y: -2 }}
                onMouseEnter={() => setActiveSkill(skill.name)}
                onMouseLeave={() => setActiveSkill(null)}
                className="hero-skill-card"
                style={{ borderColor: `${skill.color}40` }}
              >
                <div className="hero-skill-header">
                  <span className="hero-skill-name">{skill.name}</span>
                  <span className="hero-skill-percent" style={{ color: skill.color }}>{skill.percent}%</span>
                </div>
                <div className="hero-skill-bar">
                  <motion.div
                    className="hero-skill-progress"
                    style={{ background: skill.color, width: 0 }}
                    whileInView={{ width: `${skill.percent}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.5 + index * 0.05 }}
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
                Start a Project
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.6 }}
              />
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
            { icon: <FaGithub size={22} />, url: "https://github.com/brianiraru", color: "#ffffff", label: "GitHub" },
            { icon: <FaLinkedin size={22} />, url: "https://linkedin.com/in/brianiraru", color: "#0a66c2", label: "LinkedIn" },
            { icon: <FaEnvelope size={22} />, action: handleCopyEmail, color: "#ea4335", label: copied ? "Copied!" : "Email" },
            { icon: <FaTwitter size={22} />, url: "https://twitter.com/brianiraru", color: "#1d9bf0", label: "Twitter" },
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
        <span className="hero-scroll-text">SCROLL</span>
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