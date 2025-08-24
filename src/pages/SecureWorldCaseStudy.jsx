import React, { useState, useRef, useEffect } from 'react';
import ScrollButton from '../components/ScrollButton';

import '../styles/styles.css';
import '../styles/CaseStudy.css';

import { CircleCheckIcon } from '../components/CircleCheckIcon';
import { UsersIcon } from '../components/UsersIcon';
import { FilePenLineIcon } from '../components/FilePenLineIcon';
import { CogIcon } from '../components/CogIcon';
import { TrendingUpIcon } from '../components/TrendingUpIcon';
import { SparklesIcon } from '../components/SparklesIcon';
import { ArrowRightIcon } from '../components/ArrowRightIcon';

import NorsemanNuptialsHeaderImage from '../assets/norseman-nuptials/Norseman Nuptials Header Image.png';
import CaseStudyImage1 from '../assets/norseman-nuptials/Norseman Nuptials Case Study Image1.png';
import CaseStudyImage2 from '../assets/norseman-nuptials/Norseman Nuptials Case Study Image2.png';
import CaseStudyImage3 from '../assets/norseman-nuptials/Norseman Nuptials Case Study Image3.png';
import CaseStudyImage4 from '../assets/norseman-nuptials/Norseman Nuptials Case Study Image4.png';
import CaseStudyImage5 from '../assets/norseman-nuptials/Norseman Nuptials Case Study Image5.png';
import CaseStudyImage6 from '../assets/norseman-nuptials/Norseman Nuptials Case Study Image6.png';
import CaseStudyImage7 from '../assets/norseman-nuptials/Norseman Nuptials Case Study Image7.png';
import CaseStudyImage8 from '../assets/norseman-nuptials/Norseman Nuptials Case Study Image8.png';
import CaseStudyImage9 from '../assets/norseman-nuptials/Norseman Nuptials Case Study Image9.png';
import CaseStudyImage10 from '../assets/norseman-nuptials/Norseman Nuptials Case Study Image10.png';
import CaseStudyImage11 from '../assets/norseman-nuptials/Norseman Nuptials Case Study Image11.png';
import CaseStudyImage12 from '../assets/norseman-nuptials/Norseman Nuptials Case Study Image12.png';
import CaseStudyImage13 from '../assets/norseman-nuptials/Norseman Nuptials Case Study Image13.png';
import CaseStudyImage14 from '../assets/norseman-nuptials/Norseman Nuptials Case Study Image14.png';
import CaseStudyImage15 from '../assets/norseman-nuptials/Norseman Nuptials Case Study Image15.png';
import CaseStudyImage16 from '../assets/norseman-nuptials/Norseman Nuptials Case Study Image16.png';
import CaseStudyImage17 from '../assets/norseman-nuptials/Norseman Nuptials Case Study Image17.png';
import CaseStudyImage18 from '../assets/norseman-nuptials/Norseman Nuptials Case Study Image18.png';
import CaseStudyImage19 from '../assets/norseman-nuptials/Norseman Nuptials Case Study Image19.png';
import CaseStudyImage20 from '../assets/norseman-nuptials/Norseman Nuptials Case Study Image20.png';
import CaseStudyImage21 from '../assets/norseman-nuptials/Norseman Nuptials Case Study Image21.png';
import CaseStudyImage22 from '../assets/norseman-nuptials/Norseman Nuptials Case Study Image22.png';
import CaseStudyImage23 from '../assets/norseman-nuptials/Norseman Nuptials Case Study Image23.png';
import CaseStudyImage24 from '../assets/norseman-nuptials/Norseman Nuptials Case Study Image24.png';
import CaseStudyImage25 from '../assets/norseman-nuptials/Norseman Nuptials Case Study Image25.png';

