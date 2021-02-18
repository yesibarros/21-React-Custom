import * as React from "react";

import Clock from "../components/Clock";

import { useTimer } from "../hooks/useTimer";

export default function Countdown() {
  const inputRef = React.useRef(null);

  React.useEffect(() => {
    inputRef.current.focus();
  }, []);

  const [value, setValue] = React.useState("");

  const { resetState, toggleState, time, isRunning } = useTimer(
    (setTime, running, time) => {
      const timeTick = () => setTime((time) => (time > 0 ? time - 1 : 0));
      const intValue = parseInt(value, 10);

      if (running && intValue !== 0) {
        if (time === 0) setTime(intValue * 100);
        return setInterval(timeTick, 10);
      }
    }
  );

  return (
    <>
      <section className="content">
        <h1>Countdown</h1>
        <Clock time={time} />
        <div>
          <button className="status-button" onClick={toggleState}>
            {isRunning ? "Pause" : "Start"}
          </button>
          <button className="status-button" onClick={resetState}>
            Reset
          </button>
          <input
            ref={inputRef}
            placeholder="0"
            value={value}
            onChange={({ target }) => setValue(target.value)}
          />
        </div>
      </section>
    </>
  );
}
