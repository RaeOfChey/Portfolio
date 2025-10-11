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

import OchaTeaHouseHeaderImage from '../assets/ocha-tea-house/Ocha Tea House Header Image.png';
import CaseStudyImage1 from '../assets/ocha-tea-house/Ocha Tea House Case Study Image1.png';
import CaseStudyImage2 from '../assets/ocha-tea-house/Ocha Tea House Case Study Image2.png';
import CaseStudyImage3 from '../assets/ocha-tea-house/Ocha Tea House Case Study Image3.png';
import CaseStudyImage4 from '../assets/ocha-tea-house/Ocha Tea House Case Study Image4.png';
import CaseStudyImage5 from '../assets/ocha-tea-house/Ocha Tea House Case Study Image5.png';
import CaseStudyImage7 from '../assets/ocha-tea-house/Ocha Tea House Case Study Image7.png';
import CaseStudyImage8 from '../assets/ocha-tea-house/Ocha Tea House Case Study Image8.png';
import CaseStudyImage9 from '../assets/ocha-tea-house/Ocha Tea House Case Study Image9.jpg';
import CaseStudyImage12 from '../assets/ocha-tea-house/Ocha Tea House Case Study Image12.png';
import CaseStudyImage13 from '../assets/ocha-tea-house/Ocha Tea House Case Study Image13.png';
import CaseStudyImage14 from '../assets/ocha-tea-house/Ocha Tea House Case Study Image14.png';
import CaseStudyImage18 from '../assets/ocha-tea-house/Ocha Tea House Case Study Image18.png';
import CaseStudyImage19 from '../assets/ocha-tea-house/Ocha Tea House Case Study Image19.png';
import CaseStudyImage20 from '../assets/ocha-tea-house/Ocha Tea House Case Study Image20.png';
import CaseStudyImage21 from '../assets/ocha-tea-house/Ocha Tea House Case Study Image21.png';
import CaseStudyImage22 from '../assets/ocha-tea-house/Ocha Tea House Case Study Image22.png';
import CaseStudyImage24 from '../assets/ocha-tea-house/Ocha Tea House Case Study Image24.png';
import CaseStudyImage25 from '../assets/ocha-tea-house/Ocha Tea House Case Study Image25.png';
import CaseStudyImage26 from '../assets/ocha-tea-house/Ocha Tea House Case Study Image26.png';
import CaseStudyImage27 from '../assets/ocha-tea-house/Ocha Tea House Case Study Image27.png';
import CaseStudyImage28 from '../assets/ocha-tea-house/Ocha Tea House Case Study Image28.png';
import CaseStudyImage29 from '../assets/ocha-tea-house/Ocha Tea House Case Study Image29.png';
import CaseStudyImage30 from '../assets/ocha-tea-house/Ocha Tea House Case Study Image30.png';

