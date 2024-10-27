import { NavLink } from 'react-router-dom'; // Use NavLink
import logo from '../assets/Cheyenna Logo (Nav).png';
import '../styles/styles.css';
import ResumePDF from '../assets/Cheyenna-Raelynn-Resume.pdf';

function Navigation() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <NavLink to="/" end>
          <div className="logo">
            <img src={logo} alt="Cheyenna Logo" />
          </div>
        </NavLink>
      </div>
      <ul className="navbar-links">
        <li>
          <NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : '')}>
            About Me
          </NavLink>
        </li>
        <li>
          <NavLink to="/portfolio" className={({ isActive }) => (isActive ? 'active' : '')}>
            Portfolio
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className={({ isActive }) => (isActive ? 'active' : '')}>
            Contact
          </NavLink>
        </li>
        <li>
          <a 
            href={ResumePDF}  
            target="_blank" 
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
