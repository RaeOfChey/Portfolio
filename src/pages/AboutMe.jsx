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

import SkeletonCard from '../components/SkeletonCard';

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

    // --- ADD THE LOADING STATE HERE ---
    const [isLoading, setIsLoading] = useState(true);

    // Simulate loading for demo purposes
    useEffect(() => {
        const timer = setTimeout(() => setIsLoading(false), 1500); // 1.5 seconds
        return () => clearTimeout(timer);
    }, []);
    

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
                            Hello, I’m Cheyenna, a Digital Experience Designer and Strategist who combines strategy, UX/UI, design, and technology to create meaningful digital experiences. My work spans eCommerce, SaaS, and nonprofit, with experience ranging from product and interface design to information architecture, content strategy, and front-end development. I bring research, creativity, and technical thinking together to solve complex problems and create experiences that work for both people and organizations.
                        </p>
                    </div>
                </header>
            </body>

           <section id="recent-work" className="homepage">
        <div className="recent-work-items">
          {isLoading ? (
            [1, 2, 3].map(i => <SkeletonCard key={i} />)
          ) : (
            <>
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
            </>
          )}

          {!isLoading && (
            <div className="button-container">
              <a href="/portfolio" target="_blank" rel="noopener noreferrer">
                <button className="see-my-work-button">
                  See My Work
                  <ArrowRightIcon className="arrow-right-icon" />
                </button>
              </a>
            </div>
          )}
        </div>
      </section>

      {/* Experience Section */}
      <div className="experience-section">
        <div className="title-column">
          <h1 className="design-philosophy-title">Design Philosophy</h1>
        </div>

        <div className="content-column">
          {isLoading ? (
            <div className="experience-item-container">
              {[1, 2, 3, 4].map(i => <SkeletonCard key={i} />)}
            </div>
          ) : (
            <>
              <p className="my-goal-paragraph">
                My goal is to create digital experiences that are strategic, human, and built to make an impact. I bring together creativity, research, and technical thinking to solve problems and create experiences that work for both people and organizations.
              </p>
              <div className="experience-item-container">
                <div className="experience-item">
                  <div className="experience-item-header">
                    <CircleCheckIcon className="circle-check-icon" />
                    <h2>A strategic thinker</h2>
                  </div>
                  <p>
                    I look beyond the interface to understand the bigger picture, connecting user needs, business goals, content, and technology to define thoughtful solutions.
                    </p>
                </div>
                <div className="experience-item">
                  <div className="experience-item-header">
                    <CircleCheckIcon className="circle-check-icon" />
                    <h2>A creative with a technical edge</h2>
                  </div>
                  <p>
                    With experience across UX, UI, and front-end development, I bring ideas to life with an understanding of what makes them both effective and feasible.
                  </p>
                </div>
                <div className="experience-item">
                  <div className="experience-item-header">
                    <CircleCheckIcon className="circle-check-icon" />
                    <h2>A champion of thoughtful solutions</h2>
                  </div>
                  <p>
                    I use research, data, and creativity to create experiences that are accessible, intuitive, and purposeful.
                  </p>
                </div>
                <div className="experience-item">
                  <div className="experience-item-header">
                    <CircleCheckIcon className="circle-check-icon" />
                    <h2>An advocate for user-first design</h2>
                  </div>
                  <p>
                    Every project begins with understanding people, their motivations, challenges, and goals. I design experiences that feel effortless, intuitive, and impactful.
                  </p>
                </div>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Toolkit Section */}
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
            {isLoading ? (
              [1,2,3,4,5].map(i => <SkeletonCard key={i} />)
            ) : (
              [
                "Adobe Creative Cloud", "Figma", "FigJam", "Canva", "LottieFiles",
                "Hotjar", "UserTesting", "Maze", "AB Tasty", "Google Analytics", "WordPress", "Drupal", "Salesforce", "HubSpot", "Git/GitHub", "JavaScript", "TypeScript", "REST APIs", "GraphQL", "Bootstrap", "Monday.com"
              ]
              .concat([
                "Adobe Creative Cloud", "Figma", "FigJam", "Canva", "LottieFiles",
                "Hotjar", "UserTesting", "Maze", "AB Tasty", "Google Analytics", "WordPress", "Drupal", "Salesforce", "HubSpot", "Git/GitHub", "JavaScript", "TypeScript", "REST APIs", "GraphQL", "Bootstrap", "Monday.com"
              ])
              .map((tool, index) => (
                <div className="carousel-item" key={`${tool}-${index}`} title={tool}>
                  {tool}
                </div>
              ))
            )}
          </div>
        </div>
      </section>

      <ScrollButton />
    </>
  );
};

export default AboutMe;