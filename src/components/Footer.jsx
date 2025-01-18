// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer>
      <p>Cheyenna Raelynn &copy; {new Date().getFullYear()}</p>
      <div className="footer-links">
        <a href="https://github.com/RaeOfChey" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        {/* <a href="https://cheyennaraelynn.myportfolio.com/" target="_blank" rel="noopener noreferrer">
          Design Portfolio
        </a> */}
        <a href="https://www.linkedin.com/in/cheyenna-raelynn/" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
        {/* <a href="https://www.instagram.com/raeofchey/" target="_blank" rel="noopener noreferrer">
          Instagram
        </a> */}
      </div>
    </footer>
  );
};

export default Footer;