import React from 'react';
import { questionsData } from '../data/questionsData';
import '../styles/Report.css';

function Report({ answers }) {
  const calculateResults = () => {
    const leftEyeAnswers = answers.filter((_, idx) => idx % 2 === 0);
    const rightEyeAnswers = answers.filter((_, idx) => idx % 2 === 1);

    const leftEyeCorrect = leftEyeAnswers.filter(
      (answer, idx) => answer === questionsData[idx * 2].correctAnswer
    ).length;

    const rightEyeCorrect = rightEyeAnswers.filter(
      (answer, idx) => answer === questionsData[idx * 2 + 1].correctAnswer
    ).length;

    const dominantEye = leftEyeCorrect > rightEyeCorrect ? 'Left' : 'Right';
    const hemisphere = dominantEye === 'Left' ? 'Right' : 'Left';

    return {
      leftEyeScore: leftEyeCorrect,
      rightEyeScore: rightEyeCorrect,
      totalQuestions: answers.length,
      dominantEye,
      hemisphere,
      accuracy: ((leftEyeCorrect + rightEyeCorrect) / answers.length) * 100
    };
  };

  const results = calculateResults();

  return (
    <div className="report-container">
      <h2 className="report-title">Test Results</h2>
      
      <div className="results-summary">
        <div className="score-card">
          <h3 className="score-heading">Left Eye Score</h3>
          <div className="score-value">{results.leftEyeScore}</div>
          <div className="score-label">
            out of 13 questions
          </div>
        </div>

        <div className="score-card">
          <h3 className="score-heading">Right Eye Score</h3>
          <div className="score-value">{results.rightEyeScore}</div>
          <div className="score-label">
            out of 12 questions
          </div>
        </div>
      </div>

      <div className="lateralization-results">
        <div className="dominant-eye">
          <h3 className="score-heading">Eye Dominance</h3>
          <p>Your {results.dominantEye} eye shows stronger performance</p>
        </div>

        <div className="hemisphere-result">
          <h3 className="score-heading">Language Lateralization</h3>
          <p>Your nonverbal language processing appears to be lateralized to the</p>
          <div className="hemisphere-highlight">
            {results.hemisphere} Hemisphere
          </div>
          <p className="explanation">
            {results.hemisphere === 'Right' 
              ? "Left eye dominance indicates right hemisphere lateralization for nonverbal language processing."
              : "Right eye dominance indicates left hemisphere lateralization for nonverbal language processing."}
          </p>
        </div>
      </div>

      <div className="accuracy-section">
        <h3 className="score-heading">Overall Accuracy</h3>
        <div className="accuracy-bar">
          <div 
            className="accuracy-fill"
            style={{ width: `${results.accuracy}%` }}
          />
        </div>
        <p className="score-label">{results.accuracy.toFixed(1)}%</p>
      </div>

      <button 
        className="restart-button"
        onClick={() => window.location.reload()}
      >
        Take Test Again
      </button>
    </div>
  );
}

export default Report;