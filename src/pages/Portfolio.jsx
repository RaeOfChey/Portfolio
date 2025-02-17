import React, { useState } from 'react';
import '../styles/styles.css';
import '../styles/Portfolio.css';
import ScrollButton from '../components/ScrollButton';

import FilmTrackerImg from '../assets/Film Tracker Thumbnail Image.png';
import AutoPipelineImg from '../assets/Auto Pipeline Thumbnail Image.png';
import AutoBuilderImg from '../assets/Auto Builder Thumbnail Image.png';
import EmployeeOrganizerImg from '../assets/Employee Organizer Pro Thumbnail Image.png';
import FuncTasticImg from '../assets/FuncTastic Thumbnail Image.png';
import ReadMeGenieImg from '../assets/ReadMe Genie Thumbnail Image.png';
import SlugfolioImg from '../assets/Slugfolio Thumbnail Image.png';
import NorsemanNuptialsImg from '../assets/Norseman Nupitals Thumbnail Cover.png';
import OchaTeaHouseImg from '../assets/Ocha Tea House Regular Thumbnail Image.png';
import NorthWoodsImg from '../assets/North Woods Cold Brew Thumbnail Image.png';
import SecureWorldSignageImg from '../assets/SecureWorld Conference Signage Thumbnail Image.png';
import SecureWorldCollateralImg from '../assets/SecureWorld Marketing Collateral Thumbnail Image.png';
import SwankyCollateralImg from '../assets/Swanky Marketing Collateral Thumbnail Image.png';
import PolitosPizzaImg from '../assets/Politos Pizza Regular Thumbnail Image.png';
import CodexXImg from '../assets/CodexX Thumbnail Image.png';
import BookVaultImg from '../assets/BookVault Thumbnail Image.png';
import EmployEaseImg from '../assets/EmployEase Thumbnail Image.png';
import DotNetProductAPIImg from '../assets/DotNetProductAPI Thumbnail Image.png';

