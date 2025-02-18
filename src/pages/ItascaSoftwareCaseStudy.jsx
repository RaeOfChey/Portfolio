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

import ITASCASoftwareImage1 from '../assets/ITASCASoftware CaseStudy Image1.png';
import CaseStudyImage3 from '../assets/EmployEase CaseStudy Image3.png';
import CaseStudyImage5 from '../assets/EmployEase CaseStudy Image5.png';
import CaseStudyImage6 from '../assets/EmployEase CaseStudy Image6.png';
import CaseStudyImage7 from '../assets/EmployEase CaseStudy Image7.png';
import CaseStudyImage8 from '../assets/EmployEase CaseStudy Image8.png';

const ITASCASoftwareCaseStudy = () => {

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

            <h1 className="case-study-h1">ITASCA Software</h1>
            <h2 className="case-study-subtitle">Redesigning a B2B eCommerce SaaS platform to enhance user experience and drive software sales growth by 25%.</h2>

            <div className="links">
                <a href="https://itascasoftware.com/" target="_blank">View Live</a>
                {/* <a href="https://github.com/RaeOfChey/EmployEase" target="_blank">View GitHub</a> */}
            </div>

            <section className="section-title">
                <div className="project-overview">
                    <p><strong>Project<br /></strong> ITASCA Software</p>
                    <p><strong>Duration<br /></strong> 4 months</p>
                    <p><strong>Completed<br /></strong> December 2024</p>
                    <p><strong>Role<br /></strong> UX/UI Designer, WordPress Developer, Front-End Developer</p>
                </div>
            </section>

            <section className="section-title">

                <div className="problem-section-header">
                    <div className="section-left">
                        <h3>User Problems</h3>
                    </div>

                    <div className="section-right">
                        <p>
                            In the rapidly evolving world of technology, software companies, like ITASCA Software, often face significant challenges in managing product information and generating leads. ITASCA Software, a provider of software solutions for the geo-engineering industry, had several pain points:
                        </p>

                        <div className="context-item-container">

                            <div className="context-item">
                                <div className="context-item-header">
                                    <DownvoteIcon className="downvote-icon" />
                                    <h4>Content overload</h4>
                                </div>
                                <p>
                                    The site was overcrowded with technical information, which made it difficult for potential customers to understand the core benefits of the products and find the solutions they needed. Especially new customers.
                                </p>
                            </div>

                            <div className="context-item">
                                <div className="context-item-header">
                                    <DownvoteIcon className="downvote-icon" />
                                    <h4>Many user experience challenges</h4>
                                </div>
                                <p>
                                    Barriers hindered both user experience and visibility. The site was not mobile-friendly, lacked language localization (despite being a global company), and had accessibility challenges. These factors, combined with poor SEO optimization, limited the site's potential to engage a broader, diverse audience.
                                </p>
                            </div>

                            <div className="context-item">
                                <div className="context-item-header">
                                    <DownvoteIcon className="downvote-icon" />
                                    <h4>Cumbersome checkout process</h4>
                                </div>
                                <p>
                                    Users found it difficult to checkout on their own, often following up for assistance. Even then, the site did not process payments. This led to a frustrating back-and-forth process between companies, resulting in wasted time for both customers and the sales team.
                                </p>
                            </div>

                            <div className="context-item">
                                <div className="context-item-header">
                                    <DownvoteIcon className="downvote-icon" />
                                    <h4>Unclear communication</h4>
                                </div>
                                <p>
                                    Users could not make confident purchasing decisions. Major details about the software products were not clearly communicated, leaving users unsure about the core benefits of the products. The lack of clarity in both technical and value-driven content resulted in confusion and hindered the effectiveness of the sales process.
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
                        The challenge was to design a B2B SaaS eCommerce website that clearly communicates product value, enhances user experience, and streamlines the purchasing process to drive greater engagement and lead generation.
                    </p>
                </div>
            </section>

            <section className="approach-section-header">

                <div className="section-left">
                    <h3>Approach</h3>
                </div>

                <div className="section-right">

                    <p>
                        To address the user problems and challenges, I took a user-centered approach focused on clarity, efficiency, and impact. The project centered around the following key principles:
                    </p>

                    <div className="context-item-container">

                        <div className="context-item">
                            <div className="context-item-header clear-actionable-design">
                                <CircleCheckIcon className="circle-check-icon" />
                                <h4>UI overhaul</h4>
                            </div>
                            <p>
                                Prioritized user-friendliness by updating the website's branding and simplifying the content. Reduced technical jargon, applied ample white space, and broke up information into digestible sections, all while maintaining clarity and accuracy.
                            </p>
                        </div>

                        <div className="context-item">
                            <div className="context-item-header user-centered-efficiency">
                                <UsersIcon className="user-icon" />
                                <h4>User flow optimization</h4>
                            </div>
                            <p>
                                Redesigned the navigation and layout to ensure easy access to key information, with a particular focus on simplifying the checkout process. Integrated action-driven CTAs across critical touchpoints, such as product pages, and streamlined the checkout experience to guide visitors smoothly toward conversion.
                            </p>
                        </div>

                        <div className="context-item">
                            <div className="context-item-header iteration-feedback">
                                <RefreshIcon className="refresh-icon" />
                                <h4>Data-driven insights</h4>
                            </div>
                            <p>
                                Leveraged tools like Google Analytics, Hotjar, and Optimizely to track user behavior, enabling continuous improvement of the website’s performance. Data-driven decisions were made to refine both the UI and overall user experience.
                            </p>
                        </div>

                        <div className="context-item">
                            <div className="context-item-header iteration-feedback">
                                <RefreshIcon className="refresh-icon" />
                                <h4>Modernization</h4>
                            </div>
                            <p>
                                Made the website mobile-responsive, implemented eCommerce capabilities, optimized for SEO, and adhered to WCAG best practices for accessibility. Added language localization to better serve global users across different regions.
                            </p>
                        </div>

                        <div className="image-row-2">
                            <div className="image-column">
                                <p id="filter-bar-description" className="image-subtitles-left-2">The design focuses on a streamlined user experience, simplifying navigation and product discovery. With clear, action-driven calls to action, a modernized layout, and an emphasis on mobile responsiveness, the homepage is optimized for both engagement and conversion..</p>
                            </div>
                            <div className="image-column-right-2 left-align">
                                <img
                                    src={ITASCASoftwareImage1}
                                    alt="First description"
                                    className="case-study-image"
                                />
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* <section className="process-section-header">
                <div className="section-left">
                    <h3>Timelime & SDLC</h3>
                </div>

                <div className="section-right">
                    <div className="context-item">
                        <div className="context-item-header">
                            <h4>Day 1–2<br />Planning</h4>
                        </div>
                        <ul>
                            <li>Conducted user interviews and competitive analysis to identify pain points in existing job search tools.</li>
                            <li>This research informed the development of core features, such as application tracking and real-time job updates.</li>
                        </ul>
                    </div>

                    <div className="context-item">
                        <div className="context-item-header">
                            <h4>Day 3–4<br />Designing</h4>
                        </div>
                        <ul>
                            <li>Developed user personas and journey maps to define the most critical features and workflows.</li>
                            <li>Created wireframes and basic prototypes to visualize the user experience.</li>
                        </ul>
                    </div>

                    <div className="context-item">
                        <div className="context-item-header">
                            <h4>Day 5–6<br />Implementing</h4>
                        </div>
                        <ul>
                            <li>Designed high-fidelity mockups and interactive prototypes in Figma.</li>
                            <li>Developed the front-end using React.js, ensuring the app was responsive and user-friendly.</li>
                            <li>Integrated APIs to pull real-time job data, enabling users to track their job applications directly within the tool.</li>
                        </ul>
                    </div>

                    <div className="context-item">
                        <div className="context-item-header">
                            <h4>Day 7–10<br />Testing</h4>
                        </div>
                        <ul>
                            <li>Conducted usability testing and made iterations based on feedback.</li>
                            <li>Adjusted user interface for clarity, refined features, and ensured a seamless experience across devices.</li>
                        </ul>
                    </div>

                    <div className="context-item">
                        <div className="context-item-header">
                            <h4>Day 11–12<br />Deploying & Maintaining</h4>
                        </div>
                        <ul>
                            <li>Prepared the app for deployment to a production environment, ensuring it was ready for end-users.</li>
                            <li>Monitored post-launch performance and began gathering feedback for future updates and improvements.</li>
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
                                "React", "TypeScript", "Apollo Server", "Express.js", "MongoDB Atlas", "Bootstrap",
                                "GraphQL", "Responsive Design", "Real-Time Integration"
                            ]
                                .concat([
                                    "React", "TypeScript", "Apollo Server", "Express.js", "MongoDB Atlas", "Bootstrap",
                                    "GraphQL", "Responsive Design", "Real-Time Integration"
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
                                    <li>Accommodating an increasing number of users and data volume.</li>
                                    <li>Slow response times during peak usage.</li>
                                    <li>Aggregating and displaying real-time job data from multiple sources.</li>
                                    <li>Ensuring the platform handled user data securely and complied with relevant regulations.</li>
                                </ul>
                            </div>

                            <div className="context-item">
                                <div className="context-item-header milestones">
                                    <CircleCheckIcon className="circle-check-icon" />
                                    <h4>Milestones</h4>
                                </div>
                                <ul>
                                    <li>User testing provided valuable feedback that helped refine the platform’s core features.</li>
                                    <li>Optimizating backend efforts to enhance performance when handling real-time job data and high user activity.</li>
                                    <li>Addition of critical features such as advanced job search filters were added.</li>
                                    <li>Integration of real-time job listings from external sources.</li>
                                </ul>
                            </div>

                        </div>

                    </div>

                </div>

            </section>

            <section className="challenge-section-header">
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
            </section>

            <section className="challenge-section-header">
                <div className="section-left">
                    <h3>Credits</h3>
                </div>

                <div className="section-right">
                    <p>
                        <strong>I would like to thank the following for:</strong>
                        <ul id="credits-ul">
                            <li>TheMuse API for supplying real-time job data.</li>
                            <li>Bootstrap for being an open-source front-end framework that streamlined development.</li>
                            <li>pqoqubbw/icons for the beautifully crafted open-source animated icons.</li>
                            <li>Render for offering a seamless and reliable deployment platform, making it easy to host, manage, and scale the application.</li>
                            <li>Atlas for its scalable and developer-friendly database solution, supporting robust data storage and retrieval for MongoDB.</li>
                            <li>University of Minnesota for providing foundational resources, guidance, and support throughout the development of this project.</li>
                            <li>Users for providing feedback that guided the design process and helped refine the platform to better meet user needs.</li>
                        </ul>

                        <strong>Special thanks to my development team:</strong>
                        <ul id="credits-ul">
                            <li>Avery Jacobson</li>
                            <li>Cheyenna Raelynn (myself)</li>
                            <li>Chris Persaud-Cox</li>
                            <li>Jayce Thoreson</li>
                        </ul>
                    </p>
                </div>
            </section>

            <section class="cta-section">

                <div class="cta-options">

                    <div class="cta-option">
                        <p><a href="https://employease-hubi.onrender.com/" target="_blank">View Live</a></p>
                    </div>

                    <div class="cta-option">
                        <p><a href="https://employease-hubi.onrender.com/" target="_blank">View Github</a></p>
                    </div>

                    <div class="cta-option">
                        <p><a href="mailto:cheyennaraelynn@gmail.com">Email Me</a></p>
                    </div>

                </div>

            </section> */}

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

export default ITASCASoftwareCaseStudy;
