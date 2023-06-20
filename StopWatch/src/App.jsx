import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
//import "./App.css";

function App() {
  const [time, setTime] = useState(false);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else if (!running) {
      clearInterval(interval);
    }
  }, [running]);

  return (
    <>
      <h1>StopWatch</h1>
      <div>
        <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
        <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
        <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
      </div>
      <div>
        <button
          onClick={() => {
            setRunning(true);
          }}
        >
          Start
        </button>
        <button onClick={() => setRunning(false)}>Stop</button>
        <button onClick={() => setTime(0)}>Reset</button>
      </div>
    </>
  );
}

export default App;
