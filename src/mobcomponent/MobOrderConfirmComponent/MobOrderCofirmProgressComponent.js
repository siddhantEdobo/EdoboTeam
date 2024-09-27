import React, { useState, useEffect } from "react";
import { Stepper } from "react-form-stepper";

const OrderPlaced = () => {
  return <div className="">Order placed</div>;
};

function CustomStepper(props) {
  const { steps, activeStep } = props;

  return (
    <div>
      <div>{steps[activeStep].heading}</div>
      <Stepper
        {...props}
        connectorStateColors={true}
        connectorStyleConfig={{
          completedColor: "#ffbd13",
          activeColor: "#ffbd13",
          disabledColor: "#eee",
        }}
        styleConfig={{
          activeBgColor: "#ffd813",
          completedBgColor: "#ffbd13",
          inactiveBgColor: "#eee",
          activeTextColor: "#111",
          completedTextColor: "#222",
          inactiveTextColor: "#444",
          labelFontSize: "10px",
        }}
      />
    </div>
  );
}

function PendingForShipping() {
  return <div>Pending for </div>;
}

function RiderOnTheWay() {
  return <div>Rider on the way</div>;
}

function Delivered() {
  return <div>Delivered</div>;
}

function MobOrderCofirmProgressComponent() {
  const [activeStep, setActiveStep] = useState(2);
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
          <div>Pending for shipping</div>
          <div className="mt-1">12:45 AM</div>
        </div>
      ),
    },
    {
      label: (
        <div className="gap-1">
          <div>Rider on the way</div>
          <div className="mt-1">Click on the icon for live status</div>
        </div>
      ),
    },
    {
      label: (
        <div className="gap-1 ">
          <div>Delivered</div>
          <div className="mt-1">12:20 PM</div>
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
      <CustomStepper steps={steps} activeStep={activeStep} />
      <div className="d-flex justify-content-center fs-6">
        {getSectionComponent()}
      </div>
      {/* Display order status */}
      {/* <div>Order Status: {orderStatus}</div> */}
    </div>
  );
}

export default MobOrderCofirmProgressComponent;
