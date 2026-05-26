import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaCode, FaDatabase, FaUsers, FaServer, FaLaptopCode, FaGlobe,
  FaShieldAlt, FaArrowRight, FaTimes, FaRocket, FaCloudUploadAlt,
  FaChartLine, FaLightbulb, FaClock, FaMoneyBillWave
} from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';
import './Services.css';

const servicesData = [
  {
    title: 'Consultation & Code Reviews',
    icon: <FaCode />,
    category: 'consulting',
    description: [
      'Personalized mentorship for junior developers',
      'Comprehensive code reviews with actionable feedback',
      'Implementation guidance for scalable applications',
      'Technical debt assessment and refactoring strategies',
      'Best practices implementation and team training'
    ],
    more: 'I offer tailored one-on-one mentoring sessions, detailed code walkthroughs, and constructive feedback to accelerate your development skills. My approach combines practical examples with theoretical foundations, ensuring your team grows and your codebase improves sustainably.',
    benefits: ['Faster team growth', 'Higher code quality', 'Reduced technical debt', 'Improved developer confidence'],
    color: '#6366f1',
    gradient: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
  },
  {
    title: 'Data-Driven Applications',
    icon: <FaDatabase />,
    category: 'development',
    description: [
      'Relational database modeling with SQLAlchemy',
      'Advanced SQL query optimization strategies',
      'Real-time data applications using WebSockets',
      'Data migration planning and execution',
      'Business intelligence and analytics integration'
    ],
    more: 'I specialize in designing robust, scalable data architectures that evolve with your business needs. From initial schema design to complex query optimization, I ensure your data layer is both performant and maintainable, supporting real-time insights and long-term growth.',
    benefits: ['Faster data access', 'Scalable architecture', 'Real-time insights', 'Reduced database costs'],
    color: '#10b981',
    gradient: 'linear-gradient(135deg, #10b981 0%, #34d399 100%)',
  },
  {
    title: 'Project Collaboration',
    icon: <FaUsers />,
    category: 'consulting',
    description: [
      'Git version control strategies & branching models',
      'GitHub/GitLab CI/CD workflow automation',
      'Agile & Scrum development practices',
      'Code review best practices & pull request templates',
      'Team workflow optimization and documentation'
    ],
    more: 'With extensive experience in agile environments, I help development teams establish efficient collaboration workflows. This includes implementing proper Git strategies, automated CI/CD pipelines, and effective code review processes that reduce friction and accelerate delivery.',
    benefits: ['Streamlined workflows', 'Faster delivery times', 'Better team coordination', 'Reduced merge conflicts'],
    color: '#3b82f6',
    gradient: 'linear-gradient(135deg, #3b82f6 0%, #60a5fa 100%)',
  },
  {
    title: 'API Development',
    icon: <FaServer />,
    category: 'development',
    description: [
      'RESTful API design & implementation (OpenAPI)',
      'JWT, OAuth2, API key authentication strategies',
      'Third-party API integrations & webhooks',
      'API documentation using Swagger/OpenAPI',
      'API versioning and deprecation strategies'
    ],
    more: 'I build secure, well-documented APIs with proper authentication, rate limiting, and comprehensive error handling. Whether you need internal microservices or public-facing endpoints, I ensure reliability, scalability, and seamless integration for your frontend or external consumers.',
    benefits: ['Secure endpoints', 'Easy integration', 'Comprehensive docs', 'High availability'],
    color: '#f59e0b',
    gradient: 'linear-gradient(135deg, #f59e0b 0%, #fbbf24 100%)',
  },
  {
    title: 'Full-Stack Development',
    icon: <FaLaptopCode />,
    category: 'development',
    description: [
      'End-to-end app development (React + Flask/FastAPI)',
      'Feature implementation from database schema to UI',
      'Performance optimization across frontend & backend',
      'Deployment strategies (Docker, Vercel, AWS)',
      'End-to-end testing and quality assurance'
    ],
    more: 'From concept to deployment, I deliver complete solutions with modern React frontends and Python backends. My full-stack approach ensures seamless integration between components, fast load times, and a maintainable architecture that scales with your user base.',
    benefits: ['Complete solutions', 'Seamless integration', 'Optimized performance', 'Scalable architecture'],
    color: '#ec4899',
    gradient: 'linear-gradient(135deg, #ec4899 0%, #f472b6 100%)',
  },
  {
    title: 'Web Development',
    icon: <FaGlobe />,
    category: 'development',
    description: [
      'Responsive frontend development (Tailwind, CSS-in-JS)',
      'Authentication flows & protected routes',
      'Core Web Vitals & performance optimization',
      'WCAG accessibility compliance',
      'Progressive Web Apps (PWA) development'
    ],
    more: 'I create modern, accessible websites with responsive designs that work flawlessly across all devices. My frontend work focuses on intuitive user interfaces, attention to performance metrics, and inclusive design practices that reach every user.',
    benefits: ['Mobile responsive', 'Fast loading times', 'Accessible design', 'SEO optimized'],
    color: '#8b5cf6',
    gradient: 'linear-gradient(135deg, #8b5cf6 0%, #a78bfa 100%)',
  },
  {
    title: 'Security & Performance',
    icon: <FaShieldAlt />,
    category: 'consulting',
    description: [
      'Security vulnerability assessments & penetration testing',
      'Application performance profiling & bottleneck resolution',
      'Secure coding guidelines & dependency auditing',
      'Scalability analysis & infrastructure recommendations',
      'DDoS mitigation and security hardening'
    ],
    more: 'I help you identify security gaps and performance bottlenecks before they become critical. Through comprehensive audits, automated tooling, and code-level improvements, I ensure your application is robust, fast, and resilient against modern threats and traffic spikes.',
    benefits: ['Enhanced security', 'Faster performance', 'Reduced risks', 'Peace of mind'],
    color: '#ef4444',
    gradient: 'linear-gradient(135deg, #ef4444 0%, #f97316 100%)',
  },
  {
    title: 'Cloud Deployment',
    icon: <FaCloudUploadAlt />,
    category: 'consulting',
    description: [
      'AWS/GCP/Azure cloud architecture design',
      'Container orchestration with Docker & Kubernetes',
      'Serverless architecture implementation',
      'CI/CD pipeline setup and automation',
      'Cloud cost optimization strategies'
    ],
    more: 'I help businesses leverage cloud technologies for scalability and reliability. From initial architecture design to deployment automation, I ensure your applications are cloud-ready, cost-effective, and resilient to failures.',
    benefits: ['Scalable infrastructure', 'Reduced costs', 'High availability', 'Automated deployments'],
    color: '#06b6d4',
    gradient: 'linear-gradient(135deg, #06b6d4 0%, #22d3ee 100%)',
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

const modalVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] },
  },
  exit: { opacity: 0, scale: 0.95, y: 10, transition: { duration: 0.2 } },
};

