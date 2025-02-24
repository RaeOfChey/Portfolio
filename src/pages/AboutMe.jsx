import React, { useEffect, useState, useRef } from 'react';
// import '../styles/styles.css';
import '../styles/AboutMe.css';
import { CircleCheckIcon } from '../components/CircleCheckIcon';
import ScrollButton from '../components/ScrollButton';
import { Link } from 'react-router-dom';
import EmployEaseThumbnail2 from '../assets/EmployEase Thumbnail Image 2.png';
import NorsemanNupitalsThumbnail from '../assets/Norseman Nupitals Thumbnail Cover.png';
import ITASCASoftwareImage7 from '../assets/ITASCASoftware CaseStudy Image7.png';
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
            <header className="header-container">
                <div className="hero-text">
                    <h1 className="title">
                    When <span class="title-highlight">design</span> speaks for itself, <span class="title-highlight">users</span> listen.
                        {/* <span className="animated-title">
                            {typedText}
                            <span className={`sticky ${isTypingFinished ? 'cursor-finished' : ''}`}>
                                <span className="cursor">|</span>
                            </span>
                        </span> */}
                    </h1>
                    <p className="subtitle">
                    Hello! I’m Cheyenna Raelynn, a designer and developer specializing in UI/UX design, front-end development, and AI-driven experiences. My work focuses on creating intuitive, user-friendly web experiences that guide users effortlessly and make every interaction seamless and engaging.
                    </p>
                </div>
            </header>

            <section id="recent-work" className="homepage">
                <div className="recent-work-items">
                    <div className="recent-work-item">
                        <a href="/itasca-software-case-study" target="_blank" rel="noopener noreferrer">
                            <div className="image-container">
                                <img src={ITASCASoftwareImage7} alt="ITASCA Software project thumbnail" />
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
                    <h1 className="who-am-i-title">Design Philosophy</h1>

                    <p>My goal is to ensure each product is not only visually appealing but also accessible and highly functional, empowering users to connect with products easily and naturally. I accomplish this by following my design philosophy:</p>

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

            <section id="education" class="education-section">
                <h1 class="education-title">Education</h1>
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
            </section>

            {/* <section id="career" class="career-section">
                <h1 class="career-title">My Career Path</h1>
                <div class="career-items">

                    <div class="career-item">
                        <div class="career-item-row">
                            <div class="career-left">
                                <h2>Digital Marketing Specialist</h2>
                                <p>ITASCA Minneapolis</p>
                            </div>
                            <div class="career-right">
                                <p>July 2023 - August 2024</p>
                            </div>
                        </div>
                    </div>

                    <div class="career-item">
                        <div class="career-item-row">
                            <div class="career-left">
                                <h2>Graphic Designer</h2>
                                <p>SecureWorld</p>
                            </div>
                            <div class="career-right">
                                <p>May 2022 - July 2023</p>
                            </div>
                        </div>
                    </div>

                    <div class="career-item">
                        <div class="career-item-row">
                            <div class="career-left">
                                <h2>Graphic & UX Designer</h2>
                                <p>Kelvix</p>
                            </div>
                            <div class="career-right">
                                <p>September 2021 - May 2022</p>
                            </div>
                        </div>
                    </div>

                    <div class="career-item">
                        <div class="career-item-row">
                            <div class="career-left">
                                <h2>Graphic Designer</h2>
                                <p>Catchafire</p>
                            </div>
                            <div class="career-right">
                                <p>July 2020 - March 2021</p>
                            </div>
                        </div>
                    </div>

                    <div class="career-item">
                        <div class="career-item-row">
                            <div class="career-left">
                                <h2>Branch Designer</h2>
                                <p>Aussie Peppers of MN</p>
                            </div>
                            <div class="career-right">
                                <p>January 2020 - July 2020</p>
                            </div>
                        </div>
                    </div>

                    <div class="career-item">
                        <div class="career-item-row">
                            <div class="career-left">
                                <h2>Graphic Designer</h2>
                                <p>Minnesota State University</p>
                            </div>
                            <div class="career-right">
                                <p>January 2018 - May 2018</p>
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
