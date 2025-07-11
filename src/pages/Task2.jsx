
import React, { useState } from "react";
import AllCoursesCard from "../components/AllCoursesCard";
import StatusCard from "../components/StatusCard";
import "../Task2.css";
const Task2 = () => {
  // Track which StatusCard is active
  const [activeCard, setActiveCard] = useState('all');

  const handleCardClick = (cardId) => {
    setActiveCard((prev) => (prev === cardId ? null : cardId));
  };

  return (
    <div className="page-container">
      <h2 className="page-title">
        Explore our classes and master trending skills!
      </h2>
      <h1 className="page-heading">
        Dive Into <span>What's Hot Right Now!</span> 🔥
      </h1>

      <div className="cards-container">
        {/* All Courses Card toggles into StatusCard */}
        {activeCard === "all" ? (
          <AllCoursesCard
            count="23"
            icons={[
              "/images/react.png",
              "/images/insta.png",
              "/images/vue.png",
              "/images/paint.png",
            ]}
            onClick={() => handleCardClick("all")}
          />
        ) : (
          <StatusCard
            id="all"
            count="23"
            title="All Courses"
            description="Courses you're powering through right now."
            onClick={() => handleCardClick("all")}
          />
        )}

        {/* StatusCard #1 */}
        <StatusCard
          id="upcoming"
          count="05"
          title="Upcoming Courses"
          description="Exciting new courses waiting to boost your skills."
          isActive={activeCard === "upcoming"}
          onClick={() => handleCardClick("upcoming")}
        />

        {/* StatusCard #2 */}
        <StatusCard
          id="ongoing"
          count="10"
          title="Ongoing Courses"
          description="Currently happening—don’t miss out on the action!"
          isActive={activeCard === "ongoing"}
          onClick={() => handleCardClick("ongoing")}
        />
      </div>
    </div>
  );
};

export default Task2;