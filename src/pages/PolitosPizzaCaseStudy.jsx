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
import CaseStudySection from "../components/CaseStudySection";

import PolitosPizzaHeaderImage from '../assets/politos-pizza/Politos Pizza Header Image.png';
import CaseStudyImage1 from '../assets/politos-pizza/Politos Pizza Case Study Image1.png';
import CaseStudyImage2 from '../assets/politos-pizza/Politos Pizza Case Study Image2.png';
import CaseStudyImage5 from '../assets/politos-pizza/Politos Pizza Case Study Image5.png';
import CaseStudyImage12 from '../assets/politos-pizza/Politos Pizza Case Study Image12.png';
import CaseStudyImage13 from '../assets/politos-pizza/Politos Pizza Case Study Image13.png';
import CaseStudyImage14 from '../assets/politos-pizza/Politos Pizza Case Study Image14.png';
import CaseStudyImage15 from '../assets/politos-pizza/Politos Pizza Case Study Image15.png';
import CaseStudyImage16 from '../assets/politos-pizza/Politos Pizza Case Study Image16.png';
import CaseStudyImage17 from '../assets/politos-pizza/Politos Pizza Case Study Image17.png';
import CaseStudyImage18 from '../assets/politos-pizza/Politos Pizza Case Study Image18.png';
import CaseStudyImage19 from '../assets/politos-pizza/Politos Pizza Case Study Image19.png';
import CaseStudyImage20 from '../assets/politos-pizza/Politos Pizza Case Study Image20.png';
import CaseStudyImage21 from '../assets/politos-pizza/Politos Pizza Case Study Image21.png';
import CaseStudyImage22 from '../assets/politos-pizza/Politos Pizza Case Study Image22.png';
import CaseStudyImage23 from '../assets/politos-pizza/Politos Pizza Case Study Image23.png';
import PolitosGif1 from '../assets/politos-pizza/Politos Pizza Case Study Image24.gif';
import PolitosGif2 from '../assets/politos-pizza/Politos Pizza Case Study Image25.gif';
import CaseStudyImage26 from '../assets/politos-pizza/Politos Pizza Case Study Image26.png';
import PolitosGif3 from '../assets/politos-pizza/Politos Pizza Case Study Image27.gif';
import CaseStudyImage28 from '../assets/politos-pizza/Politos Pizza Case Study Image28.png';

