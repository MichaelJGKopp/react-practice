import { useState, useEffect } from "react";

export default function ProgressBar({ timer, onConfirm }) {
  const [remainingTime, setRemainingTime] = useState(timer);

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime((prevTime) => {
        if (prevTime <= 10) {
          clearInterval(interval);
          return 0;
        }
        return prevTime - 10;
      });
    }, 10);

    return () => clearInterval(interval);
  }, []);

  // Separate effect to monitor remainingTime and trigger onConfirm
  useEffect(() => {
    if (remainingTime === 0) {
      onConfirm();
    }
  }, [remainingTime, onConfirm]);

  /* This code timer and removing place are not in sync
      useEffect(() => {
        const interval = setInterval(() => {
          console.log("Interval running");
          setRemainingTime((prevRemainingTime) => prevRemainingTime - 10);
        }, 10);
        return () => clearInterval(interval);
      }, []);
    
      useEffect(() => {
        const timer = setTimeout(() => onConfirm(), TIMER);
    
        // cleanup function runs when component is removed from the DOM
        // or when the effect is re-run (e.g., if dependencies change)
        return () => {
          clearTimeout(timer);
        };
      }, [onConfirm]); // prop or state should be added to dependencies if used inside the effect
      // use useCallback for functions that are passed as dependencies to avoid infinite loop
      // functions are objects and are recreated on every render, they aren't equal after rerender, can lead to infinite loop */
  return <progress value={remainingTime} max={timer} />;
}
