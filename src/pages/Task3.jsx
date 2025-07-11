import React, { useEffect, useState } from "react";
import "../Task3.css";

export default function Task3() {
  // State to toggle star reviews
  const [showStar1, setShowStar1] = useState(false);
  const [showStar6, setShowStar6] = useState(false);

  // State to track clicks
  const [showTextCard1, setShowTextCard1] = useState(false);
  const [showVideoCard6, setShowVideoCard6] = useState(false);

  useEffect(() => {
    // Interval for Person 1 star review
    const interval1 = setInterval(() => {
      setShowStar1(true);
      setTimeout(() => setShowStar1(false), 3000); // show for 3 sec
    }, 7000);

    // Interval for Person 6 star review
    const interval6 = setInterval(() => {
      setShowStar6(true);
      setTimeout(() => setShowStar6(false), 3000);
    }, 7000);

    return () => {
      clearInterval(interval1);
      clearInterval(interval6);
    };
  }, []);

  return (
    <div className="testimonials-container">
      {/* Person 1 */}
      <div
        className={`photo photo1 ${showTextCard1 ? "active-shadow" : ""}`}
        onClick={() => setShowTextCard1((prev) => !prev)}
      >
        <img src="/images/person1.jpg" alt="Person 1" />
        {showStar1 && <div className="star-review">⭐⭐⭐⭐⭐</div>}
        {showTextCard1 && (
          <div className="text-review">
            <p>“This platform has transformed my skills! Highly recommend.”</p>
            <h4>Mahima Rai</h4>
            <span>Student</span>
          </div>
        )}
      </div>

      {/* Other People */}
      <div className="photo photo2">
        <img src="/images/four.png" alt="Person 2" />
      </div>
      <div className="photo photo3">
        <img src="/images/person3.jpg" alt="Person 3" />
      </div>
      <div className="photo photo4">
        <img src="/images/one.png" alt="Person 4" />
      </div>
      <div className="photo photo5">
        <img src="/images/two.png" alt="Person 5" />
      </div>

      {/* Person 6 */}
      <div
        className={`photo photo6 ${showVideoCard6 ? "active-shadow" : ""}`}
        onClick={() => setShowVideoCard6((prev) => !prev)}
      >
        <img src="/images/three.png" alt="Person 6" />
        {showStar6 && <div className="star-review">⭐⭐⭐⭐⭐</div>}
        {showVideoCard6 && (
          <div className="video-review">
            <video width="200" controls>
              <source src="/images/social.gif"  />
              Your browser does not support the video tag.
            </video>
          </div>
        )}
      </div>

      {/* Emoticons */}
      <div className="emoticon emoticon1">
        <img src="/images/likes.gif" alt="Like" />
      </div>
      <div className="emoticon emoticon2">
        <img src="/images/social.gif" alt="Social" />
      </div>
      <div className="emoticon emoticon3">
        <img src="/images/trophy.gif" alt="Trophy" />
      </div>
      <div className="emoticon emoticon4">
        <img src="/images/fb.gif" alt="Facebook" />
      </div>

      {/* Center Text */}
      <div className="center-content">
        <p>Hear how they level up their game!</p>
        <h2>
          Skill <span>Masters</span> Unite!
        </h2>
        <h3>View all Testimonials →</h3>
      </div>
    </div>
  );
}
