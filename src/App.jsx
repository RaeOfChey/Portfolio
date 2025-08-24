import React, { useEffect, useRef } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './styles/styles.css';
import './styles/Portfolio.css';

import Navigation from './components/Navigation';
import Footer from './components/Footer';
import AboutMe from './pages/AboutMe';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';

import EmployEaseCaseStudy from './pages/EmployEaseCaseStudy';
import ItascaSoftwareCaseStudy from './pages/ItascaSoftwareCaseStudy';
import KelvixCaseStudy from './pages/KelvixCaseStudy';
import ItascaCareersPageCaseStudy from './pages/ItascaCareersPageCaseStudy';
import NorsemanNuptials from './pages/NorsemanNuptials';
import OchaTeaHouse from './pages/OchaTeaHouse';
import SecureworldCaseStudy from './pages/SecureWorldCaseStudy';

function App() {
    const cursorRef = useRef(null);

    useEffect(() => {
        const cursor = cursorRef.current;

        // Track cursor movement
        const handleMouseMove = (e) => {
            cursor.style.top = `${e.clientY}px`;
            cursor.style.left = `${e.clientX}px`;
        };

        // Enlarge cursor when hovering over .learn-more-button
        const handleMouseEnterButton = (e) => {
            if (e.target.classList.contains('learn-more-button')) {
                cursor.classList.add('cursor-hover');
            }
        };

        const handleMouseLeaveButton = (e) => {
            if (e.target.classList.contains('learn-more-button')) {
                cursor.classList.remove('cursor-hover');
            }
        };

        document.addEventListener('mousemove', handleMouseMove);

        // Apply hover listeners to buttons
        const buttons = document.querySelectorAll('.learn-more-button');
        buttons.forEach(button => {
            button.addEventListener('mouseenter', handleMouseEnterButton);
            button.addEventListener('mouseleave', handleMouseLeaveButton);
        });

        // Clean up event listeners on component unmount
        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            buttons.forEach(button => {
                button.removeEventListener('mouseenter', handleMouseEnterButton);
                button.removeEventListener('mouseleave', handleMouseLeaveButton);
            });
        };
    }, []);

    return (
        <Router>
  <div>
    <Navigation />
    <main>
      <Routes>
        <Route path="/" element={<AboutMe />} /> 
        <Route path="/about" element={<AboutMe />} /> 
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/employease-case-study" element={<EmployEaseCaseStudy />} />
        <Route path="/itasca-software-case-study" element={<ItascaSoftwareCaseStudy />} />
        <Route path="/kelvix-case-study" element={<KelvixCaseStudy />} />
        <Route path="/itasca-careers-page-case-study" element={<ItascaCareersPageCaseStudy />} />
        <Route path="/norseman-nuptials" element={<NorsemanNuptials />} />
        <Route path="/ocha-tea-house" element={<OchaTeaHouse />} />
        <Route path="/ocha-tea-house" element={<OchaTeaHouse />} />
        <Route path="/branding-marketing-secureworld" element={<SecureworldCaseStudy />} />
      </Routes>
    </main>
    <Footer />
    {/* Custom cursor element */}
    <div ref={cursorRef} className="custom-cursor" />
  </div>
</Router>
    );
}

export default App;
