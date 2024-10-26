import React from 'react';
import { questionsData } from '../data/questionsData';
import '../styles/Options.css';

function Options({ questionNumber, onSelect }) {
  const currentQuestion = questionsData[questionNumber];

  return (
    <div className="options-container">
      <h3 className="question-text">
        What did you see in the {questionNumber % 2 === 0 ? 'left' : 'right'} eye?
      </h3>
      <div className="options-grid">
        {currentQuestion.options.map((option, index) => (
          <button 
            key={index}
            className="option-button"
            onClick={() => onSelect(index)}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Options;