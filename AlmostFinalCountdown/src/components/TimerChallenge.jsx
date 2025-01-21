import { useRef, useState } from "react";
import ResultModal from "./ResultModal";
export default function TimerChallenge({ title, targetTime }) {
  const timer = useRef();

  const [hasTimerStarted, setHasTimerStarted] = useState(false);
  const [isTimerExpired, setIsTimerExpired] = useState(false);

  function handleStart() {
    timer.current = setTimeout(() => {
      setIsTimerExpired(true);
    }, targetTime * 1000);

    setHasTimerStarted(true);
  }

  function handleStop() {
    clearTimeout(timer.current);
  }

  return (
    <>
      {isTimerExpired && <ResultModal targetTime={targetTime} result="lost" />}
      <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={hasTimerStarted ? handleStop : handleStart}>
            {hasTimerStarted ? "Stop" : "Start"} Challenge
          </button>
        </p>
        <p className={hasTimerStarted ? "active" : undefined}>
          {hasTimerStarted ? "Time is running..." : "Timer inactive"}
        </p>
      </section>
    </>
  );
}
