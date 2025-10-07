import "../styles/Portfolio.css";

const CaseStudyImage = ({ src, alt, caption }) => {
  return (
    <div className="image-overlay-container">
      <img src={src} alt={alt} className="case-study-image" />
      <div className="image-caption">
        {caption}
      </div>
    </div>
  );
};

export default CaseStudyImage;