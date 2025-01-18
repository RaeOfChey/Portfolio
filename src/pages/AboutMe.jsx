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
            <header className="header-container">
                <div className="hero-text">
                    <h1 className="title">
                        Hello, I'm Cheyenna,
                        <span className="animated-title">
                            {typedText}
                            <span className={`sticky ${isTypingFinished ? 'cursor-finished' : ''}`}>
                                <span className="cursor">|</span>
                            </span>
                        </span>
                    </h1>
                    <p className="subtitle">
                        I craft engaging, accessible web experiences that inspire users, boost engagement, and deliver measurable results.
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
                            <div className="experience-item-header">
                                <CircleCheckIcon className="circle-check-icon" />
                                <h2>A creative with a technical edge</h2>
                            </div>
                            <p>5 years of experience in design, expanded with development skills to create user-focused solutions for industries like marketing, education, and e-commerce.</p>
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
                            "API", "Bootstrap", "CSS3", "Cypress", "Express.js", "Figma", "Git/GitHub", "HTML5", "Insomnia", "JavaScript", "Jest", "JSON", "Miro", "MongoDB", "NPM", "Node.js", "Next.js", "OOP", "PWA", "Python", "React", "Sass/SCSS", "Sequelize", "SQL", "TypeScript", "Webpack", "WordPress", "jQuery"
                        ]
                            .concat([
                                "API", "Bootstrap", "CSS3", "Cypress", "Express.js", "Figma", "Git/GitHub", "HTML5", "Insomnia", "JavaScript", "Jest", "JSON", "Miro", "MongoDB", "NPM", "Node.js", "Next.js", "OOP", "PWA", "Python", "React", "Sass/SCSS", "Sequelize", "SQL", "TypeScript", "Webpack", "WordPress", "jQuery"
                            ])
                            .map((tool, index) => (
                                <div className="carousel-item" key={`${tool}-${index}`} title={tool}>
                                    {tool}
                                </div>
                            ))}
                    </div>
                </div>
            </section>

            <section id="education" class="education-section">
                <h1 class="education-title">Education</h1>
                <div class="education-items">
                    <div class="education-item">
                        <h2>University of Minnesota</h2>
                        <p>Full-Stack Development Certificate</p>
                        <p>Completed: December 2024</p>
                    </div>
                    <div class="education-item">
                        <h2>University of Minnesota</h2>
                        <p>Bachelor of Fine Arts (BFA) in Graphic Design</p>
                        <p>Graduated: December 2019</p>
                    </div>
                </div>
            </section>

            <ScrollButton />
        </>
    );
};

export default AboutMe;
