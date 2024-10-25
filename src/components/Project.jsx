// src/pages/Portfolio.jsx
import React from 'react';
import Project from '../components/Project';

const Portfolio = () => {
  const projects = [
    {
      title: 'Project Title 1',
      description: 'A brief description of Project 1.',
      link: 'https://link-to-your-project1.com',
    },
    {
      title: 'Project Title 2',
      description: 'A brief description of Project 2.',
      link: 'https://link-to-your-project2.com',
    },
    {
      title: 'Project Title 3',
      description: 'A brief description of Project 3.',
      link: 'https://link-to-your-project3.com',
    },
  ];

  return (
    <section>
      <h1>My Portfolio</h1>
      <p>Here are some of my recent projects:</p>
      {projects.map((project, index) => (
        <Project key={index} title={project.title} description={project.description} link={project.link} />
      ))}
    </section>
  );
};

export default Portfolio;
