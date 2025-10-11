import { useState, useEffect } from "react";
import "../styles/Portfolio.css";

const CaseStudyImage = ({ src, alt, caption, charLimit = 120 }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen size
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 1281);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Determine what caption to show
  let displayCaption = caption;

  if (isMobile) {
    // On mobile, only show caption if toggled open
    displayCaption = isOpen ? caption : "";
  } else {
    // On desktop, show truncated caption by default, expand on hover
    const truncatedCaption =
      caption.length > charLimit ? caption.slice(0, charLimit) + "…" : caption;
    displayCaption = isHovered ? caption : truncatedCaption;
  }

  return (
    <div
      className="image-overlay-container"
      onMouseEnter={() => !isMobile && setIsHovered(true)}
      onMouseLeave={() => !isMobile && setIsHovered(false)}
    >
      <img src={src} alt={alt} className="case-study-image" />

      {/* Mobile toggle button */}
      {isMobile && (
        <button
          className="caption-toggle-icon"
          onClick={() => setIsOpen(!isOpen)}
        >
          💬
        </button>
      )}

      {/* Caption overlay */}
      <div
  className={`image-caption ${
    isMobile ? (isOpen ? "open" : "hidden") : ""
  }`}
>
  {displayCaption}
</div>
    </div>
  );
};

export default CaseStudyImage;
