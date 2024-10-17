import { faCommentDots, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect } from "react";
import { Stepper } from "react-form-stepper";
import "./MobOrderStepperComponent.css";
import Timer from "./Timer";
import down from '../../../../assets/Mob/mob-image/downStatus.png';
import scooter from '../../../../assets/Mob/mob-image/scooterIcon.png';
import map from '../../../../assets/Mob/mob-image/map.png';
import {  useNavigate } from "react-router-dom";

import ROUTES_NAVIGATION from "../../../../routes/routes";

function CustomStepper(props) {
  const { steps, activeStep } = props;


  return (
    <div>
      <div>{steps[activeStep].heading}</div>
      <Stepper
        {...props}
        connectorStateColors={true}
        connectorStyleConfig={{
          completedColor: "#000",
          activeColor: "#000",
          disabledColor: "#eee",
        }}
        styleConfig={{
          activeBgColor: "#000",
          completedBgColor: "#fff",
          inactiveBgColor: "#eee",
          activeTextColor: "#fff",
          completedTextColor: "#000",
          inactiveTextColor: "#000",
          labelFontSize: "10px",
        }}
      />
    </div>
  );
}

const OrderPlaced = () => {
  return <div>Order Placed</div>;
};

const PendingForShipping = () => {
  return <div>Pending for Sanitized</div>;
};

const RiderOnTheWay = () => {
  return <div>Rider On The Way</div>;
};

const Delivered = () => {
  return <div>Delivered</div>;
};

function MobOrderStepperComponent() {
  const [activeStep, setActiveStep] = useState(0);
  const [orderStatus, setOrderStatus] = useState("");
  const navigate = useNavigate()

 const handleLiveTrack=()=>{
  navigate(ROUTES_NAVIGATION.ORDER_LIVE_TRACK)
 }
  useEffect(() => {
    const fetchOrderStatus = async () => {
      try {
        const response = await fetch("your_api_endpoint");
        const data = await response.json();
        setOrderStatus(data.orderStatus);
      } catch (error) {
        console.error("Error fetching order status:", error);
      }
    };

    fetchOrderStatus();
  }, []);

  useEffect(() => {
    if (activeStep < 3) {
      const timer = setInterval(() => {
        setActiveStep((prevStep) => prevStep + 1);
      }, 25000); // Increment step every 25 seconds

      return () => clearInterval(timer);
    }
  }, [activeStep]);

  useEffect(() => {
    // Navigate to another route when activeStep reaches 3
    if (activeStep === 3) {
      navigate(ROUTES_NAVIGATION.ORDER_DELAY); // Replace with your desired route
    }
  }, [activeStep, navigate]);


  const steps = [
    {
      label: (
        <div className="gap-1">
          <div style={{height: '30px'}}>Order placed</div>
          <div>
            <img src={down} width={'15px'} />
          </div>
          <div className="mt-1">11:45 AM</div>
        </div>
      ),
    },
    {
      label: (
        <div className="gap-1">
          <div style={{height: '30px'}}>Sanitized</div>
          <div>
            <img src={down} width={'15px'} />
          </div>
          <div className="mt-1">Done</div>
        </div>
      ),
    },
    {
      label: (
        <div className="gap-1">
          
          <div style={{height: '30px'}}>In Transit</div>
        <div style={{display:'flex' , flexDirection: 'column' , alignItems: 'center'}}>
        <img src={scooter} width={'20px'} />
        <div className="dot"/>
        <img 
        onClick={handleLiveTrack}
        src={map} width={'30px'}/>
        </div>
        </div>
      ),
    },
    {
      label: (
        <div className="gap-1">
          <div style={{height: '30px'}}>Rider reached</div>
          <div className="mt-1">1:20 PM</div>
        </div>
      ),
    },
  ];

  function getSectionComponent() {
    switch (activeStep) {
      case 0:
        return <OrderPlaced />;
      case 1:
        return <PendingForShipping />;
      case 2:
        return <RiderOnTheWay />;
      case 3:
        return <Delivered />;
      default:
        return null;
    }
  }

  return (
    <div className="timer-container">
      <div className="">
        <div className="border-bottom text-center text-capitalize fs-2">
          <Timer />
        </div>
      </div>
      <CustomStepper steps={steps} activeStep={activeStep} />
      <div className="d-flex justify-content-center fs-6">
       
      </div>
      <div className="d-flex ms-2 my-2">
        <div className="p-1 me-2 call-rider fs-13">
          <FontAwesomeIcon icon={faPhone} /> Call Rider
        </div>
        <div className="p-1 chat-rider fs-13">
          <FontAwesomeIcon icon={faCommentDots} /> Chat
        </div>
      </div>
    </div>
  );
}

export default MobOrderStepperComponent;
