import React from "react";

import "./MobCreditoComponent.css";

function MobCreditoComponent() {
  return (
    <>
      <div className="container mob-credito-background">
        <div className="mob-credito-content">
          <div className="content">
            <div className="fs-13 my-1">
              Earn credito for every purchase you buy, subscriptions, recharges
              & many more. Redeem the credito on purchase and take benefit of
              saving more.
            </div>
            <div className="fs-6 fw-bold my-3">1 EdoboCredito = 1 Rupee</div>
            <button className="btn btn-danger w-50 rounded-5">
              CLAIM CREDITO
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default MobCreditoComponent;
