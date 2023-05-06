import './App.css';
import React, { useState } from "react";
import MoleContainer from "./Compenents/MoleContainer";
import startImage from './start.png'; // Import the image

function App() {
  const [score, setScore] = useState(0);
  const [isGameRunning, setIsGameRunning] = useState(false);

  const createMoleHill = () => {
    let hills = [];
    for (let i = 0; i < 9; i++) {
      hills.push(
        <MoleContainer
          key={i}
          setScore={setScore}
          score={score}
        />
      );
    }

    return (
      <div>
        {hills}
      </div>
    );
  };

  const handleStart = () => {
    setIsGameRunning(true);
  };

  const handlePause = () => {
    setIsGameRunning(false);
  };

  const handleReset = () => {
    setScore(0);
    setIsGameRunning(false);
  };

  return (
    <div className="App">
      <div className="splash-image">
        <img src={startImage} alt='Mole'/>
      </div>
     
      <button
        className="start-button"
        onClick={handleStart}
        disabled={isGameRunning}
      >
        Start
      </button>
      <button
        className="pause-button"
        onClick={handlePause}
        disabled={!isGameRunning}
      >
        Pause
      </button>
      <button
        className="reset-button"
        onClick={handleReset}
      >
        Reset
      </button>
      
      <p className="score">Score: {score}</p> {/* Display the current score */}
      
      {isGameRunning && createMoleHill()}
    </div>
  );
}

export default App;







