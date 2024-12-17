import React, { useEffect, useState } from 'react';
import '../styles/styles.css';
import '../styles/Header.css';

const HomePage = () => {
  const phrase = "developer + designer";
  const [typedText, setTypedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let typingInterval;

    if (index < phrase.length) {
      typingInterval = setInterval(() => {
        setTypedText((prev) => prev + phrase[index]);
        setIndex((prev) => prev + 1);
      }, 100);
    } else {
      const resetTimeout = setTimeout(() => {
        setTypedText("");
        setIndex(0);
      }, 2000);

      return () => clearTimeout(resetTimeout);
    }

    return () => clearInterval(typingInterval);
  }, [index, phrase]);

  return (
    <header className="header-container">
      <div className="hero-text">
        <h1 className="title">
          Hello, I'm Cheyenna,<br />
          <span className="animated-title">{typedText}</span>
          <span className="cursor">|</span>
        </h1>
        <p className="subtitle">
          I design intuitive, visually engaging interfaces that bridge the gap between creativity and code to enhance user experiences.
        </p>

        {/* New Content Section */}
        <div className="experience-section">
          <div className="experience-item">
            <h2>01</h2>
            <p>5 years experience in design combined with development to craft user-focused solutions for industries including marketing, education, and e-commerce.</p>
          </div>
          <div className="experience-item">
            <h2>02</h2>
            <p>Blending creativity and technical expertise, I bring designs to life through clean code, intuitive interfaces, and thoughtful user experiences.</p>
          </div>
          <div className="experience-item">
            <h2>03</h2>
            <p>I bridge the gap between design and development, ensuring products are both visually engaging and seamlessly functional to drive user satisfaction and business goals.</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HomePage;
