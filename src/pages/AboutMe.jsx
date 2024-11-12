import React from 'react';
import aboutImage from '../assets/Profile Headshot Image.png';
import skillsImage1 from '../assets/Example of dev work thumbnail image.png';
import skillsImage2 from '../assets/Example of design work thumbnail image.png';
import '../styles/styles.css';
import '../styles/AboutMe.css';
import ScrollButton from '../components/ScrollButton';

const AboutMe = () => {
    return (
        <>
            <div className="about-container">
                <div className="about-left">
                    <img src={aboutImage} alt="Cheyenna Logo" className="about-image" />
                </div>
                <div className="about-right">
                    <h1>Who am I?</h1>
                    <p>
                    As a Graphic Designer transitioning into UI/UX, I hold a BFA in Graphic Design, five years of professional design experience, and a full-stack development certificate from the University of Minnesota.
                    </p>
                    <p>
                    My unique approach blends design and code to deliver user-centered digital experiences that are visually appealing and solve real problems. In my next role, I am eager to leverage my design expertise and growing proficiency in HTML, CSS, JavaScript, TypeScript, and React to create intuitive interfaces that enhance user satisfaction. I am passionate about transforming user research and data into functional designs that elevate brand identity.
                    </p>
                    <strong>
                    Here are a few highlights of my accomplishments:
                    </strong>
                    <ul>
                        <li>
                            Cut website load time by 50%, improving site performance from 15 seconds to 4 seconds, which led to a 32% increase in time spent on the website and reduced the bounce rate by 21%. This accomplishment highlights my technical skills in optimizing performance to enhance user engagement and satisfaction.
                            </li>
                        <li>
                        Led the design and launch of a first e-commerce website, increasing software sales by 25% by transitioning from a manual sales process to an automated online checkout. This improvement enhanced user experience and conversion rates, showing my expertise in front-end and UX design.
                            </li>
                        <li>
                        Increased web traffic by 40% by focusing on improving user experience, mobile responsiveness, information architecture, and accessibility. This achievement resulted in enhanced visibility and customer engagement, demonstrating my dedication to user-centered design and accessibility.
                            </li>
                    </ul>

                    <p>
                    I am excited to bring my blend of creative design skills and technical knowledge to a UI/UX design team, aiming to create digital experiences that are visually appealing, user-friendly, and aligned with business objectives. Explore how I can bring value to your team and help drive your next project forward.
                    </p>
                    <a href="/portfolio" className="see-my-work">
                        See my portfolio
                    </a>
                </div>
            </div>

            {/* Skills Section */}
            <div className="skills-container">
                <div className="skills-left">
                    <h1>Skills</h1>
                    <p>
                        I’ve had the privilege of collaborating with diverse teams across various industries. This journey has allowed me to dive deep into multiple branches of design, honing a rich array of skills that I am excited to leverage in a UX/UI role. My expertise includes:
                    </p>

                    {/* New Wrapper for Skills Lists */}
                    <div className="skills-lists">
                        <div className="skills-column">
                            <h2>Front-End Development</h2>
                            <ul>
                                <li>HTML/CSS</li>
                                <li>JavaScript (ES6)</li>
                                <li>TypeScript</li>
                                <li>React</li>
                                <li>Bootstrap</li>
                                <li>jQuery</li>
                                <li>DOM</li>
                                <li>APIs</li>
                                <li>JSON</li>
                                <li>AJAX</li>
                                <li>Progressive Web Apps (PWA)</li>
                                <li>Visual Studio Code</li>
                                <li>Git/GitHub</li>
                                <li>npm (Node Package Manager)</li>
                                <li>Chrome DevTools</li>
                                <li>Insomnia</li>
                                <li>CMS (WordPress, Kraft)</li>
                            </ul>
                        </div>
                        <div className="skills-column">
                            <h2>Graphic Design</h2>
                            <ul>
                                <li>Wireframing</li>
                                <li>Prototyping</li>
                                <li>Graphic Design</li>
                                <li>Design Systems</li>
                                <li>User Flows</li>
                                <li>Information Architecture</li>
                                <li>Branding</li>
                                <li>UX/UI Design</li>
                                <li>Figma</li>
                                <li>Adobe Creative Suite</li>
                                <li>Responsive Design</li>
                                <li>Web Design</li>
                                <li>Accessibility Design</li>
                                <li>SEO</li>
                                <li>Video Editing</li>
                                <li>Photography</li>
                                <li>Copywriting</li>
                                <li>Illustration</li>
                                <li>Animation</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="skills-right">
                    <a href="/portfolio" className="image-wrapper">
                        <img src={skillsImage1} alt="Skills Image 1" className="skills-image" />
                        <div className="overlay">
                            <span className="overlay-text">See more Front-End Development work</span>
                        </div>
                    </a>
                    <a href="/portfolio" className="image-wrapper">
                        <img src={skillsImage2} alt="Skills Image 2" className="skills-image" />
                        <div className="overlay">
                            <span className="overlay-text">See more Graphic Design work</span>
                        </div>
                    </a>
                </div>

            </div>
            {/* Add Scroll Button only for long enough pages */}
            <ScrollButton />
        </>
    );
};

export default AboutMe;
