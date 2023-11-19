import React, { useEffect, useRef } from "react";
import Granim from "granim";

const GranimBackground = ({ activeState, onStateChange }) => {
  const granimRef = useRef(null);

  useEffect(() => {
    const granimInstance = new Granim({
      element: granimRef.current,
      name: "interactive-gradient",
      direction: "diagonal",
      isPausedWhenNotInView: true,
      stateTransitionSpeed: 500,
      states: {
        "default-state": {
          gradients: [
            ["#FF4E50", "#F9D423"],
            ["#9D50BB", "#6E48AA"],
          ],
          transitionSpeed: 9000,
        },
        "about-me": {
          gradients: [
            ["#FF4E50", "#F9D423"],
            ["#9D50BB", "#6E48AA"],
          ],
          transitionSpeed: 9000,
        },
        portfolio: {
          gradients: [
            ["#4776E6", "#8E54E9"],
            ["#0EA5EF", "#4B0FA9"],
          ],
        },
        contact: {
          gradients: [
            ["#4776E6", "#6495ED"],
            ["#2CD084", "#0D623B"],
          ],
          transitionSpeed: 9000,
        },
        resume: {
          gradients: [
            ["#13428D", "#6FA0EE"],
            ["#6FEEEE", "#056363"],
          ],
          transitionSpeed: 9000,
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
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: -1,
  };

  return <canvas ref={granimRef} style={canvasStyle} />;
};

export default GranimBackground;