import CaseStudyImage35 from '../assets/politos-pizza/Politos Pizza Case Study Image35.png';
import CaseStudyImage36 from '../assets/politos-pizza/Politos Pizza Case Study Image36.png';



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
                        <h2 className="case-study-subtitle">Refreshing a bold and eclectic brand identity for a regional pizza chain to celebrate heritage, highlight product variety, and engage modern audiences.</h2>

                        {/* <div className="links">
                            <a href="https://www.itascacg.com/about/careers-main" target="_blank">View Live</a>
                        </div> */}
                    </div>

                    <div className="case-study-header-right">
                        <img
                            id="norseman-nuptials-header-image"
                            src={PolitosPizzaHeaderImage}
                            alt="A preview of Politos Pizza branded business cards."
                            className="case-study-image"
                        />
                    </div>
                </div>

                <section className="section-title">
                    <div className="project-overview">
                        <p><strong>Client<br /></strong>Polito’s Pizza</p>
                        <p><strong>Duration<br /></strong>3 months</p>
                        <p><strong>Completed<br /></strong>January 2019</p>
                        <p><strong>Roles<br /></strong>Lead Graphic Designer, Brand Designer</p>
                    </div>
                </section>
            </div>

            <section className="challenge-section-header">
                <div className="itasca-software-impact-outcome-section-left">
                    <h3 className="impacts-header">Results That Moved The Needle</h3>
                </div>

                <div className="section-right">
                    <p id="section-intro">
                        Polito’s Pizza is a Midwest-based pizzeria known for big slices, bold flavors, and authentic Italian heritage. This project refreshed their visual identity to create a hip, eclectic, and modern brand that highlights their Italian roots, showcases their wide variety of pizzas, and engages a younger, trend-conscious audience.
                    </p>

                    <div className="context-item-container">

                        <div className="impact-context-item">
                            <div className="context-item-header clear-actionable-design">
                                <CircleCheckIcon className="circle-check-icon" />
                                <h4>Outcomes</h4>
                            </div>
                            <p id="outcome-list" className="outcome-list">
                                <ul>
                                    <li>In-store foot traffic increased 20%, reflecting stronger local awareness and interest in the updated experience.</li>
                                    <li>Customer feedback highlighted the playful yet authentic design, with many noting that the brand felt “fun, fresh, and unmistakably Italian.”</li>
                                    <li>Brand consistency improved across all touchpoints, including packaging, swag, and digital channels, supporting a cohesive, memorable experience.</li>
                                </ul>
                            </p>
                        </div>

                        <CaseStudySection
                            title="Tri-fold Brochure"
                            images={[
                                {
                                    src: CaseStudyImage1,
                                    alt: "This image depicts the front and back of Norseman Nuptials business cards, featuring bold typography and a minimal, elegant design for brand recognition.",
                                    caption:
                                        "Bold typography and a minimal layout create instant brand recognition, leaving a polished impression during vendor and client interactions.",
                                },
                                {
                                    src: CaseStudyImage2,
                                    alt: "SecureWorld website banners promoting conferences with consistent brand style and visual energy.",
                                },
                            ]}
                        />

                        <CaseStudySection
                            title="Tumblers"
                            images={[
                                {
                                    src: CaseStudyImage12,
                                    alt: "SecureWorld Google display ad suite showcasing consistent branding across multiple ad formats and digital placements.",
                                    caption:
                                        "Google display ad suite showcasing a consistent, high-impact brand presence across every format and placement.",
                                },
                            ]}
                        />

                        <CaseStudySection
                            title="Business Cards"
                            images={[
                                {
                                    src: CaseStudyImage5,
                                    alt: "SecureWorld Google display ad suite showcasing consistent branding across multiple ad formats and digital placements.",
                                    caption:
                                        "Google display ad suite showcasing a consistent, high-impact brand presence across every format and placement.",
                                },
                            ]}
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
                            Polito’s Pizza aimed to create a bold, eclectic brand that honors its Italian heritage while appealing to modern, trend-conscious diners. The brand needed to:
                        </p>


                        <div className="context-item-container">

                            <div className="user-problems-context-item">
                                <div className="context-item-header clear-actionable-design">
                                    <CircleCheckIcon className="circle-check-icon" />
                                    <h4>Celebrate Italian roots</h4>
                                </div>
                                <p>
                                    Honor the brand’s East Coast and Italian heritage while giving it a fresh, modern twist.
                                </p>
                            </div>

                            <div className="user-problems-context-item">
                                <div className="context-item-header clear-actionable-design">
                                    <CircleCheckIcon className="circle-check-icon" />
                                    <h4>Showcase big slices and variety</h4>
                                </div>
                                <p>
                                    Visually communicate the restaurant’s signature “big slice” experience and wide range of flavors.
                                </p>
                            </div>

                            <div className="user-problems-context-item">
                                <div className="context-item-header clear-actionable-design">
                                    <CircleCheckIcon className="circle-check-icon" />
                                    <h4>Stand out in a crowded market</h4>
                                </div>
                                <p>
                                    Develop a hip, eclectic, and bold look that differentiates Polito’s from other regional pizzerias.
                                </p>
                            </div>

                            <div className="user-problems-context-item">
                                <div className="context-item-header clear-actionable-design">
                                    <CircleCheckIcon className="circle-check-icon" />
                                    <h4>Appeal to modern audiences</h4>
                                </div>
                                <p>
                                    Incorporate playful, contemporary colors, typography, and illustrations to engage younger, trend-conscious customers.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </section>


            <section className="challenge-section-header" id="unique-section">
                <div className="itasca-software-challenge-header-section-left">
                    <h3 className="challenge-header">Challenge</h3>
                </div>

                <div className="section-right">
                    <p id="section-intro">
                        Create a bold, eclectic brand identity that honors Polito’s Italian heritage, highlights their “big slice” experience and wide flavor variety, and stands out in a competitive pizza market while appealing to modern, trend-conscious diners.
                    </p>
                </div>
            </section>


            <section className="challenge-section-header">
                <div className="kelvix-solution-header-section-left">
                    <h3>How The Brand Came to Life</h3>
                </div>

                <div className="section-right">
                    <p id="section-intro">
                        The refreshed visual identity combines Italian heritage with modern, eclectic design to celebrate their big slices, bold flavors, and playful personality. It positions the brand as memorable, fun, and unmistakably Italian, standing out in a crowded pizza market.
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
                                        Honoring Italian roots with the red star symbol adapted into playful pizza slices and a nod to tradition.
                                    </li>
                                    <li>
                                        Highlighting big slices and flavor variety through bold, contrasting typography and vibrant colors.
                                    </li>
                                    <li>
                                        Breaking the mold in the regional market with a hip, eclectic, and modern aesthetic that resonates with younger audiences.
                                    </li>
                                    <li>
                                        Creating a cohesive system that ensures consistency across packaging, signage, and digital channels.
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
                                            src={CaseStudyImage14}
                                            alt="Poltios Pizza Primary Logo Full Color"
                                            className="primary-logo-img"
                                        />
                                    </div>
                                </div>

                                <div className="primary-logo-row bw-row">
                                    <div className="primary-logo-half bg-black">
                                        <img
                                            src={CaseStudyImage15}
                                            alt="Poltios Pizza Primary Logo Black"
                                            className="logo-img"
                                        />
                                    </div>
                                    <div className="primary-logo-half bg-white">
                                        <img
                                            src={CaseStudyImage16}
                                            alt="Poltios Pizza Primary Logo White"
                                            className="logo-img"
                                        />
                                    </div>
                                </div>
                            </div>

                            <p className="section-label">Alternative Logos</p>

                            <p className="sub-section-label">Horizontal</p>

                            <div className="alt-logo-row">
                                <div className="alt-logo-box bg-white-alt">
                                    <img
                                        src={CaseStudyImage17}
                                        alt="Poltios Pizza Alternative Logo Lettermark Full Color"
                                        className="alt-logo-img"
                                    />
                                </div>

                                <div className="alt-logo-box bg-white-alt">
                                    <img
                                        src={CaseStudyImage18}
                                        alt="Poltios Pizza Alternative Logo Lettermark Black"
                                        className="alt-logo-img"
                                    />
                                </div>

                                <div className="alt-logo-box bg-black-alt">
                                    <img
                                        src={CaseStudyImage19}
                                        alt="Poltios Pizza Alternative Logo Lettermark White"
                                        className="alt-logo-img"
                                    />
                                </div>
                            </div>

                            <p className="section-label">Color Palette</p>

                            <div className="color-palette-row politos-pizza-palette">
                                <div className="swatch-container">
                                    <p className="swatch-label">Tuscan Basilico</p>
                                    <img src={CaseStudyImage20} alt="Tuscan Basilico color swatch" className="color-swatch" />
                                </div>
                                <div className="swatch-container">
                                    <p className="swatch-label">Rose Crust</p>
                                    <img src={CaseStudyImage21} alt="Rose Crust color swatch" className="color-swatch" />
                                </div>
                                <div className="swatch-container">
                                    <p className="swatch-label">Roma Ember</p>
                                    <img src={CaseStudyImage22} alt="Roma Ember color swatch" className="color-swatch" />
                                </div>
                            </div>


                            <p className="section-label">Typography</p>

                            <div className="font-row">
                                <div className="font-container">
                                    <p className="swatch-label">Lust Display Typeface</p>
                                    <img src={CaseStudyImage35} alt="North Typeface" className="font" />
                                </div>
                                <div className="font-container">
                                    <p className="swatch-label">Proxima Nova Typeface</p>
                                    <img src={CaseStudyImage36} alt="Custom Typeface" className="font" />
                                </div>
                            </div>

                            <p className="section-label">Illustrations and Patterns</p>

                            <div className="illustration-row">
                                <div className="illustration-box">
                                    <img
                                        src={CaseStudyImage23}
                                        alt="Politos Pizza Illustration"
                                        className="illustration-img"
                                    />
                                </div>
                                <div className="illustration-box">
                                    <img
                                        src={PolitosGif1}
                                        alt="Politos Pizza Illustration"
                                        className="illustration-img"
                                    />
                                </div>
                                <div className="illustration-box">
                                    <img
                                        src={PolitosGif2}
                                        alt="Politos Pizza Illustration"
                                        className="illustration-img"
                                    />
                                </div>
                            </div>

                            < br />
                            < br />

                            <div className="photo-row">
                                <img
                                    src={CaseStudyImage26}
                                    alt="Politos Pizza Pattern"
                                    className="photography-img"
                                />
                            </div>

                            <div className="photo-row">
                                <img
                                    src={PolitosGif3}
                                    alt="Politos Pizza Pattern"
                                    className="photography-img"
                                />
                            </div>

                            <p className="section-label">Photography</p>

                            <div className="photo-row">
                                <img
                                    src={CaseStudyImage28}
                                    alt="Politos Pizza Photography"
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
                                Beyond the initial goals, the brand system elevates the customer experience with:
                                <ul>
                                    <li>
                                        A custom typography system combining bold, playful serifs with modern sans serifs to reflect Polito’s eclectic personality.
                                    </li>
                                    <li>
                                        Iconography and illustrations of pizza toppings and slices that celebrate the brand’s heritage while adding visual fun.
                                    </li>
                                    <li>
                                        A flexible, scalable identity system that works seamlessly across signage, menus, packaging, social media, and store interiors.
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
                                Polito’s Pizza now stands out with a brand that feels authentic, bold, and eclectic. The new identity communicates heritage, highlights the “big slice” experience, and engages modern audiences, strengthening recognition and loyalty across all touchpoints.
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
                        A strategic, design-driven process guided every decision to create a bold, eclectic, and modern pizza brand, guided by the following key principles:
                    </p>

                    <div className="context-item-container">

                        <div className="approach-context-item">
                            <div className="context-item-header clear-actionable-design">
                                <CircleCheckIcon className="circle-check-icon" />
                                <h4>Audience alignment</h4>
                            </div>
                            <p>
                                Defined the emotional tone to resonate with modern, trend-conscious diners while staying true to Polito’s Italian heritage.
                            </p>
                        </div>

                        <div className="approach-context-item">
                            <div className="context-item-header iteration-feedback">
                                <CircleCheckIcon className="circle-check-icon" />
                                <h4>Competitive contrast</h4>
                            </div>
                            <p>
                                Analyzed regional and national pizza branding to identify overused visuals and craft a distinct, playful, and modern aesthetic.
                            </p>
                        </div>

                        <div className="approach-context-item">
                            <div className="context-item-header iteration-feedback">
                                <CircleCheckIcon className="circle-check-icon" />
                                <h4>Scalable identity system</h4>
                            </div>
                            <p>
                                Built a flexible brand system including logo, typography, patterns, and illustrations, that works across digital, print, packaging, signage, and social media.
                            </p>
                        </div>

                        <div className="approach-context-item">
                            <div className="context-item-header iteration-feedback">
                                <CircleCheckIcon className="circle-check-icon" />
                                <h4>Heritage grounding</h4>
                            </div>
                            <p>
                                Drew inspiration from classic Italian symbols and traditional design cues, reimagined in a bold, modern style to honor the brand’s roots authentically.
                            </p>
                        </div>

                        <CaseStudySection
                            title="Moodbard"
                            images={[
                                {
                                    src: CaseStudyImage13,
                                    alt: "Moodboard featuring vibrant pinks, greens, reds, geometric pizza slice illustrations, eclectic typography, and textured patterns representing Polito’s Pizza’s modern, bold, and Italian-inspired brand identity.",
                                    caption:
                                        "A curated moodboard capturing Polito’s Pizza’s bold, eclectic personality. Bright colors, geometric shapes, and playful textures reflect the brand’s Italian heritage and “big slice” identity.",
                                },
                            ]}
                        />

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
                            <li>Met with the owners to understand Polito’s history, audience, and brand personality.</li>
                            <li>Gathered inspiration from vintage Italian signage, pop-art culture, and modern pizzerias.</li>
                            <li>Audited competitors and regional pizza chains to identify visual trends and opportunities for differentiation.</li>
                        </ul>
                    </TimelineItem>

                    <TimelineItem title="Week 3–4 Concept Development">
                        <ul>
                            <li>Sketched early logo concepts exploring hand-lettered and geometric styles.</li>
                            <li>Presented and refined concepts based on client feedback.</li>
                            <li>Developed three distinct creative directions: classic romance, edgy elegance, and modern minimalism.</li>
                        </ul>
                    </TimelineItem>

                    <TimelineItem title="Week 5–6 Brand Identity Design">
                        <ul>
                            <li>Finalized logo suite, typography system, and core color palette.</li>
                            <li>Experimented with color palettes inspired by classic Italian hues and bold contemporary contrast.</li>
                            <li>Presented three creative directions: Classic Heritage, Street-Style Modern, and Bold Retro Revival, then refined the chosen concept based on client feedback.</li>
                        </ul>
                    </TimelineItem>

                    <TimelineItem title="Week 7–8 Collateral Design & Delivery">
                        <ul>
                            <li>Designed print and digital materials, including menus, apparel, social graphics, and storefront signage mockups.</li>
                            <li>Packaged and delivered editable brand assets with clear usage guidelines.</li>
                            <li>Guided the Polito’s team through brand rollout to ensure consistency across all customer touchpoints.</li>
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
                                Refreshing an established local favorite meant striking the right balance between authenticity, nostalgia, and a bold modern identity that felt true to Polito’s roots.
                            </p>

                            <div className="obstacles-context-item">
                                <div className="context-item-header obstacles">
                                    <CogIcon className="cog-icon" />
                                    <h4>Obstacles</h4>
                                </div>
                                <ul>
                                    <li>Translating Polito’s fun, down-to-earth personality into a cohesive visual identity without losing its hometown charm.</li>
                                    <li>Differentiating the brand in a crowded regional pizza market filled with cliché Italian visuals and color schemes.</li>
                                    <li>Designing a system that worked consistently across menus, signage, packaging, and apparel, each with different production needs.</li>
                                </ul>
                            </div>

                            <div className="obstacles-context-item">
                                <div className="context-item-header milestones">
                                    <CircleCheckIcon className="circle-check-icon" />
                                    <h4>Milestones</h4>
                                </div>
                                <ul>
                                    <li>Delivered a complete visual system, including logo suite, color palette, typography, and supporting graphics adaptable across touchpoints.</li>
                                    <li>Created a scalable design foundation to support future menu expansions, new locations, and social campaigns.</li>
                                    <li>Rolled out branded collateral including menus, pizza boxes, swag items, and digital assets, that unified the customer experience from dine-in to delivery.</li>
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
                                    <li>Discovered how small visual details such as like texture, pattern, and color, can communicate warmth and community.</li>
                                    <li>Learned the importance of designing for both personality and practicality across fast-paced, high-traffic touchpoints.</li>
                                    <li>Gained deeper appreciation for branding that builds nostalgia without feeling dated.</li>
                                </ul>
                            </div>

                            <div className="obstacles-context-item">
                                <div className="context-item-header obstacles">
                                    <FilePenLineIcon className="filepenline-icon" />
                                    <h4>Key challenges overcome</h4>
                                </div>
                                <ul>
                                    <li>Balanced Polito’s long-standing local identity with a fresh look that could grow with new locations.</li>
                                    <li>Maintained legibility and consistency across menus, boxes, signage, and apparel, each with distinct production constraints.</li>
                                    <li>Unified a diverse set of design applications under one recognizable visual voice.</li>
                                </ul>
                            </div>

                            <div className="obstacles-context-item">
                                <div className="context-item-header obstacles">
                                    <FilePenLineIcon className="filepenline-icon" />
                                    <h4>Personal reflections</h4>
                                </div>
                                <ul>
                                    <li>Found fulfillment in helping a hometown favorite feel renewed without losing its roots.</li>
                                    <li>Appreciated the creative challenge of merging retro cues with modern polish to capture Polito’s spirit.</li>
                                    <li>Proud to have built a visual identity that’s both inviting and scalable that are ready to evolve alongside the brand.</li>
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
                            The Polito’s Pizza brand was designed with flexibility and growth in mind. These next steps outline how the visual system could continue to evolve while keeping its hometown character intact.
                        </p>

                        <div className="context-item-container">

                            <div className="growth-context-item">
                                <div className="context-item-header lessons-learned">
                                    <TrendingUpIcon className="trendingup-icon" />
                                    <h4>Enhanced digital presence</h4>
                                </div>
                                <p>
                                    Develop a refreshed website or app experience that highlights menu items, seasonal specials, and store locations to give customers an easier way to explore, order, and connect with the brand.
                                </p>
                            </div>

                            <div className="growth-context-item">
                                <div className="context-item-header key-challenges-overcome">
                                    <TrendingUpIcon className="trendingup-icon" />
                                    <h4>Expanded packaging system</h4>
                                </div>
                                <p>
                                    Create additional packaging variations for catering, takeout, and delivery that keep the design consistent while allowing space for playful messaging and local personality.
                                </p>
                            </div>

                            <div className="growth-context-item">
                                <div className="context-item-header key-challenges-overcome">
                                    <TrendingUpIcon className="trendingup-icon" />
                                    <h4>Community-centered campaigns</h4>
                                </div>
                                <p>
                                    Design event and social media campaigns that celebrate Polito’s role in the community like local sports sponsorships to pizza challenges and charitable partnerships.
                                </p>
                            </div>

                            <div className="growth-context-item">
                                <div className="context-item-header key-challenges-overcome">
                                    <TrendingUpIcon className="trendingup-icon" />
                                    <h4>Scalable in-store experience</h4>
                                </div>
                                <p>
                                    Build modular signage, menu boards, and environmental graphics adaptable for future locations, ensuring each restaurant feels unique but unmistakably Polito’s.
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            <section className="cta-section">

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
