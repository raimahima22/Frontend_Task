// src/components/StatusCard.jsx
import React from "react";
import "../Task2.css";

const StatusCard = ({
  count,
  title,
  description,
  isActive,
  onClick,
}) => {
  if (isActive) {
    // Render AllCoursesCard-like layout
    return (
      <div className="all-courses-card" onClick={onClick}>
        <div className="all-courses-icons">
          <img src="/images/react.png" alt="icon" />
          <img src="/images/insta.png" alt="icon" />
          <img src="/images/vue.png" alt="icon" />
          <img src="/images/paint.png" alt="icon" />
        </div>
        <div className="count-and-info">
          <div className="all-courses-count">{count}+</div>
          <div className="info-text">
            <div className="all-courses-title">{title}</div>
            <p className="all-courses-description">{description}</p>
          </div>
        </div>
        <a href="#" className="all-courses-link">
          View Details →
        </a>
      </div>
    );
  }

  // Default StatusCard
  return (
    <div className="stat-card" onClick={onClick}>
      <div className="stat-vertical-container">
        <div className="stat-title-vertical">{title}</div>
        <p className="stat-description-vertical">{description}</p>
      </div>
      <div className="stat-count">{count}+</div>
      <div className="stat-hover-arrow">Click Me →</div>
    </div>
  );
};


export default StatusCard;
