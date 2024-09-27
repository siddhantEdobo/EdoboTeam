import React from "react";
import coin from "../../../assets/Icon/coins.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
import MobHeaderComponent from "../../MobHeaderComponent";
import Walletpassbook from "./MobWalletPassbookComponent";
import MobBottomNavComponent from "../../MobBottomNavComponent";
import "./MobWalletComponent.css";

function MobWalletComponent() {
  return (
    <>
      <MobHeaderComponent
        isBack={true}
        headerText={"My Wallet"}
        isCartShow={false}
        isEdoboLogo={true}
      />
      <div className="container py-2">
        <div className="card shadow-sm ">
          <div className="d-flex justify-content-between p-3">
            <div className="">
              <div className="fs-13">Wallet Balance</div>
              <div className="fs-5 fw-bold text-center ">₹ 100</div>
            </div>
            <div className="">
              <div className="fs-13 text-center">edobo credito</div>
              <div className="d-flex fw-bold text-center">
                <div className="">
                  <img src={coin} alt="coin" width={35} />
                </div>
                <div className="">
                  ₹ 100{" "}
                  <FontAwesomeIcon
                    icon={faCircleExclamation}
                    className="fs-6"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="py-3">
          <div className="card shadow-sm p-2">
            <div className="mb-2 border-bottom">
              <div> Add Money </div>
              <div className="text-danger mb-1">
                We suggest an average balance of 2000
              </div>
            </div>
            <div className="card shadow-sm p-3">
              <div className="d-flex justify-content-between">
                <div className="fs-5">₹ 100</div>
                <div className="">
                  <input
                    type="text"
                    placeholder="Coupon Code"
                    maxLength={6}
                    className="form-control"
                  />
                  <div className="text-danger">Apply Coupon Code</div>
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-center my-3">
              <div className="mob-wallet-commponent-copoun-btn-container">
                ₹ 1000
              </div>
              <div className="mob-wallet-commponent-copoun-btn-container ">
                ₹ 2000
              </div>
              <div className="mob-wallet-commponent-copoun-btn-container ">
                ₹ 3000
              </div>
              <div className="mob-wallet-commponent-copoun-btn-container ">
                ₹ 4000
              </div>
            </div>
            <div className="d-flex justify-content-center ">
              <div className="btn btn-danger text-white rounded-3 w-50">
                ADD Money
              </div>
            </div>
          </div>
        </div>
      </div>
      <Walletpassbook />
      <MobBottomNavComponent />
    </>
  );
}

export default MobWalletComponent;
