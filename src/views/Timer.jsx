import * as React from "react";

import Clock from "../components/Clock";
import Laps from "../components/Laps";

import { useTimer } from "../hooks/useTimer";
import { useLocalStorage } from "../hooks/useLocalStorage";

export default function Timer() {
  const [laps, setLaps] = useLocalStorage({
    key: "laps-time",
    defaultValue: [],
  });

  const { resetState, toggleState, time, isRunning } = useTimer(
    (setTime, running) => {
      const timeTick = () => {
        setTime((time) => time + 1);
      };
      if (running) {
        return setInterval(timeTick, 10);
      }
    }
  );

  const setNewLap = () => {
    if (time <= 0) return;
    setLaps({ type: "add", payload: time });
  };

  const clearLaps = () => {
    setLaps({ type: "clear" });
  };

  return (
    <>
      <section className="content">
        <h1>Timer</h1>
        <Clock time={time} />
        <div>
          <button className="status-button" onClick={toggleState}>
            {isRunning ? "Pause" : "Start"}
          </button>
          <button className="status-button" onClick={resetState}>
            Reset
          </button>
          <button className="status-button" onClick={setNewLap}>
            New Lap
          </button>
        </div>
      </section>
      <Laps laps={laps} onClear={clearLaps} />
    </>
  );
}
