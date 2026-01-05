"use client";
import { useRef, useState } from "react";
const StopWatch = () => {
  const [time, setTime] = useState(0);
  const intervalId = useRef<ReturnType<typeof setInterval> | null>(null);
  const start = () => {
    console.log("intervalId", intervalId.current);
    if (intervalId.current !== null) return;
    intervalId.current = setInterval(() => {
      setTime((time) => time + 1);
    }, 1000);
  };
  const stop = () => {
    if (intervalId.current) {
      clearInterval(intervalId.current);
      intervalId.current = null;
    }
  };
  const reset = () => {
    if (intervalId.current) {
      clearInterval(intervalId.current);
      intervalId.current = null;
      setTime(0);
    }
  };
  return (
    <>
      <h1>Stopwatch:{time}</h1>
      <div>
        <button onClick={() => start()} className="cursor-pointer">
          Start
        </button>
        <button onClick={() => stop()} className="cursor-pointer">
          Stop
        </button>
        <button onClick={() => reset()} className="cursor-pointer">
          Reset
        </button>
      </div>
    </>
  );
};

export default StopWatch;
