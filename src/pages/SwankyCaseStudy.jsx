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

import SwankyHeaderImage from "../assets/swanky/Swanky Marketing Collateral Thumbnail Image.png";
import CaseStudyImage1 from '../assets/swanky/Swanky Case Study Image1.png';
import CaseStudyImage2 from '../assets/swanky/Swanky Case Study Image2.gif';
import CaseStudyImage3 from '../assets/swanky/Swanky Case Study Image3.png';
import CaseStudyImage4 from '../assets/swanky/Swanky Case Study Image4.png';
import CaseStudyImage5 from '../assets/swanky/Swanky Case Study Image5.png';
import CaseStudyImage6 from '../assets/swanky/Swanky Case Study Image6.png';
import CaseStudyImage7 from '../assets/swanky/Swanky Case Study Image7.png';
import CaseStudyImage8 from '../assets/swanky/Swanky Case Study Image8.png';
import CaseStudyImage9 from '../assets/swanky/Swanky Case Study Image9.gif';
import CaseStudyImage10 from '../assets/swanky/Swanky Case Study Image10.png';
import CaseStudyImage11 from '../assets/swanky/Swanky Case Study Image11.png';
import CaseStudyImage12 from '../assets/swanky/Swanky Case Study Image12.png';
import CaseStudyImage13 from '../assets/swanky/Swanky Case Study Image13.png';
import CaseStudyImage14 from '../assets/swanky/Swanky Case Study Image14.png';
import CaseStudyImage15 from '../assets/swanky/Swanky Case Study Image15.gif';
import CaseStudyImage16 from '../assets/swanky/Swanky Case Study Image16.gif';
import CaseStudyImage17 from '../assets/swanky/Swanky Case Study Image17.gif';
import CaseStudyVideo18 from '../assets/swanky/Swanky Case Study Image18.mp4';
import CaseStudyImage19 from '../assets/swanky/Swanky Case Study Image19.gif';
import CaseStudyImage20 from '../assets/swanky/Swanky Case Study Image20.png';
import CaseStudyImage21 from '../assets/swanky/Swanky Case Study Image21.png';
import CaseStudyImage22 from '../assets/swanky/Swanky Case Study Image22.png';