const projects = [
  // Development Projects
  {
    title: 'EmployEase',
    link: '/employease-case-study',
    type: 'Streamlining the job application process on a unified platform to reduce complexity and increase efficiency.',
    category: 'Development',
    cta: 'Learn More',
    image: EmployEaseImg,
  },
  {
    title: 'Film Tracker',
    link: 'https://github.com/RaeOfChey/FilmTracker',
    type: 'Designing a seamless film-tracking experience to help movie lovers organize their watchlists effortlessly.',
    category: 'Development',
    cta: 'Learn More',
    image: FilmTrackerImg,
  },
  {
    title: 'DotNetProductAPI',
    link: 'https://github.com/RaeOfChey/DotNetProductAPI',
    type: 'Designing a CRUD API for E-Commerce Product Management with .NET Core.',
    category: 'Read GitHub Repo',
    cta: 'Learn More',
    image: DotNetProductAPIImg,
  },
  {
    title: 'Auto Pipeline',
    link: 'https://github.com/RaeOfChey/AutoPipeline',
    type: 'Automating continuous integration and deployment for MERN applications using GitHub Actions and Render.',
    category: 'Development.',
    cta: 'Learn More',
    image: AutoPipelineImg,
  },
  {
    title: 'BookVault',
    link: 'https://github.com/RaeOfChey/CodexX',
    type: 'Helping readers easily discover and organize their favorite books with a modern and intuitive search and library management experience.',
    category: 'Development',
    cta: 'Learn More',
    image: BookVaultImg,
  },
  {
    title: 'CodeX',
    link: 'https://github.com/RaeOfChey/CodexX',
    type: 'Empowering gamers to discover new titles and curate their ultimate wishlist with a personalized video game library platform.',
    category: 'Development',
    cta: 'Learn More',
    image: CodexXImg,
  },
  {
    title: 'Employee Organizer',
    link: 'https://github.com/RaeOfChey/EmployeeOrganizerPro',
    type: 'Streamlining employee and department management with an intuitive command-line application for businesses to efficiently organize their workforce.',
    category: 'Development',
    cta: 'Learn More',
    image: EmployeeOrganizerImg,
  },
  {
    title: 'FuncTastic',
    link: 'https://github.com/RaeOfChey/function-checklist',
    type: 'JavaScript function checklist and tracker for developers to manage and monitor function details within a project.',
    category: 'Development',
    cta: 'Learn More',
    image: FuncTasticImg,
  },
  {
    title: 'ReadMe Genie',
    link: 'https://github.com/RaeOfChey/ReadMeGenie',
    type: 'Command-line tool to dynamically generate professional README.md files based on user input.',
    category: 'Development',
    cta: 'Learn More',
    image: ReadMeGenieImg,
  },
  {
    title: 'Auto Builder',
    link: 'https://github.com/RaeOfChey/Autobuilder',
    type: 'A command-line tool to create and manage vehicles with customized details and actions.',
    category: 'Development',
    cta: 'Learn More',
    image: AutoBuilderImg,
  },
  {
    title: 'Slugfolio',
    link: 'https://github.com/RaeOfChey/Slugfolio',
    type: 'A command-line tool to generate a customizable portfolio with personal information and social links.',
    category: 'Development',
    cta: 'Learn More',
    image: SlugfolioImg,
  },

  // Graphic Design Projects
  {
    title: 'Norseman Nuptials',
    link: 'https://cheyennaraelynn.myportfolio.com/branding-norseman-nuptials',
    type: 'Creating a brand identity and collateral for couples seeking non-traditional wedding experiences that increased engagement and bookings.',
    category: 'Graphic Design',
    cta: 'Learn More',
    image: NorsemanNuptialsImg,
  },
  {
    title: 'Ocha Tea House',
    link: 'https://cheyennaraelynn.myportfolio.com/branding-ocha-tea-house',
    type: 'Developing a unique brand identity and collateral for a Japanese tea house that increased foot traffic and sales by blending tradition with modern appeal.',
    category: 'Graphic Design',
    cta: 'Learn More',
    image: OchaTeaHouseImg,
  },
  {
    title: 'North Woods Beverage Co.',
    link: 'https://cheyennaraelynn.myportfolio.com/branding-north-woods-cold-brew',
    type: 'Creating seasonal label designs that captured the adventurous spirit of cold brew coffee and increased sales by 25%.',
    category: 'Graphic Design',
    cta: 'Learn More',
    image: NorthWoodsImg,
  },
  {
    title: 'SecureWorld Conference Signage',
    link: 'https://cheyennaraelynn.myportfolio.com/2023-themed-conference-signage-secureworld',
    type: 'Designing an EDM-inspired conference theme that increased attendee engagement by 50% and enhanced the event experience.',
    category: 'Graphic Design',
    cta: 'Learn More',
    image: SecureWorldSignageImg,
  },
  {
    title: 'SecureWorld Marketing Collateral',
    link: 'https://cheyennaraelynn.myportfolio.com/branding-marketing-secureworld',
    type: 'Modernizing a brand identity across print digital and multimedia platforms resulting in a 60% increase in engagement.',
    category: 'Graphic Design',
    cta: 'Learn More',
    image: SecureWorldCollateralImg,
  },
  {
    title: 'Swanky Marketing Collateral',
    link: 'https://cheyennaraelynn.myportfolio.com/branding-marketing-swanky',
    type: 'Increasing engagement through targeted social media outreach email blasts and rebranding technical documents for improved community connection.',
    category: 'Graphic Design',
    cta: 'Learn More',
    image: SwankyCollateralImg,
  },
  {
    title: 'Politos Pizza',
    link: 'https://cheyennaraelynn.myportfolio.com/rebranding-politos-pizza',
    type: 'Rebranding to increase brand awareness and attract new customers with a refreshed logo and engaging collateral.',
    category: 'Graphic Design',
    cta: 'Learn More',
    image: PolitosPizzaImg,
  },
];

function Portfolio() {
  const [filter, setFilter] = useState('All');

  const filteredProjects = filter === 'All'
    ? projects
    : projects.filter(project => project.category === filter);

  return (
    <div className="portfolio">
      <h1 className="portfolio-h2">Portfolio</h1>
      <p>Look through my work, read through my case studies, have a look at final designs and try out prototypes I’ve built.</p>
      <div className="filter-buttons">
        <button onClick={() => setFilter('All')} className={filter === 'All' ? 'active' : ''}>All</button>
        <button onClick={() => setFilter('Development')} className={filter === 'Development' ? 'active' : ''}>Development</button>
        <button onClick={() => setFilter('Graphic Design')} className={filter === 'Graphic Design' ? 'active' : ''}>Design</button>
      </div>

      <div className="project-cards">
  {filteredProjects.map((project, index) => (
    <div key={index} className="project-card">
    <a href={project.link} target="_blank" rel="noopener noreferrer">
      <img src={project.image} alt={project.title} />
      <div className="project-info">
        <h2 className="project-title">{project.title}</h2>
        <p className="project-type">{project.type}</p>
        <p className="project-cta">{project.cta}</p>
      </div>
    </a>
  </div>
  ))}
</div>

      {/* Add the ScrollButton component at the bottom of the page */}
      <ScrollButton />
    </div>
  );
}

export default Portfolio;