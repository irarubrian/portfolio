import React from 'react';

const projects = [
	{
		name: 'Weather App Live',
		link: 'https://weather-a-pp-psi.vercel.app/',
		description:
			'A weather application built using JavaScript, HTML, CSS, and a public weather API. Features include city search, live temperature, humidity, wind speed, and a responsive UI. The app demonstrates robust API integration, asynchronous data handling, and mobile-first design. Deployed on Vercel for instant access on any device, it includes strong error handling for invalid locations, loading states, and a clean, modern interface. All navigation and API requests are handled in a way that prevents reloads or 404 errors on any device. This project highlights my ability to build production-ready, user-centric web applications with a focus on usability, reliability, and performance.',
	},
	{
		name: 'Fashion Design Frontend',
		link: 'https://fashion-design-fronted-rbcz.vercel.app/',
		description:
			'A modern, visually appealing fullstack project for a fashion design platform. Implements advanced CSS, Figma-inspired layouts, and interactive design tools. The project features dynamic galleries, responsive grids, and smooth transitions, all optimized for mobile and desktop. It demonstrates strong UI/UX skills, creative web design, and the ability to translate design prototypes into pixel-perfect, interactive web experiences. Accessibility and performance best practices are followed throughout.',
	},
	{
		name: 'Aviation Hub',
		link: 'https://aviation-14zg.vercel.app/',
		description:
			'A comprehensive aviation platform for enthusiasts and professionals. Showcases detailed aircraft information, flight data visualizations, and interactive charts. Built with React, Chart.js, and RESTful APIs, it highlights data-driven development, responsive design, and advanced state management. The platform includes search and filter features, real-time data updates, and a visually engaging dashboard, demonstrating my ability to work with complex datasets and deliver insightful, user-friendly interfaces.',
	},
	{
		name: 'Pentagon Movie',
		link: 'https://pentagon-movie-pwd.vercel.app/',
		description:
			'A feature-rich movie database app built entirely with a React frontend and no backend. Users can search for films, view ratings, and access detailed information. The app integrates with external movie APIs, supports responsive layouts, and demonstrates advanced React state management with hooks and context. Features include search suggestions, movie details, and a clean, intuitive UI. All navigation and API calls are handled to prevent 404 errors or reloads on mobile and desktop. This project showcases my skills in API consumption, component-based architecture, and building scalable, maintainable front-end applications.',
	},
];

const Project = () => {
	return (
		<section className="portfolio">
			<h2 className="portfolio-title">My Projects</h2>
			<div className="portfolio-grid">
				{projects.map((project, index) => (
					<div className="project-card" key={index}>
						<h3>{project.name}</h3>
						<p>{project.description}</p>
						<a
							href={project.link}
							target="_blank"
							rel="noopener noreferrer"
							className="project-link"
						>
							View Project →
						</a>
					</div>
				))}
			</div>
		</section>
	);
};

export default Project;