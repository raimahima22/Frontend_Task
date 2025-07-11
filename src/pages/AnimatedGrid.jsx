import React, { useEffect, useState } from "react";
import "../AnimatedGrid.css";

const ROWS = 9;      
const COLS = 12;
const INTERVAL_MS = 2000; // time interval 

export default function AnimatedGrid() {
  const [glowingTiles, setGlowingTiles] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {

      const count = Math.floor(Math.random() * 5) + 3; // 3–7 tiles
      const newGlowing = [];
      for (let i = 0; i < count; i++) {
        const r = Math.floor(Math.random() * ROWS);
        const c = Math.floor(Math.random() * COLS);
        newGlowing.push(`${r}-${c}`);
      }
      setGlowingTiles(newGlowing);
    }, INTERVAL_MS);

    return () => clearInterval(interval);
  }, []);

  const renderTiles = () => {
    const tiles = [];
    for (let row = 0; row < ROWS; row++) {
      for (let col = 0; col < COLS; col++) {
        const id = `${row}-${col}`;
        const isGlowing = glowingTiles.includes(id);
        tiles.push(
          <div
            key={id}
            className={`tile ${isGlowing ? "glow" : ""}`}
          ></div>
        );
      }
    }
    return tiles;
  };

  return (
    <div className="grid-container">
      {renderTiles()}
    </div>
  );
}
