import React from 'react';
import { Code2, Database, Container, Terminal } from 'lucide-react';
import './About.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import profile_img from '../../assets/profile_img.jpg';

const About = () => {
    return (
        <section id='about' className="about">
            <header className="about-title">
                <h1>About me</h1>
                <img src={theme_pattern} alt="Decorative theme pattern"/>
            </header>
            
            <div className="about-sections">
                <div className="about-left">
                    <img src={profile_img} alt="Profile"/>
                </div>
                <div className="about-right">
                    <div className="about-para">
                        <p>I am an experienced web developer proficient in MERN Stack with Next JS, Django, Flask, Docker, and Kubernetes.</p>
                        <p>I am enthusiastic and goal-driven to provide simple and client-tailored solutions</p>
                    </div>
                    
                    <div className="about-skills">
                        <div className="about-skill">
                            <div className="skill-header">
                                <Code2 className="skill-icon" />
                                <p>HTML, CSS & Vanilla JS</p>
                            </div>
                            <div className="skill-bar">
                                <div className="skill-progress" style={{width: '50%'}}></div>
                            </div>
                        </div>
                        <div className="about-skill">
                            <div className="skill-header">
                                <Database className="skill-icon" />
                                <p>Python with Django and Flask</p>
                            </div>
                            <div className="skill-bar">
                                <div className="skill-progress" style={{width: '70%'}}></div>
                            </div>
                        </div>
                        <div className="about-skill">
                            <div className="skill-header">
                                <Code2 className="skill-icon" />
                                <p>React, Typescript and Next.JS 15, & Node.js</p>
                            </div>
                            <div className="skill-bar">
                                <div className="skill-progress" style={{width: '60%'}}></div>
                            </div>
                        </div>
                        <div className="about-skill">
                            <div className="skill-header">
                                <Container className="skill-icon" />
                                <p>Docker, Kubernetes, Ubuntu-Linux</p>
                            </div>
                            <div className="skill-bar">
                                <div className="skill-progress" style={{width: '50%'}}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="about-achievements">
                <div className="about-achievement">
                    <h2>3+</h2>
                    <p>YEARS OF EXPERIENCE</p>
                </div>
                <div className="about-achievement">
                    <h2>30+</h2>
                    <p>PROJECTS COMPLETED</p>
                </div>
                <div className="about-achievement-divider"></div>
                <div className="about-achievement">
                    <h2>15+</h2>
                    <p>HAPPY CLIENTS</p>
                </div>
            </div>
        </section>
    );
};

export default About;