import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaTwitter } from "react-icons/fa";
import profileImage from "../assets/profile.jpeg";

const heroIntro = `With a strong foundation in software engineering, I design and develop robust, scalable systems that power seamless digital experiences. I build efficient back-end architectures and responsive front-end interfaces that prioritize performance, maintainability, and user satisfaction. Whether architecting complex APIs, implementing secure authentication flows, or optimizing code for efficiency, I am driven by a passion for clean, purposeful engineering. My approach combines deep technical expertise with a problem-solving mindset to deliver innovative solutions that meet real-world demands and exceed expectations.`;

const Hero = () => {
  return (
    <section
      className="hero-section"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #111827 0%, #000000 100%)",
        color: "#fff",
        padding: "2rem 1.5rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background pattern */}
      <div 
        className="hero-bg-pattern"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: "radial-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          opacity: 0.3,
          zIndex: 0
        }}
      />

      {/* Circular Logo at the Top */}
      <motion.div
        className="logo-container"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        <motion.a
          href="/contact"
          className="circular-logo"
          style={{
            display: "block",
            position: "relative",
            width: "100%",
            height: "100%",
            borderRadius: "50%",
            background: "linear-gradient(135deg, #2563eb 60%, #111827 100%)",
            boxShadow: "0 8px 32px rgba(37, 99, 235, 0.18)",
            textAlign: "center",
            textDecoration: "none",
            cursor: "pointer",
            overflow: "visible",
          }}
          whileHover={{ scale: 1.08, boxShadow: "0 12px 40px rgba(37, 99, 235, 0.3)" }}
          whileTap={{ scale: 0.97 }}
          title="Hire Me"
        >
          <motion.div
            className="logo-text"
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              color: "#fff",
              fontWeight: 800,
              fontSize: "1.1rem",
              letterSpacing: "1px",
              zIndex: 2,
              pointerEvents: "none"
            }}
          >
            Hire Me
          </motion.div>
          <motion.div
            className="rotating-text-container"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              pointerEvents: "none",
              zIndex: 1
            }}
            animate={{ rotate: 360 }}
            transition={{ 
              repeat: Infinity, 
              duration: 25,
              ease: "linear" 
            }}
          >
            <svg 
              width="100%" 
              height="100%" 
              viewBox="0 0 140 140"
              preserveAspectRatio="xMidYMid meet"
            >
              <defs>
                <path 
                  id="circlePath" 
                  d="M70,70 m-60,0 a60,60 0 1,1 120,0 a60,60 0 1,1 -120,0" 
                />
              </defs>
              <text 
                fill="#fff" 
                fontSize="10" 
                fontWeight="600"
                fontFamily="Arial, sans-serif"
                letterSpacing="2"
              >
                <textPath 
                  xlinkHref="#circlePath" 
                  startOffset="0"
                  textAnchor="start"
                  dominantBaseline="middle"
                >
                  • SOFTWARE ENGINEER • FULL STACK DEVELOPER • HIRE ME • 
                </textPath>
              </text>
            </svg>
          </motion.div>
        </motion.a>
      </motion.div>

      <motion.div
        className="hero-content"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "3rem",
          maxWidth: "1200px",
          margin: "0 auto",
          width: "100%",
          position: "relative",
          zIndex: 1,
          paddingTop: "6rem"
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Profile Picture Section */}
        <motion.div
          className="profile-container"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <div
            className="profile-image-wrapper"
            style={{
              width: "180px",
              height: "180px",
              borderRadius: "50%",
              overflow: "hidden",
              border: "3px solid #3b82f6",
              boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.25)",
            }}
          >
            <img
              src={profileImage}
              alt="Brian Iraru"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "top center",
                filter: "grayscale(10%) contrast(110%) brightness(105%)",
              }}
            />
          </div>
        </motion.div>

        {/* Text Content Section */}
        <div
          className="text-content"
          style={{
            textAlign: "center",
            maxWidth: "700px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <motion.h1
            className="hero-title"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Hi, I'm{" "}
            <span className="name-gradient">
              Brian Iraru
            </span>
          </motion.h1>

          <motion.div
            className="type-animation-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <TypeAnimation
              sequence={[
                "Software Engineer",
                1500,
                "Full Stack Developer",
                1500,
                "Tech Enthusiast",
                1500,
                "Problem Solver",
                1500,
              ]}
              wrapper="div"
              speed={50}
              deletionSpeed={70}
              style={{
                display: "inline-block",
                color: "#93c5fd",
                fontStyle: "italic",
                fontSize: "clamp(1rem, 2vw, 1.5rem)",
                minHeight: "2.5rem"
              }}
              repeat={Infinity}
            />
          </motion.div>

          {/* Engineering Summary Section */}
          <motion.div
            className="hero-intro"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
            {heroIntro}
          </motion.div>

          {/* Buttons Section */}
          <motion.div
            className="hero-buttons"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            <Link to="/contact" className="button-link">
              <motion.button
                className="primary-button"
                whileHover={{
                  scale: 1.05,
                  background: "linear-gradient(90deg, #1d4ed8, #2563eb)",
                  boxShadow: "0 6px 16px rgba(37, 99, 235, 0.3)",
                }}
                whileTap={{ scale: 0.98 }}
              >
                Connect with me
              </motion.button>
            </Link>
            <a
              href="/brianiraru.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="button-link"
            >
              <motion.button
                className="tertiary-button"
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "rgba(59, 130, 246, 0.2)",
                  boxShadow: "0 6px 16px rgba(0, 0, 0, 0.15)",
                }}
                whileTap={{ scale: 0.98 }}
              >
                View My CV
              </motion.button>
            </a>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="scroll-indicator"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <span className="scroll-text">Scroll down</span>
        <div className="scroll-icon">
          <motion.div
            className="scroll-dot"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </motion.div>

      <style jsx>{`
        .hero-section {
          position: relative;
          padding-top: 7rem;
        }
        
        .hero-content {
          padding-top: 6rem;
        }

        .logo-container {
          position: absolute;
          top: 2rem;
          right: 2rem;
          z-index: 10;
          width: 140px;
          height: 140px;
        }
        @media (max-width: 768px) {
          .logo-container {
            width: 90px;
            height: 90px;
            top: 1rem;
            right: 1rem;
          }
        }
        @media (max-width: 480px) {
          .logo-container {
            width: 64px;
            height: 64px;
            top: 0.5rem;
            right: 0.5rem;
          }
        }

        .profile-image-wrapper {
          width: 180px;
          height: 180px;
        }

        @media (max-width: 768px) {
          .profile-image-wrapper {
            width: 150px;
            height: 150px;
          }
        }
        @media (max-width: 480px) {
          .profile-image-wrapper {
            width: 120px;
            height: 120px;
          }
        }

        .hero-title {
          font-size: clamp(2rem, 5vw, 3rem);
          font-weight: 700;
          margin-bottom: 1rem;
          line-height: 1.2;
        }

        .name-gradient {
          background: linear-gradient(90deg, #3b82f6, #93c5fd);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .hero-intro {
          margin: 2rem 0;
          max-width: 700px;
          text-align: center;
          font-size: 1.15rem;
          color: #e0e7ef;
          line-height: 1.7;
          font-weight: 500;
          background: rgba(30, 41, 59, 0.3);
          padding: 1.5rem;
          border-radius: 12px;
          backdrop-filter: blur(5px);
          border: 1px solid rgba(59, 130, 246, 0.2);
        }

        .hero-buttons {
          display: flex;
          gap: 1rem;
          width: 100%;
          justify-content: center;
          flex-wrap: wrap;
          margin-top: 2.5rem;
        }

        .button-link {
          text-decoration: none;
          min-width: 180px;
        }

        .primary-button {
          padding: 0.85rem 2.2rem;
          background: linear-gradient(90deg, #2563eb, #3b82f6);
          color: white;
          border-radius: 9999px;
          font-weight: 600;
          font-size: 1.05rem;
          border: none;
          cursor: pointer;
          box-shadow: 0 4px 12px rgba(37, 99, 235, 0.2);
          min-width: 180px;
          letter-spacing: 0.5px;
          transition: all 0.3s ease;
        }

        .tertiary-button {
          padding: 0.85rem 2.2rem;
          background: rgba(59, 130, 246, 0.1);
          color: #93c5fd;
          border-radius: 9999px;
          font-weight: 600;
          font-size: 1.05rem;
          border: 2px solid rgba(59, 130, 246, 0.3);
          cursor: pointer;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          min-width: 180px;
          letter-spacing: 0.5px;
          transition: all 0.3s ease;
          backdrop-filter: blur(5px);
        }

        .scroll-indicator {
          position: absolute;
          bottom: 2rem;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .scroll-text {
          color: rgba(255, 255, 255, 0.6);
          margin-bottom: 0.5rem;
          font-size: 0.8rem;
          text-transform: uppercase;
          letter-spacing: 2px;
        }

        .scroll-icon {
          width: 24px;
          height: 40px;
          border: 2px solid rgba(255, 255, 255, 0.6);
          border-radius: 9999px;
          display: flex;
          justify-content: center;
          padding-top: 0.5rem;
        }

        .scroll-dot {
          width: 4px;
          height: 8px;
          background-color: rgba(255, 255, 255, 0.6);
          border-radius: 9999px;
        }

        html, body, #root {
          max-width: 100vw;
          overflow-x: hidden;
        }
      `}</style>
    </section>
  );
};

export default Hero;