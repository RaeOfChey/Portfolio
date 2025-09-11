import React, { useEffect, useState, useRef } from 'react';
// import '../styles/styles.css';
import '../styles/AboutMe.css';

import { CircleCheckIcon } from '../components/CircleCheckIcon';
import ScrollButton from '../components/ScrollButton';
import { Link } from 'react-router-dom';
import KelvixThumbnail from '../assets/Kelvix Header Image.png';
import NorsemanNupitalsThumbnail from '../assets/norseman-nuptials/Norseman Nupitals Thumbnail Cover.png';
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
                            When <span className="title-highlight">design</span> speaks for itself, <span className="title-highlight">users</span> listen.
                        </h5>
                        <p className="subtitle">
                            Hello, I’m Cheyenna! I design for impact, creating digital experiences that draw users in and move them to act, from eCommerce sites that increase sales to SaaS platforms that boost adoption. With expertise in Graphic Design, UX/UI, and Development, I combine creativity with strategy to make every interaction effortless, intuitive, and impossible to ignore.
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
                                <div className="overlay">See Case Study</div>
                            </div>
                        </a>
                    </div>

                    <div className="recent-work-item">
                        <a href="/kelvix-case-study" target="_blank" rel="noopener noreferrer">
                            <div className="image-container">
                                <img src={KelvixThumbnail} alt="Kelvix project thumbnail" />
                                <div className="overlay">See Case Study</div>
                            </div>
                        </a>
                    </div>

                    <div className="recent-work-item">
                        <a href="/norseman-nuptials" target="_blank" rel="noopener noreferrer">
                            <div className="image-container">
                                <img src={NorsemanNupitalsThumbnail} alt="Norseman Nupitals project thumbnail" />
                                <div className="overlay">See Case Study</div>
                            </div>
                        </a>
                    </div>

                    <div className="button-container">
                        <a href="/portfolio" target="_blank" rel="noopener noreferrer">
                            <button className="see-my-work-button">
                                See My Work
                                <ArrowRightIcon className="arrow-right-icon" />
                            </button>
                        </a>
                    </div>
                </div>
            </section>

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
                            "Adobe Creative Cloud", "Figma", "FigJam", "Canva", "LottieFiles", "Hotjar", "UserTesting", "Maze", "WordPress", "Google Analytics", "HubSpot", "Git/GitHub", "JavaScript", "TypeScript", "MERN Stack", "REST APIs", "GraphQL", "Bootstrap", "Monday.com", "Micro", "ChatGPT"
                        ]
                            .concat([
                                "Adobe Creative Cloud", "Figma", "FigJam", "Canva", "LottieFiles", "Hotjar", "UserTesting", "Maze", "WordPress", "Google Analytics", "HubSpot", "Git/GitHub", "JavaScript", "TypeScript", "MERN Stack", "REST APIs", "GraphQL", "Bootstrap", "Monday.com", "Micro", "ChatGPT"
                            ])
                            .map((tool, index) => (
                                <div className="carousel-item" key={`${tool}-${index}`} title={tool}>
                                    {tool}
                                </div>
                            ))}
                    </div>
                </div>
            </section>

            <ScrollButton />
        </>
    );
};

export default AboutMe;
