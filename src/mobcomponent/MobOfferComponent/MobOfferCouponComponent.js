import React, { useState } from "react";
import "./MobOfferCouponComponent.css";
import MobTabOffersComponent from "./MobTabOffersComponent";
import MobTabDiscountComponent from "./MobTabDiscountComponent";

const MobOfferCouponComponent = () => {
  const [activeTab, setActiveTab] = useState("OFFERS");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
      <div className="container">
        {/* Mobile navigation tabs */}
        <div className="nav nav-tabs nav-underline justify-content-around ">
          {/* Tab 1: OFFERS */}
          <div className="nav-item" onClick={() => handleTabClick("OFFERS")}>
            <div
              className={`nav-link text-secondary ${
                activeTab === "OFFERS" ? " active  text-danger" : ""
              }`}
            >
              OFFERS
            </div>
          </div>

          {/* Tab 2: COUPON */}
          <div className="nav-item" onClick={() => handleTabClick("COUPONS")}>
            <div
              className={`nav-link text-secondary ${
                activeTab === "COUPONS" ? "active text-danger" : ""
              }`}
            >
              COUPONS
            </div>
          </div>
        </div>

        {/* Tab content */}
        <div>
          {activeTab === "OFFERS" && <MobTabOffersComponent />}
          {activeTab === "COUPONS" && <MobTabDiscountComponent />}
        </div>
      </div>      
    </>
  );
};

export default MobOfferCouponComponent;
