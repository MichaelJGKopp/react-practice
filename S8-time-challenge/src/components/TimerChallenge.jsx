import { useState, useRef } from "react";

// let timer; // doesn't work, shared across all instances of the component

export default function TimerChallenge({ title, targetTime }) {
  const timer = useRef();

  const [timerStarted, setTimerStarted] = useState(false);
  const [timerExpired, setTimerExpired] = useState(false);

  function handleStart() {
    timer.current = setTimeout(() => {
      setTimerExpired(true);
    }, targetTime * 1000);

    setTimerStarted(true); // executed immediately
  }

  function handleStop() {
    clearTimeout(timer.current); // clear the timer if it was set
  }

  return (
    <section className="challenge">
      <h2>{title}</h2>
      {timerExpired && <p>"You lost!"</p>}
      <p className="challenge-time">
        {targetTime} seconds{targetTime > 1 ? "s" : ""}
      </p>
      <p>
        <button onClick={timerStarted ? handleStop : handleStart}>
          {timerStarted ? "Stop Challenge" : "Start Challenge"}
        </button>
      </p>
      <p className={timerStarted ? "active" : undefined}>
        {timerStarted ? "Time is running..." : "Timer inactive"}
      </p>
    </section>
  );
}
