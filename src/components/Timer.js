import React, { useEffect, useState } from "react";
import "./Timer.css";
import Scene from "./Blob";

export default function Timer() {
  let [timer, setTimer] = useState({});
  // let [curr, setCurr] = useState(null)
  const exhibitionDay = new Date("December 1, 2023, 00:00:00");

  const getTimeRemaining = (e) => {
    const total = Date.parse(exhibitionDay) - Date.parse(new Date());

    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / 1000 / 60 / 60) % 24);
    const days = Math.floor(total / 1000 / 60 / 60 / 24);

    setTimer({
      total: total,
      days: days.toString(),
      hours: hours.toString(),
      minutes: minutes.toString(),
      seconds: seconds.toString(),
    });
  };

  useEffect(() => {
    setInterval(() => {
      getTimeRemaining();
    }, 1000);
  }, []);

  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <div className="h-screen w-screen fixed top-0 left-0 bg-slate-500 z-0">
        <Scene />
      </div>
      <div className="timer-container z-10 fixed flex justify-center items-center">
        {timer.total ? (
          <>
            <p
              className="timer"
              style={{ mixBlendMode: "hue", color: "white", opacity: 0.5 }}
            >
              {timer.days} : {timer.hours} : {timer.minutes} : {timer.seconds}
            </p>
          </>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
