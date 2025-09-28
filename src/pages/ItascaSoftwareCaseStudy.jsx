import React, { useState, useRef, useEffect } from 'react';
import ScrollButton from '../components/ScrollButton';

import '../styles/styles.css';
import '../styles/CaseStudy.css';

import { DownvoteIcon } from '../components/DownvoteIcon';
import { CircleCheckIcon } from '../components/CircleCheckIcon';
import { UsersIcon } from '../components/UsersIcon';
import { FilePenLineIcon } from '../components/FilePenLineIcon';
import { CogIcon } from '../components/CogIcon';
import { TrendingUpIcon } from '../components/TrendingUpIcon';
import { SparklesIcon } from '../components/SparklesIcon';
import { ArrowRightIcon } from '../components/ArrowRightIcon';

import ITASCASoftwareHeaderImage from '../assets/ITASCA Software Header Image.png';
import ITASCASoftwareImage1 from '../assets/ITASCASoftware CaseStudy Image1.png';
import ITASCASoftwareImage2 from '../assets/ITASCASoftware CaseStudy Image2.png';
import ITASCASoftwareImage3 from '../assets/ITASCASoftware CaseStudy Image3.png';
import ITASCASoftwareImage4 from '../assets/ITASCASoftware CaseStudy Image4.png';
import ITASCASoftwareImage5 from '../assets/ITASCASoftware CaseStudy Image5.png';
// import ITASCASoftwareImage7 from '../assets/ITASCASoftware CaseStudy Image7.png';

