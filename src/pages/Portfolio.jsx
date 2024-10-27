import React, { useState } from 'react';
import '../styles/Portfolio.css';

import AutoBuilderImg from '../assets/Thumbnail Cover for Development Projects.png';
import EmployeeOrganizerImg from '../assets/Thumbnail Cover for Development Projects.png';
import FuncTasticImg from '../assets/Thumbnail Cover for Development Projects.png';
import ReadMeGenieImg from '../assets/Thumbnail Cover for Development Projects.png';
import SlugfolioImg from '../assets/Thumbnail Cover for Development Projects.png';
import NorsemanNuptialsImg from '../assets/Thumbnail Cover for Graphic Design Projects.png';
import OchaTeaHouseImg from '../assets/Thumbnail Cover for Graphic Design Projects.png';
import NorthWoodsImg from '../assets/Thumbnail Cover for Graphic Design Projects.png';
import SecureWorldSignageImg from '../assets/Thumbnail Cover for Graphic Design Projects.png';
import SecureWorldCollateralImg from '../assets/Thumbnail Cover for Graphic Design Projects.png';
import SwankyCollateralImg from '../assets/Thumbnail Cover for Graphic Design Projects.png';
import PolitosPizzaImg from '../assets/Thumbnail Cover for Graphic Design Projects.png';

const projects = [
  // Development Projects
  {
    title: 'Auto Builder',
    link: 'https://github.com/RaeOfChey/autobuilder',
    type: 'TypeScript',
    category: 'Development',
    cta: 'Read case study →',
    image: AutoBuilderImg,
  },
  {
    title: 'Employee Organizer Pro',
    link: 'https://github.com/RaeOfChey/EmployeeOrganizerPro',
    type: 'TypeScript',
    category: 'Development',
    cta: 'Read case study →',
    image: EmployeeOrganizerImg,
  },
  {
    title: 'FuncTastic',
    link: 'https://github.com/RaeOfChey/function-checklist',
    type: 'HTML, CSS, JavaScript',
    category: 'Development',
    cta: 'Read case study →',
    image: FuncTasticImg,
  },
  {
    title: 'ReadMe Genie',
    link: 'https://github.com/RaeOfChey/ReadMeGenie',
    type: 'JavaScript',
    category: 'Development',
    cta: 'Read case study →',
    image: ReadMeGenieImg,
  },
  {
    title: 'Slugfolio',
    link: 'https://github.com/RaeOfChey/Slugfolio',
    type: 'HTML, CSS, JavaScript',
    category: 'Development',
    cta: 'Read case study →',
    image: SlugfolioImg,
  },

  // Graphic Design Projects
  {
    title: 'Norseman Nuptials',
    link: 'https://cheyennaraelynn.myportfolio.com/branding-norseman-nuptials',
    type: 'Branding',
    category: 'Graphic Design',
    cta: 'Read case study →',
    image: NorsemanNuptialsImg,
  },
  {
    title: 'Ocha Tea House',
    link: 'https://cheyennaraelynn.myportfolio.com/branding-ocha-tea-house',
    type: 'Branding',
    category: 'Graphic Design',
    cta: 'Read case study →',
    image: OchaTeaHouseImg,
  },
  {
    title: 'North Woods Beverage Co.',
    link: 'https://cheyennaraelynn.myportfolio.com/branding-north-woods-cold-brew',
    type: 'Package Design',
    category: 'Graphic Design',
    cta: 'Read case study →',
    image: NorthWoodsImg,
  },
  {
    title: 'SecureWorld Conference Signage',
    link: 'https://cheyennaraelynn.myportfolio.com/2023-themed-conference-signage-secureworld',
    type: 'Print Design',
    category: 'Graphic Design',
    cta: 'Read case study →',
    image: SecureWorldSignageImg,
  },
  {
    title: 'SecureWorld Marketing Collateral',
    link: 'https://cheyennaraelynn.myportfolio.com/branding-marketing-secureworld',
    type: 'Branding, Digital, Print, and Multimedia Design',
    category: 'Graphic Design',
    cta: 'Read case study →',
    image: SecureWorldCollateralImg,
  },
  {
    title: 'Swanky Marketing Collateral',
    link: 'https://cheyennaraelynn.myportfolio.com/branding-marketing-swanky',
    type: 'Branding, Digital Design',
    category: 'Graphic Design',
    cta: 'Read case study →',
    image: SwankyCollateralImg,
  },
  {
    title: 'Politos Pizza',
    link: 'https://cheyennaraelynn.myportfolio.com/rebranding-politos-pizza',
    type: 'Branding',
    category: 'Graphic Design',
    cta: 'Read case study →',
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
      <h1>Portfolio</h1>
      <p>Look through my work, read through my case studies, have a look at final designs and try out prototypes I’ve built.</p>
      <div className="filter-buttons">
        <button onClick={() => setFilter('All')} className={filter === 'All' ? 'active' : ''}>All</button>
        <button onClick={() => setFilter('Development')} className={filter === 'Development' ? 'active' : ''}>Development</button>
        <button onClick={() => setFilter('Graphic Design')} className={filter === 'Graphic Design' ? 'active' : ''}>Graphic Design</button>
      </div>
      <div className="project-cards">
        {filteredProjects.map((project, index) => (
          <div key={index} className="project-card">
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <img src={project.image} alt={project.title} />
              <h2 className="project-title">{project.title}</h2>
              <p className="project-type">{project.type}</p>
              <p className="project-cta">{project.cta}</p>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
