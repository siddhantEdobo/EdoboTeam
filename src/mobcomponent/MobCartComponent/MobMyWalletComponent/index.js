import React, { useState } from "react";
import MobHeaderComponent from "../../MobHeaderComponent";
import "./MobMyWalletComponent.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWallet } from "@fortawesome/free-solid-svg-icons";
import MobTabOffersComponent from "../../MobOfferComponent/MobTabOffersComponent";
import MobTabDiscountComponent from "../../MobOfferComponent/MobTabDiscountComponent";
import "./MobMyWalletComponent.css";

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

      <div className="container">
        {/* Mobile navigation tabs */}
        <div className="nav nav-tabs nav-underline justify-content-around ">
          {/* Tab 1: OFFERS */}
          <div className="nav-item" onClick={() => handleTabClick("Connect")}>
            <div
              className={`nav-link text-secondary ${
                activeTab === "Connect" ? " active  text-danger" : ""
              }`}
            >
              Connect & Earn
            </div>
          </div>

          {/* Tab 2: COUPON */}
          <div className="nav-item" onClick={() => handleTabClick("WALLET")}>
            <div
              className={`nav-link text-secondary ${
                activeTab === "WALLET" ? "active text-danger" : ""
              }`}
            >
              WALLET
            </div>
          </div>
        </div>

        {/* Tab content */}
        <div>
          {activeTab === "Connect" && <MobTabOffersComponent />}
          {activeTab === "WALLET" && <MobTabDiscountComponent />}
        </div>
      </div>
    </>
  );
};

export default MobMyWalletComponent;