const ITASCASoftwareCaseStudy = () => {

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
            if (window.scrollY > 200) { // Show button after scrolling 200px
                setShowScrollButton(true);
            } else {
                setShowScrollButton(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (
        <div className="case-study-container">
            <div className="case-study-header">
                <div className="case-study-header-columns">
                    <div className="case-study-header-left">
                        <h1 className="case-study-h1">Project</h1>
                        <h2 className="case-study-subtitle">Designing a B2B eCommerce SaaS platform to enhance user experience and drive software sales growth by 25%.</h2>

                        {/* <div className="links">
                            <a href="https://itascasoftware.com/" target="_blank">View Live</a>
                        </div> */}
                    </div>

                    <div className="case-study-header-right">
                        <img
                            id="itasca-software-header-image"
                            src={ITASCASoftwareHeaderImage}
                            alt="A glimpse of the final landing page design for the ITASCA Software website."
                            className="case-study-image"
                        />
                    </div>
                </div>

                <section className="section-title">
                    <div className="project-overview">
                        <p><strong>Client<br /></strong>ITASCA Software</p>
                        <p><strong>Duration<br /></strong>4 months</p>
                        <p><strong>Completed<br /></strong>December 2023</p>
                        <p><strong>Roles<br /></strong>UX/UI Designer, WordPress Developer, Front-End Developer</p>
                    </div>
                </section>
            </div>

            <section className="challenge-section-header">
                <div className="itasca-software-impact-outcome-section-left">
                    <h3 className="impacts-header">Impact & Outcomes</h3>
                </div>

                <div className="section-right">
                    <p id="section-intro">
                        The ITASCA Software website design transformed the user experience by creating a seamless, intuitive platform that effectively addressed the challenges users faced.
                    </p>

                    <p id="section-intro-2">
                        By streamlining product discovery, optimizing the purchasing process, and enhancing global accessibility, the design empowered users to navigate the site with ease and confidence. The improvements resulted in increased engagement, higher conversion rates, and greater user satisfaction.
                    </p>

                    <br />

                    <div className="context-item-container">

                        <div className="impact-context-item">
                            <div className="context-item-header clear-actionable-design">
                                <CircleCheckIcon className="circle-check-icon" />
                                <h4>Outcomes</h4>
                            </div>
                            <p id="outcome-list" className="outcome-list">
                                <ul>
                                    <li>Improved navigation and CTAs increased software sales by 25%, proving the effectiveness of a user-centered design.</li>
                                    <li>Streamlined product discovery and checkout reduced search time, enhancing the user experience.</li>
                                    <li>Localization and mobile optimization expanded global reach, boosting engagement and traffic.</li>
                                    <li>A refined user journey and CTAs drove higher conversion rates and a 30% increase in lead generation.</li>
                                    <li>Faster load times and improved SEO enhanced visibility and organic traffic post-launch.</li>
                                </ul>
                            </p>
                        </div>
                    </div>
                </div>
            </section>

             <section className="section-title">

                <div className="problem-section-header">
                    <div className="section-left">
                        <h3 className="user-problems-header">Impact & Outcomes</h3>
                    </div>

                    <div className="section-right">
                        <p id="section-intro">
                            As a global provider of geo-engineering software solutions, ITASCA Software sought to establish its first ecommerce platform to support long-term business growth and strengthen customer trust. The platform needed to be a seamless, professional, and globally accessible digital storefront that reflected the company’s innovation and authority in the industry. Key goals included:
                        </p>

                        <div className="context-item-container">

                            <div className="user-problems-context-item">
                                <div className="context-item-header">
                                    <DownvoteIcon className="downvote-icon" />
                                    <h4>Communicate product value clearly</h4>
                                </div>
                                <p>
                                    Translate complex software offerings into content that highlights both technical detail and business impact, enabling prospects to understand benefits and make confident purchasing decisions.
                                </p>
                            </div>

                            <div className="user-problems-context-item">
                                <div className="context-item-header">
                                    <DownvoteIcon className="downvote-icon" />
                                    <h4>Create a direct purchasing channel</h4>
                                </div>
                                <p>
                                    Build an intuitive ecommerce experience where customers can independently explore, evaluate, and purchase software, reducing reliance on manual follow-ups and freeing the sales team to focus on high-value relationships.
                                </p>
                            </div>

                            <div className="user-problems-context-item">
                                <div className="context-item-header">
                                    <DownvoteIcon className="downvote-icon" />
                                    <h4>Expand global accessibility</h4>
                                </div>
                                <p>
                                    Ensure the platform serves ITASCA’s international audience with localization, responsive design, and accessibility compliance. Establishing trust with diverse users and aligning with global business standards.
                                </p>
                            </div>

                            <div className="user-problems-context-item">
                                <div className="context-item-header">
                                    <DownvoteIcon className="downvote-icon" />
                                    <h4>Strengthen brand credibility</h4>
                                </div>
                                <p>
                                    Elevate digital presence to match the company’s reputation for engineering excellence, making the website a trusted first point of contact for new and existing customers.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </section>

            <section className="section-title">

                <div className="problem-section-header">
                    <div className="section-left">
                        <h3 className="user-problems-header">User Problems</h3>
                    </div>

                    <div className="section-right">
                        <p id="section-intro">
                            Prior to this project, ITASCA did not have an ecommerce platform, forcing customers to rely on fragmented processes and manual interactions. This created significant barriers across the user journey:
                        </p>

                        <div className="context-item-container">

                            <div className="user-problems-context-item">
                                <div className="context-item-header">
                                    <DownvoteIcon className="downvote-icon" />
                                    <h4>Overwhelming content</h4>
                                </div>
                                <p>
                                    Technical-heavt product information made it difficult for potential customers to understand the core benefits of the products and find the solutions they needed. Especially new customers.
                                </p>
                            </div>

                            <div className="user-problems-context-item">
                                <div className="context-item-header">
                                    <DownvoteIcon className="downvote-icon" />
                                    <h4>Inefficient purchasing process</h4>
                                </div>
                                <p>
                                    With no ecommerce functionality, customers had to contact ITASCA directly to request information and complete transactions. This created a slow, fragmented experience that delayed purchases and added workload for both customers and the sales team.
                                </p>
                            </div>

                            <div className="user-problems-context-item">
                                <div className="context-item-header">
                                    <DownvoteIcon className="downvote-icon" />
                                    <h4>No centralized product hub</h4>
                                </div>
                                <p>
                                    Users lacked a single, organized space to explore the full product catalog. Information was scattered, making it difficult to find relevant solutions quickly and creating friction early in the buyer journey.
                                </p>
                            </div>

                            <div className="user-problems-context-item">
                                <div className="context-item-header">
                                    <DownvoteIcon className="downvote-icon" />
                                    <h4>Limited accessibility for a global audience</h4>
                                </div>
                                <p>
                                    Customers worldwide needed localized, mobile-friendly, and accessible touchpoints to evaluate software solutions. Without these, the company's reach was limited, and many users were excluded from engaging effectively with the company’s offerings.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </section>

            <section class="challenge-section-header" id="unique-section">
                <div className="itasca-software-challenge-header-section-left">
                    <h3 className="challenge-header">Challenge</h3>
                </div>

                <div className="section-right">
                    <p id="section-intro">
                        Design ITASCA’s first B2B SaaS ecommerce website that clearly communicates product value, provides an intuitive user experience, and streamlines the purchasing process. The platform needed to help customers easily discover products, make confident purchasing decisions, and access the site globally through responsive design, localization, and accessibility. All while supporting the company's broader business goals of engagement, lead generation, and sales growth.
                    </p>
                </div>
            </section>

            <section className="challenge-section-header">
                <div className="itasca-software-solution-header-section-left">
                    <h3 className="solution-header">Solution</h3>
                </div>

                <div className="section-right">
                    <p id="section-intro">
                        The design of ITASCA Software’s new eCommerce website created a centralized, user-centered platform. The site simplifies product discovery, enhances user flow, and optimizes the purchasing process while balancing global accessibility and multilingual support.
                    </p>
                    <div className="solution-link solution-section">
                        <a href="https://itascasoftware.com/" target="_blank">View Live</a>
                    </div>

                    <div className="context-item-container">

                        <div id="end-result" className="solution-context-item">
                            <div className="context-item-header clear-actionable-design">
                                <UsersIcon className="users-icon" />
                                <h4>How the redesign solves the Challenge</h4>
                            </div>

                            <p id="intro-redesign" className="redesign-description">
                                The new website directly tackled the project’s business and user challenges by:
                                <ul>
                                    <li>
                                        Designing product discovery with clear navigation, concise product descriptions, and intuitive categories, making it easier for users to find solutions without being overwhelmed by technical details.
                                    </li>
                                    <li>
                                        Streamlining the checkout experience to guide users through a seamless purchasing process, reducing the need for sales team intervention.
                                    </li>
                                    <li>
                                        Ensuring full mobile responsiveness and multiple language options, providing a smooth experience across devices and locations, making the platform accessible to a global audience.
                                    </li>
                                    <li>
                                        Leveraging data-driven decision making, continuously tracking user behavior to optimize content, layout, and features for improved engagement.
                                    </li>
                                </ul>
                            </p>
                        </div>

                        <div className="image-row-1">
                            <div className="image-column-left-1">
                                <img
                                    src={ITASCASoftwareImage2}
                                    alt="This image depicts the new 'All Products' landing page, which centralizes all software offerings. This designed experience enhances product visibility, helping users quickly understand available solutions. Each product card displays essential details, guiding users toward informed purchasing decisions. This update directly supports the platform’s goal of improving usability, reducing friction in the buying process, and increasing engagement with ITASCA’s product ecosystem."
                                    className="case-study-image"
                                />
                            </div>
                            <div className="image-column-right-1">
                                <p id="the-filter-bar-subtitle" className="image-subtitles">This image depicts the new 'All Products' landing page, which centralizes all software offerings. This designed experience enhances product visibility, helping users quickly understand available solutions. Each product card displays essential details, guiding users toward informed purchasing decisions. This update directly supports the platform’s goal of improving usability, reducing friction in the buying process, and increasing engagement with ITASCA’s product ecosystem.</p>
                            </div>
                        </div>
                        <br />
                        <div className="image-row-2">
                            <div className="image-column">
                                <p id="approach" className="image-subtitles-left-2">This section of a product page highlights the key benefits and features of a software license so users quickly understand its value. The clean, structured layout makes it easy to scan, helping customers make informed decisions with confidence. Simplifying details and improving clarity reduces friction in the buying process.</p>
                            </div>
                            <div className="image-column-right-2 left-align">
                                <img
                                    src={ITASCASoftwareImage5}
                                    alt="This image depicts a section of a product page highlights the key benefits and features of a software license so users quickly understand its value. The clean, structured layout makes it easy to scan, helping customers make informed decisions with confidence. Simplifying details and improving clarity reduces friction in the buying process."
                                    className="case-study-image"
                                />
                            </div>
                        </div>

                        <div id="end-result" className="solution-context-item">
                            <div className="context-item-header clear-actionable-design">
                                <CircleCheckIcon className="circle-check-icon" />
                                <h4>What the design improved beyond the Challenge</h4>
                            </div>
                            <p id="intro-redesign" className="redesign-description">
                                TThe new website addresses core user problems and elevates the experience in the following ways:
                                <ul>
                                    <li>Improved information architecture allows users to find relevant software solutions quickly, supporting the entire journey from discovery to purchase.</li>
                                    <li>Strategic placement of actionable CTAs simplifies user actions and saves time, encouraging engagement with the product ecosystem.</li>
                                    <li>Integration of Google Analytics, Hotjar, and Optimizely enables continuous refinement of the user experience based on actionable insights.</li>
                                    <li>Proper SEO implementation and performance tuning improve search engine visibility, page load times, and overall traffic.</li>
                                    <li>Features like intelligent product recommendations, multiple licensing options, and Request a Demo functionality enhance product discovery and support confident purchasing decisions.</li>
                                </ul>
                            </p>
                        </div>

                        <div className="image-row-1">
                            <div className="image-column-left-1">
                                <img
                                    src={ITASCASoftwareImage4}
                                    alt="This image depicts the checkout cart page provides users with a clear, organized view of their selected product and key details. By displaying all relevant information upfront, users can easily review and modify their selections before completing their purchase. Additionally, the page features intelligent product recommendations, suggesting complementary software or add-ons based on the user’s cart. This enhances product discovery and improves the user experience, reducing purchasing friction, and increasing cross-selling opportunities."
                                    className="case-study-image"
                                />
                            </div>
                            <div className="image-column-right-1">
                                <p className="image-subtitles">
                                    The checkout cart page provides users with a clear, organized view of their selected product and key details. By displaying all relevant information upfront, users can easily review and modify their selections before completing their purchase.
                                </p>
                                <p className="image-subtitles">
                                    Additionally, the page features intelligent product recommendations, suggesting complementary software or add-ons based on the user’s cart. This enhances product discovery and improves the user experience, reducing purchasing friction, and increasing cross-selling opportunities.
                                </p>
                            </div>
                        </div>
                        <br />
                        <div className="image-row-2">
                            <div className="image-column">
                                <p id="approach" className="image-subtitles-left-2">The new product landing pages allow users to easily compare and select from multiple licensing options directly from the product page. The Add to Cart feature streamlines the purchasing process, while the Request a Demo option ensures users can explore the software before committing. This aligns with the platform’s goal of improving clarity and reducing friction in the buying process.
                                </p>
                            </div>
                            <div className="image-column-right-2 left-align">
                                <img
                                    src={ITASCASoftwareImage3}
                                    alt="This image depicts a part of the new product landing page that allows users to easily compare and select from multiple licensing options directly from the product page. The Add to Cart feature streamlines the purchasing process, while the Request a Demo option ensures users can explore the software before committing. This aligns with the platform’s goal of improving clarity and reducing friction in the buying process."
                                    className="case-study-image"
                                />
                            </div>
                        </div>

                        <div className="impact-context-item">
                            <div className="context-item-header clear-actionable-design">
                                <CircleCheckIcon className="circle-check-icon" />
                                <h4>End Result</h4>
                            </div>
                            <p id="intro-redesign" className="redesign-description">
                                The final product is a user-friendly, mobile-optimized eCommerce platform that enhances both user experience and lead generation. The website has increased software sales by 25%, improved lead generation by 30%, and offers a seamless, data-driven experience across all devices. Users can now navigate the site efficiently, make confident purchasing decisions, and enjoy a streamlined journey from discovery to checkout.
                            </p>
                        </div>

                    </div>
                </div>
            </section>

            <section className="approach-section-header">

                <div className="itasca-software-approach-title-section-left">
                    <h3 className="approach-header">Approach</h3>
                </div>

                <div className="section-right">

                    <p id="section-intro">
                        To address the user problems and challenges, a user-centered approach focused on clarity, efficiency, and impact was implemented. The project centered around the following key principles:
                    </p>

                    <div className="context-item-container">

                        <div className="approach-context-item">
                            <div className="context-item-header clear-actionable-design">
                                <CircleCheckIcon className="circle-check-icon" />
                                <h4>UI overhaul</h4>
                            </div>
                            <p>
                                Prioritized user-friendliness by designing the website’s branding and simplifying the content. Reduced technical jargon, applied ample white space, and broke up information into digestible sections, all while maintaining clarity and accuracy.
                                </p>
                        </div>

                        <div className="approach-context-item">
                            <div className="context-item-header user-centered-efficiency">
                                <CircleCheckIcon className="circle-check-icon" />
                                <h4>User flow optimization</h4>
                            </div>
                            <p>
                                Designed the navigation and layout to ensure easy access to key information, with a particular focus on simplifying the checkout process. Integrated action-driven CTAs across critical touchpoints, such as product pages, guiding visitors smoothly toward conversion.
                            </p>
                        </div>

                        <div className="approach-context-item">
                            <div className="context-item-header iteration-feedback">
                                <CircleCheckIcon className="circle-check-icon" />
                                <h4>Data-driven insights</h4>
                            </div>
                            <p>
                                Leveraged tools like Google Analytics, Hotjar, and Optimizely to track user behavior, enabling continuous improvement of the website’s performance. Data-driven decisions refined both the UI and overall user experience.
                            </p>
                        </div>

                        <div className="approach-context-item">
                            <div className="context-item-header iteration-feedback">
                                <CircleCheckIcon className="circle-check-icon" />
                                <h4>Modernization</h4>
                            </div>
                            <p>
                                The website was built to be mobile-responsive, with eCommerce capabilities, SEO optimization, WCAG-compliant accessibility, and language localization to serve global users effectively.
                            </p>
                        </div>

                        <div className="image-row-2">
                            <div className="image-column">
                                <p id="approach" className="image-subtitles-left-2">The design focuses on a streamlined user experience, simplifying navigation and product discovery. With clear, action-driven calls to action, a modernized layout, and an emphasis on mobile responsiveness, the homepage is optimized for both engagement and conversion.</p>
                            </div>
                            <div className="image-column-right-2 left-align">
                                <img
                                    src={ITASCASoftwareImage1}
                                    alt="This image depicts the home page, which shows how the design focuses on a streamlined user experience, simplifying navigation and product discovery. With clear, action-driven calls to action, a modernized layout, and an emphasis on mobile responsiveness, the homepage is optimized for both engagement and conversion."
                                    className="case-study-image"
                                />
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <section className="process-section-header">
                <div className="section-left">
                    <h3>Timeline</h3>
                </div>

                <div className="section-right">
                    <div className="timeline-context-item">
                        <div className="context-item-header">
                            <h4>Week 1–2 Planning</h4>
                        </div>
                        <ul>
                            <li>Conducted user interviews with the sales team and analyzed market insights to identify key pain points in the sales and user journey.</li>
                            <li>Evaluated competitor websites and performed a gap analysis to uncover opportunities for improvement.</li>
                            <li>Outlined website content, architecture, and required functionality for a new platform.</li>
                        </ul>
                    </div>

                    <div className="timeline-context-item">
                        <div className="context-item-header">
                            <h4>Week 3–5 Designing</h4>
                        </div>
                        <ul>
                            <li>Developed wireframes for the new site layout, emphasizing simplicity, clarity, and intuitive navigation.</li>
                            <li>Created high-fidelity mockups incorporating updated branding, CTAs, and key elements for a seamless user flow.</li>
                            <li>Collaborated with stakeholders to refine design concepts, ensuring alignment with brand goals.</li>
                        </ul>
                    </div>

                    <div className="timeline-context-item">
                        <div className="context-item-header">
                            <h4>Week 6–9 Implementing</h4>
                        </div>
                        <ul>
                            <li>Built the website’s front-end using WordPress and a custom theme, incorporating all new design elements.</li>
                            <li>Integrated tools like Google Analytics, Hotjar, and Optimizely to monitor engagement and gather data.</li>
                            <li>Optimized the platform for mobile responsiveness and accessibility (WCAG compliance).</li>
                        </ul>
                    </div>

                    <div className="timeline-context-item">
                        <div className="context-item-header">
                            <h4>Week 10–12 Testing</h4>
                        </div>
                        <ul>
                            <li>Conducted usability testing and iterated based on feedback.</li>
                            <li>Adjusted the interface for clarity, refined features, and ensured a smooth experience across devices.</li>
                        </ul>
                    </div>

                    <div className="timeline-context-item">
                        <div className="context-item-header">
                            <h4>Week 11–12 Deploying & Maintaining</h4>
                        </div>
                        <ul>
                            <li>Deployed the website and monitored post-launch to address any immediate concerns.</li>
                            <li>Continued maintenance to ensure optimal performance and implement improvements based on user data.</li>
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
                                "WordPress (CMS)", "PHP", "JavaScript", "Monday.com", "Miro", "Figma", "HTML/CSS", "SEO Optimization", "Google Analytics", "Hotjar", "Optimizely", "UX/UI Design", "WCAG", "FastSpring", "Stripe"
                            ]
                                .concat([
                                    "WordPress (CMS)", "PHP", "JavaScript", "Monday.com", "Miro", "Figma", "HTML/CSS", "SEO Optimization", "Google Analytics", "Hotjar", "Optimizely", "UX/UI Design", "WCAG", "FastSpring", "Stripe"
                                ])
                                .map((skill, index) => (
                                    <div className="carousel-item-casestudy" key={`${skill}-${index}`} title={skill}>
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
                                    <li>Aligning the website with the existing consulting website for consistency in branding and user experience.</li>
                                    <li>Managing communication between multiple external third-party teams and global stakeholders.</li>
                                    <li>Balancing technical product details with user-friendly content to avoid overwhelming users.</li>
                                    <li>Ensuring the platform handled user data securely and complied with relevant regulations.</li>
                                </ul>
                            </div>

                            <div className="obstacles-context-item">
                                <div className="context-item-header milestones">
                                    <CircleCheckIcon className="circle-check-icon" />
                                    <h4>Milestones</h4>
                                </div>
                                <ul>
                                    <li>Increased software sales by 25% post-launch.</li>
                                    <li>Boosted lead generation by 30% with streamlined information architecture and clear CTAs.</li>
                                    <li>Achieved full mobile responsiveness, language localization, and global accessibility standards</li>
                                    <li>Properly implemented SEO optimization and data-driven insights tools.</li>
                                </ul>
                            </div>

                        </div>

                    </div>

                </div>

            </section>

            <section className="section-title">

                <div className="problem-section-header">
                    <div className="itasca-software-takeaways-section-left">
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
                                    This project deepened my understanding of building eCommerce platforms that balance user experience with business objectives. I learned to combine accessibility, performance, and SEO with clear, engaging content. Collaborating with third-party developers reinforced the importance of clear communication in executing a shared vision.
                                </p>
                            </div>

                            <div className="takeaways-context-item">
                                <div className="context-item-header key-challenges-overcome">
                                    <CogIcon className="cog-icon" />
                                    <h4>Key challenges overcome</h4>
                                </div>
                                <p>
                                    One of the biggest challenges was designing an intuitive information architecture across a vast product catalog. The structured navigation and streamlined checkout simplified product discovery and enhanced usability.
                                </p>
                                <br />
                                <p>
                                    Another key challenge was ensuring the site met global accessibility and localization standards. Through careful optimization and testing, I successfully made the platform more inclusive and user-friendly for an international audience.
                                </p>
                            </div>

                            <div className="takeaways-context-item">
                                <div className="context-item-header key-challenges-overcome">
                                    <SparklesIcon className="sparkles-icon" />
                                    <h4>Personal reflections</h4>
                                </div>
                                <p>
                                    This project was a rewarding opportunity to apply my UX expertise to a real-world ecommerce platform with measurable business impact. Seeing a direct increase in sales and engagement reinforced the power of user-centered design in driving conversions.
                                </p>
                                <br />
                                <p>
                                    I’m proud of the improvements made and excited to bring these insights into future projects focused on accessibility, usability, and performance-driven design.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-title">

                <div className="problem-section-header">
                    <div className="section-left">
                        <h3>Growth & Future Direction</h3>
                    </div>

                    <div className="section-right">

                        <p id="section-intro">
                            The ITASCA Software platform has the potential to further enhance user experience, streamline operations, and drive greater customer engagement through these future improvements:
                        </p>

                        <div className="context-item-container">

                            <div className="growth-context-item">
                                <div className="context-item-header lessons-learned">
                                    <TrendingUpIcon className="trendingup-icon" />
                                    <h4>Personalized product recommendations</h4>
                                </div>
                                <p>
                                    Integrate AI-driven product recommendations based on user behavior and previous purchases. This feature would guide customers toward relevant software solutions and increase cross-selling opportunities.
                                </p>
                            </div>

                            <div className="growth-context-item">
                                <div className="context-item-header key-challenges-overcome">
                                    <TrendingUpIcon className="trendingup-icon" />
                                    <h4>Virtual Assistant</h4>
                                </div>
                                <p>
                                    Implement an AI-driven virtual assistant to provide real-time support, answer product-related questions, and guide users through the purchasing process with contextual assistance.
                                </p>
                            </div>

                            <div className="growth-context-item">
                                <div className="context-item-header key-challenges-overcome">
                                    <TrendingUpIcon className="trendingup-icon" />
                                    <h4>Advanced product filtering</h4>
                                </div>
                                <p>
                                    Expand the product discovery process with advanced filtering options, such as product compatibility, use case scenarios, and industry-specific applications, to help users find the most relevant solutions faster.
                                </p>
                            </div>

                            <div className="growth-context-item">
                                <div className="context-item-header key-challenges-overcome">
                                    <TrendingUpIcon className="trendingup-icon" />
                                    <h4>Interactive product demos</h4>
                                </div>
                                <p>
                                    Incorporate interactive demos or product simulations, allowing users to explore software features and functionality in real-time, boosting confidence in purchasing decisions.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="cta-section">

                <div class="cta-options">

                    <div class="cta-option">
                        <p><a href="https://itascasoftware.com/" target="_blank">View Live</a></p>
                    </div>

                    <div class="cta-option">
                        <p><a href="https://github.com/RaeOfChey" target="_blank">View My Github</a></p>
                    </div>

                    <div class="cta-option">
                        <p><a href="mailto:cheyennaraelynn@gmail.com">Email Me</a></p>
                    </div>

                </div>

            </section>

            <div class="see-more-button">
                <p>
                    Explore more of my portfolio to see how I can help bring your ideas to life.
                </p>
                <a href="/portfolio" id="arrow-link" >
                    <ArrowRightIcon className="arrow-right-icon" />
                </a>
            </div>

            <ScrollButton />
        </div >
    );
};

export default ITASCASoftwareCaseStudy;
