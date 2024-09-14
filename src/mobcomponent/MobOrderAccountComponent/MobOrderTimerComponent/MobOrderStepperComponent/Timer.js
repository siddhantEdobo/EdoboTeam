import React, { useState, useEffect } from "react";
import MobOrderDelayScreen from "../MobOrderReachedScreenComponent/MobOrderDelayScreen";

function Timer() {
  const [time, setTime] = useState(85); // 30 minutes in seconds
  const [message, setMessage] = useState("");

  useEffect(() => {
    const timer = setInterval(() => {
      if (time > 0) {
        setTime((prevTime) => prevTime - 1);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (time === 80 || time === 60) {
      setMessage("Hey! Your order is on time");
    }
    if (time === 30) {
      setMessage("Rider On The Way");
    }
    if (time === -10) {
      setMessage(
        "You have win 10% OFF for next order as your order is 10 mins delay"
      );
    }
    if (time === 0) {
      setMessage("Sorry, Your order is 5 mins delay");
    }
  }, [time]);

  const formatTime = () => {
    const minutes = Math.floor(Math.abs(time) / 60); // Use absolute value for minutes
    const seconds = Math.abs(time) % 60; // Use absolute value for seconds
    return `${time < 0 ? "-" : ""}${minutes}:${
      seconds < 10 ? "0" : ""
    }${Math.abs(seconds)}`;
  };

  const messageClass = time < 0 ? "text-danger" : "text-success";

  return (
    <div className="my-2">
      <div className="d-flex justify-content-center ">
        {formatTime()}{" "}
        {message && (
          <div className={`fs-13 mt-2 fw-bold ms-2 ${messageClass}`}>
            {message}
          </div>
        )}
        {/* {(time === 80 || time === 60) && <MobOrderDelayScreen />} */}
      </div>
    </div>
  );
}

export default Timer;
