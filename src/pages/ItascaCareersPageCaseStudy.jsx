import React, { useState, useRef, useEffect } from 'react';
import ScrollButton from '../components/ScrollButton';

import '../styles/styles.css';
import '../styles/CaseStudy.css';

import { DownvoteIcon } from '../components/DownvoteIcon';
import { CircleCheckIcon } from '../components/CircleCheckIcon';
import { RefreshIcon } from '../components/RefreshIcon';
import { UsersIcon } from '../components/UsersIcon';
import { FilePenLineIcon } from '../components/FilePenLineIcon';
import { CogIcon } from '../components/CogIcon';
import { TrendingUpIcon } from '../components/TrendingUpIcon';
import { SparklesIcon } from '../components/SparklesIcon';
import { ArrowRightIcon } from '../components/ArrowRightIcon';

import ItascaCareersHeaderImage from '../assets/ITASCA Careers Page Header Image.png';
import CaseStudyImage1 from '../assets/ITASCA Careers Page CaseStudy Image1.png';
import CaseStudyImage3 from '../assets/EmployEase CaseStudy Image3.png';
import CaseStudyImage5 from '../assets/EmployEase CaseStudy Image5.png';
import CaseStudyImage6 from '../assets/EmployEase CaseStudy Image6.png';
import CaseStudyImage7 from '../assets/EmployEase CaseStudy Image7.png';
import CaseStudyImage8 from '../assets/EmployEase CaseStudy Image8.png';

