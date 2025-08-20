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

            <section className="section-title">

                <div className="problem-section-header">
                    <div className="section-left">
                        <h3>Client Vision & Goals</h3>
                    </div>

                    <div className="section-right">
                        <p id="section-intro">
                            Ocha Tea House merges over 100 years of Japanese tea expertise with a fresh, accessible setting in North America. Their mission is to share the cultural depth and health benefits of authentic Japanese tea in a way that’s inviting to modern audiences, blending tradition with modern convenience and hospitality. They envisioned a brand that would:
                        </p>


                        <div className="context-item-container">

                            <div className="user-problems-context-item">
                                <div className="context-item-header clear-actionable-design">
                                    <CircleCheckIcon className="circle-check-icon" />
                                    <h4>Honor cultural heritage</h4>
                                </div>
                                <p>
                                    Create a visual identity that reflects the elegance, ritual, and authenticity of Japanese tea culture without feeling outdated or overly formal. The goal was to communicate deep cultural roots in a way that felt genuine and respectful.
                                </p>
                            </div>

                            <div className="user-problems-context-item">
                                <div className="context-item-header clear-actionable-design">
                                    <CircleCheckIcon className="circle-check-icon" />
                                    <h4>Bridge cultures</h4>
                                </div>
                                <p>
                                    Engage North American audiences who may be unfamiliar with Japanese tea by balancing tradition with accessible, modern design. Avoid alienating new customers while still resonating with tea connoisseurs.
                                </p>
                            </div>

                            <div className="user-problems-context-item">
                                <div className="context-item-header clear-actionable-design">
                                    <CircleCheckIcon className="circle-check-icon" />
                                    <h4>Differentiate from competitors</h4>
                                </div>
                                <p>
                                    Stand apart from other trendy tea shops and cafes by emphasizing expertise, heritage, and quality rather than fleeting design trends. The identity needed to signal trust and depth from the first glance.
                                </p>
                            </div>

                            <div className="user-problems-context-item">
                                <div className="context-item-header clear-actionable-design">
                                    <CircleCheckIcon className="circle-check-icon" />
                                    <h4>Scale across touchpoints</h4>
                                </div>
                                <p>
                                    Develop a brand system that could work across packaging, menus, signage, brochures, social media, and future digital platforms without losing its clarity or emotional tone.
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
                        Create a cohesive, culturally grounded brand identity that blends Japanese tradition with modern appeal. The brand needed to be accessible to a North American audience unfamiliar with tea ceremony culture, yet distinctive and authentic enough to stand apart from other tea shops.
                    </p>
                </div>
            </section>


            <section className="challenge-section-header">
                <div className="kelvix-solution-header-section-left">
                    <h3>Solution</h3>
                </div>

                <div className="section-right">
                    <p id="section-intro">
                        The final visual identity for Ocha Tea House strikes a harmonious balance between tradition and contemporary design. It positions the tea house as both a cultural guide and a welcoming retreat, inviting customers to slow down, savor the ritual, and explore the artistry behind each cup.
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
                                        Honoring heritage by Incorporating Japanese-inspired motifs, textures, and calligraphy to reflect cultural authenticity.
                                    </li>
                                    <li>
                                        Bridging cultures by using modern typography, simplified iconography, and an airy layout to make the brand approachable for Western audiences.
                                    </li>
                                    <li>
                                        Focusing on calm, timeless design elements that communicate expertise rather than trends, ensuring long-term relevance and brand differentiation.
                                    </li>
                                    <li>
                                        Creating scalable logo lockups, consistent typography, and a versatile color palette that adapt seamlessly across print, packaging, and digital.
                                    </li>
                                </ul>
                            </p>
                        </div>

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

                        {/* <p className="sub-section-label">Pictorial Mark</p>

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
                        </div> */}

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
                                <p style={{ fontFamily: "'Josefin Sans', sans-serif", fontSize: "22px", margin: "0px" }}>
                                    ABCDEFGHIJKLMNOPQRSTUVWXYZ<br />
                                    abcdefghijklmnopqrstuvwxyz
                                </p>
                            </div>
                            <div className="font-container">
                                <p className="swatch-label">MB Picture House One</p>
                                <p style={{ fontFamily: "'MB Picture House One', sans-serif", fontSize: "22px", margin: "0px" }}>
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

                        <div id="end-result" className="solution-context-item">
                            <div className="context-item-header clear-actionable-design">
                                <CircleCheckIcon className="circle-check-icon" />
                                <h4>How the design elevates beyond the brief</h4>
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
                                <h4>End result</h4>
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
                    <h3 className="approach-header">Approach</h3>
                </div>

                <div className="section-right">

                    <p id="section-intro">
                        To bring Ocha Tea House’s vision of blending centuries-old Japanese tea traditions with modern accessibility to life, I followed a process grounded in research, cultural authenticity, and visual storytelling to create a distinctive and meaningful brand identity that resonates with both new and seasoned tea drinkers.
                    </p>

                    <div className="context-item-container">

                        <div className="approach-context-item">
                            <div className="context-item-header clear-actionable-design">
                                <CircleCheckIcon className="circle-check-icon" />
                                <h4>Audience alignment</h4>
                            </div>
                            <p>
                                Developed moodboards rooted in calm, grounded aesthetics to appeal to both new customers and tea enthusiasts, ensuring the brand felt inclusive and inviting.
                            </p>
                        </div>

                        <div className="approach-context-item">
                            <div className="context-item-header iteration-feedback">
                                <CircleCheckIcon className="circle-check-icon" />
                                <h4>Competitive contrast</h4>
                            </div>
                            <p>
                                Audited local and global tea brands to identify overused visual tropes, steering clear of overly whimsical or minimalist trends that lacked cultural depth.
                            </p>
                        </div>

                        <div className="approach-context-item">
                            <div className="context-item-header iteration-feedback">
                                <CircleCheckIcon className="circle-check-icon" />
                                <h4>Scalable identity system</h4>
                            </div>
                            <p>
                                Designed a flexible brand structure that works across menus, packaging, signage, and digital platforms without losing its tone or integrity.
                            </p>
                        </div>

                        <div className="approach-context-item">
                            <div className="context-item-header iteration-feedback">
                                <CircleCheckIcon className="circle-check-icon" />
                                <h4>Cultural grounding</h4>
                            </div>
                            <p>
                                Researched traditional Japanese art forms, tea ceremony symbolism, and architectural minimalism to extract authentic references that inform the visual language.
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
                            <h4>Week 1-2 Discovery & Research</h4>
                        </div>
                        <ul>
                            <li>Met with the founders to understand their vision, history, and customer base.</li>
                            <li>Researched Japanese tea traditions, cultural motifs, and design history.</li>
                            <li>Conducted a competitive analysis of tea houses in North America and Japan.</li>
                        </ul>
                    </div>

                    <div className="timeline-context-item">
                        <div className="context-item-header">
                            <h4>Week 3–4 Concept Development</h4>
                        </div>
                        <ul>
                            <li>Explored typography, color palettes, and visual motifs inspired by tea culture.</li>
                            <li>Designed and refined three distinct brand directions: heritage-focused, modern minimal, and cultural fusion.</li>
                            <li>Incorporated client feedback to refine the final chosen direction.</li>
                        </ul>
                    </div>

                    <div className="timeline-context-item">
                        <div className="context-item-header">
                            <h4>Week 5–6 Brand Identity Design</h4>
                        </div>
                        <ul>
                            <li>Finalized logo suite, typography pairing, and color palette.</li>
                            <li>Developed supporting elements including textures, iconography, and patterns.</li>
                            <li>Created a style guide documenting all visual rules for brand consistency.</li>
                        </ul>
                    </div>

                    <div className="timeline-context-item">
                        <div className="context-item-header">
                            <h4>Week 7–8 Collateral Design & Delivery</h4>
                        </div>
                        <ul>
                            <li>Designed packaging, menus, brochures, and signage mockups.</li>
                            <li>Directed and curated photography for marketing use.</li>
                            <li>Delivered all assets, templates, and brand guidelines, and trained staff on brand usage.</li>
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
                                    <li>Balancing respect for Japanese tradition with the accessibility needed for a Western audience.</li>
                                    <li>Avoiding clichés and oversimplified “Asian-inspired” design that could feel inauthentic.</li>
                                    <li>Creating a unified system that works for both small product labels and large-scale signage.</li>
                                </ul>
                            </div>

                            <div className="obstacles-context-item">
                                <div className="context-item-header milestones">
                                    <CircleCheckIcon className="circle-check-icon" />
                                    <h4>Milestones</h4>
                                </div>
                                <ul>
                                    <li>Launched a full brand identity system including logo suite, typography, patterns, and packaging.</li>
                                    <li>Delivered a complete brand guide and trained the client’s team on consistent use.</li>
                                    <li>Rolled out cohesive marketing collateral that enhanced both in-store and digital brand presence.</li>
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
                        The new brand identity established Ocha Tea House as a culturally authentic, modern, and inviting presence in the tea market. One that resonates deeply with customers seeking both quality and a meaningful experience.
                    </p>

                    <p id="section-intro-2">
                        By crafting a visually distinct and emotionally rich system, the brand not only attracted more of their ideal audience but also increased engagement across key touchpoints, strengthened customer trust, and elevated the tea house’s position in a competitive North American market.
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
                                    <li>A 40% increase in foot traffic within six months reflected the brand’s ability to attract new customers and encourage return visits.</li>
                                    <li>A 30% increase in overall sales demonstrated the brand’s effectiveness in converting interest into purchases.</li>
                                    <li>A 150% increase in social media engagement within three months indicated stronger online visibility and audience interaction.</li>
                                    <li>92% of surveyed customers reported high satisfaction with the updated brand identity and materials, citing its elegance and cultural authenticity.</li>
                                    <li>Founders reported that the new materials made it significantly easier to educate customers about tea benefits and origins, leading to more informed and engaged patrons.</li>
                                </ul>
                            </p>
                        </div>

                        <br />

                        <p className="section-label">Tri-Fold Brochure</p>
                        <div className="image-row-1">
                            <div className="image-column-left-1">
                                <img
                                    src={CaseStudyImage1}
                                    alt="This image depicts the outside of the promotional trifold brochure, which uses minimalist illustrations and a earthy color palette to evoke Ocha Tea House’s inviting atmosphere, while highlighting company details, contact information, and a welcoming message that emphasizes staff expertise and personalized tea recommendations."
                                    className="case-study-image"
                                />
                            </div>
                            <div className="image-column-right-1">
                                <p id="the-filter-bar-subtitle" className="image-subtitles">Outside Panels:<br />The outside panels use minimalist illustrations and a earthy color palette to evoke Ocha Tea House’s inviting atmosphere, while highlighting company details, contact information, and a welcoming message that emphasizes staff expertise and personalized tea recommendations.</p>
                            </div>
                        </div>

                        <div className="image-row-2-gg">
                            <div className="image-column">
                                <p id="approach" className="image-subtitles-left-2">Inside Panels:<br />The layout of the interior panels guides readers through Ocha Tea House’s meticulous tea-making process, showcases the unique benefits of green, black, white, and herbal teas, and explains the signature second processing step that ensures the finest quality in every cup.</p>
                            </div>
                            <div className="image-column-right-2 left-align">
                                <img
                                    src={CaseStudyImage2}
                                    alt="This image shows the layout of the interior panels, which guides readers through Ocha Tea House’s meticulous tea-making process, showcases the unique benefits of green, black, white, and herbal teas, and explains the signature second processing step that ensures the finest quality in every cup"
                                    className="case-study-image"
                                />
                            </div>
                        </div>

                        <p className="section-label">Tea Packaging</p>
                        <div className="image-row-1">
                            <div className="image-column-left-1">
                                <img
                                    src={CaseStudyImage26}
                                    alt="This image depicts a custom-designed tea packging for the flavor, Evergreen Matcha. Who's packaging grounds the brand in Japanese tradition while feeling approachable to new tea drinkers. This balance helped make the brand more accessible to a North American audience, easing entry into the ritual of tea without losing authenticity."
                                    className="case-study-image"
                                />
                            </div>
                            <div className="image-column-right-1">
                             <p id="the-filter-bar-subtitle" className="image-subtitles">The Evergreen Matcha packaging grounds the brand in Japanese tradition while feeling approachable to new tea drinkers. This balance helped make the brand more accessible to a North American audience, easing entry into the ritual of tea without losing authenticity.</p>
                            </div>
                        </div>

                        <div className="image-row-2-gg">
                            <div className="image-column">
                                <p id="approach" className="image-subtitles-left-2">The Smoked Plum Ember’s bold, atmospheric introduces a modern edge that distinguishes the brand from competitors. By marrying cultural nuance with striking visuals, the identity reinforced the shop’s position as both authentic and innovative.</p>
                            </div>
                            <div className="image-column-right-2 left-align">
                                <img
                                    src={CaseStudyImage27}
                                    alt="This image depicts a custom-designed tea packging for the flavor, Smoked Plum Ember. Who's bold, atmospheric introduces a modern edge that distinguishes the brand from competitors. By marrying cultural nuance with striking visuals, the identity reinforced the shop’s position as both authentic and innovative."
                                    className="case-study-image"
                                />
                            </div>
                        </div>

                        <div className="image-row-1">
                            <div className="image-column-left-1">
                                <img
                                    src={CaseStudyImage28}
                                    alt="This image depicts a custom-designed tea packging for the flavor, Blushed Sakura Sencha. Who's flavor leans into elegance and delicacy in Japanese culture. This is a memorable touchpoint for customers, creating a brand experience that feels both culturally grounded and contemporary. Resonating with audiences unfamiliar with tea ceremony traditions."
                                    className="case-study-image"
                                />
                            </div>
                            <div className="image-column-right-1">
                                <p id="the-filter-bar-subtitle" className="image-subtitles">The Blushed Sakura Sencha flavor leans into elegance and delicacy in Japanese culture. This is a memorable touchpoint for customers, creating a brand experience that feels both culturally grounded and contemporary. Resonating with audiences unfamiliar with tea ceremony traditions.</p>
                            </div>
                        </div>

                          <p className="section-label">Teabar Menu</p>
                        <div className="image-row-1">
                            <div className="image-column-left-1">
                                <img
                                    src={CaseStudyImage29}
                                    alt="This image depicts the front of the teabar menu, which highlights the brand’s refined yet approachable aesthetic, using clear layouts and cultural motifs to introduce teas in a way that feels modern and welcoming. This made the brand more accessible to North American customers while preserving its Japanese roots."
                                    className="case-study-image"
                                />
                            </div>
                            <div className="image-column-right-1">
                             <p id="the-filter-bar-subtitle" className="image-subtitles">Front:<br />The front of the Teabar menu, which highlights the brand’s refined yet approachable aesthetic, using clear layouts and cultural motifs to introduce teas in a way that feels modern and welcoming. This made the brand more accessible to North American customers while preserving its Japanese roots.</p>
                            </div>
                        </div>

                        <div className="image-row-2-gg">
                            <div className="image-column">
                                <p id="approach" className="image-subtitles-left-2">Back:<br />The back of the menu extends the visual identity with detailed offerings presented in a clean, intuitive structure. By combining authenticity with readability, it reinforced the brand’s goal of being both distinctive in the market and inviting to those new to tea culture.</p>
                            </div>
                            <div className="image-column-right-2 left-align">
                                <img
                                    src={CaseStudyImage30}
                                    alt="This image depicts the back of the teabar menu, which extends the visual identity with detailed offerings presented in a clean, intuitive structure. By combining authenticity with readability, it reinforced the brand’s goal of being both distinctive in the market and inviting to those new to tea culture."
                                    className="case-study-image"
                                />
                            </div>
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
                                    This project underscored the importance of cultural sensitivity in branding. It was a lesson in translating centuries-old traditions into a modern visual language without losing authenticity.
                                </p>
                            </div>

                            <div className="takeaways-context-item">
                                <div className="context-item-header key-challenges-overcome">
                                    <CogIcon className="cog-icon" />
                                    <h4>Key challenges overcome</h4>
                                </div>
                                <p>
                                    One of the biggest challenges was translating a centuries-old Japanese tea culture into a visual system that felt approachable and modern for a Western audience without losing authenticity.
                                </p>
                                <br />
                                <p>
                                    Another significant challenge was designing a unified identity that worked across multiple touchpoints, from small product packaging to large-scale signage, while maintaining consistency, elegance, and clarity. Balancing cultural sensitivity with a clean, minimalist aesthetic required careful research, iteration, and creative judgment at every stage.
                                </p>
                            </div>

                            <div className="takeaways-context-item">
                                <div className="context-item-header key-challenges-overcome">
                                    <SparklesIcon className="sparkles-icon" />
                                    <h4>Personal reflections</h4>
                                </div>
                                <p>
                                    This was one of the most rewarding cultural branding projects I’ve worked on. It was an opportunity to create something deeply respectful yet fresh, to help bridge cultures through design, and to watch that design directly influence customer engagement and sales.
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
                            There are several ways the Ocha tea House brand system could evolve as the business grows:
                        </p>

                        <div className="context-item-container">

                            <div className="growth-context-item">
                                <div className="context-item-header lessons-learned">
                                    <TrendingUpIcon className="trendingup-icon" />
                                    <h4>Seasonal packaging collections</h4>
                                </div>
                                <p>
                                    Creating limited-edition packaging for seasonal teas and festivals could engage repeat customers and highlight the brand’s connection to Japanese culture, while keeping the system flexible and visually cohesive.
                                </p>
                            </div>

                            <div className="growth-context-item">
                                <div className="context-item-header key-challenges-overcome">
                                    <TrendingUpIcon className="trendingup-icon" />
                                    <h4>Expanded collateral suite</h4>
                                </div>
                                <p>
                                    Developing additional printed and digital materials, such as educational guides, brochures, or tasting notes, could further enhance the customer experience and reinforce the brand story.
                                </p>
                            </div>

                            <div className="growth-context-item">
                                <div className="context-item-header key-challenges-overcome">
                                    <TrendingUpIcon className="trendingup-icon" />
                                    <h4>Social-first design assets</h4>
                                </div>
                                <p>
                                    Building a dedicated set of animated or interactive social templates could further boost engagement and brand reach on platforms like Instagram and TikTok.
                                </p>
                            </div>

                            <div className="growth-context-item">
                                <div className="context-item-header key-challenges-overcome">
                                    <TrendingUpIcon className="trendingup-icon" />
                                    <h4>eCommerce and digital experience</h4>
                                </div>
                                <p>
                                    Expanding into an eCommerce platform with storytelling-focused product pages and educational content could deepen user engagement, support sales growth, and provide a richer digital experience for tea enthusiasts worldwide.
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
