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
import ITASCASoftwareImage2 from '../assets/ITASCASoftware CaseStudy Image2.png';
import ITASCASoftwareImage3 from '../assets/ITASCASoftware CaseStudy Image3.png';
import ITASCASoftwareImage4 from '../assets/ITASCASoftware CaseStudy Image4.png';
import ITASCASoftwareImage5 from '../assets/ITASCASoftware CaseStudy Image5.png';
import ITASCASoftwareImage7 from '../assets/ITASCASoftware CaseStudy Image7.png';

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

            <h1 className="case-study-h1">Case Study</h1>
            <h2 className="case-study-subtitle">Redesigning a B2B eCommerce SaaS platform to enhance user experience and drive software sales growth by 25%.</h2>

            <div className="links">
                <a href="https://itascasoftware.com/" target="_blank">View Live</a>
                {/* <a href="https://github.com/RaeOfChey/EmployEase" target="_blank">View GitHub</a> */}
            </div>

            <section className="section-title">
                <div className="project-overview">
                    <p><strong>Project<br /></strong>ITASCA Software</p>
                    <p><strong>Duration<br /></strong>4 months</p>
                    <p><strong>Completed<br /></strong>December 2023</p>
                    <p><strong>Role<br /></strong>UX/UI Designer, WordPress Developer, Front-End Developer</p>
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
                                <p id="filter-bar-description" className="image-subtitles-left-2">The design focuses on a streamlined user experience, simplifying navigation and product discovery. With clear, action-driven calls to action, a modernized layout, and an emphasis on mobile responsiveness, the homepage is optimized for both engagement and conversion.</p>
                            </div>
                            <div className="image-column-right-2 left-align">
                                <img
                                    src={ITASCASoftwareImage1}
                                    alt="This image depicts the home page, which shows how the design focuses on a streamlined user experience, simplifying navigation and product discovery. With clear, action-driven calls to action, a modernized layout, and an emphasis on mobile responsiveness, the homepage is optimized for both engagement and conversion."
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
                            <h4>Weeks 1–2<br />Planning</h4>
                        </div>
                        <ul>
                            <li>CConducted user interviews with the sales team and analyzed website analytics to identify key pain points in the sales and user journey.</li>
                            <li>Evaluated competitor websites and performed a gap analysis to uncover areas of improvement.</li>
                            <li>Reviewed existing website content, architecture, and functionality.</li>
                        </ul>
                    </div>

                    <div className="context-item">
                        <div className="context-item-header">
                            <h4>Weeks 3–5<br />Designing</h4>
                        </div>
                        <ul>
                            <li>Developed wireframes for the new site layout, focusing on simplicity, clarity, and ease of navigation.</li>
                            <li>Created high-fidelity mockups incorporating updated branding, CTAs, and key elements for better user flow.</li>
                            <li>Collaborated with stakeholders to refine design concepts, ensuring alignment with brand goals.</li>
                        </ul>
                    </div>

                    <div className="context-item">
                        <div className="context-item-header">
                            <h4>Weeks 6–9<br />Implementing</h4>
                        </div>
                        <ul>
                            <li>Developed the website's front-end using WordPress and a custom theme, incorporating the new design elements.</li>
                            <li>Integrated necessary tools, such as Google Analytics, Hotjar, and Optimizely, to monitor user engagement and gather data.</li>
                            <li>Focused on optimizing the site for mobile responsiveness and accessibility (WCAG compliance).</li>
                        </ul>
                    </div>

                    <div className="context-item">
                        <div className="context-item-header">
                            <h4>Weeks 10–12<br />Testing</h4>
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
                            <li>Launched the site and began post-launch monitoring to address any immediate user concerns.</li>
                            <li>Ongoing maintenance to ensure optimal performance, troubleshoot issues, and continuously improve the user experience based on feedback.</li>
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
                                "WordPress (CMS)", "PHP", "JavaScript", "Monday.com", "Miro", "Figma", "HTML/CSS", "SEO Optimization", "Google Analytics", "Hotjar", "Optimizely", "UX/UI Design", "WCAG", "FastSpring", "Stripe"
                            ]
                                .concat([
                                    "WordPress (CMS)", "PHP", "JavaScript", "Monday.com", "Miro", "Figma", "HTML/CSS", "SEO Optimization", "Google Analytics", "Hotjar", "Optimizely", "UX/UI Design", "WCAG", "FastSpring", "Stripe"
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
                                    <li>Aligning the website with the existing consulting website for consistency in branding and user experience.</li>
                                    <li>Managing communication between multiple external third-party teams and global stakeholders.</li>
                                    <li>Balancing technical product details with user-friendly content to avoid overwhelming users.</li>
                                    <li>Ensuring the platform handled user data securely and complied with relevant regulations.</li>
                                </ul>
                            </div>

                            <div className="context-item">
                                <div className="context-item-header milestones">
                                    <CircleCheckIcon className="circle-check-icon" />
                                    <h4>Milestones</h4>
                                </div>
                                <ul>
                                    <li>Increased software sales by 25% post-launch.</li>
                                    <li>Boosted lead generation by 30% with streamlined information architecture and clear CTAs.</li>
                                    <li>Achieved full mobile responsiveness, language localization, and global accessibility standards</li>
                                    <li>Properly implemented SEO optimization and data-driven insights tools.</li>
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
                        ITASCA Software’s website redesign addresses key user pain points by offering a streamlined, user-centered experience that simplifies product discovery, enhances user flow, and optimizes the purchasing process.
                    </p>
                    <div className="solution-link solution-section">
                        <a href="https://itascasoftware.com/" target="_blank">View Live</a>
                    </div>

                    <div className="context-item-container">

                        <div id="end-result" className="context-item">
                            <div className="context-item-header clear-actionable-design">
                                <CircleCheckIcon className="circle-check-icon" />
                                <h4>How the redesign solves user problems</h4>
                            </div>
                            <p>
                                The redesign of ITASCA Software's website directly addresses the pain points users face in navigating technical content and completing purchases by:
                                <ul>
                                    <li>
                                        Product discovery was simplified, with reorganized with clear navigation, concise product descriptions, and intuitive categories. Making it easier for users to find the solutions they need without feeling overwhelmed by technical jargon.
                                    </li>
                                    <li>
                                        The checkout experience was streamlined to eliminate friction and guide users through a seamless purchasing process, reducing the need for sales team intervention.
                                    </li>
                                    <li>
                                        The site was made fully mobile-responsive and offers multiple languages, ensuring users have a smooth experience across devices and locations, making the platform accessible to a global audience.
                                    </li>
                                    <li>
                                        Data-driven decision making is at the forefront, with the site continuously tracks user behavior and optimizes the site’s content, layout, and features for improved engagement.
                                    </li>
                                </ul>
                            </p>
                        </div>

                        <div className="image-row-1">
                            <div className="image-column-left-1">
                                <img
                                    src={ITASCASoftwareImage2}
                                    alt="This image depicts the new 'All Products' landing page, which centralizes all software offerings. This streamlined experience enhances product visibility, helping users quickly understand available solutions. Each product card displays essential details, guiding users toward informed purchasing decisions. This update directly supports the redesign’s goal of improving usability, reducing friction in the buying process, and increasing engagement with ITASCA’s product ecosystem."
                                    className="case-study-image"
                                />
                            </div>
                            <div className="image-column-right-1">
                                <p id="the-filter-bar-subtitle" className="image-subtitles">This new 'All Products' landing page centralizes all software offerings. This streamlined experience enhances product visibility, helping users quickly understand available solutions. Each product card displays essential details, guiding users toward informed purchasing decisions. This update directly supports the redesign’s goal of improving usability, reducing friction in the buying process, and increasing engagement with ITASCA’s product ecosystem.</p>
                            </div>
                        </div>

                        <div className="image-row-2">
                            <div className="image-column">
                                <p id="filter-bar-description" className="image-subtitles-left-2">This section of the product page concisely highlights the key benefits and features of a software software, ensuring users quickly understand its value. The clean, structured layout makes it easy to scan, helping potential customers make informed decisions with confidence. Simplifying complex product details and improving clarity reduces friction in the buying process.</p>
                            </div>
                            <div className="image-column-right-2 left-align">
                                <img
                                    src={ITASCASoftwareImage5}
                                    alt="This image depicts a section of the product page concisely highlights the key benefits and features of a software software, ensuring users quickly understand its value. The clean, structured layout makes it easy to scan, helping potential customers make informed decisions with confidence. Simplifying complex product details and improving clarity reduces friction in the buying process"
                                    className="case-study-image"
                                />
                            </div>
                        </div>

                        <div className="context-item beyond-the-challenge">
                            <div className="context-item-header clear-actionable-design">
                                <CircleCheckIcon className="circle-check-icon" />
                                <h4>What the redesign improved beyond the Challenge</h4>
                            </div>
                            <p>
                                The redesign addresses core user problems by incorporating additional features that elevate the user experience and increase engagement:
                                <ul>
                                    <li>Improved information architecture helps users find relevant software solutions quickly from the user journey of discovery to purchase.</li>
                                    <li>Actionable CTAs were integrated strategically throughout the site, making it easier for users to take action and saving them time.</li>
                                    <li>Integration of Google Analytics and other data-driven tools allows for continuous refinement of user experience based on actionable insights.</li>
                                    <li>Proper SEO implementation and performance tuning ensure better search engine visibility and faster load times for improved user engagement and traffic.</li>
                                </ul>
                            </p>
                        </div>

                        <div className="image-row-1">
                            <div className="image-column-left-1">
                                <img
                                    src={ITASCASoftwareImage4}
                                    alt="This image depicts the checkout cart page, which provides users with a clear, organized view of their selected product and key details. By displaying all relevant information upfront, users can easily review and modify their selections before completing their purchase. Additionally, the page features intelligent product recommendations, suggesting complementary software or add-ons based on the user’s cart. This enhances product discovery and improves the user experience, reducing purchasing friction, and increasing cross-selling opportunities."
                                    className="case-study-image"
                                />
                            </div>
                            <div className="image-column-right-1">
                                <p className="image-subtitles">
                                    The checkout cart page provides users with a clear, organized view of their selected product and key details. By displaying all relevant information upfront, users can easily review and modify their selections before completing their purchase.
                                </p>
                                <p className="image-subtitles">
                                    Additionally, the page features intelligent product recommendations, suggesting complementary software or add-ons based on the user’s cart. This enhances product discovery and improves the user experience, reducing purchasing friction, and increasing cross-selling opportunities.
                                </p>
                            </div>
                        </div>

                        <div className="image-row-2">
                            <div className="image-column">
                                <p id="filter-bar-description" className="image-subtitles-left-2">The new product landing pages allows users to easily compare and select the right software license. Users can choose from multiple licensing options directly from the product page. The Add to Cart feature streamlines the purchasing process, while the Request a Demo option ensures users can explore the software before committing. Which aligns with the redesign’s goal of improving clarity, reducing friction in the buying process.
                                </p>
                            </div>
                            <div className="image-column-right-2 left-align">
                                <img
                                    src={ITASCASoftwareImage3}
                                    alt="This image depicts a part of the new product landing page that allows users to easily compare and select the right software license. Users can choose from multiple licensing options directly from the product page. The Add to Cart feature streamlines the purchasing process, while the Request a Demo option ensures users can explore the software before committing. Which aligns with the redesign’s goal of improving clarity, reducing friction in the buying process."
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
                                The final product is a user-friendly, mobile-optimized website that enhances both user experience and lead generation. The redesigned site has increased software sales by 25%, improved lead generation by 30%, and offers a seamless, data-driven user experience across all devices. Users can now navigate the site efficiently, making confident purchasing decisions while enjoying a streamlined journey from discovery to checkout.
                            </p>
                        </div>

                        <img
                            id="A glimpse of the final landing page design for the ITASCA Software website."
                            src={ITASCASoftwareImage7}
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
                        The ITASCA Software website redesign transformed the user experience by creating a seamless, intuitive platform that effectively addressed the challenges users faced.
                    </p>
                    <p id="impact-paragraph-2">
                        By streamlining product discovery, optimizing the purchasing process, and enhancing global accessibility, the redesign empowered users to navigate the site with ease and confidence. The improvements resulted in increased engagement, higher conversion rates, and greater user satisfaction.
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
                                    <li>Improved navigation and CTAs increased software sales by 25%, proving the effectiveness of a user-centered design.</li>
                                    <li>Streamlined product discovery and checkout reduced search time, enhancing the user experience.</li>
                                    <li>Localization and mobile optimization expanded global reach, boosting engagement and traffic.</li>
                                    <li>A refined user journey and CTAs drove higher conversion rates and a 30% increase in lead generation.</li>
                                    <li>Faster load times and improved SEO enhanced visibility and organic traffic post-launch.</li>
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
                                    This project deepened my understanding of optimizing ecommerce platforms for both user experience and business objectives. I learned how to balance user needs with SEO, accessibility, and performance improvements to create a site that was both engaging and effective. Additionally, collaborating with third-party developers reinforced the importance of clear communication in executing a shared vision.
                                </p>
                            </div>

                            <div className="context-item">
                                <div className="context-item-header key-challenges-overcome">
                                    <CogIcon className="cog-icon" />
                                    <h4>Key challenges overcome</h4>
                                </div>
                                <p>
                                    One of the biggest challenges was improving the site's information architecture while maintaining consistency across a vast product catalog. By implementing a more intuitive navigation system and refining the checkout process, I was able to simplify product discovery and enhance usability.
                                </p>
                                <br />
                                <p>
                                    Another key challenge was ensuring the site met global accessibility and localization standards. Through careful optimization and testing, I successfully made the platform more inclusive and user-friendly for an international audience.
                                </p>
                            </div>

                            <div className="context-item">
                                <div className="context-item-header key-challenges-overcome">
                                    <SparklesIcon className="sparkles-icon" />
                                    <h4>Personal reflections</h4>
                                </div>
                                <p>
                                    This project was a rewarding opportunity to apply my UX expertise to a real-world ecommerce platform with measurable business impact. Seeing a direct increase in sales and engagement reinforced the power of user-centered design in driving conversions.
                                </p>
                                <br />
                                <p>
                                    I’m proud of the improvements made and excited to bring these insights into future projects focused on accessibility, usability, and performance-driven design.
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

                        <p>The ITASCA Software platform has the potential to further enhance user experience, streamline operations, and drive greater customer engagement through these future improvements:</p>

                        <div className="context-item-container">

                            <div className="context-item">
                                <div className="context-item-header lessons-learned">
                                    <TrendingUpIcon className="trendingup-icon" />
                                    <h4>Personalized product recommendations</h4>
                                </div>
                                <p>
                                    Integrate AI-driven product recommendations based on user behavior and previous purchases. This feature would guide customers toward relevant software solutions and increase cross-selling opportunities.
                                </p>
                            </div>

                            <div className="context-item">
                                <div className="context-item-header key-challenges-overcome">
                                    <TrendingUpIcon className="trendingup-icon" />
                                    <h4>Virtual Assistant</h4>
                                </div>
                                <p>
                                    Implement an AI-driven virtual assistant to provide real-time support, answer product-related questions, and guide users through the purchasing process with contextual assistance.
                                </p>
                            </div>

                            <div className="context-item">
                                <div className="context-item-header key-challenges-overcome">
                                    <TrendingUpIcon className="trendingup-icon" />
                                    <h4>Advanced product filtering</h4>
                                </div>
                                <p>
                                    Expand the product discovery process with advanced filtering options, such as product compatibility, use case scenarios, and industry-specific applications, to help users find the most relevant solutions faster.
                                </p>
                            </div>

                            <div className="context-item">
                                <div className="context-item-header key-challenges-overcome">
                                    <TrendingUpIcon className="trendingup-icon" />
                                    <h4>Interactive product demos</h4>
                                </div>
                                <p>
                                    Incorporate interactive demos or product simulations, allowing users to explore software features and functionality in real-time, boosting confidence in purchasing decisions.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="cta-section">

                <div class="cta-options">

                    <div class="cta-option">
                        <p><a href="https://itascasoftware.com/" target="_blank">View Live</a></p>
                    </div>

                    <div class="cta-option">
                        <p><a href="https://github.com/RaeOfChey" target="_blank">View My Github</a></p>
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

export default ITASCASoftwareCaseStudy;
