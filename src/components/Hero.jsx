import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <div className="hero text-center p-6">
      <TypeAnimation
        sequence={[
          "I'm a Junior Software Engineer.",
          1000,
          "I'm a Professional Web Developer.",
          1000,
        ]}
        wrapper="div"
        speed={45}
        style={{
          fontSize: "2rem",
          fontWeight: "bold",
          marginBottom: "1rem",
          fontStyle: "italic"
        }}
        repeat={Infinity}
      />

      <motion.div
        className="hero-actions"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
      >
        <Link to="/contact">
          <motion.button
            className="hero-connect mt-4 px-6 py-2 bg-blue-600 text-white rounded-full"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Connect with me
          </motion.button>
        </Link>
      </motion.div>

      
      </div>
    
  );
};

export default Hero;
