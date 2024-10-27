import React, { useState } from 'react';
import Welcome from './components/Welcome';
import Question from './components/Question';
import Report from './components/Report';
import Progress from './components/Progress';
import './App.css';
import Footer from './components/Footer';

function App() {
  const [testStarted, setTestStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showReport, setShowReport] = useState(false);
  const [userAnswers, setUserAnswers] = useState([]);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const startTest = () => {
    setTestStarted(true);
  };

  const handleAnswer = (answer) => {
    setIsTransitioning(true);
    setUserAnswers([...userAnswers, answer]);
    
    if (currentQuestion < 24) {
      // Small delay to ensure smooth transition
      setTimeout(() => {
        setCurrentQuestion(currentQuestion + 1);
        setIsTransitioning(false);
      }, 200);
    } else {
      setShowReport(true);
    }
  };

  return (
    <div className="App">
      {!testStarted && <Welcome onStart={startTest} />}
      
      {testStarted && !showReport && (
        <>
          <Progress current={currentQuestion} total={25} />
          {!isTransitioning && (
            <Question 
              questionNumber={currentQuestion}
              onAnswer={handleAnswer}
            />
          )}
        </>
      )}
      
      {showReport && <Report answers={userAnswers} />}
      <Footer />
    </div>
  );
}

export default App;