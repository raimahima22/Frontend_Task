import { useState } from "react";
import "./CardSwiper.css";

const cards = [
  {
    img: "/images/card1.png",
    text: "Clarity unlocked—stickers, sips, and skills all in one go!",
  },
  {
    img: "/images/card2.png",
    text: "Real projects. Real confidence. Real wow.",
  },
  {
    img: "/images/card3.png",
    text: "SkillShikshya: Your shortcut to standout skills.",
  },
];

export default function CardSwiper() {
  const [index, setIndex] = useState(0);
  const [isAnimating, setAnimating] = useState(false);

  const nextCard = () => {
    if (isAnimating) return;
    setAnimating(true);
    setTimeout(() => {
      setIndex((prev) => (prev + 1) % cards.length);
      setAnimating(false);
    }, 500);
  };

  return (
    <div className="card-swiper">
      <div
        className={`card-stack top-card ${isAnimating ? "slide-out" : ""}`}
        onClick={nextCard}
      >
        <img src={cards[index].img} alt="card" />
        <p>{cards[index].text}</p>
      </div>

      <div className="card-stack underneath-card">
        <img src={cards[(index + 1) % cards.length].img} alt="next card" />
        <p>{cards[(index + 1) % cards.length].text}</p>
      </div>
    </div>
  );
}
