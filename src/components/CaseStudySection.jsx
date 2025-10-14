import { useState, useEffect } from "react";
import { MessageCircle } from "lucide-react";
import CaseStudyImage from "./CaseStudyImage";
import "../styles/Portfolio.css";

const CaseStudySection = ({ title, images, customClass }) => {
  const [showCaption, setShowCaption] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1281);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1281);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleToggle = () => {
    if (isMobile) {
      setShowCaption(prev => !prev);
    }
  };

  return (
    <section className={`case-study-section ${customClass || ""}`}>
      <div
        className="section-header"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "left",
          width: "100%",
        }}
      >
        <p className="section-label">{title}</p>
        <button
          className="caption-toggle-icon"
          onClick={handleToggle}
          onMouseEnter={() => !isMobile && setShowCaption(true)}
          onMouseLeave={() => !isMobile && setShowCaption(false)}
          aria-label="Toggle caption"
        >
          <MessageCircle size={20} />
        </button>
      </div>

      {/* Single caption for "two-in-row" sections or videos */}
      {images[0]?.caption && (
        <div
          className="image-caption"
          style={{
            textAlign: customClass === "two-in-row" ? "left" : "left",
            display: showCaption ? "block" : "none",
            marginBottom: "1rem",
          }}
        >
          {images[0].caption}
        </div>
      )}

      <div className="section-images">
        {images.map((img, index) => (
          <CaseStudyImage
            key={index}
            src={img.src}
            alt={img.alt}
            caption={customClass === "two-in-row" ? "" : img.caption} // prevent duplicate caption
            showCaption={showCaption}
            isVideo={img.isVideo}
          />
        ))}
      </div>
    </section>
  );
};

export default CaseStudySection;
