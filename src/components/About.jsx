import React from 'react';
import Navbar from './Navbar';


const About = () => {
    return (
        <section className="about-section">
            <div className="about-container">
                <h1 className="about-title">About Me</h1>
                
                <div className="about-content">
                    <div className="about-left">
                        <div className="about-bio">
                            <p>I am a passionate junior full-stack developer with a growing skill set in both frontend and backend technologies. I enjoy building responsive and user-friendly web applications using modern tools like React,Javascript,python, Flask, and SQLAlchemy.</p>
                            <p>As a developer, I value collaboration, problem-solving, and continuous improvement. I'm currently honing my skills by contributing to full-stack applications that involve real-time updates, user interactions, and dynamic content rendering.</p>
                        </div>

                        <div className="about-info">
                            <h2>Personal Information</h2>
                            <ul>
                                <li><span className="info-label">Age:</span> 21</li>
                                <li><span className="info-label">Email:</span> brian.o.iraru@gmail.com</li>
                                <li><span className="info-label">Certificate:</span> Applied Software Engineering</li>
                                <li><span className="info-label">Phone:</span> +254 743435490</li>
                                <li><span className="info-label">City:</span> Nairobi, Kenya</li>
                                <li><span className="info-label">Freelance:</span> Available</li>
                            </ul>
                        </div>
                    </div>

                    <div className="about-right">
                        <div className="skills-section">
                            <h2>My Skills</h2>
                            <div className="skill-item">
                                <div className="skill-header">
                                    <span>HTML & CSS</span>
                                    <span>80%</span>
                                </div>
                                <div className="skill-bar">
                                    <div className="skill-progress" style={{ width: '80%' }}></div>
                                </div>
                            </div>
                            {/* Repeat for other skills */}
                            <div className="skill-item">
                                <div className="skill-header">
                                    <span>React js</span>
                                    <span>70%</span>
                                </div>
                                <div className="skill-bar">
                                    <div className="skill-progress" style={{ width: '70%' }}></div>
                                </div>
                            </div>
                            <div className="skill-item">
                                <div className="skill-header">
                                    <span>Javascript</span>
                                    <span>65%</span>
                                </div>

                            <div className='skill-item'></div>
                                <div className="skill-bar">
                                    <div className="skill-progress" style={{ width: '65%' }}></div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>

                <div className="about-stats">
                    <div className="stat-item">
                        <h3>6+ months</h3>
                        <p>Experience</p>
                    </div>
                    <div className="stat-item">
                        <h3>21+</h3>
                        <p>Projects Completed</p>
                    </div>
                    <div className="stat-item">
                        <h3>15+</h3>
                        <p>Happy Clients</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;