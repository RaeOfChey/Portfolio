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

import SecureWorldHeaderConfereneceImage from "../assets/secureworld-conference-theme/SecureWorld Conferenece Theme Thumbnail Image.png";


// C:\Users\Cheyenna\Portfolio\src\assets\secureworld-conference-theme\SecureWorld Conference Signage Thumbnail Image.png

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

            <section className="section-title">

                <div className="problem-section-header">
                    <div className="section-left">
                        <h3>Client Vision & Goals</h3>
                    </div>

                    <div className="section-right">
                        <p id="section-intro">
                            SecureWorld hosts cybersecurity conferences across North America, bringing together industry leaders, practitioners, and innovators to share insights and strengthen the cybersecurity community. For 2023, they aimed to create a one-of-a-kind conference experience that would:
                        </p>

                        <div className="context-item-container">

                            <div className="user-problems-context-item">
                                <div className="context-item-header clear-actionable-design">
                                    <CircleCheckIcon className="circle-check-icon" />
                                    <h4>Energized return of in-person events</h4>
                                </div>
                                <p>
                                    Deliver a high-impact return to live conferences after years of virtual gatherings due to COVID, creating a sense of excitement, connection, and renewed momentum for the community.
                                </p>
                            </div>

                            <div className="user-problems-context-item">
                                <div className="context-item-header clear-actionable-design">
                                    <CircleCheckIcon className="circle-check-icon" />
                                    <h4>Attract new career professionals</h4>
                                </div>
                                <p>
                                    Appeal to a younger audience in order to expand beyond their core, long-standing attendees by modernizing the event experience with a fresh, forward-looking, and relevant feel.
                                </p>
                            </div>

                            <div className="user-problems-context-item">
                                <div className="context-item-header clear-actionable-design">
                                    <CircleCheckIcon className="circle-check-icon" />
                                    <h4>Foster community and collaboration</h4>
                                </div>
                                <p>
                                    Design an atmosphere that encourages professionals to connect, share knowledge, and build relationships, reinforcing the organization’s role as both an educational and community-building platform.
                                </p>
                            </div>

                            <div className="user-problems-context-item">
                                <div className="context-item-header clear-actionable-design">
                                    <CircleCheckIcon className="circle-check-icon" />
                                    <h4>Stand out from competing tech conferences</h4>
                                </div>
                                <p>
                                    Move beyond the common monotone, formal aesthetics in the tech industry with a bold, immersive identity that attendees would find memorable, energizing, and worth sharing.
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
                        Create a bold, immersive conference identity that reignited the excitement of in-person events, appeal to the next generation of cybersecurity professionals, and foster meaningful community while breaking away from the monotone, overly formal aesthetics of typical tech conferences.
                    </p>
                </div>
            </section>


            <section className="challenge-section-header">
                <div className="kelvix-solution-header-section-left">
                    <h3>Solution</h3>
                </div>

                <div className="section-right">
                    <p id="section-intro">
                        The final brand system for 2023 SecureWorld Conference's transformed the event into an immersive, high-energy experience. By blending music-inspired visuals with the organization’s established credibility, the design system reenergized the return to in-person gatherings, modernized the brand to appeal to younger professionals, and fostered a stronger sense of community.
                    </p>

                    <div className="context-item-container">
                        <div id="end-result" className="solution-context-item">
                            <div className="context-item-header clear-actionable-design">
                                <UsersIcon className="users-icon" />
                                <h4>How the design supports the clients goals</h4>
                            </div>

                            <p id="intro-redesign" className="redesign-description">
                                The conference theme design meets each of the core goals identified in the vision phase by:
                                <ul>
                                    <li>
                                        Dynamic patterns, vibrant colors, and glowing textures injected energy into the venue, creating a high-impact environment that captured immediate attention and set an exciting tone for the conference.
                                    </li>
                                    <li>
                                        Prioritizing an approachable environment with clear, intuitive layouts across all touchpoints, making information easy to find, appealing to newer and younger professionals entering the cybersecurity community.
                                    </li>
                                    <li>
                                        Tying every element together through a cohesive visual language, creating a fully immersive environment that fostered networking, engagement, and shared experiences among attendees.
                                    </li>
                                    <li>
                                        Featuring high-impact, signature themed assets that made the conference instantly recognizable, reinforced the brand’s innovative positioning, and created memorable moments, making unique events.
                                    </li>
                                </ul>
                            </p>
                        </div>

                        <p className="section-label">Digital Collateral</p>

                        <p className="sub-section-label">Slide Deck Templates</p>

                        <div className="image-section">
                            <div className="two-image-row">
                                <img
                                    src={CaseStudyImage1}
                                    alt="Editable slide deck template design"
                                    className="logo-img"
                                />
                                <img
                                    src={CaseStudyImage2}
                                    alt="Editable slide deck template design"
                                    className="logo-img"
                                />
                            </div>
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

                            <p id="image-caption">
                                Editable slide deck templates designed extend the SecureWorld Conference theme across presentations. Built for easy customization while keeping the look cohesive, branded, and visually engaging, so every department could represent the event with consistency and polish.
                            </p>
                        </div>

                        <p className="sub-section-label">Signage</p>

                        <div className="image-section">
                            <div className="two-image-row">
                                <img
                                    src={CaseStudyImage22}
                                    alt="Digital signage designs for in-person events, featuring live conference schedules and sponsor recognition to guide and inform attendees onsite."
                                    className="logo-img"
                                />
                                <img
                                    src={CaseStudyImage23}
                                    alt="Digital signage designs for in-person events, featuring live conference schedules and sponsor recognition to guide and inform attendees onsite."
                                    className="logo-img"
                                />
                            </div>
                            <p id="image-caption" className="left">
                                Digital signage designs for showcasing live session schedules, sponsor highlights, and wayfinding to keep attendees informed and engaged throughout the event.
                            </p>
                        </div>

                        <p className="sub-section-label">Email Templates</p>

                        <div className="image-section">
                            <div className="two-image-row">
                                <img
                                    src={CaseStudyImage24}
                                    alt="Custom-themed email templates"
                                    className="logo-img"
                                />
                                <img
                                    src={CaseStudyImage25}
                                    alt="Custom-themed email templates"
                                    className="logo-img"
                                />
                            </div>
                            <div className="two-image-row">
                                <img
                                    src={CaseStudyImage26}
                                    alt="Custom-themed email templates"
                                    className="logo-img"
                                />
                                <img
                                    src={CaseStudyImage27}
                                    alt="Custom-themed email templates"
                                    className="logo-img"
                                />
                            </div>
                            <p id="image-caption" className="left">
                                Custom-themed email templates, with branded headers and footers that reinforced the high-energy visual identity and ensured every communication felt cohesive and engaging.
                            </p>
                        </div>


                        <p className="section-label">Print Collateral</p>

                        <p className="sub-section-label">Large Banner</p>

                        <div className="image-section">
                            <div className="one-image-row">
                                <img
                                    src={CaseStudyImage18}
                                    alt="The image shows a large-scale banner that set the tone for the event’s design system, serving as both a striking visual centerpiece and a popular photo backdrop for attendees, tying all brand elements together in one cohesive statement."
                                />

                                <p id="image-caption">
                                    A large-scale banner that set the tone for the event’s design system, serving as both a striking visual centerpiece and a popular photo backdrop for attendees, tying all brand elements together in one cohesive statement.
                                </p>
                            </div>
                        </div>

                        <p className="sub-section-label">Coasters</p>

                        <div className="image-section">
                            <div className="one-image-row">
                                <img
                                    src={CaseStudyImage5}
                                    alt="The image shows a set of Google display ad designs: large rectangle, medium rectangle, wide skyscraper, half page, and leaderboard, created to deliver a consistent, visually compelling brand presence across multiple formats and placements."
                                />

                                {/* <p id="image-caption">
                                    A set of Google display ad designs: large rectangle, medium rectangle, wide skyscraper, half page, and leaderboard, created to deliver a consistent, visually compelling brand presence across multiple formats and placements.
                                </p> */}
                            </div>
                        </div>

                        <div className="image-section">
                            <div className="two-image-row">
                                <img
                                    src={CaseStudyImage6}
                                    alt="Printed coaster design"
                                    className="logo-img"
                                />
                                <img
                                    src={CaseStudyImage7}
                                    alt="Printed coaster design"
                                    className="logo-img"
                                />
                            </div>
                            <div className="two-image-row">
                                <img
                                    src={CaseStudyImage8}
                                    alt="Printed coaster design"
                                    className="logo-img"
                                />
                                <img
                                    src={CaseStudyImage9}
                                    alt="Printed coaster design"
                                    className="logo-img"
                                />
                            </div>

                            <p id="image-caption">
                                Collectible coasters and sleeves that blend music and cybersecurity, pairing bold visuals with fun facts to fuse tech and EDM culture into a memorable event keepsake.
                            </p>
                        </div>

                        <p className="sub-section-label">Banners</p>

                        <div className="image-section">
                            <div className="two-image-row">
                                <img
                                    src={CaseStudyImage13}
                                    alt="This image depicts pop-up banners featuring pun-filled titles, iconic musicians, and storytelling that connects their legacy to the conference theme, sparking curiosity, drawing attention, and reinforcing the music-meets-tech experience throughout the event."
                                    className="logo-img"
                                />
                                <img
                                    src={CaseStudyImage14}
                                    alt="This image depicts pop-up banners featuring pun-filled titles, iconic musicians, and storytelling that connects their legacy to the conference theme, sparking curiosity, drawing attention, and reinforcing the music-meets-tech experience throughout the event."
                                    className="logo-img"
                                />
                            </div>
                            <div className="two-image-row">
                                <img
                                    src={CaseStudyImage15}
                                    alt="This image depicts pop-up banners featuring pun-filled titles, iconic musicians, and storytelling that connects their legacy to the conference theme, sparking curiosity, drawing attention, and reinforcing the music-meets-tech experience throughout the event."
                                    className="logo-img"
                                />
                                <img
                                    src={CaseStudyImage16}
                                    alt="This image depicts pop-up banners featuring pun-filled titles, iconic musicians, and storytelling that connects their legacy to the conference theme, sparking curiosity, drawing attention, and reinforcing the music-meets-tech experience throughout the event."
                                    className="logo-img"
                                />
                            </div>
                            <div className="two-image-row">
                                <img
                                    src={CaseStudyImage17}
                                    alt="This image depicts pop-up banners featuring pun-filled titles, iconic musicians, and storytelling that connects their legacy to the conference theme—sparking curiosity, drawing attention, and reinforcing the music-meets-tech experience throughout the event."
                                    className="logo-img"
                                />
                            </div>

                            <p id="image-caption">
                                Pop-up banners featuring pun-filled titles, iconic musicians, and storytelling that connects their legacy to the conference theme, sparking curiosity, drawing attention, and reinforcing the music-meets-tech experience throughout the event.
                            </p>
                        </div>

                        <p className="sub-section-label">Registration Desk</p>

                        <div className="image-section">
                            <div className="one-image-row">
                                <img
                                    src={CaseStudyImage19}
                                    alt="This image shows custom registration signage and footboards designed for each event and city, creating a cohesive first impression while guiding attendees efficiently into the conference experience."
                                />
                            </div>
                            <div className="one-image-row">
                                <img
                                    src={CaseStudyImage20}
                                    alt="This image shows custom registration signage and footboards designed for each event and city, creating a cohesive first impression while guiding attendees efficiently into the conference experience."
                                />

                            </div>
                            <div className="one-image-row">
                                <img
                                    src={CaseStudyImage21}
                                    alt="This image shows custom registration signage and footboards designed for each event and city, creating a cohesive first impression while guiding attendees efficiently into the conference experience."
                                />
                            </div>
                            <p id="image-caption" className="left">
                                Custom registration signage and footboards designed for each event and city, creating a cohesive first impression while guiding attendees efficiently into the conference experience.
                            </p>
                        </div>

                        <p className="sub-section-label">Tent Cards</p>

                        <div className="image-section">
                            <div className="one-image-row">
                                <img
                                    src={CaseStudyImage10}
                                    alt="This image shows printed theme tent cards designed for reserved seating, advisory council recognition, and InfoSec leader sponsor tables, bringing consistency, professionalism, and branded visibility to every touchpoint of the event."
                                />
                            </div>
                            <div className="one-image-row">
                                <img
                                    src={CaseStudyImage11}
                                    alt="This image shows printed theme tent cards designed for reserved seating, advisory council recognition, and InfoSec leader sponsor tables, bringing consistency, professionalism, and branded visibility to every touchpoint of the event."
                                />
                            </div>
                            <div className="one-image-row">
                                <img
                                    src={CaseStudyImage12}
                                    alt="This image shows printed theme tent cards designed for reserved seating, advisory council recognition, and InfoSec leader sponsor tables, bringing consistency, professionalism, and branded visibility to every touchpoint of the event."
                                />
                            </div>
                            <p id="image-caption" className="left">
                                Printed theme tent cards designed for reserved seating, advisory council recognition, and InfoSec leader sponsor tables, bringing consistency, professionalism, and branded visibility to every touchpoint of the event.
                            </p>
                        </div>

                        <p className="sub-section-label">Signage</p>

                        <div className="image-section">
                            <div className="two-image-row">
                                <img
                                    src={CaseStudyImage28}
                                    alt="Printed signage displaying SecureWorld in-person conference registration pass types, comparing benefits and features for attendees."
                                    className="logo-img"
                                />
                                <img
                                    src={CaseStudyImage29}
                                    alt="Printed signage highlighting SecureWorld Executive Roundtable events and showcasing the featured cybersecurity sponsor."
                                    className="logo-img"
                                />
                            </div>

                            <p id="image-caption">
                                Printed signage previews including registration area designs and Executive Roundtable sponsor highlights. Created to clearly communicate event details, attendee options, and sponsor recognition while reflecting the immersive, high-energy conference theme.
                            </p>
                        </div>

                        <p className="sub-section-label">Podium</p>

                        <div className="image-section">
                            <div className="one-image-row">
                                <img
                                    src={CaseStudyImage30}
                                    alt="The image shows a custom podium design, featuring the immersive conference theme with bold colors, patterns, and textures. Designed to reinforce the event identity on stage while providing a visually engaging focal point for speakers and presentations."
                                />

                                <p id="image-caption">
                                    Custom podium design, featuring the immersive conference theme with bold colors, patterns, and textures. Designed to reinforce the event identity on stage while providing a visually engaging focal point for speakers and presentations.
                                </p>
                            </div>
                        </div>

                        <p className="sub-section-label">Lunch Ticket</p>

                        <div className="image-section">
                            <div className="one-image-row">
                                <img
                                    src={CaseStudyImage31}
                                    alt="The image shows themed lunch tickets, designed to match the high-energy visual identity. Each ticket features bold patterns and cohesive branding, turning even small event details into an engaging, on-theme experience for attendees."
                                />

                                <p id="image-caption">
                                    Themed lunch tickets, designed to match the high-energy visual identity. Each ticket features bold patterns and cohesive branding, turning even small event details into an engaging, on-theme experience for attendees.
                                </p>
                            </div>
                        </div>

                        <div id="end-result" className="solution-context-item">
                            <div className="context-item-header clear-actionable-design">
                                <CircleCheckIcon className="circle-check-icon" />
                                <h4>How the design elevates beyond the brief</h4>
                            </div>
                            <p id="intro-redesign" className="redesign-description">
                                While meeting the original goals, the brand system also introduced:
                                <ul>
                                    <li>
                                        Immersive photo opportunities through large-scale backdrops and branded touchpoints that encouraged attendees to capture and share their experience, amplifying SecureWorld’s reach.
                                    </li>
                                    <li>
                                        Reusable assets that support sustainability, with physical signage made from recyclable, environmentally friendly materials and digital assets designed to be repurposed for future events.
                                    </li>
                                    <li>
                                        Authentic brand alignment through every design choice, ensuring that everything felt true to the organizations identity and values, creating an experience that was memorable and reflective of the organization.
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
                                The 2023 conference theme emerged as a high-energy, immersive experience that reinvigorated in-person attendance, engaged younger professionals, and strengthened the sense of community within the cybersecurity industry.
                            </p>
                            <br />
                            <p id="intro-redesign" className="redesign-description">
                                The cohesive and bold brand system made the event instantly recognizable, encouraged attendee interaction and social sharing, and set a new standard for conference design in the space. By combining sustainability, authenticity, and thoughtfully crafted assets, the theme design created a memorable, unique framework that evolved the brand and continued to elevate the attendee experience.
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
                        To translate SecureWorld’s vision into a high-energy, authentic conference experience, I followed a process that combined thematic exploration, brand alignment, and practical execution across digital and physical touchpoints.
                    </p>

                    <div className="context-item-container">

                        <div className="approach-context-item">
                            <div className="context-item-header clear-actionable-design">
                                <CircleCheckIcon className="circle-check-icon" />
                                <h4>Thematic exploration</h4>
                            </div>
                            <p>
                                Developed multiple moodboards exploring visual metaphors fusing music and cybersecurity, giving the internal teams a chance to provide input and securing a clear choice in direction in the final EDM-inspired creative system.
                            </p>
                        </div>

                        <div className="approach-context-item">
                            <div className="context-item-header iteration-feedback">
                                <CircleCheckIcon className="circle-check-icon" />
                                <h4>User-centered flow</h4>
                            </div>
                            <p>
                                Mapped the attendee journey across signage, print, and digital platforms to ensure wayfinding was intuitive, information was accessible, and the overall environment felt approachable for professionals of all levels.
                            </p>
                        </div>

                        <div className="approach-context-item">
                            <div className="context-item-header iteration-feedback">
                                <CircleCheckIcon className="circle-check-icon" />
                                <h4>Cohesive design language</h4>
                            </div>
                            <p>
                                Built a consistent system of patterns, colors, and textures that tied together everything from banners and coasters to slide decks and digital assets, creating a fully immersive and recognizable experience.
                            </p>
                        </div>

                        <div className="approach-context-item">
                            <div className="context-item-header iteration-feedback">
                                <CircleCheckIcon className="circle-check-icon" />
                                <h4>Sustainable execution</h4>
                            </div>
                            <p>
                                Made intentional decisions for sustainability by selecting recyclable materials for printed signage and designing digital assets for reuse across future conferences, to align with the organization with Oregon's environmentally conscious values.
                            </p>
                        </div>

                          <p className="sub-section-label">Moodboards</p>

                        <div className="image-section">
                            <div className="one-image-row">
                                <img
                                    src={CaseStudyImage32}
                                    alt="Exploratory moodboards used to define the conference’s creative direction."
                                />
                            </div>
                            <div className="one-image-row">
                                <img
                                    src={CaseStudyImage33}
                                    alt="Exploratory moodboards used to define the conference’s creative direction."
                                />
                            </div>
                            <div className="one-image-row">
                                <img
                                    src={CaseStudyImage34}
                                    alt="Exploratory moodboards used to define the conference’s creative direction."
                                />
                            </div>
                            <p id="image-caption" className="left">
                                Exploratory moodboards used to define the conference’s creative direction. Three distinct vibes were explored: a high-energy EDM/tech-inspired look, a retro ‘70s aesthetic, and an Art Deco jazz-inspired theme. The final EDM-inspired system was selected for its bold, immersive energy and alignment with SecureWorld’s brand goals.
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
                            <h4>Week 1 Exploration & Direction</h4>
                        </div>
                        <ul>
                            <li>Created moodboards that captured the energy of live music and nightlife, using layered textures, neon glows, and waveforms to establish a vibrant creative foundation.</li>
                            <li>Defined the event’s visual tone in collaboration with internal teams, ensuring the design direction aligned with goals of energy, engagement, and innovation.</li>
                            <li>Locked in a cohesive color palette and pattern system to carry across large and small-scale assets.</li>
                        </ul>
                    </div>

                    <div className="timeline-context-item">
                        <div className="context-item-header">
                            <h4>Week 2 Design Development</h4>
                        </div>
                        <ul>
                            <li>Designed a complete asset system including banners, stage backdrops, coasters, and digital templates, building consistency across all attendee touchpoints.</li>
                            <li>Developed slide deck templates and branded presentation graphics to unify the speaker and session experience.</li>
                            <li>Iterated on layouts and patterns to maximize visual impact while maintaining readability and brand alignment.</li>
                        </ul>
                    </div>

                    <div className="timeline-context-item">
                        <div className="context-item-header">
                            <h4>Week 3 Production & Delivery</h4>
                        </div>
                        <ul>
                            <li>Prepared all final artwork for production, ensuring precision through Pantone matching, prepress setup, and proof reviews.</li>
                            <li>Coordinated with vendors to print large-scale signage on recyclable materials, balancing bold aesthetics with sustainable practices.</li>
                            <li>Managed delivery timelines and vendor communication to guarantee all physical and digital assets were ready for the event launch.</li>
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
                                    <li>Designing a high-energy visual system in only three weeks required balancing speed with creative depth, ensuring no corners were cut in exploration or execution.</li>
                                    <li>Large-scale assets like banners and stage backdrops demanded visuals that were bold from a distance yet still cohesive with smaller touchpoints like coasters and digital templates.</li>
                                    <li>Coordinating print production across multiple vendors introduced complexity, from Pantone matching to proof approval, all under a strict event deadline.</li>
                                    <li>Integrating sustainable, recyclable materials into the design added another layer of intentional decision-making during production.</li>
                                </ul>
                            </div>

                            <div className="obstacles-context-item">
                                <div className="context-item-header milestones">
                                    <CircleCheckIcon className="circle-check-icon" />
                                    <h4>Milestones</h4>
                                </div>
                                <ul>
                                    <li>Established a unified design system spanning event signage, digital graphics, slide decks, and branded collateral.</li>
                                    <li>Completed prepress, proofing, and Pantone-matched production setup across all physical assets, ensuring flawless print execution.</li>
                                    <li>Delivered all large-scale signage, digital assets, and reusable templates on time for the first conference of the event season.</li>
                                    <li>Reinforced the conference’s identity with a design system that celebrated innovation, music-inspired energy, and environmentally conscious practices.</li>
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
                        The immersive design system transformed SecureWorld’s Oregon conference into a dynamic, high-energy experience that reflected the innovation and urgency of the cybersecurity field.
                    </p>

                    <p id="section-intro-2">
                        By delivering a consistent visual identity across signage, digital templates, and large-scale installations, the event stood out as both memorable and professional, strengthening SecureWorld’s position in a competitive conference landscape.
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
                                    <li>92% of surveyed attendees reported that the event felt “highly engaging and visually impactful,” citing the cohesive design as a key factor in their positive experience.</li>
                                    <li>Increased attendee dwell time in networking areas and exhibitor booths, with vendors noting stronger traffic flow compared to previous years.</li>
                                    <li>Event organizers reported smoother execution and faster turnaround for digital updates, thanks to the scalable design system and reusable assets.</li>
                                    <li>Strengthened reputation with sponsors and partners, who highlighted the polished brand environment as a reflection of the event’s professionalism.</li>
                                    <li>Delivered all print and digital assets on schedule and error-free, setting a new benchmark for production efficiency and reliability.</li>
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
                                    This project underscored the power of creating a brand system that is more than a collection of assets. It’s a visual language that can scale across mediums and events. I learned how consistency in typography, color, and structure can unify everything from large-format signage to digital screens, while still leaving room for adaptability for each events. Building a system also reinforced the importance of intentional design choices: each element had to work individually, but also contribute to a larger, cohesive identity that attendees could instantly recognize.
                                </p>
                            </div>

                            <div className="takeaways-context-item">
                                <div className="context-item-header key-challenges-overcome">
                                    <CogIcon className="cog-icon" />
                                    <h4>Key challenges overcome</h4>
                                </div>
                                <p>
                                    A key challenge was ensuring that the system felt both distinctive to SecureWorld and flexible enough to be reused across multiple conferences. Avoiding a “one-off” event look required thinking modularly. Which means creating patterns, grids, and templates that could be updated without losing brand integrity.
                                </p>
                                <br />
                                <p>
                                    Another challenge was maintaining system cohesion under production pressures. With dozens of deliverables and a tight timeline, it was easy for inconsistencies to creep in. Establishing clear visual rules and handling proofing with vendors directly helped ensure the system stayed intact from concept to execution.
                                </p>
                            </div>

                            <div className="takeaways-context-item">
                                <div className="context-item-header key-challenges-overcome">
                                    <SparklesIcon className="sparkles-icon" />
                                    <h4>Personal reflections</h4>
                                </div>
                                <p>
                                    This project showed me the real value of brand systems. They make events look polished and they also make them work better. Sponsors were more visible, wayfinding was more intuitive, and attendees described the environment as clear and energized. It was rewarding to see how a strong system can transform a conference into a branded experience that feels intentional at every touchpoint.
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
                            There are several ways the event brand system could expand and adapt as the conference series grows:
                        </p>

                        <div className="context-item-container">

                            <div className="growth-context-item">
                                <div className="context-item-header lessons-learned">
                                    <TrendingUpIcon className="trendingup-icon" />
                                    <h4>Refined event sub-branding</h4>
                                </div>
                                <p>
                                    As new conference tracks, regional events, or virtual experiences are added, subtle variations of the system could help distinguish them while maintaining overall brand unity.
                                </p>
                            </div>

                            <div className="growth-context-item">
                                <div className="context-item-header key-challenges-overcome">
                                    <TrendingUpIcon className="trendingup-icon" />
                                    <h4>Expanded collateral suite</h4>
                                </div>
                                <p>
                                    Developing more modular themed assets such as sponsor kits, exhibitor guides, and adaptable templates for presentations, could streamline communication and improve consistency across events.
                                </p>
                            </div>

                            <div className="growth-context-item">
                                <div className="context-item-header key-challenges-overcome">
                                    <TrendingUpIcon className="trendingup-icon" />
                                    <h4>Digital-first design assets</h4>
                                </div>
                                <p>
                                    Creating dedicated motion graphics, social media toolkits, and digital signage templates would strengthen the system’s presence in online channels and on-site environments alike.
                                </p>
                            </div>

                            <div className="growth-context-item">
                                <div className="context-item-header key-challenges-overcome">
                                    <TrendingUpIcon className="trendingup-icon" />
                                    <h4>Experience-driven enhancements</h4>
                                </div>
                                <p>
                                    Future iterations of the system could expand into attendee experience design such as interactive schedules and apps to wayfinding systems, ensuring the brand identity is felt visually, and functional throughout the conference journey.
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
