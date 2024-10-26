import React from 'react';
import '../styles/Welcome.css';
function Welcome({ onStart }) {
  return (
    <div className="welcome-container">
      <h1 className="welcome-title">
        Nonverbal Language Lateralization Test
      </h1>
      <p className="welcome-description">
        This test consists of 25 questions evaluating your visual perception.
        You will be shown pairs of images and asked to identify what you saw.
        Please maintain focus on the center red dot throughout the test.
      </p>
      <button 
        className="start-button"
        onClick={onStart}
      >
        Start Test
      </button>
    </div>
  );
}

export default Welcome;