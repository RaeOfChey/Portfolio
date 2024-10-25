import { Link } from 'react-router-dom';
import logo from '../assets/Cheyenna Logo (Nav).png';
import '../styles/Navigation.css';

function Navigation() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <img src={logo} alt="Cheyenna Logo" className="logo" />
      </div>
      <ul className="navbar-links">
        <li><Link to="/">About Me</Link></li>
        <li><Link to="/portfolio">Portfolio</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/resume">Resume</Link></li>
      </ul>
    </nav>
  );
}

export default Navigation;
