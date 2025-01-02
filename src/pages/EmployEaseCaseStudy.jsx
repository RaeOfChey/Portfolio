import React, { useState, useRef, useEffect } from 'react';
import ScrollButton from '../components/ScrollButton'; // Adjust the import path as needed

import '../styles/styles.css';
import '../styles/CaseStudy.css';

import { DownvoteIcon } from '../components/DownvoteIcon';
import { CircleCheckIcon } from '../components/CircleCheckIcon';
import { RefreshIcon } from '../components/RefreshIcon';
import { UsersIcon } from '../components/UsersIcon';
/* import { UpvoteIcon } from '../components/UpvoteIcon'; */
import { FilePenLineIcon } from '../components/FilePenLineIcon';
import { CogIcon } from '../components/CogIcon';
import { TrendingUpIcon } from '../components/TrendingUpIcon';

import CaseStudyImage1 from '../assets/EmployEase CaseStudy Image1.png';
import CaseStudyImage2 from '../assets/EmployEase CaseStudy Image2.png';
import CaseStudyImage3 from '../assets/EmployEase CaseStudy Image3.png';
import CaseStudyImage4 from '../assets/EmployEase CaseStudy Image4.png';
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

            <h1 className="case-study-h1">EmployEase</h1>
            <h2 className="case-study-subtitle">Simplifying job searches with API integration and responsive design.</h2>

            <div className="links">
                <a href="https://employease-hubi.onrender.com/" target="_blank">View Live</a>
                <a href="https://github.com/RaeOfChey/EmployEase" target="_blank">View GitHub Repo</a>
            </div>

            <section className="section-title">
                <div className="project-overview">
                    <p><strong>Project<br /></strong> EmployEase</p>
                    <p><strong>Duration<br /></strong> 1.5 weeks</p>
                    <p><strong>Completed<br /></strong> December 2024</p>
                    <p><strong>Role<br /></strong> Full-Stack Developer</p>
                </div>
            </section>

            <section className="section-title">

                <div className="problem-section-header">
                    <div className="section-left">
                        <h3>Problems</h3>
                        {/* <h5>Lost opportunities</h5> */}
                    </div>

                    <div className="section-right">
                        <p>
                            Job seekers struggle to organize and track their applications without a centralized system. They rely on scattered tools like spreadsheets, emails, and notepads because there is no unified platform tailored specifically to address the pain points of tracking job applications and deadlines. These pain points include:
                        </p>

                        <div className="context-item-container">

                            <div className="context-item">
                                <div className="context-item-header">
                                    <DownvoteIcon className="downvote-icon" />
                                    <h4>Disorganization</h4>
                                </div>
                                <p>
                                    Tracking application statuses is cumbersome. Users have to manually maintain spreadsheets or rely on multiple tools that don't provide an intuitive way to organize their job search progress. This leads to confusion over which jobs they've applied to, when follow-ups are needed, what the next steps should be, or lost time.
                                </p>
                            </div>

                            <div className="context-item">
                                <div className="context-item-header">
                                    <DownvoteIcon className="downvote-icon" />
                                    <h4>Fragmentation</h4>
                                </div>
                                <p>
                                    Accessing real-time, relevant job data is challenging. Users have to visit multiple platforms to search for opportunities. This process is time-consuming and often results in outdated or irrelevant listings, further complicating their job search.
                                </p>
                            </div>

                            <div className="context-item">
                                <div className="context-item-header">
                                    <DownvoteIcon className="downvote-icon" />
                                    <h4>Complexity</h4>
                                </div>
                                <p>
                                    Existing tools lack integration and user-friendliness, making it difficult for users to manage their applications efficiently. Poor design and fragmented workflows cause frustration, especially for users who are not tech-savvy or who need to access their data across multiple devices.
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
                        The challenge was to revolutionize the job search process by prioritizing simplicity, organization, and actionable insights. By integrating features like real-time job data, personalized tracking, and user-friendly design, EmployEase aimed to empower job seekers to navigate their job hunt with confidence and clarity.
                    </p>
                </div>
            </section>

            <section className="approach-section-header">

                <div className="section-left">
                    <h3>Approach</h3>
                </div>

                <div className="section-right">

                    <p>
                        The design and development of EmployEase focused on key principles to guide decisions and ensured the platform met user needs in a meaningful and effective way:
                    </p>

                    <div className="context-item-container">

                        <div className="context-item">
                            <div className="context-item-header clear-actionable-design">
                                <CircleCheckIcon className="circle-check-icon" />
                                <h4>Clear and actionable design focus</h4>
                            </div>
                            <p>
                                The design focuses on creating a user-friendly interface that addresses key pain points in the job search process. Emphasis is placed on simplicity and usability, minimizing distractions while ensuring essential tasks, such as tracking applications and deadlines, are easily accessible and manageable.
                            </p>
                        </div>

                        <div className="context-item">
                            <div className="context-item-header iteration-feedback">
                                <RefreshIcon className="refresh-icon" />
                                <h4>Iteration based on user feedback</h4>
                            </div>
                            <p>
                                Continuous feedback from potential users is integrated throughout the development process to ensure the solution aligns with user needs and expectations. Regular testing and iteration help refine the interface and functionality, leading to a more intuitive and efficient user experience.
                            </p>
                        </div>

                        <div className="context-item">
                            <div className="context-item-header user-centered-efficiency">
                                <UsersIcon className="user-icon" />
                                <h4>User centered efficiency</h4>
                            </div>
                            <p>
                                The project is centered around reducing complexity for users, with a focus on integrating features that directly address their needs. Real-time job data and personalized tracking are prioritized to ensure the solution is efficient, streamlined, and reduces the time spent managing job applications.
                            </p>
                        </div>

                        <div className="image-row-2">
                            <div className="image-column">
                                <p id="filter-bar-description" className="image-subtitles-left-2">The  design focuses on clarity and efficiency, with a user-friendly interface that simplifies job tracking and deadlines. Built on continuous user feedback, it prioritizes real-time job data and personalized tracking, creating a streamlined and efficient job search experience.</p>
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
                    <h3>Timelime & Process</h3>
                </div>

                <div className="section-right">
                    <div className="context-item">
                        <div className="context-item-header">
                            <h4>Day 1–2<br />Research</h4>
                        </div>
                        <ul>
                            <li>Conducted user interviews and competitive analysis to identify pain points in existing job search tools.</li>
                            <li>This research informed the development of core features, such as application tracking and real-time job updates.</li>
                        </ul>
                    </div>

                    <div className="context-item">
                        <div className="context-item-header">
                            <h4>Day 3–4<br />Ideation & Planning</h4>
                        </div>
                        <ul>
                            <li>Developed user personas and journey maps to define the most critical features and workflows.</li>
                            <li>Created wireframes and basic prototypes to visualize the user experience.</li>
                        </ul>
                    </div>

                    <div className="context-item">
                        <div className="context-item-header">
                            <h4>Day 5–6<br />Design & Prototyping</h4>
                        </div>
                        <ul>
                            <li>Designed high-fidelity mockups and interactive prototypes in Figma.</li>
                            <li>Conducted initial testing with potential users to gather feedback on design, layout, and functionality.</li>
                        </ul>
                    </div>

                    <div className="context-item">
                        <div className="context-item-header">
                            <h4>Day 7–10<br />Development & Implementation</h4>
                        </div>
                        <ul>
                            <li>Developed the front-end using React.js, ensuring the app was responsive and user-friendly.</li>
                            <li>Integrated APIs to pull real-time job data, enabling users to track their job applications directly within the tool.</li>
                        </ul>
                    </div>

                    <div className="context-item">
                        <div className="context-item-header">
                            <h4>Day 11–12<br />Testing & Iteration</h4>
                        </div>
                        <ul>
                            <li>Conducted usability testing and made iterations based on feedback.</li>
                            <li>Adjusted user interface for clarity, refined features, and a seamless experience across devices.</li>
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
                        By addressing the core pain points of disorganization, fragmentation, and complexity, we were able to provide job seekers with a unified, easy-to-use platform. The real-time data integration eliminated the need for users to visit multiple platforms, while personalized tracking ensured that users could keep up with deadlines and application statuses without losing track of progress.
                    </p>

                    <div className="solution-link solution-section">
                        <a href="https://employease-hubi.onrender.com/" target="_blank">View Live</a>
                    </div>

                    <div className="context-item-container">

                        <div id="end-result" className="context-item">
                            <div className="context-item-header clear-actionable-design">
                                <CircleCheckIcon className="circle-check-icon" />
                                <h4>How EmployEase solved the Problem</h4>
                            </div>
                            <p>
                                EmployEase tackled the core challenges of disorganization, fragmentation, and complexity by providing job seekers with a unified, easy-to-use platform. Real-time data integration eliminated the need to visit multiple platforms, while personalized tracking allowed users to stay on top of deadlines and application statuses without losing track of progress.
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
                                <p className="image-subtitles">The Filter Bar empowers users to customize their job search by selecting desired locations (top U.S. city in each state), industries (15 popular options), and experience levels (Entry, Mid, Senior, Management, Internship). With a single click, real-time job data is retrieved via The Muse API, delivering tailored opportunities that match the user’s preferences.</p>
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

                        <div className="context-item">
                            <div className="context-item-header clear-actionable-design">
                                <CircleCheckIcon className="circle-check-icon" />
                                <h4>What EmployEase improved beyond the Problem</h4>
                            </div>
                            <p>
                                Beyond solving pain points, EmployEase elevated the job search experience by focusing on simplicity and efficiency in features such as:
                                <ul>
                                    <li>Integrating real-time job data to ensure up-to-date opportunities.</li>
                                    <li>Enabling personalized job tracking for tailored user experiences.</li>
                                    <li>Ensuring mobile responsiveness for seamless access across devices.</li>
                                </ul>
                                These features streamlined the job application process, empowering users to manage everything in a centralized, intuitive location.
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
                                <p className="image-subtitles">
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
                                The final product is a user-friendly web platform that enables job seekers to easily track their applications, deadlines, and follow-ups. Key features include a dynamic job dashboard, real-time job data integration, and an intuitive user interface designed to minimize distractions. The platform is optimized for both desktop and mobile devices, ensuring accessibility for users on any device.
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
                        The project significantly improved the user experience for job seekers, providing them with a centralized platform that saved time and reduced the complexity of managing job applications. </p>
                    <p id="impact-paragraph-2">
                        By addressing key pain points such as fragmentation and disorganization, the platform empowered users to track their progress more efficiently, which led to a smoother and more organized job search experience.
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
                                    <li>The platform saw an increase in user engagement after integrating real-time job data and simplifying the tracking process.</li>
                                    <li>Users reported a reduction in time spent managing their job applications due to the platform's intuitive design and centralized tracking system.</li>
                                    <li>Users accessed the platform via mobile devices, highlighting the success of the mobile optimization efforts.</li>
                                </ul>
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-title">

                <div className="problem-section-header">
                    <div className="section-left">
                        <h3>Project Takeaways</h3>
                    </div>

                    <div className="section-right">

                        <div className="context-item-container">

                            <div className="context-item">
                                <div className="context-item-header lessons-learned">
                                    <FilePenLineIcon className="filepenline-icon" />
                                    <h4>Lessons learned</h4>
                                </div>
                                <p>
                                    Through this project, I gained a deeper understanding of how to balance user needs with technical constraints. I learned how to manage real-time data integrations and how critical it is to continuously iterate based on user feedback. This project also reinforced the importance of mobile-first design and optimizing user experience across multiple devices.
                                </p>
                            </div>

                            <div className="context-item">
                                <div className="context-item-header key-challenges-overcome">
                                    <CogIcon className="cog-icon" />
                                    <h4>Key challenges overcome</h4>
                                </div>
                                <p>
                                    One of the most challenging aspects was integrating real-time data from multiple sources while ensuring the platform remained responsive. By developing a robust backend system and implementing effective data syncing techniques, I was able to overcome this hurdle and deliver a seamless experience for users.
                                </p>
                            </div>

                            <div className="context-item">
                                <div className="context-item-header growth-and-future">
                                    <TrendingUpIcon className="trendingup-icon" />
                                    <h4>Growth and future development</h4>
                                </div>
                                <p>
                                    In the future, the platform could be expanded to include AI-powered job recommendations based on user preferences and past application data. There is also potential to integrate additional job boards and enhance the mobile app for even greater accessibility.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="challenge-section-header">
                <div className="section-left">
                    <h3>Reflections</h3>
                    {/* <h5>Streamlining the job search</h5> */}
                </div>

                <div className="section-right">
                    <p id="reflections-paragraph">
                        The EmployEase project allowed me to demonstrate my ability to create a user-centered design that addresses real-world challenges. It showcased my skills in both front-end development and UX/UI design, as well as my ability to iterate based on feedback to improve the user experience. This project reflects my commitment to creating practical solutions that empower users.
                    </p>
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
                        <p><a href="https://employease-hubi.onrender.com/" target="_blank">View Github Repo</a></p>
                    </div>

                    <div class="cta-option">
                        <p><a href="mailto:cheyennaraelynn@gmail.com">Email Me</a></p>
                    </div>

                    <div class="cta-option">
                        <p><a href="https://www.linkedin.com/in/cheyenna-raelynn/" target="_blank">View LinkedIn</a></p>
                    </div>

                </div>

            </section>

            <div class="see-more-button">
                <p>
                    Explore more of my portfolio to see how I can help bring your ideas to life
                    <a href="/portfolio" class="arrow-link">→</a>
                </p>
            </div>
            <ScrollButton />
        </div >
    );
};

export default EmployEaseCaseStudy;
