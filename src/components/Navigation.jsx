import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import logo from '../assets/Cheyenna Logo (Nav).png';
import '../styles/styles.css';
import { MenuIcon } from '../components/MenuIcon';

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation(); // Track route changes

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Close menu when navigating to a new page
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]); 

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
        <MenuIcon isOpen={isOpen} />
      </div>
      
      <ul className={`navbar-links ${isOpen ? 'open' : ''}`}>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/portfolio">Portfolio</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
      </ul>
    </nav>
  );
}

export default Navigation;
