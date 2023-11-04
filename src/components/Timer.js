import React, { useEffect, useState } from "react"; 
import "./Timer.css"



export default function Timer() {
    let [timer, setTimer] = useState({})
    // let [curr, setCurr] = useState(null)
    const exhibitionDay = new Date("December 1, 2023, 00:00:00")

    const getTimeRemaining = (e) => {
        const total = Date.parse(exhibitionDay) - Date.parse(new Date())

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
        })
    }

    useEffect(() => {
        setInterval(() => {
            getTimeRemaining()
        }, 1000)
    }, [])

    return(
        <div className="timer-container">
            {timer.total ? 
            <>
                <p className="timer">
                    {timer.days} : {timer.hours} : {timer.minutes} : {timer.seconds}
                </p>
                <div className="timer-label-container">
                    <p>days</p>
                    <p>hours</p>
                    <p>minutes</p>
                    <p>seconds</p>
                </div>
            </> : <></>}
        </div> 
    )
}