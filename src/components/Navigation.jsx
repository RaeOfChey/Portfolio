import { Link } from 'react-router-dom';
import logo from '../assets/Cheyenna Logo (Nav).png';
import '../styles/styles.css';

function Navigation() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">
          <div className="logo">
            <img src={logo} alt="Cheyenna Logo" />
          </div>
        </Link>
      </div>
      <ul className="navbar-links">
        <li><Link to="/about">About Me</Link></li>
        <li><Link to="/portfolio">Portfolio</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/resume">Resume</Link></li>
      </ul>
    </nav>
  );
}

export default Navigation;