const SecureWorldConferenceThemeCaseStudy = () => {

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
                        <h2 className="case-study-subtitle">Refining a brand identity across marketing and product materials for cohesive, professional, and visually engaging communications that strengthened brand recognition.</h2>

                        {/* <div className="links">
                            <a href="https://www.itascacg.com/about/careers-main" target="_blank">View Live</a>
                        </div> */}
                    </div>

                    <div className="case-study-header-right">
                        <img
                            id="norseman-nuptials-header-image"
                            src={SwankyHeaderImage}
                            alt="A preview of SecureWorld's 2023 Conferenece Theme, featuring."
                            className="case-study-image"
                        />
                    </div>
                </div>

                <section className="section-title">
                    <div className="project-overview">
                        <p><strong>Client<br /></strong>Swanky</p>
                        <p><strong>Duration<br /></strong>9 months</p>
                        <p><strong>Completed<br /></strong>May 2022</p>
                        <p><strong>Roles<br /></strong>Graphic Designer, Digital Marketing Specialist</p>
                    </div>
                </section>
            </div>

            <section className="challenge-section-header">
                <div className="itasca-software-impact-outcome-section-left">
                    <h3 className="impacts-header">Results That Moved The Needle</h3>
                </div>

                <div className="section-right">
                    <p id="section-intro">
                        A global LED lighting manufacturer, Kelvix, needed to consistently apply their brand identity across marketing and product materials to strengthen visibility and credibility in a competitive market. This project implemented their existing brand system across documentation, campaigns, and digital assets, creating a cohesive and professional presence across all touchpoints.
                    </p>

                    <div className="context-item-container">

                        <div className="impact-context-item">
                            <div className="context-item-header clear-actionable-design">
                                <CircleCheckIcon className="circle-check-icon" />
                                <h4>Outcomes</h4>
                            </div>
                            <p id="outcome-list" className="outcome-list">
                                <ul>
                                    <li>Standardized product documents improved clarity and usability, reducing customer confusion and supporting confident purchasing decisions.</li>
                                    <li>Branded email and social campaigns increased visibility and engagement, creating a repeatable marketing system.</li>
                                    <li>Modular templates and reusable design assets improved internal efficiency and collaboration.</li>
                                    <li>Sales teams gained tools that bridged technical detail with marketing messaging, accelerating distributor and contractor conversations.</li>
                                    <li>The unified brand positioned Kelvix as credible and modern, laying a foundation for future growth.</li>
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
                            Kelvix aimed to modernize its brand and communications into an experience that would:
                        </p>

                        <div className="context-item-container">

                            <div className="user-problems-context-item">
                                <div className="context-item-header clear-actionable-design">
                                    <CircleCheckIcon className="circle-check-icon" />
                                    <h4>Drive competitive growth</h4>
                                </div>
                                <p>
                                    Ensure Kelvix could compete with established LED lighting players, not just in revenue, but in credibility and long-term market relevance.
                                </p>
                            </div>

                            <div className="user-problems-context-item">
                                <div className="context-item-header clear-actionable-design">
                                    <CircleCheckIcon className="circle-check-icon" />
                                    <h4>Build customer trust and transparency</h4>
                                </div>
                                <p>
                                    Show reliability and professionalism through clear, consistent communications, reinforcing confidence and repeat business.
                                </p>
                            </div>

                            <div className="user-problems-context-item">
                                <div className="context-item-header clear-actionable-design">
                                    <CircleCheckIcon className="circle-check-icon" />
                                    <h4>Establish a strong, modern brand identity</h4>
                                </div>
                                <p>
                                    Unify visual and messaging elements to reflect the company’s values and ambitions, standing out in a crowded industry.
                                </p>
                            </div>

                            <div className="user-problems-context-item">
                                <div className="context-item-header clear-actionable-design">
                                    <CircleCheckIcon className="circle-check-icon" />
                                    <h4>Empower marketing and communication</h4>
                                </div>
                                <p>
                                    Provide repeatable systems and assets that allow Kelvix to engage audiences consistently and scale campaigns efficiently.
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
                        Unify a fragmented brand presence into a modern, credible identity that would strengthen credibility, increase visibility in a competitive LED lighting market, and create a cohesive, professional presence that resonates with customers.
                    </p>
                </div>
            </section>


            <section className="challenge-section-header">
                <div className="kelvix-solution-header-section-left">
                    <h3>How The Brand Came to Life</h3>
                </div>

                <div className="section-right">
                    <p id="section-intro">
                        This project implemented the organization’s brand system across marketing and product materials, turning fragmented assets into a cohesive, professional presence. The work clarified messaging, strengthened visual consistency, and positioned Kelvix as a credible competitor in the LED lighting market.
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
                                        Created professional sales and marketing materials that improved client perception and trust.
                                    </li>
                                    <li>
                                        Standardized product specification documents that made technical details clear and persuasive.
                                    </li>
                                    <li>
                                        Unified all touchpoints including social, email, documentation, and collateral, under a cohesive system that signaled professionalism.
                                    </li>
                                    <li>
                                        Launched branded campaigns that increased visibility and engagement while providing a scalable framework for future initiatives.
                                    </li>
                                </ul>
                            </p>
                        </div>

                        <p className="section-label">Product Marketing Campaigns</p>

                        <p className="sub-section-label">Uniform Tape Assets</p>

                        <p id="image-caption">
                            A cohesive marketing campaign was built around the launch of Uniform Tape, spanning digital and print channels. Social media graphics, email promotions, product spec sheets, and installation guides all worked together to introduce the product, highlight its features, and support customers through adoption.
                        </p>

                        <div className="image-section">
                            <div className="one-image-row">
                                <img
                                    src={CaseStudyImage1}
                                    alt="The image shows x."
                                />

                            </div>
                        </div>

                        <div className="image-section">
                            <div className="one-image-row">
                                <img
                                    src={CaseStudyImage2}
                                    alt="The image shows x."
                                    style={{ boxShadow: "none" }}
                                />

                            </div>
                        </div>

                        <div className="image-section">
                            <div className="two-image-row">
                                <img
                                    src={CaseStudyImage3}
                                    alt="Editable slide deck template design"
                                    className="logo-img"
                                />
                                <img
                                    src={CaseStudyImage4}
                                    alt="Editable slide deck template design"
                                    className="logo-img"
                                />
                            </div>
                            <div className="two-image-row">
                                <img
                                    src={CaseStudyImage5}
                                    alt="Editable slide deck template design"
                                    className="logo-img"
                                />
                                <img
                                    src={CaseStudyImage22}
                                    alt="Editable slide deck template design"
                                    className="logo-img"
                                />
                            </div>
                        </div>

                        <div className="image-section">
                            <div className="two-image-row">
                                <img
                                    src={CaseStudyImage6}
                                    alt="Editable slide deck template design"
                                    className="logo-img"
                                />
                                <img
                                    src={CaseStudyImage7}
                                    alt="Editable slide deck template design"
                                    className="logo-img"
                                />
                            </div>

                        </div>

                        <p className="sub-section-label">CH-3000 Channel Assets</p>

                        <p id="image-caption">
                            The CH-3000 Channel launch was supported with a complete suite of marketing assets, including social media graphics, email campaigns, product spec sheets, and installation guides. Together, these materials created a consistent, informative campaign that introduced the product, educated customers, and streamlined adoption.
                        </p>

                        <div className="image-section">
                            <div className="one-image-row">
                                <img
                                    src={CaseStudyImage8}
                                    alt="The image shows x."
                                />
                            </div>
                        </div>

                        <div className="image-section">
                            <div className="one-image-row">
                                <img
                                    src={CaseStudyImage9}
                                    alt="The image shows x."
                                    style={{ boxShadow: "none" }}
                                />
                            </div>
                        </div>

                        <div className="image-section">
                            <div className="two-image-row">
                                <img
                                    src={CaseStudyImage10}
                                    alt="Editable slide deck template design"
                                    className="logo-img"
                                />
                                <img
                                    src={CaseStudyImage11}
                                    alt="Editable slide deck template design"
                                    className="logo-img"
                                />
                            </div>
                            <div className="two-image-row">
                                <img
                                    src={CaseStudyImage12}
                                    alt="Editable slide deck template design"
                                    className="logo-img"
                                />
                            </div>
                        </div>

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
                        </div>

                        <p className="sub-section-label">Luxium</p>

                        <div className="image-section">
                            <div className="one-image-row">
                                <img
                                    src={CaseStudyImage17}
                                    alt="The image shows x."
                                    style={{ boxShadow: "none" }}
                                />
                            </div>
                        </div>

                        <div className="image-section">
                            <video
                                src={CaseStudyVideo18}
                                alt="x"
                                controls
                                autoPlay
                                loop
                                muted
                                style={{ width: "100%", height: "auto" }}
                            />
                        </div>

                        <p id="image-caption" className="left">
                            The Luxium campaign was introduced through an email announcement and a video sneak peek, building anticipation ahead of the full product launch. These assets were designed to spark curiosity, highlight key product benefits, and generate early engagement with customers.
                        </p>

                        <p className="section-label">Services Marketing Campaigns</p>

                        <p className="sub-section-label">Rep Portal Assets</p>

                        <div className="image-section">
                            <div className="two-image-row">
                                <img
                                    src={CaseStudyImage15}
                                    alt="Editable slide deck template design"
                                    className="logo-img"
                                    style={{ boxShadow: "none" }}
                                />
                                <img
                                    src={CaseStudyImage16}
                                    alt="Editable slide deck template design"
                                    className="logo-img"
                                    style={{ boxShadow: "none" }}
                                />
                            </div>

                            <p id="image-caption">
                                The Rep Portal campaign launched with an email announcement and coordinated social media posts, highlighting the new platform and its benefits for customers. These assets introduced the tool, encouraged adoption, and reinforced the value of a streamlined digital experience.
                            </p>
                        </div>

                        <p className="sub-section-label">Newsletter Sign Up Email</p>

                        <div className="image-section">
                            <div className="one-image-row">
                                <img
                                    src={CaseStudyImage19}
                                    alt="The image shows x."
                                    style={{ boxShadow: "none" }}
                                />

                                <p id="image-caption">
                                    The newsletter sign-up email was designed to promote ongoing engagement by encouraging users to subscribe for updates, product news, and exclusive insights. It provided a clear call-to-action and emphasized the value of staying connected with the brand.
                                </p>
                            </div>
                        </div>

                        <p className="section-label">Documentation</p>

                        <p className="sub-section-label">Warranty</p>

                        <div className="image-section">
                            <div className="two-image-row">
                                <img
                                    src={CaseStudyImage20}
                                    alt="Editable slide deck template design"
                                    className="logo-img"
                                />
                                <img
                                    src={CaseStudyImage21}
                                    alt="Editable slide deck template design"
                                    className="logo-img"
                                />
                            </div>

                            <p id="image-caption">
                                Key company documents including warranties were updated to reflect the unified brand identity. Consistent layouts, typography, and visual cues ensured professionalism, clarity, and a cohesive experience across all customer-facing materials.
                            </p>
                        </div>

                        <div id="end-result" className="solution-context-item">
                            <div className="context-item-header clear-actionable-design">
                                <CircleCheckIcon className="circle-check-icon" />
                                <h4>Elevating the experience</h4>
                            </div>
                            <p id="intro-redesign" className="redesign-description">
                                Beyond meeting the initial goals, the design elevates the experience with:
                                <ul>
                                    <li>
                                        Introducing adaptable templates and reusable asset libraries to reduce production costs and streamline internal workflows.
                                    </li>
                                    <li>
                                        Designing visuals that felt authentic to Kelvix’s culture, making the brand approachable and human.
                                    </li>
                                    <li>
                                        Establishing a visual language that felt authentic, making the company’s brand more human and approachable.
                                    </li>
                                    <li>
                                        Anticipating client needs by building reusable asset libraries with long-term tools without relying heavily on external support.
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
                                The Kelvix brand system brought consistency and clarity across marketing and product materials, boosting engagement, streamlining workflows, and positioning the company as a credible, competitive force in the LED lighting industry.
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
                                <h4>Competitive positioning</h4>
                            </div>
                            <p>
                                Analyzed the LED lighting market to identify gaps and opportunities, positioning Kelvix as a forward-thinking alternative to established competitors.
                            </p>
                        </div>

                        <div className="approach-context-item">
                            <div className="context-item-header iteration-feedback">
                                <CircleCheckIcon className="circle-check-icon" />
                                <h4>Trust through clarity</h4>
                            </div>
                            <p>
                                Redesigned product specification documents with clear layouts and visuals, reducing confusion for customers and giving sales teams credible, persuasive tools.
                            </p>
                        </div>

                        <div className="approach-context-item">
                            <div className="context-item-header iteration-feedback">
                                <CircleCheckIcon className="circle-check-icon" />
                                <h4>Cohesive identity system</h4>
                            </div>
                            <p>
                                Unified color, typography, and imagery into a consistent brand language across all touchpoints, reinforcing a modern, trustworthy image.
                            </p>
                        </div>

                        <div className="approach-context-item">
                            <div className="context-item-header iteration-feedback">
                                <CircleCheckIcon className="circle-check-icon" />
                                <h4>Scalable marketing foundation</h4>
                            </div>
                            <p>
                                Created modular templates and reusable assets for campaigns, collateral, and presentations, enabling the team to maintain consistency and scale efficiently.
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
                    <TimelineItem title="Month 1-2 Discovery & Research">
                        <ul>
                            <li>DAudited competitors and industry trends to find opportunities and gaps.</li>
                            <li>Conducted stakeholder interviews to clarify goals and pain points.</li>
                            <li>Compiled insights to guide consistent brand application across all materials.</li>
                        </ul>
                    </TimelineItem>

                    <TimelineItem title="Month 3-4 Brand Implementation & Systemization">
                        <ul>
                            <li>Applied the updated brand across existing marketing and technical materials.</li>
                            <li>Expanded templates, tools, and collateral to create a cohesive system.</li>
                            <li>Collaborated with stakeholders to balance visual consistency with usability.</li>
                        </ul>
                    </TimelineItem>

                    <TimelineItem title="Month 5-6 Digital & Marketing Foundations">
                        <ul>
                            <li>Redesigned product documentation for clarity and brand alignment.</li>
                            <li>Developed reusable email and social media templates for scalable campaigns.</li>
                            <li>Updated digital assets to reflect the unified brand system.</li>
                        </ul>
                    </TimelineItem>

                    <TimelineItem title="Month 7-8 Campaign Development & Collateral Expansion">
                        <ul>
                            <li>Designed modular collateral, sales tools, and presentation decks.</li>
                            <li>Built reusable asset libraries to maintain brand consistency across campaigns.</li>
                            <li>Coordinated print and digital materials for professionalism and clarity.</li>
                        </ul>
                    </TimelineItem>

                    <TimelineItem title="Month 9 Finalization & Handoff">
                        <ul>
                            <li>Delivered design libraries, templates, and style guides for ongoing use.</li>
                            <li>Trained internal teams on applying the system effectively.</li>
                            <li>Supported coordinated marketing initiatives to ensure sustainable growth.</li>
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
                                Bringing the organization’s brand to life meant transforming a fragmented marketing presence into a cohesive, professional system, under tight deadlines and high expectations.
                            </p>

                            <div className="obstacles-context-item">
                                <div className="context-item-header obstacles">
                                    <CogIcon className="cog-icon" />
                                    <h4>Obstacles</h4>
                                </div>
                                <ul>
                                    <li>Adapting the updated brand across diverse materials without redesigning the core identity.</li>
                                    <li>Standardizing legacy documents and inconsistent assets while maintaining accuracy.</li>
                                    <li>Balancing technical precision with marketing appeal in product documentation.</li>
                                    <li>Building a marketing system from near-zero, creating templates and campaigns without pre-existing infrastructure.</li>
                                </ul>
                            </div>

                            <div className="obstacles-context-item">
                                <div className="context-item-header milestones">
                                    <CircleCheckIcon className="circle-check-icon" />
                                    <h4>Milestones</h4>
                                </div>
                                <ul>
                                    <li>Systematized the brand across documentation, marketing materials, and digital assets.</li>
                                    <li>Standardized product specification documents into clear, professional sales tools.</li>
                                    <li>Developed modular email and social media templates for scalable campaigns.</li>
                                    <li>Built reusable libraries and templates, enabling internal teams to maintain consistency and efficiency.</li>
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
                                    <li>Treat a brand as a system rather than a collection of isolated assets.</li>
                                    <li>Consistency across documentation, marketing, and digital touchpoints builds credibility.</li>
                                    <li>Scalability is key: modular templates, reusable assets, and clear visual rules enable growth without losing professionalism.</li>
                                </ul>
                            </div>

                            <div className="obstacles-context-item">
                                <div className="context-item-header obstacles">
                                    <FilePenLineIcon className="filepenline-icon" />
                                    <h4>Key challenges overcome</h4>
                                </div>
                                <ul>
                                    <li>Transformed fragmented, outdated materials into a cohesive, brand-aligned system ready for internal use.</li>
                                    <li>Balanced technical accuracy with marketing appeal to make complex information clear and persuasive.</li>
                                    <li>Built a marketing system from near-zero infrastructure, designing repeatable workflows and templates for long-term use.</li>
                                </ul>
                            </div>

                            <div className="obstacles-context-item">
                                <div className="context-item-header obstacles">
                                    <FilePenLineIcon className="filepenline-icon" />
                                    <h4>Personal reflections</h4>
                                </div>
                                <ul>
                                    <li>Design improves operations and communication.</li>
                                    <li>Seeing work immediately enhance internal workflows and customer trust was highly rewarding.</li>
                                    <li>Intentional, system-focused design can transform not just how a brand looks, but how it functions and grows sustainably.</li>
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
                            There are several ways the brand system and marketing foundation could continue to evolve:
                        </p>

                        <div className="context-item-container">

                            <div className="growth-context-item">
                                <div className="context-item-header lessons-learned">
                                    <TrendingUpIcon className="trendingup-icon" />
                                    <h4>Enhanced digital marketing toolkit</h4>
                                </div>
                                <p>
                                    Expand social media templates, motion graphics, and email campaigns to streamline content creation and boost engagement.
                                </p>
                            </div>

                            <div className="growth-context-item">
                                <div className="context-item-header key-challenges-overcome">
                                    <TrendingUpIcon className="trendingup-icon" />
                                    <h4>Scalable internal design systems</h4>
                                </div>
                                <p>
                                    Grow modular templates and reusable assets to cover presentations, collateral, and other materials, keeping teams efficient and consistent.
                                </p>
                            </div>

                            <div className="growth-context-item">
                                <div className="context-item-header key-challenges-overcome">
                                    <TrendingUpIcon className="trendingup-icon" />
                                    <h4>Future-proofed brand adaptation</h4>
                                </div>
                                <p>
                                    Introduce flexible sub-branding or campaign-specific variations that maintain cohesion while supporting new products, seasonal campaigns, or regional initiatives.
                                </p>
                            </div>

                            <div className="growth-context-item">
                                <div className="context-item-header key-challenges-overcome">
                                    <TrendingUpIcon className="trendingup-icon" />
                                    <h4>Performance tracking & optimization</h4>
                                </div>
                                <p>
                                    Monitor campaign and collateral effectiveness to enable data-driven improvements in engagement and ROI.
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

export default SecureWorldConferenceThemeCaseStudy;
