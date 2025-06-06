import React from 'react';

const projects = [

  {
    name: 'Weather App Live',
    link: 'https://weather-a-pp-psi.vercel.app/',
    description: 'A deployed weather app providing live forecasts using API integration.',
  },
  {
    name: 'Fashion Design Frontend',
    link: 'https://fashion-design-fronted-rbcz.vercel.app/',
    description: 'A fashion design web frontend showcasing modern UI elements and design tools.',
  },
   {
    name: 'Aviation Hub',
    link: 'https://aviation-14zg.vercel.app/',
    description: 'An aviation enthusiast platform showcasing aircraft information and flight data visualizations.',
  },
  
  {
    name: 'Pentagon Movie',
    link: 'https://pentagon-movie-pwd.vercel.app/',
    description: 'A movie database application featuring film information, ratings, and search functionality.',
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