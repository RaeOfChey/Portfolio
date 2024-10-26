// src/pages/HomePage.jsx
import React from 'react';
import '../styles/Header.css';
import introImage from '../assets/Cheyenna Logo (Nav).png';

const HomePage = () => {
  return (
    <header className="header-container">
      <div className="hero-text">
        <h1 className="title">Hello,<br />I'm Cheyenna,<br />a UX designer.</h1>
        <p className="subtitle">I design intuitive, visually engaging interfaces that bridge the gap between creativity and code to enhance user experiences.</p>
        <a href="/portfolio" className="learn-more-button">
          Learn more
        </a>
      </div>
      <div className="intro-image">
        <img src={introImage} alt="Introduction" />
      </div>
    </header>
  );
}

export default HomePage; // Ensure this is a default export