const OchaTeaHouseCaseStudy = () => {

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
                        <h2 className="case-study-subtitle">Developing a unique brand identity and collateral for a Japanese tea house that increased foot traffic and sales by blending tradition with modern appeal.</h2>

                        {/* <div className="links">
                            <a href="https://www.itascacg.com/about/careers-main" target="_blank">View Live</a>
                        </div> */}
                    </div>

                    <div className="case-study-header-right">
                        <img
                            id="norseman-nuptials-header-image"
                            src={OchaTeaHouseHeaderImage}
                            alt="A preview of the final Ocha Tea House Logo on a tea shop sign."
                            className="case-study-image"
                        />
                    </div>
                </div>

                <section className="section-title">
                    <div className="project-overview">
                        <p><strong>Client<br /></strong>Ocha Tea House</p>
                        <p><strong>Duration<br /></strong>4 months</p>
                        <p><strong>Completed<br /></strong>November 2022</p>
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
                        Ocha Tea House is a specialty tea company that offers a culturally authentic, modern, and inviting tea experience and aims to provide customers with both quality and meaningful engagement. This project sought to create a cohesive, emotionally rich brand identity that communicates their values, differentiates them in a competitive market, and supports growth across locations, social media, and customer touchpoints.
                    </p>

                    <div className="context-item-container">

                        <div className="impact-context-item">
                            <div className="context-item-header clear-actionable-design">
                                <CircleCheckIcon className="circle-check-icon" />
                                <h4>Outcomes</h4>
                            </div>
                            <p id="outcome-list" className="outcome-list">
                                <ul>
                                    <li>A 40% increase in foot traffic within six months reflected the brand’s ability to attract and retain customers.</li>
                                    <li>A 30% increase in overall sales demonstrated the brand’s success in converting interest into purchases.</li>
                                    <li>A 150% increase in social media engagement over three months showed improved online visibility and interaction.</li>
                                    <li>92% of surveyed customers reported high satisfaction with the updated identity, highlighting its elegance and cultural authenticity.</li>
                                    <li>Founders noted that the new materials made educating customers about tea benefits and origins easier, fostering more informed and engaged patrons.</li>
                                </ul>
                            </p>
                        </div>

                        <br />

                        <p className="section-label">Tri-Fold Brochure</p>
                        <p id="the-filter-bar-subtitle" className="image-subtitles">Outside Panels</p>
                        <CaseStudyImage
                            src={CaseStudyImage1}
                            alt="Outside panels of the promotional trifold brochure use minimalist illustrations and an earthy color palette to evoke Ocha Tea House’s inviting atmosphere while highlighting key company details and a welcoming message."
                            caption="The outside panels use minimalist illustrations and an earthy color palette to create an approachable and inviting first impression while emphasizing staff expertise and contact info."
                        />

                        <p id="the-filter-bar-subtitle" className="image-subtitles">Inside Panels</p>
                        <CaseStudyImage
                            src={CaseStudyImage2}
                            alt="Interior panels guide readers through Ocha Tea House’s tea-making process, showcasing the benefits of different teas and explaining the signature second processing step for exceptional quality."
                            caption="The interior panels walk customers through the tea-making process and highlight the unique qualities of green, black, white, and herbal teas for a memorable, informative experience."
                        />

                        <p className="section-label">Tea Packaging</p>
                        <CaseStudyImage
                            src={CaseStudyImage26}
                            alt="Evergreen Matcha packaging balances Japanese tradition with approachability for new tea drinkers, making the ritual of tea accessible to a North American audience."
                            caption="The Evergreen Matcha packaging grounds the brand in Japanese tradition while remaining welcoming and accessible for new tea drinkers."
                        />

                        <CaseStudyImage
                            src={CaseStudyImage27}
                            alt="Smoked Plum Ember packaging introduces a bold, atmospheric edge that distinguishes Ocha Tea House from competitors while maintaining cultural authenticity."
                            caption="Smoked Plum Ember’s bold, atmospheric design brings a modern edge and reinforces the brand’s authentic yet innovative identity."
                        />

                        <CaseStudyImage
                            src={CaseStudyImage28}
                            alt="Blushed Sakura Sencha packaging highlights elegance and delicacy inspired by Japanese culture, creating a contemporary and memorable touchpoint for customers."
                            caption="The Blushed Sakura Sencha flavor emphasizes cultural elegance and creates a memorable, contemporary brand experience."
                        />

                        <p className="section-label">Teabar Menu</p>

                        <CaseStudyImage
                            src={CaseStudyImage29}
                            alt="Front of the teabar menu presents teas with a refined, approachable aesthetic using clear layouts and cultural motifs, making the brand accessible while honoring Japanese roots."
                            caption="The front of the teabar menu showcases teas with a clean, culturally inspired layout that feels modern and welcoming."
                        />

                        <CaseStudyImage
                            src={CaseStudyImage30}
                            alt="Back of the teabar menu presents detailed offerings in a clean, intuitive structure, balancing authenticity with readability for new and experienced tea drinkers alike."
                            caption="The back of the menu presents offerings clearly and intuitively, reinforcing the brand’s approachable, authentic identity."
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
                            Ocha Tea House aimed to share the cultural depth and health benefits of authentic Japanese tea in a way that’s inviting to modern audiences. The brand needed to:
                        </p>


                        <div className="context-item-container">

                            <div className="user-problems-context-item">
                                <div className="context-item-header clear-actionable-design">
                                    <CircleCheckIcon className="circle-check-icon" />
                                    <h4>Honor cultural heritage</h4>
                                </div>
                                <p>
                                    Reflect the elegance, ritual, and authenticity of Japanese tea culture while keeping the identity approachable and genuine.
                                </p>
                            </div>

                            <div className="user-problems-context-item">
                                <div className="context-item-header clear-actionable-design">
                                    <CircleCheckIcon className="circle-check-icon" />
                                    <h4>Bridge cultures</h4>
                                </div>
                                <p>
                                    Engage North American audiences by balancing tradition with modern, accessible design that appeals to both newcomers and tea enthusiasts.
                                </p>
                            </div>

                            <div className="user-problems-context-item">
                                <div className="context-item-header clear-actionable-design">
                                    <CircleCheckIcon className="circle-check-icon" />
                                    <h4>Differentiate from competitors</h4>
                                </div>
                                <p>
                                    Stand out from other tea shops by emphasizing expertise, heritage, and quality, signaling trust and depth at first glance.
                                </p>
                            </div>

                            <div className="user-problems-context-item">
                                <div className="context-item-header clear-actionable-design">
                                    <CircleCheckIcon className="circle-check-icon" />
                                    <h4>Scale across touchpoints</h4>
                                </div>
                                <p>
                                    Create a flexible brand system that works consistently across packaging, menus, signage, brochures, social media, and future digital platforms.
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
                        Create a cohesive, culturally grounded brand identity that celebrates Japanese tea traditions, bridges cultural understanding for a North American audience, communicates expertise and authenticity, and positions Ocha Tea House as distinctive, approachable, and memorable in a competitive market.
                    </p>
                </div>
            </section>


            <section className="challenge-section-header">
                <div className="kelvix-solution-header-section-left">
                    <h3>How The Brand Came to Life</h3>
                </div>

                <div className="section-right">
                    <p id="section-intro">
                        The final visual identity for Ocha Tea House balances Japanese tradition with contemporary design, positioning the tea house as both a cultural guide and a welcoming space. Customers are invited to slow down, savor the ritual, and explore the artistry in every cup.
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
                                        Honoring heritage by incorporating Japanese-inspired motifs, textures, and calligraphy to communicate cultural authenticity.
                                    </li>
                                    <li>
                                        Bridging cultures with modern typography, simplified iconography, and an airy layout that feels approachable to Western audiences.
                                    </li>
                                    <li>
                                        Ensuring longevity through calm, timeless design choices that signal expertise and differentiate the brand from fleeting trends.
                                    </li>
                                    <li>
                                        Scaling across touchpoints with versatile logo lockups, consistent typography, and a flexible color palette adaptable to print, packaging, and digital.
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
                                            src={CaseStudyImage3}
                                            alt="Norseman Nuptials Primary Logo Full Color"
                                            className="primary-logo-img"
                                        />
                                    </div>
                                </div>

                                <div className="primary-logo-row bw-row">
                                    <div className="primary-logo-half bg-black">
                                        <img
                                            src={CaseStudyImage24}
                                            alt="Norseman Nuptials Primary Logo Black"
                                            className="logo-img"
                                        />
                                    </div>
                                    <div className="primary-logo-half bg-white">
                                        <img
                                            src={CaseStudyImage25}
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
                                        src={CaseStudyImage13}
                                        alt="Norseman Nuptials Alternative Logo Lettermark Full Color"
                                        className="alt-logo-img"
                                    />
                                </div>

                                <div className="alt-logo-box bg-white-alt">
                                    <img
                                        src={CaseStudyImage12}
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

                            <p className="section-label">Color Palette</p>

                            <div className="color-palette-row">
                                <div className="swatch-container">
                                    <p className="swatch-label">Rice Paper</p>
                                    <img src={CaseStudyImage18} alt="Nótt color swatch" className="color-swatch" />
                                </div>
                                <div className="swatch-container">
                                    <p className="swatch-label">Tatami Reed</p>
                                    <img src={CaseStudyImage19} alt="Freya’s Veil color swatch" className="color-swatch" />
                                </div>
                                <div className="swatch-container">
                                    <p className="swatch-label">Mountain Moss</p>
                                    <img src={CaseStudyImage20} alt="Aurora’s Breath color swatch" className="color-swatch" />
                                </div>
                                <div className="swatch-container">
                                    <p className="swatch-label">Roasted Hojicha</p>
                                    <img src={CaseStudyImage21} alt="Skadi Sky color swatch" className="color-swatch" />
                                </div>
                                <div className="swatch-container">
                                    <p className="swatch-label">Sakura Smoke</p>
                                    <img src={CaseStudyImage22} alt="Midnight Fjord color swatch" className="color-swatch" />
                                </div>
                            </div>

                            <p className="section-label">Typography</p>

                            <div className="font-row">
                                <div className="font-container">
                                    <p className="swatch-label">Josefin Sans</p>
                                    <p className="font-sample josefin-sans">
                                        ABCDEFGHIJKLMNOPQRSTUVWXYZ<br />
                                        abcdefghijklmnopqrstuvwxyz
                                    </p>
                                </div>
                                <div className="font-container">
                                    <p className="swatch-label">MB Picture House One</p>
                                    <p className="font-sample mb-picture-house">
                                        ABCDEFGHIJKLMNOPQRSTUVWXYZ<br />
                                        abcdefghijklmnopqrstuvwxyz
                                    </p>
                                </div>
                            </div>


                            <p className="section-label">Illustrations</p>

                            <div className="illustration-row">
                                <div className="illustration-box">
                                    <img
                                        src={CaseStudyImage7}
                                        alt="Norseman Nuptials Illustration Set 2"
                                        className="illustration-img"
                                    />
                                </div>
                                <div className="illustration-box">
                                    <img
                                        src={CaseStudyImage8}
                                        alt="Norseman Nuptials Illustration Set 3"
                                        className="illustration-img"
                                    />
                                </div>
                            </div>

                            <p className="section-label">Photography</p>

                            <div className="photo-row">
                                <img
                                    src={CaseStudyImage4}
                                    alt="Norseman Nuptials Photography"
                                    className="photography-img"
                                />
                            </div>

                            <div className="photo-row">
                                <img
                                    src={CaseStudyImage5}
                                    alt="Norseman Nuptials Photography"
                                    className="photography-img"
                                />
                            </div>

                            <p className="section-label">Texture</p>

                            <div className="photo-row">
                                <img
                                    src={CaseStudyImage9}
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
                                While meeting the original goals, the branding also introduces:
                                <ul>
                                    <li>
                                        Introduced a photography style centered on natural lighting and human connection, showcasing tea preparation as both art and ritual.
                                    </li>
                                    <li>
                                        Developed a signature pattern inspired by washi paper textures to add subtle depth across materials.
                                    </li>
                                    <li>
                                        Created a flexible icon set that can evolve for seasonal or limited-edition packaging without losing cohesion.
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
                                Ocha Tea House now has a brand identity that feels warm, authentic, and refined. It connects emotionally with customers, builds credibility through craftsmanship, and positions the business as a cultural bridge between Japanese tradition and modern tea culture.
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
                                Set a calm, grounded aesthetic to engage new customers and tea enthusiasts while keeping the brand inclusive and inviting.
                            </p>
                        </div>

                        <div className="approach-context-item">
                            <div className="context-item-header iteration-feedback">
                                <CircleCheckIcon className="circle-check-icon" />
                                <h4>Competitive contrast</h4>
                            </div>
                            <p>
                                Audited local and global tea brands to avoid clichés and create a visually distinct identity with cultural depth.
                            </p>
                        </div>

                        <div className="approach-context-item">
                            <div className="context-item-header iteration-feedback">
                                <CircleCheckIcon className="circle-check-icon" />
                                <h4>Scalable identity system</h4>
                            </div>
                            <p>
                                Built a flexible brand that works across menus, packaging, signage, and digital platforms without losing integrity.
                            </p>
                        </div>

                        <div className="approach-context-item">
                            <div className="context-item-header iteration-feedback">
                                <CircleCheckIcon className="circle-check-icon" />
                                <h4>Cultural grounding</h4>
                            </div>
                            <p>
                                Incorporated Japanese art, tea ceremony symbolism, and minimalism to create an authentic visual language.
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
                            <li>Met with the founders to understand their vision, history, and customer base.</li>
                            <li>Researched Japanese tea traditions, cultural motifs, and design history.</li>
                            <li>Conducted a competitive analysis of tea houses in North America and Japan.</li>
                        </ul>
                    </TimelineItem>

                    <TimelineItem title="Week 3–4 Concept Development">
                        <ul>
                            <li>Explored typography, color palettes, and visual motifs inspired by tea culture.</li>
                            <li>Designed and refined three distinct brand directions: heritage-focused, modern minimal, and cultural fusion.</li>
                            <li>Incorporated client feedback to refine the final chosen direction.</li>
                        </ul>
                    </TimelineItem>

                    <TimelineItem title="Week 5–6 Brand Identity Design">
                        <ul>
                            <li>Finalized logo suite, typography pairing, and color palette.</li>
                            <li>Developed supporting elements including textures, iconography, and patterns.</li>
                            <li>Created a style guide documenting all visual rules for brand consistency.</li>
                        </ul>
                    </TimelineItem>

                    <TimelineItem title="Week 7–8 Collateral Design & Delivery">
                        <ul>
                            <li>Designed packaging, menus, brochures, and signage mockups.</li>
                            <li>Directed and curated photography for marketing use.</li>
                            <li>Delivered all assets, templates, and brand guidelines, and trained staff on brand usage.</li>
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
                                A clear vision met nuanced challenges. This project required translating a culturally rich Japanese tea experience into a brand system that balances tradition with modern accessibility.
                            </p>

                            <div className="obstacles-context-item">
                                <div className="context-item-header obstacles">
                                    <CogIcon className="cog-icon" />
                                    <h4>Obstacles</h4>
                                </div>
                                <ul>
                                    <li>Balancing authenticity and accessibility to ensure the brand honors Japanese tea culture while appealing to a Western audience.</li>
                                    <li>Avoiding clichés and generic “Asian-inspired” visuals to maintain credibility and cultural depth.</li>
                                    <li>Designing a flexible system that works seamlessly across packaging, menus, signage, and digital touchpoints.</li>
                                </ul>
                            </div>

                            <div className="obstacles-context-item">
                                <div className="context-item-header milestones">
                                    <CircleCheckIcon className="circle-check-icon" />
                                    <h4>Milestones</h4>
                                </div>
                                <ul>
                                    <li>Launched a complete brand identity system including logo suite, typography, patterns, and packaging.</li>
                                    <li>Delivered a comprehensive brand guide and guided the client team on consistent implementation.</li>
                                    <li>Rolled out cohesive marketing collateral that strengthened the brand’s presence in-store and online.</li>
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
                                    <li>Translating Japanese tea culture into a modern visual language requires cultural sensitivity without compromising authenticity.</li>
                                    <li>Creating emotional connection and clarity through design strengthens both customer trust and engagement.</li>
                                    <li>Discovered the value of flexible systems that feel intentional and cohesive across every touchpoint.</li>
                                </ul>
                            </div>

                            <div className="obstacles-context-item">
                                <div className="context-item-header obstacles">
                                    <FilePenLineIcon className="filepenline-icon" />
                                    <h4>Key challenges overcome</h4>
                                </div>
                                <ul>
                                    <li>Making traditional tea rituals approachable and relatable for a Western audience while maintaining cultural integrity.</li>
                                    <li>Designing a unified identity that works across packaging, menus, signage, and digital platforms without losing elegance or clarity.</li>
                                    <li>Balancing minimalist design with cultural nuance demanded careful research, iteration, and creative judgment at every stage.</li>
                                </ul>
                            </div>

                            <div className="obstacles-context-item">
                                <div className="context-item-header obstacles">
                                    <FilePenLineIcon className="filepenline-icon" />
                                    <h4>Personal reflections</h4>
                                </div>
                                <ul>
                                    <li>This project was deeply rewarding for blending respect for tradition with fresh, contemporary design.</li>
                                    <li>Learned to express inclusivity, individuality, and intimacy through color, typography, and tone.</li>
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
                            The Ocha Tea House brand system was built for growth. These next steps show how it could evolve while staying true to its vision.
                        </p>

                        <div className="context-item-container">

                            <div className="growth-context-item">
                                <div className="context-item-header lessons-learned">
                                    <TrendingUpIcon className="trendingup-icon" />
                                    <h4>Seasonal packaging collections</h4>
                                </div>
                                <p>
                                    Create limited-edition packaging for seasonal teas and festivals to engage repeat customers while keeping the system flexible and visually cohesive.
                                </p>
                            </div>

                            <div className="growth-context-item">
                                <div className="context-item-header key-challenges-overcome">
                                    <TrendingUpIcon className="trendingup-icon" />
                                    <h4>Expanded collateral suite</h4>
                                </div>
                                <p>
                                    Design additional printed and digital materials, such as educational guides, brochures, and tasting notes, to enhance the customer experience and reinforce the brand story.
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
                                    <h4>eCommerce and digital experience</h4>
                                </div>
                                <p>
                                    Develop an eCommerce platform with storytelling-focused product pages and educational content to deepen user engagement, support sales growth, and provide a richer digital experience.
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

export default OchaTeaHouseCaseStudy;
