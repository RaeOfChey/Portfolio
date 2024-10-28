import React, { useEffect, useState } from 'react';
import '../styles/styles.css';

const ScrollButton = () => {
    const [rotation, setRotation] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const pageHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrollPercentage = scrollPosition / pageHeight;

            // Set rotation from 0 to 180 degrees based on scroll percentage
            setRotation(scrollPercentage * 180);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <button
            className="scroll-button"
            onClick={scrollToTop}
            aria-label="Scroll to top"
            style={{ transform: `rotate(${rotation}deg)` }}
        >
            ↓
        </button>
    );
};

export default ScrollButton;
