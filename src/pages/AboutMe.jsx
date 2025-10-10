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
                            Hello, I’m Cheyenna, a UX/UI and Digital Experience Strategist who designs for measurable impact. I help businesses define what to build, why it matters, and how to make it perform. My work spans eCommerce sites that increase sales and SaaS platforms that boost adoption. By combining creativity, research, and hands-on technical skill, I turn strategic insights into intuitive experiences that drive results.
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
                My goal is to create digital experiences that are both strategic and human. Every design decision is guided by research, data, and empathy. The outcome should not only look exceptional but also serve a clear purpose and deliver measurable results.
              </p>
              <div className="experience-item-container">
                <div className="experience-item">
                  <div className="experience-item-header">
                    <CircleCheckIcon className="circle-check-icon" />
                    <h2>A creative with a technical edge</h2>
                  </div>
                  <p>
                    I have more than five years of experience blending design, UX, and front-end development to craft user-centered solutions that align with business goals across marketing, healthcare, and SaaS.
                    </p>
                </div>
                <div className="experience-item">
                  <div className="experience-item-header">
                    <CircleCheckIcon className="circle-check-icon" />
                    <h2>A bridge between design and development</h2>
                  </div>
                  <p>
                    I translate insights into tangible products by connecting strategy, user experience, and technical feasibility. My goal is to deliver results that perform as beautifully as they look.
                  </p>
                </div>
                <div className="experience-item">
                  <div className="experience-item-header">
                    <CircleCheckIcon className="circle-check-icon" />
                    <h2>A champion of thoughtful solutions</h2>
                  </div>
                  <p>
                    I combine analytical thinking with creativity to focus on accessibility, usability, and conversion. Every detail supports both user satisfaction and business growth.
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
                "Hotjar", "UserTesting", "Maze", "WordPress", "Google Analytics",
                "HubSpot", "Git/GitHub", "JavaScript", "TypeScript", "MERN Stack",
                "REST APIs", "GraphQL", "Bootstrap", "Monday.com", "Micro", "ChatGPT"
              ]
              .concat([
                "Adobe Creative Cloud", "Figma", "FigJam", "Canva", "LottieFiles",
                "Hotjar", "UserTesting", "Maze", "WordPress", "Google Analytics",
                "HubSpot", "Git/GitHub", "JavaScript", "TypeScript", "MERN Stack",
                "REST APIs", "GraphQL", "Bootstrap", "Monday.com", "Micro", "ChatGPT"
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