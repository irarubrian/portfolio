import React from 'react';

const Services = () => {
    const servicesData = [
        {
            title: 'Consultation and Code Reviews',
            description: [
                'I offer consultation and mentorship to junior developers like myself, helping them improve their coding skills and understand key concepts such as React Hooks, Flask routing, and SQLAlchemy ORM. My services include reviewing code, providing constructive feedback, and guiding on best practices for building scalable and secure full-stack applications.'
            ]
        },
        {
            title: 'Data-Driven Applications',
            description: [
                'Data Modeling and Database Management: Build relational database models using SQLAlchemy, manage migrations, and write efficient SQL queries.',
                'Real-Time Applications: Develop real-time apps with Flask and WebSockets for live updates (e.g., chat systems, notifications).'
            ]
        },
        {
            title: 'Project Collaboration',
            description: [
                'Git Version Control: I use Git and GitHub to keep track of changes in the project, work with other team members, and make sure the project stays organized and up-to-date.',
                'Team Collaboration: I work closely with others by reviewing code, suggesting improvements, and making sure everyone\'s changes are combined smoothly into the main project.'
            ]
        },
        {
            title: 'API Development and Integration',
            description: [
                'Custom API Development: Create custom APIs using Flask for web or mobile applications, implementing authentication, data validation, and error handling.',
                'Third-Party API Integration: Integrate external services (e.g., payment gateways, social logins) into Flask backend or React frontend.'
            ]
        },
        {
            title: 'Full-Stack Development',
            description: [
                'React + Flask Full-Stack Applications: Build full-stack applications using React for the frontend and Flask for the backend, including API consumption.',
                'Database Integration: Integrate databases with Flask using SQLAlchemy, set up relationships and migrations.'
            ]
        },
        {
            title: 'Web Development',
            description: [
                'Frontend Development: Build responsive websites using HTML, CSS, and JavaScript, ensuring usability and mobile responsiveness.',
                'Backend Development: Develop RESTful APIs in Flask, manage form submissions, authentication, and CRUD operations using SQLAlchemy ORM.'
            ]
        }
    ];

    return (
        <div className="services">
            <div className="services-title">
                <h2>My Services</h2>
                <div className="services-container">
                    {servicesData.map((service, index) => (
                        <div key={index} className="service-item">
                            <h3>{service.title}</h3>
                            <ul>
                                {service.description.map((desc, idx) => (
                                    <li key={idx}>{desc}</li>
                                ))}
                            </ul>
                            <button className="service-btn">Learn More</button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Services;
