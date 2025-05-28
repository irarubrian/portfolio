import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import profileImage from "../assets/profile.jpeg";

const Hero = () => {
  return (
    <section
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #111827 0%, black)",
        color: "#fff",
        padding: "2rem 1.5rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <motion.div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "3rem",
          maxWidth: "1200px",
          margin: "0 auto",
          width: "100%",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Profile Picture Section */}
        <motion.div
          style={{
            position: "relative",
            zIndex: 1,
          }}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <div
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
              alt="Profile"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "top center",
                filter: "grayscale(10%)",
              }}
            />
          </div>
        </motion.div>

        {/* Text Content Section */}
        <div
          style={{
            textAlign: "center",
            maxWidth: "600px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <motion.h1
            style={{
              fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
              fontWeight: 700,
              marginBottom: "1rem",
              lineHeight: 1.2,
            }}
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Hi, I'm{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #3b82f6, #93c5fd)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              Brian Iraru
            </span>
          </motion.h1>

          <motion.div
            style={{
              fontSize: "clamp(0.9rem, 2vw, 1.25rem)",
              marginBottom: "2rem",
              minHeight: "3rem",
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <TypeAnimation
              sequence={[
                "Junior Software Engineer",
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
              }}
              repeat={Infinity}
            />
          </motion.div>

          <motion.p
            style={{
              color: "rgba(255, 255, 255, 0.8)",
              fontSize: "1rem",
              marginBottom: "2rem",
              lineHeight: 1.6,
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
            I build digital solutions with modern technologies. Passionate about 
            clean code, intuitive interfaces, and continuous learning in software 
            development.
          </motion.p>

          <motion.div
            style={{
              display: "flex",
              gap: "1rem",
              width: "100%",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            <Link to="/contact" style={{ textDecoration: "none" }}>
              <motion.button
                style={{
                  padding: "0.75rem 2rem",
                  background: "linear-gradient(90deg, #2563eb, #3b82f6)",
                  color: "white",
                  borderRadius: "9999px",
                  fontWeight: 500,
                  fontSize: "0.95rem",
                  border: "none",
                  cursor: "pointer",
                  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                  position: "relative",
                  overflow: "hidden",
                  zIndex: 1,
                  minWidth: "180px",
                }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.15)",
                }}
                whileTap={{ scale: 0.98 }}
              >
                Connect with me
              </motion.button>
            </Link>
            <Link to="/portfolio" style={{ textDecoration: "none" }}>
              <motion.button
                style={{
                  padding: "0.75rem 2rem",
                  background: "transparent",
                  color: "#93c5fd",
                  borderRadius: "9999px",
                  fontWeight: 500,
                  fontSize: "0.95rem",
                  border: "2px solid #3b82f6",
                  cursor: "pointer",
                  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                  minWidth: "180px",
                }}
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "rgba(59, 130, 246, 0.1)",
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.15)",
                }}
                whileTap={{ scale: 0.98 }}
              >
                View Portfolio
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        style={{
          position: "absolute",
          bottom: "2rem",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <span
          style={{
            color: "rgba(255, 255, 255, 0.6)",
            marginBottom: "0.5rem",
            fontSize: "0.8rem",
          }}
        >
          Scroll down
        </span>
        <div
          style={{
            width: "20px",
            height: "32px",
            border: "2px solid rgba(255, 255, 255, 0.6)",
            borderRadius: "9999px",
            display: "flex",
            justifyContent: "center",
            paddingTop: "0.5rem",
          }}
        >
          <motion.div
            style={{
              width: "3px",
              height: "6px",
              backgroundColor: "rgba(255, 255, 255, 0.6)",
              borderRadius: "9999px",
            }}
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;