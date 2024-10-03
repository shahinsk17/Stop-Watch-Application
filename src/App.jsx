import { useState } from "react";
import "./App.css";
import { useRef } from "react";

function App() {
  let timerRef = useRef(null);
  const [count, setCount] = useState(0);

  function handleStrt() {
    timerRef.current = setInterval(() => {
      setCount((count) => count + 1);
    }, 1000);
  }
  function handleStop() {
    clearInterval(timerRef.current);
    timerRef = null;
  }
  function handleReset() {
    setCount(0);
  }

  return (
    <>
      <div className="container">
        <div className="stopwatch-container">
          <h1>Stop Watch</h1>
          <div className="time-display">{count} Seconds</div>

          <div className="controls">
            <button className="start-btn" onClick={handleStrt}>
              Start
            </button>

            <button className="stop-btn" onClick={handleStop}>
              Stop
            </button>

            <button className="reset-btn" onClick={handleReset}>
              Reset
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
