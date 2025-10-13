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
import TimelineItem from "../components/Timeline";
import CaseStudyImage from "../components/CaseStudyImage";

import SecureWorldHeaderImage from '../assets/secureworld-branding/SecureWorld Marketing Collateral Thumbnail Image.png';
import CaseStudyImage1 from '../assets/secureworld-branding/SW Marketing Case Study Image1.png';
import CaseStudyImage2 from '../assets/secureworld-branding/SW Marketing Case Study Image2.png';
import CaseStudyImage3 from '../assets/secureworld-branding/SW Marketing Case Study Image3.png';
import CaseStudyImage4 from '../assets/secureworld-branding/SW Marketing Case Study Image4.png';
import CaseStudyImage5 from '../assets/secureworld-branding/SW Marketing Case Study Image5.png';
import CaseStudyImage6 from '../assets/secureworld-branding/SW Marketing Case Study Image6.png';
import CaseStudyImage7 from '../assets/secureworld-branding/SW Marketing Case Study Image7.png';
import CaseStudyImage8 from '../assets/secureworld-branding/SW Marketing Case Study Image8.png';
import CaseStudyImage9 from '../assets/secureworld-branding/SW Marketing Case Study Image9.png';
import CaseStudyImage10 from '../assets/secureworld-branding/SW Marketing Case Study Image10.png';
import CaseStudyImage11 from '../assets/secureworld-branding/SW Marketing Case Study Image11.png';
import CaseStudyImage12 from '../assets/secureworld-branding/SW Marketing Case Study Image12.png';
import CaseStudyImage13 from '../assets/secureworld-branding/SW Marketing Case Study Image13.png';
import CaseStudyImage14 from '../assets/secureworld-branding/SW Marketing Case Study Image14.png';
import CaseStudyImage15 from '../assets/secureworld-branding/SW Marketing Case Study Image15.png';
import CaseStudyImage16 from '../assets/secureworld-branding/SW Marketing Case Study Image16.png';
import CaseStudyImage22 from '../assets/secureworld-branding/SW Marketing Case Study Image22.png';
import CaseStudyImage23 from '../assets/secureworld-branding/SW Marketing Case Study Image23.png';
import CaseStudyImage24 from '../assets/secureworld-branding/SW Marketing Case Study Image24.png';
import CaseStudyImage25 from '../assets/secureworld-branding/SW Marketing Case Study Image25.png';
import CaseStudyImage26 from '../assets/secureworld-branding/SW Marketing Case Study Image26.png';
import CaseStudyImage27 from '../assets/secureworld-branding/SW Marketing Case Study Image27.png';
import CaseStudyImage28 from '../assets/secureworld-branding/SW Marketing Case Study Image28.png';
import CaseStudyImage29 from '../assets/secureworld-branding/SW Marketing Case Study Image29.png';
import CaseStudyImage30 from '../assets/secureworld-branding/SW Marketing Case Study Image30.png';
import CaseStudyImage31 from '../assets/secureworld-branding/SW Marketing Case Study Image31.png';
import CaseStudyImage32 from '../assets/secureworld-branding/SW Marketing Case Study Image32.png';
import CaseStudyImage33 from '../assets/secureworld-branding/SW Marketing Case Study Image33.png';
import CaseStudyImage34 from '../assets/secureworld-branding/SW Marketing Case Study Image34.png';
import CaseStudyImage35 from '../assets/secureworld-branding/SW Marketing Case Study Image35.png';
import CaseStudyImage36 from '../assets/secureworld-branding/SW Marketing Case Study Image36.png';
import CaseStudyImage37 from '../assets/secureworld-branding/SW Marketing Case Study Image37.png';
import CaseStudyImage38 from '../assets/secureworld-branding/SW Marketing Case Study Image38.png';
import CaseStudyImage39 from '../assets/secureworld-branding/SW Marketing Case Study Image39.png';
import CaseStudyVideo40 from '../assets/secureworld-branding/SW Marketing Case Study Image40.mp4';

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
                        <h2 className="case-study-subtitle">Building a cohesive brand system that unified fragmented touchpoints, strengthened credibility, and increased digital engagement.</h2>

                        {/* <div className="links">
                            <a href="https://www.itascacg.com/about/careers-main" target="_blank">View Live</a>
                        </div> */}
                    </div>

                    <div className="case-study-header-right">
                        <img
                            id="norseman-nuptials-header-image"
                            src={SecureWorldHeaderImage}
                            alt="A preview of SecureWorld's new pattern as part of their brand system."
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

            <section className="challenge-section-header">
                <div className="itasca-software-impact-outcome-section-left">
                    <h3 className="impacts-header">Results That Moved The Needle</h3>
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
                            SecureWorld is a recognized leader in the cybersecurity industry, best known for its nationwide conference series that brings professionals together to share knowledge and stay ahead of emerging threats.
                        </p>
                        <p id="section-intro">
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
                    <h3>How The Brand Came to Life</h3>
                </div>

                <div className="section-right">
                    <p id="section-intro">
                        The solution transforms the organization's cybersecurity presence into a cohesive, professional, and flexible system that communicates authority, credibility, and clarity. It positions SecureWorld as a modern, trustworthy leader in cybersecurity while providing internal teams with the tools to implement the brand consistently across print, digital, and multimedia channels.
                    </p>

                    <div className="context-item-container">
                        <div id="end-result" className="solution-context-item">
                            <div className="context-item-header clear-actionable-design">
                                <UsersIcon className="users-icon" />
                                <h4>Solving the Challenge</h4>
                            </div>

                            <p id="intro-redesign" className="redesign-description">
                                The design directly addressed key brand challenges by:
                                <ul>
                                    <li>
                                        Modular templates, grid systems, and layout standards ensure consistency across brochures, social media, presentations, and multimedia assets, reducing fragmentation and confusion.
                                    </li>
                                    <li>
                                        A consolidated color palette, clean typography, and professional photography communicate authority and trust, reinforcing SecureWorld’s thought leadership in cybersecurity.
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

                        <p className="section-label">Digital Collateral</p>

                        <p className="sub-section-label">Slide Deck Templates</p>

                        <div className="image-section">
                            <div className="two-image-row">
                                <img
                                    src={CaseStudyImage13}
                                    alt="Editable slide deck template design"
                                    className="logo-img"
                                />
                                <img
                                    src={CaseStudyImage14}
                                    alt="Editable slide deck template design"
                                    className="logo-img"
                                />
                            </div>
                            <div className="two-image-row">
                                <img
                                    src={CaseStudyImage15}
                                    alt="Editable slide deck template design"
                                    className="logo-img"
                                />
                                <img
                                    src={CaseStudyImage16}
                                    alt="Editable slide deck template design"
                                    className="logo-img"
                                />
                            </div>

                            <p id="image-caption">
                                Editable slide deck templates designed for other departments. Easy to customize while staying cohesive, branded, and visually engaging, ensuring every team presentation looks polished and professional.
                            </p>
                        </div>

                        <p className="sub-section-label">Google Ads</p>

                        <div className="image-section">
                            <div className="one-image-row">
                                <img
                                    src={CaseStudyImage22}
                                    alt="The image shows a set of Google display ad designs: large rectangle, medium rectangle, wide skyscraper, half page, and leaderboard, created to deliver a consistent, visually compelling brand presence across multiple formats and placements."
                                />

                                <p id="image-caption">
                                    A set of Google display ad designs: large rectangle, medium rectangle, wide skyscraper, half page, and leaderboard, created to deliver a consistent, visually compelling brand presence across multiple formats and placements.
                                </p>
                            </div>
                        </div>

                        <p className="sub-section-label">Social Media</p>

                        <div className="image-section">
                            <div className="two-image-row">
                                <img
                                    src={CaseStudyImage23}
                                    alt=" Social media graphics designed to promote upcoming events and engage audiences."
                                    className="logo-img"
                                />
                                <img
                                    src={CaseStudyImage24}
                                    alt=" Social media graphics designed to promote upcoming events and engage audiences."
                                    className="logo-img"
                                />
                            </div>
                            <div className="two-image-row">
                                <img
                                    src={CaseStudyImage25}
                                    alt=" Social media graphics designed to promote upcoming events and engage audiences."
                                    className="logo-img"
                                />
                                <img
                                    src={CaseStudyImage26}
                                    alt=" Social media graphics designed to promote upcoming events and engage audiences."
                                    className="logo-img"
                                />
                            </div>
                            <div className="two-image-row">
                                <img
                                    src={CaseStudyImage27}
                                    alt=" Social media graphics designed to promote upcoming events and engage audiences."
                                    className="logo-img"
                                />
                                <img
                                    src={CaseStudyImage28}
                                    alt=" Social media graphics designed to promote upcoming events and engage audiences."
                                    className="logo-img"
                                />
                            </div>

                            <p id="image-caption">
                                Social media graphics designed to promote upcoming events and engage audiences, including quarterly agendas, remote session promos, executive roundtable dinners, speaker highlights, quotes, and in-person conference promotions.
                            </p>
                        </div>

                        <p className="sub-section-label">Infographics</p>

                        <div className="image-section">
                            <div className="one-image-row">
                                <img
                                    src={CaseStudyImage29}
                                    alt="Infographic designs highlighting key event metrics such as number of conferences, sessions, speakers, locations, attendees, vendors, and sponsors—making complex data clear and visually engaging."
                                />
                            </div>
                            <div className="one-image-row">
                                <img
                                    src={CaseStudyImage30}
                                    alt="Infographic designs highlighting key event metrics such as number of conferences, sessions, speakers, locations, attendees, vendors, and sponsors—making complex data clear and visually engaging."
                                />
                            </div>
                            <p id="image-caption" className="left">
                                Infographic designs highlighting key event metrics such as number of conferences, sessions, speakers, locations, attendees, vendors, and sponsors, making complex data clear and visually engaging.
                            </p>
                        </div>

                        <p className="sub-section-label">Website Banners</p>

                        <div className="image-section">
                            <div className="one-image-row">
                                <img
                                    src={CaseStudyImage31}
                                    alt="Website banners created to promote conferences and events, ensuring consistent branding and strong visual impact across digital touchpoints."
                                />
                            </div>
                            <div className="one-image-row">
                                <img
                                    src={CaseStudyImage32}
                                    alt="Website banners created to promote conferences and events, ensuring consistent branding and strong visual impact across digital touchpoints."
                                />

                            </div>
                            <div className="one-image-row">
                                <img
                                    src={CaseStudyImage33}
                                    alt="Website banners created to promote conferences and events, ensuring consistent branding and strong visual impact across digital touchpoints."
                                />
                            </div>
                            <p id="image-caption" className="left">
                                Website banners created to promote conferences and events, ensuring consistent branding and strong visual impact across digital touchpoints.
                            </p>

                        </div>

                        <p className="sub-section-label">Signage</p>

                        <div className="image-section">
                            <div className="two-image-row">
                                <img
                                    src={CaseStudyImage34}
                                    alt="Digital signage designs for in-person events, featuring live conference schedules and sponsor recognition to guide and inform attendees onsite."
                                    className="logo-img"
                                />
                                <img
                                    src={CaseStudyImage35}
                                    alt="Digital signage designs for in-person events, featuring live conference schedules and sponsor recognition to guide and inform attendees onsite."
                                    className="logo-img"
                                />
                            </div>
                            <p id="image-caption" className="left">
                                Digital signage designs for in-person events, featuring live conference schedules and sponsor recognition to guide and inform attendees onsite.
                            </p>
                        </div>

                        <p className="sub-section-label">Email Templates</p>

                        <div className="image-section">
                            <div className="two-image-row">
                                <img
                                    src={CaseStudyImage37}
                                    alt="Email templates designed for a variety of needs—virtual conferences, remote webcasts, in-person events, and newsletters—each optimized for clarity, branding, and engagement."
                                    className="logo-img"
                                />
                                <img
                                    src={CaseStudyImage38}
                                    alt="Email templates designed for a variety of needs—virtual conferences, remote webcasts, in-person events, and newsletters—each optimized for clarity, branding, and engagement."
                                    className="logo-img"
                                />
                            </div>
                            <div className="two-image-row">
                                <img
                                    src={CaseStudyImage36}
                                    alt="Email templates designed for a variety of needs—virtual conferences, remote webcasts, in-person events, and newsletters—each optimized for clarity, branding, and engagement."
                                    className="logo-img"
                                />
                                <img
                                    src={CaseStudyImage39}
                                    alt="Email templates designed for a variety of needs—virtual conferences, remote webcasts, in-person events, and newsletters—each optimized for clarity, branding, and engagement."
                                    className="logo-img"
                                />
                            </div>
                            <p id="image-caption" className="left">
                                Email templates designed for a variety of needs. virtual conferences, remote webcasts, in-person events, and newsletters, each optimized for clarity, branding, and engagement.
                            </p>
                        </div>

                        <p className="sub-section-label">Videography</p>

                        <div className="image-section">
                            <div className="one-image-row">
                                <video
                                    src={CaseStudyVideo40}
                                    alt="Promotional video showcasing conference highlights, including the location, featured speakers, and sessions—designed to build excitement and drive attendance."
                                    controls
                                    autoPlay
                                    loop
                                    muted
                                    style={{ width: "100%", height: "auto" }}
                                />

                                <p id="image-caption">
                                    Promotional video showcasing conference highlights, including the location, featured speakers, and sessions, designed to build excitement and drive attendance.
                                </p>
                            </div>
                        </div>



                        <p className="section-label">Print Collateral</p>

                        <p className="sub-section-label">Sponsorship Prospectus</p>

                        <div className="image-section">
                            <div className="two-image-row">
                                <img
                                    src={CaseStudyImage1}
                                    alt="SecureWorld 2023 Sponsorship Prospectus title page"
                                    className="logo-img"
                                />
                                <img
                                    src={CaseStudyImage2}
                                    alt="SecureWorld 2023 Sponsorship Prospectus in-person conference event schedule and pricing"
                                    className="logo-img"
                                />
                            </div>

                            <p id="image-caption">
                                A preview of the SecureWorld sponsorship prospectus, designed to clearly communicate opportunities, highlight brand credibility, and engage potential partners with a cohesive, visually compelling layout.
                            </p>

                            <div className="links">
                                <a href="/assets/SecureWorld 2023 Marketing Sponsorhsip Prospectus.pdf" target="_blank" rel="noopener noreferrer">
                                    View Full PDF
                                </a>
                            </div>
                        </div>


                        <p className="sub-section-label">Sponsorship Flyer</p>

                        <div className="image-section">
                            <div className="two-image-row">
                                <img
                                    src={CaseStudyImage3}
                                    alt="A preview of the front and back designs of the sponsorship flyer, that clearly communicate the event’s purpose, audience reach data, schedule, and contact information. Designed for in-person distribution, the layout highlights opportunities for engagement and reinforces brand credibility."
                                    className="logo-img"
                                />
                                <img
                                    src={CaseStudyImage4}
                                    alt="A preview of the front and back designs of the sponsorship flyer, that clearly communicate the event’s purpose, audience reach data, schedule, and contact information. Designed for in-person distribution, the layout highlights opportunities for engagement and reinforces brand credibility."
                                    className="logo-img"
                                />
                            </div>

                            <p id="image-caption">
                                A preview of the front and back designs of the sponsorship flyer, that clearly communicate the event’s purpose, audience reach data, schedule, and contact information. Designed for in-person distribution, the layout highlights opportunities for engagement and reinforces brand credibility.
                            </p>
                        </div>

                        <p className="sub-section-label">More Flyers</p>

                        <div className="image-section">
                            <div className="two-image-row">
                                <img
                                    src={CaseStudyImage5}
                                    alt="A preview of the SecureWorld Advisory Council flyer, designed to highlight the council’s mission, membership benefits, and opportunities for industry engagement. The layout communicates credibility, thought leadership, and ways for professionals to get involved."
                                    className="logo-img"
                                />
                                <img
                                    src={CaseStudyImage6}
                                    alt="A preview of the SecureWorld '10 Top Reasons to Attend' flyer, visually presenting key benefits of participating in SecureWorld events. The design emphasizes networking, education, and professional growth, while maintaining a clear, brand-forward layout for easy readability at in-person events."
                                    className="logo-img"
                                />
                            </div>

                            <p id="image-caption">
                                Previews of marketing flyers for the 'Advisory Council' and '10 Top Reasons to Attend' designs. Each layout communicates brand credibility, event purpose, audience reach, and opportunities for engagement, optimized for in-person distribution.
                            </p>
                        </div>

                        <p className="sub-section-label">Signage</p>

                        <div className="image-section">
                            <div className="two-image-row">
                                <img
                                    src={CaseStudyImage7}
                                    alt="Printed signage displaying SecureWorld in-person conference registration pass types, comparing benefits and features for attendees."
                                    className="logo-img"
                                />
                                <img
                                    src={CaseStudyImage8}
                                    alt="Printed signage highlighting SecureWorld Executive Roundtable events and showcasing the featured cybersecurity sponsor."
                                    className="logo-img"
                                />
                            </div>

                            <p id="image-caption">
                                Previews of printed signage, including registration pass comparisons and Executive Roundtable sponsor highlights. Designed for in-person events, the signs clearly communicate event options, benefits, and sponsor recognition.
                            </p>
                        </div>

                        <p className="sub-section-label">Handouts</p>

                        <div className="image-section">
                            <div className="two-image-row">
                                <img
                                    src={CaseStudyImage9}
                                    alt="Printed handout for SecureWorld conference exhibitors with setup timeline, logistics, and step-by-step instructions for booth preparation."
                                    className="logo-img"
                                />
                                <img
                                    src={CaseStudyImage10}
                                    alt="Printed handout for SecureWorld sponsors explaining participation in the Dash for Prizes contest, including rules and engagement details."
                                    className="logo-img"
                                />
                            </div>

                            <p id="image-caption">
                                Previews of printed handouts created for exhibitors and sponsors. These resources provide clear setup instructions and event participation guidelines to ensure smooth logistics and strong engagement.
                            </p>
                        </div>

                        <p className="sub-section-label">Business Card</p>

                        <div className="image-section">
                            <div className="two-image-row">
                                <img
                                    src={CaseStudyImage11}
                                    alt="Front business card design"
                                    className="logo-img"
                                />
                                <img
                                    src={CaseStudyImage12}
                                    alt="Back business card design"
                                    className="logo-img"
                                />
                            </div>

                            <p id="image-caption">
                                Previews of the business card design, created to provide a professional and consistent brand presence when connecting with industry leaders, partners, and attendees.
                            </p>
                        </div>

                        <div id="end-result" className="solution-context-item">
                            <div className="context-item-header clear-actionable-design">
                                <CircleCheckIcon className="circle-check-icon" />
                                <h4>Elevating the experience</h4>
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
                                <h4>Results</h4>
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
                    <h3 className="approach-header">My Process To Bring The Vision To Life</h3>
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
                    <h3>From Concept To Launch</h3>
                </div>

                <div className="section-right">
                    <TimelineItem title="Months 1–3 Discovery & Brand Audit">
                        <ul>
                            <li>Met with leadership and marketing teams to understand the organization’s goals, workflows, and pain points.</li>
                            <li>Reviewed existing brand assets to identify inconsistencies and gaps across print, digital, and multimedia.</li>
                            <li>Conducted competitive benchmarking to define opportunities for differentiation and modernized visual positioning.</li>
                        </ul>
                    </TimelineItem>

                    <TimelineItem title="Months 4–6 Concept Exploration & System Development">
                        <ul>
                            <li>Expanded and refined the latest SecureWorld branding into multiple visual directions.</li>
                            <li>Developed initial typography, color palette, iconography, illustration styles, and layout standards.</li>
                            <li>Iterated concepts based on stakeholder feedback, ensuring flexibility and usability across departments.</li>
                        </ul>
                    </TimelineItem>

                    <TimelineItem title="Months 7–10 Brand Identity Finalization">
                        <ul>
                            <li>Finalized logo suite, typography system, core color palette, and supporting visual elements like patterns, textures, and photography standards.</li>
                            <li>Documented the brand system in comprehensive guides and templates for print, digital, and multimedia applications.</li>
                            <li>Conducted collaborative review sessions with internal teams to confirm functionality and ease of implementation.</li>
                        </ul>
                    </TimelineItem>

                    <TimelineItem title="Months 11–13 Collateral Design & Multimedia Implementation">
                        <ul>
                            <li>Designed and delivered a wide range of collateral, including brochures, flyers, social media assets, presentations, email templates, event signage, and video content.</li>
                            <li>Created modular, adaptable templates to streamline content creation for marketing and event teams.</li>
                            <li>Provided hands-on guidance and walkthroughs to ensure teams could confidently use the new brand system.</li>
                        </ul>
                    </TimelineItem>

                    <TimelineItem title="Months 14–15 Maintenance, Updates & Iteration">
                        <ul>
                            <li>Continuously updated templates, graphics, and assets based on evolving campaign needs and stakeholder feedback.</li>
                            <li>Ensured the brand system remained consistent, functional, and relevant across all touchpoints.</li>
                            <li>Worked with departments to troubleshoot implementation issues and refine guidelines as new formats or mediums were introduced.</li>
                        </ul>
                    </TimelineItem>
                </div>
            </section>

            <section className="section-title">

                <div className="problem-section-header">
                    <div className="section-left">
                        <h3>Overcoming Challenges</h3>
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

            <section className="section-title">

                <div className="problem-section-header">
                    <div className="itasca-software-takeaways-section-left">
                        <h3 className="takeaways-header">Design Lessons That Stick</h3>
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
                        <h3>Where To Go Next</h3>
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
