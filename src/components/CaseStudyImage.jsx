import "../styles/Portfolio.css";

const CaseStudyImage = ({ src, alt, caption, showCaption, isVideo }) => {
  return (
    <div className="image-overlay-container">
      {showCaption && caption && (
        <div className="image-caption">
          {caption}
        </div>
      )}
      {isVideo ? (
        <video
          src={src}
          alt={alt}
          controls
          autoPlay
          loop
          muted
          className="case-study-image"
        />
      ) : (
        <img src={src} alt={alt} className="case-study-image" />
      )}
    </div>
  );
};

export default CaseStudyImage;
