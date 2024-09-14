import React from "react";
import emptyOrder from "../../../assets/Mob/mob-image/emptyorder.png";
import MobHeaderComponent from "../../MobHeaderComponent";
import "./MobEmptyOrder.css";
import MobBottomNavComponent from "../../MobBottomNavComponent";

function MobEmptyOrder() {
  return (
    <>
      <MobHeaderComponent
        isBack={true}
        headerText={"Order Details"}
        isCartShow={false}
        isEdoboLogo={true}
      />
      <div className="text-left border-bottom mb-3 p-3">
        <div className="fs-6 fw-bold ">My Order</div>
      </div>
      <div className="text-center mt-5">
        <div className="fs-6 ordertext">You have no past orders</div>
        <div className="d-flex flex-column align-items-center">
          <div className="fs-13">
            Let's get started
            <div className="btn btn-danger rounded-5 fs-13 fw-bold orderbtn ms-1 ">
              ORDER NOW
            </div>
          </div>
        </div>
      </div>

      <div className="text-center mt-5">
        <img src={emptyOrder} width={375} alt="Emptyorder" />
      </div>
      <MobBottomNavComponent />
    </>
  );
}

export default MobEmptyOrder;
