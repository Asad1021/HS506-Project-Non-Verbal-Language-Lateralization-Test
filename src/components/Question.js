import React, { useState, useEffect } from 'react';
import Options from './Options';
import '../styles/Question.css';
// Import all images
import img1L from '../assets/images/1L.png';
import img1R from '../assets/images/1R.png';
import img2L from '../assets/images/2L.png';
import img2R from '../assets/images/2R.png';
import img3L from '../assets/images/3L.png';
import img3R from '../assets/images/3R.png';
import img4L from '../assets/images/4L.png';
import img4R from '../assets/images/4R.png';
import img5L from '../assets/images/5L.png';
import img5R from '../assets/images/5R.png';
import img6L from '../assets/images/6L.png';
import img6R from '../assets/images/6R.png';
import img7L from '../assets/images/7L.png';
import img7R from '../assets/images/7R.png';
import img8L from '../assets/images/8L.png';
import img8R from '../assets/images/8R.png';
import img9L from '../assets/images/9L.png';
import img9R from '../assets/images/9R.png';
import img10L from '../assets/images/10L.png';
import img10R from '../assets/images/10R.png';
import img11L from '../assets/images/11L.png';
import img11R from '../assets/images/11R.png';
import img12L from '../assets/images/12L.png';
import img12R from '../assets/images/12R.png';
import img13L from '../assets/images/13L.png';
import img13R from '../assets/images/13R.png';
import img14L from '../assets/images/14L.png';
import img14R from '../assets/images/14R.png';
import img15L from '../assets/images/15L.png';
import img15R from '../assets/images/15R.png';
import img16L from '../assets/images/16L.png';
import img16R from '../assets/images/16R.png';
import img17L from '../assets/images/17L.png';
import img17R from '../assets/images/17R.png';
import img18L from '../assets/images/18L.png';
import img18R from '../assets/images/18R.png';
import img19L from '../assets/images/19L.png';
import img19R from '../assets/images/19R.png';
import img20L from '../assets/images/20L.png';
import img20R from '../assets/images/20R.png';
import img21L from '../assets/images/21L.png';
import img21R from '../assets/images/21R.png';
import img22L from '../assets/images/22L.png';
import img22R from '../assets/images/22R.png';
import img23L from '../assets/images/23L.png';
import img23R from '../assets/images/23R.png';
import img24L from '../assets/images/24L.png';
import img24R from '../assets/images/24R.png';
import img25L from '../assets/images/25L.png';
import img25R from '../assets/images/25R.png';

// Create an image map
const imageMap = {
  0: { left: img1L, right: img1R },
  1: { left: img2L, right: img2R },
  2: { left: img3L, right: img3R },
  3: { left: img4L, right: img4R },
  4: { left: img5L, right: img5R },
  5: { left: img6L, right: img6R },
  6: { left: img7L, right: img7R },
  7: { left: img8L, right: img8R },
  8: { left: img9L, right: img9R },
  9: { left: img10L, right: img10R },
  10: { left: img11L, right: img11R },
  11: { left: img12L, right: img12R },
  12: { left: img13L, right: img13R },
  13: { left: img14L, right: img14R },
  14: { left: img15L, right: img15R },
  15: { left: img16L, right: img16R },
  16: { left: img17L, right: img17R },
  17: { left: img18L, right: img18R },
  18: { left: img19L, right: img19R },
  19: { left: img20L, right: img20R },
  20: { left: img21L, right: img21R },
  21: { left: img22L, right: img22R },
  22: { left: img23L, right: img23R },
  23: { left: img24L, right: img24R },
  24: { left: img25L, right: img25R },
};

function Question({ questionNumber, onAnswer }) {
  const [showImages, setShowImages] = useState(true);
  const [showOptions, setShowOptions] = useState(false);

  useEffect(() => {
    setShowImages(true);
    setShowOptions(false);
    const timer = setTimeout(() => {
      setShowImages(false);
      setShowOptions(true);
    }, 300);

    return () => clearTimeout(timer);
  }, [questionNumber]);

  const currentImages = imageMap[questionNumber];

  return (

    <div className="question-container">

      {!showOptions && <div className="red-dot"></div>}

      {showImages && currentImages && (
        <div className={`images-container ${showImages ? 'fade-in' : 'fade-out'}`}>
          <img
            src={currentImages.left}
            alt="Left stimulus"
            className="left-image"
          />
          <img
            src={currentImages.right}
            alt="Right stimulus"
            className="right-image"
          />
        </div>
      )}

      {showOptions && (
        <div className={`options-wrapper ${showOptions ? 'fade-in' : ''}`}>
          <Options
            questionNumber={questionNumber}
            onSelect={onAnswer}
          />
        </div>
      )}
    </div>
  );
}

export default Question;