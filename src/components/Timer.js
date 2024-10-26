import React from 'react';
import '../styles/Timer.css';

function Timer({ timeLeft }) {
  const isWarning = timeLeft <= 5;

  return (
    <div className="timer-container">
      <div className={`timer-text ${isWarning ? 'timer-warning' : ''}`}>
        Time: {timeLeft}s
      </div>
    </div>
  );
}

export default Timer;