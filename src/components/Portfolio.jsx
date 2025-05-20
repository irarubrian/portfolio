import React from 'react';

const projects = [
  {
    name: 'Lateshow Brian Iraru',
    link: 'https://github.com/irarubrian/lateshow-_brian_iraru',
    description: 'A dynamic web project showcasing a UI concept and frontend logic.',
  },
  {
    name: 'Flask Superheroes API',
    link: 'https://github.com/irarubrian/flask-superheroes2.api',
    description: 'A backend API built with Flask to manage superheroes and their powers.',
  },
  {
    name: 'Weather App',
    link: 'https://github.com/irarubrian/WEATHER-aPP',
    description: 'A weather forecasting application built with API integration.',
  },
  {
    name: 'Task Management System',
    link: 'https://github.com/irarubrian/task-management-python',
    description: 'A command-line Python project to manage and organize tasks.',
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
              View on GitHub →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
