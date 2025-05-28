import React from 'react';

const projects = [

  {
    name: 'Fashion Design Frontend',
    link: 'https://fashion-design-fronted-rbcz.vercel.app/',
    description: 'A fashion design web frontend showcasing modern UI elements and design tools.',
  },
  {
    name: 'Weather App Live',
    link: 'https://weather-a-pp-psi.vercel.app/',
    description: 'A deployed weather app providing live forecasts using API integration.',
  },
  {
    name: 'Flask Superheroes API',
    link: 'https://github.com/irarubrian/flask-superheroes2.api',
    description: 'A backend API built with Flask to manage superheroes and their powers.',
  },
  
 
  {
    name: 'Weather App Live',
    link: 'https://weather-a-pp-psi.vercel.app/',
    description: 'A deployed weather app providing live forecasts using API integration.',
  },
];

const Portfolio = () => {
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

export default Portfolio;
