import { useState } from "react";
import { Link } from "react-router-dom";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="home-container">
        <h1 className="home-title">Welcome to my Hometask</h1>
        <div className="button-group">
          <Link to="/task1" className="home-button">
             Task 1
          </Link>
          <Link to="/task2" className="home-button">
             Task 2
          </Link>
          <Link to="/animatedgrid" className="home-button">
             Task 3
          </Link>
        </div>
      </div>
    </>
  );
}

export default App;
