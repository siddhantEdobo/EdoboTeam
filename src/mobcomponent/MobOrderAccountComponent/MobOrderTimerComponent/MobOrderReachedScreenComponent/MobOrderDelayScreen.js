import React, { useState } from "react";
import "./Moborderscreen.css";
import logo from "../../../../assets/Icon/delay.png";
import contact from "../../../../assets/Icon/contact.png";
import app from "../../../../assets/Icon/app.png";
import earn from "../../../../assets/Icon/earn.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import "./Moborderscreen.css";
import MobHeaderComponent from "../../../MobHeaderComponent";
import { useLocation } from "react-router-dom";

function MobOrderDelayScreen() {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);

  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);
  const arriveStatus = queryParams.get('arriveStatus');

  console.log("arrive status", arriveStatus);

  return (
    <>
      <div className="">
        <div className="mob-order-background-screen">
          <div className="order-text-container">
            <div className="order-text-hey">{arriveStatus == 'On-time' ? 'Hey!': 'Opps!' }</div>
            <div className="order-reached-text">
              { arriveStatus == 'On-time'  ? 'Your order reached in 29 mins'  : 'Your order reached in 10 mins delayed' }

            </div>
            <img src={logo} alt="delay logo" width={40} className="mb-5 mt-5" />
          </div>

          {/* Connect and Earn */}
          <div className="text-start my-1">
            <div
              style={{ height: '350px', backgroundColor: '#FCC550', justifyContent: 'center' }}
              className="p-4 card bg-warning rounded-0"
            >
              <div className="fs-5 fw-bold">Connect & Earn</div>
              <div className="my-1 fs-12 fw-bolder">
                Earn `50 edobo credito each time your contacts purchase{" "}
              </div>
              <div className="row text-center">
                <div className="col-4">
                  <img src={contact} alt="contact" width={70} />
                  <div className="fs-12 fw-bolder">Sync your Contacts</div>
                </div>
                <div className="col-4">
                  <img src={app} alt="download the app" width={70} />
                  <div className="fs-12 fw-bolder">Friends download app</div>
                </div>
                <div className="col-4">
                  <img src={earn} alt="Earn money" width={70} />
                  <div className="fs-12 fw-bolder">They buy, you earn</div>
                </div>
              </div>

              <div className="text-center">
                <div className="my-2 fs-6">KNOW MORE ABOUT HOW THIS</div>
                <button type="button" className="btn btn-light w-75 rounded-5 text-danger">
                  SYNC CONTACTS
                </button>
              </div>
            </div>
          </div>

          {/* Star Rating */}
          <div className="container mt-5 mob-order-delay-star-main-div">
            <div className="d-flex justify-content-between">
              <div className="fs-13 mt-2">Rate your ordering experience</div>
              <div className="fs-13 mt-2">Skip</div>
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
                      color={ratingValue <= (hover || rating) ? "#FF0101" : "#e4e5e9"}
                      onMouseEnter={() => setHover(ratingValue)}
                      onMouseLeave={() => setHover(null)}
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
