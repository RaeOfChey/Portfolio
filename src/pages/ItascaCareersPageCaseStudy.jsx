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

            <h1 className="case-study-h1">Case Study</h1>
            <h2 className="case-study-subtitle">Developing a careers landing page, to streamline the hiring process and candidate journey, increasing quality applicants.</h2>

            <div className="links">
                <a href="https://www.itascacg.com/about/careers-main" target="_blank">View Live</a>
                {/* <a href="https://www.figma.com/design/rcJE3VpdsP48ntnukwUonT/ITASCA-Careers-Page?node-id=0-1&t=Xuig1SLychBx79W2-1" target="_blank">View Figma</a> */}
            </div>

            <section className="section-title">
                <div className="project-overview">
                    <p><strong>Project<br /></strong>Itasca Consulting Group Inc.</p>
                    <p><strong>Duration<br /></strong>2 weeks</p>
                    <p><strong>Completed<br /></strong>January 2024</p>
                    <p><strong>Role<br /></strong>UX/UI Designer, Front-End Developer</p>
                </div>
            </section>

            <section className="section-title">

                <div className="problem-section-header">
                    <div className="section-left">
                        <h3>User Problems</h3>
                    </div>

                    <div className="section-right">
                        <p>
                            A global company lacked a dedicated careers page, making it difficult for job seekers to find opportunities and learn about the company. Job listings were scattered across platforms, causing inconsistencies for applicants and inefficiencies for the hiring team. Key pain points included:
                        </p>

                        <div className="context-item-container">

                            <div className="context-item">
                                <div className="context-item-header">
                                    <DownvoteIcon className="downvote-icon" />
                                    <h4>No centralized job listings</h4>
                                </div>
                                <p>
                                    Job seekers had no single place to browse available roles. Listings were only available through third-party platforms, making it harder for potential candidates to explore opportunities directly from the website.
                                </p>
                            </div>

                            <div className="context-item">
                                <div className="context-item-header">
                                    <DownvoteIcon className="downvote-icon" />
                                    <h4>Lack of employer branding</h4>
                                </div>
                                <p>
                                    Job seekers had no way to learn about the company's mission, culture, and benefits before applying. The absence of an employer-branded careers page meant missed opportunities to engage and attract top talent.
                                </p>
                            </div>

                            <div className="context-item">
                                <div className="context-item-header">
                                    <DownvoteIcon className="downvote-icon" />
                                    <h4>Inconsistent job information</h4>
                                </div>
                                <p>
                                    With job postings contained outdated or incomplete details across different platforms. Candidates encountered discrepancies in role descriptions, requirements, and application processes.
                                </p>
                            </div>

                            <div className="context-item">
                                <div className="context-item-header">
                                    <DownvoteIcon className="downvote-icon" />
                                    <h4>Inefficient application process</h4>
                                </div>
                                <p>
                                    Applicants had to rely on external job boards with limited customization options, creating a difficult hiring process. Without a direct application method on the website, candidates often had to navigate multiple steps, leading to drop-offs in quality applicants.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </section>

            <section class="challenge-section-header" id="unique-section">
                <div className="section-left">
                    <h3>Challenge</h3>
                </div>

                <div className="section-right">
                    <p>
                        The challenge was to create a centralized, employer-branded careers landing page that streamlined the recruitment process for both candidates and the hiring team. The page had to address existing inefficiencies, ensure a seamless application experience, and provide accurate, up-to-date job listings to attract and engage top talent.
                    </p>
                </div>
            </section>

            <section className="approach-section-header">

                <div className="section-left">
                    <h3>Approach</h3>
                </div>

                <div className="section-right">

                    <p>
                        The careers page was designed as a unified yet flexible solution to support a global presence while providing a seamless experience for job seekers. The project centered around the following key principles:
                    </p>

                    <div className="context-item-container">

                        <div className="context-item">
                            <div className="context-item-header clear-actionable-design">
                                <CircleCheckIcon className="circle-check-icon" />
                                <h4>Global applicability</h4>
                            </div>
                            <p>
                                The design focuses on creating a concise, universally applicable, and reflective of the company’s global identity while still appealing to diverse candidates. For an international company, each location has unique hiring practices, benefits, and cultural expectations, and need to be accurately and consistantly represented.
                            </p>
                        </div>

                        <div className="context-item">
                            <div className="context-item-header iteration-feedback">
                                <CircleCheckIcon className="circle-check-icon" />
                                <h4>Strong employer branding</h4>
                            </div>
                            <p>
                                Branding, voice, and messaging are applied consistently, ensuring culture, mission, and values are clearly communicated. Candidates can quickly determine if they are a good fit for the company, leading to more informed applications. Attracting the right candidates and streamlining the hiring process.
                            </p>
                        </div>

                        <div className="context-item">
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
                                <p id="filter-bar-description" className="image-subtitles-left-2">The design focuses on driving engagement with a clear and compelling call to action, guiding job seekers to explore opportunities that align with their skills and aspirations, streamlining the application process for highly interested candidates.</p>
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
                    <h3>Timelime & SDLC</h3>
                </div>

                <div className="section-right">
                    <div className="context-item">
                        <div className="context-item-header">
                            <h4>Day 1–3<br />Planning</h4>
                        </div>
                        <ul>
                            <li>Conducted user research with hiring teams across global offices, including surveys and interviews, to understand key challenges in managing job applications.</li>
                            <li>Analyzed competitors' features and gathered insights to inform the design of a seamless, user-friendly application tracking system.</li>
                        </ul>
                    </div>

                    <div className="context-item">
                        <div className="context-item-header">
                            <h4>Day 4–6<br />Designing</h4>
                        </div>
                        <ul>
                            <li>Created wireframe and mockup in Figma that showcased branding, culture, and values with an easy to navigate layout to engage users.</li>
                            <li>Designed the page layout to be visually appealing, with clear calls-to-action that would guide users seamlessly to individual job postings.</li>
                        </ul>
                    </div>

                    <div className="context-item">
                        <div className="context-item-header">
                            <h4>Day 7–9<br />Implementing</h4>
                        </div>
                        <ul>
                            <li>Developed the careers page using Craft CMS, focusing on a flexible layout that allowed easy updates while maintaining a streamlined design.</li>
                            <li>Ensured the page was mobile-responsive, optimizing layout adjustments and accessibility to make it easy to navigate on both mobile and desktop devices.</li>
                        </ul>
                    </div>

                    <div className="context-item">
                        <div className="context-item-header">
                            <h4>Day 10–12<br />Testing</h4>
                        </div>
                        <ul>
                            <li>Conducted cross-browser and device testing to ensure consistency and a seamless user experience across different platforms.</li>
                            <li>Gathered feedback from internal users to refine content hierarchy, page load times, and mobile responsiveness, making adjustments where needed.</li>
                        </ul>
                    </div>

                    <div className="context-item">
                        <div className="context-item-header">
                            <h4>Day 13–14<br />Deploying & Maintaining</h4>
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

                            <div className="context-item">
                                <div className="context-item-header obstacles">
                                    <CogIcon className="cog-icon" />
                                    <h4>Obstacles</h4>
                                </div>
                                <ul>
                                    <li>Balancing the need for a unified design that represented the company's global brand while accommodating the individual identities of all offices.</li>
                                    <li>Creating a design that could easily be updated or adapted to expand or evolve, without sacrificing the integrity of the global vision.</li>
                                </ul>
                            </div>

                            <div className="context-item">
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

            {/* <section className="challenge-section-header">
                <div className="section-left">
                    <h3>Solution</h3>
                </div>

                <div className="section-right">
                    <p id="solution-paragraph-1">
                        EmployEase addresses the pain points job seekers face by creating a platform that prioritizes by offering a unified, streamlined platform that minimizes time and energy spent on the job search process.
                    </p>
                    <div className="solution-link solution-section">
                        <a href="https://employease-hubi.onrender.com/" target="_blank">View Live</a>
                    </div>

                    <div className="context-item-container">

                        <div id="end-result" className="context-item">
                            <div className="context-item-header clear-actionable-design">
                                <CircleCheckIcon className="circle-check-icon" />
                                <h4>How EmployEase solves user problems</h4>
                            </div>
                            <p>
                                EmployEase directly addresses the pain points job seekers face such as disorganization, fragmentation, and overwhelming complexity by:
                                <ul>
                                    <li>
                                        By consolidating job listings into one place, EmployEase eliminates the fragmented job search experience, providing real-time, relevant job data without the need to visit multiple platforms.
                                    </li>
                                    <li>
                                        Users can easily track and customize application statuses and deadlines within the app, eliminating the need for spreadsheets or manual note-taking.
                                    </li>
                                    <li>
                                        EmployEase eliminates the repetitive task of maintaining profiles on multiple platforms by offering a simplified sign-up process that doesn’t require constant updates.
                                    </li>
                                    <li>
                                        EmployEase offers a clean, distraction-free interface that keeps users focused on their primary goal of obtaining a job.
                                    </li>
                                </ul>
                            </p>
                        </div>

                        <div className="image-row-1">
                            <div className="image-column-left-1">
                                <img
                                    src={CaseStudyImage6}
                                    alt="First description"
                                    className="case-study-image"
                                />
                            </div>
                            <div className="image-column-right-1">
                                <p id="the-filter-bar-subtitle" className="image-subtitles">The Filter Bar empowers users to customize their job search by selecting desired locations (top U.S. city in each state), industries (15 popular options), and experience levels (Entry, Mid, Senior, Management, Internship). With a single click, real-time job data is retrieved via The Muse API, delivering tailored opportunities that match the user’s preferences.</p>
                            </div>
                        </div>

                        <div className="image-row-2">
                            <div className="image-column">
                                <p id="filter-bar-description" className="image-subtitles-left-2">Users can easily store job search results for later reference. After clicking 'See More' on a job listing, a detailed pop-up modal appears, showcasing the job title, company, location(s), experience level, posting date, and a link to the job posting. Logged-in users can save jobs to their 'Saved Jobs' page for future access.</p>
                            </div>
                            <div className="image-column-right-2 left-align">
                                <img
                                    src={CaseStudyImage7}
                                    alt="First description"
                                    className="case-study-image"
                                />
                            </div>
                        </div>

                        <div className="context-item beyond-the-challenge">
                            <div className="context-item-header clear-actionable-design">
                                <CircleCheckIcon className="circle-check-icon" />
                                <h4>What EmployEase improved beyond the Challenge</h4>
                            </div>
                            <p>
                                EmployEase creates a streamlined job search platform by incorporating additional features that enhance the user experience and empower job seekers:
                                <ul>
                                    <li>Integrated real-time job data ensures up-to-date opportunities in a streamlined centralized location.</li>
                                    <li>Personalized job tracking options provide users with a tailored experience for managing applications, statuses, and deadlines.</li>
                                    <li>Mobile responsiveness ensures seamless accessibility, enabling users to manage their job search wherever they are.</li>
                                </ul>
                            </p>
                        </div>

                        <div className="image-row-1">
                            <div className="image-column-left-1">
                                <img
                                    src={CaseStudyImage3}
                                    alt="First description"
                                    className="case-study-image"
                                />
                            </div>
                            <div className="image-column-right-1">
                                <p className="image-subtitles">
                                    The Add a Job feature empowers users to track all job opportunities in one place. It allows job seekers to manually add positions they find outside of the Muse API's real-time data.
                                </p>
                                <p className="image-subtitles">
                                    This unique functionality sets EmployEase apart from platforms like LinkedIn or Indeed, ensuring users can manage all job listings on their personalized 'Saved Jobs' page, whether from the app or external sources.
                                </p>
                                <p id="add-a-job-subtitle-3" className="image-subtitles">
                                    By offering this feature, EmployEase gives users the ability to track and organize their job search from multiple platforms, making it easier to stay on top of opportunities, applications, and interviews in one convenient location.
                                </p>
                            </div>
                        </div>

                        <div className="image-row-2">
                            <div className="image-column">
                                <p id="filter-bar-description" className="image-subtitles-left-2">Users can update the status of their saved jobs, such as Interested, Applied, Interviewing, or Hired. The unique combination of manually adding external job listings and organizing their saved jobs allows users to stay organized and manage their job search with convenience.
                                </p>
                            </div>
                            <div className="image-column-right-2 left-align">
                                <img
                                    src={CaseStudyImage5}
                                    alt="First description"
                                    className="case-study-image"
                                />
                            </div>
                        </div>

                        <div id="end-result" className="context-item">
                            <div className="context-item-header clear-actionable-design">
                                <CircleCheckIcon className="circle-check-icon" />
                                <h4>End result</h4>
                            </div>
                            <p>
                                The final product is a unified, user-friendly web platform that simplifies the job search process. EmployEase offers a dynamic job dashboard, real-time data integration, and intuitive design, all optimized for both desktop and mobile devices. Users can manage every aspect of their job search with ease, saving time and energy while navigating their journey with confidence.
                            </p>
                        </div>

                        <img
                            id="end-result-image"
                            src={CaseStudyImage8}
                            alt="First description"
                            className="case-study-image"
                        />

                    </div>
                </div>
            </section>

            <section className="challenge-section-header">
                <div className="section-left">
                    <h3>Impact & Outcomes</h3>
                </div>

                <div className="section-right">
                    <p>
                        EmployEase revolutionized the job search process by providing a streamlined, user-focused platform. By addressing key challenges like fragmentation, disorganization, and overwhelming features, it empowered users to manage their job applications with confidence and clarity.</p>
                    <p id="impact-paragraph-2">
                        The intuitive design saved time and reduced frustration, making the platform a trusted tool for job seekers to stay organized and focused on their career goals.
                    </p>
                    <br />

                    <div className="context-item-container">

                        <div className="context-item">
                            <div className="context-item-header clear-actionable-design">
                                <CircleCheckIcon className="circle-check-icon" />
                                <h4>Outcomes</h4>
                            </div>
                            <p>
                                <ul>
                                    <li>The platform saw increased user engagement after integrating real-time job data and consolidating listings from multiple sources.</li>
                                    <li>Users reported spending significantly less time managing their job applications, thanks to the intuitive design and centralized tracking system.</li>
                                    <li>Mobile optimization efforts resulted in high usage rates across devices, ensuring accessibility and convenience for users on the go.</li>
                                    <li>Feedback highlighted reduced frustration and greater clarity in navigating the job search process, demonstrating the platform's effectiveness in solving user pain points.</li>
                                </ul>
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-title">

                <div className="problem-section-header">
                    <div className="section-left">
                        <h3>Takeaways</h3>
                    </div>

                    <div className="section-right">

                        <div className="context-item-container">

                            <div className="context-item">
                                <div className="context-item-header lessons-learned">
                                    <FilePenLineIcon className="filepenline-icon" />
                                    <h4>Lessons learned</h4>
                                </div>
                                <p>
                                    Through this project, I gained a deeper understanding of how to balance user needs with technical constraints. Managing real-time data integrations taught me how critical it is to prioritize seamless functionality while keeping the platform responsive. This project also reinforced the importance of mobile-first design and optimizing the user experience across multiple devices.
                                </p>
                            </div>

                            <div className="context-item">
                                <div className="context-item-header key-challenges-overcome">
                                    <CogIcon className="cog-icon" />
                                    <h4>Key challenges overcome</h4>
                                </div>
                                <p>
                                    The most significant challenges was integrating real-time data from multiple sources while ensuring the platform remained responsive. By developing a robust backend system and implementing effective data syncing techniques, I was able to overcome this hurdle and deliver a streamlined user experience.
                                </p>
                                <br />
                                <p>
                                    Additionally, balancing simplicity with functionality required constant iteration and user feedback, helping me focus on solving core problems without adding unnecessary complexity.
                                </p>
                            </div>

                            <div className="context-item">
                                <div className="context-item-header key-challenges-overcome">
                                    <SparklesIcon className="sparkles-icon" />
                                    <h4>Personal reflections</h4>
                                </div>
                                <p>
                                    This project was an opportunity to blend my design and development skills to tackle real-world challenges faced by job seekers. I was motivated by the chance to simplify a process that is often overwhelming and stressful.
                                </p>
                                <br />
                                <p>
                                    The experience has been transformative, enhancing my ability to think critically about user needs and implement innovative yet practical solutions. I’m proud of the impact EmployEase can have on job seekers, and I look forward to applying these insights to future projects.
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

                        <p>EmployEase has the potential to evolve into an even more powerful tool for job seekers with the following enhancements:</p>

                        <div className="context-item-container">

                            <div className="context-item">
                                <div className="context-item-header lessons-learned">
                                    <TrendingUpIcon className="trendingup-icon" />
                                    <h4>Advanced search features</h4>
                                </div>
                                <p>
                                    Introduce search filters such as distance from a desired location, salary range, and job type (remote, hybrid, in-person) to provide more tailored job recommendations. Expand beyond the current "top city in each state" model to include a broader range of locations, ensuring more comprehensive coverage across the U.S.
                                </p>
                            </div>

                            <div className="context-item">
                                <div className="context-item-header key-challenges-overcome">
                                    <TrendingUpIcon className="trendingup-icon" />
                                    <h4>Kanban board for saved jobs</h4>
                                </div>
                                <p>
                                    Transform the "Saved Jobs" section into a fully interactive Kanban board. Users could categorize and track jobs through different stages (e.g., Interested, Applied, Interviewing, Offered) for a more visual and intuitive experience.
                                </p>
                            </div>

                            <div className="context-item">
                                <div className="context-item-header key-challenges-overcome">
                                    <TrendingUpIcon className="trendingup-icon" />
                                    <h4>Enhanced mobile experience</h4>
                                </div>
                                <p>
                                    Develop a dedicated mobile app with features like push notifications for application deadlines, one-click job saves, and offline tracking capabilities, ensuring seamless access for users on the go.
                                </p>
                            </div>

                            <div className="context-item">
                                <div className="context-item-header key-challenges-overcome">
                                    <TrendingUpIcon className="trendingup-icon" />
                                    <h4>AI powered job recommendations</h4>
                                </div>
                                <p>
                                    Leverage machine learning to provide personalized job recommendations based on user preferences, past applications, and engagement history.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}

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
