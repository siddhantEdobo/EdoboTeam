import { faCommentDots, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect } from "react";
import { Stepper } from "react-form-stepper";
import "./MobOrderStepperComponent.css";
import Timer from "./Timer";

function CustomStepper(props) {
  const { steps, activeStep } = props;

  console.log("active status", activeStep);
  console.log("steps status", steps);

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
  const [orderStatus, setOrderStatus] = useState(""); // State to hold the order status

  useEffect(() => {
    // Simulating an API call with setTimeout
    const fetchOrderStatus = async () => {
      try {
        // Make an API call to fetch order status
        const response = await fetch("your_api_endpoint");
        const data = await response.json();
        // Assuming the response contains the order status
        setOrderStatus(data.orderStatus);
      } catch (error) {
        console.error("Error fetching order status:", error);
      }
    };

    // Call the fetchOrderStatus function
    fetchOrderStatus();
  }, []); // Run this effect only once, on component mount

  useEffect(() => {
    if (activeStep < 3) {
      const timer = setInterval(() => {
        setActiveStep((prevStep) => prevStep + 1);
      }, 25000); // Increment step every 30 seconds

      return () => clearInterval(timer);
    }
  }, [activeStep]);

  const steps = [
    {
      label: (
        <div className="gap-1">
          <div>Order placed</div>
          <div className="mt-1">11:45 AM</div>
        </div>
      ),
    },
    {
      label: (
        <div className="gap-1">
          <div>Sanitized</div>
        </div>
      ),
    },
    {
      label: (
        <div className="gap-1">
          <div>In Transit </div>
          {/* <div className="mt-1">Click on the icon for live status</div> */}
        </div>
      ),
    },
    {
      label: (
        <div className="gap-1 ">
          <div>Rider reached</div>
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
    <div>
      <div className="container">
        <div className="border-bottom text-center text-capitalize fs-2">
          <Timer />
        </div>
      </div>
      <CustomStepper steps={steps} activeStep={activeStep} />
      <div className="d-flex justify-content-center fs-6">
        {getSectionComponent()}
      </div>
      <div className="d-flex ms-2 my-2">
        <div className="p-1 me-2 call-rider fs-13">
          {" "}
          <FontAwesomeIcon icon={faPhone} /> Call Rider
        </div>
        <div className="p-1 chat-rider fs-13">
          {" "}
          <FontAwesomeIcon icon={faCommentDots} /> Chat
        </div>
      </div>
    </div>
  );
}

export default MobOrderStepperComponent;
