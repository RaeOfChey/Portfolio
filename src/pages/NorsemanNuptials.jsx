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
                        Norseman Nuptials transformed from a niche, under-recognized wedding service into a bold, inclusive brand that immediately resonates with non-traditional couples. The refreshed identity not only captured attention but also strengthened trust, engagement, and bookings, positioning the company as a standout in a crowded industry.
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
                        The final visual identity for Norseman Nuptials brings their all-in-one, Nordic-inspired wedding experience to life with bold clarity and emotional depth. It positions them as a refreshing alternative in the wedding space that is modern, inclusive, and beautifully untamed.
                    </p>

                    <div className="context-item-container">
                        <div id="end-result" className="solution-context-item">
                            <div className="context-item-header clear-actionable-design">
                                <UsersIcon className="users-icon" />
                                <h4>Solving the Challenge</h4>
                            </div>

                            <p id="intro-redesign" className="redesign-description">
                                The brand system meets each of the core goals identified in the vision phase by:
                                <ul>
                                    <li>
                                        Resonating with non-traditional couples through non-traditional design: bold colors, imperfect textures, and expressive typography communicate individuality and freedom from convention.
                                    </li>
                                    <li>
                                        Breaking from the bridal norm by avoiding pastels, lace, or overly gendered visuals with an identity that feels powerful, personal, and modern while still romantic.
                                    </li>
                                    <li>
                                        Highlighting the stress-free model with a professional, unified system across touchpoints that suggests trust and polish from the first glance.
                                    </li>
                                    <li>
                                        Honoring Nordic roots with a color palette inspired by the northern lights, Nordic-influenced fonts like “North,” and a name and logo that evoke natural beauty and minimalist strength.
                                    </li>
                                </ul>
                            </p>
                        </div>

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

                        <div id="end-result" className="solution-context-item">
                            <div className="context-item-header clear-actionable-design">
                                <CircleCheckIcon className="circle-check-icon" />
                                <h4>How the design elevates beyond the brief</h4>
                            </div>
                            <p id="intro-redesign" className="redesign-description">
                                While meeting the original goals, the branding also introduces:
                                <ul>
                                    <li>
                                        A semi-custom typography system with handcrafted letterforms that feel artisanal and bespoke.
                                    </li>
                                    <li>
                                        Iconography and visual motifs inspired by folklore and natural landscapes, deepening the emotional story.
                                    </li>
                                    <li>
                                        A flexible identity system that easily adapts for sub-brands, vendor collaborations, and event themes without losing cohesion.
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
                                Norseman Nuptials now has a brand identity that feels rich, rooted, and ready. It immediately differentiates them in a crowded space, emotionally resonates with their dream clients, and builds trust through its clarity and craftsmanship. The final brand system reflects their values and invites couples to break tradition and celebrate love on their own terms.
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
                        To bring Norseman Nuptials’ bold, all-in-one wedding vision to life, I followed a process rooted in research, cultural resonance, and visual storytelling to create a distinct and meaningful brand identity.
                    </p>

                    <div className="context-item-container">

                        <div className="approach-context-item">
                            <div className="context-item-header clear-actionable-design">
                                <CircleCheckIcon className="circle-check-icon" />
                                <h4>Audience alignment</h4>
                            </div>
                            <p>
                                Defined the emotional tone through moodboards and creative direction rooted in intimacy, inclusivity, and independence, which are values that resonate deeply with couples outside the wedding mainstream.
                            </p>
                        </div>

                        <div className="approach-context-item">
                            <div className="context-item-header iteration-feedback">
                                <CircleCheckIcon className="circle-check-icon" />
                                <h4>Competitive contrast</h4>
                            </div>
                            <p>
                                Conducted a brand landscape audit of regional and national wedding companies to pinpoint visual patterns and avoid them, creating a blueprint for how the client could stand out with originality and confidence.
                            </p>
                        </div>

                        <div className="approach-context-item">
                            <div className="context-item-header iteration-feedback">
                                <CircleCheckIcon className="circle-check-icon" />
                                <h4>Scalable identity system</h4>
                            </div>
                            <p>
                                Planned a flexible brand system that would look polished across a wide range of touchpoints. From booking platforms to social media to printed invites while maintaining consistency and warmth.
                            </p>
                        </div>

                        <div className="approach-context-item">
                            <div className="context-item-header iteration-feedback">
                                <CircleCheckIcon className="circle-check-icon" />
                                <h4>Cultural grounding</h4>
                            </div>
                            <p>
                                Researched Scandinavian art, landscapes, and minimalist design to extract authentic references that would anchor the brand in its Nordic identity without relying on clichés.
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
                            <li>Met with the founders to understand their vision, services, and target audience.</li>
                            <li>Gathered inspiration from non-traditional weddings and bold editorial design to steer creative direction.</li>
                            <li>Audited competitor brands to identify gaps and opportunities for differentiation.</li>
                        </ul>
                    </div>

                    <div className="timeline-context-item">
                        <div className="context-item-header">
                            <h4>Week 3–4 Concept Development</h4>
                        </div>
                        <ul>
                            <li>Sketched initial concepts and explored typography, color palettes, and visual motifs.</li>
                            <li>Presented and refined concepts based on client feedback.</li>
                            <li>Iterated on 3 distinct creative directions, each with different personality traits: classic romance, edgy elegance, and modern minimalism.</li>
                        </ul>
                    </div>

                    <div className="timeline-context-item">
                        <div className="context-item-header">
                            <h4>Week 5–6 Brand Identity Design</h4>
                        </div>
                        <ul>
                            <li>Finalized logo suite, typography system, and core color palette.</li>
                            <li>Designed supporting brand elements like icons, textures, and background patterns.</li>
                            <li>Created a style guide to document visual rules and maintain consistency.</li>
                        </ul>
                    </div>

                    <div className="timeline-context-item">
                        <div className="context-item-header">
                            <h4>Week 7–8 Collateral Design & Delivery</h4>
                        </div>
                        <ul>
                            <li>Designed print and digital collateral, including business cards, social templates, and signage mockups.</li>
                            <li>Packaged and delivered all brand assets, including editable files, templates, and usage instructions.</li>
                            <li>Walked the client through the brand system to ensure confidence in using the new identity moving forward.</li>
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
                                    <li>Translating an unconventional, emotionally rich wedding brand into a visual system that felt both elegant and edgy required careful aesthetic judgment.</li>
                                    <li>Steering away from the traditional pastels, scripts, and floral motifs meant consciously breaking norms while still evoking beauty and celebration.</li>
                                    <li>The brand had to encompass planning, styling, coordination, and more, all without feeling cluttered or generic.</li>
                                </ul>
                            </div>

                            <div className="obstacles-context-item">
                                <div className="context-item-header milestones">
                                    <CircleCheckIcon className="circle-check-icon" />
                                    <h4>Milestones</h4>
                                </div>
                                <ul>
                                    <li>Launched a fully integrated brand identity system including logo suite, typography, color palette, patterns, and collateral templates.</li>
                                    <li>Delivered a comprehensive brand guide to ensure visual consistency as the business scaled.</li>
                                    <li>Rolled out cohesive print and digital collateral, including business cards, signage, proposal decks, and social templates.</li>
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
                        The new brand identity established Norseman Nuptials as a bold, inclusive presence in the wedding industry. One that resonates deeply with couples seeking authenticity and individuality.
                    </p>

                    <p id="section-intro-2">
                        By crafting a visually distinct and emotionally rich system, the brand not only attracted more of their ideal clients but also increased engagement across key channels, strengthened client trust, and elevated their position in a highly competitive market.
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
                                    <li>A 50% increase in social media engagement and followers within the first three months post-launch signaled strong brand recognition and audience connection.</li>
                                    <li>35% more bookings were attributed directly to the new brand presence, proving the identity’s power to convert interest into action.</li>
                                    <li>90% of surveyed clients reported high satisfaction with the updated brand identity and collateral, citing the emotional resonance and professionalism of the new look.</li>
                                    <li>Client feedback consistently praised the brand’s uniqueness and inclusivity, noting that it finally felt like “a wedding brand made for people like us.”</li>
                                </ul>
                            </p>
                        </div>
                        
                        <p className="section-label">Business Cards</p>
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
                                    This project was a powerful reminder that brand design is just as much about emotional connection as visual clarity. I learned how to express values like inclusivity, individuality, and intimacy through color, type, and tone, not just copy or messaging. It also underscored the importance of designing flexible systems that feel intentional at every touchpoint.
                                </p>
                            </div>

                            <div className="takeaways-context-item">
                                <div className="context-item-header key-challenges-overcome">
                                    <CogIcon className="cog-icon" />
                                    <h4>Key challenges overcome</h4>
                                </div>
                                <p>
                                    One of the biggest creative challenges was resisting the temptation to include “wedding” visual tropes while still communicating love, elegance, and celebration. It required deep exploration and a confident design direction to stay true to the brand’s vision.
                                </p>
                                <br />
                                <p>
                                    Another challenge was crafting a unified identity for a company that wears many hats, from event design to logistics. Creating a flexible system that could stretch across so many service areas, while still feeling cohesive, was a rewarding design puzzle.
                                </p>
                            </div>

                            <div className="takeaways-context-item">
                                <div className="context-item-header key-challenges-overcome">
                                    <SparklesIcon className="sparkles-icon" />
                                    <h4>Personal reflections</h4>
                                </div>
                                <p>
                                    This was one of the most emotionally rich and creatively freeing branding projects I’ve worked on. The chance to design something that challenges outdated norms and empowers couples to celebrate their love authentically was deeply meaningful. I’m proud to have created a system that balances beauty, functionality, and boldness.
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
                            There are several ways the Norseman Nuptials brand system could evolve as the business expands:
                        </p>

                        <div className="context-item-container">

                            <div className="growth-context-item">
                                <div className="context-item-header lessons-learned">
                                    <TrendingUpIcon className="trendingup-icon" />
                                    <h4>Refined sub-branding</h4>
                                </div>
                                <p>
                                    As new services are added (e.g., elopement packages or destination events), creating subtle variations in the brand system could allow for clearer segmentation while maintaining visual unity.
                                </p>
                            </div>

                            <div className="growth-context-item">
                                <div className="context-item-header key-challenges-overcome">
                                    <TrendingUpIcon className="trendingup-icon" />
                                    <h4>Expanded collateral suite</h4>
                                </div>
                                <p>
                                    Designing more customizable assets like editable pricing guides, client welcome kits, and proposal templates to streamline client communications.
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
                                    <h4>Experience-driven website update</h4>
                                </div>
                                <p>
                                    As the business grows, expanding the website to include behind-the-scenes content, love stories, or booking portals could deepen the user experience and reinforce the brand narrative.
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
