import React, { useEffect, useState } from "react";
import "./OfferCouponComponent.css";

import CustomSelection from "../../common/CustomSelection";
import FlipCardComponent from "../../common/FlipCardComponent";
import DiscountCouponComponent from "../HomeComponent/DiscountCouponComponent";
import { Images } from "../../assets/index";
import axios from "axios";

const OfferCouponComponent = () => {


  const offerFlipCardsData = [
    {
      id: 1,
      frontContent: "Subscribe your daily needs",
      backContent: "Subscribe your daily needs",
      frontColor: "#FECD04",
      backColor: "#FECD04",
      image: Images.offerShopping,
    },
    {
      id: 2,
      frontContent: "Subscribe your daily needs",
      backContent: "Subscribe your daily needs",
      frontColor: "#D41A25",
      backColor: "#D41A25",
      image: Images.offerCart,
    },
    {
      id: 3,
      frontContent: "Subscribe your daily needs",
      backContent: "Subscribe your daily needs",
      frontColor: "#007688",
      backColor: "#007688",
      image: Images.offerAnnouce,
    },
    {
      id: 4,
      frontContent: "Subscribe your daily needs",
      backContent: "Subscribe your daily needs",
      frontColor: "#F79231",
      backColor: "#F79231",
      image: Images.offerNote,
    },
  ];

  const offerCouponFlipCardData = [
    {
      id: 1,
      frontContent: "Subscribe your daily needs",
      backContent: "Subscribe your daily needs",
      frontColor: "#FECD04",
      backColor: "#FECD04",
      defaultColor: "#fff",
      image: Images.offerShopping,
      activeOffer: "17% off",
    },
    {
      id: 2,
      frontContent: "Subscribe your daily needs",
      backContent: "Subscribe your daily needs",
      frontColor: "#D41A25",
      backColor: "#D41A25",
      defaultColor: "#fff",
      image: Images.offerShopping,
      activeOffer: "17% off",
    },
    {
      id: 3,
      frontContent: "Subscribe your daily needs",
      backContent: "Subscribe your daily needs",
      frontColor: "#007688",
      backColor: "#007688",
      defaultColor: "#fff",
      image: Images.offerShopping,
      activeOffer: "17% off",
    },
    {
      id: 4,
      frontContent: "Subscribe your daily needs",
      backContent: "Subscribe your daily needs",
      frontColor: "#F79231",
      backColor: "#F79231",
      defaultColor: "#fff",
      image: Images.offerShopping,
      activeOffer: "17% off",
    },
  ];

  return (
    <>
      <div className="container mt-5 mb-3">
        <div className="d-flex justify-content-between">
          <div className="fw-bold fs-14 text-danger">Offers & Coupons</div>
          {/* <div className="fw-bold fs-14 text-danger">
            <CustomSelection />
          </div> */}
        </div>
      </div>

      <div className="container">
        <div className="row">
          {offerFlipCardsData.map((card, index) => (
            <div key={card.id} className="col-md-6 col-lg-3 col-sm-6 ">
              <FlipCardComponent
                frontColor={card?.frontColor}
                backColor={card?.backColor}
                frontContent={
                  <div>
                    <div className="row">
                      <div className="col-6 offer-coupon-component-card-text ">
                        {card.frontContent}
                      </div>
                      <div className="col-6">
                        <div className=" d-flex justify-content-end align-items-center  ">
                          <img
                            className="offer-coupon-component-card-img ps-4 "
                            src={card?.image}
                            alt="shopping"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                }
                backContent={
                  <div>
                    <div className="row">
                      <div className="col-6 offer-coupon-component-card-text">
                        <div></div>
                        {card.backContent}
                      </div>
                      <div className="col-6">
                        <div className=" d-flex justify-content-end align-items-center ">
                          <img
                            className="offer-coupon-component-card-img ps-4"
                            src={card?.image}
                            alt="shopping"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                }
              />
            </div>
          ))}
        </div>
      </div>
      <div className="p-0 m-0 mt-0 pt-0">
        <DiscountCouponComponent />
      </div>
      {/* <div className="container mt-5 mb-3">
        <div className="d-flex justify-content-between">
          <div className="fw-bold fs-14 text-danger">Coupons</div>
       
        </div>
      </div> */}
      <div className="container mb-5 mt-0 p-0">
        <div className="row">
          {offerCouponFlipCardData.map((card, index) => (
            <div key={card.id} className="col-md-3 col-lg-3 col-sm-6 ">
              <FlipCardComponent
                frontColor={card?.frontColor}
                backColor={card?.backColor}
                frontContent={
                  <div>
                    <div className="row">
                      <div className="col-6  offer-coupon-component-card-front-text">
                        {card.frontContent}
                      </div>
                      <div
                        className="col-6 "
                        style={{
                          backgroundColor: card?.defaultColor,
                          border: `1px solid ${card?.frontColor}`,
                          borderTopRightRadius: `10px`,
                          borderBottomRightRadius: `10px`,
                          padding: 0,
                        }}
                      >
                        <div className=" d-flex justify-content-end align-items-center ">
                          <img
                            className="offer-coupon-component-card-img ps-4"
                            src={card?.image}
                            alt="shopping"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                }
                backContent={
                  <div>
                    <div className="row">
                      <div className="col-6 offer-coupon-component-card-text">
                        <div className="offer-coupon-component-card-active-offer ">
                          {card.activeOffer}
                        </div>
                        <div className="">{card.backContent}</div>
                      </div>
                      <div
                        className="col-6"
                        style={{
                          backgroundColor: card?.frontColor,
                          border: `1px solid ${card?.frontColor}`,
                          borderTopRightRadius: `10px`,
                          borderBottomRightRadius: `10px`,
                          borderTopLeftRadius: `60px`,

                          padding: 0,
                        }}
                      >
                        <div className=" d-flex justify-content-end align-items-center ">
                          <img
                            className="offer-coupon-component-card-img ps-4"
                            style={{ borderTopLeftRadius: "20px" }}
                            src={card?.image}
                            alt="shopping"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                }
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default OfferCouponComponent;
