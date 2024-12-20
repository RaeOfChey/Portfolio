import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/Cheyenna Logo (Nav).png';
import '../styles/styles.css';
import { MenuIcon } from '../components/MenuIcon';

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
      
      {/* The hamburger icon now directly reflects the isOpen state */}
      <div className="hamburger" onClick={toggleMenu}>
        <MenuIcon isOpen={isOpen} />
      </div>
      
      <ul className={`navbar-links ${isOpen ? 'open' : ''}`}>
        <li><NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : '')}>About</NavLink></li>
        <li><NavLink to="/portfolio" className={({ isActive }) => (isActive ? 'active' : '')}>Portfolio</NavLink></li>
        <li><NavLink to="/contact" className={({ isActive }) => (isActive ? 'active' : '')}>Contact</NavLink></li>
      </ul>
    </nav>
  );
}

export default Navigation;