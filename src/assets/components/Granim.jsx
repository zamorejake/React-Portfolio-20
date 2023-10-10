// GranimBackground.jsx
import React, { useEffect, useRef } from 'react';
import Granim from 'granim';

const GranimBackground = ({ activeState, onStateChange }) => {
  const granimRef = useRef(null);

  useEffect(() => {
    const granimInstance = new Granim({
      element: granimRef.current,
      name: 'interactive-gradient',
      direction: 'diagonal',
      isPausedWhenNotInView: true,
      stateTransitionSpeed: 500,
      states: {
        'default-state': {
            gradients: [
              ['#FF4E50', '#F9D423'],  
              ['#9D50BB', '#6E48AA'],  
            ],
            transitionSpeed: 10000,
          },
          'about-me': {
            gradients: [
                ['#ADD100', '#7B920A'],
                ['#1A2980', '#26D0CE'], 
            ],
            transitionSpeed: 2000,
          },
          'portfolio': {
            gradients: [
              ['#4776E6', '#8E54E9'],  
              ['#FFA17F', '#00223E'],  
            ],
            loop: false,
          },
          'contact': {
            gradients: [
              ['#FFA17F', '#00223E'],
              ['#9D50BB', '#6E48AA'],
            ],
            transitionSpeed: 2000,
          },
          'resume': {
            gradients: [
              ['#4776E6', '#8E54E9'],
              ['#FFA17F', '#00223E'],
            ],
            transitionSpeed: 2000,
          },
          'links': {
            gradients: [
              ['#1A2980', '#26D0CE'],
              ['#ADD100', '#7B920A'],
            ],
            transitionSpeed: 2000,
          },
      },
      onStateChange: (newState) => {
        onStateChange(newState);
      },
    });

    granimInstance.changeState(activeState);

    return () => granimInstance.destroy();
  }, [activeState, onStateChange]);

  const canvasStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: -1,
  };

  return <canvas ref={granimRef} style={canvasStyle} />;
};

export default GranimBackground;
