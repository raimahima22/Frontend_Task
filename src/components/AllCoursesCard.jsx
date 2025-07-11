// src/components/AllCoursesCard.jsx
import React from "react";
import "../Task2.css";

const AllCoursesCard = ({ icons, count, onClick }) => (
  <div className="all-courses-card" onClick={onClick}>

    <div className="all-courses-icons">
      {icons.map((icon, idx) => (
        <img key={idx} src={icon} alt="icon" />
      ))}
    </div>

    <div className="count-and-info">
      <div className="all-courses-count">{count}+</div>
      <div className="info-text">
        <div className="all-courses-title">All Courses</div>
        <p className="all-courses-description">
          courses you’re powering through right now.
        </p>
      </div>
    </div>
      <a href="#" className="all-courses-link">View all Courses →</a>
  </div>
);

export default AllCoursesCard;
