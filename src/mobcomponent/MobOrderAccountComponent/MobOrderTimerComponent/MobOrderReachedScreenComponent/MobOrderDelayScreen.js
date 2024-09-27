import React, { useState } from "react";
import "./Moborderscreen.css";
import logo from "../../../../assets/Icon/delay.png";
import contact from "../../../../assets/Icon/contact.png";
import app from "../../../../assets/Icon/app.png";
import earn from "../../../../assets/Icon/earn.png";
import discount from "../../../../assets/Icon/discount.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import "./Moborderscreen.css";
import MobHeaderComponent from "../../../MobHeaderComponent";

function MobOrderDelayScreen() {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);

  console.log("rating", rating);

  return (
    <>
      {/* <MobHeaderComponent
        isBack={true}
        headerText={"Order Timer"}
        isCartShow={false}
      /> */}

      <div className="p-5">
        <div className="mob-order-background-screen">
          <div className="text-center mt-5">
            <div className="text-center text-warning fs-1 my-2">Hey!</div>
            <div className="text-center text-white fs-6 my-1">
              Your order reached in 29 mins
            </div>
            <img src={logo} alt="delay logo" width={40} className="mb-3" />

            {/* <img
              src={discount}
              alt="discount logo"
              width={40}
              className="mb-3"
            /> */}

            {/* Discount code  */}

            {/* <div className="mb-2">
              <div className="card mob-order-delay-card-discount rounded-0 ">
                <div className="fs-6 my-2">10% OFF on your next order</div>
                <div className="container text-start">
                  <div className="fs-13 my-2">
                    As we have delayed your order by 10 mins, you are getting
                    this offer for next order.
                  </div>
                  <div className="fs-12">Use Coupon code:</div>
                  <div className="fs-12  mb-2"> 10MINSDELAY</div>
                </div>
              </div>
            </div> */}
          </div>

          {/* Connect and Earn */}

          <div className="text-start my-1">
            <div className="p-4 card bg-warning rounded-0 ">
              <div className="fs-5 fw-bold">Connect & Earn</div>
              <div className="my-1 fs-12 fw-bolder ">
                Earn `50 edobo credito each time your contacts purchase{" "}
              </div>
              <div className="row text-center">
                <div className="col-4">
                  <img src={contact} alt="contact" width={70} />
                  <div className="fs-12 fw-bolder ">Sync your Contacts</div>
                </div>
                <div className="col-4">
                  <img src={app} alt="downloafd the app" width={70} />
                  <div className="fs-12 fw-bolder ">Friends download app</div>
                </div>
                <div className="col-4">
                  <img src={earn} alt="Eran money" width={70} />
                  <div className="fs-12 fw-bolder ">They buy, you earn</div>
                </div>
              </div>

              <div className="text-center">
                <div className="my-2 fs-6">KNOW MORE ABOUT HOW THIS</div>
                <button
                  type="button"
                  class="btn btn-light w-75 rounded-5 text-danger"
                >
                  SYNC CONTACTS
                </button>
              </div>
            </div>
          </div>

          <div className="container my-3 mob-order-delay-star-main-div">
            <div className="d-flex justify-content-between">
              <div className="fs-13 mt-2">Rate your ordering experience</div>
              <div className="fs-13 mt-2">Skips</div>
            </div>
            <div className="mob-order-delay-stardiv">
              {[...Array(5)].map((_, i) => {
                const ratingValue = i + 1;
                return (
                  <label key={i}>
                    <input
                      type="radio"
                      name="rating"
                      className="mob-order-delay-input"
                      value={ratingValue}
                      onClick={() => setRating(ratingValue)}
                    />
                    <FontAwesomeIcon
                      icon={faStar}
                      className="mob-order-delay-star"
                      size="1x"
                      color={
                        ratingValue <= (hover || rating) ? "#000000" : "#e4e5e9"
                      } // Red on click
                      onMouseEnter={() => setHover(ratingValue)}
                      onMouseLeave={() => setHover(null)}
                      onClick={() => setRating(ratingValue)}
                    />
                  </label>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MobOrderDelayScreen;
