import React from "react";
import MobHeaderComponent from "../../MobHeaderNavigation";
import MobOrderCouponCode from "./MobOrderCouponCodeComponent";
import "./MobOrderTimer.css";
import MobOrderSummaryCard from "./MobOrderSummaryCard";
import MobOrderStepperComponent from "./MobOrderStepperComponent";

function MobOrderTimer() {
  return (
    <>
      <MobHeaderComponent text={'Order Timer'}
        // isBack={true}
        // headerText={"Order Timer"}
        // isCartShow={false}
        // isEdoboLogo={true}
      />
      <div className="bg">
        <div className="stepper-container ">

          <div className="card shadow progress-card mt-5 stepper-component">
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
