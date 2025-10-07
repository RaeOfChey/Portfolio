import React, { useState, useRef, useEffect } from "react";
import ScrollButton from "../components/ScrollButton";

import "../styles/styles.css";
import "../styles/CaseStudy.css";

import { DownvoteIcon } from "../components/DownvoteIcon";
import { CircleCheckIcon } from "../components/CircleCheckIcon";
import { RefreshIcon } from "../components/RefreshIcon";
import { UsersIcon } from "../components/UsersIcon";
import { FilePenLineIcon } from "../components/FilePenLineIcon";
import { CogIcon } from "../components/CogIcon";
import { TrendingUpIcon } from "../components/TrendingUpIcon";
import { SparklesIcon } from "../components/SparklesIcon";
import { ArrowRightIcon } from "../components/ArrowRightIcon";
import TimelineItem from "../components/Timeline";
import CaseStudyImage from "../components/CaseStudyImage";

// import KelvixCaseStudyImage8 from "../assets/Kelvix Thumbnail Image.png";
import KelvixHeaderImage from "../assets/Kelvix Header Image.png";
import KelvixCaseStudyImage1 from "../assets/Kelvix CaseStudy Image1.png";
import KelvixCaseStudyImage2 from "../assets/Kelvix CaseStudy Image2.png";
import KelvixCaseStudyImage3 from "../assets/Kelvix CaseStudy Image3.png";
import KelvixCaseStudyImage4 from "../assets/Kelvix CaseStudy Image4.png";
import KelvixCaseStudyImage5 from "../assets/Kelvix CaseStudy Image5.png";
import KelvixCaseStudyImage6 from "../assets/Kelvix CaseStudy Image6.jpg";

