import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaBriefcase } from 'react-icons/fa';
import '../styles/Contact.css';

const Contact = () => {
  const handleSubmit = event => {
    event.preventDefault();
    const myForm = event.target;
    const formData = new FormData(myForm);

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => alert("Form successfully submitted!"))
      .catch(error => alert(error));
  };

  return (
    <div className="contact-container">
      <div className="contact-left">
        <h1>Contact Me</h1>
        <p>
          If you have any questions or comments, please contact me via email or send me a message using the contact form.
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
        {/* Hidden form for Netlify */}
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          onSubmit={handleSubmit}
          className="contact-form"
          style={{ display: 'none' }}
        >
          <input type="hidden" name="form-name" value="contact" />
          <input type="text" name="firstName" />
          <input type="text" name="lastName" />
          <input type="text" name="country" />
          <input type="tel" name="phone" />
          <input type="email" name="email" />
          <input type="text" name="subject" />
          <textarea name="message"></textarea>
        </form>

        {/* Visible JavaScript-rendered form */}
        <form
          onSubmit={handleSubmit}
          className="contact-form"
        >
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
