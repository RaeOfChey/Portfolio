// src/components/Header.jsx
import React from 'react';
import '../styles/Header.css';
import introImage from '../assets/Cheyenna Logo (Nav).png';

function Header() {
  return (
    <header className="header-container">
      <div className="hero-text">
        <h1 className="title">Hello,<br />I'm Cheyenna,<br />a UX designer.</h1>
        <p className="subtitle">I design intuitive, visually engaging interfaces that bridge the gap between creativity and code to enhance user experiences.</p>
      </div>
      <div className="intro-image">
        <img src={introImage} alt="Introduction" />
      </div>
    </header>
  );
}

export default Header;