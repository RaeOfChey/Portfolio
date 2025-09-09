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

            <section className="section-title">

                <div className="problem-section-header">
                    <div className="section-left">
                        <h3>Client Vision & Goals</h3>
                    </div>

                    <div className="section-right">
                        <p id="section-intro">
                            For years, Swanky had relied almost entirely on word-of-mouth, with little formal marketing and no consistent materials to support its sales team. As competitors grew more sophisticated and customer expectations shifted, it became clear that Swanky needed to evolve. The company set out to modernize its brand and communications to strengthen its presence in the industry and create a platform for growth. Their goals were:
                        </p>

                        <div className="context-item-container">

                            <div className="user-problems-context-item">
                                <div className="context-item-header clear-actionable-design">
                                    <CircleCheckIcon className="circle-check-icon" />
                                    <h4>Drive competitive growth</h4>
                                </div>
                                <p>
                                    Ensure Swanky could compete on equal footing with established players in the LED lighting industry. Growth was not only about increasing revenue, but about securing the company’s long-term relevance in a rapidly advancing market.
                                </p>
                            </div>

                            <div className="user-problems-context-item">
                                <div className="context-item-header clear-actionable-design">
                                    <CircleCheckIcon className="circle-check-icon" />
                                    <h4>Build customer trust and transparency</h4>
                                </div>
                                <p>
                                    Strengthen relationships by showing customers that Swanky was reliable, professional, and open in its business practices. Trust was central to earning repeat business and positioning the company as a dependable choice in an industry where credibility is everything.
                                </p>
                            </div>

                            <div className="user-problems-context-item">
                                <div className="context-item-header clear-actionable-design">
                                    <CircleCheckIcon className="circle-check-icon" />
                                    <h4>Establish a strong, modern brand identity</h4>
                                </div>
                                <p>
                                    Express the company’s values and ambitions through a consistent, contemporary identity. A clear and confident brand presence was essential to standing out in a crowded industry and signaling that Swanky was evolving with the times.
                                </p>
                            </div>

                            <div className="user-problems-context-item">
                                <div className="context-item-header clear-actionable-design">
                                    <CircleCheckIcon className="circle-check-icon" />
                                    <h4>Empower marketing and communication</h4>
                                </div>
                                <p>
                                    Create the foundation for Swanky to connect with customers in meaningful ways. Building communication channels and a recognizable brand voice was key to reaching wider audiences and supporting the company’s vision for sustainable growth.
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
                        Unify a fragmented brand presence into a modern, credible identity that could build trust with customers, establish Swanky as a serious competitor in the LED lighting industry, and create the foundation for sustainable marketing and growth.
                    </p>
                </div>
            </section>


            <section className="challenge-section-header">
                <div className="kelvix-solution-header-section-left">
                    <h3>Solution</h3>
                </div>

                <div className="section-right">
                    <p id="section-intro">
                        The refreshed visual identity and marketing system for Swanky unified its fragmented presence into a modern, credible brand that customers could trust. By updating technical documentation, marketing collateral, and digital communications, the design work modernized how the company presented itself, gave clarity to its product offerings, and positioned the organization as a legitimate competitor in the LED lighting industry.
                    </p>

                    <div className="context-item-container">
                        <div id="end-result" className="solution-context-item">
                            <div className="context-item-header clear-actionable-design">
                                <UsersIcon className="users-icon" />
                                <h4>How the design supports the clients goals</h4>
                            </div>

                            <p id="intro-redesign" className="redesign-description">
                                The new identity and materials addressed each of the core goals by:
                                <ul>
                                    <li>
                                        Produced clear, professional sales and marketing materials that gave Swanky the credibility to compete for larger projects and capture attention in a crowded industry.
                                    </li>
                                    <li>
                                        Developed polished, consistent product specification documents that not only explained technical details but also functioned as a persuasive sales tool, bridging accuracy with accessibility.
                                    </li>
                                    <li>
                                        Unified all visual touchpoints, including social media, email, documentation, and collateral, all under a cohesive and contemporary design system that signaled innovation and professionalism.
                                    </li>
                                    <li>
                                        Launched branded social media and email campaigns that transformed Swanky from an almost invisible company into a visible, approachable presence with a scalable system for future campaigns.
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
                                />
                                <img
                                    src={CaseStudyImage16}
                                    alt="Editable slide deck template design"
                                    className="logo-img"
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
                                <h4>How the design elevates beyond the brief</h4>
                            </div>
                            <p id="intro-redesign" className="redesign-description">
                                While meeting the original goals, the design work advanced Swanky's brand presence by:
                                <ul>
                                    <li>
                                        Introducing multimedia assets like videos and animations that expanded how Swanky could tell its story and connect with audiences visually.
                                    </li>
                                    <li>
                                        Designing adaptable templates and systems that reduced future production costs, improved internal efficiency, and allowed for brand consistency across every department.
                                    </li>
                                    <li>
                                        Establishing a visual language that felt authentic to Swanky's culture and values, making the company’s brand not just more modern, but more human and approachable.
                                    </li>
                                    <li>
                                        Anticipating client needs by building reusable asset libraries, giving Swanky long-term tools to create new materials quickly and consistently without relying heavily on external support.
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
                                The refreshed identity and marketing system reintroduced Swanky as a credible, competitive force in the LED lighting industry. Clear, consistent product documentation built trust and transparency with customers, while a unified brand identity and polished sales tools gave the company the professional presence it had been missing.
                            </p>
                            <br />
                            <p id="intro-redesign" className="redesign-description">
                                Social media and email campaigns brought the brand into the spotlight, turning a once-quiet organization into an engaging industry player. Adaptable templates, multimedia assets, and reusable design libraries equipped the team with the tools to market confidently, scale efficiently, and sustain growth well into the future.
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
                        To translate a company with virtually no marketing presence into a credible, competitive brand, I used a process that blended research, design system development, and hands-on execution across every customer touchpoint.
                    </p>

                    <div className="context-item-container">

                        <div className="approach-context-item">
                            <div className="context-item-header clear-actionable-design">
                                <CircleCheckIcon className="circle-check-icon" />
                                <h4>Competitive positioning</h4>
                            </div>
                            <p>
                                Audited the LED lighting industry, where competitors were already established, and identified both gaps to differentiate and successes to surpass. From this, I built a foundation that positioned the company as a forward-thinking alternative to established players.
                            </p>
                        </div>

                        <div className="approach-context-item">
                            <div className="context-item-header iteration-feedback">
                                <CircleCheckIcon className="circle-check-icon" />
                                <h4>Trust through clarity</h4>
                            </div>
                            <p>
                                Standardized and redesigned product specification documentation, balancing technical accuracy with clean layouts and visuals. This reduced confusion for architects, contractors, and distributors and gave sales teams a tool that communicated credibility and professionalism.
                            </p>
                        </div>

                        <div className="approach-context-item">
                            <div className="context-item-header iteration-feedback">
                                <CircleCheckIcon className="circle-check-icon" />
                                <h4>Cohesive identity system</h4>
                            </div>
                            <p>
                                Developed a design system that unified color palettes, typography, and imagery into a consistent brand language. I applied this system across the website, documentation, email campaigns, social media, and internal tools, ensuring every interaction reinforced a modern, trustworthy brand image.
                            </p>
                        </div>

                        <div className="approach-context-item">
                            <div className="context-item-header iteration-feedback">
                                <CircleCheckIcon className="circle-check-icon" />
                                <h4>Scalable marketing foundation</h4>
                            </div>
                            <p>
                                Built modular templates for digital campaigns, print collateral, and presentations, giving the internal team reusable tools for future initiatives. By establishing clear design libraries and marketing-ready assets, I created a framework that allowed the company to maintain consistency and scale outreach long after launch.
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
                            <h4>Month 1-2 Discovery & Research</h4>
                        </div>
                        <ul>
                            <li>Audited the LED lighting industry to understand competitor positioning, brand strategies, and communication gaps.</li>
                            <li>Conducted stakeholder interviews to clarify goals, customer pain points, and documentation needs.</li>
                            <li>Compiled insights to guide consistent application of the new brand across all materials.</li>
                        </ul>
                    </div>

                    <div className="timeline-context-item">
                        <div className="context-item-header">
                            <h4>Month 3-4 Brand Implementation & Systemization</h4>
                        </div>
                        <ul>
                            <li>Applied the recently updated brand identity across existing materials, ensuring consistency in color, typography, imagery, and tone.</li>
                            <li>Expanded the brand system to include new templates, internal tools, and collateral, creating a cohesive framework for all communications.</li>
                            <li>Collaborated with stakeholders to refine the system for both marketing and technical materials, balancing visual consistency with functional usability.</li>
                        </ul>
                    </div>

                    <div className="timeline-context-item">
                        <div className="context-item-header">
                            <h4>Month 5-6 Digital & Marketing Foundations</h4>
                        </div>
                        <ul>
                            <li>Standardized and redesigned product specification documentation, translating technical details into clear, professional, and brand-aligned assets.</li>
                            <li>Developed templates for email campaigns and social media content to establish a repeatable marketing system.</li>
                            <li>Updated digital presence and internal assets to reflect the newly systematized brand consistently.</li>
                        </ul>
                    </div>

                    <div className="timeline-context-item">
                        <div className="context-item-header">
                            <h4>Month 7-8 Campaign Development & Collateral Expansion</h4>
                        </div>
                        <ul>
                            <li>Designed modular collateral, sales tools, and presentation decks to support internal teams and external partners.</li>
                            <li>Built a library of reusable assets and templates to allow the team to maintain brand consistency and scale campaigns efficiently.</li>
                            <li>Coordinated alignment of print and digital materials to reinforce credibility and professionalism.</li>
                        </ul>
                    </div>

                    <div className="timeline-context-item">
                        <div className="context-item-header">
                            <h4>Month 9 Finalization & Handoff</h4>
                        </div>
                        <ul>
                            <li>Delivered comprehensive design libraries, templates, and style guides for ongoing use.</li>
                            <li>Provided guidance to internal staff on applying the system effectively across all channels.</li>
                            <li>Supported the launch of coordinated marketing initiatives, giving the company a strong foundation for ongoing engagement and growth.</li>
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
                                    <li>Applying a recently updated brand across a wide variety of materials required careful adaptation to ensure consistency without redesigning the core identity.</li>
                                    <li>Legacy documents, internal assets, and inconsistent materials made it challenging to standardize layouts and visual language while maintaining accuracy.</li>
                                    <li>Balancing technical accuracy with marketing appeal in product documentation demanded iterative collaboration with engineering, sales, and marketing teams.</li>
                                    <li>Building a marketing system from a near-zero presence meant creating templates, campaigns, and content strategies without pre-existing infrastructure or reference points.</li>
                                </ul>
                            </div>

                            <div className="obstacles-context-item">
                                <div className="context-item-header milestones">
                                    <CircleCheckIcon className="circle-check-icon" />
                                    <h4>Milestones</h4>
                                </div>
                                <ul>
                                    <li>Implemented and systematized the new brand identity across product documentation, marketing materials, digital assets, and internal templates.</li>
                                    <li>Standardized product specification documents into visually consistent, easy-to-use sales and marketing tools.</li>
                                    <li>Developed modular email and social media templates to enable repeatable, scalable marketing campaigns.</li>
                                    <li>Built reusable design libraries and templates that empowered internal teams to maintain brand consistency and scale outreach efficiently.</li>
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
                        The systematized brand implementation and marketing assets transformed a previously fragmented and low-visibility company into a professional, credible, and market-ready presence.
                    </p>

                    <p id="section-intro-2">
                        By delivering consistent documentation, polished marketing materials, and scalable digital templates, the organization was able to communicate its offerings clearly, engage customers effectively, and establish itself as a legitimate competitor in the LED lighting industry.
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
                                    <li>Standardized product documentation improved clarity and usability, reducing customer confusion and supporting more confident purchasing decisions.</li>
                                    <li>Branded email and social media campaigns increased visibility and engagement, creating a repeatable marketing system that could reach new audiences efficiently.</li>
                                    <li>Internal teams reported faster turnaround and easier collaboration thanks to modular templates, reusable assets, and organized design libraries.</li>
                                    <li>Sales teams gained practical tools that effectively bridged technical detail with marketing messaging, helping to accelerate conversations with distributors and contractors.</li>
                                    <li>The unified, professional brand presence positioned the organization as credible and modern, laying the foundation for future growth and competitive differentiation.</li>
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
                                    This project showed me how powerful a brand can be when treated as a system rather than a collection of isolated assets. Applying the new identity across product documentation, marketing materials, and digital touchpoints taught me that consistency builds credibility, but scalability is just as important. Modular templates, reusable assets, and clear visual rules make it possible for a brand to grow and evolve without losing professionalism or cohesion.
                                </p>
                            </div>

                            <div className="takeaways-context-item">
                                <div className="context-item-header key-challenges-overcome">
                                    <CogIcon className="cog-icon" />
                                    <h4>Key challenges overcome</h4>
                                </div>
                                <p>
                                    A major challenge was transforming fragmented, outdated materials into a cohesive, brand-aligned system that could be used immediately by internal teams. Balancing technical accuracy with marketing appeal in product documentation required careful iteration, making complex information clear while maintaining integrity.
                                </p>
                                <br />
                                <p>
                                    Building a marketing system from almost no pre-existing presence pushed me to think strategically about processes, templates, and repeatable workflows that would sustain the brand long-term.
                                </p>
                            </div>

                            <div className="takeaways-context-item">
                                <div className="context-item-header key-challenges-overcome">
                                    <SparklesIcon className="sparkles-icon" />
                                    <h4>Personal reflections</h4>
                                </div>
                                <p>
                                    Working on this project reinforced that good design is of course about aesthetics but also about making a company function better and communicate more effectively. Seeing the work immediately improve internal workflows, enhance customer trust, and give the team tools to scale their marketing was incredibly rewarding. It reminded me that intentional design can transform not just how a brand looks, but how it operates, engages audiences, and grows sustainably.
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
                            There are several ways the brand system and marketing foundation could continue to evolve:
                        </p>

                        <div className="context-item-container">

                            <div className="growth-context-item">
                                <div className="context-item-header lessons-learned">
                                    <TrendingUpIcon className="trendingup-icon" />
                                    <h4>Enhanced digital marketing toolkit</h4>
                                </div>
                                <p>
                                    Develop advanced social media templates, motion graphics, and email campaign variations to further streamline content creation and increase engagement across digital channels.
                                </p>
                            </div>

                            <div className="growth-context-item">
                                <div className="context-item-header key-challenges-overcome">
                                    <TrendingUpIcon className="trendingup-icon" />
                                    <h4>Scalable internal design systems</h4>
                                </div>
                                <p>
                                    Expand the modular templates and reusable design components to cover additional marketing materials, presentations, and sales collateral, allowing teams to maintain consistency and efficiency as initiatives grow.
                                </p>
                            </div>

                            <div className="growth-context-item">
                                <div className="context-item-header key-challenges-overcome">
                                    <TrendingUpIcon className="trendingup-icon" />
                                    <h4>Future-proofed brand adaptation</h4>
                                </div>
                                <p>
                                    Introduce flexible sub-branding or campaign-specific adaptations that retain the core identity while supporting new product lines, seasonal campaigns, or regional initiatives, ensuring the brand remains cohesive yet adaptable.
                                </p>
                            </div>

                            <div className="growth-context-item">
                                <div className="context-item-header key-challenges-overcome">
                                    <TrendingUpIcon className="trendingup-icon" />
                                    <h4>Performance tracking & optimization</h4>
                                </div>
                                <p>
                                    Implement a system for monitoring the effectiveness of marketing campaigns and collateral usage, enabling data-driven refinements to improve customer engagement and ROI over time.
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
