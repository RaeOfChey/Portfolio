import React from 'react';
import aboutImage from '../assets/Profile Headshot Image.png';
import skillsImage1 from '../assets/Norseman Nuptials (Skills).png';
import skillsImage2 from '../assets/Northwoods (Skills).png';
import '../styles/AboutMe.css';
import '../styles/styles.css';

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
                        As a Graphic Designer transitioning into UI/UX, I hold a BFA in Graphic Design, have 5 years of professional design experience, and a full-stack development certificate from the University of Minnesota.
                        <br />
                        My unique approach blends design and code to deliver user-centered digital experiences that are visually appealing and solve real problems. In my next role, I’m eager to leverage my design expertise and growing proficiency in HTML, CSS, and JavaScript to create intuitive interfaces that enhance user satisfaction. I’m passionate about transforming user research and data into functional designs that elevate brand identity.
                        <br />
                    </p>
                    <br />
                    Here are a few highlights of my accomplishments:<br />
                    <ul>
                        <li>Boosted revenue by 35% in 4 months by contributing to the successful launch of a new eCommerce website using WordPress and Shopify integration, providing a streamlined user experience for customers by reducing friction in the sales process.</li>
                        <li>Increased customer satisfaction by 40% through the development and implementation of a user-friendly customer portal, enabling clients to track orders, access product documentation, and manage warranties independently.</li>
                        <li>Increased web traffic by 40% by focusing on improving user experience, mobile responsiveness, and search engine optimization (SEO) ranking for key terms, resulting in enhanced visibility and customer engagement.</li>
                        <li>Coordinated with external development teams to deliver a fully branded, responsive, and accessible website, utilizing Figma for wireframing, prototyping, and design feedback, ensuring a cohesive UI/UX across all platforms.</li>
                    </ul>

                    <p>
                        I’m excited to bring my blend of creative design skills and technical knowledge to a UI/UX design team, aiming to create digital experiences that are visually appealing, user-friendly, and aligned with business objectives.
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
        </>
    );
};

export default AboutMe;