const Services = () => {
  const [modal, setModal] = useState({ open: false, content: null });
  const [activeTab, setActiveTab] = useState('all');

  const filteredServices = activeTab === 'all' 
    ? servicesData 
    : servicesData.filter((service) => service.category === activeTab);

  const handleLearnMore = (service) => {
    setModal({ open: true, content: service });
  };

  const closeModal = () => setModal({ open: false, content: null });

  return (
    <section className="services-section" id="services">
      <div className="services-container">
        {/* Header */}
        <motion.div
          className="services-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="services-badge">
            <FaRocket style={{ display: 'inline', marginRight: '0.5rem' }} />
            What I Offer
          </span>
          <h2 className="services-title">
            Professional{' '}
            <span className="services-title-gradient">
              Services
            </span>
          </h2>
          <p className="services-subtitle">
            Comprehensive development solutions tailored to your technical requirements and business
            objectives — from architecture design to performance tuning.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <div className="services-filters">
          {[
            { id: 'all', label: 'All Services' },
            { id: 'development', label: '💻 Development' },
            { id: 'consulting', label: '🎯 Consulting' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`filter-btn ${
                activeTab === tab.id ? 'filter-btn-active' : 'filter-btn-inactive'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="services-grid">
          {filteredServices.map((service, idx) => (
            <motion.div
              key={idx}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, margin: '-50px' }}
              variants={cardVariants}
              className="service-card"
            >
              <div
                className="service-card-gradient"
                style={{ background: service.gradient }}
              />
              <div className="service-card-content">
                {/* Icon */}
                <div
                  className="service-icon-wrapper"
                  style={{ background: service.gradient }}
                >
                  <div className="service-icon">{service.icon}</div>
                </div>

                <h3 className="service-title">{service.title}</h3>

                <ul className="service-description-list">
                  {service.description.slice(0, 4).map((desc, i) => (
                    <li key={i} className="service-description-item">
                      <span
                        className="service-dot"
                        style={{ backgroundColor: service.color }}
                      />
                      <span>{desc}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => handleLearnMore(service)}
                  className="service-learn-btn"
                  style={{ borderColor: service.color, color: service.color }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = service.gradient;
                    e.currentTarget.style.color = 'white';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'white';
                    e.currentTarget.style.color = service.color;
                  }}
                >
                  Learn More <FaArrowRight className="text-sm" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Why Choose Me Section */}
        <motion.div
          className="services-cta"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="cta-title">Why Choose Me?</h3>
          <div className="why-choose-grid">
            <div className="why-choose-item">
              <FaClock size={32} />
              <h4>Timely Delivery</h4>
              <p>Projects delivered on schedule</p>
            </div>
            <div className="why-choose-item">
              <FaChartLine size={32} />
              <h4>Quality Focused</h4>
              <p>Clean, maintainable code</p>
            </div>
            <div className="why-choose-item">
              <FaLightbulb size={32} />
              <h4>Innovative Solutions</h4>
              <p>Creative problem solving</p>
            </div>
            <div className="why-choose-item">
              <FaMoneyBillWave size={32} />
              <h4>Competitive Rates</h4>
              <p>Value for your investment</p>
            </div>
          </div>

          <h3 className="cta-title" style={{ fontSize: '1.5rem', marginTop: '1rem' }}>
            Ready to Start Your Project?
          </h3>
          <p className="cta-text">
            Let's discuss how I can help bring your ideas to life with clean, scalable, and secure code.
            Whether you need a complete web application, API integration, or technical consultation,
            I'm here to help you succeed.
          </p>
          <motion.a
            href="mailto:brian.o.iraru@gmail.com?subject=Service%20Inquiry"
            className="cta-button"
            style={{ background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)' }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            Start a Conversation <FiExternalLink />
          </motion.a>
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {modal.open && modal.content && (
          <motion.div
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              className="modal-container"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="modal-header">
                <div
                  className="modal-icon"
                  style={{ background: modal.content.gradient }}
                >
                  <div style={{ fontSize: '2rem', color: 'white' }}>{modal.content.icon}</div>
                </div>
                <div className="modal-title-section">
                  <h3 className="modal-title">{modal.content.title}</h3>
                  <button onClick={closeModal} className="modal-close-btn" aria-label="Close">
                    <FaTimes size={20} />
                  </button>
                </div>
              </div>

              <div className="modal-body">
                <p className="modal-description">{modal.content.more}</p>

                <h4 className="modal-features-title">✨ What's Included:</h4>
                <div className="modal-features-grid">
                  {modal.content.description.map((feature, idx) => (
                    <div key={idx} className="modal-feature-item">
                      <span
                        className="modal-feature-dot"
                        style={{ backgroundColor: modal.content?.color }}
                      />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <h4 className="modal-features-title">🎯 Key Benefits:</h4>
                <div className="modal-features-grid">
                  {modal.content.benefits.map((benefit, idx) => (
                    <div key={idx} className="modal-feature-item">
                      <span
                        className="modal-feature-dot"
                        style={{ backgroundColor: modal.content?.color }}
                      />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="modal-footer">
                <motion.a
                  href={`mailto:brian.o.iraru@gmail.com?subject=Interested in ${modal.content.title}`}
                  className="modal-action-btn"
                  style={{ background: modal.content.gradient }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Get Started <FiExternalLink />
                </motion.a>
                <button onClick={closeModal} className="modal-close-footer-btn">
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Services;