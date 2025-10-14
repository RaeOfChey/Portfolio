import React, { useState, useRef, useEffect } from 'react';
import ScrollButton from '../components/ScrollButton';

import '../styles/styles.css';
import '../styles/CaseStudy.css';

import { DownvoteIcon } from '../components/DownvoteIcon';
import { CircleCheckIcon } from '../components/CircleCheckIcon';
import { RefreshIcon } from '../components/RefreshIcon';
import { UsersIcon } from '../components/UsersIcon';
import { FilePenLineIcon } from '../components/FilePenLineIcon';
import { CogIcon } from '../components/CogIcon';
import { TrendingUpIcon } from '../components/TrendingUpIcon';
import { SparklesIcon } from '../components/SparklesIcon';
import { ArrowRightIcon } from '../components/ArrowRightIcon';
import TimelineItem from "../components/Timeline";
import CaseStudyImage from "../components/CaseStudyImage";
import CaseStudySection from "../components/CaseStudySection";

import ItascaCareersHeaderImage from '../assets/ITASCA Careers Page Header Image.png';
import CaseStudyImage1 from '../assets/ITASCA Careers Page CaseStudy Image1.png';
import CaseStudyImage2 from '../assets/ITASCA Careers Page CaseStudy Image2.png';
import CaseStudyImage3 from '../assets/ITASCA Careers Page CaseStudy Image3.png';
import CaseStudyImage4 from '../assets/ITASCA Careers Page CaseStudy Image4.png';
import CaseStudyImage5 from '../assets/ITASCA Careers Page CaseStudy Image5.jpg';
import CaseStudyImage6 from '../assets/ITASCA Careers Page CaseStudy Image6.png';
import CaseStudyImage7 from '../assets/ITASCA Careers Page CaseStudy Image7.png';

