// src/pages/Portfolio.jsx
import React from 'react';

const Portfolio = () => {
  return (
    <section>
      <h1>My Portfolio</h1>
      <p>Here are some of my recent projects:</p>
      <ul>
        <li>
          <h2>Project Title 1</h2>
          <p>A brief description of the project.</p>
          <a href="https://link-to-your-project.com" target="_blank" rel="noopener noreferrer">
            View Project
          </a>
        </li>
        <li>
          <h2>Project Title 2</h2>
          <p>A brief description of the project.</p>
          <a href="https://link-to-your-project.com" target="_blank" rel="noopener noreferrer">
            View Project
          </a>
        </li>
        <li>
          <h2>Project Title 3</h2>
          <p>A brief description of the project.</p>
          <a href="https://link-to-your-project.com" target="_blank" rel="noopener noreferrer">
            View Project
          </a>
        </li>
        {/* Add more projects as needed */}
      </ul>
    </section>
  );
};

export default Portfolio;
