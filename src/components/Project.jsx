import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaExternalLinkAlt, FaCode, FaCloudSun, FaPalette, 
  FaPlane, FaFilm, FaRocket, FaStar, FaGithub
} from 'react-icons/fa';
import './Project.css';

const projects = [
  {
    name: 'Weather App Live',
    link: 'https://weather-a-pp-psi.vercel.app/',
    github: 'https://github.com/brianiraru/weather-app',
    icon: <FaCloudSun />,
    tags: ['React', 'API Integration', 'CSS3', 'JavaScript'],
    description: 'A sophisticated weather application that provides real-time weather data for any city worldwide. Features include live temperature tracking, humidity levels, wind speed analysis, and 5-day forecasts. Built with a responsive UI that adapts seamlessly across all devices.',
    fullDescription: 'This weather application demonstrates advanced API integration and asynchronous data handling. Key features include: city search with autocomplete suggestions, real-time weather updates with animated icons, detailed hourly and weekly forecasts, interactive weather maps, and customizable temperature units (°C/°F). The app implements robust error handling for invalid locations, loading states with skeleton screens, and a clean, modern interface. All navigation and API requests are handled without page reloads, ensuring a smooth user experience. The project showcases my ability to work with RESTful APIs, manage state effectively, and build production-ready web applications with a focus on usability and performance.',
    stats: ['API Calls', 'Real-time Data', 'Responsive Design']
  },
  {
    name: 'Fashion Design Frontend',
    link: 'https://fashion-design-fronted-rbcz.vercel.app/',
    github: 'https://github.com/brianiraru/fashion-design',
    icon: <FaPalette />,
    tags: ['React', 'Tailwind CSS', 'Figma', 'Responsive'],
    description: 'A stunning fashion design platform featuring an elegant gallery, interactive design tools, and seamless animations. Built with modern CSS techniques and inspired by contemporary design trends.',
    fullDescription: 'This fashion design platform showcases my expertise in creating visually stunning, user-centric interfaces. The project features: dynamic product galleries with filtering options, an interactive design studio for visualizing custom pieces, smooth page transitions, and a fully responsive layout that works flawlessly on mobile, tablet, and desktop. I implemented advanced CSS animations, custom components, and optimized image loading for performance. The design follows WCAG accessibility guidelines and includes features like dark mode support, keyboard navigation, and screen reader compatibility. This project demonstrates my ability to translate creative design concepts into pixel-perfect, interactive web experiences.',
    stats: ['Responsive', 'Animations', 'Accessibility']
  },
  {
    name: 'Aviation Hub',
    link: 'https://aviation-14zg.vercel.app/',
    github: 'https://github.com/brianiraru/aviation-hub',
    icon: <FaPlane />,
    tags: ['React', 'Chart.js', 'API', 'Data Visualization'],
    description: 'A comprehensive aviation platform for enthusiasts and professionals featuring detailed aircraft information, flight tracking, and interactive data visualizations.',
    fullDescription: 'Aviation Hub is a data-intensive platform that provides comprehensive aviation information. Features include: real-time flight tracking with interactive maps, detailed aircraft specifications database, airline performance analytics, and flight status monitoring. I integrated multiple aviation APIs to fetch live data, implemented complex state management for handling large datasets, and created custom data visualizations using Chart.js. The platform includes search and filter functionality, saved preferences, and a responsive dashboard. This project demonstrates my ability to work with complex data structures, implement real-time features, and create engaging, informative user interfaces for specialized audiences.',
    stats: ['Real-time Data', 'Charts', 'API Integration']
  },
  {
    name: 'Pentagon Movie',
    link: 'https://pentagon-movie-pwd.vercel.app/',
    github: 'https://github.com/brianiraru/pentagon-movie',
    icon: <FaFilm />,
    tags: ['React', 'Movie API', 'Context API', 'Search'],
    description: 'A feature-rich movie database app allowing users to search for films, view ratings, cast information, and detailed movie descriptions.',
    fullDescription: 'Pentagon Movie is a complete movie discovery platform built with React. Key features include: advanced search with filters by genre, year, and rating, detailed movie pages with cast and crew information, user ratings and reviews, trending movies section, and personalized watchlists. I implemented efficient search algorithms, pagination, and infinite scrolling for optimal performance. The app caches API responses to reduce requests and improve load times. It features a clean, intuitive interface with smooth animations and transitions. This project showcases my skills in API consumption, component-based architecture, state management with Context API, and building scalable, maintainable front-end applications.',
    stats: ['Search', 'Filtering', 'Responsive']
  }
];

const cardVariants = {
  offscreen: { y: 50, opacity: 0 },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: { type: 'spring', bounce: 0.3, duration: 0.8 },
  },
};

const Project = () => {
  return (
    <section className="portfolio-section">
      <div className="portfolio-container">
        {/* Header */}
        <motion.div
          className="portfolio-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="portfolio-badge">
            <FaRocket style={{ display: 'inline', marginRight: '0.5rem' }} />
            My Work
          </span>
          <h1 className="portfolio-title">
            Featured{' '}
            <span className="portfolio-title-gradient">
              Projects
            </span>
          </h1>
          <p className="portfolio-subtitle">
            A showcase of my recent work, demonstrating my skills in web development,
            API integration, and creating beautiful, functional user experiences.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="project-card"
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, margin: '-50px' }}
              variants={cardVariants}
            >
              <div className="project-card-content">
                {/* Icon */}
                <div className="project-icon">
                  {project.icon}
                </div>

                <h3 className="project-name">{project.name}</h3>

                {/* Tech Tags */}
                <div className="project-tags">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="project-tag">{tag}</span>
                  ))}
                </div>

                <p className="project-description">{project.fullDescription.substring(0, 180)}...</p>

                {/* Project Stats */}
                <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '1.2rem', flexWrap: 'wrap' }}>
                  {project.stats.map((stat, idx) => (
                    <span key={idx} style={{ 
                      fontSize: '0.7rem', 
                      color: '#6366f1',
                      background: 'rgba(99, 102, 241, 0.1)',
                      padding: '0.25rem 0.6rem',
                      borderRadius: '9999px'
                    }}>
                      {stat}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    Live Demo <FaExternalLinkAlt size={12} />
                  </a>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        padding: '0.625rem 1.25rem',
                        background: 'transparent',
                        border: '1px solid #6366f1',
                        color: '#6366f1',
                        borderRadius: '0.75rem',
                        textDecoration: 'none',
                        fontWeight: '600',
                        fontSize: '0.875rem',
                        transition: 'all 0.3s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = '#6366f1';
                        e.currentTarget.style.color = 'white';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = 'transparent';
                        e.currentTarget.style.color = '#6366f1';
                      }}
                    >
                      <FaGithub size={14} /> Source Code
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          className="portfolio-stats"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="stat-card">
            <div className="stat-number">8+</div>
            <div className="stat-label">Projects Completed</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">100%</div>
            <div className="stat-label">Client Satisfaction</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">4</div>
            <div className="stat-label">Technologies Used</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">24/7</div>
            <div className="stat-label">Live Support</div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="portfolio-cta"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3>Have a Project in Mind?</h3>
          <p>Let's collaborate and bring your ideas to life with clean, scalable code.</p>
          <a href="/contact" className="portfolio-cta-button">
            Start a Project <FaRocket />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Project;