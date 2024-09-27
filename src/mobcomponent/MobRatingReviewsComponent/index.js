import React, { useState } from "react";
import MobHeaderComponent from "../MobHeaderComponent";
import MobToBeReviwedComponent from "./MobToBeReviwedComponent";
import MobReviewedComponent from "./MobReviewedComponent";
import MobBottomNavComponent from "../MobBottomNavComponent";

const MobRatingReviewsComponent = () => {
  const [activeTab, setActiveTab] = useState("TO_BE_REVIEWED");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  return (
    <>
      <MobHeaderComponent
        isBack={true}
        headerText={"My Rating & Reviews"}
        isCartShow={false}
        isEdoboLogo={true}
      />
      <div>
        <div className="container">
          {/* Mobile navigation tabs */}
          <div className="nav nav-tabs nav-underline justify-content-around ">
            {/* Tab 1: RATING */}
            <div
              className="nav-item"
              onClick={() => handleTabClick("TO_BE_REVIEWED")}
            >
              <div
                className={`nav-link text-secondary ${
                  activeTab === "TO_BE_REVIEWED" ? " active  text-danger" : ""
                }`}
              >
                TO BE REVIEWED
              </div>
            </div>

            {/* Tab 2: REVIEW */}
            <div
              className="nav-item"
              onClick={() => handleTabClick("REVIEWED")}
            >
              <div
                className={`nav-link text-secondary ${
                  activeTab === "REVIEWED" ? "active text-danger" : ""
                }`}
              >
                REVIEWED
              </div>
            </div>
          </div>

          {/* Tab content */}
          <div>
            {activeTab === "TO_BE_REVIEWED" && <MobToBeReviwedComponent />}
            {activeTab === "REVIEWED" && <MobReviewedComponent />}
          </div>
        </div>
      </div>
      <MobBottomNavComponent />
    </>
  );
};

export default MobRatingReviewsComponent;
