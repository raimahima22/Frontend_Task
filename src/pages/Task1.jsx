import "../Task1.css";

export default function Task1() {
  const cards = [
    {
      title: "Start with Clarity",
      subtitle: "Step into a better learning path.",
      description:
        "Overwhelmed by too many learning options? SkillShikshya provides a clear, curated roadmap from the start. Whether you're a beginner or upskilling, we have a path tailored to your growth.",
      bg: "red-card",
      imgSrc: "/images/one.png",
      underImgSrc: "/images/woman.png",
    },
    {
      title: "Learn by Doing",
      subtitle: "Practical skills, real projects.",
      description:
        "Theory is great, but action is better. At SkillShikshya, you learn by doing. Hands-on projects and real-world scenarios help you build, break, and create—leading to true mastery.",
      bg: "blue-card",
      imgSrc: "/images/two.png",
      underImgSrc: "/images/work.png",
    },
    {
      title: "Get Mentored & Supported",
      subtitle: "You're not learning alone.",
      description:
        "Stuck or need feedback? SkillShikshya’s community of mentors and learners has your back with live support, interactive discussions, and expert insights. You’re never on your own.",
      bg: "violet-card",
      imgSrc: "/images/three.png",
    },
    {
      title: "Achieve & Showcase",
      subtitle: "Build your portfolio, get job-ready.",
      description:
        "Your journey ends with achievement. Each completed project builds a portfolio showcasing your skills and job readiness, bringing you closer to that dream job, promotion, or your own venture.",
      bg: "yellow-card",
      imgSrc: "/images/four.png",
    },
  ];

  return (
    <div className="task-container">
      <div className="header">
        <p className="caption">Your SkillShikshya Journey</p>
        <h1>
          <span className="green">Step</span> In.{" "}
          <span className="green">Skill</span> Up.{" "}
          <span className="green">Stand</span> Out. 🚀
        </h1>
      </div>

      <div className="card-grid">
        {cards.map((card, idx) => {
          const slideDirection = idx % 2 === 0 ? "slide-left" : "slide-right";

          return (
            <div key={idx} className={`card-container ${slideDirection}`}>
              {/* Underneath card */}
              <div
                className={`card underneath-card ${card.bg} ${
                  idx === 0 ? "first-underneath" : ""
                }`}
              >
                <div className="underneath-wrapper">
  <button className="side-button left">
    <span className="arrow">←</span>
  </button>
                {idx === 0 ? (
                  <div className="first-underneath-content">
                    <img
                      src={card.underImgSrc}
                      alt={card.title}
                      className="first-underneath-img"
                    />
                    <div className="first-underneath-text">
                      <p>
                        Clarity unlocked—stickers, sips, and skills all in one
                        go!
                      </p>
                      <img
                        src="/images/wow.png"
                        alt="wow"
                        className="wow-icon wow-1"
                      />
                      <img
                        src="/images/wow.png"
                        alt="wow"
                        className="wow-icon wow-2"
                      />
                    </div>
                  </div>
                ) : idx === 1 ? (
                  // Second special underneath card
                  <div className="second-underneath-content">
                    <div className="second-underneath-text">
                      <h3>Focused faces—learning mode: ON!</h3>
                    </div>
                    <img
                      src={card.underImgSrc}
                      alt="focused mode"
                      className="second-underneath-img"
                    />
                  </div>
                ) : (
                  <>
                    <div className="card-img-wrapper">
                      <img
                        src={card.imgSrc}
                        alt={card.title}
                        className="card-img bounce"
                      />
                    </div>
                    <div className="card-content">
                      <h2> Clarity unlocked</h2>
                    </div>
                  </>
                )}
                 <button className="side-button right">
                    <span className="arrow">→</span>
                  </button>
                </div>
              {/* </div> */}
              </div>

              {/* Top card */}
              <div className={`card top-card ${card.bg}`}>
                <div className="card-img-wrapper">
                  <img
                    src={card.imgSrc}
                    alt={card.title}
                    className="card-img bounce"
                  />
                </div>
                <div className="card-content">
                  <h2>{card.title}</h2>
                  <h3>{card.subtitle}</h3>
                  <p>{card.description}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
