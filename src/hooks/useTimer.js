import React from "react";

export function useTimer(runInterval) {
  const [isRunning, setIsRunning] = React.useState(false);
  const [time, setTime] = React.useState(0);

  React.useEffect(() => {
    let intervalID = runInterval(setTime, isRunning, time);
    return () => clearInterval(intervalID);
  }, [isRunning]);

  const toggleState = () => {
    setIsRunning(!isRunning);
  };

  const resetState = () => {
    setTime(0);
    setIsRunning(false);
  };

  React.useEffect(() => {
    if (time <= 0) {
      resetState();
    }
  }, [time]);

  return {
    resetState,
    toggleState,
    time,
    isRunning,
  };
}
