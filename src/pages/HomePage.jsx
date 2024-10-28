import React, { useEffect, useState } from 'react';
import '../styles/styles.css';
import '../styles/Header.css';
import introImage from '../assets/Cheyennas Logo (HomePage).png';

const titles = ["UX Designer", "Web Designer", "Graphic Designer" ];

const HomePage = () => {
  const [currentTitle, setCurrentTitle] = useState(titles[0]);
  let index = 0;

  useEffect(() => {
    const interval = setInterval(() => {
      index = (index + 1) % titles.length; // Loop through all the titles
      setCurrentTitle(titles[index]);
    }, 2000); // Change title every 2 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <header className="header-container">
  <div className="hero-text">
    <h1 className="title">
      Hello,<br />I'm Cheyenna,<br />a <span className="animated-title">{currentTitle}</span>
    </h1>
    <p className="subtitle">
      I design intuitive, visually engaging interfaces that bridge the gap between creativity and code to enhance user experiences.
    </p>
    <a href="/portfolio" className="learn-more-button">
      Learn more
    </a>
  </div>
  <div className="intro-image">
    <img src={introImage} alt="Introduction" />
  </div>
</header>
  );
};

export default HomePage;