const SecureworldCaseStudy = () => {

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
                        <h2 className="case-study-subtitle">Modernizing a cybersecurity brand to boost engagement by 60% and unify experiences across print, digital, and multimedia.</h2>

                        {/* <div className="links">
                            <a href="https://www.itascacg.com/about/careers-main" target="_blank">View Live</a>
                        </div> */}
                    </div>

                    <div className="case-study-header-right">
                        <img
                            id="norseman-nuptials-header-image"
                            src={NorsemanNuptialsHeaderImage}
                            alt="A preview of Norseman Nuptials branding on stationanry."
                            className="case-study-image"
                        />
                    </div>
                </div>

                <section className="section-title">
                    <div className="project-overview">
                        <p><strong>Client<br /></strong>SecureWorld</p>
                        <p><strong>Duration<br /></strong>15 months</p>
                        <p><strong>Completed<br /></strong>July 2023</p>
                        <p><strong>Roles<br /></strong>Lead Graphic Designer</p>
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
                            SecureWorld is a recognized leader in the cybersecurity industry, best known for its nationwide conference series that brings professionals together to share knowledge and stay ahead of emerging threats.
                        </p>
                        <p>
                            The organization had undergone several rebrandings in the past, but none had fully taken hold, and there was no system in place to maintain consistency across channels or departments. They wanted a brand that could finally be implemented effectively, reflect their authority in the cybersecurity space, and engage audiences across multiple touchpoints. Their vision was to:
                        </p>


                        <div className="context-item-container">

                            <div className="user-problems-context-item">
                                <div className="context-item-header clear-actionable-design">
                                    <CircleCheckIcon className="circle-check-icon" />
                                    <h4>Unify the brand across channels</h4>
                                </div>
                                <p>
                                    Create a cohesive visual system that could be applied consistently across print, digital, and multimedia assets. Ensure every department could implement the brand without losing fidelity, so that every touchpoint felt part of a unified whole.
                                </p>
                            </div>

                            <div className="user-problems-context-item">
                                <div className="context-item-header clear-actionable-design">
                                    <CircleCheckIcon className="circle-check-icon" />
                                    <h4>Elevate credibility and recognition</h4>
                                </div>
                                <p>
                                    Modernize the brand while maintaining trust and professionalism, signaling to conference attendees, partners, and digital audiences that SecureWorld is a leading authority in cybersecurity. Every visual element should reinforce expertise and reliability.
                                </p>
                            </div>

                            <div className="user-problems-context-item">
                                <div className="context-item-header clear-actionable-design">
                                    <CircleCheckIcon className="circle-check-icon" />
                                    <h4>Empower internal teams</h4>
                                </div>
                                <p>
                                    Provide templates, guides, and a flexible design system that made it easy for marketing, sales, and other departments to produce on-brand assets efficiently. Reduce dependence on ad-hoc design decisions or inconsistent vendor implementations.
                                </p>
                            </div>

                            <div className="user-problems-context-item">
                                <div className="context-item-header clear-actionable-design">
                                    <CircleCheckIcon className="circle-check-icon" />
                                    <h4>Create a sustainable, future-proof system</h4>
                                </div>
                                <p>
                                    Move beyond one-off designs to a scalable, maintainable brand system. Ensure the identity could evolve with SecureWorld while retaining core visual standards, avoiding the pitfalls of past rebranding attempts.
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
                       Take the organization’s latest branding, refine and expand it into a comprehensive, flexible system, and implement it in a way that empowered internal teams, engaged audiences effectively, and reinforced SecureWorld’s position as a trusted cybersecurity leader.
                    </p>
                </div>
            </section>


            <section className="challenge-section-header">
                <div className="kelvix-solution-header-section-left">
                    <h3>Solution</h3>
                </div>

                <div className="section-right">
                    <p id="section-intro">
                        The solution transforms the organization's cybersecurity presence into a cohesive, professional, and flexible system that communicates authority, credibility, and clarity. It positions SecureWorld as a modern, trustworthy leader in cybersecurity while providing internal teams with the tools to implement the brand consistently across print, digital, and multimedia channels.
                    </p>

                    <div className="context-item-container">
                        <div id="end-result" className="solution-context-item">
                            <div className="context-item-header clear-actionable-design">
                                <UsersIcon className="users-icon" />
                                <h4>How the design supports the clients goals</h4>
                            </div>

                            <p id="intro-redesign" className="redesign-description">
                                The brand system meets each of the core goals identified in the vision phase by:
                                <ul>
                                    <li>
                                        Modular templates, grid systems, and layout standards ensure consistency across brochures, social media, presentations, and multimedia assets, reducing fragmentation and confusion.
                                    </li>
                                    <li>
                                        A refreshed color palette, clean typography, and professional photography communicate authority and trust, reinforcing SecureWorld’s thought leadership in cybersecurity.
                                    </li>
                                    <li>
                                        Flexible templates, brand documentation, and scalable design tools allow marketing and other departments to produce on-brand content efficiently without relying on ad-hoc design decisions.
                                    </li>
                                    <li>
                                        Custom illustrations and iconography simplify complex cybersecurity topics, making content clear and relevant for conference attendees, digital audiences, and corporate partners.
                                    </li>
                                </ul>
                            </p>
                        </div>
{/* 
                        <div className="logo-section">

                            <p className="section-label">Primary Logo</p>

                            <div className="primary-logo-row full-color-row">
                                <div className="primary-logo-single">
                                    <img
                                        src={CaseStudyImage9}
                                        alt="Norseman Nuptials Primary Logo Full Color"
                                        className="primary-logo-img"
                                    />
                                </div>
                            </div>

                            <div className="primary-logo-row bw-row">
                                <div className="primary-logo-half bg-black">
                                    <img
                                        src={CaseStudyImage10}
                                        alt="Norseman Nuptials Primary Logo Black"
                                        className="logo-img"
                                    />
                                </div>
                                <div className="primary-logo-half bg-white">
                                    <img
                                        src={CaseStudyImage11}
                                        alt="Norseman Nuptials Primary Logo White"
                                        className="logo-img"
                                    />
                                </div>
                            </div>

                        </div>

                        <p className="section-label">Alternative Logos</p>

                        <p className="sub-section-label">Lettermark</p>

                        <div className="alt-logo-row">
                            <div className="alt-logo-box bg-white-alt">
                                <img
                                    src={CaseStudyImage12}
                                    alt="Norseman Nuptials Alternative Logo Lettermark Full Color"
                                    className="alt-logo-img"
                                />
                            </div>

                            <div className="alt-logo-box bg-white-alt">
                                <img
                                    src={CaseStudyImage13}
                                    alt="Norseman Nuptials Alternative Logo Lettermark Black"
                                    className="alt-logo-img"
                                />
                            </div>

                            <div className="alt-logo-box bg-black-alt">
                                <img
                                    src={CaseStudyImage14}
                                    alt="Norseman Nuptials Alternative Logo Lettermark White"
                                    className="alt-logo-img"
                                />
                            </div>
                        </div>

                        <p className="sub-section-label">Wordmark</p>

                        <div className="alt-logo-row">
                            <div className="alt-logo-box bg-white-alt">
                                <img
                                    src={CaseStudyImage15}
                                    alt="Norseman Nuptials Alternative Logo Lettermark Full Color"
                                    className="alt-logo-img"
                                />
                            </div>

                            <div className="alt-logo-box bg-white-alt">
                                <img
                                    src={CaseStudyImage16}
                                    alt="Norseman Nuptials Alternative Logo Lettermark Black"
                                    className="alt-logo-img"
                                />
                            </div>

                            <div className="alt-logo-box bg-black-alt">
                                <img
                                    src={CaseStudyImage17}
                                    alt="Norseman Nuptials Alternative Logo Lettermark White"
                                    className="alt-logo-img"
                                />
                            </div>
                        </div>

                        <p className="section-label">Color Palette</p>

                        <div className="color-palette-row">
                            <div className="swatch-container">
                                <p className="swatch-label">Nótt</p>
                                <img src={CaseStudyImage2} alt="Nótt color swatch" className="color-swatch" />
                            </div>
                            <div className="swatch-container">
                                <p className="swatch-label">Freya’s Veil</p>
                                <img src={CaseStudyImage3} alt="Freya’s Veil color swatch" className="color-swatch" />
                            </div>
                            <div className="swatch-container">
                                <p className="swatch-label">Aurora</p>
                                <img src={CaseStudyImage4} alt="Aurora’s Breath color swatch" className="color-swatch" />
                            </div>
                            <div className="swatch-container">
                                <p className="swatch-label">Skadi Sky</p>
                                <img src={CaseStudyImage5} alt="Skadi Sky color swatch" className="color-swatch" />
                            </div>
                            <div className="swatch-container">
                                <p className="swatch-label">Fjord</p>
                                <img src={CaseStudyImage6} alt="Midnight Fjord color swatch" className="color-swatch" />
                            </div>
                        </div>

                        <p className="section-label">Typography</p>

                        <div className="font-row">
                            <div className="font-container">
                                <p className="swatch-label">North Typeface</p>
                                <img src={CaseStudyImage7} alt="North Typeface" className="font" />
                            </div>
                            <div className="font-container">
                                <p className="swatch-label">Custom Typeface</p>
                                <img src={CaseStudyImage8} alt="Custom Typeface" className="font" />
                            </div>
                        </div>

                        <p className="section-label">Illustrations</p>

                        <div className="illustration-row">
                            <div className="illustration-box">
                                <img
                                    src={CaseStudyImage18}
                                    alt="Norseman Nuptials Illustration Set 1"
                                    className="illustration-img"
                                />
                            </div>
                            <div className="illustration-box">
                                <img
                                    src={CaseStudyImage19}
                                    alt="Norseman Nuptials Illustration Set 2"
                                    className="illustration-img"
                                />
                            </div>
                            <div className="illustration-box">
                                <img
                                    src={CaseStudyImage20}
                                    alt="Norseman Nuptials Illustration Set 3"
                                    className="illustration-img"
                                />
                            </div>
                        </div>

                        <p className="section-label">Photography</p>

                        <div className="photo-row">
                            <img
                                src={CaseStudyImage21}
                                alt="Norseman Nuptials Photography"
                                className="photography-img"
                            />
                        </div> */}

                        <div id="end-result" className="solution-context-item">
                            <div className="context-item-header clear-actionable-design">
                                <CircleCheckIcon className="circle-check-icon" />
                                <h4>How the design elevates beyond the brief</h4>
                            </div>
                            <p id="intro-redesign" className="redesign-description">
                                While meeting the original goals, the branding also introduces:
                                <ul>
                                    <li>
                                        A flexible, scalable system designed to evolve with SecureWorld’s needs, supporting future campaigns, interactive digital experiences, and event activations while maintaining visual cohesion.
                                    </li>
                                    <li>
                                        Enhanced multimedia integration with motion graphics, video templates, and looping animations align with the brand, improving engagement and retention across presentations, online campaigns, and live events.
                                    </li>
                                    <li>
                                        Custom visual elements like icons, patterns, and photography standards enhance comprehension and storytelling for complex cybersecurity concepts, strengthening the brand’s clarity and professionalism.
                                    </li>
                                </ul>
                            </p>
                        </div>

                        <div id="end-result" className="solution-context-item">
                            <div className="context-item-header clear-actionable-design">
                                <CircleCheckIcon className="circle-check-icon" />
                                <h4>End result</h4>
                            </div>
                            <p id="intro-redesign" className="redesign-description">
                               SecureWorld now has a brand system that is unified, professional, and scalable. It immediately elevates the organization’s credibility in the cybersecurity space, streamlines internal workflows, and engages audiences with clarity and impact. The final visual identity ensures consistency across every touchpoint while remaining adaptable for evolving digital and event experiences, giving SecureWorld a sustainable, future-proof brand presence.
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
                        To bring SecureWorld’s vision of a cohesive, professional, and scalable cybersecurity brand to life, I followed a process rooted in research, systematization, and audience-focused design to create a flexible and implementable brand identity.
                    </p>

                    <div className="context-item-container">

                        <div className="approach-context-item">
                            <div className="context-item-header clear-actionable-design">
                                <CircleCheckIcon className="circle-check-icon" />
                                <h4>Audience alignment</h4>
                            </div>
                            <p>
                                Defined the visual tone through moodboards, creative direction, and brand expansion that resonated with multiple stakeholders, ensuring clarity, trust, and professionalism across all touchpoints.
                            </p>
                        </div>

                        <div className="approach-context-item">
                            <div className="context-item-header iteration-feedback">
                                <CircleCheckIcon className="circle-check-icon" />
                                <h4>Competitive contrast</h4>
                            </div>
                            <p>
                                Conducted a brand landscape audit of cybersecurity organizations and conference brands to identify visual gaps and avoid industry clichés, creating a blueprint for a modern, differentiated identity that signals thought leadership.
                            </p>
                        </div>

                        <div className="approach-context-item">
                            <div className="context-item-header iteration-feedback">
                                <CircleCheckIcon className="circle-check-icon" />
                                <h4>Internal collaboration</h4>
                            </div>
                            <p>
                                Met with teams across marketing, sales, and events to understand their workflows, pain points, and the types of materials they needed. This ensured the brand system addressed real-world challenges and was practical for day-to-day use.
                            </p>
                        </div>

                        <div className="approach-context-item">
                            <div className="context-item-header iteration-feedback">
                                <CircleCheckIcon className="circle-check-icon" />
                                <h4>Iterative feedback</h4>
                            </div>
                            <p>
                                Shared prototypes, templates, and draft assets with stakeholders to gather input, refine the system, and confirm that the visual identity met both functional needs and audience expectations. This iterative approach built buy-in and made the brand system adaptable for multiple departments.
                            </p>
                        </div>

                    </div>
                </div>
            </section>

            <section className="process-section-header">
                <div className="section-left">
                    <h3>Timeline & Design Process</h3>
                </div>

                <div className="section-right">
                    <div className="timeline-context-item">
                        <div className="context-item-header">
                            <h4>Months 1–3 Discovery & Brand Audit</h4>
                        </div>
                        <ul>
                            <li>Met with leadership and marketing teams to understand the organization’s goals, workflows, and pain points.</li>
                            <li>Reviewed existing brand assets to identify inconsistencies and gaps across print, digital, and multimedia.</li>
                            <li>Conducted competitive benchmarking to define opportunities for differentiation and modernized visual positioning.</li>
                        </ul>
                    </div>

                    <div className="timeline-context-item">
                        <div className="context-item-header">
                            <h4>Months 4–6 Concept Exploration & System Development</h4>
                        </div>
                        <ul>
                            <li>Expanded and refined the latest SecureWorld branding into multiple visual directions.</li>
                            <li>Developed initial typography, color palette, iconography, illustration styles, and layout standards.</li>
                            <li>Iterated concepts based on stakeholder feedback, ensuring flexibility and usability across departments.</li>
                        </ul>
                    </div>

                    <div className="timeline-context-item">
                        <div className="context-item-header">
                            <h4>Months 7–10 Brand Identity Finalization</h4>
                        </div>
                        <ul>
                            <li>Finalized logo suite, typography system, core color palette, and supporting visual elements like patterns, textures, and photography standards.</li>
                            <li>Documented the brand system in comprehensive guides and templates for print, digital, and multimedia applications.</li>
                            <li>Conducted collaborative review sessions with internal teams to confirm functionality and ease of implementation.</li>
                        </ul>
                    </div>

                    <div className="timeline-context-item">
                        <div className="context-item-header">
                            <h4>Months 11–13 Collateral Design & Multimedia Implementation</h4>
                        </div>
                        <ul>
                            <li>Designed and delivered a wide range of collateral, including brochures, flyers, social media assets, presentations, email templates, event signage, and video content.</li>
                            <li>Created modular, adaptable templates to streamline content creation for marketing and event teams.</li>
                            <li>Provided hands-on guidance and walkthroughs to ensure teams could confidently use the new brand system.</li>
                        </ul>
                    </div>

                    <div className="timeline-context-item">
                        <div className="context-item-header">
                            <h4>Months 14–15 Maintenance, Updates & Iteration</h4>
                        </div>
                        <ul>
                            <li>Continuously updated templates, graphics, and assets based on evolving campaign needs and stakeholder feedback.</li>
                            <li>Ensured the brand system remained consistent, functional, and relevant across all touchpoints.</li>
                            <li>Worked with departments to troubleshoot implementation issues and refine guidelines as new formats or mediums were introduced.</li>
                        </ul>
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
                                    <li>Translating a cybersecurity organization’s complex, technical content into a visual system that was professional, approachable, and flexible required careful design judgment.</li>
                                    <li>Existing assets were inconsistent and fragmented across departments, creating a challenge in establishing cohesion while respecting past branding.</li>
                                    <li>Ensuring the brand system could work across print, digital, social, and multimedia formats—including videos and motion graphics, without becoming overly complex or rigid.</li>
                                    <li>Introducing new templates, guidelines, and workflows as a new designer required patience, diplomacy, and clear demonstrations to secure buy-in from stakeholders accustomed to long-standing processes.</li>
                                </ul>
                            </div>

                            <div className="obstacles-context-item">
                                <div className="context-item-header milestones">
                                    <CircleCheckIcon className="circle-check-icon" />
                                    <h4>Milestones</h4>
                                </div>
                                <ul>
                                    <li>Launched a fully integrated brand identity system including logo suite, typography, color palette, iconography, patterns, and templates for print, digital, and multimedia applications.</li>
                                    <li>Delivered comprehensive brand documentation and templates to empower internal teams and maintain consistency across departments.</li>
                                    <li>Rolled out cohesive collateral including brochures, flyers, event signage, social media graphics, presentations, email templates, and multimedia content.</li>
                                    <li>Achieved measurable engagement improvements: 60% increase in digital engagement, 35% increase in brochure/flyer response rates, and 50% increase in video retention for presentations and promotional content.</li>
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
                        The new brand identity established SecureWorld as a cohesive, professional, and modern presence in the cybersecurity space. One that signals authority, builds trust, and engages audiences across print, digital, and multimedia channels.
                    </p>

                    <p id="section-intro-2">
                        By creating a flexible and consistent visual system, the brand not only improved internal workflows and adoption across departments but also drove measurable engagement, strengthened credibility, and positioned SecureWorld as a thought leader in a competitive industry.
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
                                    <li>A 60% increase in digital engagement across social media platforms and email campaigns, signaling stronger audience connection and visibility.</li>
                                    <li>35% increase in brochure and flyer response rates, demonstrating improved clarity, hierarchy, and audience comprehension.</li>
                                    <li>50% increase in video viewer retention for presentations and promotional content, reflecting the effectiveness of cohesive motion graphics and multimedia assets.</li>
                                    <li>Internal teams adopted templates and brand guidelines consistently, streamlining content creation and ensuring a unified brand experience across departments.</li>
                                    <li>Stakeholders consistently praised the brand’s clarity, professionalism, and usability, noting that the system finally made it easy to implement a cohesive identity across all channels.</li>
                                </ul>
                            </p>
                        </div>

                        {/* <p className="section-label">Business Cards</p>
                        <div className="image-row-1">
                            <div className="image-column-left-1">
                                <img
                                    src={CaseStudyImage22}
                                    alt="This image depicts the front and back of the business card mockup. Which features bold typography and a minimal, elegant layout. Reinforcing brand recognition during vendor and client interactions."
                                    className="case-study-image"
                                />
                            </div>
                            <div className="image-column-right-1">
                                <p id="the-filter-bar-subtitle" className="image-subtitles">The front and back of the business card features bold typography and a minimal, elegant layout. Reinforcing brand recognition during vendor and client interactions.</p>
                            </div>
                        </div>

                        <br />

                        <p className="section-label">Social Media</p>
                        <div className="image-row-2-gg">
                            <div className="image-column">
                                <p id="approach" className="image-subtitles-left-2">A preview of the new social media presence designed to align with the updated brand identity, a key role in boosting visibility and brand recognition.</p>
                            </div>
                            <div className="image-column-right-2 left-align">
                                <img
                                    src={CaseStudyImage1}
                                    alt="This image shows a collection of social media posts featuring bold typography, rich color palettes, and inclusive messaging of the new branding. The posts reflect the updated brand identity and were key in increasing engagement and strengthening brand recognition."
                                    className="case-study-image"
                                />
                            </div>
                        </div>

                        <p className="section-label">Tri-Fold Brochure</p>
                        <div className="image-row-1">
                            <div className="image-column-left-1">
                                <img
                                    src={CaseStudyImage23}
                                    alt="This image depicts the promotional trifold brochure that highlights key services and visual identity elements in a structured, brand-forward layout designed for venue handouts and open houses."
                                    className="case-study-image"
                                />
                            </div>
                            <div className="image-column-right-1">
                                <p id="the-filter-bar-subtitle" className="image-subtitles">The promotional trifold brochure highlights key services and visual identity elements in a structured, brand-forward layout designed for venue handouts and open houses.</p>
                            </div>
                        </div>

                        <br />

                        <p className="section-label">Digital Billboard</p>
                        <div className="image-row-2-gg">
                            <div className="image-column">
                                <p id="approach" className="image-subtitles-left-2">A high-impact concept for a digital billboard highlights the power and adaptability of the brand system when scaled to large formats.</p>
                            </div>
                            <div className="image-column-right-2 left-align">
                                <img
                                    src={CaseStudyImage25}
                                    alt="This image shows a high-impact concept for a digital billboard highlights the power and adaptability of the brand system when scaled to large formats."
                                    className="case-study-image"
                                />
                            </div>
                        </div>

                        <br />

                        <p className="section-label">Planning Journal</p>
                        <div className="image-row-1">
                            <div className="image-column-left-1">
                                <img
                                    src={CaseStudyImage24}
                                    alt="This image depicts a custom-designed journal meant to accompany couples throughout their wedding planning journey. With planning space and brand-aligned visuals, it reinforces the all-in-one, stress-free promise while adding a personal touch."
                                    className="case-study-image"
                                />
                            </div>
                            <div className="image-column-right-1">
                                <p id="the-filter-bar-subtitle" className="image-subtitles">A custom-designed journal meant to accompany couples throughout their wedding planning journey. With planning space and brand-aligned visuals, it reinforces the all-in-one, stress-free promise while adding a personal touch.</p>
                            </div>
                        </div> */}

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
                                    This project was a powerful reminder that brand design is as much about usability and internal adoption as it is about visual clarity. I learned how to create a system that communicates professionalism, trust, and authority through color, type, imagery, and layout, not just logos or copy. It also underscored the importance of building flexible, scalable systems that can adapt across departments and touchpoints while maintaining cohesion.
                                </p>
                            </div>

                            <div className="takeaways-context-item">
                                <div className="context-item-header key-challenges-overcome">
                                    <CogIcon className="cog-icon" />
                                    <h4>Key challenges overcome</h4>
                                </div>
                                <p>
                                    One of the biggest challenges was gaining internal buy-in as a new designer introducing changes to long-standing processes. Persuading stakeholders to adopt new templates, guidelines, and workflows required patience, diplomacy, and clear demonstrations of the system’s benefits.
                                </p>
                                <br />
                                <p>
                                    Another challenge was translating complex, technical cybersecurity concepts into visuals that were both clear and engaging across print, digital, and multimedia formats. Creating a system that was flexible enough to adapt to multiple audiences while maintaining credibility and consistency was a rewarding design puzzle.
                                </p>
                            </div>

                            <div className="takeaways-context-item">
                                <div className="context-item-header key-challenges-overcome">
                                    <SparklesIcon className="sparkles-icon" />
                                    <h4>Personal reflections</h4>
                                </div>
                                <p>
                                    This project was one of the most comprehensive branding experiences I’ve led. The opportunity to modernize a long-standing organization’s identity, create measurable impact, and empower internal teams to confidently use the brand system was deeply meaningful. I’m proud to have delivered a solution that balances professionalism, clarity, and flexibility while elevating SecureWorld’s presence in the cybersecurity space.
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
                            There are several ways the SecureWorld brand system could evolve as the organization continues to expand and engage its audiences:
                        </p>

                        <div className="context-item-container">

                            <div className="growth-context-item">
                                <div className="context-item-header lessons-learned">
                                    <TrendingUpIcon className="trendingup-icon" />
                                    <h4>Expanded multimedia capabilities</h4>
                                </div>
                                <p>
                                    Developing more advanced motion graphics, animated templates, and short-form video assets could enhance engagement across digital channels and event presentations.
                                </p>
                            </div>

                            <div className="growth-context-item">
                                <div className="context-item-header key-challenges-overcome">
                                    <TrendingUpIcon className="trendingup-icon" />
                                    <h4>Interactive digital experiences</h4>
                                </div>
                                <p>
                                    Creating interactive web features, data visualizations, or immersive event content could deepen audience understanding of complex cybersecurity topics while reinforcing brand authority.
                                </p>
                            </div>

                            <div className="growth-context-item">
                                <div className="context-item-header key-challenges-overcome">
                                    <TrendingUpIcon className="trendingup-icon" />
                                    <h4>Refined internal templates</h4>
                                </div>
                                <p>
                                    As departments’ needs evolve, updating templates and guides for presentations, emails, and collateral will ensure ongoing usability and consistency, making it easier for teams to maintain the brand independently.
                                </p>
                            </div>

                            <div className="growth-context-item">
                                <div className="context-item-header key-challenges-overcome">
                                    <TrendingUpIcon className="trendingup-icon" />
                                    <h4>Extended brand expression</h4>
                                </div>
                                <p>
                                    Expanding the visual system with new iconography, illustration sets, or photography styles could allow the brand to adapt to emerging campaigns, new services, or specialized audiences while maintaining cohesion.
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            <section class="cta-section">

                <div class="cta-options">

                    <div class="cta-option">
                        <p><a href="https://www.linkedin.com/in/cheyenna-raelynn/" target="_blank">View LinkedIn</a></p>
                    </div>

                    <div class="cta-option">
                        <p><a href="https://www.instagram.com/raeofchey/" target="_blank">View Instagram</a></p>
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

export default SecureworldCaseStudy;
