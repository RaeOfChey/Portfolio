import React from 'react';
import aboutImage from '../assets/Cheyennas Logo (AboutMe).png';
import skillsImage from '../assets/Flowers(Skills).png';
import '../styles/AboutMe.css';

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
                        <li>Redesigned a client’s website, improving user navigation and reducing bounce rates by 15%.</li>
                        <li>Led a UX/UI revamp of a mobile app that resulted in a 20% increase in user retention within three months.</li>
                        <li>Conducted user testing and implemented design changes that improved conversion rates by 25% on an eCommerce site.</li>
                        <li>Created responsive web designs that increased mobile traffic engagement by 30%, ensuring a seamless experience across devices.</li>
                        <li>Collaborated with cross-functional teams on a web redesign project that improved the site’s usability, resulting in a 10% increase in customer satisfaction scores.</li>
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
                    <img src={skillsImage} alt="Skills Image" className="skills-image" />
                </div>
            </div>
        </>
    );
};

export default AboutMe;