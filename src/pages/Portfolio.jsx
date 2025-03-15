import React, { useState } from 'react';
import '../styles/styles.css';
import '../styles/Portfolio.css';
import ScrollButton from '../components/ScrollButton';

import FilmTrackerImg from '../assets/Film Tracker Thumbnail Image.png';
import AutoPipelineImg from '../assets/Auto Pipeline Thumbnail Image.png';
import FuncTasticImg from '../assets/FuncTastic Thumbnail Image.png';
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
import ITASCASoftwareThumbnail from '../assets/ITASCA Software Thumbnail Image.png';
import KelvixImg from '../assets/Kelvix Thumbnail Image.png';
import ITASCACareersPageImg from '../assets/ITASCA Careers Page Thumbnail Image.png';

const projects = [
  // Development Projects
  {
    title: 'Redesigning a B2B eCommerce SaaS platform to enhance user experience and drive software sales growth by 25%.',
    link: '/itasca-software-case-study',
    type: '#UX/UI Design #Front-end Development #Branding #Marketing #Advertising',
    category: ['Development', 'UX/UI Design'],
    cta: 'See More',
    image: ITASCASoftwareThumbnail,
  },
  {
    title: 'Streamlining the job application process on a unified platform to reduce complexity and increase efficiency.',
    link: '/employease-case-study',
    type: '#UX/UI Design #Front-end Development',
    category: ['Development', 'UX/UI Design'],
    cta: 'See More',
    image: EmployEaseImg,
  },
  {
    title: 'Redesigning a B2B eCommerce platform to enhance user experience and drive product sales growth by 15%.',
    link: '/kelvix-case-study',
    type: '#UX/UI Design #Front-end Development #Branding #Marketing #Advertising',
    category: ['Development', 'UX/UI Design'],
    cta: 'See More',
    image: KelvixImg,
  },
  {
    title: 'Developing a careers landing page, to streamline the hiring process and candidate journey, increasing quality applicants.',
    link: '/itasca-careers-page-case-study',
    type: '#UX/UI Design #Front-end Development',
    category: ['Development', 'UX/UI Design'],
    cta: 'See More',
    image: ITASCACareersPageImg,
  },
  {
    title: 'Designing a seamless film-tracking experience to help movie lovers organize their watchlists effortlessly.',
    link: 'https://github.com/RaeOfChey/FilmTracker',
    type: '#Front-end Development #Back-end Development',
    category: ['Development'],
    cta: 'See More',
    image: FilmTrackerImg,
  },
  {
    title: 'Automating continuous integration and deployment for MERN applications using GitHub Actions and Render.',
    link: 'https://autopipeline.onrender.com',
    type: '#Front-end Development #Back-end Development',
    category: 'Development',
    cta: 'See More',
    image: AutoPipelineImg,
  },
  {
    title: 'Helping readers easily discover and organize their favorite books with a modern and intuitive search and library management experience.',
    link: 'https://github.com/RaeOfChey/BookVault',
    type: '#Front-end Development #Back-end Development',
    category: ['Development'],
    cta: 'See More',
    image: BookVaultImg,
  },
  {
    title: 'Empowering gamers to discover new titles and curate their ultimate wishlist with a personalized video game library platform.',
    link: 'https://github.com/RaeOfChey/CodexX',
    type: '#UX/UI Design #Front-end Development #Back-end Development',
    category: ['Front and Back-end Development', 'UX/UI Design'],
    cta: 'See More',
    image: CodexXImg,
  },
  {
    title: 'JavaScript function checklist and tracker for developers to manage and monitor function details within a project.',
    link: 'https://github.com/RaeOfChey/function-checklist',
    type: '#Front-end Development',
    category: ['Development'],
    cta: 'See More',
    image: FuncTasticImg,
  },
  {
    title: 'A command-line tool to generate a customizable portfolio with personal information and social links.',
    link: 'https://github.com/RaeOfChey/Slugfolio',
    type: '#Front-end Development #Back-end Development',
    category: 'Development',
    cta: 'See More',
    image: SlugfolioImg,
  },

  // Graphic Design Projects
  {
    title: 'Creating a brand identity and collateral for couples seeking non-traditional wedding experiences that increased engagement and bookings.',
    link: 'https://cheyennaraelynn.myportfolio.com/branding-norseman-nuptials',
    type: '#Branding #Marketing #Advertising #Print #Social Media',
    category: 'Graphic Design',
    cta: 'See More',
    image: NorsemanNuptialsImg,
  },
  {
    title: 'Developing a unique brand identity and collateral for a Japanese tea house that increased foot traffic and sales by blending tradition with modern appeal.',
    link: 'https://cheyennaraelynn.myportfolio.com/branding-ocha-tea-house',
    type: '#Branding #Marketing #Packaging #Print',
    category: 'Graphic Design',
    cta: 'See More',
    image: OchaTeaHouseImg,
  },
  {
    title: 'Creating seasonal label designs that captured the adventurous spirit of cold brew coffee and increased sales by 25%.',
    link: 'https://cheyennaraelynn.myportfolio.com/branding-north-woods-cold-brew',
    type: '#Branding, #Packaging',
    category: 'Graphic Design',
    cta: 'See More',
    image: NorthWoodsImg,
  },
  {
    title: 'Designing an EDM-inspired conference theme that increased attendee engagement by 50% and enhanced the event experience.',
    link: 'https://cheyennaraelynn.myportfolio.com/2023-themed-conference-signage-secureworld',
    type: '#Branding #Marketing #Packaging #Print',
    category: 'Graphic Design',
    cta: 'See More',
    image: SecureWorldSignageImg,
  },
  {
    title: 'Modernizing a brand identity across print digital and multimedia platforms resulting in a 60% increase in engagement.',
    link: 'https://cheyennaraelynn.myportfolio.com/branding-marketing-secureworld',
    type: '#Web #Branding #Marketing #Advertising #Print #Social Media #Motion #Infographics',
    category: 'Graphic Design',
    cta: 'See More',
    image: SecureWorldCollateralImg,
  },
  {
    title: 'Increasing engagement through targeted social media outreach email blasts and rebranding technical documents for improved community connection.',
    link: 'https://cheyennaraelynn.myportfolio.com/branding-marketing-swanky',
    type: '#Branding #Marketing #Advertising #Print #Social Media',
    category: 'Graphic Design',
    cta: 'See More',
    image: SwankyCollateralImg,
  },
  {
    title: 'Rebranding to increase brand awareness and attract new customers with a refreshed logo and engaging collateral.',
    link: 'https://cheyennaraelynn.myportfolio.com/rebranding-politos-pizza',
    type: '#Branding #Marketing #Packaging #Print',
    category: 'Graphic Design',
    cta: 'See More',
    image: PolitosPizzaImg,
  },
];

