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
                        SecureWorld is a cybersecurity conference platform connecting industry leaders, practitioners, and innovators. After several past rebrands failed to take hold, this project focused on refining and expanding the existing system rather than starting over to strengthen cohesion, usability, and credibility across every touchpoint while ensuring the brand could finally be implemented effectively.
                    </p>

                    <div className="context-item-container">

                        <div className="impact-context-item">
                            <div className="context-item-header clear-actionable-design">
                                <CircleCheckIcon className="circle-check-icon" />
                                <h4>Outcomes</h4>
                            </div>
                            <p id="outcome-list" className="outcome-list">
                                <ul>
                                    <li>60% increase in digital engagement across social and email, reflecting stronger audience connection and recognition.</li>
                                    <li>35% higher response rates for brochures and flyers, driven by improved clarity and hierarchy.</li>
                                    <li>50% increase in video viewer retention, proving the impact of cohesive motion design.</li>
                                    <li>Internal teams fully adopted templates and guidelines, streamlining production and maintaining brand consistency.</li>
                                    <li>Stakeholders praised the new system’s clarity, professionalism, and ease of use, noting it finally unified the brand across every channel.</li>
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
                            SecureWorld aimed to create a brand and marketing experience that would:
                        </p>

                        <div className="context-item-container">

                            <div className="user-problems-context-item">
                                <div className="context-item-header clear-actionable-design">
                                    <CircleCheckIcon className="circle-check-icon" />
                                    <h4>Unify the brand across channels</h4>
                                </div>
                                <p>
                                    Build a cohesive visual system for print, digital, and multimedia assets, ensuring every department could implement the brand consistently and maintain a unified presence.
                                </p>
                            </div>

                            <div className="user-problems-context-item">
                                <div className="context-item-header clear-actionable-design">
                                    <CircleCheckIcon className="circle-check-icon" />
                                    <h4>Elevate credibility and recognition</h4>
                                </div>
                                <p>
                                    Modernize the brand while preserving trust and professionalism, positioning SecureWorld as a credible leader in cybersecurity and reinforcing expertise at every touchpoint.
                                </p>
                            </div>

                            <div className="user-problems-context-item">
                                <div className="context-item-header clear-actionable-design">
                                    <CircleCheckIcon className="circle-check-icon" />
                                    <h4>Empower internal teams</h4>
                                </div>
                                <p>
                                    Equip departments with templates, guides, and a flexible system to create on-brand materials efficiently, reducing reliance on ad-hoc design and external vendors.
                                </p>
                            </div>

                            <div className="user-problems-context-item">
                                <div className="context-item-header clear-actionable-design">
                                    <CircleCheckIcon className="circle-check-icon" />
                                    <h4>Create a sustainable, future-proof system</h4>
                                </div>
                                <p>
                                    Develop a scalable brand system that can evolve with SecureWorld while maintaining visual integrity and avoiding the fragmentation of past rebrands.
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
                        Refine and expand SecureWorld’s existing brand into a cohesive, scalable system that strengthens credibility, empowers internal teams, and enhances audience engagement, allowing the organization to be consistently represented as a trusted, modern leader in cybersecurity education.
                    </p>
                </div>
            </section>


            <section className="challenge-section-header">
                <div className="kelvix-solution-header-section-left">
                    <h3>How The Brand Came to Life</h3>
                </div>

                <div className="section-right">
                    <p id="section-intro">
                        The project amplified the existing brand, refining its structure and expanding the system to create a cohesive, professional, and flexible identity. The goal was to communicate authority and credibility while providing internal teams with the tools to consistently implement the brand across print, digital, and multimedia channels.
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
                                        Modular templates, grid systems, and layout standards ensure consistency across brochures, social media, presentations, and multimedia assets.
                                    </li>
                                    <li>
                                        A consolidated color palette, clean typography, and professional photography communicate trust and expertise.
                                    </li>
                                    <li>
                                        Scalable templates, guides, and documentation empower internal teams to produce on-brand content efficiently.
                                    </li>
                                    <li>
                                        Custom illustrations and iconography simplify complex cybersecurity concepts for diverse audiences.
                                    </li>
                                </ul>
                            </p>
                        </div>

                        <p className="section-label">Digital Collateral</p>

                        <p className="sub-section-label">Slide Deck Templates</p>

                        <div className="two-in-a-row">

                            <CaseStudyImage
                                src={CaseStudyImage13}
                                alt="Editable SecureWorld slide deck templates that maintain brand consistency across internal presentations while allowing flexible content customization."
                                caption="Editable slide deck templates that stay cohesive, branded, and visually engaging while allowing easy customization for polished, professional presentations."
                            />
                            <CaseStudyImage
                                src={CaseStudyImage14}
                                alt="Editable SecureWorld slide deck templates that maintain brand consistency across internal presentations while allowing flexible content customization."
                                caption="Editable slide deck templates that stay cohesive, branded, and visually engaging while allowing easy customization for polished, professional presentations."
                            />
                            <CaseStudyImage
                                src={CaseStudyImage15}
                                alt="Editable SecureWorld slide deck templates that maintain brand consistency across internal presentations while allowing flexible content customization."
                                caption="Editable slide deck templates that stay cohesive, branded, and visually engaging while allowing easy customization for polished, professional presentations."
                            />
                            <CaseStudyImage
                                src={CaseStudyImage16}
                                alt="Editable SecureWorld slide deck templates that maintain brand consistency across internal presentations while allowing flexible content customization."
                                caption="Editable slide deck templates that stay cohesive, branded, and visually engaging while allowing easy customization for polished, professional presentations."
                            />
                        </div>

                        <p className="sub-section-label">Google Ads</p>

                        <CaseStudyImage
                            src={CaseStudyImage22}
                            alt="SecureWorld Google display ad suite showcasing consistent branding across multiple ad formats and digital placements."
                            caption="Google display ad suite showcasing a consistent, high-impact brand presence across every format and placement."
                        />

                        <p className="sub-section-label">Social Media</p>

                        <div className="two-in-a-row">

                            <CaseStudyImage
                                src={CaseStudyImage23}
                                alt="SecureWorld social media graphics promoting upcoming events, sessions, and speakers across digital channels."
                                caption="Graphics created to drive engagement and promote events—from upcoming events, sessions, and speakers across digital channels."
                            />
                            <CaseStudyImage
                                src={CaseStudyImage24}
                                alt="SecureWorld social media graphics promoting upcoming events, sessions, and speakers across digital channels."
                                caption="Graphics created to drive engagement and promote events—from upcoming events, sessions, and speakers across digital channels."
                            />
                            <CaseStudyImage
                                src={CaseStudyImage25}
                                alt="SecureWorld social media graphics promoting upcoming events, sessions, and speakers across digital channels."
                                caption="Graphics created to drive engagement and promote events—from upcoming events, sessions, and speakers across digital channels."
                            />
                            <CaseStudyImage
                                src={CaseStudyImage26}
                                alt="SecureWorld social media graphics promoting upcoming events, sessions, and speakers across digital channels."
                                caption="Graphics created to drive engagement and promote events—from upcoming events, sessions, and speakers across digital channels."
                            />
                            <CaseStudyImage
                                src={CaseStudyImage27}
                                alt="SecureWorld social media graphics promoting upcoming events, sessions, and speakers across digital channels."
                                caption="Graphics created to drive engagement and promote events—from upcoming events, sessions, and speakers across digital channels."
                            />
                            <CaseStudyImage
                                src={CaseStudyImage28}
                                alt="SecureWorld social media graphics promoting upcoming events, sessions, and speakers across digital channels."
                                caption="Graphics created to drive engagement and promote events—from upcoming events, sessions, and speakers across digital channels."
                            />
                        </div>

                        <p className="sub-section-label">Infographics</p>

                        <div className="two-in-a-row">
                            <CaseStudyImage
                                src={CaseStudyImage30}
                                alt="SecureWorld infographic summarizing event metrics with clear data visualization and branded design."
                                caption="Infographic designs that visualize key event metrics with clear data visualization and branded design."
                            />
                            <CaseStudyImage
                                src={CaseStudyImage29}
                                alt="SecureWorld infographic summarizing event metrics with clear data visualization and branded design."
                                caption="Infographic designs that visualize key event metrics with clear data visualization and branded design."
                            />
                        </div>

                        <p className="sub-section-label">Website Banners</p>

                        <CaseStudyImage
                            src={CaseStudyImage31}
                            alt="SecureWorld website banners promoting conferences with consistent brand style and visual energy."
                            caption="Website banners designed to promote conferences and events, unifying digital touchpoints through brand style and visual energy"
                        />
                        <CaseStudyImage
                            src={CaseStudyImage32}
                            alt="SecureWorld website banners promoting conferences with consistent brand style and visual energy."
                            caption="Website banners designed to promote conferences and events, unifying digital touchpoints through brand style and visual energy"
                        />
                        <CaseStudyImage
                            src={CaseStudyImage33}
                            alt="SecureWorld website banners promoting conferences with consistent brand style and visual energy."
                            caption="Website banners designed to promote conferences and events, unifying digital touchpoints through brand style and visual energy"
                        />

                        <p className="sub-section-label">Signage</p>

                        <div className="two-in-a-row">
                            <CaseStudyImage
                                src={CaseStudyImage34}
                                alt="SecureWorld Digital signage for in-person events, featuring live schedules, wayfinding, and sponsor recognition to guide and inform attendees onsite."
                                caption="Digital signage displaying real-time schedules and sponsor recognition at live events."
                            />
                            <CaseStudyImage
                                src={CaseStudyImage25}
                                alt="SecureWorld Digital signage for in-person events, featuring live schedules, wayfinding, and sponsor recognition to guide and inform attendees onsite."
                                caption="Digital signage displaying real-time schedules and sponsor recognition at live events."
                            />
                        </div>

                        <p className="sub-section-label">Email Templates</p>

                        <div className="two-in-a-row">
                            <CaseStudyImage
                                src={CaseStudyImage39}
                                alt="SecureWorld email templates designed for virtual conferences, webcasts, in-person events, and newsletters—each optimized for clarity, brand consistency, and engagement."
                                caption="Email templates designed for virtual conferences, webcasts, in-person events, and newsletters—each optimized for clarity, brand consistency, and engagement."
                            />
                            <CaseStudyImage
                                src={CaseStudyImage37}
                                alt="SecureWorld email templates designed for virtual conferences, webcasts, in-person events, and newsletters—each optimized for clarity, brand consistency, and engagement."
                                caption="Email templates designed for virtual conferences, webcasts, in-person events, and newsletters—each optimized for clarity, brand consistency, and engagement."
                            />
                            <CaseStudyImage
                                src={CaseStudyImage36}
                                alt="SecureWorld email templates designed for virtual conferences, webcasts, in-person events, and newsletters—each optimized for clarity, brand consistency, and engagement."
                                caption="Email templates designed for virtual conferences, webcasts, in-person events, and newsletters—each optimized for clarity, brand consistency, and engagement."
                            />
                            <CaseStudyImage
                                src={CaseStudyImage38}
                                alt="SecureWorld email templates designed for virtual conferences, webcasts, in-person events, and newsletters—each optimized for clarity, brand consistency, and engagement."
                                caption="Email templates designed for virtual conferences, webcasts, in-person events, and newsletters—each optimized for clarity, brand consistency, and engagement."
                            />
                        </div>

                        <p className="sub-section-label">Videography</p>

                        <div className="image-section">
                            <div className="one-image-row">
                                <video
                                    src={CaseStudyVideo40}
                                    alt="SecureWorld promotional video highlighting conference atmosphere, speakers, and sessions—designed to build excitement and drive attendance."
                                    controls
                                    autoPlay
                                    loop
                                    muted
                                    style={{ width: "100%", height: "auto", backgroundColor: "#DDEAFF" }}
                                />

                                <p id="image-caption"
                                    style={{ backgroundColor: "#fff", padding: "10px", borderRadius: "10px", border: "2px solid #ddeaff" }}
                                >
                                    A high-energy promotional video highlighting conference atmosphere, speakers, and sessions—designed to build excitement and drive attendance.
                                </p>
                            </div>
                        </div>



                        <p className="section-label">Print Collateral</p>

                        <p className="sub-section-label">Sponsorship Prospectus</p>

                        <div className="two-in-a-row">

                            <CaseStudyImage
                                src={CaseStudyImage1}
                                alt="SecureWorld sponsorship document design communicating event details and engagement opportunities, highlighting event purpose, reach, and engagement opportunities with a clear, credible layout."
                                caption="Sponsorship document design communicating event details and engagement opportunities, highlighting event purpose, reach, and engagement opportunities with a clear, credible layout."
                            />
                            <CaseStudyImage
                                src={CaseStudyImage2}
                                alt="SecureWorld sponsorship document design communicating event details and engagement opportunities, highlighting event purpose, reach, and engagement opportunities with a clear, credible layout."
                                caption="Sponsorship document design communicating event details and engagement opportunities, highlighting event purpose, reach, and engagement opportunities with a clear, credible layout."
                            />
                        </div>

                        <div className="links">
                            <a href="/assets/SecureWorld 2023 Marketing Sponsorhsip Prospectus.pdf" target="_blank" rel="noopener noreferrer">
                                View Full PDF
                            </a>
                        </div>

                        <p className="sub-section-label">Sponsorship Flyer</p>

                        <div className="two-in-a-row">
                            <CaseStudyImage
                                src={CaseStudyImage3}
                                alt="SecureWorld Sponsorship flyer design for in-person distribution, highlighting event purpose, reach, and engagement opportunities with a clear, credible layout."
                                caption="Sponsorship flyer design for in-person distribution, highlighting event purpose, reach, and engagement opportunities with a clear, credible layout."
                            />
                            <CaseStudyImage
                                src={CaseStudyImage4}
                                alt="SecureWorld Sponsorship flyer design for in-person distribution, highlighting event purpose, reach, and engagement opportunities with a clear, credible layout."
                                caption="Sponsorship flyer design for in-person distribution, highlighting event purpose, reach, and engagement opportunities with a clear, credible layout."
                            />
                        </div>

                        <p className="sub-section-label">More Flyers</p>

                        <div className="two-in-a-row">
                            <CaseStudyImage
                                src={CaseStudyImage5}
                                alt="SecureWorld marketing flyers for the “Advisory Council” and “10 Top Reasons to Attend”, each layout communicates credibility, audience reach, and opportunities for engagement."
                                caption="Marketing flyers for the “Advisory Council” and “10 Top Reasons to Attend”, each layout communicates credibility, audience reach, and opportunities for engagement."
                            />
                            <CaseStudyImage
                                src={CaseStudyImage6}
                                alt="SecureWorld marketing flyers for the “Advisory Council” and “10 Top Reasons to Attend”, each layout communicates credibility, audience reach, and opportunities for engagement."
                                caption="Marketing flyers for the “Advisory Council” and “10 Top Reasons to Attend”, each layout communicates credibility, audience reach, and opportunities for engagement."
                            />
                        </div>

                        <p className="sub-section-label">Signage</p>

                        <div className="two-in-a-row">
                            <CaseStudyImage
                                src={CaseStudyImage7}
                                alt="SecureWorld printed signage for in-person events like registration pass comparisons and sponsor highlights, designed for clarity, hierarchy, and strong visual recognition."
                                caption="Printed signage for in-person events like registration pass comparisons and sponsor highlights, designed for clarity, hierarchy, and strong visual recognition."
                            />
                            <CaseStudyImage
                                src={CaseStudyImage7}
                                alt="SecureWorld printed signage for in-person events like registration pass comparisons and sponsor highlights, designed for clarity, hierarchy, and strong visual recognition."
                                caption="Printed signage for in-person events like registration pass comparisons and sponsor highlights, designed for clarity, hierarchy, and strong visual recognition."
                            />
                        </div>

                        <p className="sub-section-label">Handouts</p>

                        <div className="two-in-a-row">
                            <CaseStudyImage
                                src={CaseStudyImage9}
                                alt="SecureWorld printed handouts created for exhibitors and sponsors with clear setup instructions and participation guidelines to ensure smooth logistics and strong engagement."
                                caption="Printed handouts created for exhibitors and sponsors with clear setup instructions and participation guidelines to ensure smooth logistics and strong engagement."
                            />
                            <CaseStudyImage
                                src={CaseStudyImage10}
                                alt="SecureWorld printed handouts created for exhibitors and sponsors with clear setup instructions and participation guidelines to ensure smooth logistics and strong engagement."
                                caption="Printed handouts created for exhibitors and sponsors with clear setup instructions and participation guidelines to ensure smooth logistics and strong engagement."
                            />
                        </div>

                        <p className="sub-section-label">Business Card</p>

                        <div className="two-in-a-row">
                            <CaseStudyImage
                                src={CaseStudyImage11}
                                alt="SecureWorld business card design that reinforces brand consistency and professionalism when connecting with partners, sponsors, and industry leaders."
                                caption="Business card design that reinforces brand consistency and professionalism when connecting with partners, sponsors, and industry leaders."
                            />
                            <CaseStudyImage
                                src={CaseStudyImage12}
                                alt="SecureWorld business card design that reinforces brand consistency and professionalism when connecting with partners, sponsors, and industry leaders."
                                caption="Business card design that reinforces brand consistency and professionalism when connecting with partners, sponsors, and industry leaders."
                            />
                        </div>

                        <div id="end-result" className="solution-context-item">
                            <div className="context-item-header clear-actionable-design">
                                <CircleCheckIcon className="circle-check-icon" />
                                <h4>Elevating the experience</h4>
                            </div>
                            <p id="intro-redesign" className="redesign-description">
                                While meeting the original goals, the brand update also introduces:
                                <ul>
                                    <li>
                                        A scalable, flexible structure that evolves with future campaigns, interactive experiences, and event activations.
                                    </li>
                                    <li>
                                        Enhanced multimedia integration, including motion graphics, video templates, and looping animations, to boost engagement and retention.
                                    </li>
                                    <li>
                                        Custom icons, patterns, and photography standards that improve clarity, storytelling, and comprehension of technical topics.
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
                                The brand system is unified, professional, and adaptable. It strengthens SecureWorld’s credibility, streamlines workflows, and engages audiences across all touchpoints. The refreshed identity provides a sustainable, future-proof framework that supports digital, print, and event experiences while remaining flexible for growth.
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
                                <h4>Audience alignment</h4>
                            </div>
                            <p>
                                Established the visual tone through moodboards and creative direction that resonated with stakeholders, ensuring clarity, trust, and professionalism across all touchpoints.
                            </p>
                        </div>

                        <div className="approach-context-item">
                            <div className="context-item-header iteration-feedback">
                                <CircleCheckIcon className="circle-check-icon" />
                                <h4>Competitive contrast</h4>
                            </div>
                            <p>
                                Audited cybersecurity and conference brands to identify visual gaps, avoid clichés, and create a differentiated, modern identity that signals thought leadership.
                            </p>
                        </div>

                        <div className="approach-context-item">
                            <div className="context-item-header iteration-feedback">
                                <CircleCheckIcon className="circle-check-icon" />
                                <h4>Internal collaboration</h4>
                            </div>
                            <p>
                                Worked with marketing, sales, and events teams to understand workflows and pain points, ensuring the system addressed real-world needs and was practical for daily use.
                            </p>
                        </div>

                        <div className="approach-context-item">
                            <div className="context-item-header iteration-feedback">
                                <CircleCheckIcon className="circle-check-icon" />
                                <h4>Iterative feedback</h4>
                            </div>
                            <p>
                                Tested prototypes, templates, and draft assets with stakeholders to refine the system, confirm usability, and build buy-in across departments for consistent implementation.
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
                            <li>Met with leadership and marketing teams to understand goals, workflows, and pain points.</li>
                            <li>Reviewed existing assets to identify gaps and inconsistencies across print, digital, and multimedia.</li>
                            <li>Benchmarked competitors to uncover opportunities for differentiation and modern positioning.</li>
                        </ul>
                    </TimelineItem>

                    <TimelineItem title="Months 4–6 Concept Exploration & System Development">
                        <ul>
                            <li>Expanded and refined existing branding into multiple visual directions.</li>
                            <li>Developed typography, color palette, iconography, illustration styles, and layout standards.</li>
                            <li>Iterated concepts with stakeholder feedback to ensure flexibility and usability across teams.</li>
                        </ul>
                    </TimelineItem>

                    <TimelineItem title="Months 7–10 Brand Identity Finalization">
                        <ul>
                            <li>Finalized logos, typography, core colors, and supporting visual elements.</li>
                            <li>Documented the system in comprehensive guides and templates for print, digital, and multimedia.</li>
                            <li>Conducted collaborative reviews to confirm ease of implementation and practical functionality.</li>
                        </ul>
                    </TimelineItem>

                    <TimelineItem title="Months 11–13 Collateral Design & Multimedia Implementation">
                        <ul>
                            <li>Designed collateral including brochures, flyers, social media assets, presentations, email templates, event signage, and video content.</li>
                            <li>Created modular templates to streamline production across marketing and event teams.</li>
                            <li>Provided hands-on guidance to ensure teams could confidently implement the brand.</li>
                        </ul>
                    </TimelineItem>

                    <TimelineItem title="Months 14–15 Maintenance, Updates & Iteration">
                        <ul>
                            <li>Updated templates and assets based on evolving campaign needs and stakeholder feedback.</li>
                            <li>Ensured brand consistency and relevance across all touchpoints.</li>
                            <li>Refined guidelines as new formats or mediums emerged, keeping the system scalable and practical.</li>
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

                            <p id="section-intro">
                                A bold vision required transforming the established but fragmented brand into a cohesive, professional, and flexible system that could engage audiences, empower teams, and scale across touchpoints.
                            </p>

                            <div className="obstacles-context-item">
                                <div className="context-item-header obstacles">
                                    <CogIcon className="cog-icon" />
                                    <h4>Obstacles</h4>
                                </div>
                                <ul>
                                    <li>Translating complex cybersecurity content into clear, professional visuals.</li>
                                    <li>Fragmented assets and inconsistent usage across departments.</li>
                                    <li>Ensuring consistency across print, digital, social, and multimedia formats.</li>
                                    <li>Introducing new templates and workflows as a new designer while gaining stakeholder buy-in.</li>
                                </ul>
                            </div>

                            <div className="obstacles-context-item">
                                <div className="context-item-header milestones">
                                    <CircleCheckIcon className="circle-check-icon" />
                                    <h4>Milestones</h4>
                                </div>
                                <ul>
                                    <li>Unified brand system with logos, typography, color palette, patterns, and templates.</li>
                                    <li>Delivered comprehensive guides and templates for internal teams.</li>
                                    <li>Rolled out cohesive collateral across print, digital, and multimedia channels.</li>
                                    <li>Boosted engagement: 60% increase in digital, 35% higher brochure/flyer response, 50% higher video retention.</li>
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
                                    <li>Brand design requires usability and internal adoption as much as visual clarity.</li>
                                    <li>Professionalism, trust, and authority are communicated through color, type, imagery, and layout, not just logos.</li>
                                    <li>Flexible, scalable systems maintain cohesion across departments and touchpoints.</li>
                                </ul>
                            </div>

                            <div className="obstacles-context-item">
                                <div className="context-item-header obstacles">
                                    <FilePenLineIcon className="filepenline-icon" />
                                    <h4>Key challenges overcome</h4>
                                </div>
                                <ul>
                                    <li>Gaining internal buy-in as a new designer required patience, diplomacy, and clear demonstrations.</li>
                                    <li>Translating complex cybersecurity content into visuals that were clear, engaging, and credible across formats.</li>
                                    <li>Designing a system flexible enough to serve multiple audiences while maintaining consistency.</li>
                                </ul>
                            </div>

                            <div className="obstacles-context-item">
                                <div className="context-item-header obstacles">
                                    <FilePenLineIcon className="filepenline-icon" />
                                    <h4>Personal reflections</h4>
                                </div>
                                <ul>
                                    <li>Modernizing a long-standing identity while creating measurable impact was deeply meaningful.</li>
                                    <li>Empowering internal teams to confidently use the brand system reinforced its long-term value.</li>
                                    <li>Delivered a solution that balances professionalism, clarity, and flexibility, elevating the organizations presence in cybersecurity.</li>
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
                            As the organization continues to grow, the brand system can evolve to support new initiatives and deepen audience engagement:
                        </p>

                        <div className="context-item-container">

                            <div className="growth-context-item">
                                <div className="context-item-header lessons-learned">
                                    <TrendingUpIcon className="trendingup-icon" />
                                    <h4>Expanded multimedia capabilities</h4>
                                </div>
                                <p>
                                    Advanced motion graphics, animated templates, and short-form video can boost digital engagement and event experiences.
                                </p>
                            </div>

                            <div className="growth-context-item">
                                <div className="context-item-header key-challenges-overcome">
                                    <TrendingUpIcon className="trendingup-icon" />
                                    <h4>Interactive digital experiences</h4>
                                </div>
                                <p>
                                    Interactive web features, data visualizations, and immersive content can clarify complex cybersecurity topics and reinforce authority.
                                </p>
                            </div>

                            <div className="growth-context-item">
                                <div className="context-item-header key-challenges-overcome">
                                    <TrendingUpIcon className="trendingup-icon" />
                                    <h4>Refined internal templates</h4>
                                </div>
                                <p>
                                    Updating templates and guides ensures consistency, usability, and independence for internal teams.
                                </p>
                            </div>

                            <div className="growth-context-item">
                                <div className="context-item-header key-challenges-overcome">
                                    <TrendingUpIcon className="trendingup-icon" />
                                    <h4>Extended brand expression</h4>
                                </div>
                                <p>
                                    Adding new iconography, illustrations, or photography styles allows the brand to adapt to campaigns, services, and audiences while staying cohesive.
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
