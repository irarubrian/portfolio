import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCode, FaDatabase, FaUsers, FaServer, FaLaptopCode, FaGlobe } from 'react-icons/fa';

const servicesData = [
	{
		title: 'Consultation & Code Reviews',
		icon: <FaCode className="service-icon" />,
		description: [
			'Mentorship for junior developers on React Hooks, Flask routing, and SQLAlchemy ORM',
			'Code reviews with constructive feedback',
			'Best practices for scalable, secure applications',
		],
		more: 'I provide one-on-one sessions, code walkthroughs, and detailed feedback to help you grow as a developer. Book a session to get personalized advice and code review tailored to your specific needs and projects.',
		color: '#6366f1',
	},
	{
		title: 'Data-Driven Applications',
		icon: <FaDatabase className="service-icon" />,
		description: [
			'Relational database modeling with SQLAlchemy',
			'Efficient SQL query optimization',
			'Real-time apps with WebSockets',
		],
		more: 'I specialize in designing robust data architectures that scale. From schema design to complex query optimization, I ensure your data layer is performant and maintainable. Real-time features like chat systems and live notifications can transform user engagement.',
		color: '#10b981',
	},
	{
		title: 'Project Collaboration',
		icon: <FaUsers className="service-icon" />,
		description: [
			'Git version control & GitHub workflows',
			'Agile team collaboration',
			'Code review & CI/CD pipelines',
		],
		more: 'With experience in agile environments, I help teams collaborate effectively through proper Git workflows, thorough code reviews, and continuous integration. Let me help streamline your development process for maximum productivity.',
		color: '#3b82f6',
	},
	{
		title: 'API Development',
		icon: <FaServer className="service-icon" />,
		description: [
			'Custom RESTful APIs with Flask',
			'JWT authentication & authorization',
			'Third-party API integrations',
		],
		more: 'I build secure, well-documented APIs with proper authentication, rate limiting, and error handling. Whether you need internal APIs or public-facing endpoints, I ensure reliability and scalability. I also integrate payment processors, social logins, and other third-party services.',
		color: '#f59e0b',
	},
	{
		title: 'Full-Stack Development',
		icon: <FaLaptopCode className="service-icon" />,
		description: [
			'React + Flask applications',
			'End-to-end feature implementation',
			'Database integration & optimization',
		],
		more: 'From concept to deployment, I deliver complete solutions with React frontends and Flask backends. My full-stack approach ensures seamless integration between components, resulting in performant, maintainable applications tailored to your requirements.',
		color: '#ec4899',
	},
	{
		title: 'Web Development',
		icon: <FaGlobe className="service-icon" />,
		description: [
			'Responsive frontend development',
			'Backend APIs & business logic',
			'Performance optimization',
		],
		more: 'I create modern, accessible websites with responsive designs that work across all devices. My backend development focuses on clean architecture, proper authentication flows, and efficient data handling to deliver fast, reliable web experiences.',
		color: '#8b5cf6',
	},
];

const cardVariants = {
	offscreen: {
		y: 50,
		opacity: 0,
	},
	onscreen: {
		y: 0,
		opacity: 1,
		transition: {
			type: 'spring',
			bounce: 0.4,
			duration: 0.8,
		},
	},
};

const hoverVariants = {
	hover: {
		y: -10,
		transition: {
			duration: 0.3,
			ease: 'easeOut',
		},
	},
};

const modalVariants = {
	hidden: {
		opacity: 0,
		scale: 0.8,
	},
	visible: {
		opacity: 1,
		scale: 1,
		transition: {
			duration: 0.3,
			ease: 'easeOut',
		},
	},
	exit: {
		opacity: 0,
		scale: 0.8,
		transition: {
			duration: 0.2,
		},
	},
};

