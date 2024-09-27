import React, { useState } from "react";
import MobHeaderComponent from "../MobHeaderComponent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faChevronRight,
  faDotCircle,
  faEnvelopesBulk,
  faShareNodes,
  faShoppingBag,
} from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import "./MobOrderConfirmComponent.css";
import MobOrderCofirmProgressComponent from "./MobOrderCofirmProgressComponent";
// import MobOrderCofirmProgressComponent from "./MobOrderCofirmProgressComponent";

const ordersData = [
  {
    id: 1,
    text1: " Missed something?",
    text2:
      "Add new products to cart and combine them with this order on checkout",
    icon: faShoppingBag,
  },
  {
    id: 2,
    text1: " Special Offer just for you",
    text2: "Introducing attractive offers by our partners",
    icon: faEnvelopesBulk,
  },
  {
    id: 3,
    text1: " Special Offers for new customer",
    text2: "Introducing special offers for new customers",
    icon: faCartShopping,
  },
];

const MobOrderConfirmComponent = () => {
  return (
    <>
      <MobHeaderComponent
        isBack={true}
        headerText={"Order Confirm"}
        isCartShow={false}
        isEdoboLogo={true}
      />
      <div className="container-fluid">
        <div className="mt-1">
          <div className=" d-flex justify-content-center fs-5  text-danger">
            Thank you for ordering.
          </div>
          <div className="d-flex justify-content-center  text-success mb-1">
            You Saved ₹500
          </div>
        </div>

        <div className="mob-order-confirm-share">
          <div>Tell your friends about your savings</div>
          <div className="">
            <FontAwesomeIcon
              icon={faShareNodes}
              className="faicons-size cursor-pointer"
            />
            <FontAwesomeIcon
              icon={faWhatsapp}
              className="faicons-size text-success ps-2 cursor-pointer"
            />
          </div>
        </div>

        <div className="">
          {ordersData.map((order) => (
            <div
              key={order.id}
              className="d-flex mob-order-confirm-border-bottom justify-content-between p-3"
            >
              <div className="d-flex gap-2">
                <div className=" mob-order-confirm-missed-order ">
                  <FontAwesomeIcon icon={order.icon} className="faicons-size" />
                </div>
                <div className="  cursor-pointer">
                  <div>Missed something?</div>
                  <div>
                    Add new products to cart and combine them with this order on
                    checkout
                  </div>
                </div>
              </div>
              <div className="   mob-order-confirm-missed-order">
                <FontAwesomeIcon
                  icon={faChevronRight}
                  className="faicons-size"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-3 container-lg">
          <div className={`card p-2`}>
            <div className="d-flex justify-content-between">
              <div>
                <div>Schedule Delivery Date & Time</div>
                <div>Sun, 22 Dec, 5:00 pm - 7:00 pm</div>
                <div>Chembur camp, Chembur, Mumbai</div>
              </div>

              <div className="d-flex gap-1 cursor-pointer">
                <div className="text-warning">Order summary</div>
                <FontAwesomeIcon
                  icon={faChevronRight}
                  className="faicons-size"
                />
              </div>
            </div>
            <div
              className="d-inline-flex gap-1  fs-6 text-warning"
              data-bs-toggle="collapse"
              href="#trackorderCollapse"
              role="button"
              aria-expanded="false"
              aria-controls="trackorderCollapse"
            >
              Track Order
            </div>

            <div className="collapse" id="trackorderCollapse">
              <MobOrderCofirmProgressComponent />
            </div>
          </div>
        </div>

        <div className="mt-3  d-flex justify-content-center gap-3">
          <div className="mob-order-confirm-review-us"> REVIEW US !</div>
          <div className="mob-order-confirm-countinue-shopping">
            COUNTINUE SHOPPING US !
          </div>
        </div>
      </div>
    </>
  );
};

export default MobOrderConfirmComponent;