const EmployEaseCaseStudy = () => {

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
                        <h2 className="case-study-subtitle">Developing a careers landing page, to streamline the hiring process and candidate journey, increasing quality applicants.</h2>

                        {/* <div className="links">
                            <a href="https://www.itascacg.com/about/careers-main" target="_blank">View Live</a>
                        </div> */}
                    </div>

                    <div className="case-study-header-right">
                        <img
                            id="itasca-careers-header-image"
                            src={ItascaCareersHeaderImage}
                            alt="A preview of the final ITASCA Careers landing page design."
                            className="case-study-image"
                        />
                    </div>
                </div>

                <section className="section-title">
                    <div className="project-overview">
                        <p><strong>Client<br /></strong>Itasca Consulting Group Inc.</p>
                        <p><strong>Duration<br /></strong>2 weeks</p>
                        <p><strong>Completed<br /></strong>January 2024</p>
                        <p><strong>Roles<br /></strong>UX/UI Designer, Front-End Developer</p>
                    </div>
                </section>
            </div>

            <section className="section-title">

                <div className="problem-section-header">
                    <div className="section-left">
                        <h3>User Problems</h3>
                    </div>

                    <div className="section-right">
                        <p id="section-intro">
                            A global company lacked a dedicated careers landing page, making it difficult for job seekers to learn about the company and find opportunities. This led to misalignment between candidates and the company, as well as a drop-off in desirable applicants, ultimately slowing down hiring teams and processes. Key pain points include:
                        </p>

                        <div className="context-item-container">

                            <div className="user-problems-context-item">
                                <div className="context-item-header">
                                    <DownvoteIcon className="downvote-icon" />
                                    <h4>Inconsistent key information</h4>
                                </div>
                                <p>
                                    Prospective candidates struggled to find high-level details about the company’s culture, values, benefits, and what makes the company an attractive place to work (EVP). This led to confusion or missed opportunities to present the company in the best light.
                                </p>
                            </div>

                            <div className="user-problems-context-item">
                                <div className="context-item-header">
                                    <DownvoteIcon className="downvote-icon" />
                                    <h4>Lack of branding</h4>
                                </div>
                                <p>
                                    Without proper branding, the company's identity and culture were not clearly communicated. Candidates were unable to connect emotionally with the company and were left with the impression that it was unprofessional, disorganized, or less appealing.
                                </p>
                            </div>

                            <div className="user-problems-context-item">
                                <div className="context-item-header">
                                    <DownvoteIcon className="downvote-icon" />
                                    <h4>Inconsistent candidate engagement</h4>
                                </div>
                                <p>
                                    Without engaging experience-showcasing videos, employee stories, or behind-the-scenes looks, potential candidates had no opportunity to connect deeply with the company’s culture. This resulted in a less memorable experience, leaving candidates struggling to envision themselves at the company.
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
                        The challenge was to create a centralized, employer-branded careers landing page that streamlined the recruitment process for both candidates and the hiring team. The page had to address effectively communicate the company's culture and values, resonate emotionally with candidates, and streamline the hiring process.
                    </p>
                </div>
            </section>



            <section className="approach-section-header">

                <div className="itasca-careers-title-section-left">
                    <h3 className="approach-header">Approach</h3>
                </div>

                <div className="section-right">

                    <p id="section-intro">
                        The careers page was designed as a unified solution to support a global presence while providing a seamless and engaging experience for job seekers. The project centered around the following key principles:
                    </p>

                    <div className="context-item-container">

                        <div className="approach-context-item">
                            <div className="context-item-header clear-actionable-design">
                                <CircleCheckIcon className="circle-check-icon" />
                                <h4>Global applicability</h4>
                            </div>
                            <p>
                                The design focuses on creating a concise, universally applicable, and reflective of the company’s global identity while still appealing to diverse candidates. For an international company, each location has unique hiring practices, benefits, and cultural expectations, and need to be accurately and consistantly represented.
                            </p>
                        </div>

                        <div className="approach-context-item">
                            <div className="context-item-header iteration-feedback">
                                <CircleCheckIcon className="circle-check-icon" />
                                <h4>Strong employer branding</h4>
                            </div>
                            <p>
                                Branding, voice, and messaging are applied consistently, ensuring culture, mission, and values are clearly communicated. Candidates can quickly determine if they are a good fit for the company, leading to more informed applications. Attracting the right candidates and streamlining the hiring process.
                            </p>
                        </div>

                        <div className="approach-context-item">
                            <div className="context-item-header iteration-feedback">
                                <CircleCheckIcon className="circle-check-icon" />
                                <h4>Seamless integration</h4>
                            </div>
                            <p>
                                The page is thoughtfully structured to integrate seamlessly within the larger website ecosystem. It maintains continuity in design and functionality while providing clear pathways for users to explore the company further or move directly into the application process.
                            </p>
                        </div>

                        <div className="image-row-2">
                            <div className="image-column">
                                <p id="approach" className="image-subtitles-left-2">The design focuses on driving engagement with a clear and compelling call to action, guiding job seekers to explore opportunities that align with their skills and aspirations, streamlining the application process for highly interested candidates.</p>
                            </div>
                            <div className="image-column-right-2 left-align">
                                <img
                                    src={CaseStudyImage1}
                                    alt="This image shows the main CTA of the webpage, showcasing how the design focuses on driving engagement with a clear and compelling call to action, guiding job seekers to explore opportunities that align with their skills and aspirations, streamlining the application process for highly interested candidates."
                                    className="case-study-image"
                                />
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <section className="process-section-header">
                <div className="section-left">
                    <h3>Timeline & SDLC</h3>
                </div>

                <div className="section-right">
                    <div className="timeline-context-item">
                        <div className="context-item-header">
                            <h4>Day 1–3 Planning</h4>
                        </div>
                        <ul>
                            <li>Conducted user research with hiring teams across global offices, including surveys and interviews, to understand key challenges in managing job applications.</li>
                            <li>Analyzed competitors' features and gathered insights to inform the design of a seamless, user-friendly application tracking system.</li>
                        </ul>
                    </div>

                    <div className="timeline-context-item">
                        <div className="context-item-header">
                            <h4>Day 4–6 Designing</h4>
                        </div>
                        <ul>
                            <li>Created wireframe and mockup in Figma that showcased branding, culture, and values with an easy to navigate layout to engage users.</li>
                            <li>Designed the page layout to be visually appealing, with clear calls-to-action that would guide users seamlessly to individual job postings.</li>
                        </ul>
                    </div>

                    <div className="timeline-context-item">
                        <div className="context-item-header">
                            <h4>Day 7–9 Implementing</h4>
                        </div>
                        <ul>
                            <li>Developed the careers page using Craft CMS, focusing on a flexible layout that allowed easy updates while maintaining a streamlined design.</li>
                            <li>Ensured the page was mobile-responsive, optimizing layout adjustments and accessibility to make it easy to navigate on both mobile and desktop devices.</li>
                        </ul>
                    </div>

                    <div className="timeline-context-item">
                        <div className="context-item-header">
                            <h4>Day 10–12 Testing</h4>
                        </div>
                        <ul>
                            <li>Conducted cross-browser and device testing to ensure consistency and a seamless user experience across different platforms.</li>
                            <li>Gathered feedback from internal users to refine content hierarchy, page load times, and mobile responsiveness, making adjustments where needed.</li>
                        </ul>
                    </div>

                    <div className="timeline-context-item">
                        <div className="context-item-header">
                            <h4>Day 13–14 Deploying & Maintaining</h4>
                        </div>
                        <ul>
                            <li>Deployed the page to the live website, ensuring everything was functional and aligned with the company's brand.</li>
                            <li>Monitored the page post-launch, tracking user engagement and feedback, and made updates to keep the content fresh and aligned with evolving hiring needs.</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className="skills-carousel-section">

                <div className="section-left">
                    <h4 className="skills-section-header">Skills & Technologies</h4>
                </div>

                <div className="section-right">
                    <div
                        className="carousel-wrapper-casestudy"
                        ref={carouselContainerRef}
                        onMouseDown={handleMouseDown}
                        onMouseLeave={handleMouseLeave}
                        onMouseUp={handleMouseUp}
                        onMouseMove={handleMouseMove}
                    >
                        <div className="carousel-container-casestudy">
                            {[
                                "UserTesting", "Typeform", "Trello", "Miro", "Figma", "Photoshop", "Illustrator", "Craft CMS", "HTML5/CSS3", "JavaScript", "Google Chrome Dev", "WAVE"
                            ]
                                .concat([
                                    "UserTesting", "Typeform", "Trello", "Miro", "Figma", "Photoshop", "Illustrator", "Craft CMS", "HTML5/CSS3", "JavaScript", "Google Chrome Dev", "WAVE"
                                ])
                                .map((skill, index) => (
                                    <div className="carousel-item-casestudy" key={`${skill}-${index}`} title={skill}>
                                        {skill}
                                    </div>
                                ))}
                        </div>
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
                                    <li>Balancing the need for a unified design that represented the company's global brand while accommodating the individual identities of all offices.</li>
                                    <li>Creating a design that could easily be updated or adapted to expand or evolve, without sacrificing the integrity of the global vision.</li>
                                </ul>
                            </div>

                            <div className="obstacles-context-item">
                                <div className="context-item-header milestones">
                                    <CircleCheckIcon className="circle-check-icon" />
                                    <h4>Milestones</h4>
                                </div>
                                <ul>
                                    <li>Incorporated feedback from different offices to ensure the page not only represented the brand but also served the functional needs of potential applicants from varied locations.</li>
                                    <li>Smoothly integrating the web page into existing digital infrastructure, ensuring a consistent user experience without disrupting the current structure.</li>
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
                        The new landing page design created a more engaging and informative experience for job seekers, leading to increased alignment between candidates and the company.
                    </p>

                    <p id="section-intro-2">
                        By providing a clear and compelling overview of the company culture, values, and opportunities, the page attracted more qualified applicants, streamlined the hiring process, and reinforced the company as an employer of choice.
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
                                    <li>Improved branding and clear messaging attracted candidates who aligned with the company's values, reducing time spent filtering unqualified applicants.</li>
                                    <li>Employee stories, company videos, and value-driven content helped candidates form a deeper connection with the company.</li>
                                    <li>A clear structure and intuitive navigation made it easier for candidates to find job listings and apply, increasing application completion rates.</li>
                                    <li>A cohesive, well-branded careers page strengthened the company’s presence in a competitive job market and reinforced its reputation as a desirable employer.</li>
                                    <li>By attracting the right candidates upfront, hiring teams spent less time filtering applicants, streamlining the recruitment process.</li>
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
                                    This project reinforced the importance of designing for both user engagement and business impact. I learned how to craft a compelling employer brand through thoughtful UX, ensuring that candidates could easily connect with the company’s culture and values. Additionally, I gained deeper insight into structuring career pages to balance storytelling with functionality, making job opportunities more discoverable and appealing.
                                </p>
                            </div>

                            <div className="takeaways-context-item">
                                <div className="context-item-header key-challenges-overcome">
                                    <CogIcon className="cog-icon" />
                                    <h4>Key challenges overcome</h4>
                                </div>
                                <p>
                                    One of the biggest challenges was creating a careers page that represented the company as a whole while maintaining consistency across international offices, each with its own values and practices. Without localizing content, I had to find a way to present a unified employer brand that still felt relevant to a diverse global workforce.
                                </p>
                                <br />
                                <p>
                                    Another challenge was integrating the new careers page into an already established website. Building a site from scratch allows for full creative control, but working within existing constraints required careful design choices to ensure the page fit seamlessly while still enhancing the overall user experience.
                                </p>
                            </div>

                            <div className="takeaways-context-item">
                                <div className="context-item-header key-challenges-overcome">
                                    <SparklesIcon className="sparkles-icon" />
                                    <h4>Personal reflections</h4>
                                </div>
                                <p>
                                    This project reinforced how thoughtful design can enhance a company’s reputation and attract top talent. I’m proud of the improvements made and look forward to applying these insights to future branding and engagement-focused projects.
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
                            There are opportunities to further enhance the careers page and improve candidate engagement with strategic updates such as:
                        </p>

                        <div className="context-item-container">

                            <div className="growth-context-item">
                                <div className="context-item-header lessons-learned">
                                    <TrendingUpIcon className="trendingup-icon" />
                                    <h4>More interactive content</h4>
                                </div>
                                <p>
                                    Adding interactive elements such as behind-the-scenes videos, virtual office tours, or employee Q&A sections to provide candidates with a deeper connection to the company. This helps candidates better understand the work environment before applying.
                                </p>
                            </div>

                            <div className="growth-context-item">
                                <div className="context-item-header key-challenges-overcome">
                                    <TrendingUpIcon className="trendingup-icon" />
                                    <h4>Add application tracking</h4>
                                </div>
                                <p>
                                    Optimizing the job application experience by integrating a more intuitive application tracking system. Enhancements like saved job searches, job alerts, and application status would reduce friction and improve conversion rates.
                                </p>
                            </div>

                            <div className="growth-context-item">
                                <div className="context-item-header key-challenges-overcome">
                                    <TrendingUpIcon className="trendingup-icon" />
                                    <h4>Leverage analytic tools</h4>
                                </div>
                                <p>
                                    Leveraging newly integrated analytic tools to track user engagement, identify drop-off points, and refine content based on candidate behavior. Continuous data-driven improvements would ensure the careers page remains effective in attracting and converting top talent.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="cta-section">

                <div class="cta-options">

                    <div class="cta-option">
                        <p><a href="https://www.itascacg.com/about/careers-main" target="_blank">View Live</a></p>
                    </div>

                    <div class="cta-option">
                        <p><a href="https://employease-hubi.onrender.com/" target="_blank">View Github</a></p>
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

export default EmployEaseCaseStudy;
