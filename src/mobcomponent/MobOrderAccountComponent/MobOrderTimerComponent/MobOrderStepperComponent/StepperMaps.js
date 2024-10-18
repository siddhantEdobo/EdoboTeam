import React, { useState, useEffect } from "react";
import "./MobOrderStepperComponent.css";
import down from "../../../../assets/Mob/mob-image/downStatus.png";
import scooterIcon from "../../../../assets/Mob/mob-image/scooterIcon.png";
import { useNavigate } from "react-router-dom";
import ROUTES_NAVIGATION from "../../../../routes/routes";

const StepperMap = () => {
  // Initializing state for each step with status and time
  const [orderPlace, setOrderPlace] = useState({
    status: "incomplete",
    time: "",
  });
  const [sanitized, setSanitized] = useState({
    status: "incomplete",
    time: "",
  });
  const [inTransit, setInTransit] = useState({
    status: "incomplete",
    time: "",
  });
  const [riderReached, setRiderReached] = useState({
    status: "Incomplete",
    time: "",
  });
  const [arriveStatus, setArriveStatus] = useState("On-time");
  const navigate = useNavigate();

  // Function to determine background color based on status
  const getStatusColor = (status) => {
    switch (status) {
      case "Done":
        return "green";
      case "Processing":
        return "orange";
      case "Incomplete":
      case "incomplete":
      default:
        return "lightgray";
    }
  };

  useEffect(() => {
    if (riderReached.status === "Done") {
      setTimeout(() => {
        // navigate({
        //   pathname: ROUTES_NAVIGATION.ORDER_DELAY,
        //   search: `?arriveStatus=${arriveStatus}`
        // });
      }, 2000);
    }
  });

  // Function to automatically update status after a specific time interval
  useEffect(() => {
    const timer = setInterval(() => {
      // Update status and time for each step
      if (orderPlace.status === "incomplete") {
        setOrderPlace({ status: "Processing", time: "" });
      } else if (orderPlace.status === "Processing") {
        setOrderPlace({ status: "Done", time: "7:01 AM" });
        setSanitized({ status: "Processing", time: "" });
      } else if (sanitized.status === "Processing") {
        setSanitized({ status: "Done", time: "07:10 AM" });
        setInTransit({ status: "Processing", time: "" });
      } else if (inTransit.status === "Processing") {
        setInTransit({ status: "Done", time: "07:20 AM" });
        setRiderReached({ status: "Processing", time: "" });
      } else if (riderReached.status === "Processing") {
        setRiderReached({ status: "Done", time: "07:30 AM" });
      }
    }, 5000); // 5-second intervals for demonstration

    return () => clearInterval(timer); // Clean up on unmount
  }, [
    orderPlace.status,
    sanitized.status,
    inTransit.status,
    riderReached.status,
  ]);

  return (
    <div className="order-status">
      {/* Order placed step */}
      <div className="step">
        <div className="step-header">
          <div className="step-title-container">
            <span className="step-title">Order placed</span>
          </div>
          <span
            className="step-dot"
            style={{ backgroundColor: getStatusColor(orderPlace.status) }}
          ></span>
          <img
            src={down}
            width={"15px"}
            style={{ marginLeft: "8px" }}
            alt="down arrow"
          />
          <div className="step-time-container">
            {" "}
            <span>{orderPlace.time}</span>
          </div>
        </div>
      </div>

      {/* Sanitized step */}
      <div className="step">
        <div className="step-header">
          <div className="step-title-container">
            <span className="step-title">Sanitized</span>
          </div>
          <span
            className="step-dot"
            style={{ backgroundColor: getStatusColor(sanitized.status) }}
          ></span>
          <img
            src={down}
            width={"15px"}
            style={{ marginLeft: "8px" }}
            alt="down arrow"
          />
          <div className="step-time-container">
            {" "}
            <span>{sanitized.time}</span>
          </div>
        </div>
      </div>

      {/* In Transit step */}
      <div className="step">
        <div className="step-header">
          <div className="step-title-container">
            <span className="step-title">In Transit</span>
          </div>
          <span
            className="step-dot"
            style={{ backgroundColor: getStatusColor(inTransit.status) }}
          ></span>
          <img
            src={scooterIcon}
            width={"15px"}
            style={{ marginLeft: "8px" }}
            alt="scooter icon"
          />
          <div className="step-time-container">
            {" "}
            <span>{inTransit.time}</span>
          </div>
        </div>
      </div>

      {/* Rider reached step */}
      <div className="step">
        <div className="step-header">
          <div className="step-title-container">
            {riderReached.status === "Done" ? (
              <span className="step-title">Dilvered</span>
            ) : (
              <span className="step-title">Rider reached</span>
            )}
          </div>
          <span
            className="step-dot"
            style={{ backgroundColor: getStatusColor(riderReached.status) }}
          ></span>
          <img
            src={scooterIcon}
            width={"15px"}
            style={{ marginLeft: "8px" }}
            alt="scooter icon"
          />
          <div className="step-time-container">
            {" "}
            <span>{riderReached.time}</span>
          </div>
        </div>
      </div>
      <div className="bar-line"></div>
    </div>
  );
};

export default StepperMap;
