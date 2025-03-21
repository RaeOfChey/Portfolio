import React, { useEffect, useState, useRef } from 'react';
// import '../styles/styles.css';
import '../styles/AboutMe.css';

import { CircleCheckIcon } from '../components/CircleCheckIcon';
import ScrollButton from '../components/ScrollButton';
import { Link } from 'react-router-dom';
import EmployEaseThumbnail2 from '../assets/EmployEase Thumbnail Image 2.png';
import NorsemanNupitalsThumbnail from '../assets/Norseman Nupitals Thumbnail Cover.png';
import ITASCASoftwareThumbnail from '../assets/ITASCA Software Thumbnail Image.png';
import { ArrowRightIcon } from '../components/ArrowRightIcon';

const AboutMe = () => {
    const phrase = "designer + developer";
    const [typedText, setTypedText] = useState("");
    const [index, setIndex] = useState(0);
    const [isTypingFinished, setIsTypingFinished] = useState(false);

    // Handle typing effect
    useEffect(() => {
        if (index < phrase.length) {
            const typingInterval = setInterval(() => {
                setTypedText((prev) => prev + phrase[index]);
                setIndex((prev) => prev + 1);
            }, 100);

            return () => clearInterval(typingInterval);
        } else {
            setIsTypingFinished(true); // Typing is finished
        }

        return undefined;
    }, [index, phrase]);

    const carouselContainerRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    const handleMouseDown = (e) => {
        setIsDragging(true);
        setStartX(e.clientX);
        setScrollLeft(carouselContainerRef.current.scrollLeft);
    };

    const handleMouseLeave = () => {
        setIsDragging(false);
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const handleMouseMove = (e) => {
        if (!isDragging) return;
        const moveX = e.clientX - startX;
        carouselContainerRef.current.scrollLeft = scrollLeft - moveX;
    };

    return (
        <>
            {/* HomePage content */}
            <body className="homepage">
                <header className="header-container" style={{ backgroundColor: "#f0f0f0" }}>
                    <div className="hero-text">
                        <h5 className="biggest-title">
                            When <span class="title-highlight">design</span> speaks for itself, <span class="title-highlight">users</span> listen.
                        </h5>
                        <p className="subtitle">
                            Hello, I’m Cheyenna!  I design and build intuitive, high-performing eCommerce and SaaS web experiences that drive engagement, increase conversions, and seamlessly bridge the gap between design and development.
                        </p>
                    </div>
                </header>
            </body>

            <section id="recent-work" className="homepage">
                <div className="recent-work-items">
                    <div className="recent-work-item">
                        <a href="/itasca-software-case-study" target="_blank" rel="noopener noreferrer">
                            <div className="image-container">
                                <img src={ITASCASoftwareThumbnail} alt="ITASCA Software project thumbnail" />
                                <div className="overlay">Learn More</div>
                            </div>
                        </a>
                    </div>

                    <div className="recent-work-item">
                        <Link to="/employease-case-study">
                            <div className="image-container">
                                <img src={EmployEaseThumbnail2} alt="EmployEase project thumbnail" />
                                <div className="overlay">Learn More</div>
                            </div>
                        </Link>
                    </div>

                    <div className="recent-work-item">
                        <a href="https://cheyennaraelynn.myportfolio.com/branding-norseman-nuptials" target="_blank" rel="noopener noreferrer">
                            <div className="image-container">
                                <img src={NorsemanNupitalsThumbnail} alt="Norseman Nupitals project thumbnail" />
                                <div className="overlay">Learn More</div>
                            </div>
                        </a>
                    </div>

                    <div className="button-container">
                        <Link to="/portfolio">
                            <button className="see-my-work-button">
                                See My Work
                                <ArrowRightIcon className="arrow-right-icon" />
                            </button>
                        </Link>
                    </div>
                </div>
            </section>


            {/* Experience Section */}
            <div className="experience-section">

                <div className="title-column">
                    <h1 className="design-philosophy-title">Design Philosophy</h1>
                </div>

                <div className="content-column">
                    <p className="my-goal-paragraph">My goal is to ensure each product is not only visually appealing but also accessible and highly functional, empowering users to connect with products easily and naturally. I accomplish this by following my design philosophy:</p>
                    <div className="experience-item-container">
                        <div className="experience-item">
                            <div className="experience-item-header">
                                <CircleCheckIcon className="circle-check-icon" />
                                <h2>A creative with a technical edge</h2>
                            </div>
                            <p>Over 5 years of experience in design, expanded with development skills to create user-focused solutions for industries like marketing, education, and e-commerce.</p>
                        </div>

                        <div className="experience-item">
                            <div className="experience-item-header">
                                <CircleCheckIcon className="circle-check-icon" />
                                <h2>A bridge between design and development</h2>
                            </div>
                            <p>I bring designs to life through clean code, intuitive interfaces, and seamless user experiences that align with business goals.</p>
                        </div>

                        <div className="experience-item">
                            <div className="experience-item-header">
                                <CircleCheckIcon className="circle-check-icon" />
                                <h2>A champion of thoughtful solutions</h2>
                            </div>
                            <p>Combining analytical thinking and a love for creativity, I craft accessible, visually compelling, and highly functional web experiences.</p>
                        </div>

                        <div className="experience-item">
                            <div className="experience-item-header">
                                <CircleCheckIcon className="circle-check-icon" />
                                <h2>An advocate for user-first design</h2>
                            </div>
                            <p>I prioritize the user in every project, leveraging my design expertise and technical skills to deliver engaging, accessible, and impactful digital experiences.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* My Toolkit Section */}
            <section className="toolkit-section">
                <h1 className="toolkit-title">Toolkit</h1>
                <div
                    className="carousel-wrapper"
                    ref={carouselContainerRef}
                    onMouseDown={handleMouseDown}
                    onMouseLeave={handleMouseLeave}
                    onMouseUp={handleMouseUp}
                    onMouseMove={handleMouseMove}
                >
                    <div className="carousel-container">
                        {[
                            "Miro", "Adobe Illustrator", "Adobe Photoshop", "Figma", "v0", "Bolt CMS", "Zeplin", "CodePen", "Bootstrap", "CSS3", "Sass/SCSS", "HTML5", "JavaScript", "TypeScript", "Webpack", "jQuery", "Jest", "PWA", "Insomnia", "React", "Slack", "Trello", "Jira", "Hotjar", "Usability Hub", "JSON", "OOP", "React", "WordPress", "Git/GitHub"
                        ]
                            .concat([
                                "Miro", "Adobe Illustrator", "Adobe Photoshop", "Figma", "v0", "Bolt CMS", "Zeplin", "CodePen", "Bootstrap", "CSS3", "Sass/SCSS", "HTML5", "JavaScript", "TypeScript", "Webpack", "jQuery", "Jest", "PWA", "Insomnia", "React", "Slack", "Trello", "Jira", "Hotjar", "Usability Hub", "JSON", "OOP", "React", "WordPress", "Git/GitHub"
                            ])
                            .map((tool, index) => (
                                <div className="carousel-item" key={`${tool}-${index}`} title={tool}>
                                    {tool}
                                </div>
                            ))}
                    </div>
                </div>
            </section>

            {/* <section id="education" class="education-section">
                <div class="education-section-wrapper">
                    <div class="title-column">
                        <h1 class="education-title">Education</h1>
                    </div>

                    <div class="content-column">
                        <div class="education-items">
                            <div class="education-item">
                                <h2>University of Minnesota</h2>
                                <p>Full-Stack Development Certificate</p>
                                <p>Completed: December 2024</p>
                            </div>

                            <div class="education-item">
                                <h2>Minnesota State University</h2>
                                <p>Bachelor of Fine Arts (BFA) in Graphic Design</p>
                                <p>Completed: December 2019</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}

            <ScrollButton />
        </>
    );
};

export default AboutMe;
