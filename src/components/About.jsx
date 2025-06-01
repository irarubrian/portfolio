import React from 'react';
import Navbar from './Navbar';

const About = () => {
    return (
        <section className="about-section">
            {/* <Navbar /> */}
            <div className="about-container">
                <div className="about-header">
                    <h1 className="about-title">About Me</h1>
                    <p className="about-subtitle">Get to know the developer behind the code</p>
                </div>
                
                <div className="about-content">
                    <div className="about-left">
                        <div className="about-card">
                            <h2 className="section-title">My Story</h2>
                            <div className="about-bio">
                                <p>I'm Brian Iraru, a passionate full-stack developer with expertise in both frontend and backend technologies. My journey in software development began with a fascination for solving problems through code, which led me to pursue formal education in Applied Software Engineering.</p>
                                <p>What started as curiosity has grown into a professional career where I build responsive, scalable web applications using modern frameworks and tools. I specialize in creating efficient solutions that bridge user experience with robust backend functionality.</p>
                                <p>When I'm not coding, you can find me contributing to open-source projects, learning new technologies, or mentoring aspiring developers in my community.</p>
                            </div>
                        </div>

                        <div className="about-card">
                            <h2 className="section-title">Personal Details</h2>
                            <div className="about-info">
                                <div className="info-item">
                                    <span className="info-icon">👤</span>
                                    <div>
                                        <h4>Name</h4>
                                        <p>Brian Iraru</p>
                                    </div>
                                </div>
                                <div className="info-item">
                                    <span className="info-icon">📧</span>
                                    <div>
                                        <h4>Email</h4>
                                        <p>brian.o.iraru@gmail.com</p>
                                    </div>
                                </div>
                                <div className="info-item">
                                    <span className="info-icon">📞</span>
                                    <div>
                                        <h4>Phone</h4>
                                        <p>+254 743435490</p>
                                    </div>
                                </div>
                                <div className="info-item">
                                    <span className="info-icon">📍</span>
                                    <div>
                                        <h4>Location</h4>
                                        <p>Nairobi, Kenya</p>
                                    </div>
                                </div>
                                <div className="info-item">
                                    <span className="info-icon">🎓</span>
                                    <div>
                                        <h4>Education</h4>
                                        <p>Applied Software Engineering</p>
                                    </div>
                                </div>
                                <div className="info-item">
                                    <span className="info-icon">💼</span>
                                    <div>
                                        <h4>Availability</h4>
                                        <p>Open for freelance opportunities</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="about-right">
                        <div className="skills-card">
                            <h2 className="section-title">Technical Expertise</h2>
                            
                            <div className="skill-category">
                                <h3 className="skill-category-title">
                                    <span className="category-icon">💻</span>
                                    Frontend Development
                                </h3>
                                <div className="skill-item">
                                    <div className="skill-header">
                                        <span>JavaScript (ES6+)</span>
                                        <span>90%</span>
                                    </div>
                                    <div className="skill-bar">
                                        <div className="skill-progress" style={{ width: '90%' }}></div>
                                    </div>
                                </div>
                                <div className="skill-item">
                                    <div className="skill-header">
                                        <span>React.js</span>
                                        <span>85%</span>
                                    </div>
                                    <div className="skill-bar">
                                        <div className="skill-progress" style={{ width: '85%' }}></div>
                                    </div>
                                </div>
                                <div className="skill-item">
                                    <div className="skill-header">
                                        <span>Tailwind CSS</span>
                                        <span>80%</span>
                                    </div>
                                    <div className="skill-bar">
                                        <div className="skill-progress" style={{ width: '80%' }}></div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="skill-category">
                                <h3 className="skill-category-title">
                                    <span className="category-icon">🔧</span>
                                    Backend Development
                                </h3>
                                <div className="skill-item">
                                    <div className="skill-header">
                                        <span>Python</span>
                                        <span>88%</span>
                                    </div>
                                    <div className="skill-bar">
                                        <div className="skill-progress" style={{ width: '88%' }}></div>
                                    </div>
                                </div>
                                <div className="skill-item">
                                    <div className="skill-header">
                                        <span>Flask</span>
                                        <span>85%</span>
                                    </div>
                                    <div className="skill-bar">
                                        <div className="skill-progress" style={{ width: '85%' }}></div>
                                    </div>
                                </div>
                                <div className="skill-item">
                                    <div className="skill-header">
                                        <span>SQLAlchemy</span>
                                        <span>82%</span>
                                    </div>
                                    <div className="skill-bar">
                                        <div className="skill-progress" style={{ width: '82%' }}></div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="skill-category">
                                <h3 className="skill-category-title">
                                    <span className="category-icon">🗃️</span>
                                    Database
                                </h3>
                                <div className="skill-item">
                                    <div className="skill-header">
                                        <span>PostgreSQL</span>
                                        <span>85%</span>
                                    </div>
                                    <div className="skill-bar">
                                        <div className="skill-progress" style={{ width: '85%' }}></div>
                                    </div>
                                </div>
                                <div className="skill-item">
                                    <div className="skill-header">
                                        <span>Database Design</span>
                                        <span>80%</span>
                                    </div>
                                    <div className="skill-bar">
                                        <div className="skill-progress" style={{ width: '80%' }}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="achievements-section">
                    <h2 className="section-title">My Achievements</h2>
                    <div className="achievements-grid">
                        <div className="achievement-card">
                            <div className="achievement-icon">🚀</div>
                            <h3>6+ months</h3>
                            <p>Professional Development Experience</p>
                        </div>
                        <div className="achievement-card">
                            <div className="achievement-icon">📂</div>
                            <h3>25+</h3>
                            <p>Projects Completed</p>
                        </div>
                        <div className="achievement-card">
                            <div className="achievement-icon">😊</div>
                            <h3>20+</h3>
                            <p>Satisfied Clients</p>
                        </div>
                        <div className="achievement-card">
                            <div className="achievement-icon">🌐</div>
                            <h3>15+</h3>
                            <p>Open Source Contributions</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;