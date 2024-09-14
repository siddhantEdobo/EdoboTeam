import React, { useState } from "react";
import MobHeaderComponent from "../MobHeaderComponent";
import "./MobWalletComponent.css";
import MobTabDiscountComponent from "../MobOfferComponent/MobTabDiscountComponent";
import MobConnectComponent from "./MobConnectComponent";
import MobWalletComponent from "./MobWalletComponent";

const MobMyWalletComponent = () => {
  const [activeTab, setActiveTab] = useState("WALLET");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
      <MobHeaderComponent
        isBack={true}
        headerText={"My Wallet"}
        isCartShow={false}
        isEdoboLogo={true}
      />

      <div className="container-fluid">
        {/* Mobile navigation tabs */}
        <div className="nav nav-tabs nav-underline justify-content-around ">
          {/* Tab 1: OFFERS */}
          <div className="nav-item" onClick={() => handleTabClick("Connect")}>
            <div
              className={`nav-link text-secondary  ${
                activeTab === "Connect"
                  ? " active  bg-danger text-white px-3 rounded-5 mb-1"
                  : ""
              }`}
            >
              CONNECT & EARN
            </div>
          </div>

          {/* Tab 2: COUPON */}
          <div className="nav-item" onClick={() => handleTabClick("WALLET")}>
            <div
              className={`nav-link text-secondary ${
                activeTab === "WALLET"
                  ? "active bg-danger text-white px-3 rounded-5 mb-1"
                  : ""
              }`}
            >
              WALLET
            </div>
          </div>
        </div>

        {/* Tab content */}
        <div>
          {activeTab === "Connect" && <MobConnectComponent />}
          {activeTab === "WALLET" && <MobWalletComponent />}
        </div>
      </div>
    </>
  );
};

export default MobMyWalletComponent;
