import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCode, FaDatabase, FaUsers, FaServer, FaLaptopCode, FaGlobe } from 'react-icons/fa';

const servicesData = [
	{
		title: 'Consultation & Code Reviews',
		icon: <FaCode className="service-icon" />,
		description: [
			'Personalized mentorship for junior developers focusing on React Hooks, Flask routing patterns, and SQLAlchemy ORM best practices',
			'Comprehensive code reviews with actionable feedback on architecture, performance, and maintainability',
			'Implementation guidance for scalable, secure applications following industry standards',
			'Technical debt assessment and refactoring strategies',
		],
		more: 'I offer tailored one-on-one mentoring sessions, detailed code walkthroughs, and constructive feedback to accelerate your development skills. My approach combines practical examples with theoretical foundations, helping you understand not just how to write code but how to architect solutions. Sessions can cover specific projects, interview preparation, or general skill development. I provide documentation templates, code samples, and follow-up resources to reinforce learning.',
		color: '#6366f1',
	},
	{
		title: 'Data-Driven Applications',
		icon: <FaDatabase className="service-icon" />,
		description: [
			'Relational database modeling with SQLAlchemy including complex relationships and inheritance patterns',
			'Advanced SQL query optimization and indexing strategies for high-performance applications',
			'Real-time data applications using WebSockets and server-sent events',
			'Data migration planning and execution between different database systems',
		],
		more: 'I specialize in designing robust, scalable data architectures that evolve with your business needs. From initial schema design to complex query optimization, I ensure your data layer is both performant and maintainable. My expertise includes implementing real-time features like collaborative editing, live dashboards, and notification systems that dramatically improve user engagement. I also help teams establish proper data access patterns, caching strategies, and monitoring solutions.',
		color: '#10b981',
	},
	{
		title: 'Project Collaboration',
		icon: <FaUsers className="service-icon" />,
		description: [
			'Git version control strategies including branching models and conflict resolution',
			'GitHub/GitLab workflows with automated testing and deployment pipelines',
			'Agile development practices and effective team collaboration techniques',
			'Code review best practices and establishing team coding standards',
		],
		more: 'With extensive experience in agile environments, I help development teams establish efficient collaboration workflows. This includes implementing proper Git strategies, setting up CI/CD pipelines, and establishing effective code review processes. I can help your team transition to trunk-based development, implement feature flags, or adopt modern DevOps practices. My goal is to help teams reduce friction in their development process while maintaining high code quality standards.',
		color: '#3b82f6',
	},
	{
		title: 'API Development',
		icon: <FaServer className="service-icon" />,
		description: [
			'Design and implementation of RESTful APIs with Flask including proper versioning',
			'Authentication strategies (JWT, OAuth, session-based) and authorization patterns',
			'Third-party API integrations with payment processors, social platforms, and SaaS products',
			'API documentation using OpenAPI/Swagger and interactive documentation portals',
		],
		more: 'I build secure, well-documented APIs with proper authentication, rate limiting, and comprehensive error handling. Whether you need internal microservices or public-facing endpoints, I ensure reliability and scalability. My API development includes thorough documentation, client SDK generation, and testing strategies. I have particular expertise in integrating with third-party services like Stripe, Twilio, and OAuth providers, handling the complexities of webhooks, retry logic, and data synchronization.',
		color: '#f59e0b',
	},
	{
		title: 'Full-Stack Development',
		icon: <FaLaptopCode className="service-icon" />,
		description: [
			'End-to-end application development with React frontends and Flask backends',
			'Feature implementation from database schema to UI components',
			'Performance optimization across the entire stack',
			'Deployment strategies for various environments (cloud, hybrid, on-premise)',
		],
		more: 'From concept to deployment, I deliver complete solutions with React frontends and Flask backends. My full-stack approach ensures seamless integration between components, resulting in performant, maintainable applications. I handle everything from initial architecture decisions to production monitoring. Projects typically include containerization (Docker), infrastructure as code, and observability setup. I specialize in bridging the gap between frontend and backend concerns to deliver cohesive user experiences.',
		color: '#ec4899',
	},
	{
		title: 'Web Development',
		icon: <FaGlobe className="service-icon" />,
		description: [
			'Responsive frontend development with modern CSS and layout techniques',
			'Backend development with proper authentication flows and business logic',
			'Performance optimization including lazy loading, code splitting, and caching',
			'Accessibility compliance and internationalization support',
		],
		more: 'I create modern, accessible websites with responsive designs that work across all devices. My frontend work focuses on creating intuitive user interfaces with attention to performance and accessibility. Backend development emphasizes clean architecture, proper authentication flows, and efficient data handling. I implement monitoring, error tracking, and analytics to ensure your web application remains healthy and measurable. My solutions include progressive enhancement strategies and core web vital optimizations.',
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
					Professional Services
					<span className="title-decoration"></span>
				</motion.h2>

				<motion.p
					className="section-subtitle"
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					transition={{ delay: 0.2, duration: 0.6 }}
					viewport={{ once: true }}
				>
					Comprehensive development solutions tailored to your technical requirements and business objectives
				</motion.p>

				<div className="services-grid">
					{servicesData.map((service, index) => (
						<motion.div
							key={index}
							className="service-card"
							initial="offscreen"
							whileInView="onscreen"
							viewport={{ once: true, margin: '-50px' }}
							variants={cardVariants}
							whileHover="hover"
							style={{ borderTop: `6px solid ${service.color}` }}
						>
							<div
								className="service-icon-container"
								style={{ backgroundColor: service.color }}
							>
								{service.icon}
							</div>
							<h3>{service.title}</h3>
							<ul>
								{service.description.map((desc, idx) => (
									<li key={idx}>{desc}</li>
								))}
							</ul>
							<div className="card-footer">
								<motion.button
									className="service-btn learn-more-btn"
									onClick={() => handleLearnMore(service)}
									whileHover={{ scale: 1.05 }}
									whileTap={{ scale: 0.95 }}
									style={{
										color: service.color,
										borderColor: service.color,
									}}
								>
									Learn More
								</motion.button>
								<motion.button
									className="service-btn contact-btn"
									onClick={() => (window.location.href = '/contact')}
									whileHover={{ scale: 1.05 }}
									whileTap={{ scale: 0.95 }}
									style={{ backgroundColor: service.color }}
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
									style={{ backgroundColor: modal.content?.color }}
								>
									{modal.content?.icon}
								</div>
								<h3>{modal.content?.title}</h3>
							</div>
							<div className="service-modal-content">
								<p>{modal.content?.more}</p>
								<div className="modal-features">
									<h4>Key Features:</h4>
									<ul>
										{modal.content?.description.map((item, index) => (
											<li key={index}>{item}</li>
										))}
									</ul>
								</div>
								<div className="modal-actions">
									<a
										href="mailto:brian.o.iraru@gmail.com?subject=Service Inquiry"
										style={{ textDecoration: 'none' }}
									>
										<motion.button
											className="modal-contact-btn"
											whileHover={{ scale: 1.05 }}
											whileTap={{ scale: 0.95 }}
											style={{ backgroundColor: modal.content?.color }}
										>
											Get Started
										</motion.button>
									</a>
									<motion.button
										className="modal-close-btn"
										onClick={closeModal}
										whileHover={{ scale: 1.05 }}
										whileTap={{ scale: 0.95 }}
									>
										Close
									</motion.button>
								</div>
							</div>
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>

			<style jsx>{`
				.services-section {
					padding: 6rem 1rem;
					background: #f8fafc;
					min-height: 100vh;
					position: relative;
				}
				.services-container {
					max-width: 1280px;
					margin: 0 auto;
					padding: 2rem 1rem;
				}
				.section-title {
					text-align: center;
					font-size: 2.8rem;
					margin-bottom: 1.5rem;
					color: #1e293b;
					font-weight: 800;
					letter-spacing: -0.5px;
					position: relative;
					display: inline-block;
					left: 50%;
					transform: translateX(-50%);
					background: linear-gradient(to right, #2563eb, #4f46e5);
					-webkit-background-clip: text;
					-webkit-text-fill-color: transparent;
					padding: 0 2rem;
				}
				.title-decoration {
					position: absolute;
					bottom: -8px;
					left: 50%;
					transform: translateX(-50%);
					width: 100px;
					height: 4px;
					background: linear-gradient(90deg, #2563eb, #4f46e5);
					border-radius: 4px;
				}
				.section-subtitle {
					text-align: center;
					font-size: 1.25rem;
					color: #475569;
					max-width: 800px;
					margin: 0 auto 4rem;
					line-height: 1.7;
					font-weight: 500;
					background: #fff;
					border-radius: 12px;
					padding: 1.25rem 2rem;
					box-shadow: 0 4px 20px rgba(15, 23, 42, 0.05);
					border: 1px solid #e2e8f0;
				}
				.services-grid {
					display: grid;
					grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
					gap: 30px;
					max-width: 1200px;
					margin: 0 auto;
					padding: 0 20px;
					box-sizing: border-box;
					width: 100%;
				}
				.service-card {
					background: #f7faff;
					border-radius: 10px;
					padding: 30px;
					box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
					transition: transform 0.3s ease, box-shadow 0.3s ease;
					display: flex;
					flex-direction: column;
					height: 100%;
					min-width: 0;
					word-break: break-word;
					border-top: 6px solid #2563eb22;
				}
				.service-card:hover {
					transform: translateY(-10px);
					box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
				}
				.service-card h3 {
					font-size: 1.5rem;
					margin-bottom: 15px;
					color: #2c3e50;
				}
				.service-card ul {
					margin-bottom: 20px;
					padding-left: 1.2rem;
					list-style: disc inside;
				}
				.service-card li {
					margin-bottom: 0.7rem;
					color: #222;
					font-size: 1.08rem;
					line-height: 1.6;
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
					margin-bottom: 1.5rem;
				}
				.card-footer {
					display: flex;
					gap: 12px;
					margin-top: auto;
				}
				.service-btn {
					padding: 0.8rem 1.5rem;
					border-radius: 8px;
					font-weight: 600;
					cursor: pointer;
					font-size: 1rem;
					transition: all 0.3s ease;
					flex: 1;
					text-align: center;
				}
				.learn-more-btn {
					background: transparent;
					border: 2px solid;
					color: inherit;
				}
				.learn-more-btn:hover {
					background: rgba(0, 0, 0, 0.03);
				}
				.contact-btn {
					border: none;
					color: #fff;
					box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
				}
				.contact-btn:hover {
					filter: brightness(1.08);
					box-shadow: 0 6px 18px rgba(37,99,235,0.18);
					transform: scale(1.04);
					background: linear-gradient(90deg, #111827, #2563eb);
				}
				.service-modal-overlay {
					position: fixed;
					top: 0;
					left: 0;
					right: 0;
					bottom: 0;
					background: rgba(15, 23, 42, 0.7);
					backdrop-filter: blur(4px);
					display: flex;
					align-items: center;
					justify-content: center;
					z-index: 1000;
					padding: 1rem;
				}
				.service-modal {
					background: #fff;
					border-radius: 18px;
					max-width: 600px;
					width: 100%;
					max-height: 90vh;
					overflow-y: auto;
					position: relative;
					box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
					border: 1px solid #e2e8f0;
					animation: modalPop 0.3s;
				}
				@keyframes modalPop {
					from {
						transform: scale(0.95);
						opacity: 0;
					}
					to {
						transform: scale(1);
						opacity: 1;
					}
				}
				.service-modal-close {
					position: absolute;
					top: 1.5rem;
					right: 1.5rem;
					background: none;
					border: none;
					font-size: 1.8rem;
					cursor: pointer;
					color: #64748b;
					transition: color 0.2s;
					z-index: 2;
					width: 40px;
					height: 40px;
					display: flex;
					align-items: center;
					justify-content: center;
					border-radius: 50%;
				}
				.service-modal-close:hover {
					color: #1e293b;
					background: #f1f5f9;
				}
				.service-modal-header {
					padding: 2.5rem 2.5rem 1.5rem;
					display: flex;
					align-items: center;
					gap: 1.5rem;
					border-bottom: 1px solid #e2e8f0;
				}
				.modal-icon {
					font-size: 2rem;
					min-width: 60px;
					min-height: 60px;
					border-radius: 14px;
					display: flex;
					align-items: center;
					justify-content: center;
					color: #fff;
					box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
				}
				.service-modal-header h3 {
					font-size: 1.8rem;
					margin: 0;
					color: #1e293b;
					font-weight: 700;
					line-height: 1.3;
				}
				.service-modal-content {
					padding: 2rem 2.5rem;
				}
				.service-modal-content p {
					color: #334155;
					line-height: 1.8;
					margin-bottom: 2rem;
					font-size: 1.15rem;
				}
				.modal-features {
					background: #f8fafc;
					border-radius: 10px;
					padding: 1.5rem;
					margin-bottom: 2.5rem;
					border: 1px solid #e2e8f0;
				}
				.modal-features h4 {
					font-size: 1.25rem;
					margin: 0 0 1rem 0;
					color: #1e293b;
				}
				.modal-features ul {
					padding-left: 1.5rem;
					list-style: none;
					margin: 0;
				}
				.modal-features li {
					margin-bottom: 0.8rem;
					color: #334155;
					font-size: 1.05rem;
					line-height: 1.6;
					position: relative;
					padding-left: 1.5rem;
				}
				.modal-features li:before {
					content: '•';
					color: ${modal.content?.color || '#6366f1'};
					font-size: 1.5rem;
					position: absolute;
					left: 0;
					top: -3px;
				}
				.modal-actions {
					display: flex;
					gap: 1rem;
					justify-content: flex-end;
				}
				.modal-contact-btn,
				.modal-close-btn {
					padding: 0.9rem 1.75rem;
					border-radius: 8px;
					font-weight: 600;
					cursor: pointer;
					font-size: 1rem;
					transition: all 0.3s ease;
				}
				.modal-contact-btn {
					border: none;
					color: #fff;
					box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
				}
				.modal-contact-btn:hover {
					filter: brightness(1.1);
					box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
				}
				.modal-close-btn {
					background: transparent;
					border: 1px solid #cbd5e1;
					color: #64748b;
				}
				.modal-close-btn:hover {
					background: #f1f5f9;
					color: #334155;
					border-color: #94a3b8;
				}
				@media (max-width: 1024px) {
					.services-grid {
						flex-direction: column;
						gap: 20px;
					}
					.service-card {
						max-width: 100%;
					}
				}
				@media (max-width: 768px) {
					.section-title {
						font-size: 2.4rem;
					}
					.section-subtitle {
						font-size: 1.15rem;
						padding: 1rem 1.5rem;
						margin-bottom: 3rem;
					}
					.service-card {
						padding: 25px;
					}
					.service-modal-header {
						padding: 1.75rem 1.75rem 1.25rem;
					}
					.service-modal-content {
						padding: 1.5rem 1.75rem;
					}
				}
				@media (max-width: 640px) {
					.services-section {
						padding: 4rem 1rem;
					}
					.services-grid {
						flex-direction: column;
						gap: 16px;
					}
					.card-footer {
						flex-direction: column;
					}
					.modal-actions {
						flex-direction: column;
					}
				}
			`}</style>
		</section>
	);
};

export default Services;