function Portfolio() {
  const [filter, setFilter] = useState('All');

  const filteredProjects = filter === 'All'
    ? projects
    : projects.filter(project =>
        Array.isArray(project.category)
          ? project.category.includes(filter)
          : project.category === filter
      );

  return (
    <div className="portfolio">
      <h1 className="portfolio-h2">Portfolio</h1>
      <p className="portfolio-message">Look through my work, read through my case studies, have a look at final designs, and try out prototypes I’ve built.</p>
      <div className="filter-buttons">
        <button onClick={() => setFilter('All')} className={filter === 'All' ? 'active' : ''}>All</button>
        <button onClick={() => setFilter('UX/UI Design')} className={filter === 'UX/UI Design' ? 'active' : ''}>UX/UI Design</button>
        <button onClick={() => setFilter('Development')} className={filter === 'Development' ? 'active' : ''}>Development</button>
        <button onClick={() => setFilter('Graphic Design')} className={filter === 'Graphic Design' ? 'active' : ''}>Graphic Design</button>
      </div>

      <div className="project-cards">
        {filteredProjects.map((project, index) => (
          <div key={index} className="project-card relative group">
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="block">
              {/* Image */}
              <img src={project.image} alt={project.title} className="w-full h-auto rounded-lg" />
              
              {/* Project Info */}
              <div className="project-info relative p-4">
                <h2 className="project-title">{project.title}</h2>
                <p className="project-type">{project.type}</p>

                {/* Hover Overlay */}
                <div className="overlay">Learn More</div>
              </div>
            </a>
          </div>
        ))}
      </div>

      <ScrollButton />
    </div>
  );
}

export default Portfolio;
