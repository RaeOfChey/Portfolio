import React, { useEffect, useState, useRef } from 'react';
import '../styles/styles.css';
import '../styles/AboutMe.css';
import { CircleCheckIcon } from '../components/CircleCheckIcon';
import ScrollButton from '../components/ScrollButton';
import { Link } from 'react-router-dom';

const AboutMe = () => {
    const phrase = "developer + designer";
    const [typedText, setTypedText] = useState("");
    const [index, setIndex] = useState(0);

    // Drag scroll state
    const carouselContainerRef = useRef(null); // Reference to the carousel container
    const [isDragging, setIsDragging] = useState(false); // To track dragging state
    const [startX, setStartX] = useState(0); // Starting X position for dragging
    const [scrollLeft, setScrollLeft] = useState(0); // Scroll position

    // Handle typing effect
    useEffect(() => {
        if (index < phrase.length) {
            const typingInterval = setInterval(() => {
                setTypedText((prev) => prev + phrase[index]);
                setIndex((prev) => prev + 1);
            }, 100);

            return () => clearInterval(typingInterval);
        }

        return undefined;
    }, [index, phrase]);

    // Mouse events for dragging
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
            <header className="header-container">
                <div className="hero-text">
                    <h1 className="title">
                        Hello, I'm Cheyenna,<br />
                        <span className="animated-title">{typedText}</span>
                        <span className="cursor">|</span>
                    </h1>
                    <p className="subtitle">
                        I craft engaging and accessible web experiences, combining creativity and code to deliver solutions that inspire users and drive results.
                    </p>
                    <div className="button-container">
                        <Link to="/portfolio">
                            <button className="see-my-work-button">
                                See My Work
                            </button>
                        </Link>
                    </div>
                </div>
            </header>

            {/* Experience Section */}
            <div className="experience-section">
                <div className="title-column">
                    <h1 className="who-am-i-title">Who am I?</h1>

                    <div className="experience-item-container">
                        <div className="experience-item">
                            <CircleCheckIcon className="circle-check-icon" />
                            <h2>A creative with a technical edge</h2>
                            <p>5 years of experience in design, expanded with development skills to create user-focused solutions for industries like marketing, education, and e-commerce.</p>
                        </div>

                        <div className="experience-item">
                            <CircleCheckIcon className="circle-check-icon" />
                            <h2>A bridge between design and development</h2>
                            <p>I bring designs to life through clean code, intuitive interfaces, and seamless user experiences that align with business goals.</p>
                        </div>

                        <div className="experience-item">
                            <CircleCheckIcon className="circle-check-icon" />
                            <h2>A champion of thoughtful solutions</h2>
                            <p>Combining analytical thinking and a love for creativity, I craft accessible, visually compelling, and highly functional web experiences.</p>
                        </div>

                        <div className="experience-item">
                            <CircleCheckIcon className="circle-check-icon" />
                            <h2>An advocate for user-first design</h2>
                            <p>I prioritize the user in every project, leveraging my design expertise and technical skills to deliver engaging, accessible, and impactful digital experiences.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* My Toolkit Section */}
            <section className="toolkit-section">
                <h1 className="toolkit-title">My Toolkit</h1>
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
                            "HTML/CSS", "JavaScript", "TypeScript", "React", "Sass/SCSS", "Tailwind CSS",
                            "Git", "GitHub", "Jest", "Cypress", "Figma", "Netlify", "MongoDB",
                            "Node", "jQuery", "OOP", "JSON", "API", "Insomnia", "SQL", "Python"
                        ]
                            .concat([ 
                                "HTML/CSS", "JavaScript", "TypeScript", "React", "Sass/SCSS", "Tailwind CSS",
                                "Git", "GitHub", "Jest", "Cypress", "Figma", "Netlify", "MongoDB",
                                "Node", "jQuery", "OOP", "JSON", "API", "Insomnia", "SQL", "Python"
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
