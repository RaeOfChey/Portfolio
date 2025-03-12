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

import KelvixCaseStudyImage8 from "../assets/Kelvix Thumbnail Image.png";
import KelvixHeaderImage from "../assets/Kelvix Header Image.png";
import KelvixCaseStudyImage1 from "../assets/Kelvix CaseStudy Image1.png";
import KelvixCaseStudyImage2 from "../assets/Kelvix CaseStudy Image2.png";
import KelvixCaseStudyImage3 from "../assets/Kelvix CaseStudy Image3.png";
import KelvixCaseStudyImage4 from "../assets/Kelvix CaseStudy Image4.png";
import KelvixCaseStudyImage5 from "../assets/Kelvix CaseStudy Image5.png";

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
            <h1 className="case-study-h1">Project:</h1>
            <h2 className="case-study-subtitle">
              Redesigning a B2B eCommerce platform to enhance user experience
              and drive product sales growth by 15%.
            </h2>

            <div className="links">
              <a href="https://www.kelvix.com/" target="_blank">
                View Live
              </a>
            </div>
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

      <section className="section-title">
        <div className="problem-section-header">
          <div className="section-left">
            <h3>User Problems</h3>
          </div>

          <div className="section-right">
            <p id="section-intro">
              The Kelvix ecommerce website for LED lighting products presented
              several challenges for both customers and contractors. Users faced
              frustration at every step of their journey, the pain points they
              encountered included:
            </p>

            <div className="context-item-container">
              <div className="user-problems-context-item">
                <div className="context-item-header">
                  <DownvoteIcon className="downvote-icon" />
                  <h4>Unintuitive user experience</h4>
                </div>
                <p>
                  The layout made it challenging for customers to find relevant
                  information about products and services. Slow load times,
                  cumbersome interactions, and clunky user flows made the
                  shopping experience frustrating, leading to abandoned carts
                  and lost sales.
                </p>
              </div>

              <div className="user-problems-context-item">
                <div className="context-item-header">
                  <DownvoteIcon className="downvote-icon" />
                  <h4>Limited access to order information</h4>
                </div>
                <p>
                  There was no way for customers to track their orders in real
                  time, including delivery status and product details. Without a
                  streamlined way to access their order information, contractors
                  faced delays and uncertainty, leading to dissatisfaction with
                  the company’s service.
                </p>
              </div>

              <div className="user-problems-context-item">
                <div className="context-item-header">
                  <DownvoteIcon className="downvote-icon" />
                  <h4>Lack of visibility for extra services</h4>
                </div>
                <p>
                  The range of valuable services—such as installation and
                  product support—that were not clearly communicated to
                  customers. Customers were unaware of these services, missing
                  out on opportunities to increase revenue for the company and
                  enhance the customer experience.
                </p>
              </div>

              <div className="user-problems-context-item">
                <div className="context-item-header">
                  <DownvoteIcon className="downvote-icon" />
                  <h4>Fragmented customer support</h4>
                </div>
                <p>
                  Fragmented communication across multiple channels without a
                  unified support system caused delays in customers getting the
                  help they needed. Whether The lack of a seamless support
                  experience led to frustration and longer resolution times.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="challenge-section-header" id="unique-section">
        <div className="kelvix-challenge-header-section-left">
          <h3 className="challenge-header">Challenge</h3>
        </div>

        <div className="section-right">
          <p id="section-intro">
            The challenge was to create a seamless, intuitive, user-friendly
            platform that empowered customers and contractors that not only
            facilitates easy browsing and purchasing, but also provides clear
            visibility into product information, order status, and additional
            services.
          </p>
        </div>
      </section>

      <section className="challenge-section-header">
        <div className="kelvix-solution-header-section-left">
          <h3>Solution</h3>
        </div>

        <div className="section-right">
          <p id="section-intro">
            The redesign of the ecommerce website addressed the pain points
            faced by customers and contractors by creating a seamless, intuitive
            experience that empowers users to navigate the website effortlessly,
            access relevant product and service information, and manage their
            orders more effectively.
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
                <h4>How the redesign solves user problems</h4>
              </div>

              <p id="intro-redesign" className="redesign-description">
                The redesign directly addresses the pain points users face such
                as unintuitive user experience, limited access to order
                information, lack of visibility for extra services, and
                fragmented customer support by:
                <ul>
                  <li>
                    Providing an intuitive layout and streamlined navigation
                    ensure that users can easily browse products, find essential
                    information, and complete their purchases without
                    frustration.
                  </li>
                  <li>
                    Enhancing order visibility for contractors with the addition
                    of a customer portal to track orders, view product details,
                    check delivery and installation statuses, and access
                    relevant documentation all in one place.
                  </li>
                  <li>
                    Increasing visibility for additional services like
                    installation and product support with clear placement of
                    within product pages and navigation.
                  </li>
                  <li>
                    Unifying customer support with options like 'Find a Rep,'
                    'Request Service,' and 'Contact' in a single, centralized
                    location.
                  </li>
                </ul>
              </p>
            </div>

            <div className="image-row-1">
              <div className="image-column-left-1">
                <img
                  src={KelvixCaseStudyImage2}
                  alt="This image depicts how services were integrated throughout the website for easy access and visibility. For example in this image, Project Management service highlights key offerings such as timeline and budget management, expert support, and troubleshooting. The site ensures that customers and contractors can quickly connect with the services they need at every stage of their project. This clear presentation fosters confidence and transparency, improving the overall customer experience and supporting smooth project execution from start to finish."
                  className="case-study-image"
                />
              </div>
              <div className="image-column-right-1">
                <p id="the-filter-bar-subtitle" className="image-subtitles">
                  Services were integrated throughout the website for easy
                  access and visibility. For example, the Project Management
                  service highlights key offerings such as timeline and budget
                  management, expert support, and troubleshooting.
                </p>
                <p id="the-filter-bar-subtitle" className="image-subtitles">
                  The site ensures that customers and contractors can quickly
                  connect with the services they need at every stage of their
                  project. This clear presentation fosters confidence and
                  transparency, improving the overall customer experience and
                  supporting smooth project execution from start to finish.
                </p>
              </div>
            </div>
            <br />
            <div className="image-row-2">
              <div className="image-column">
                <p id="approach" className="image-subtitles-left-2">
                  A contact form that was integrated to streamline customer
                  service by offering easy access to various communication
                  channels. Previously, customers could only contact Kelvix via
                  email, but now they can quickly connect with the appropriate
                  department directly through the site. This enhancement
                  enhances convenience, improves responsiveness, and ensures a
                  more efficient, accessible experience for users.
                </p>
              </div>
              <div className="image-column-right-2 left-align">
                <img
                  src={KelvixCaseStudyImage3}
                  alt="This image shows a contact form that was integrated to streamline customer service by offering easy access to various communication channels. Previously, customers could only contact Kelvix via email, but now they can quickly connect with the appropriate department directly through the site. This enhancement enhances convenience, improves responsiveness, and ensures a more efficient, accessible experience for users."
                  className="case-study-image"
                />
              </div>
            </div>

            <div id="end-result" className="solution-context-item">
              <div className="context-item-header clear-actionable-design">
                <CircleCheckIcon className="circle-check-icon" />
                <h4>What the redesign improved beyond the Challenge</h4>
              </div>
              <p id="intro-redesign" className="redesign-description">
                The redesign not only addressed the core challenges but also
                enhanced the user experience in the following ways:
                <ul>
                  <li>
                    Mobile responsiveness, ensuring users seamless experience
                    across all devices.
                  </li>
                  <li>
                    Meeting global accessibility standards, ensuring inclusivity
                    for all users.
                  </li>
                  <li>
                    Strengthening brand recognition with a polished,
                    professional look that aligned with the company's brand
                    values and visual identity.
                  </li>
                  <li>
                    Implementing SEO best practices to boost the site's search
                    engine visibility, making it easier for potential customers
                    to find Kelvix online.
                  </li>
                </ul>
              </p>
            </div>

            <div className="image-row-1">
              <div className="image-column-left-1">
                <img
                  src={KelvixCaseStudyImage5}
                  alt="This image shows the product spec sheet library, an essential feature that allows users to easily access detailed information about any Kelvix product. By centralizing all product documentation in one location, the website ensures that customers, contractors, and reps can quickly find specifications, technical details, and other important resources, streamlining the decision-making and project planning process."
                  className="case-study-image"
                />
              </div>
              <div className="image-column-right-1">
                <p className="image-subtitles">
                  The product spec sheet library is an essential feature that
                  allows users to easily access detailed information about any
                  Kelvix product. By centralizing all product documentation in
                  one location, the website ensures that customers, contractors,
                  and reps can quickly find specifications, technical details,
                  and other important resources, streamlining the
                  decision-making and project planning process.
                </p>
              </div>
            </div>
            <br />
            <div className="image-row-2">
              <div className="image-column">
                <p id="approach" className="image-subtitles-left-2">
                  Users can login or sign-up for the order management system for
                  a personalized project management dashboard that contain a
                  range of features, including the Interactive Project Builder
                  and exclusive Rep Portal access.
                </p>
              </div>
              <div className="image-column-right-2 left-align">
                <img
                  src={KelvixCaseStudyImage4}
                  alt="This image showcases the login and sign-up page for the order management system feature, designed to provide users with a personalized project management dashboard. Users can access their accounts to access a range of features, including the Interactive Project Builder and exclusive Rep Portal access. This integration ensures a seamless experience for managing projects, accessing product specifications, and staying updated with the latest offerings."
                  className="case-study-image"
                />
              </div>
            </div>

            <div id="end-result" className="solution-context-item">
              <div className="context-item-header clear-actionable-design">
                <CircleCheckIcon className="circle-check-icon" />
                <h4>End result</h4>
              </div>
              <p id="intro-redesign" className="redesign-description">
                The final product is a modern, user-friendly ecommerce website
                with an intuitive layout, improved order management, and
                seamless access to essential services. Performance
                optimizations, mobile responsiveness, and SEO improvements
                enhance accessibility and reach. The redesign boosts engagement,
                reduces abandoned carts, and supports business growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="approach-section-header">
        <div className="kelvix-approach-title-section-left">
          <h3 className="approach-header">Approach</h3>
        </div>

        <div className="section-right">
          <p id="section-intro">
            The design and development of the new Kelvix ecommerce website
            focused on key principles that would address user frustrations and
            create a more efficient, seamless shopping experience:
          </p>

          <div className="context-item-container">
            <div className="approach-context-item">
              <div className="context-item-header clear-actionable-design">
                <CircleCheckIcon className="circle-check-icon" />
                <h4>Streamline the user experience</h4>
              </div>
              <p>
                The design focuses on an intuitive, easy-to-navigate interface.
                With product information organized in a clear and structured
                manner, quick-loading pages, optimized interactions, and
                improved the overall user flow. So customers can browse, select
                products, and complete their purchases without frustration.
              </p>
            </div>

            <div className="approach-context-item">
              <div className="context-item-header user-centered-efficiency">
                <CircleCheckIcon className="circle-check-icon" />
                <h4>Real-Time order rracking</h4>
              </div>
              <p>
                Implement a customer portal that allos users to track orders in
                real time and gain access to detailed order information such as
                delivery status, product details, and shipment progress. This
                streamlined access reduced uncertainty and increased
                satisfaction by empowering users to manage their orders
                independently.
              </p>
            </div>

            <div className="approach-context-item">
              <div className="context-item-header iteration-feedback">
                <CircleCheckIcon className="circle-check-icon" />
                <h4>Clear communication of services</h4>
              </div>
              <p>
                Improve visibility for additional services with clear
                calls-to-actions and integration throuhgout the product pages
                and checkout process to ensure users can easily learn about and
                access these services. Maximizing revenue potential while
                improving the customer experience.
              </p>
            </div>

            <div className="approach-context-item">
              <div className="context-item-header iteration-feedback">
                <CircleCheckIcon className="circle-check-icon" />
                <h4>Unified customer support system</h4>
              </div>
              <p>
                Integrate clear communication channels to provide a cohesive
                support system. Ensure users can easily find and connect with
                the right resources for their needs to minimize delays in
                resolution and improve overall customer service efficiency.
              </p>
            </div>

            <div className="image-row-2">
              <div className="image-column">
                <p id="approach" className="image-subtitles-left-2">
                  The redesign prioritizes a seamless, user-friendly experience,
                  making product browsing, purchasing, and tracking effortless.
                  With a clear layout and optimized features, the site provides
                  real-time order updates and highlights valuable services,
                  ensuring a smooth and efficient journey for both customers and
                  contractors.
                </p>
              </div>
              <div className="image-column-right-2 left-align">
                <img
                  src={KelvixCaseStudyImage1}
                  alt="This image depicts a LED lighting product page, demonstrating how the redesign prioritizes a seamless, user-friendly experience, making product browsing, purchasing, and tracking effortless. With a clear layout and optimized features, the site provides real-time order updates and highlights valuable services, ensuring a smooth and efficient journey for both customers and contractors."
                  className="case-study-image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="process-section-header">
        <div className="section-left">
          <h3>Timeline & SDLC</h3>
        </div>

        <div className="section-right">
          <div className="timeline-context-item">
            <div className="context-item-header">
              <h4>Week 1–2 Planning</h4>
            </div>
            <ul>
              <li>
                Conducted user research and interviews with customers and
                contractors to identify pain points and key features for
                improvement.
              </li>
              <li>
                Analyzed the current website and competitive products to
                determine areas for improvement, including user flows,
                functionality, and site speed.
              </li>
              <li>
                Collaborated with stakeholders to define business goals, target
                audience, and essential features, such as real-time order
                tracking and service visibility.
              </li>
            </ul>
          </div>

          <div className="timeline-context-item">
            <div className="context-item-header">
              <h4>Week 3-5 Designing</h4>
            </div>
            <ul>
              <li>
                Developed user personas and journey maps to understand the user
                experience and pain points.
              </li>
              <li>
                Created wireframes and low-fidelity prototypes to visualize site
                layout and core features.
              </li>
              <li>
                Designed the information architecture to improve product
                discoverability and streamline order management.
              </li>
              <li>
                Conducted feedback sessions with stakeholders to refine design
                concepts.
              </li>
            </ul>
          </div>

          <div className="timeline-context-item">
            <div className="context-item-header">
              <h4>Week 6-9 Implementing</h4>
            </div>
            <ul>
              <li>
                Designed high-fidelity mockups and interactive prototypes to
                represent the final user interface and user experience in Figma.
              </li>
              <li>
                Developed the front-end using WordPress, ensuring responsive
                design for mobile and desktop devices.
              </li>
              <li>
                Integrated Shopify into the site for seamless ecommerce
                functionality and real-time product availability.
              </li>
              <li>
                Built out the customer portal for real-time order tracking,
                including delivery status, product details, and additional
                service options like installation.
              </li>
            </ul>
          </div>

          <div className="timeline-context-item">
            <div className="context-item-header">
              <h4>Week 10–12 Testing</h4>
            </div>
            <ul>
              <li>
                Conducted usability testing with both customers and contractors
                to identify usability issues and gather feedback.
              </li>
              <li>
                Refined the user interface based on feedback, ensuring intuitive
                navigation and improving load times.
              </li>
              <li>
                Tested the website across various devices and browsers to ensure
                compatibility and responsiveness.
              </li>
              <li>
                Iterated on the design and functionality to ensure a smooth,
                error-free user experience.
              </li>
            </ul>
          </div>

          <div className="timeline-context-item">
            <div className="context-item-header">
              <h4>Week 13–14 Deploying & Maintaining</h4>
            </div>
            <ul>
              <li>
                Prepared the website for launch by conducting final quality
                assurance checks and ensuring all features were functional.
              </li>
              <li>
                Monitored website performance post-launch, analyzing user
                behavior and gathering feedback for future improvements.
              </li>
              <li>
                Provided ongoing maintenance and updates to fix any bugs and
                enhance features based on user needs.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="skills-carousel-section">
        <div className="section-left">
          <h4 className="skills-section-header">Skills & Technologies</h4>
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
            <h3>Obstacles & Milestones</h3>
          </div>

          <div className="section-right">
            <div className="context-item-container">
              <div className="obstacles-context-item">
                <div className="context-item-header obstacles">
                  <CogIcon className="cog-icon" />
                  <h4>Obstacles</h4>
                </div>
                <ul>
                  <li>
                    Existing severely outdated site performance and speed
                    issues.
                  </li>
                  <li>
                    Integration of Shopify ecommerce capabilities into
                    WordPress.
                  </li>
                  <li>
                    Creating a comprehensive order management system from
                    scratch.
                  </li>
                  <li>
                    Ensuring the platform handled user data securely and
                    complied with relevant regulations.
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
                    Early testing provided insights that led to key design
                    improvements and streamlined user flows.
                  </li>
                  <li>
                    Full integration of Shopify into product catalog management
                    and checkout process.
                  </li>
                  <li>
                    Addition of fully intuitive of a custom order management
                    system.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="challenge-section-header">
        <div className="kelvix-impact-outcome-section-left">
          <h3>Impact & Outcomes</h3>
        </div>

        <div className="section-right">
          <p id="section-intro">
            The company saw significant improvements in customer engagement,
            operational efficiency, and sales performance. The enhanced user
            experience led to increased customer satisfaction, while technical
            optimizations contributed to higher conversion rates and improved
            search visibility.
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
                    15% increase in online sales due to a more intuitive
                    shopping experience, faster load times, and improved product
                    visibility.
                  </li>
                  <li>
                    30% decrease in customer service inquiries as users could
                    now easily access order details, product information, and
                    support services directly on the site.
                  </li>
                  <li>
                    18% increase in mobile traffic after optimizing for mobile
                    responsiveness, making it easier for users to browse and
                    complete purchases on any device.
                  </li>
                  <li>
                    SEO improvements led to a 20% boost in organic traffic, with
                    higher search rankings driving more potential customers to
                    the site.
                  </li>
                  <li>
                    Faster website performance reduced bounce rates and improved
                    user retention, leading to longer session durations and
                    increased engagement with products and services.
                  </li>
                </ul>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-title">
        <div className="problem-section-header">
          <div className="kelvix-takeaways-section-left">
            <h3 className="takeaways-header">Takeaways</h3>
          </div>

          <div className="section-right">
            <div className="context-item-container">
              <div className="takeaways-context-item">
                <div className="context-item-header lessons-learned">
                  <FilePenLineIcon className="filepenline-icon" />
                  <h4>Lessons learned</h4>
                </div>
                <p>
                  This project reinforced the importance of balancing aesthetics
                  with functionality in ecommerce design. A visually appealing
                  website is crucial, but ensuring a seamless and
                  frustration-free user experience is what ultimately drives
                  engagement and conversions. Additionally, early collaboration
                  between designers, developers, and stakeholders proved
                  essential in aligning goals and avoiding costly revisions
                  later in the process.
                </p>
              </div>

              <div className="takeaways-context-item">
                <div className="context-item-header key-challenges-overcome">
                  <CogIcon className="cog-icon" />
                  <h4>Key challenges overcome</h4>
                </div>
                <p>
                  One of the biggest challenges was improving the site's
                  structure while maintaining existing business operations.
                  Transitioning to a more intuitive layout without disrupting
                  the company’s workflow or overwhelming returning customers
                  required careful planning. Another challenge was optimizing
                  performance to reduce load times and ensure smooth navigation
                  across devices, a critical role in increasing user retention
                  and sales.
                </p>
              </div>

              <div className="takeaways-context-item">
                <div className="context-item-header key-challenges-overcome">
                  <SparklesIcon className="sparkles-icon" />
                  <h4>Personal reflections</h4>
                </div>
                <p>
                  This project highlighted the value of user-centered design and
                  how small, thoughtful improvements can lead to measurable
                  business success. Seeing the tangible impact of these updates
                  reinforced my passion for creating digital experiences that
                  are not only visually compelling but also deeply functional
                  and user-friendly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-title">
        <div className="problem-section-header">
          <div className="section-left">
            <h3>Growth & Future Development</h3>
          </div>

          <div className="section-right">
            <p id="section-intro">
              There are opportunities to further enhance the user experience and
              drive business growth with strategic improvements such as:
            </p>

            <div className="context-item-container">
              <div className="growth-context-item">
                <div className="context-item-header lessons-learned">
                  <TrendingUpIcon className="trendingup-icon" />
                  <h4>Expanded customer portal features</h4>
                </div>
                <p>
                  Enhancing the customer portal with more interactive features,
                  such as personalized product recommendations, project tracking
                  tools, and order history insights. Thhis could streamline
                  repeat purchases and improve customer retention by making it
                  easier for contractors and designers to manage ongoing
                  projects.
                </p>
              </div>

              <div className="growth-context-item">
                <div className="context-item-header key-challenges-overcome">
                  <TrendingUpIcon className="trendingup-icon" />
                  <h4>Enhanced product visualization & customization</h4>
                </div>
                <p>
                  Introducing 3D product previews, interactive configurators, or
                  augmented reality (AR) tools to help customers visualize how
                  different lighting solutions will fit into their projects
                  before purchasing. This would reduce uncertainty, minimize
                  returns, and create a more engaging shopping experience.
                </p>
              </div>

              <div className="growth-context-item">
                <div className="context-item-header key-challenges-overcome">
                  <TrendingUpIcon className="trendingup-icon" />
                  <h4>AI powered virtual assistant</h4>
                </div>
                <p>
                  Implementing an AI-powered virtual assistant to offer instant
                  support and personalized recommendations. The assistant could
                  guide users through product selection, provide real-time order
                  updates, help troubleshoot issues, and answer common queries.
                  This AI-driven tool could help improve customer satisfaction,
                  reduce friction, and free up resources for more complex tasks.
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
