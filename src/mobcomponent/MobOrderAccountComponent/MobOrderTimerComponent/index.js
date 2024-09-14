import React from "react";
import MobHeaderComponent from "../../MobHeaderComponent";
import MobOrderCouponCode from "./MobOrderCouponCodeComponent";
import "./MobOrderTimer.css";
import MobOrderSummaryCard from "./MobOrderSummaryCard";
import MobOrderStepperComponent from "./MobOrderStepperComponent";

function MobOrderTimer() {
  return (
    <>
      <MobHeaderComponent
        isBack={true}
        headerText={"Order Timer"}
        isCartShow={false}
        isEdoboLogo={true}
      />
      <div className="bg">
        <div className="container ">
          <div className="card shadow progress-card mt-5">
            <MobOrderStepperComponent />
          </div>
          <MobOrderCouponCode />
        </div>
      </div>
      <MobOrderSummaryCard />
    </>
  );
}

export default MobOrderTimer;
