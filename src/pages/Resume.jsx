// src/pages/Resume.jsx
import React from 'react';

const Resume = () => {
  return (
    <section>
      <h1>My Resume</h1>
      <h2>Experience</h2>
      <ul>
        <li>
          <strong>Job Title 1</strong> at Company Name (Year - Year)
          <p>A brief description of your responsibilities and achievements.</p>
        </li>
        <li>
          <strong>Job Title 2</strong> at Company Name (Year - Year)
          <p>A brief description of your responsibilities and achievements.</p>
        </li>
        {/* Add more experience as needed */}
      </ul>

      <h2>Education</h2>
      <ul>
        <li>
          <strong>Degree</strong> in Major at University Name (Year of Graduation)
          <p>A brief description or notable achievements during your studies.</p>
        </li>
        {/* Add more education as needed */}
      </ul>

      <h2>Skills</h2>
      <ul>
        <li>Skill 1</li>
        <li>Skill 2</li>
        <li>Skill 3</li>
        {/* Add more skills as needed */}
      </ul>
    </section>
  );
};

export default Resume;