const EmployEaseCaseStudy = () => {

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
                        <h2 className="case-study-subtitle">Developing a global careers landing page to streamline the hiring process, improve candidate experience, and attract top-tier talent.</h2>

                        {/* <div className="links">
                            <a href="https://www.itascacg.com/about/careers-main" target="_blank">View Live</a>
                        </div> */}
                    </div>

                    <div className="case-study-header-right">
                        <img
                            id="itasca-careers-header-image"
                            src={ItascaCareersHeaderImage}
                            alt="A preview of the final ITASCA Careers landing page design."
                            className="case-study-image"
                        />
                    </div>
                </div>

                <section className="section-title">
                    <div className="project-overview">
                        <p><strong>Client<br /></strong>Itasca Consulting Group Inc.</p>
                        <p><strong>Duration<br /></strong>2 weeks</p>
                        <p><strong>Completed<br /></strong>December 2023</p>
                        <p><strong>Roles<br /></strong>Lead Designer, UX/UI Designer</p>
                    </div>
                </section>
            </div>

            <section className="challenge-section-header">
                <div className="itasca-software-impact-outcome-section-left">
                    <h3 className="impacts-header">Results That Moved The Needle</h3>
                </div>

                <div className="section-right">
                    <p id="section-intro">
                        A global provider of geo-engineering consulting and software solutions, Itasca Consulting Group Inc., transformed its fragmented hiring experience into a unified, branded, and accessible platform that directly supported the company’s talent acquisition strategy.
                    </p>
                    <div className="context-item-container">

                        <div className="impact-context-item">
                            <div className="context-item-header clear-actionable-design">
                                <CircleCheckIcon className="circle-check-icon" />
                                <h4>Outcomes</h4>
                            </div>
                            <p id="outcome-list" className="outcome-list">
                                <ul>
                                    <li>Clear messaging and cohesive design strengthened brand perception and positioned the company as an employer of choice.</li>
                                    <li>Culture, EVP, and benefits upfront attracted stronger applicants and cut misfit submissions.</li>
                                    <li>Simplified listings and CTAs improved application completion rates and reduced drop-off.</li>
                                    <li>Localized content maintained global consistency while connecting with regional audiences.</li>
                                    <li>WCAG-compliant, responsive design ensured accessibility across devices and markets.</li>
                                    <li>Delivering under tight deadlines built leadership trust in design’s impact on business goals.</li>
                                </ul>
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-title">

                <div className="problem-section-header">
                    <div className="section-left">
                        <h3>Vision For Growth</h3>
                    </div>

                    <div className="section-right">
                        <p id="section-intro">
                            The organization needed to attract and retain high-performing talent while ensuring HR processes supported scalability to building a strong talent pipeline and support succession planning. The company needed a dedicated careers page that:
                        </p>

                        <div className="context-item-container">

                            <div className="user-problems-context-item">
                                <div className="context-item-header">
                                    <CircleCheckIcon className="circle-check-icon" />
                                    <h4>Secure top talent proactively</h4>
                                </div>
                                <p>
                                    Engage exceptional candidates before openings arise to maintain a leadership-ready pipeline.
                                </p>
                            </div>

                            <div className="user-problems-context-item">
                                <div className="context-item-header">
                                    <CircleCheckIcon className="circle-check-icon" />
                                    <h4>Streamline HR processes</h4>
                                </div>
                                <p>
                                    Centralize information to reduce inquiries and free HR to focus on higher-value initiatives.
                                </p>
                            </div>

                            <div className="user-problems-context-item">
                                <div className="context-item-header">
                                    <CircleCheckIcon className="circle-check-icon" />
                                    <h4>Strengthen employer brand</h4>
                                </div>
                                <p>
                                    Communicate culture, values, and benefits consistently across all offices.
                                </p>
                            </div>

                            <div className="user-problems-context-item">
                                <div className="context-item-header">
                                    <CircleCheckIcon className="circle-check-icon" />
                                    <h4>Enhance candidate experience</h4>
                                </div>
                                <p>
                                    Provide intuitive navigation, accessible content, and a seamless application process.
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
                            Prior to this project, these issues slowed hiring processes and leading to misaligned applications, creating friction for both applicants and HR teams:
                        </p>

                        <div className="context-item-container">

                            <div className="user-problems-context-item">
                                <div className="context-item-header">
                                    <DownvoteIcon className="downvote-icon" />
                                    <h4>Inconsistent key information</h4>
                                </div>
                                <p>
                                    Culture, benefits, and values weren’t clearly presented or easy to find.
                                </p>
                            </div>

                            <div className="user-problems-context-item">
                                <div className="context-item-header">
                                    <DownvoteIcon className="downvote-icon" />
                                    <h4>Trust and professionalism</h4>
                                </div>
                                <p>
                                    A lack of professional design hurt trust and employer reputation.
                                </p>
                            </div>

                            <div className="user-problems-context-item">
                                <div className="context-item-header">
                                    <DownvoteIcon className="downvote-icon" />
                                    <h4>Accessibility and inclusivity</h4>
                                </div>
                                <p>
                                    No centralized, mobile-friendly experience across global regions.
                                </p>
                            </div>

                            <div className="user-problems-context-item">
                                <div className="context-item-header">
                                    <DownvoteIcon className="downvote-icon" />
                                    <h4>Clear pathways to opportunities</h4>
                                </div>
                                <p>
                                    No intuitive way to browse roles or submit applications efficiently.
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
                        Create a unified global careers experience that reflects the company’s culture, attracts the right candidates, and simplifies the application process while ensuring accessibility, localization, and brand consistency.
                    </p>
                </div>
            </section>

            <section className="challenge-section-header">
                <div className="kelvix-solution-header-section-left">
                    <h3>How The Hiring Experience Improved</h3>
                </div>

                <div className="section-right">
                    <p id="section-intro">
                        The design of the global careers page created a centralized, branded, and accessible hub. The page streamlines the hiring process, supports talent goals, and improves the candidate experience, while balancing input from multiple international offices.
                    </p>
                    <div className="solution-link solution-section">
                        <a href="https://www.itascacg.com/about/careers-main" target="_blank">
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
                                The design directly addressed user and business challenges by:
                                <ul>
                                    <li>
                                        Centralizing careers information for all offices while allowing localized updates and translations.
                                    </li>
                                    <li>
                                        Aligning visuals and messaging with the brand's new <span class="tooltip"> <a href="URL_OF_YOUR_CASE_STUDY" target="_blank" class="custom-link">SaaS ecommerce website</a><span class="tooltip-text">Opens the SaaS ecommerce website case study in a new tab</span></span> to reinforce credibility and consistency.
                                    </li>
                                    <li>
                                        Simplifying navigation with intuitive layouts and clear CTAs guiding users through roles and applications.
                                    </li>
                                    <li>
                                        Adapting copy for international audiences, incorporating executive and regional input for tone and clarity.
                                    </li>
                                    <li>
                                        Ensuring WCAG compliance and mobile readiness for accessibility across all devices and contexts.
                                    </li>
                                </ul>
                            </p>
                        </div>

                        <CaseStudySection
                            title="Opportunities Section"
                            images={[
                                {
                                    src: CaseStudyImage3,
                                    alt: "Opportunities section highlights diverse roles and internship programs.",
                                    caption:
                                        "The Opportunities section highlights diverse roles and internship programs, connecting candidates with positions that match their skills and career goals while showing the company’s commitment to professional growth.",
                                },
                            ]}
                        />

                        <CaseStudySection
                            title="Global Office Locations"
                            images={[
                                {
                                    src: CaseStudyImage4,
                                    alt: "Global office locations help candidates identify opportunities nearby.",
                                    caption:
                                        "Global office locations are clearly presented, helping candidates identify opportunities nearby while emphasizing the company’s international reach and credibility as a globally connected employer.",
                                },
                            ]}
                        />

                        <div id="end-result" className="solution-context-item">
                            <div className="context-item-header clear-actionable-design">
                                <CircleCheckIcon className="circle-check-icon" />
                                <h4>Elevating the experience</h4>
                            </div>
                            <p id="intro-redesign" className="redesign-description">
                                The careers page goes beyond addressing pain points to elevate the overall experience:
                                <ul>
                                    <li>
                                        Centralizing FAQs and structured career information reduced repetitive inquiries and lightened the HR workload.
                                    </li>
                                    <li>
                                        A unified visual identity strengthened the employer brand and signaled professionalism to candidates.
                                    </li>
                                    <li>
                                        HR teams can update content independently, enabling a scalable and maintainable careers page.
                                    </li>
                                    <li>
                                        Optimized content and page structure improved global SEO and increased candidate discoverability.
                                    </li>
                                    <li>
                                        Clear communication of culture, values, and benefits enhanced candidate alignment and trust.
                                    </li>
                                </ul>
                            </p>
                        </div>

                        <CaseStudySection
                            title="Brand System"
                            images={[
                                {
                                    src: CaseStudyImage6,
                                    alt: "This image displays the brand system, which ensures consistent visuals, messaging, and tone across regions, strengthening employer branding and creating a polished, professional impression for prospective candidates.",
                                    caption:
                                        "The brand system ensures consistent visuals, messaging, and tone across regions, strengthening employer branding and creating a polished, professional impression for prospective candidates.",
                                },
                            ]}
                        />

                        <CaseStudySection
                            title="Careers Page Header"
                            images={[
                                {
                                    src: ItascaCareersHeaderImage,
                                    alt: "The careers page header immediately highlights the company's employee-owned structure, inclusive culture, and career growth opportunities, with a clear “View Open Positions” CTA guiding candidates to act.",
                                    caption:
                                        "The careers page header immediately highlights the company's employee-owned structure, inclusive culture, and career growth opportunities, with a clear “View Open Positions” CTA guiding candidates to act.",
                                },
                            ]}
                        />

                        <CaseStudySection
                            title="Careers Page Header"
                            images={[
                                {
                                    src: CaseStudyImage2,
                                    alt: "This image displays the Perks section, which showcases employee benefits, flexible work options, mentorship programs, and a collaborative culture, making the company appealing to candidates seeking growth, balance, and inclusion.",
                                    caption:
                                        "The Perks section showcases employee benefits, flexible work options, mentorship programs, and a collaborative culture, making the company appealing to candidates seeking growth, balance, and inclusion.",
                                },
                            ]}
                        />

                        <div>
                            <div id="end-result" className="solution-context-item">
                                <div className="context-item-header clear-actionable-design">
                                    <CircleCheckIcon className="circle-check-icon" />
                                    <h4>Results</h4>
                                </div>
                                <p id="intro-redesign" className="redesign-description">
                                    The careers page design strengthened the employer brand, improved candidate alignment, and streamlined the application process. Job seekers can now easily explore opportunities, understand culture and benefits, and submit applications seamlessly, creating an inclusive, globally consistent experience that supports HR efficiency and talent acquisition goals.
                                </p>
                            </div>
                        </div>
                    </div>
            </section>

            <section className="approach-section-header">

                <div className="itasca-careers-title-section-left">
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
                                <h4>Global applicability</h4>
                            </div>
                            <p>
                                Ensure design and content resonate across international offices.
                            </p>
                        </div>

                        <div className="approach-context-item">
                            <div className="context-item-header iteration-feedback">
                                <CircleCheckIcon className="circle-check-icon" />
                                <h4>Strong employer branding</h4>
                            </div>
                            <p>
                                Apply a consistent voice and visual identity that communicates values.
                            </p>
                        </div>

                        <div className="approach-context-item">
                            <div className="context-item-header iteration-feedback">
                                <CircleCheckIcon className="circle-check-icon" />
                                <h4>Seamless integration</h4>
                            </div>
                            <p>
                                Maintain continuity within the broader website ecosystem and brand framework.
                            </p>
                        </div>

                        <div className="approach-context-item">
                            <div className="context-item-header iteration-feedback">
                                <CircleCheckIcon className="circle-check-icon" />
                                <h4>Conversion-focused UX</h4>
                            </div>
                            <p>
                                Use clear CTAs and visual hierarchy to guide candidates efficiently.
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
                    <TimelineItem title="Day 1–3 Planning & Alignment">
                        <ul>
                            <li>Conducted user research with hiring teams across global offices to identify pain points.</li>
                            <li>Gathered requirements from HR, regional managers, and leadership.</li>
                            <li>Documented regional differences in benefits, culture, and policies.</li>
                        </ul>
                    </TimelineItem>

                    <TimelineItem title="Day 4-6 Designing">
                        <ul>
                            <li>Created Figma wireframes balancing global consistency with local flexibility.</li>
                            <li>Designed clear navigation and application pathways.</li>
                            <li>Applied WCAG standards and mobile-first principles.</li>
                        </ul>
                    </TimelineItem>

                    <TimelineItem title="Day 7–9 Implementing">
                        <ul>
                            <li>Built within Craft CMS, designing for content scalability despite structural limitations.</li>
                            <li>Integrated easy HR editing capabilities and regional variations.</li>
                            <li>Coordinated translations and localization for global use.</li>
                        </ul>
                    </TimelineItem>

                    <TimelineItem title="Day 10–12 Testing & Refinement">
                        <ul>
                            <li>Conducted browser and device testing to ensure consistency.</li>
                            <li>Gathered feedback from leadership and regional offices.</li>
                            <li>Refined layout and copy for clarity and accessibility.</li>
                        </ul>
                    </TimelineItem>

                    <TimelineItem title="Day 13–14 Launch & Maintaining">
                        <ul>
                            <li>Deployed live, verifying brand alignment and performance.</li>
                            <li>Monitored engagement and submission data post-launch for iterative updates.</li>
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
                                "UserTesting", "Typeform", "Trello", "Miro", "Figma", "Photoshop", "Illustrator", "Craft CMS", "HTML5/CSS3", "JavaScript", "Google Chrome Dev", "WAVE"
                            ]
                                .concat([
                                    "UserTesting", "Typeform", "Trello", "Miro", "Figma", "Photoshop", "Illustrator", "Craft CMS", "HTML5/CSS3", "JavaScript", "Google Chrome Dev", "WAVE"
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
                                No global-scale project comes without hurdles, but overcoming them created clear milestones that drove impact.
                            </p>

                            <div className="obstacles-context-item">
                                <div className="context-item-header obstacles">
                                    <CogIcon className="cog-icon" />
                                    <h4>Obstacles</h4>
                                </div>
                                <ul>
                                    <li>Integrating a new page seamlessly within an existing CMS and architecture.</li>
                                    <li>Aligning global stakeholders with varying cultural and hiring priorities.</li>
                                    <li>Managing technical limitations of Craft CMS while maintaining usability.</li>
                                    <li>Delivering a high-quality, accessible result under strict deadlines.</li>
                                </ul>
                            </div>

                            <div className="obstacles-context-item">
                                <div className="context-item-header milestones">
                                    <CircleCheckIcon className="circle-check-icon" />
                                    <h4>Milestones</h4>
                                </div>
                                <ul>
                                    <li>Achieved full global localization and translation.</li>
                                    <li>Ensured WCAG compliance and mobile responsiveness.</li>
                                    <li>Unified global brand presence through consistent design and tone.</li>
                                    <li>Achieved early adoption across regional HR teams post-launch.</li>
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
                                    <li>Translating executive-level goals into tangible design outcomes for talent acquisition.</li>
                                    <li>Designing globally while balancing local cultural and operational differences.</li>
                                    <li>Applying accessibility (WCAG) and mobile-first principles to a real-world CMS.</li>
                                </ul>
                            </div>

                            <div className="obstacles-context-item">
                                <div className="context-item-header obstacles">
                                    <FilePenLineIcon className="filepenline-icon" />
                                    <h4>Key challenges overcome</h4>
                                </div>
                                <ul>
                                    <li>Aligning multiple international offices with varying priorities while maintaining a cohesive brand.</li>
                                    <li>Working within Craft CMS limitations to ensure flexibility, consistency, and scalability.</li>
                                    <li>Delivering a high-quality design under tight deadlines tied to executive KPIs.</li>
                                </ul>
                            </div>

                            <div className="obstacles-context-item">
                                <div className="context-item-header obstacles">
                                    <FilePenLineIcon className="filepenline-icon" />
                                    <h4>Personal reflections</h4>
                                </div>
                                <ul>
                                    <li>Design can directly support strategic business goals and build leadership trust.</li>
                                    <li>Scalable, accessible design foundations enable long-term usability and growth.</li>
                                    <li>Proud of improving candidate experience while strengthening employer branding globally.</li>
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
                            There are opportunities to further enhance the careers page and improve candidate engagement with strategic updates such as:
                        </p>

                        <div className="context-item-container">

                            <div className="growth-context-item">
                                <div className="context-item-header lessons-learned">
                                    <TrendingUpIcon className="trendingup-icon" />
                                    <h4>Interactive storytelling</h4>
                                </div>
                                <p>
                                    Add dynamic features like virtual office tours or employee Q&A to foster deeper candidate connection.
                                </p>
                            </div>

                            <div className="growth-context-item">
                                <div className="context-item-header key-challenges-overcome">
                                    <TrendingUpIcon className="trendingup-icon" />
                                    <h4>Application tracking</h4>
                                </div>
                                <p>
                                    Integrate saved searches, alerts, and status updates for a smoother application experience.
                                </p>
                            </div>

                            <div className="growth-context-item">
                                <div className="context-item-header key-challenges-overcome">
                                    <TrendingUpIcon className="trendingup-icon" />
                                    <h4>Data-driven refinement</h4>
                                </div>
                                <p>
                                    Use analytics to measure engagement, identify drop-off points, and refine the experience continuously.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="cta-section">

                <div class="cta-options">

                    <div class="cta-option">
                        <p><a href="https://www.itascacg.com/about/careers-main" target="_blank">View Live</a></p>
                    </div>

                    <div class="cta-option">
                        <p><a href="https://employease-hubi.onrender.com/" target="_blank">View Github</a></p>
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

export default EmployEaseCaseStudy;