const KelvixCaseStudy = () => {
  const carouselContainerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.clientX);
    setScrollLeft(carouselContainerRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const moveX = e.clientX - startX;
    carouselContainerRef.current.scrollLeft = scrollLeft - moveX;
  };

  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        // Show button after scrolling 200px
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="case-study-container">
      <div className="case-study-header">
        <div className="case-study-header-columns">
          <div className="case-study-header-left">
            <h1 className="case-study-h1">Project</h1>
            <h2 className="case-study-subtitle">Designing a B2B eCommerce platform to enhance user experience and drive LED product sales growth by 15%.
            </h2>
          </div>

          <div className="case-study-header-right">
            <img
              id="kelvix-header-image"
              src={KelvixHeaderImage}
              alt="This image depicts how users can seamlessly browse for products because of the intuitive layout that enables users to quickly find and explore LED lighting solutions. Enhanced search functionality, clear product categorization, and optimized load times create a frictionless shopping experience, reducing frustration and improving engagement."
              className="case-study-image"
            />
          </div>
        </div>

        <section className="section-title">
          <div className="project-overview">
            <p>
              <strong>
                Client
                <br />
              </strong>
              Kelvix
            </p>
            <p>
              <strong>
                Duration
                <br />
              </strong>
              4 months
            </p>
            <p>
              <strong>
                Completed
                <br />
              </strong>
              December 2022
            </p>
            <p>
              <strong>
                Roles
                <br />
              </strong>
              UX/UI Designer, WordPress Developer
            </p>
          </div>
        </section>
      </div>

      <section className="challenge-section-header">
        <div className="kelvix-impact-outcome-section-left">
          <h3>Results That Moved The Needle</h3>
        </div>

        <div className="section-right">
          <p id="section-intro">
            Kelvix is a B2B company that designs and distributes professional LED lighting solutions for commercial, industrial, and residential projects. Its ecommerce platform for LED lighting products was transformed with a modern, intuitive website that directly addressed user pain points.
          </p>

          <div className="context-item-container">
            <div className="impact-context-item">
              <div className="context-item-header clear-actionable-design">
                <CircleCheckIcon className="circle-check-icon" />
                <h4>Outcomes</h4>
              </div>
              <p id="outcome-list" className="outcome-list">
                <ul>
                  <li>
                    Improved navigation and clear CTAs increased online sales by 15%.
                  </li>
                  <li>
                    Streamlined product discovery and order management reduced user search time.
                  </li>
                  <li>
                    Mobile optimization and accessibility improvements increased engagement by 18%.
                  </li>
                  <li>
                    Refined user flows and clear CTAs boosted conversions.
                  </li>
                  <li>
                    Faster load times and SEO upgrades increased organic traffic by 20%.
                  </li>
                </ul>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-title">

        <div className="problem-section-header">
          <div className="section-left">
            <h3 className="user-problems-header">Vision For Growth</h3>
          </div>

          <div className="section-right">
            <p id="section-intro">
              The organization lacked a streamlined ecommerce platform. Customers and contractors faced slow, confusing, and fragmented product browsing and purchasing experiences. The company needed a platform that:
            </p>

            <div className="context-item-container">

              <div className="user-problems-context-item">
                <div className="context-item-header">
                  <CircleCheckIcon className="circle-check-icon" />
                  <h4>Communicate product value clearly</h4>
                </div>
                <p>
                  Overly technical product info made it difficult to understand benefits and solutions.
                </p>
              </div>

              <div className="user-problems-context-item">
                <div className="context-item-header">
                  <CircleCheckIcon className="circle-check-icon" />
                  <h4>Create a direct purchasing channel</h4>
                </div>
                <p>
                  Users couldn’t easily browse, explore, or buy independently.
                </p>
              </div>

              <div className="user-problems-context-item">
                <div className="context-item-header">
                  <CircleCheckIcon className="circle-check-icon" />
                  <h4>Enhance order visibility</h4>
                </div>
                <p>
                  Lack of order tracking and project management caused uncertainty and delays.
                </p>
              </div>

              <div className="user-problems-context-item">
                <div className="context-item-header">
                  <CircleCheckIcon className="circle-check-icon" />
                  <h4>Strengthen brand credibility</h4>
                </div>
                <p>
                  Outdated interface and inconsistent branding did not reflect the organization's expertise.
                </p>
              </div>

            </div>
          </div>
        </div>

      </section>

      <section className="section-title">
        <div className="problem-section-header">
          <div className="section-left">
            <h3>What Wasn’t Working for Users</h3>
          </div>

          <div className="section-right">
            <p id="section-intro">
              Prior to this project, these issues presented several challenges for both customers and contractors:
            </p>

            <div className="context-item-container">
              <div className="user-problems-context-item">
                <div className="context-item-header">
                  <DownvoteIcon className="downvote-icon" />
                  <h4>Unintuitive user experience</h4>
                </div>
                <p>
                  Slow load times, complex flows, and unclear navigation caused frustration.
                </p>
              </div>

              <div className="user-problems-context-item">
                <div className="context-item-header">
                  <DownvoteIcon className="downvote-icon" />
                  <h4>Limited access to order information</h4>
                </div>
                <p>
                  Users had no real-time order tracking or visibility into delivery, installation, or product details.
                </p>
              </div>

              <div className="user-problems-context-item">
                <div className="context-item-header">
                  <DownvoteIcon className="downvote-icon" />
                  <h4>Lack of visibility for extra services</h4>
                </div>
                <p>
                  Services like installation and support were hidden, reducing revenue opportunities.
                </p>
              </div>

              <div className="user-problems-context-item">
                <div className="context-item-header">
                  <DownvoteIcon className="downvote-icon" />
                  <h4>Fragmented customer support</h4>
                </div>
                <p>
                  Multiple disconnected channels caused delays in problem resolution.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="challenge-section-header" id="unique-section">
        <div className="kelvix-challenge-header-section-left">
          <h3 className="challenge-header">The Challenge To Solve</h3>
        </div>

        <div className="section-right">
          <p id="section-intro">
            Create a seamless, intuitive B2B ecommerce platform that simplifies product discovery, centralizes product information and additional services, provides real-time order visibility, and ensures a smooth, accessible experience across all devices for both customers and contractors.
          </p>
        </div>
      </section>

      <section className="challenge-section-header">
        <div className="kelvix-solution-header-section-left">
          <h3>How The Buying Experience Transformed</h3>
        </div>

        <div className="section-right">
          <p id="section-intro">
            The new Kelvix ecommerce platform unifies all products and services in a clear, user-centered experience. It simplifies browsing, enhances navigation, and streamlines order management while supporting mobile responsiveness and accessibility.
          </p>
          <div className="solution-link solution-section">
            <a href="https://www.kelvix.com/" target="_blank">
              View Live
            </a>
          </div>

          <div className="context-item-container">
            <div id="end-result" className="solution-context-item">
              <div className="context-item-header clear-actionable-design">
                <UsersIcon className="users-icon" />
                <h4>Solving the Challenge</h4>
              </div>

              <p id="intro-redesign" className="redesign-description">
                The redesign directly addressed user and business challenges by:
                <ul>
                  <li>
                    Improving product discovery with intuitive navigation, categorized products, and scannable layouts to reduce cognitive load.
                  </li>
                  <li>
                    Streamlining order management via a personalized customer portal showing order status, delivery tracking, and documentation.
                  </li>
                  <li>
                    Increasing visibility of additional services like installation and project management throughout product pages.
                  </li>
                  <li>
                    Unifying support with central options like Find a Rep, Request Service, and Contact, reducing delays.
                  </li>
                  <li>
                    Data-driven refinement through analytics tools to continuously optimize content, layout, and functionality.
                  </li>
                </ul>
              </p>
            </div>

            <div>
              <CaseStudyImage
                src={KelvixCaseStudyImage6}
                alt="This image depicts the information architecture layout, which illustrates the intuitive structure of the Kelvix ecommerce platform. Categories, product flows, and services are organized to minimize friction, enabling users to quickly find products, access order information, and explore additional services."
                caption="The information architecture layout illustrates the intuitive structure of the Kelvix ecommerce platform. Categories, product flows, and services are organized to minimize friction, enabling users to quickly find products, access order information, and explore additional services."
              />

              <CaseStudyImage
                src={KelvixCaseStudyImage3}
                alt="This image shows a new contact form that centralizes communication, letting users reach the right department instantly. No more email delays, support is faster, easier, and more responsive."
                caption="A new contact form centralizes communication, letting users reach the right department instantly. No more email delays, support is faster, easier, and more responsive."
              />

              <CaseStudyImage
                src={KelvixCaseStudyImage2}
                alt="This image depicts integrated key services throughout the site so customers and contractors can quickly find what they need—like Project Management support for timelines, budgets, and troubleshooting—building confidence and streamlining projects."
                caption="Integrated key services throughout the site so customers and contractors can quickly find what they need like Project Management support for timelines, budgets, and troubleshooting, building confidence and streamlining projects."
              />
            </div>

            <div id="end-result" className="solution-context-item">
              <div className="context-item-header clear-actionable-design">
                <CircleCheckIcon className="circle-check-icon" />
                <h4>Elevating the experience</h4>
              </div>
              <p id="intro-redesign" className="redesign-description">
                The website goes beyond addressing pain points to elevate the overall experience:
                <ul>
                  <li>
                    Mobile responsiveness for seamless cross-device use.
                  </li>
                  <li>
                    Accessibility improvements for inclusivity.
                  </li>
                  <li>
                    Professional visual identity to strengthen brand recognition.
                  </li>
                  <li>
                    SEO best practices to increase visibility.
                  </li>
                  <li>
                    Centralized product documentation via the spec sheet library for quick reference.
                  </li>
                  <li>
                    Customer portal enhancements like the Interactive Project Builder and Rep Portal access.
                  </li>
                </ul>
              </p>
            </div>

            <div>
              <CaseStudyImage
                src={KelvixCaseStudyImage5}
                alt="This image shows the product spec sheet library, where all product documentation is now in one place. Customers, contractors, and reps can quickly find specs, technical details, and resources, simplifying decision-making and project planning."
                caption="All product documentation is now in one place. Customers, contractors, and reps can quickly find specs, technical details, and resources, simplifying decision-making and project planning."
              />

              <CaseStudyImage
                src={KelvixCaseStudyImage4}
                alt="This image showcases the login and sign-up page for the order management system feature, designed to provide users with a personalized project management dashboard. Users can access their accounts to access a range of features, including the Interactive Project Builder and exclusive Rep Portal access. This integration ensures a seamless experience for managing projects, accessing product specifications, and staying updated with the latest offerings."
                caption="Users can login or sign-up for the order management system for a personalized project management dashboard that contain a range of features, including the Interactive Project Builder and exclusive Rep Portal access."
              />

              <CaseStudyImage
                src={KelvixCaseStudyImage1}
                alt="This image shows how the design makes browsing, purchasing, and tracking effortless. Real-time updates, clear layouts, and visible services ensure smooth, confident journeys for both customers and contractors."
                caption="The design makes browsing, purchasing, and tracking effortless. Real-time updates, clear layouts, and visible services ensure smooth, confident journeys for both customers and contractors."
              />
            </div>
          </div>
        </div>
      </section>

      <section className="approach-section-header">
        <div className="kelvix-approach-title-section-left">
          <h3 className="approach-header">My Process To Bring The Vision To Life</h3>
        </div>

        <div className="section-right">
          <p id="section-intro">
            My process for this project was guided by the following key principles:
          </p>

          <div className="context-item-container">
            <div className="approach-context-item">
              <div className="context-item-header clear-actionable-design">
                <CircleCheckIcon className="circle-check-icon" />
                <h4>Streamline the user experience</h4>
              </div>
              <p>
                Created an intuitive, easy-to-navigate interface with organized product information, fast-loading pages, and optimized interactions.
              </p>
            </div>

            <div className="approach-context-item">
              <div className="context-item-header user-centered-efficiency">
                <CircleCheckIcon className="circle-check-icon" />
                <h4>Real-Time order rracking</h4>
              </div>
              <p>
                Implemented a customer portal that provides live access to order status, product details, and shipment progress, so users can manage their orders independently.
              </p>
            </div>

            <div className="approach-context-item">
              <div className="context-item-header iteration-feedback">
                <CircleCheckIcon className="circle-check-icon" />
                <h4>Clear communication of services</h4>
              </div>
              <p>
                Highlighted additional services with prominent CTAs and integrated them throughout the site for discoverability.
              </p>
            </div>

            <div className="approach-context-item">
              <div className="context-item-header iteration-feedback">
                <CircleCheckIcon className="circle-check-icon" />
                <h4>Unified customer support system</h4>
              </div>
              <p>
                Centralized communication channels to provide an easy cohesive support experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="process-section-header">
        <div className="section-left">
          <h3>From Concept To Launch</h3>
        </div>

        <div className="section-right">

          <TimelineItem title="Week 1–2 Planning">
            <ul>
              <li>User research and interviews to identify pain points and key features.</li>
              <li>Competitor analysis to find opportunities.</li>
              <li>Defined business goals, target audience, and essential features.</li>
            </ul>
          </TimelineItem>

          <TimelineItem title="Week 3-5 Designing">
            <ul>
              <li>Developed user personas and journey maps.</li>
              <li>Wireframes and low-fidelity prototypes.</li>
              <li>Refined IA for improved product discovery and order management.</li>
              <li>Conducted feedback sessions with stakeholders to refine design concepts.</li>
            </ul>
          </TimelineItem>

          <TimelineItem title="Week 6-9 Implementing">
            <ul>
              <li>High-fidelity mockups in Figma</li>
              <li>Front-end development with WordPress and Shopify integration.</li>
              <li>Customer portal built for real-time order tracking and service access.</li>
            </ul>
          </TimelineItem>

          <TimelineItem title="Week 10–12 Testing">
            <ul>
              <li>Usability testing with customers and contractors.</li>
              <li>Refined UI and interactions across devices.</li>
              <li>Optimized load times and performance.</li>
            </ul>
          </TimelineItem>

          <TimelineItem title="Week 13–14 Deploying & Maintaining">
            <ul>
              <li>QA and final testing before launch.</li>
              <li>Post-launch monitoring and ongoing maintenance.</li>
            </ul>
          </TimelineItem>
        </div>
      </section>

      <section className="skills-carousel-section">
        <div className="section-left">
          <h4 className="skills-section-header">Tools That Powered The Solution</h4>
        </div>

        <div className="section-right">
          <div
            className="carousel-wrapper-casestudy"
            ref={carouselContainerRef}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
          >
            <div className="carousel-container-casestudy">
              {[
                "Miro",
                "Figma",
                "Smartsheet",
                "UserTesting",
                "WordPress",
                "Shopify",
                "HTML/CSS",
                "JavaScript",
                "BrowserStack",
                "Hotjar",
                "UsabilityHub",
                "AWS",
                "Zapier",
              ]
                .concat([
                  "Miro",
                  "Figma",
                  "Smartsheet",
                  "UserTesting",
                  "WordPress",
                  "Shopify",
                  "HTML/CSS",
                  "JavaScript",
                  "BrowserStack",
                  "Hotjar",
                  "UsabilityHub",
                  "AWS",
                  "Zapier",
                ])
                .map((skill, index) => (
                  <div
                    className="carousel-item-casestudy"
                    key={`${skill}-${index}`}
                    title={skill}
                  >
                    {skill}
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-title">
        <div className="problem-section-header">
          <div className="section-left">
            <h3>Overcoming Challenges</h3>
          </div>

          <div className="section-right">
            <div className="context-item-container">

              <p id="section-intro">
                No large-scale project comes without hurdles, but overcoming them created clear milestones that drove impact.
              </p>

              <div className="obstacles-context-item">
                <div className="context-item-header obstacles">
                  <CogIcon className="cog-icon" />
                  <h4>Obstacles</h4>
                </div>
                <ul>
                  <li>
                    Existing severely outdated site performance and speed issues.
                  </li>
                  <li>
                    Integration of Shopify ecommerce capabilities into WordPress.
                  </li>
                  <li>
                    Creating a comprehensive order management system from scratch.
                  </li>
                  <li>
                    Ensuring the platform handled user data securely and complied with relevant regulations.
                  </li>
                </ul>
              </div>

              <div className="obstacles-context-item">
                <div className="context-item-header milestones">
                  <CircleCheckIcon className="circle-check-icon" />
                  <h4>Milestones</h4>
                </div>
                <ul>
                  <li>
                    Early testing provided insights that led to key design improvements and streamlined user flows.
                  </li>
                  <li>
                    Full integration of Shopify into product catalog management and checkout process.
                  </li>
                  <li>
                    Custom order management system implemented successfully
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-title">
        <div className="problem-section-header">
          <div className="kelvix-takeaways-section-left">
            <h3 className="takeaways-header">Design Lessons That Stick</h3>
          </div>

          <div className="section-right">

            <div className="context-item-container">

              <div className="obstacles-context-item">
                <div className="context-item-header obstacles">
                  <FilePenLineIcon className="filepenline-icon" />
                  <h4>Lessons learned</h4>
                </div>
                <ul>
                  <li>Balancing aesthetics with functionality drives engagement and conversions.</li>
                  <li>Early collaboration between designers, developers, and stakeholders avoids costly revisions.</li>
                </ul>
              </div>

              <div className="obstacles-context-item">
                <div className="context-item-header obstacles">
                  <FilePenLineIcon className="filepenline-icon" />
                  <h4>Key challenges overcome</h4>
                </div>
                <ul>
                  <li>Optimizing the site structure while maintaining business operations.</li>
                  <li>Reducing load times for smooth navigation across devices.</li>
                </ul>
              </div>

              <div className="obstacles-context-item">
                <div className="context-item-header obstacles">
                  <FilePenLineIcon className="filepenline-icon" />
                  <h4>Personal reflections</h4>
                </div>
                <ul>
                  <li>Small, thoughtful UX improvements can produce measurable business impact.</li>
                  <li>Reinforced passion for creating experiences that are both visually compelling and highly functional.</li>
                  <li>Excited to apply these lessons to future projects focused on usability and performance.</li>
                </ul>
              </div>

            </div>
          </div>
        </div>
      </section>

      <section className="section-title">
        <div className="problem-section-header">
          <div className="section-left">
            <h3>Where To Go Next</h3>
          </div>

          <div className="section-right">
            <p id="section-intro">
              The platform launched successfully, but the vision didn’t stop there. Several opportunities remain to enhance personalization, interactivity, and scalability for long-term growth.
            </p>

            <div className="context-item-container">
              <div className="growth-context-item">
                <div className="context-item-header lessons-learned">
                  <TrendingUpIcon className="trendingup-icon" />
                  <h4>Expanded customer portal features</h4>
                </div>
                <p>
                  Personalized product recommendations, project tracking, and order history insights.
                </p>
              </div>

              <div className="growth-context-item">
                <div className="context-item-header key-challenges-overcome">
                  <TrendingUpIcon className="trendingup-icon" />
                  <h4>Enhanced product visualization & customization</h4>
                </div>
                <p>
                  3D previews, interactive configurators, or AR tools to visualize lighting solutions.
                </p>
              </div>

              <div className="growth-context-item">
                <div className="context-item-header key-challenges-overcome">
                  <TrendingUpIcon className="trendingup-icon" />
                  <h4>AI powered virtual assistant</h4>
                </div>
                <p>
                  Instant support, real-time order updates, and personalized guidance to improve satisfaction and reduce friction.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="cta-section">
        <div class="cta-options">
          <div class="cta-option">
            <p>
              <a href="https://www.kelvix.com/" target="_blank">
                View Live
              </a>
            </p>
          </div>

          <div class="cta-option">
            <p>
              <a href="https://github.com/RaeOfChey" target="_blank">
                View My Github
              </a>
            </p>
          </div>

          <div class="cta-option">
            <p>
              <a href="mailto:cheyennaraelynn@gmail.com">Email Me</a>
            </p>
          </div>
        </div>
      </section>

      <div class="see-more-button">
        <p>
          Explore more of my portfolio to see how I can help bring your ideas to
          life.
        </p>
        <a href="/portfolio" id="arrow-link">
          <ArrowRightIcon className="arrow-right-icon" />
        </a>
      </div>

      <ScrollButton />
    </div>
  );
};

export default KelvixCaseStudy;
