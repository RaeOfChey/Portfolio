import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const TimelineItem = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="timeline-context-item">
      {/* Header with arrow */}
      <div
        className="timeline-context-item-header"
        onClick={() => setIsOpen(!isOpen)}
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          cursor: "pointer",
        }}
      >
        <h4>{title}</h4>
        <span className="timeline-chevron">
        {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </span>
      </div>

      {/* Content area */}
      {isOpen && <div className="timeline-content">{children}</div>}
    </div>
  );
};

export default TimelineItem;