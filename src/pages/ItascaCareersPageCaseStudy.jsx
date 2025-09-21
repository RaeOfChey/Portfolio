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

import ItascaCareersHeaderImage from '../assets/ITASCA Careers Page Header Image.png';
import CaseStudyImage1 from '../assets/ITASCA Careers Page CaseStudy Image1.png';
import CaseStudyImage2 from '../assets/ITASCA Careers Page CaseStudy Image2.png';
import CaseStudyImage3 from '../assets/ITASCA Careers Page CaseStudy Image3.png';
import CaseStudyImage4 from '../assets/ITASCA Careers Page CaseStudy Image4.png';

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

            <section className="section-title">

                <div className="problem-section-header">
                    <div className="section-left">
                        <h3>Client Vision & Goals</h3>
                    </div>

                    <div className="section-right">
                        <p id="section-intro">
                            A global, employee-owned company needed to attract and retain top-tier talent while ensuring HR processes were efficient and aligned with future growth. The careers page was critical for building a strong talent pipeline, supporting succession planning, and presenting the company as a professional, desirable employer. Key goals included:
                        </p>

                        <div className="context-item-container">

                            <div className="user-problems-context-item">
                                <div className="context-item-header">
                                    <DownvoteIcon className="downvote-icon" />
                                    <h4>Secure top talent proactively</h4>
                                </div>
                                <p>
                                    Engage exceptional candidates even when roles aren’t immediately open, ensuring continuity in leadership and critical skills for future growth. By connecting with top talent early, the company can maintain a competitive hiring advantage and build a strong talent pipeline.
                                </p>
                            </div>

                            <div className="user-problems-context-item">
                                <div className="context-item-header">
                                    <DownvoteIcon className="downvote-icon" />
                                    <h4>Streamline HR processes</h4>
                                </div>
                                <p>
                                    Centralize career information in one accessible location to reduce repetitive inquiries and administrative strain across its global offices. Thereby freeing HR teams to focus on higher-value tasks, while improving the overall candidate experience through clarity and efficiency.
                                </p>
                            </div>

                            <div className="user-problems-context-item">
                                <div className="context-item-header">
                                    <DownvoteIcon className="downvote-icon" />
                                    <h4>Strengthen employer brand</h4>
                                </div>
                                <p>
                                    Communicate culture, values, and employee benefits consistently across all regions through polished visuals and messaging. This ensures candidates perceive ITASCA as professional, trustworthy, and a desirable employer, increasing alignment between applicant expectations and company values.
                                </p>
                            </div>

                            <div className="user-problems-context-item">
                                <div className="context-item-header">
                                    <DownvoteIcon className="downvote-icon" />
                                    <h4>Enhance candidate experience</h4>
                                </div>
                                <p>
                                    Provide intuitive navigation, accessible content across devices, and straightforward pathways to explore opportunities and submit applications. This creates a seamless, engaging experience that supports candidate engagement and higher application completion rates.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="section-title">

                <div className="problem-section-header">
                    <div className="section-left">
                        <h3>User Problems</h3>
                    </div>

                    <div className="section-right">
                        <p id="section-intro">
                            A global company lacked a dedicated careers landing page, making it difficult for job seekers to learn about the company and find opportunities. This led to misalignment between candidates and the company, as well as a drop-off in desirable applicants, ultimately slowing down hiring teams and processes. Key pain points include:
                        </p>

                        <div className="context-item-container">

                            <div className="user-problems-context-item">
                                <div className="context-item-header">
                                    <DownvoteIcon className="downvote-icon" />
                                    <h4>Inconsistent key information</h4>
                                </div>
                                <p>
                                    Prospective candidates struggled to find high-level details about the company’s culture, values, benefits, and what makes the company an attractive place to work (EVP). This led to confusion or missed opportunities to present the company in the best light.
                                </p>
                            </div>

                            <div className="user-problems-context-item">
                                <div className="context-item-header">
                                    <DownvoteIcon className="downvote-icon" />
                                    <h4>Trust and professionalism</h4>
                                </div>
                                <p>
                                    Without a centralized, branded careers page, job seekers struggled to assess the company’s credibility and quality. A professional, polished page signals reliability, sets clear expectations, and encourages candidates to engage confidently with the application process.
                                </p>
                            </div>

                            <div className="user-problems-context-item">
                                <div className="context-item-header">
                                    <DownvoteIcon className="downvote-icon" />
                                    <h4>Accessibility and inclusivity</h4>
                                </div>
                                <p>
                                    Candidates across different regions and devices need equal access to careers information. A mobile-friendly, WCAG-compliant page ensures all users can navigate and interact with content effectively, creating an inclusive experience that respects diverse abilities and contexts.
                                </p>
                            </div>

                            <div className="user-problems-context-item">
                                <div className="context-item-header">
                                    <DownvoteIcon className="downvote-icon" />
                                    <h4>Clear pathways to opportunities</h4>
                                </div>
                                <p>
                                    Job seekers require intuitive navigation and straightforward ways to explore openings or submit applications. Reducing friction in the candidate journey helps ensure more complete applications and a smoother process for both users and HR teams.
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
                        Create a centralized, branded careers page that aligns with the company’s global identity, supports HR and leadership in securing top talent, and provides job seekers with a clear, trustworthy, and accessible way to explore opportunities. The page needed to balance regional flexibility, cultural considerations, and varied benefits while maintaining a cohesive user experience.
                    </p>
                </div>
            </section>

            <section className="challenge-section-header">
                <div className="kelvix-solution-header-section-left">
                    <h3>Solution</h3>
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
                                <h4>How the redesign solves the Challenge</h4>
                            </div>

                            <p id="intro-redesign" className="redesign-description">
                                The redesign directly tackled the project’s business and user challenges by:
                                <ul>
                                    <li>
                                        Building a centralized location of career information for all global offices while allowing localized information and languages, ensuring clarity and relevance for all candidates.
                                    </li>
                                    <li>
                                        Aligning with brand identity by maintaining visual and messaging consistency with the company’s new <span class="tooltip"> <a href="URL_OF_YOUR_CASE_STUDY" target="_blank" class="custom-link">SaaS ecommerce website</a><span class="tooltip-text">Opens the SaaS ecommerce website case study in a new tab</span></span>, reinforcing a professional and approachable image.
                                    </li>
                                    <li>
                                        Simplifying navigation and applications through intuitive layouts and clear calls-to-action, allowing candidates to easily explore opportunities and submit their information with minimal friction.
                                    </li>
                                    <li>
                                        Adapting copy for global audiences by adjusting tone to be professional, culturally appropriate, and engaging, while incorporating executive and regional feedback.
                                    </li>
                                    <li>
                                        Adapting copy and content for a global audience by adjusting tone to be professional, culturally appropriate, and engaging, while incorporating executive and regional feedback.
                                    </li>
                                    <li>
                                        Ensuring accessibility and mobile readiness through a WCAG-compliant, responsive design that provided a seamless experience across all devices.
                                    </li>
                                </ul>
                            </p>
                        </div>

                        <div className="image-row-1">
                            <div className="image-column-left-1">
                                <img
                                    src={CaseStudyImage3}
                                    alt="This image showcases the career opportunities section, detailing job categories available within the company. It highlights possible roles, providing a clear overview of the diverse career paths the company offers. Additionally, a 'Connect' button encourages job seekers to submit their resumes for future opportunities, ensuring accessibility for those who may not find a current opening that matches their expertise."
                                    className="case-study-image"
                                />
                            </div>
                            <div className="image-column-right-1">
                                <p id="the-filter-bar-subtitle" className="image-subtitles">
                                    The Opportunities section presents a comprehensive overview of the company's diverse career opportunities, showcasing roles across multiple departments. It highlights the company’s commitment to fostering a collaborative and innovative culture, ensuring that job seekers can find a position aligned with their skills and interests.
                                </p>
                                <p id="the-filter-bar-subtitle" className="image-subtitles">
                                    The inclusion of an internship program demonstrates company's investment in nurturing future professionals, while the "Connect" button provides an accessible way for candidates to submit their resumes, reinforcing a forward-thinking approach to talent acquisition and global hiring.
                                </p>
                            </div>
                        </div>
                        <br />
                        <div className="image-row-2">
                            <div className="image-column">
                                <p id="approach" className="image-subtitles-left-2">
                                    The Opportunities section also showcases all its office locations, which spans across multiple continents. This provides clear, accessible information about the company’s international operations, making it easy for job seekers to identify potential opportunities in their region. Emphasizing the company's global reach reinforces its stability, influence, and appeal to candidates seeking careers in an internationally connected organization.
                                </p>
                            </div>
                            <div className="image-column-right-2 left-align">
                                <img
                                    src={CaseStudyImage4}
                                    alt="This image features a list and world map image highlighting company's global office locations. Alongside the map, a list of office locations specifies cities. The visual representation reinforces the company's extensive international presence and the opportunities available within its global network."
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
                                The design even more in the following ways:
                                <ul>
                                    <li>
                                        Reduced HR workload by centralizing careers information and providing clear, accessible details on benefits, culture, and application processes, thereby decreasing repetitive candidate inquiries and freeing HR teams to focus on higher-value tasks.
                                    </li>
                                    <li>
                                        Strengthened employer branding by presenting a polished, consistent visual identity and messaging that signaled credibility and helped attract top-tier talent.
                                    </li>
                                    <li>
                                        Enabled a scalable system that allows ongoing updates and content adjustments across global offices without requiring developer intervention, ensuring long-term maintainability.
                                    </li>
                                    <li>
                                        Improved SEO and global visibility by optimizing the page structure and content, making it easier for candidates worldwide to discover and access relevant opportunities.
                                    </li>
                                    <li>
                                        Increased alignment between candidates and the company by clearly communicating culture, values, and expectations, supporting succession planning and long-term talent acquisition.
                                    </li>
                                </ul>
                            </p>
                        </div>

                        <div className="image-row-1">
                            <div className="image-column-left-1">
                                <img
                                    src={CaseStudyImage2}
                                    alt="This image displays Perks section, which showcases employee benefits, highlighting key perks such as career growth opportunities, flexible work options, a collaborative global company culture, employee feedback integration, a structured mentorship program, and employee recognition initiatives. The text emphasizes the company's dedication to professional development, work-life balance, and fostering an inclusive, supportive work environment."
                                    className="case-study-image"
                                />
                            </div>
                            <div className="image-column-right-1">
                                <p className="image-subtitles">
                                    The Perks section showcases the company's commitment to creating a supportive and enriching work environment by showcasing key employee benefits. It emphasizes career growth opportunities, flexible work options, a collaborative global culture, employee feedback integration, a structured mentorship program, and employee recognition initiatives. By presenting these perks, the company appeals to a diverse range of job seekers who value professional development, work-life balance, and being part of an inclusive, globally connected team.
                                </p>
                            </div>
                        </div>
                        <br />
                        <div className="image-row-2">
                            <div className="image-column">
                                <p id="approach" className="image-subtitles-left-2">
                                    The redesigned careers page header immediately highlights the company's employee-owned structure and commitment to professional growth, collaboration, and inclusivity. The prominent "View Open Positions" button provides a clear, direct path for job seekers, ensuring a seamless experience for both new and returning candidates.
                                </p>
                            </div>
                            <div className="image-column-right-2 left-align">
                                <img
                                    src={ItascaCareersHeaderImage}
                                    alt="This image depicts the ITASCA careers page header, which features a dynamic collage of engineers in the field, reinforcing the company’s commitment to employee ownership, professional growth, and a collaborative work environment. Additionally, there is a prominent 'View Open Positions' button provides a clear, direct path for job seekers, ensuring a seamless experience for both new and returning candidates."
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
                                The redesigned careers page provides a clear, accessible, and engaging experience for candidates, balancing global consistency with local relevance. Intuitive navigation and a streamlined application process strengthen the employer brand, improve candidate alignment, and simplify HR workflows, while accessibility and SEO enhancements boost overall visibility and engagement.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="approach-section-header">

                <div className="itasca-careers-title-section-left">
                    <h3 className="approach-header">Approach</h3>
                </div>

                <div className="section-right">

                    <p id="section-intro">
                        The careers page was designed as a unified solution to support a global presence, streamline the hiring process, and provide a seamless, engaging experience for job seekers. The project centered around the following key principles:
                    </p>

                    <div className="context-item-container">

                        <div className="approach-context-item">
                            <div className="context-item-header clear-actionable-design">
                                <CircleCheckIcon className="circle-check-icon" />
                                <h4>Global applicability</h4>
                            </div>
                            <p>
                                The design focuses on creating a concise, universally applicable, and reflective of the company’s global identity while still appealing to diverse candidates. For an international company, each location has unique hiring practices, benefits, and cultural expectations, and need to be accurately and consistantly represented.
                            </p>
                        </div>

                        <div className="approach-context-item">
                            <div className="context-item-header iteration-feedback">
                                <CircleCheckIcon className="circle-check-icon" />
                                <h4>Strong employer branding</h4>
                            </div>
                            <p>
                                Branding, voice, and messaging are applied consistently, ensuring culture, mission, and values are clearly communicated. Candidates can quickly determine if they are a good fit for the company, leading to more informed applications. Attracting the right candidates and streamlining the hiring process.
                            </p>
                        </div>

                        <div className="approach-context-item">
                            <div className="context-item-header iteration-feedback">
                                <CircleCheckIcon className="circle-check-icon" />
                                <h4>Seamless integration</h4>
                            </div>
                            <p>
                                The page is thoughtfully structured to integrate seamlessly within the larger website ecosystem. It maintains continuity in design and functionality while providing clear pathways for users to explore the company further or move directly into the application process.
                            </p>
                        </div>

                        <div className="image-row-2">
                            <div className="image-column">
                                <p id="approach" className="image-subtitles-left-2">The design focuses on driving engagement with a clear and compelling call to action, guiding job seekers to explore opportunities that align with their skills and aspirations, streamlining the application process for highly interested candidates.</p>
                            </div>
                            <div className="image-column-right-2 left-align">
                                <img
                                    src={CaseStudyImage1}
                                    alt="This image shows the main CTA of the webpage, showcasing how the design focuses on driving engagement with a clear and compelling call to action, guiding job seekers to explore opportunities that align with their skills and aspirations, streamlining the application process for highly interested candidates."
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
                            <h4>Day 1–3 Planning &Alignment</h4>
                        </div>
                        <ul>
                            <li>Conducted user research with hiring teams across global offices, including surveys and interviews, to understand challenges in managing job applications.</li>
                            <li>Gathered requirements and aligned expectations with stakeholders, including HR, regional managers, and leadership.</li>
                            <li>Mapped out regional differences (benefits, office culture, hybrid vs. on-site policies) to ensure the design would accommodate international needs.</li>
                        </ul>
                    </div>

                    <div className="timeline-context-item">
                        <div className="context-item-header">
                            <h4>Day 4–6 Designing</h4>
                        </div>
                        <ul>
                            <li>Created wireframes and mockups in Figma that balanced global brand consistency with localization flexibility.</li>
                            <li>Developed clear calls-to-action guiding users through company info, culture, benefits, and open positions.</li>
                            <li>Incorporated accessibility (WCAG) and mobile-first principles from the start.</li>
                        </ul>
                    </div>

                    <div className="timeline-context-item">
                        <div className="context-item-header">
                            <h4>Day 7–9 Implementation</h4>
                        </div>
                        <ul>
                            <li>Built the careers page in Craft CMS, overcoming limitations such as multi-office page splits and rigid templates.</li>
                            <li>Designed a system that allowed HR to update content easily while maintaining a consistent user experience.</li>
                            <li>Coordinated content translations and regional variations to support a global audience.</li>
                        </ul>
                    </div>

                    <div className="timeline-context-item">
                        <div className="context-item-header">
                            <h4>Day 10–12 Testing & Refinement</h4>
                        </div>
                        <ul>
                            <li>Conducted cross-browser and device testing for consistency across platforms.</li>
                            <li>Collected internal feedback from leadership and global offices; grouped comments by theme (copy tone, visuals, benefits info) to implement efficiently.</li>
                            <li>Adjusted navigation, layout, and content hierarchy to ensure clarity and reduce friction for candidates.</li>
                        </ul>
                    </div>

                    <div className="timeline-context-item">
                        <div className="context-item-header">
                            <h4>Day 13–14 Launch & Maintaining</h4>
                        </div>
                        <ul>
                            <li>Deployed the page live, confirming alignment with the company’s branding and UX standards.</li>
                            <li>Monitored user engagement, candidate submissions, and feedback post-launch; made iterative updates to maintain relevance and effectiveness.</li>
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
                                    <li>Designing a brand-new careers page that had to integrate seamlessly into the existing website architecture without disrupting established structures.</li>
                                    <li>Aligning stakeholders across global hiring teams, each with different priorities and cultural perspectives, while creating a unified employer brand.</li>
                                    <li>Working within the technical limits of Craft CMS, which provided flexibility but also introduced constraints that shaped layout options and update processes.</li>
                                    <li>Delivering under a tight deadline, balancing competing inputs while ensuring quality and usability weren’t compromised.</li>
                                </ul>
                            </div>

                            <div className="obstacles-context-item">
                                <div className="context-item-header milestones">
                                    <CircleCheckIcon className="circle-check-icon" />
                                    <h4>Milestones</h4>
                                </div>
                                <ul>
                                    <li>Successfully integrated the careers page into the existing website ecosystem while maintaining continuity in design and navigation.</li>
                                    <li>Translated and localized content across all required languages, ensuring accessibility and cultural inclusivity for a global audience.</li>
                                    <li>Ensured compliance with international accessibility standards, strengthening equity and usability across regions.</li>
                                    <li>Incorporated feedback from global offices and hiring teams, validating alignment between local needs and the company’s overarching brand.</li>
                                    <li>Achieved early adoption post-launch, with hiring teams actively using the page to streamline processes and attract stronger candidates.</li>
                                </ul>
                            </div>

                        </div>

                    </div>

                </div>

            </section>

            <section className="challenge-section-header">
                <div className="itasca-software-impact-outcome-section-left">
                    <h3 className="impacts-header">Impact & Outcomes</h3>
                </div>

                <div className="section-right">
                    <p id="section-intro">
                        The new careers page transformed a fragmented hiring experience into a unified, branded, and accessible platform that directly supported the company’s talent acquisition strategy.
                    </p>

                    <p id="section-intro-2">
                        By elevating the employer brand and streamlining the application process, the page became a critical tool for attracting top-tier candidates in a competitive market.
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
                                    <li>Clear messaging, consistent design, and values-driven content positioned the company as an employer of choice, aligning candidate perception with leadership’s vision.</li>
                                    <li>By providing culture, EVP, and benefits information upfront, the page attracted candidates better aligned with the company’s standards, reducing misaligned applications and saving hiring teams significant time.</li>
                                    <li>Centralized, easy-to-navigate job listings and clear CTAs improved application completion rates and reduced applicant drop-off.</li>
                                    <li>Localized content and translations allowed each regional office to connect with candidates in their own language, while still maintaining a unified global brand identity.</li>
                                    <li>WCAG-compliant structure and responsive design ensured an inclusive experience across devices, critical for a diverse global audience.</li>
                                    <li>By delivering on a board-level KPI under tight deadlines, the project built leadership trust in design’s role in achieving strategic growth goals.</li>
                                </ul>
                            </p>
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
                                    This project highlighted the need to design for both user needs and long-term business strategy. I learned how to translate executive-level goals into tangible design outcomes that made the company more competitive in attracting top-tier candidates. I also gained valuable experience adapting design vision to the realities of a limiting CMS while still delivering an accessible, user-friendly, and globally relevant solution.
                                </p>
                            </div>

                            <div className="takeaways-context-item">
                                <div className="context-item-header key-challenges-overcome">
                                    <CogIcon className="cog-icon" />
                                    <h4>Key challenges overcome</h4>
                                </div>
                                <p>
                                    The project required balancing input from multiple international offices, navigating competing priorities while maintaining a unified global brand presence. Working within Craft CMS imposed technical limitations that demanded creative problem-solving to preserve flexibility and consistency.
                                </p>
                                <br />
                                <p>
                                    Tight deadlines tied to executive KPIs taught me how to manage high-pressure demands without sacrificing quality. Ensuring WCAG compliance and mobile responsiveness was not only a best practice but a critical milestone, marking one of the project’s biggest successes for a company with global reach.
                                </p>
                            </div>

                            <div className="takeaways-context-item">
                                <div className="context-item-header key-challenges-overcome">
                                    <SparklesIcon className="sparkles-icon" />
                                    <h4>Personal reflections</h4>
                                </div>
                                <p>
                                    This project reinforced how design can directly support business-critical outcomes. It taught me the value of designing with scalability in mind: the careers page wasn’t just a quick fix, but a foundation the company could build on. I’m proud of how the page elevated the employer brand, supported hiring teams, and ultimately strengthened leadership’s trust in design as a driver of strategic growth.
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
                            There are opportunities to further enhance the careers page and improve candidate engagement with strategic updates such as:
                        </p>

                        <div className="context-item-container">

                            <div className="growth-context-item">
                                <div className="context-item-header lessons-learned">
                                    <TrendingUpIcon className="trendingup-icon" />
                                    <h4>More interactive content</h4>
                                </div>
                                <p>
                                    Adding interactive elements such as behind-the-scenes videos, virtual office tours, or employee Q&A sections to provide candidates with a deeper connection to the company. This helps candidates better understand the work environment before applying.
                                </p>
                            </div>

                            <div className="growth-context-item">
                                <div className="context-item-header key-challenges-overcome">
                                    <TrendingUpIcon className="trendingup-icon" />
                                    <h4>Add application tracking</h4>
                                </div>
                                <p>
                                    Optimizing the job application experience by integrating a more intuitive application tracking system. Enhancements like saved job searches, job alerts, and application status would reduce friction and improve conversion rates.
                                </p>
                            </div>

                            <div className="growth-context-item">
                                <div className="context-item-header key-challenges-overcome">
                                    <TrendingUpIcon className="trendingup-icon" />
                                    <h4>Leverage analytic tools</h4>
                                </div>
                                <p>
                                    Leveraging newly integrated analytic tools to track user engagement, identify drop-off points, and refine content based on candidate behavior. Continuous data-driven improvements would ensure the careers page remains effective in attracting and converting top talent.
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
