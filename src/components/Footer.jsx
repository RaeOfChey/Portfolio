// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer>
      <p>Content copyright &copy; {new Date().getFullYear()} by Cheyenna Raelynn. All rights reserved.</p>
      <div>
        <a href="https://github.com/RaeOfChey" target="_blank" rel="noopener noreferrer">
          GitHub Portfolio
        </a>
        <a href="https://cheyennaraelynn.myportfolio.com/" target="_blank" rel="noopener noreferrer">
          Design Portfolio
        </a>
        <a href="https://www.linkedin.com/in/cheyenna-raelynn/" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
        <a href="https://www.instagram.com/raeofchey/" target="_blank" rel="noopener noreferrer">
          Instagram
        </a>
      </div>
    </footer>
  );
};

export default Footer;
