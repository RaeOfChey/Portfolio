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

import EmployEaseHeaderImage from '../assets/EmployEase Header Image.png';
import CaseStudyImage1 from '../assets/EmployEase CaseStudy Image1.png';
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
                        <h1 className="case-study-h1">Case Study</h1>
                        <h2 className="case-study-subtitle">Streamlining the job application process on a unified platform to reduce complexity and increase efficiency.</h2>

                        <div className="links">
                            <a href="https://employease-hubi.onrender.com/" target="_blank">View Live</a>
                        </div>
                    </div>

                    <div className="case-study-header-right">
                        <img
                            id="employease-header-image"
                            src={EmployEaseHeaderImage}
                            alt="x"
                            className="case-study-image"
                        />
                    </div>
                </div>

                <section className="section-title">
                    <div className="project-overview">
                        <p><strong>Client<br /></strong>EmployEase</p>
                        <p><strong>Duration<br /></strong>1.5 weeks</p>
                        <p><strong>Completed<br /></strong>December 2024</p>
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
                            Job seekers face a variety of challenges in today’s fragmented and complex job search landscape. The process of applying for jobs quickly becomes exhausting, as users waste valuable time and energy dealing with pain points such as:
                        </p>

                        <div className="context-item-container">

                            <div className="user-problems-context-item">
                                <div className="context-item-header">
                                    <DownvoteIcon className="downvote-icon" />
                                    <h4>Fragmented job search process</h4>
                                </div>
                                <p>
                                    Job seekers face the challenge of searching for jobs across multiple platforms, each with its own set of listings. This fragmented process leads to outdated or irrelevant results and requires users to juggle different sites.
                                </p>
                            </div>

                            <div className="user-problems-context-item">
                                <div className="context-item-header">
                                    <DownvoteIcon className="downvote-icon" />
                                    <h4>Lack of organization and tracking</h4>
                                </div>
                                <p>
                                    Without a unified system, job seekers often rely on spreadsheets or manual note-taking to track applications. This not only results in confusion over application statuses, deadlines, and follow-up actions but also wastes valuable time and energy as users try to stay organized across multiple tools.
                                </p>
                            </div>

                            <div className="user-problems-context-item">
                                <div className="context-item-header">
                                    <DownvoteIcon className="downvote-icon" />
                                    <h4>High maintenance</h4>
                                </div>
                                <p>
                                    Job seekers often have to create and maintain detailed profiles on multiple job search platforms. This process is repetitive and time-consuming, requiring constant updates. It's a tedious task that doesn't add value for the user, especially when recruiters don't look at all these profiles.
                                </p>
                            </div>

                            <div className="user-problems-context-item">
                                <div className="context-item-header">
                                    <DownvoteIcon className="downvote-icon" />
                                    <h4>Overwhelming features</h4>
                                </div>
                                <p>
                                    Many job search platforms, like LinkedIn, offer a plethora of features that can overwhelm users and complicate the job search process. With so many options and distractions, users can easily feel lost or confused, making it difficult to focus on their primary goal: Getting a job.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </section>

            <section class="challenge-section-header" id="unique-section">
                <div className="employease-challenge-header-section-left">
                    <h3 className="challenge-header">Challenge</h3>
                </div>

                <div className="section-right">
                    <p id="section-intro">
                        The challenge was to create a unified, user-friendly platform that streamlines the job search process, enhances organization, and minimizes unnecessary complexity, saving users valuable time and energy, and empowering them to navigate their job hunt with confidence and clarity.
                    </p>
                </div>
            </section>

            <section className="approach-section-header">

                <div className="employease-approach-title-section-left">
                    <h3 className="approach-header">Approach</h3>
                </div>

                <div className="section-right">

                    <p id="section-intro">
                        The design and development of EmployEase focused on these key principles to guide decisions and ensured the platform met user needs in a meaningful and effective way:
                    </p>

                    <div className="context-item-container">

                        <div className="approach-context-item">
                            <div className="context-item-header clear-actionable-design">
                                <CircleCheckIcon className="circle-check-icon" />
                                <h4>Clear and actionable design focus</h4>
                            </div>
                            <p>
                                The design focuses on creating a user-friendly interface that addresses key pain points in the job search process. Emphasis is placed on simplicity and usability, minimizing distractions while ensuring essential tasks, such as tracking applications and deadlines, are easily accessible and manageable.
                            </p>
                        </div>

                        <div className="approach-context-item">
                            <div className="context-item-header user-centered-efficiency">
                                <CircleCheckIcon className="circle-check-icon" />
                                <h4>User centered efficiency</h4>
                            </div>
                            <p>
                                The project is centered around reducing complexity for users, with a focus on integrating features that directly address their needs. Real-time job data and personalized tracking are prioritized to ensure the solution is efficient, streamlined, and reduces the time spent managing job applications.
                            </p>
                        </div>

                        <div className="approach-context-item">
                            <div className="context-item-header iteration-feedback">
                                <CircleCheckIcon className="circle-check-icon" />
                                <h4>Iteration based on user feedback</h4>
                            </div>
                            <p>
                                Continuous feedback from potential users is integrated throughout the development process to ensure the solution aligns with user needs and expectations. Regular testing and iteration help refine the interface and functionality, leading to a more intuitive and efficient user experience.
                            </p>
                        </div>

                        <div className="image-row-2">
                            <div className="image-column">
                                <p id="approach" className="image-subtitles-left-2">The design focuses on clarity and efficiency, with a user-friendly interface that simplifies job tracking and deadlines. Built on continuous user feedback, it prioritizes real-time job data and personalized tracking, creating a streamlined and efficient job search experience.</p>
                            </div>
                            <div className="image-column-right-2 left-align">
                                <img
                                    src={CaseStudyImage1}
                                    alt="First description"
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

                    <div className="timeline-context-item">
                        <div className="context-item-header">
                            <h4>Day 1–2 Planning</h4>
                        </div>
                        <ul>
                            <li>Conducted user interviews and competitive analysis to identify pain points in existing job search tools.</li>
                            <li>This research informed the development of core features, such as application tracking and real-time job updates.</li>
                        </ul>
                    </div>

                    <div className="timeline-context-item">
                        <div className="context-item-header">
                            <h4>Day 3–4 Designing</h4>
                        </div>
                        <ul>
                            <li>Developed user personas and journey maps to define the most critical features and workflows.</li>
                            <li>Created wireframes and basic prototypes to visualize the user experience.</li>
                        </ul>
                    </div>

                    <div className="timeline-context-item">
                        <div className="context-item-header">
                            <h4>Day 5–6 Implementing</h4>
                        </div>
                        <ul>
                            <li>Designed high-fidelity mockups and interactive prototypes in Figma.</li>
                            <li>Developed the front-end using React.js, ensuring the app was responsive and user-friendly.</li>
                            <li>Integrated APIs to pull real-time job data, enabling users to track their job applications directly within the tool.</li>
                        </ul>
                    </div>

                    <div className="timeline-context-item">
                        <div className="context-item-header">
                            <h4>Day 7–10 Testing</h4>
                        </div>
                        <ul>
                            <li>Conducted usability testing and made iterations based on feedback.</li>
                            <li>Adjusted user interface for clarity, refined features, and ensured a seamless experience across devices.</li>
                        </ul>
                    </div>

                    <div className="timeline-context-item">
                        <div className="context-item-header">
                            <h4>Day 11–12 Deploying & Maintaining</h4>
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

                            <div className="obstacles-context-item">
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

                            <div className="obstacles-context-item">
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
                <div className="employease-solution-header-section-left">
                    <h3>Solution</h3>
                </div>

                <div className="section-right">
                    <p id="section-intro">
                        EmployEase addresses the pain points job seekers face by creating a platform that prioritizes by offering a unified, streamlined platform that minimizes time and energy spent on the job search process.
                    </p>
                    <div className="solution-link solution-section">
                        <a href="https://employease-hubi.onrender.com/" target="_blank">View Live</a>
                    </div>

                    <div className="context-item-container">

                        <div id="end-result" className="solution-context-item">
                            <div className="context-item-header clear-actionable-design">
                                <UsersIcon className="users-icon" />
                                <h4>How EmployEase solves user problems</h4>
                            </div>

                            <p id="intro-redesign" className="redesign-description">
                                EmployEase directly addresses the pain points job seekers face such as disorganization, fragmentation, and overwhelming complexity by:
                                <ul>
                                    <li>
                                        Consolidating job listings into one place, EmployEase eliminates the fragmented job search experience, providing real-time, relevant job data without the need to visit multiple platforms.
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
                        <br />
                        <div className="image-row-2">
                            <div className="image-column">
                                <p id="approach" className="image-subtitles-left-2">Users can easily store job search results for later reference. After clicking 'See More' on a job listing, a detailed pop-up modal appears, showcasing the job title, company, location(s), experience level, posting date, and a link to the job posting. Logged-in users can save jobs to their 'Saved Jobs' page for future access.</p>
                            </div>
                            <div className="image-column-right-2 left-align">
                                <img
                                    src={CaseStudyImage7}
                                    alt="First description"
                                    className="case-study-image"
                                />
                            </div>
                        </div>

                        <div id="end-result" className="solution-context-item">
                            <div className="context-item-header clear-actionable-design">
                                <CircleCheckIcon className="circle-check-icon" />
                                <h4>What EmployEase improved beyond the Challenge</h4>
                            </div>
                            <p id="intro-redesign" className="redesign-description">
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
                        <br />
                        <div className="image-row-2">
                            <div className="image-column">
                                <p id="approach" className="image-subtitles-left-2">Users can update the status of their saved jobs, such as Interested, Applied, Interviewing, or Hired. The unique combination of manually adding external job listings and organizing their saved jobs allows users to stay organized and manage their job search with convenience.
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

                        <div id="end-result" className="solution-context-item">
                            <div className="context-item-header clear-actionable-design">
                                <CircleCheckIcon className="circle-check-icon" />
                                <h4>End result</h4>
                            </div>
                            <p id="intro-redesign" className="redesign-description">
                                The final product is a unified, user-friendly web platform that simplifies the job search process. EmployEase offers a dynamic job dashboard, real-time data integration, and intuitive design, all optimized for both desktop and mobile devices. Users can manage every aspect of their job search with ease, saving time and energy while navigating their journey with confidence.
                            </p>
                        </div>

                        {/* <img
                            id="end-result-image"
                            src={CaseStudyImage8}
                            alt="First description"
                            className="case-study-image"
                        /> */}

                    </div>
                </div>
            </section>

            <section className="challenge-section-header">
            <div className="employease-impact-outcome-section-left">
                    <h3>Impact & Outcomes</h3>
                </div>

                <div className="section-right">
                    <p id="section-intro">
                        EmployEase revolutionized the job search process by providing a streamlined, user-focused platform. By addressing key challenges like fragmentation, disorganization, and overwhelming features, it empowered users to manage their job applications with confidence and clarity.
                    </p>

                    <p id="section-intro-2">
                        The intuitive design saved time and reduced frustration, making the platform a trusted tool for job seekers to stay organized and focused on their career goals.
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
                <div className="employease-takeaways-section-left">
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
                                    Through this project, I gained a deeper understanding of how to balance user needs with technical constraints. Managing real-time data integrations taught me how critical it is to prioritize seamless functionality while keeping the platform responsive. This project also reinforced the importance of mobile-first design and optimizing the user experience across multiple devices.
                                </p>
                            </div>

                            <div className="takeaways-context-item">
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

                            <div className="takeaways-context-item">
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

                        <p id="section-intro">
                            EmployEase has the potential to evolve into an even more powerful tool for job seekers with the following enhancements:
                        </p>

                        <div className="context-item-container">

                            <div className="growth-context-item">
                                <div className="context-item-header lessons-learned">
                                    <TrendingUpIcon className="trendingup-icon" />
                                    <h4>Advanced search features</h4>
                                </div>
                                <p>
                                    Introduce search filters such as distance from a desired location, salary range, and job type (remote, hybrid, in-person) to provide more tailored job recommendations. Expand beyond the current "top city in each state" model to include a broader range of locations, ensuring more comprehensive coverage across the U.S.
                                </p>
                            </div>

                            <div className="growth-context-item">
                                <div className="context-item-header key-challenges-overcome">
                                    <TrendingUpIcon className="trendingup-icon" />
                                    <h4>Kanban board for saved jobs</h4>
                                </div>
                                <p>
                                    Transform the "Saved Jobs" section into a fully interactive Kanban board. Users could categorize and track jobs through different stages (e.g., Interested, Applied, Interviewing, Offered) for a more visual and intuitive experience.
                                </p>
                            </div>

                            <div className="growth-context-item">
                                <div className="context-item-header key-challenges-overcome">
                                    <TrendingUpIcon className="trendingup-icon" />
                                    <h4>Enhanced mobile experience</h4>
                                </div>
                                <p>
                                    Develop a dedicated mobile app with features like push notifications for application deadlines, one-click job saves, and offline tracking capabilities, ensuring seamless access for users on the go.
                                </p>
                            </div>

                            <div className="growth-context-item">
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
                <div className="credits-header-section-left">
                    <h3>Credits</h3>
                </div>

                <div className="section-right">
                    <p id="credits-paragraph" className="credits-paragraph">
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

                        <strong >Special thanks to my development team:</strong>
                        <ul id="credits-ul-names">
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
