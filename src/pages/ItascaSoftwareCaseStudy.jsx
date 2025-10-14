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
import TimelineItem from "../components/Timeline";
import CaseStudyImage from "../components/CaseStudyImage";
import CaseStudySection from "../components/CaseStudySection";

import ITASCASoftwareHeaderImage from '../assets/ITASCA Software Header Image.png';
import ITASCASoftwareImage1 from '../assets/ITASCASoftware CaseStudy Image1.png';
import ITASCASoftwareImage2 from '../assets/ITASCASoftware CaseStudy Image2.png';
import ITASCASoftwareImage3 from '../assets/ITASCASoftware CaseStudy Image3.png';
import ITASCASoftwareImage4 from '../assets/ITASCASoftware CaseStudy Image4.png';
import ITASCASoftwareImage5 from '../assets/ITASCASoftware CaseStudy Image5.png';
import ITASCASoftwareImage6 from '../assets/ITASCASoftware CaseStudy Image6.jpg';
import ITASCASoftwareImage7 from '../assets/ITASCASoftware CaseStudy Image7.png';
import ITASCASoftwareImage8 from '../assets/ITASCASoftware CaseStudy Image8.png';

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
                    <h3 className="impacts-header">Results That Moved The Needle</h3>
                </div>

                <div className="section-right">
                    <p id="section-intro">
                        As a global provider of geo-engineering software solutions, ITASCA Software transformed its user experience with a seamless, intuitive website that directly addressed user challenges.
                    </p>
                    <div className="context-item-container">

                        <div className="impact-context-item">
                            <div className="context-item-header clear-actionable-design">
                                <CircleCheckIcon className="circle-check-icon" />
                                <h4>Outcomes</h4>
                            </div>
                            <p id="outcome-list" className="outcome-list">
                                <ul>
                                    <li>Clearer navigation and CTAs increased software sales by 25%.</li>
                                    <li>Streamlined discovery and checkout reduced user search time.</li>
                                    <li>Localization and mobile design expanded global engagement.</li>
                                    <li>Improved user flow and CTAs boosted conversions by 30%.</li>
                                    <li>Faster load times and SEO upgrades increased organic traffic.</li>
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
                            The organization lacked a direct B2B eCommerce channel. Customers faced a fragmented, slow, and confusing purchasing process. The company needed a platform that:
                        </p>

                        <div className="context-item-container">

                            <div className="user-problems-context-item">
                                <div className="context-item-header">
                                    <CircleCheckIcon className="circle-check-icon" />
                                    <h4>Communicate product value clearly</h4>
                                </div>
                                <p>
                                    Complex product info made it hard for prospects to understand value and benefits.
                                </p>
                            </div>

                            <div className="user-problems-context-item">
                                <div className="context-item-header">
                                    <CircleCheckIcon className="circle-check-icon" />
                                    <h4>Create a direct purchasing channel</h4>
                                </div>
                                <p>
                                    No intuitive eCommerce flow; users couldn’t explore or purchase independently.
                                </p>
                            </div>

                            <div className="user-problems-context-item">
                                <div className="context-item-header">
                                    <CircleCheckIcon className="circle-check-icon" />
                                    <h4>Expand global accessibility</h4>
                                </div>
                                <p>
                                    Lacked localization, responsiveness, and accessibility for global users.
                                </p>
                            </div>

                            <div className="user-problems-context-item">
                                <div className="context-item-header">
                                    <CircleCheckIcon className="circle-check-icon" />
                                    <h4>Strengthen brand credibility</h4>
                                </div>
                                <p>
                                    Outdated digital presence didn’t reflect the oranizations engineering expertise.
                                </p>
                            </div>

                        </div>
                    </div>
                </div>

            </section>

            <section className="section-title">

                <div className="problem-section-header">
                    <div className="section-left">
                        <h3 className="user-problems-header"> What Wasn’t Working for Users</h3>
                    </div>

                    <div className="section-right">
                        <p id="section-intro">
                            Prior to this project, these issues slowed sales and created frustration for both customers and the sales team:
                        </p>

                        <div className="context-item-container">

                            <div className="user-problems-context-item">
                                <div className="context-item-header">
                                    <DownvoteIcon className="downvote-icon" />
                                    <h4>Overwhelming content</h4>
                                </div>
                                <p>
                                    Technical-heavy product info hid core benefits, confusing new users.
                                </p>
                            </div>

                            <div className="user-problems-context-item">
                                <div className="context-item-header">
                                    <DownvoteIcon className="downvote-icon" />
                                    <h4>Inefficient purchasing process</h4>
                                </div>
                                <p>
                                    No eCommerce functionality; every transaction relied on manual sales follow-ups.
                                </p>
                            </div>

                            <div className="user-problems-context-item">
                                <div className="context-item-header">
                                    <DownvoteIcon className="downvote-icon" />
                                    <h4>No centralized product hub</h4>
                                </div>
                                <p>
                                    Users hunted across scattered pages for relevant solutions.
                                </p>
                            </div>

                            <div className="user-problems-context-item">
                                <div className="context-item-header">
                                    <DownvoteIcon className="downvote-icon" />
                                    <h4>Limited accessibility for a global audience</h4>
                                </div>
                                <p>
                                    Lack of localization, mobile responsiveness, and accessibility compliance blocked international users.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </section>

            <section class="challenge-section-header" id="unique-section">
                <div className="itasca-software-challenge-header-section-left">
                    <h3 className="challenge-header">The Challenge To Solve</h3>
                </div>

                <div className="section-right">
                    <p id="section-intro">
                        Create a first ever B2B SaaS eCommerce platform that simplifies product discovery, guides users toward confident purchasing decisions, and provides a seamless experience for a global audience so customers could easily complete software purchases.
                    </p>
                </div>
            </section>

            <section className="challenge-section-header">
                <div className="itasca-software-solution-header-section-left">
                    <h3 className="solution-header">How The Buying Experience Improved</h3>
                </div>

                <div className="section-right">
                    <p id="section-intro">
                        The new eCommerce platform unifies all products into one seamless, user-centered experience. It simplifies discovery, enhances navigation, and optimizes the entire purchasing journey, all while maintaining global accessibility and multilingual support.
                    </p>
                    <div className="solution-link solution-section">
                        <a href="https://itascasoftware.com/" target="_blank">View Live</a>
                    </div>

                    <div className="context-item-container">

                        <div id="end-result" className="solution-context-item">
                            <div className="context-item-header clear-actionable-design">
                                <UsersIcon className="users-icon" />
                                <h4>Solving the Challenge</h4>
                            </div>
                            <p id="intro-redesign" className="redesign-description">
                                The design directly addressed user and business challenges by:
                                <ul>
                                    <li>Improving product discovery through clear navigation, concise product descriptions, and intuitive categories, helping users find solutions without technical overwhelm.</li>
                                    <li>Streamlining checkout for a faster, frictionless purchasing flow that reduces dependence on sales intervention.</li>
                                    <li>Ensuring global accessibility with full mobile responsiveness and multilingual options for users worldwide.</li>
                                    <li>Applying data-driven decisions to track user behavior and refine content, layout, and features for ongoing engagement.</li>
                                </ul>
                            </p>
                        </div>

                        <CaseStudySection
                            title="Information Architecture"
                            images={[
                                {
                                    src: ITASCASoftwareImage6,
                                    alt: "This image depicts the information architecture layout, which illustrates the intuitive structure of the ecommerce platform. Categories, product flows, and services are organized to minimize friction, enabling users to quickly find and compare products, licenses, and explore additional services.",
                                    caption:
                                        "The information architecture layout illustrates the intuitive structure of the ecommerce platform. Categories, product flows, and services are organized to minimize friction, enabling users to quickly find and compare products, licenses, and explore additional services.",
                                },
                            ]}
                        />

                        <CaseStudySection
                            title="Product Overview Section"
                            images={[
                                {
                                    src: ITASCASoftwareImage5,
                                    alt: "This image depicts the product overview section, which simplifies complex software details into a clear, scannable layout. Key benefits and features are easy to digest, helping users quickly grasp value and decide with confidence, improving clarity and conversion.",
                                    caption:
                                        "This product overview section simplifies complex software details into a clear, scannable layout. Key benefits and features are easy to digest, helping users quickly grasp value and decide with confidence, improving clarity and conversion.",
                                },
                            ]}
                        />

                        <CaseStudySection
                            title="All Products Landing Page"
                            images={[
                                {
                                    src: ITASCASoftwareImage2,
                                    alt: "This image depicts the new “All Products” landing page brings every software offering into one clear view. Users can now explore solutions at a glance and understand their options instantly. Each product card highlights key details to guide informed decisions, improving usability and reducing friction in the buying process.",
                                    caption:
                                        "The new “All Products” landing page brings every software offering into one clear view. Users can now explore solutions at a glance and understand their options instantly. Each product card highlights key details to guide informed decisions, improving usability and reducing friction in the buying process.",
                                },
                            ]}
                        />

                        <CaseStudySection
                            title="Checkout Cart"
                            images={[
                                {
                                    src: ITASCASoftwareImage4,
                                    alt: "This image depicts the checkout cart design, which gives users a complete, organized summary of their selections. With all key info visible upfront, they can review and adjust before purchasing. Intelligent recommendations add relevance, enhancing discovery and boosting cross-sells.",
                                    caption:
                                        "The checkout cart design gives users a complete, organized summary of their selections. With all key info visible upfront, they can review and adjust before purchasing. Intelligent recommendations add relevance, enhancing discovery and boosting cross-sells.",
                                },
                            ]}
                        />

                        <div id="end-result" className="solution-context-item">
                            <div className="context-item-header clear-actionable-design">
                                <CircleCheckIcon className="circle-check-icon" />
                                <h4>Elevating the experience</h4>
                            </div>
                            <p id="intro-redesign" className="redesign-description">
                                The website goes beyond addressing pain points to elevate the overall experience:
                                <ul>
                                    <li>
                                        Improved navigation and IA for faster product discovery.
                                    </li>
                                    <li>
                                        Clear, strategic CTAs that guide user actions and boost engagement.
                                    </li>
                                    <li>
                                        Analytics integration for continuous, data-driven UX improvements.
                                    </li>
                                    <li>
                                        SEO and performance optimizations for better visibility and faster load times.
                                    </li>
                                    <li>
                                        Features like product recommendations, flexible licensing, and Request a Demo to support confident purchases.
                                    </li>
                                </ul>
                            </p>
                        </div>

                        <CaseStudySection
                            title="Brand System"
                            images={[
                                {
                                    src: ITASCASoftwareImage7,
                                    alt: "This image depicts the brand system, where consistent button styles and states were applied across the platform to guide users intuitively through key actions, ensuring clarity and visual hierarchy.",
                                    caption:
                                        "A brand system with consistent button styles and states were applied across the platform to guide users intuitively through key actions, ensuring clarity and visual hierarchy.",
                                },
                            ]}
                        />

                        <CaseStudySection
                            title="Homepage"
                            images={[
                                {
                                    src: ITASCASoftwareImage1,
                                    alt: "This image depicts the homepage design, which simplifies navigation and product discovery with clear, action-oriented CTAs and a modern, mobile-responsive layout. Every element was crafted to boost engagement, guide users seamlessly, and increase conversions.",
                                    caption:
                                        "The homepage design simplifies navigation and product discovery with clear, action-oriented CTAs and a modern, mobile-responsive layout. Every element was crafted to boost engagement, guide users seamlessly, and increase conversions.",
                                },
                            ]}
                        />

                        <CaseStudySection
                            title="Product Landing Page"
                            images={[
                                {
                                    src: ITASCASoftwareImage3,
                                    alt: "This image depicts the new product landing pages, which highlights flexible options like multiple licenses and ‘Request a Demo,’ helping users compare plans effortlessly and make confident purchase decisions.",
                                    caption:
                                        "The new product landing pages highlight flexible options like multiple licenses and ‘Request a Demo,’ helping users compare plans effortlessly and make confident purchase decisions.",
                                },
                            ]}
                        />

                        <div>

                            <div className="impact-context-item">
                                <div className="context-item-header clear-actionable-design">
                                    <CircleCheckIcon className="circle-check-icon" />
                                    <h4>Results</h4>
                                </div>
                                <p id="intro-redesign" className="redesign-description">
                                    The redesigned platform increased software sales by 25% and improved lead generation by 30%. Users now navigate effortlessly, make informed decisions, and enjoy a streamlined journey from discovery to checkout, a truly data-driven experience built for global reach.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <section className="approach-section-header">

                <div className="itasca-software-approach-title-section-left">
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
                                <h4>UI overhaul</h4>
                            </div>
                            <p>
                                Simplified content and layout for clarity and readability while maintaining technical accuracy.
                            </p>
                        </div>

                        <div className="approach-context-item">
                            <div className="context-item-header user-centered-efficiency">
                                <CircleCheckIcon className="circle-check-icon" />
                                <h4>User flow optimization</h4>
                            </div>
                            <p>
                                Streamlined navigation and checkout with clear, action-driven CTAs guiding users to convert.
                            </p>
                        </div>

                        <div className="approach-context-item">
                            <div className="context-item-header iteration-feedback">
                                <CircleCheckIcon className="circle-check-icon" />
                                <h4>Data-driven insights</h4>
                            </div>
                            <p>
                                Used analytics tools to track behavior and refine design for better performance.
                            </p>
                        </div>

                        <div className="approach-context-item">
                            <div className="context-item-header iteration-feedback">
                                <CircleCheckIcon className="circle-check-icon" />
                                <h4>Modernization</h4>
                            </div>
                            <p>
                                Delivered a mobile-responsive, accessible, and globally optimized eCommerce platform.
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
                            <li>Conducted user interviews with the sales team and analyzed market insights to identify key pain points in the sales and user journey.</li>
                            <li>Evaluated competitor websites and performed a gap analysis to uncover opportunities for improvement.</li>
                            <li>Outlined website content, architecture, and required functionality for a new platform.</li>
                        </ul>
                    </TimelineItem>

                    <TimelineItem title="Week 3–5 Designing">
                        <ul>
                            <li>Developed wireframes for the new site layout, emphasizing simplicity, clarity, and intuitive navigation.</li>
                            <li>Created high-fidelity mockups incorporating updated branding, CTAs, and key elements for a seamless user flow.</li>
                            <li>Collaborated with stakeholders to refine design concepts, ensuring alignment with brand goals.</li>
                        </ul>
                    </TimelineItem>

                    <TimelineItem title="Week 6–9 Implementing">
                        <ul>
                            <li>Built the website’s front-end using WordPress and a custom theme, incorporating all new design elements.</li>
                            <li>Integrated tools like Google Analytics, Hotjar, and Optimizely to monitor engagement and gather data.</li>
                            <li>Optimized the platform for mobile responsiveness and accessibility (WCAG compliance).</li>
                        </ul>
                    </TimelineItem>

                    <TimelineItem title="Week 10–12 Testing">
                        <ul>
                            <li>Conducted usability testing and iterated based on feedback.</li>
                            <li>Adjusted the interface for clarity, refined features, and ensured a smooth experience across devices.</li>
                        </ul>
                    </TimelineItem>

                    <TimelineItem title="Week 11–12 Deploying & Maintaining">
                        <ul>
                            <li>Deployed the website and monitored post-launch to address any immediate concerns.</li>
                            <li>Continued maintenance to ensure optimal performance and implement improvements based on user data.</li>
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
                                    <li>Aligning the website with the existing consulting website.</li>
                                    <li>Managing communication between multiple external third-party teams and global stakeholders.</li>
                                    <li>Balancing technical product details with user-friendly content.</li>
                                    <li>Ensuring user data securely and complied with relevant regulations.</li>
                                </ul>
                            </div>

                            <div className="obstacles-context-item">
                                <div className="context-item-header milestones">
                                    <CircleCheckIcon className="circle-check-icon" />
                                    <h4>Milestones</h4>
                                </div>
                                <ul>
                                    <li>Software sales rose 25% post-launch.</li>
                                    <li>Lead generation increased 30% through improved IA and CTAs.</li>
                                    <li>Achieved full mobile responsiveness, localization, and accessibility.</li>
                                    <li>Implemented SEO and analytics for data-driven insights.</li>
                                </ul>
                            </div>

                        </div>

                    </div>

                </div>

            </section>

            <section className="section-title">
                <div className="problem-section-header">
                    <div className="itasca-software-takeaways-section-left">
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
                                    <li>Balancing user experience with business goals in eCommerce design.</li>
                                    <li>Strengthened skills in accessibility, performance, and SEO optimization.</li>
                                    <li>Deeper appreciation for clear communication with third-party developers.</li>
                                </ul>
                            </div>

                            <div className="obstacles-context-item">
                                <div className="context-item-header obstacles">
                                    <FilePenLineIcon className="filepenline-icon" />
                                    <h4>Key challenges overcome</h4>
                                </div>
                                <ul>
                                    <li>Simplifing complex product architecture with intuitive navigation and checkout.</li>
                                    <li>Applying global accessibility and localization standards through optimization and testing.</li>
                                </ul>
                            </div>

                            <div className="obstacles-context-item">
                                <div className="context-item-header obstacles">
                                    <FilePenLineIcon className="filepenline-icon" />
                                    <h4>Personal reflections</h4>
                                </div>
                                <ul>
                                    <li>Appling UX principles to deliver measurable business impact.</li>
                                    <li>Saw firsthand how user-centered design drives sales and engagement.</li>
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
                                    <h4>Personalized product recommendations</h4>
                                </div>
                                <p>
                                    Use AI to suggest relevant software based on user behavior, increasing cross-sells and engagement.
                                </p>
                            </div>

                            <div className="growth-context-item">
                                <div className="context-item-header key-challenges-overcome">
                                    <TrendingUpIcon className="trendingup-icon" />
                                    <h4>Advanced product filtering</h4>
                                </div>
                                <p>
                                    Enable filtering by compatibility, use case, and industry to help users find the right solution faster.
                                </p>
                            </div>

                            <div className="growth-context-item">
                                <div className="context-item-header key-challenges-overcome">
                                    <TrendingUpIcon className="trendingup-icon" />
                                    <h4>Interactive product demos</h4>
                                </div>
                                <p>
                                    Offer live demos or simulations so users can explore features and buy with confidence.
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
