import React, { useState } from "react";
import All from "./All";
import Passbook from "./Passbook";
import EdoboCredits from "./EdoboCredits";
import "./MobWalletPassbook.css";
import credit from "../../../../assets/Icon/EdoboCreditoLogo.png";

function Walletpassbook() {
  const [activeTab, setActiveTab] = useState("ALL");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
      <div className="fs-6">ED Wallet Passbook</div>
      <div className="container-fluid border-bottom"></div>

      <div className="container-fluid py-2">
        {/* Mobile navigation tabs */}
        <div className="nav nav-tabs nav-underline justify-content-around ">
          {/* Tab 1: ALL */}
          <div className="nav-item" onClick={() => handleTabClick("ALL")}>
            <div
              className={`nav-link text-secondary  ${
                activeTab === "ALL" ? " active px-3" : ""
              }`}
            >
              ALL
            </div>
          </div>

          {/* Tab 2: WALLET PASSBOOK */}
          <div className="nav-item" onClick={() => handleTabClick("PASSBOOK")}>
            <div
              className={`nav-link text-secondary ${
                activeTab === "PASSBOOK" ? "active px-3" : ""
              }`}
            >
              WALLET PASSBOOK
            </div>
          </div>

          {/* Tab 2: CREDIT */}
          <div className="nav-item" onClick={() => handleTabClick("CREDIT")}>
            <div
              className={`nav-link text-secondary ${
                activeTab === "CREDIT" ? "active px-3" : ""
              }`}
            >
              <img src={credit} alt="edobo credit" width={80} />
            </div>
          </div>
        </div>

        {/* Tab content */}
        <div>
          {activeTab === "ALL" && <All />}
          {activeTab === "PASSBOOK" && <Passbook />}
          {activeTab === "CREDIT" && <EdoboCredits />}
        </div>
      </div>
    </>
  );
}

export default Walletpassbook;
