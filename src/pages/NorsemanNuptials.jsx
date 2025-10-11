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

const NorsemanNuptialsCaseStudy = () => {

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
                        <h2 className="case-study-subtitle">Developing an inclusive, non-traditional wedding brand identity that improved bookings, social engagement, and brand recognition.</h2>

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
                        <p><strong>Client<br /></strong>Norseman Nuptials</p>
                        <p><strong>Duration<br /></strong>3 months</p>
                        <p><strong>Completed<br /></strong>March 2023</p>
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
                        Norseman Nuptials is a wedding company that offers an all-in-one, Nordic-inspired wedding experience who aims to provide non-traditional, inclusive, and emotionally rich celebrations. This project sought to create a bold, cohesive brand identity that communicates their values, differentiates them in a crowded market, and supports growth across services and touchpoints.
                    </p>

                    <div className="context-item-container">

                        <div className="impact-context-item">
                            <div className="context-item-header clear-actionable-design">
                                <CircleCheckIcon className="circle-check-icon" />
                                <h4>Outcomes</h4>
                            </div>
                            <p id="outcome-list" className="outcome-list">
                                <ul>
                                    <li>Social media engagement and followers grew by 50% within three months, signaling strong brand recognition.</li>
                                    <li>Bookings increased by 35%, demonstrating the brand’s ability to convert interest into action.</li>
                                    <li>90% of surveyed clients reported high satisfaction with the new identity and collateral, citing emotional resonance and professionalism.</li>
                                    <li>Client feedback highlighted the brand’s inclusivity and uniqueness, with couples saying it felt like “a wedding brand made for people like us.”</li>
                                </ul>
                            </p>
                        </div>

                        <p className="section-label">Business Cards</p>
                        <CaseStudyImage
                            src={CaseStudyImage22}
                            alt="This image depicts the front and back of Norseman Nuptials business cards, featuring bold typography and a minimal, elegant design for brand recognition."
                            caption="Bold typography and a minimal layout create instant brand recognition, leaving a polished impression during vendor and client interactions."
                        />

                        <p className="section-label">Social Media</p>
                        <CaseStudyImage
                            src={CaseStudyImage1}
                            alt="This image depicts a preview of Norseman Nuptials’ social media posts, showing cohesive visuals and brand elements that reflect inclusivity and modernity."
                            caption="A cohesive social media presence amplifies visibility and engagement, reflecting the brand’s inclusivity and modern aesthetic."
                        />

                        <p className="section-label">Tri-Fold Brochure</p>
                        <CaseStudyImage
                            src={CaseStudyImage23}
                            alt="This image depicts a trifold brochure for Norseman Nuptials, highlighting key services and brand elements in a clear, structured layout for couples and venues."
                            caption="Structured, brand-forward brochure design communicates key services clearly, making it easy for venues and couples to engage."
                        />

                        <p className="section-label">Digital Advertisement</p>
                        <CaseStudyImage
                            src={CaseStudyImage25}
                            alt="This image depicts a digital billboard concept for Norseman Nuptials, showing the brand’s high-impact, adaptable design at large scale."
                            caption="High-impact digital billboard demonstrates the brand’s adaptability at scale, reinforcing visibility and memorability."
                        />

                        <p className="section-label">Planning Journal</p>
                        <CaseStudyImage
                            src={CaseStudyImage24}
                            alt="This image depicts a custom-designed wedding planning journal for Norseman Nuptials, combining functional planning space with brand-aligned visuals."
                            caption="Custom journal guides couples through their wedding journey, combining functionality with a stress-free, brand-aligned experience."
                        />

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
                            Norseman Nuptials aimed to redefine the wedding experience with a bold, inclusive brand offering a stress-free, all-in-one service. The brand needed to:
                        </p>


                        <div className="context-item-container">

                            <div className="user-problems-context-item">
                                <div className="context-item-header clear-actionable-design">
                                    <CircleCheckIcon className="circle-check-icon" />
                                    <h4>Celebrate all love</h4>
                                </div>
                                <p>
                                    Signal that every kind of love is valid, beautiful, and celebrated.
                                </p>
                            </div>

                            <div className="user-problems-context-item">
                                <div className="context-item-header clear-actionable-design">
                                    <CircleCheckIcon className="circle-check-icon" />
                                    <h4>Break the mold</h4>
                                </div>
                                <p>
                                    Stand apart from the traditional wedding industry with a bold, romantic, and expressive visual identity.
                                </p>
                            </div>

                            <div className="user-problems-context-item">
                                <div className="context-item-header clear-actionable-design">
                                    <CircleCheckIcon className="circle-check-icon" />
                                    <h4>One brand, one roof</h4>
                                </div>
                                <p>
                                    Convey a seamless, trustworthy system covering every step, from florals and photography to venues and officiating.
                                </p>
                            </div>

                            <div className="user-problems-context-item">
                                <div className="context-item-header clear-actionable-design">
                                    <CircleCheckIcon className="circle-check-icon" />
                                    <h4>Honor nordic roots</h4>
                                </div>
                                <p>
                                    Reference Scandinavian heritage through visual elements that feel meaningful, natural, and authentic.
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
                        Create a bold, inclusive brand identity that reimagines the wedding experience, honors Nordic heritage, signals a fully integrated, stress-free service, and resonates deeply with non-traditional couples seeking something meaningful, personal, and refreshingly different.
                    </p>
                </div>
            </section>


            <section className="challenge-section-header">
                <div className="kelvix-solution-header-section-left">
                    <h3>How The Brand Came to Life</h3>
                </div>

                <div className="section-right">
                    <p id="section-intro">
                        The new visual identity for Norseman Nuptials captures their Nordic-inspired, all-in-one wedding experience with emotional depth and modern sophistication. It positions the brand as a refreshing, inclusive alternative in the wedding space, bold, natural, and beautifully untamed.
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
                                        Resonating with non-traditional couples through bold colors, expressive typography, and textured details that celebrate individuality.
                                    </li>
                                    <li>
                                        Breaking from bridal clichés with a gender-neutral, contemporary aesthetic that feels powerful yet romantic.
                                    </li>
                                    <li>
                                        Reflecting trust and polish through a cohesive system that communicates a stress-free, all-in-one experience.
                                    </li>
                                    <li>
                                        Honoring Nordic roots with a palette inspired by the northern lights, minimalist structure, and natural symbolism.
                                    </li>
                                </ul>
                            </p>
                        </div>

                        <div className="brand-assets-section">

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
                        </div>
                        </div>

                        <div id="end-result" className="solution-context-item">
                            <div className="context-item-header clear-actionable-design">
                                <CircleCheckIcon className="circle-check-icon" />
                                <h4>Elevating the experience</h4>
                            </div>
                            <p id="intro-redesign" className="redesign-description">
                                Beyond meeting the initial goals, the brand system elevates the experience with:
                                <ul>
                                    <li>
                                        A custom typography system with handcrafted letterforms that feel artisanal and bespoke.
                                    </li>
                                    <li>
                                        Iconography and motifs inspired by Nordic folklore and symbolism to deepen emotional storytelling.
                                    </li>
                                    <li>
                                        A flexible, scalable identity that adapts seamlessly across vendors, events, and sub-brands while maintaining cohesion.
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
                                Norseman Nuptials now stands out in a crowded industry with a brand that feels authentic, modern, and emotionally resonant. It captures the spirit of couples seeking freedom from tradition while building trust through clarity, craftsmanship, and a distinct visual voice.
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
                                Defined the emotional tone through inclusive, independent, and intimate creative direction.
                            </p>
                        </div>

                        <div className="approach-context-item">
                            <div className="context-item-header iteration-feedback">
                                <CircleCheckIcon className="circle-check-icon" />
                                <h4>Competitive contrast</h4>
                            </div>
                            <p>
                                Identified overused industry visuals and crafted a distinct, modern aesthetic that breaks convention.
                            </p>
                        </div>

                        <div className="approach-context-item">
                            <div className="context-item-header iteration-feedback">
                                <CircleCheckIcon className="circle-check-icon" />
                                <h4>Scalable identity system</h4>
                            </div>
                            <p>
                                Built a flexible identity that stays cohesive across digital, print, and vendor touchpoints.
                            </p>
                        </div>

                        <div className="approach-context-item">
                            <div className="context-item-header iteration-feedback">
                                <CircleCheckIcon className="circle-check-icon" />
                                <h4>Cultural grounding</h4>
                            </div>
                            <p>
                                Drew inspiration from Scandinavian art and landscapes to honor Nordic roots authentically.
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
                    <TimelineItem title="Week 1-2 Discovery & Research">
                        <ul>
                            <li>Met with the founders to understand their vision, services, and target audience.</li>
                            <li>Gathered inspiration from non-traditional weddings and bold editorial design to guide creative direction.</li>
                            <li>Audited competitor brands to identify gaps and opportunities for differentiation.</li>
                        </ul>
                    </TimelineItem>

                    <TimelineItem title="Week 3–4 Concept Development">
                        <ul>
                            <li>Sketched initial concepts and explored typography, color palettes, and visual motifs.</li>
                            <li>Presented and refined concepts based on client feedback.</li>
                            <li>Developed three distinct creative directions: classic romance, edgy elegance, and modern minimalism.</li>
                        </ul>
                    </TimelineItem>

                    <TimelineItem title="Week 5–6 Brand Identity Design">
                        <ul>
                            <li>Finalized logo suite, typography system, and core color palette.</li>
                            <li>Designed supporting brand elements, including icons, textures, and background patterns.</li>
                            <li>Created a comprehensive style guide to ensure long-term visual consistency.</li>
                        </ul>
                    </TimelineItem>

                    <TimelineItem title="Week 7–8 Collateral Design & Delivery">
                        <ul>
                            <li>Designed print and digital collateral such as business cards, social templates, and signage mockups.</li>
                            <li>Packaged and delivered all brand assets, including editable files and usage instructions.</li>
                            <li>Guided the client through the new brand system to ensure confident implementation.</li>
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
                                A bold vision met complex challenges. This project required transforming an emotionally rich, unconventional wedding brand into a system that balanced elegance with edge.
                            </p>

                            <div className="obstacles-context-item">
                                <div className="context-item-header obstacles">
                                    <CogIcon className="cog-icon" />
                                    <h4>Obstacles</h4>
                                </div>
                                <ul>
                                    <li>Translating deep emotional storytelling into visual form demanded careful aesthetic judgment.</li>
                                    <li>Breaking away from traditional pastels, scripts, and florals meant redefining what “beautiful” could look like while keeping it celebratory.</li>
                                    <li>The brand had to represent multiple services like planning, styling, and coordination without feeling cluttered or losing clarity.</li>
                                </ul>
                            </div>

                            <div className="obstacles-context-item">
                                <div className="context-item-header milestones">
                                    <CircleCheckIcon className="circle-check-icon" />
                                    <h4>Milestones</h4>
                                </div>
                                <ul>
                                    <li>Launched a fully integrated system including logo suite, typography, color palette, patterns, and collateral templates.</li>
                                    <li>Delivered a detailed brand guide to maintain visual consistency as the business expanded.</li>
                                    <li>Rolled out cohesive print and digital materials such as business cards, signage, proposal decks, and social templates that brought the identity to life.</li>
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
                                    <li>Realized that brand design is as much about emotional connection as visual clarity.</li>
                                    <li>Learned to express inclusivity, individuality, and intimacy through color, typography, and tone.</li>
                                    <li>Discovered the value of flexible systems that feel intentional and cohesive across every touchpoint.</li>
                                </ul>
                            </div>

                            <div className="obstacles-context-item">
                                <div className="context-item-header obstacles">
                                    <FilePenLineIcon className="filepenline-icon" />
                                    <h4>Key challenges overcome</h4>
                                </div>

                                <ul>
                                    <li>Avoided predictable “wedding” aesthetics while still communicating love, elegance, and celebration.</li>
                                    <li>Balanced creativity and restraint to maintain a confident design direction aligned with the brand’s vision.</li>
                                    <li>Built a unified identity that could stretch across event design, styling, and logistics without losing cohesion.</li>
                                </ul>
                            </div>

                            <div className="obstacles-context-item">
                                <div className="context-item-header obstacles">
                                    <FilePenLineIcon className="filepenline-icon" />
                                    <h4>Personal reflections</h4>
                                </div>
                                <ul>
                                    <li>Found deep fulfillment in creating a brand that empowers couples to celebrate authentically.</li>
                                    <li>Appreciated the opportunity to challenge outdated norms and redefine what modern romance looks like.</li>
                                    <li>Proud to have designed a visual system that balances emotion, functionality, and bold beauty.</li>
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
                            The Norseman Nuptials brand system was built for growth. These next steps show how it could evolve while staying true to its vision.
                        </p>

                        <div className="context-item-container">

                            <div className="growth-context-item">
                                <div className="context-item-header lessons-learned">
                                    <TrendingUpIcon className="trendingup-icon" />
                                    <h4>Refined sub-branding</h4>
                                </div>
                                <p>
                                    Create subtle variations in the brand system could allow for clearer segmentation while maintaining visual unity for each service.
                                </p>
                            </div>

                            <div className="growth-context-item">
                                <div className="context-item-header key-challenges-overcome">
                                    <TrendingUpIcon className="trendingup-icon" />
                                    <h4>Expanded collateral suite</h4>
                                </div>
                                <p>
                                    Design more customizable assets like editable pricing guides, client welcome kits, and proposal templates to streamline client communications.
                                </p>
                            </div>

                            <div className="growth-context-item">
                                <div className="context-item-header key-challenges-overcome">
                                    <TrendingUpIcon className="trendingup-icon" />
                                    <h4>Social-first design assets</h4>
                                </div>
                                <p>
                                    Build a dedicated set of animated or interactive social templates to further boost engagement and brand reach on platforms.
                                </p>
                            </div>

                            <div className="growth-context-item">
                                <div className="context-item-header key-challenges-overcome">
                                    <TrendingUpIcon className="trendingup-icon" />
                                    <h4>Experience-driven website update</h4>
                                </div>
                                <p>
                                    Create a website to include behind-the-scenes content, love stories, or booking portals could deepen the user experience and reinforce the brand narrative.
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

export default NorsemanNuptialsCaseStudy;
