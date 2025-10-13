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

import SecureWorldHeaderConfereneceImage from "../assets/secureworld-conference-theme/SecureWorld Conferenece Theme Thumbnail Image.png";

import CaseStudyImage1 from '../assets/secureworld-conference-theme/SW Conference Theme Case Study Image1.png';
import CaseStudyImage2 from '../assets/secureworld-conference-theme/SW Conference Theme Case Study Image2.png';
import CaseStudyImage3 from '../assets/secureworld-conference-theme/SW Conference Theme Case Study Image3.png';
import CaseStudyImage4 from '../assets/secureworld-conference-theme/SW Conference Theme Case Study Image4.png';
import CaseStudyImage5 from '../assets/secureworld-conference-theme/SW Conference Theme Case Study Image5.png';
import CaseStudyImage6 from '../assets/secureworld-conference-theme/SW Conference Theme Case Study Image6.png';
import CaseStudyImage7 from '../assets/secureworld-conference-theme/SW Conference Theme Case Study Image7.png';
import CaseStudyImage8 from '../assets/secureworld-conference-theme/SW Conference Theme Case Study Image8.png';
import CaseStudyImage9 from '../assets/secureworld-conference-theme/SW Conference Theme Case Study Image9.png';
import CaseStudyImage10 from '../assets/secureworld-conference-theme/SW Conference Theme Case Study Image10.png';
import CaseStudyImage11 from '../assets/secureworld-conference-theme/SW Conference Theme Case Study Image11.png';
import CaseStudyImage12 from '../assets/secureworld-conference-theme/SW Conference Theme Case Study Image12.png';
import CaseStudyImage13 from '../assets/secureworld-conference-theme/SW Conference Theme Case Study Image13.png';
import CaseStudyImage14 from '../assets/secureworld-conference-theme/SW Conference Theme Case Study Image14.png';
import CaseStudyImage15 from '../assets/secureworld-conference-theme/SW Conference Theme Case Study Image15.png';
import CaseStudyImage16 from '../assets/secureworld-conference-theme/SW Conference Theme Case Study Image16.png';
import CaseStudyImage17 from '../assets/secureworld-conference-theme/SW Conference Theme Case Study Image17.png';
import CaseStudyImage18 from '../assets/secureworld-conference-theme/SW Conference Theme Case Study Image18.png';
import CaseStudyImage19 from '../assets/secureworld-conference-theme/SW Conference Theme Case Study Image19.png';
import CaseStudyImage20 from '../assets/secureworld-conference-theme/SW Conference Theme Case Study Image20.png';
import CaseStudyImage21 from '../assets/secureworld-conference-theme/SW Conference Theme Case Study Image21.png';
import CaseStudyImage22 from '../assets/secureworld-conference-theme/SW Conference Theme Case Study Image22.png';
import CaseStudyImage23 from '../assets/secureworld-conference-theme/SW Conference Theme Case Study Image23.png';
import CaseStudyImage24 from '../assets/secureworld-conference-theme/SW Conference Theme Case Study Image24.png';
import CaseStudyImage25 from '../assets/secureworld-conference-theme/SW Conference Theme Case Study Image25.png';
import CaseStudyImage26 from '../assets/secureworld-conference-theme/SW Conference Theme Case Study Image26.png';
import CaseStudyImage27 from '../assets/secureworld-conference-theme/SW Conference Theme Case Study Image27.png';
import CaseStudyImage28 from '../assets/secureworld-conference-theme/SW Conference Theme Case Study Image28.png';
import CaseStudyImage29 from '../assets/secureworld-conference-theme/SW Conference Theme Case Study Image29.png';
import CaseStudyImage30 from '../assets/secureworld-conference-theme/SW Conference Theme Case Study Image30.png';
import CaseStudyImage31 from '../assets/secureworld-conference-theme/SW Conference Theme Case Study Image31.png';
import CaseStudyImage32 from '../assets/secureworld-conference-theme/SW Conference Theme Case Study Image32.png';
import CaseStudyImage33 from '../assets/secureworld-conference-theme/SW Conference Theme Case Study Image33.png';
import CaseStudyImage34 from '../assets/secureworld-conference-theme/SW Conference Theme Case Study Image34.png';

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
                        <h2 className="case-study-subtitle">Developing a cohesive, high-energy conference brand system that energized the return of events, boosting attendee engagement and sponsorship.</h2>

                        {/* <div className="links">
                            <a href="https://www.itascacg.com/about/careers-main" target="_blank">View Live</a>
                        </div> */}
                    </div>

                    <div className="case-study-header-right">
                        <img
                            id="norseman-nuptials-header-image"
                            src={SecureWorldHeaderConfereneceImage}
                            alt="A preview of SecureWorld's 2023 Conferenece Theme, featuring."
                            className="case-study-image"
                        />
                    </div>
                </div>

                <section className="section-title">
                    <div className="project-overview">
                        <p><strong>Client<br /></strong>SecureWorld</p>
                        <p><strong>Duration<br /></strong>3 weeks</p>
                        <p><strong>Completed<br /></strong>December 2022</p>
                        <p><strong>Roles<br /></strong>Lead Graphic Designer, Brand System Designer</p>
                    </div>
                </section>
            </div>

            <section className="challenge-section-header">
                <div className="itasca-software-impact-outcome-section-left">
                    <h3 className="impacts-header">Results That Moved The Needle</h3>
                </div>

                <div className="section-right">
                    <p id="section-intro">
                        SecureWorld is a cybersecurity conference platform connecting industry leaders, practitioners, and innovators. This project created an immersive, high-energy brand identity that communicates the organization’s values, differentiates the event from competitors, and drives engagement, networking, and sponsorship across all touchpoints.
                    </p>

                    <div className="context-item-container">

                        <div className="impact-context-item">
                            <div className="context-item-header clear-actionable-design">
                                <CircleCheckIcon className="circle-check-icon" />
                                <h4>Outcomes</h4>
                            </div>
                            <p id="outcome-list" className="outcome-list">
                                <ul>
                                    <li>92% of surveyed attendees reported the event felt “highly engaging and visually impactful,” citing cohesive design as a key factor.</li>
                                    <li>Increased dwell time in networking areas and exhibitor booths, with vendors noting stronger traffic flow than previous years.</li>
                                    <li>Faster production and digital updates thanks to reusable templates and a scalable design system.</li>
                                    <li>Sponsors highlighted the polished environment as a reflection of the event’s professionalism and credibility.</li>
                                    <li>Delivered all assets on schedule, setting a benchmark for efficiency and quality.</li>
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
                            SecureWorld aimed to create a one-of-a-kind conference experience that would:
                        </p>

                        <div className="context-item-container">

                            <div className="user-problems-context-item">
                                <div className="context-item-header clear-actionable-design">
                                    <CircleCheckIcon className="circle-check-icon" />
                                    <h4>Energized return of in-person events</h4>
                                </div>
                                <p>
                                    Deliver a high-impact live experience after years of virtual gatherings, creating excitement, connection, and momentum for the community.
                                </p>
                            </div>

                            <div className="user-problems-context-item">
                                <div className="context-item-header clear-actionable-design">
                                    <CircleCheckIcon className="circle-check-icon" />
                                    <h4>Attract new career professionals</h4>
                                </div>
                                <p>
                                    Modernize the event experience to appeal to younger attendees while maintaining credibility with long-standing participants.
                                </p>
                            </div>

                            <div className="user-problems-context-item">
                                <div className="context-item-header clear-actionable-design">
                                    <CircleCheckIcon className="circle-check-icon" />
                                    <h4>Foster community and collaboration</h4>
                                </div>
                                <p>
                                    Design spaces that encourage networking, collaboration, and knowledge sharing.
                                </p>
                            </div>

                            <div className="user-problems-context-item">
                                <div className="context-item-header clear-actionable-design">
                                    <CircleCheckIcon className="circle-check-icon" />
                                    <h4>Stand out from competing tech conferences</h4>
                                </div>
                                <p>
                                    Move beyond monotone, formal tech aesthetics with a bold, immersive identity that is memorable, energizing, and shareable.
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
                        Create an immersive, high-energy conference identity that reignites excitement for live events, appeals to younger professionals, fosters community, and breaks away from typical tech conference monotony.
                    </p>
                </div>
            </section>


            <section className="challenge-section-header">
                <div className="kelvix-solution-header-section-left">
                    <h3>How The Brand System Came to Life</h3>
                </div>

                <div className="section-right">
                    <p id="section-intro">
                        The final brand system for 2023 blended music-inspired visuals with SecureWorld’s credibility, transforming the conference into a bold, dynamic, and immersive experience. It modernized the brand for younger attendees, fostered community engagement, and created memorable moments across all touchpoints.
                    </p>

                    <div className="context-item-container">
                        <div id="end-result" className="solution-context-item">
                            <div className="context-item-header clear-actionable-design">
                                <UsersIcon className="users-icon" />
                                <h4>Solving the Challenge</h4>
                            </div>

                            <p id="intro-redesign" className="redesign-description">
                                The conference theme design directly addressed key brand challenges by:
                                <ul>
                                    <li>
                                        Injecting energy through vibrant colors, dynamic patterns, and glowing textures that created an exciting, high-impact environment.
                                    </li>
                                    <li>
                                        Ensuring accessibility with clear layouts and intuitive signage that made information easy to find for both newcomers and veteran attendees.
                                    </li>
                                    <li>
                                        Establishing a cohesive identity across banners, coasters, digital slides, and installations to foster engagement and shared experiences.
                                    </li>
                                    <li>
                                        Reinforcing memorable branding with signature assets that strengthened the conference’s innovative positioning and encouraged social sharing.
                                    </li>
                                </ul>
                            </p>
                        </div>

                        <p className="section-label">Digital Collateral</p>

                        <p className="sub-section-label">Slide Deck Templates</p>

                        <div className="two-in-a-row">

                            <CaseStudyImage
                                src={CaseStudyImage1}
                                alt="Editable slide deck templates, providing departments with a cohesive and visually engaging format for consistent communication."
                                caption="Editable slide deck templates maintain a cohesive theme across presentations, allowing teams to customize content while preserving the event’s high-energy branding."
                            />
                            <CaseStudyImage
                                src={CaseStudyImage2}
                                alt="Editable slide deck templates, providing departments with a cohesive and visually engaging format for consistent communication."
                                caption="Editable slide deck templates maintain a cohesive theme across presentations, allowing teams to customize content while preserving the event’s high-energy branding."
                            />
                            <CaseStudyImage
                                src={CaseStudyImage3}
                                alt="Editable slide deck templates, providing departments with a cohesive and visually engaging format for consistent communication."
                                caption="Editable slide deck templates maintain a cohesive theme across presentations, allowing teams to customize content while preserving the event’s high-energy branding."
                            />
                            <CaseStudyImage
                                src={CaseStudyImage4}
                                alt="Editable slide deck templates, providing departments with a cohesive and visually engaging format for consistent communication."
                                caption="Editable slide deck templates maintain a cohesive theme across presentations, allowing teams to customize content while preserving the event’s high-energy branding."
                            />
                        </div>

                        <p className="sub-section-label">Signage</p>

                        <div className="two-in-a-row">

                            <CaseStudyImage
                                src={CaseStudyImage22}
                                alt="Digital signage designed for in-person events, featuring live session schedules and sponsor highlights to guide and engage attendees throughout the conference."
                                caption="Digital signage clearly communicates schedules and sponsors, keeping attendees informed and enhancing the immersive experience."
                            />
                            <CaseStudyImage
                                src={CaseStudyImage23}
                                alt="Digital signage designed for in-person events, featuring live session schedules and sponsor highlights to guide and engage attendees throughout the conference."
                                caption="Digital signage clearly communicates schedules and sponsors, keeping attendees informed and enhancing the immersive experience."
                            />
                        </div>

                        <p className="sub-section-label">Email Templates</p>

                        <div className="two-in-a-row">

                            <CaseStudyImage
                                src={CaseStudyImage24}
                                alt="Custom-themed email templates with branded headers and footers, ensuring every communication reinforced the high-energy conference identity."
                                caption="Branded email templates maintain a visually engaging, cohesive identity across all attendee communications."
                            />
                            <CaseStudyImage
                                src={CaseStudyImage25}
                                alt="Custom-themed email templates with branded headers and footers, ensuring every communication reinforced the high-energy conference identity."
                                caption="Branded email templates maintain a visually engaging, cohesive identity across all attendee communications."
                            />
                            <CaseStudyImage
                                src={CaseStudyImage26}
                                alt="Custom-themed email templates with branded headers and footers, ensuring every communication reinforced the high-energy conference identity."
                                caption="Branded email templates maintain a visually engaging, cohesive identity across all attendee communications."
                            />
                            <CaseStudyImage
                                src={CaseStudyImage27}
                                alt="Custom-themed email templates with branded headers and footers, ensuring every communication reinforced the high-energy conference identity."
                                caption="Branded email templates maintain a visually engaging, cohesive identity across all attendee communications."
                            />
                        </div>

                        <p className="section-label">Print Collateral</p>

                        <p className="sub-section-label">Large Banner</p>

                        <CaseStudyImage
                            src={CaseStudyImage18}
                            alt="Large-scale banner serving as a visual centerpiece and popular photo backdrop, unifying the event’s brand identity across the conference space."
                            caption="The large banner establishes the tone for the event, providing a striking, cohesive focal point for attendees."
                        />

                        <p className="sub-section-label">Coasters</p>

                        <div className="two-in-a-row">
                            <CaseStudyImage
                                src={CaseStudyImage5}
                                alt="Collectible coasters and sleeves that blend music and cybersecurity themes, creating memorable keepsakes for attendees."
                                caption="Coasters fuse bold visuals and fun facts to make a lasting impression while reinforcing the event’s immersive theme."
                            />

                            <CaseStudyImage
                                src={CaseStudyImage6}
                                alt="Collectible coasters and sleeves that blend music and cybersecurity themes, creating memorable keepsakes for attendees."
                                caption="Coasters fuse bold visuals and fun facts to make a lasting impression while reinforcing the event’s immersive theme."
                            />
                            <CaseStudyImage
                                src={CaseStudyImage7}
                                alt="Collectible coasters and sleeves that blend music and cybersecurity themes, creating memorable keepsakes for attendees."
                                caption="Coasters fuse bold visuals and fun facts to make a lasting impression while reinforcing the event’s immersive theme."
                            />
                            <CaseStudyImage
                                src={CaseStudyImage8}
                                alt="Collectible coasters and sleeves that blend music and cybersecurity themes, creating memorable keepsakes for attendees."
                                caption="Coasters fuse bold visuals and fun facts to make a lasting impression while reinforcing the event’s immersive theme."
                            />
                            <CaseStudyImage
                                src={CaseStudyImage9}
                                alt="Collectible coasters and sleeves that blend music and cybersecurity themes, creating memorable keepsakes for attendees."
                                caption="Coasters fuse bold visuals and fun facts to make a lasting impression while reinforcing the event’s immersive theme."
                            />
                        </div>

                        <p className="sub-section-label">Banners</p>

                        <div className="two-in-a-row">

                            <CaseStudyImage
                                src={CaseStudyImage13}
                                alt="Pop-up banners featuring pun-filled titles and iconic musicians, connecting music heritage to the conference theme to capture attention and spark engagement."
                                caption="Pop-up banners combine storytelling and bold visuals to reinforce the music-meets-tech identity throughout the venue."
                            />
                            <CaseStudyImage
                                src={CaseStudyImage14}
                                alt="Pop-up banners featuring pun-filled titles and iconic musicians, connecting music heritage to the conference theme to capture attention and spark engagement."
                                caption="Pop-up banners combine storytelling and bold visuals to reinforce the music-meets-tech identity throughout the venue."
                            />
                            <CaseStudyImage
                                src={CaseStudyImage15}
                                alt="Pop-up banners featuring pun-filled titles and iconic musicians, connecting music heritage to the conference theme to capture attention and spark engagement."
                                caption="Pop-up banners combine storytelling and bold visuals to reinforce the music-meets-tech identity throughout the venue."
                            />
                            <CaseStudyImage
                                src={CaseStudyImage16}
                                alt="Pop-up banners featuring pun-filled titles and iconic musicians, connecting music heritage to the conference theme to capture attention and spark engagement."
                                caption="Pop-up banners combine storytelling and bold visuals to reinforce the music-meets-tech identity throughout the venue."
                            />
                            <CaseStudyImage
                                src={CaseStudyImage17}
                                alt="Pop-up banners featuring pun-filled titles and iconic musicians, connecting music heritage to the conference theme to capture attention and spark engagement."
                                caption="Pop-up banners combine storytelling and bold visuals to reinforce the music-meets-tech identity throughout the venue."
                            />
                        </div>

                        <p className="sub-section-label">Registration Desk</p>

                        <CaseStudyImage
                            src={CaseStudyImage19}
                            alt="Custom registration signage and footboards designed to guide attendees efficiently while creating a cohesive, branded first impression."
                            caption="Registration signage ensures clarity, efficiency, and a polished introduction to the conference experience."
                        />
                        <div className="two-in-a-row">

                            <CaseStudyImage
                                src={CaseStudyImage20}
                                alt="Custom registration signage and footboards designed to guide attendees efficiently while creating a cohesive, branded first impression."
                                caption="Registration signage ensures clarity, efficiency, and a polished introduction to the conference experience."
                            />
                            <CaseStudyImage
                                src={CaseStudyImage21}
                                alt="Custom registration signage and footboards designed to guide attendees efficiently while creating a cohesive, branded first impression."
                                caption="Registration signage ensures clarity, efficiency, and a polished introduction to the conference experience."
                            />
                        </div>

                        <p className="sub-section-label">Tent Cards</p>

                        <div className="two-in-a-row">

                            <CaseStudyImage
                                src={CaseStudyImage10}
                                alt="Printed theme tent cards for reserved seating, advisory councils, and sponsor tables, maintaining consistency and professionalism across all touchpoints."
                                caption="Tent cards reinforce branding and organization at key seating areas, highlighting sponsors and leadership tables."
                            />
                            <CaseStudyImage
                                src={CaseStudyImage11}
                                alt="Printed theme tent cards for reserved seating, advisory councils, and sponsor tables, maintaining consistency and professionalism across all touchpoints."
                                caption="Tent cards reinforce branding and organization at key seating areas, highlighting sponsors and leadership tables."
                            />
                            <CaseStudyImage
                                src={CaseStudyImage12}
                                alt="Printed theme tent cards for reserved seating, advisory councils, and sponsor tables, maintaining consistency and professionalism across all touchpoints."
                                caption="Tent cards reinforce branding and organization at key seating areas, highlighting sponsors and leadership tables."
                            />
                        </div>

                        <p className="sub-section-label">Signage</p>

                        <div className="two-in-a-row">

                            <CaseStudyImage
                                src={CaseStudyImage28}
                                alt="Printed signage displaying registration passes, Executive Roundtable events, and sponsor recognition, reflecting the high-energy conference theme."
                                caption="Event signage communicates details and sponsor information while maintaining immersive, consistent branding."
                            />
                            <CaseStudyImage
                                src={CaseStudyImage29}
                                alt="Printed signage displaying registration passes, Executive Roundtable events, and sponsor recognition, reflecting the high-energy conference theme."
                                caption="Event signage communicates details and sponsor information while maintaining immersive, consistent branding."
                            />
                        </div>

                        <p className="sub-section-label">Podium</p>

                        <CaseStudyImage
                            src={CaseStudyImage30}
                            alt="Custom podium design featuring bold colors, patterns, and textures, providing a visually engaging focal point for speakers."
                            caption="The podium reinforces the immersive conference identity on stage, tying together visual branding with presentation spaces."
                        />

                        <p className="sub-section-label">Lunch Ticket</p>

                        <CaseStudyImage
                            src={CaseStudyImage31}
                            alt="Themed lunch tickets with bold patterns and cohesive branding, transforming even small details into memorable, on-theme experiences for attendees."
                            caption="Branded lunch tickets extend the high-energy identity to every touchpoint, making small details part of the immersive experience."
                        />

                        <div id="end-result" className="solution-context-item">
                            <div className="context-item-header clear-actionable-design">
                                <CircleCheckIcon className="circle-check-icon" />
                                <h4>Elevating the experience</h4>
                            </div>
                            <p id="intro-redesign" className="redesign-description">
                                Beyond meeting the initial goals, the brand system elevates the experience with:
                                <ul>
                                    <li>
                                        Social sharing encouraged through immersive photo opportunities and visually striking assets.
                                    </li>
                                    <li>
                                        Sustainability prioritized via recyclable signage and reusable digital templates.
                                    </li>
                                    <li>
                                        Authentic brand alignment, ensuring every design element reinforced SecureWorld’s identity and values.
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
                                The 2023 conference design system emerged as a high-energy, immersive experience that reinvigorated in-person attendance, engaged younger professionals, and strengthened the sense of community within the cybersecurity industry.
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
                                <h4>Thematic exploration</h4>
                            </div>
                            <p>
                                Moodboards explored music, EDM, retro ‘70s, and Art Deco jazz aesthetics. The EDM-inspired direction was chosen for bold, immersive energy.
                            </p>
                        </div>

                        <div className="approach-context-item">
                            <div className="context-item-header iteration-feedback">
                                <CircleCheckIcon className="circle-check-icon" />
                                <h4>User-centered flow</h4>
                            </div>
                            <p>
                                Mapped attendee journeys across signage, print, and digital touchpoints to ensure intuitive wayfinding and accessible information.
                            </p>
                        </div>

                        <div className="approach-context-item">
                            <div className="context-item-header iteration-feedback">
                                <CircleCheckIcon className="circle-check-icon" />
                                <h4>Cohesive design language</h4>
                            </div>
                            <p>
                                Patterns, colors, and textures tied together banners, coasters, slide decks, and digital assets into a fully immersive experience.
                            </p>
                        </div>

                        <div className="approach-context-item">
                            <div className="context-item-header iteration-feedback">
                                <CircleCheckIcon className="circle-check-icon" />
                                <h4>Sustainable execution</h4>
                            </div>
                            <p>
                                Printed signage used recyclable materials; digital assets were designed for reuse across future events, aligning with environmental values.
                            </p>
                        </div>
                    </div>

                    <p className="sub-section-label">Moodboards</p>

                            <CaseStudyImage
                                src={CaseStudyImage32}
                                alt="Exploratory moodboards presenting three visual directions—high-energy EDM/tech, retro ’70s, and Art Deco jazz—to define the conference’s creative tone."
                                caption="Moodboards explored three distinct aesthetics to shape the conference theme, with the final EDM-inspired system chosen for its bold, immersive energy and alignment with SecureWorld’s brand goals."
                            />
                            <CaseStudyImage
                                src={CaseStudyImage33}
                                alt="Exploratory moodboards presenting three visual directions—high-energy EDM/tech, retro ’70s, and Art Deco jazz—to define the conference’s creative tone."
                                caption="Moodboards explored three distinct aesthetics to shape the conference theme, with the final EDM-inspired system chosen for its bold, immersive energy and alignment with SecureWorld’s brand goals."
                            />
                            <CaseStudyImage
                                src={CaseStudyImage34}
                                alt="Exploratory moodboards presenting three visual directions—high-energy EDM/tech, retro ’70s, and Art Deco jazz—to define the conference’s creative tone."
                                caption="Moodboards explored three distinct aesthetics to shape the conference theme, with the final EDM-inspired system chosen for its bold, immersive energy and alignment with SecureWorld’s brand goals."
                            />
                </div>
            </section>

            <section className="process-section-header">
                <div className="section-left">
                    <h3>From Concept To Launch</h3>
                </div>

                <div className="section-right">
                    <TimelineItem title="Week 1 Exploration & Direction">
                        <ul>
                            <li>Developed moodboards fusing live music and cybersecurity energy.</li>
                            <li>Defined the event’s visual tone with internal teams.</li>
                            <li>Locked in cohesive color palettes and pattern systems.</li>
                        </ul>
                    </TimelineItem>

                    <TimelineItem title="Week 2 Design Development">
                        <ul>
                            <li>Built a complete asset system including banners, backdrops, coasters, and digital templates.</li>
                            <li>Developed branded slide decks for speakers and sessions.</li>
                            <li>Iterated layouts and patterns for visual impact and readability.</li>
                        </ul>
                    </TimelineItem>

                    <TimelineItem title="Week 3 Production & Delivery">
                        <ul>
                            <li>Prepared prepress and Pantone-matched artwork.</li>
                            <li>Coordinated vendor printing with recyclable materials.</li>
                            <li>Delivered all assets on time, ensuring flawless execution.</li>
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
                                A bold vision met tight deadlines and high expectations. This project required transforming a traditional cybersecurity conference into an immersive, high-energy experience that balanced professionalism with excitement.
                            </p>

                            <div className="obstacles-context-item">
                                <div className="context-item-header obstacles">
                                    <CogIcon className="cog-icon" />
                                    <h4>Obstacles</h4>
                                </div>
                                <ul>
                                    <li>Balancing a high-energy design with a tight three-week timeline.</li>
                                    <li>Ensuring large-scale visuals were bold from afar yet cohesive with smaller touchpoints.</li>
                                    <li>Coordinating multiple vendors for color accuracy, proofing, and production deadlines.</li>
                                    <li>Integrating sustainable materials without compromising design quality.</li>
                                </ul>
                            </div>

                            <div className="obstacles-context-item">
                                <div className="context-item-header milestones">
                                    <CircleCheckIcon className="circle-check-icon" />
                                    <h4>Milestones</h4>
                                </div>
                                <ul>
                                    <li>Unified design system across digital, print, and environmental assets.</li>
                                    <li>Completed prepress and proofing with Pantone-matched accuracy.</li>
                                    <li>Delivered all assets on time for the first conference of the season.</li>
                                    <li>Reinforced the conference identity with energy-driven, sustainable, and immersive design.</li>
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
                                    <li>A brand system is more than assets, it’s a scalable visual language that unifies experiences across mediums.</li>
                                    <li>Consistency in typography, color, and structure creates recognition and adaptability for future events.</li>
                                </ul>
                            </div>

                            <div className="obstacles-context-item">
                                <div className="context-item-header obstacles">
                                    <FilePenLineIcon className="filepenline-icon" />
                                    <h4>Key challenges overcome</h4>
                                </div>
                                <ul>
                                    <li>Designed a flexible system that can be reused across conferences without feeling like a “one-off.”</li>
                                    <li>Maintained cohesion under tight production timelines through clear rules and direct vendor proofing.</li>
                                </ul>
                            </div>

                            <div className="obstacles-context-item">
                                <div className="context-item-header obstacles">
                                    <FilePenLineIcon className="filepenline-icon" />
                                    <h4>Personal reflections</h4>
                                </div>
                                <ul>
                                    <li>A strong system transforms a conference into a branded experience where sponsors, wayfinding, and attendee interactions all feel intentional.</li>
                                    <li>Seeing increased engagement and streamlined operations reinforced the power of thoughtful design.</li>
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
                            The SecureWorld conference brand system was built for expansion. These next steps show how it could evolve while maintaining a cohesive, high-impact identity across future events.
                        </p>

                        <div className="context-item-container">

                            <div className="growth-context-item">
                                <div className="context-item-header lessons-learned">
                                    <TrendingUpIcon className="trendingup-icon" />
                                    <h4>Refined event sub-branding</h4>
                                </div>
                                <p>
                                    Introduce subtle variations for new tracks, regional events, or virtual experiences while maintaining brand unity.
                                </p>
                            </div>

                            <div className="growth-context-item">
                                <div className="context-item-header key-challenges-overcome">
                                    <TrendingUpIcon className="trendingup-icon" />
                                    <h4>Expanded collateral suite</h4>
                                </div>
                                <p>
                                    Develop modular assets like sponsor kits, exhibitor guides, and adaptable templates for consistent communication across events.
                                </p>
                            </div>

                            <div className="growth-context-item">
                                <div className="context-item-header key-challenges-overcome">
                                    <TrendingUpIcon className="trendingup-icon" />
                                    <h4>Digital-first design assets</h4>
                                </div>
                                <p>
                                    Create motion graphics, social toolkits, and digital signage templates to strengthen online and on-site brand presence.
                                </p>
                            </div>

                            <div className="growth-context-item">
                                <div className="context-item-header key-challenges-overcome">
                                    <TrendingUpIcon className="trendingup-icon" />
                                    <h4>Experience-driven enhancements</h4>
                                </div>
                                <p>
                                    Expand into interactive schedules, apps, and wayfinding systems, ensuring the brand is felt visually and functionally throughout the attendee journey.
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
