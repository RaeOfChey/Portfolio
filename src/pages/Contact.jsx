import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaBriefcase } from 'react-icons/fa'; // Importing icons
import '../styles/Contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-left">
        <h1>Contact Me</h1>
        <p>
          If you have any questions or comments, please contact me via or send me a message using the contact form.
        </p>
        <p>
          <span className="email-label">Email</span> <br />
          <a href="mailto:cheyennaraelynn@gmail.com" className="email-link">cheyennaraelynn@gmail.com</a>
        </p>
        <h2>Social Links</h2>
        <ul className="social-links">
          <li>
            <a 
              href="https://github.com/RaeOfChey" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-link" 
              title="GitHub Portfolio"
            >
              <FaGithub />
            </a>
          </li>
          <li>
            <a 
              href="https://cheyennaraelynn.myportfolio.com/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-link" 
              title="Design Portfolio"
            >
              <FaBriefcase />
            </a>
          </li>
          <li>
            <a 
              href="https://www.linkedin.com/in/cheyenna-raelynn/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-link" 
              title="LinkedIn"
            >
              <FaLinkedin />
            </a>
          </li>
          <li>
            <a 
              href="https://www.instagram.com/raeofchey/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-link" 
              title="Instagram"
            >
              <FaInstagram />
            </a>
          </li>
        </ul>
      </div>
      <div className="contact-right">
        <form className="contact-form">
          <p className="required-note"><strong>All fields are required</strong></p>
          <div className="name-fields">
            <label>
              First Name
              <input type="text" name="firstName" required />
            </label>
            <label>
              Last Name
              <input type="text" name="lastName" required />
            </label>
          </div>
          <div className="country-number-fields">
            <label>
              Country
              <input type="text" name="country" required />
            </label>
            <label>
              Phone Number
              <input type="tel" name="phone" />
            </label>
          </div>
          <label>
            Email
            <input type="email" name="email" required />
          </label>
          <label>
            Subject
            <input type="text" name="subject" required />
          </label>
          <label>
            Message
            <textarea name="message" required></textarea>
          </label>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