const Services = () => {
	const [modal, setModal] = useState({ open: false, content: null });

	const handleLearnMore = (service) => {
		setModal({ open: true, content: service });
	};

	const closeModal = () => setModal({ open: false, content: null });

	return (
		<section className="services-section" id="services">
			<div className="services-container">
				<motion.h2
					className="section-title"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: true }}
				>
					My Services
					<span className="title-decoration"></span>
				</motion.h2>

				<p className="section-subtitle">
					Comprehensive solutions tailored to your development needs
				</p>

				<div className="services-grid-row">
					{servicesData.map((service, index) => (
						<motion.div
							key={index}
							className="service-card-row"
							initial="offscreen"
							whileInView="onscreen"
							viewport={{ once: true, margin: '-50px' }}
							variants={cardVariants}
							whileHover="hover"
							style={{ borderLeft: `6px solid ${service.color}` }}
						>
							<div className="service-icon-container" style={{ color: service.color }}>
								{service.icon}
							</div>
							<div className="service-content-row">
								<h3>{service.title}</h3>
								<ul>
									{service.description.map((desc, idx) => (
										<li key={idx}>{desc}</li>
									))}
								</ul>
								<motion.button
									className="service-btn"
									onClick={() => window.location.href = '/contact'}
									whileHover={{ scale: 1.05 }}
									whileTap={{ scale: 0.95 }}
									style={{ background: `linear-gradient(90deg, ${service.color}, #2563eb)` }}
								>
									Contact Me
								</motion.button>
							</div>
						</motion.div>
					))}
				</div>
			</div>

			<AnimatePresence>
				{modal.open && (
					<motion.div
						className="service-modal-overlay"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						onClick={closeModal}
					>
						<motion.div
							className="service-modal"
							variants={modalVariants}
							initial="hidden"
							animate="visible"
							exit="exit"
							onClick={(e) => e.stopPropagation()}
							style={{ borderTop: `6px solid ${modal.content?.color}` }}
						>
							<button
								className="service-modal-close"
								onClick={closeModal}
							>
								&times;
							</button>
							<div className="service-modal-header">
								<div
									className="modal-icon"
									style={{ color: modal.content?.color }}
								>
									{modal.content?.icon}
								</div>
								<h3>{modal.content?.title}</h3>
							</div>
							<div className="service-modal-content">
								<p>{modal.content?.more}</p>
								<a href="mailto:brian.o.iraru@gmail.com?subject=Service%20Inquiry:%20" style={{ textDecoration: 'none' }}>
									<motion.button
										className="modal-contact-btn"
										whileHover={{ scale: 1.05 }}
										whileTap={{ scale: 0.95 }}
									>
										Contact Me
									</motion.button>
								</a>
							</div>
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>

			<style jsx>{`
        .services-section {
          padding: 5rem 1rem 3rem 1rem;
          background: #fff;
          min-height: 100vh;
        }
        .services-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 2rem 1rem;
        }
        .section-title {
          text-align: center;
          font-size: 2.7rem;
          margin-bottom: 1.2rem;
          color: #2563eb;
          font-weight: 900;
          letter-spacing: 1px;
          position: relative;
          display: inline-block;
          left: 50%;
          transform: translateX(-50%);
          background: #fff;
          padding: 0.5rem 2rem;
          border-radius: 12px;
          box-shadow: 0 2px 12px rgba(37,99,235,0.07);
        }
        .title-decoration {
          position: absolute;
          bottom: -10px;
          left: 50%;
          transform: translateX(-50%);
          width: 80px;
          height: 4px;
          background: linear-gradient(90deg, #2563eb, #111827);
          border-radius: 2px;
        }
        .section-subtitle {
          text-align: center;
          font-size: 1.18rem;
          color: #222;
          max-width: 700px;
          margin: 0 auto 3rem;
          line-height: 1.7;
          font-weight: 500;
          background: #f5f7fa;
          border-radius: 8px;
          padding: 1rem 1.5rem;
          box-shadow: 0 2px 8px rgba(37,99,235,0.04);
        }
        .services-grid-row {
          display: flex;
          flex-direction: column;
          gap: 2.5rem;
          margin-top: 2rem;
        }
        .service-card-row {
          display: flex;
          flex-direction: row;
          align-items: flex-start;
          background: #f7faff;
          border-radius: 18px;
          box-shadow: 0 8px 32px rgba(37,99,235,0.10);
          border-left: 6px solid #2563eb22;
          padding: 2rem 2.5rem;
          min-height: 180px;
          transition: box-shadow 0.3s, transform 0.3s, border-color 0.3s;
        }
        .service-card-row:hover {
          box-shadow: 0 16px 40px rgba(37,99,235,0.18);
          transform: translateY(-6px) scale(1.03);
          border-color: #2563eb;
          background: #fff;
        }
        .service-icon-container {
          font-size: 2.7rem;
          min-width: 56px;
          min-height: 56px;
          border-radius: 50%;
          background: #2563eb;
          color: #fff;
          box-shadow: 0 2px 8px rgba(37,99,235,0.10);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-right: 2rem;
        }
        .service-content-row {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }
        .service-content-row h3 {
          font-size: 1.35rem;
          margin-bottom: 1rem;
          color: #111827;
          font-weight: 800;
          letter-spacing: 0.5px;
        }
        .service-content-row ul {
          margin-bottom: 1.2rem;
          padding-left: 1.2rem;
          list-style: disc inside;
        }
        .service-content-row li {
          margin-bottom: 0.7rem;
          color: #222;
          font-size: 1.08rem;
          line-height: 1.6;
        }
        .service-btn {
          padding: 0.8rem 1.5rem;
          border: none;
          border-radius: 8px;
          color: #fff;
          font-weight: 700;
          cursor: pointer;
          font-size: 1rem;
          margin-top: auto;
          background: linear-gradient(90deg, #2563eb, #111827);
          box-shadow: 0 2px 8px rgba(37,99,235,0.10);
          transition: background 0.2s, box-shadow 0.2s, transform 0.2s;
        }
        .service-btn:hover {
          filter: brightness(1.08);
          box-shadow: 0 6px 18px rgba(37,99,235,0.18);
          transform: scale(1.04);
          background: linear-gradient(90deg, #111827, #2563eb);
        }
        .service-modal-overlay {
          position: fixed;
          top: 0; left: 0; right: 0; bottom: 0;
          background: rgba(0, 0, 0, 0.6);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          padding: 1rem;
        }
        .service-modal {
          background: #fff;
          border-radius: 18px;
          max-width: 500px;
          width: 100%;
          max-height: 90vh;
          overflow-y: auto;
          position: relative;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.18);
          border: 2px solid #2563eb;
          padding-bottom: 1.5rem;
          animation: modalPop 0.3s;
        }
        @keyframes modalPop {
          from { transform: scale(0.95); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        .service-modal-close {
          position: absolute;
          top: 1rem;
          right: 1rem;
          background: none;
          border: none;
          font-size: 2rem;
          cursor: pointer;
          color: #2563eb;
          transition: color 0.2s;
          z-index: 2;
        }
        .service-modal-close:hover {
          color: #111827;
        }
        .service-modal-header {
          padding: 2rem 2rem 1rem;
          display: flex;
          align-items: center;
          gap: 1.2rem;
        }
        .modal-icon {
          font-size: 2.2rem;
          background: #2563eb;
          border-radius: 50%;
          padding: 0.7rem;
          color: #fff;
          box-shadow: 0 2px 8px rgba(37,99,235,0.10);
        }
        .service-modal-header h3 {
          font-size: 1.7rem;
          margin: 0;
          color: #2563eb;
          font-weight: 800;
        }
        .service-modal-content {
          padding: 0 2rem 2rem;
        }
        .service-modal-content p {
          color: #222;
          line-height: 1.7;
          margin-bottom: 2rem;
          font-size: 1.13rem;
        }
        .modal-contact-btn {
          padding: 0.8rem 1.5rem;
          border: none;
          border-radius: 8px;
          color: #fff;
          font-weight: 700;
          cursor: pointer;
          font-size: 1rem;
          background: linear-gradient(90deg, #2563eb, #111827);
          box-shadow: 0 2px 8px rgba(37,99,235,0.10);
          transition: background 0.3s, box-shadow 0.2s, transform 0.2s;
        }
        .modal-contact-btn:hover {
          filter: brightness(1.08);
          box-shadow: 0 6px 18px rgba(37,99,235,0.18);
          transform: scale(1.04);
          background: linear-gradient(90deg, #111827, #2563eb);
        }
        @media (max-width: 900px) {
          .service-card-row {
            flex-direction: column;
            align-items: stretch;
            padding: 1.2rem 1rem;
          }
          .service-icon-container {
            margin-right: 0;
            margin-bottom: 1rem;
            align-self: flex-start;
          }
        }
      `}</style>
		</section>
	);
};

export default Services;