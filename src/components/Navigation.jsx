import { useState } from 'react';
import { NavLink } from 'react-router-dom'; // Use NavLink
import logo from '../assets/Cheyenna Logo (Nav).png';
import '../styles/styles.css';
import ResumePDF from '../assets/Cheyenna-Raelynn-Resume.pdf';

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <NavLink to="/" end>
          <div className="logo">
            <img src={logo} alt="Cheyenna Logo" />
          </div>
        </NavLink>
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        <span className={isOpen ? "bar open" : "bar"}></span>
        <span className={isOpen ? "bar open" : "bar"}></span>
        <span className={isOpen ? "bar open" : "bar"}></span>
      </div>
      <ul className={`navbar-links ${isOpen ? "open" : ""}`}>
        <li><NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : '')}>About Me</NavLink></li>
        <li><NavLink to="/portfolio" className={({ isActive }) => (isActive ? 'active' : '')}>Portfolio</NavLink></li>
        <li><NavLink to="/contact" className={({ isActive }) => (isActive ? 'active' : '')}>Contact</NavLink></li>
        <li><a href={ResumePDF} target="_blank" rel="noopener noreferrer">Resume</a></li>
      </ul>
    </nav>
  );
}

export default Navigation;