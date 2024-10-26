import React from 'react';
import '../styles/Progress.css';

function Progress({ current, total }) {
  const progress = ((current + 1) / total) * 100;

  return (
    <div className="progress-container">
      <div className="progress-bar">
        <div 
          className="progress-fill"
          style={{ width: `${progress}%` }}
        />
      </div>
      <div className="progress-text">
        Question {current + 1} of {total}
      </div>
    </div>
  );
}

export default Progress;