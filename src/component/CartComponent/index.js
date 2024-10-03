import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import "./CartComponent.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import AddToCartButton from "../../common/AddToCartButton";
import coin from "../../assets/Icon/coins.png";
import "react-datepicker/dist/react-datepicker.css";
import ROUTES_NAVIGATION from "../../routes/routes";
import { useNavigate } from "react-router-dom";
import CartBillingComponent from "./CartBillingComponent";
import leaveWithGuard from "../../assets/Icon/leaveWithGuard.png";
import leaveWithDoor from "../../assets/Icon/leaveWithHome.png";
import avoidcall from "../../assets/Icon/avoidCall.png";
import dogs from "../../assets/Icon/bewareOfDog.png";
import couponBanner from "../../assets/Icon/couponBanner.png";
import sticker1 from "../../assets/sticker1.png";
import sticker2 from "../../assets/sticker2.png";
import slotDelivery from "../../assets/Icon/slotDeliver2.png";
import express from "../../assets/Icon/Express2.png";
import pickUp from "../../assets/Icon/PickUp2.png";
import Summary from "./Summary";
import { useSelector, useDispatch } from "react-redux";
import {
  setDeliveryInstructions,
  setTip,
  applyCoupon,
  addToCart,
  incrementQuantity,
  decrementQuantity,
} from "../../redux/Slices/Cart/cartSlice";

const NEWOFFERS = [
  {
    id: 1,
    name: "Madhur 1Kg",
    imageSrc:
      "https://cdn1.storehippo.com/s/60a39f1801d30d79c4caa94b/64f84698d171af6a6696032d/5-1--320x320.jpg",
    price: 9,
    originalPrice: 67,
    quantity: "1 kg",
  },
];

const instruction = [
  {
    instructionIcons: leaveWithGuard,
    title: "Leave with guard",
  },
  {
    instructionIcons: leaveWithDoor,
    title: "Leave with door",
  },
  {
    instructionIcons: avoidcall,
    title: "Avoid calls",
  },
  {
    instructionIcons: dogs,
    title: "Beware of pets",
  },
];

const datesData = [
  { id: 1, text: "Today", date: new Date(), day: "MON" },
  {
    id: 2,
    text: "Tomorrow",
    date: new Date(new Date().getTime() + 24 * 60 * 60 * 1000),
    day: "TUE",
  },
  {
    id: 3,
    text: "",
    date: new Date(new Date().getTime() + 2 * 24 * 60 * 60 * 1000),
    day: "WED",
  },
];

const timeSlots = ["8:00AM-12:00PM", "12:00PM-4:00PM", "4:00PM-8:00PM"];

const CartComponent = () => {
  const [checkout, setCheckout] = useState(false);
  const [slotMenu, setSlotMenu] = useState(false);
  const [changeSlot, setChangeSlot] = useState(false);
  const [selectDate, setSelectDate] = useState(null);
  const [selectTime, setSelectTime] = useState(null);
  const [slotInfo, setSlotInfo] = useState(null);
  const [selectedOption, setSelectedOption] = useState(null);
  const [couponList, setCouponList] = useState(false);

  const dispatch = useDispatch();
  const { cartItems, deliveryInstructions, tip, coupon, totalPrice } =
    useSelector((store) => store.myCart);

  const navigate = useNavigate();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  const handleIncrement = (itemId) => {
    dispatch(incrementQuantity({ id: itemId }));
  };

  const handleDecrement = (itemId) => {
    dispatch(decrementQuantity({ id: itemId }));
  };

  const handleAddInstruction = (data) => {
    dispatch(setDeliveryInstructions(data));
  };

  const handleTipChange = (newTipValue) => {
    dispatch(setTip(newTipValue));
  };

  const handleCOD = () => {
    alert(`Thanks for shopping with us! Your Delivery type: ${selectedOption}`);
    console.log(selectedOption);
    navigate(ROUTES_NAVIGATION.HOME);
  };

  const handleSlotInfo = () => {
    const data = {
      slotDate: selectDate,
      slotTime: selectTime,
    };
    setSlotInfo(data);
    setSelectDate(null);
    setSelectTime(null);

    setChangeSlot(false);
  };

  const CouponCodes = [
    { code: "EDBO10", discount: 10 },
    { code: "EDBO20", discount: 20 },
    { code: "EDBO30", discount: 30 },
    { code: "EDBO40", discount: 40 },
  ];

  const handleApplyCoupon = (coupon) => {
    dispatch(applyCoupon(coupon));
  };

  const handleProceedCheckOut = () => {
    setCheckout(true);
    setSlotMenu(true);
  };

  return (
    <div className="cart-container">
      <div className="item-container">
        {slotMenu ? (
          <div>
            <span className="items-count-text">Select Delivery Type</span>

            {/* Slot Delivery Section */}
            <div className="delivery-container">
              <div className="time-bar">
                <span>
                  Pick your date and time according to your convenience
                </span>
              </div>
              <div className="select-delivery-container">
                <div className="delivery-row">
                  <input
                    type="checkbox"
                    className="delivery-checkbox"
                    checked={selectedOption === "Slot Delivery"}
                    onChange={() => setSelectedOption("Slot Delivery")}
                  />
                  <img
                    src={slotDelivery}
                    className="delivery-img"
                    alt="Slot Delivery"
                  />
                  <div className="delivery-info">
                    <span className="delivery-name">Slot Delivery</span>
                    <span className="delivery-time">
                      {slotInfo ? slotInfo.slotDate : "No date selected"},
                      Between{" "}
                      {slotInfo ? slotInfo.slotTime : "No time selected"}
                    </span>
                  </div>
                </div>

                <div className="changeTime-button">
                  <button onClick={() => setChangeSlot(true)}>
                    Change date and time{" "}
                    <FontAwesomeIcon icon={faChevronRight} />
                  </button>
                </div>
              </div>

              {changeSlot && (
                <div className="dataSlot-container">
                  <span>Choose Date</span>
                  <div className="date-slots">
                    {datesData.map((items) => (
                      <div
                        onClick={() => setSelectDate(items.date.getDate())}
                        key={items.id}
                        className={`date-card-${
                          selectDate === items.date.getDate()
                            ? "selected"
                            : "un"
                        }`}
                      >
                        <div className="date-text-container">
                          <span style={{ fontSize: "8px" }}>{items.text}</span>
                        </div>
                        <span>{items.day}</span>
                        <span className="date-value">
                          {items.date.getDate()}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {selectDate && (
                <div className="dataSlot-container">
                  <span>Choose Time</span>
                  <div className="time-slots">
                    {timeSlots.map((time, index) => (
                      <div
                        key={index}
                        onClick={() => setSelectTime(time)}
                        className={`time-card-${
                          selectTime === time ? "selected" : "un"
                        }`}
                      >
                        {time}
                      </div>
                    ))}
                    {selectTime && (
                      <button
                        onClick={handleSlotInfo}
                        className="change-button"
                      >
                        Confirm Slot
                      </button>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Express Delivery Section */}
            <div className="delivery-container">
              <div className="time-bar">
                <span>
                  Prefer express delivery for delivery within 15-20 minutes
                </span>
              </div>
              <div className="select-delivery-container">
                <div className="delivery-row">
                  <input
                    type="checkbox"
                    className="delivery-checkbox"
                    checked={selectedOption === "Express Delivery"}
                    onChange={() => setSelectedOption("Express Delivery")}
                  />
                  <img
                    src={express}
                    className="delivery-img"
                    alt="Express Delivery"
                  />
                  <div className="delivery-info">
                    <span className="delivery-name">Express Delivery</span>
                    <span className="delivery-time">
                      *Additional charges may apply
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Pick-Up Delivery Section */}
            <div className="delivery-container">
              <div className="time-bar">
                <span>
                  Pick up your order through our drive-through stores near you
                </span>
              </div>
              <div className="select-delivery-container">
                <div className="delivery-row">
                  <input
                    type="checkbox"
                    className="delivery-checkbox"
                    checked={selectedOption === "Pick-Up"}
                    onChange={() => setSelectedOption("Pick-Up")}
                  />
                  <img
                    src={pickUp}
                    className="delivery-img"
                    alt="Pick-Up Delivery"
                  />
                  <div className="delivery-info">
                    <span className="delivery-name">Pick-Up</span>
                    <span className="delivery-time">
                      Address of the store near the user appears here
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div>
            <span className="items-count-text">
              {cartItems.length} items added
            </span>
            <div className="item-box-container">
              <div className="box-container-title">
                <input type="checkbox" className="delivery-checkbox" />
                <span>Product in cart</span>
                <span style={{ color: "#A5A5A5", fontSize: "10px" }}>
                  ({cartItems.length})
                </span>
              </div>
              <div className="offer-container">
                <div className="claimed-offer-container">
                  <div>
                    <span>Avail combo offer</span>
                  </div>
                  <button>+ Claim offer</button>
                </div>

                {cartItems.map((items) => (
                  <div className="offer-card" key={items.id}>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                      }}
                    >
                      <input type="checkbox" className="delivery-checkbox" />
                      <img
                        src={items.imageSrc}
                        width={"60px"}
                        alt={items.title}
                      />
                      <div style={{ display: "flex", flexDirection: "column" }}>
                        <span className="offer-item-title">{items.title}</span>
                        <span className="offer-item-price">
                          ₹{items.price.toFixed(2)}
                        </span>
                        <span className="offer-item-mrp">
                          ₹{items.mrp.toFixed(2)}
                        </span>
                      </div>
                    </div>
                    <div className="offer-item-button-container">
                      <AddToCartButton
                        id={items.id}
                        product={{
                          id: items.id,
                          title: items.title,
                          price: items.price,
                          imageSrc: items.imageSrc,
                        }}
                        onAddToCart={handleAddToCart}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="item-box-container">
              <div className="box-container-title">
                <span>Unlock new offer</span>
              </div>
              <div className="claimed-offer-container">
                <div>
                  <span>Avail offers</span>
                </div>
                <button>+ Claim offer</button>
              </div>

              {NEWOFFERS.map((items) => (
                <div className="offer-card" key={items.id}>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <input type="checkbox" className="delivery-checkbox" />
                    <img src={items.imageSrc} width={"60px"} alt={items.name} />
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      <span className="offer-item-title">{items.name}</span>
                      <span className="offer-item-price">
                        ₹{items.price.toFixed(2)}
                      </span>
                      <span className="offer-item-mrp">
                        ₹{items.originalPrice.toFixed(2)}
                      </span>
                    </div>
                  </div>
                  <div className="offer-item-button-container">
                    <button className="add-button">Add</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {checkout ? (
        <div className="checkout-container">
          <Summary method={handleCOD} />
        </div>
      ) : (
        <div className="checkout-container">
          {/* Delivery Instructions */}
          <div className="delivery-instruction-container">
            <span className="items-count-text">
              Select delivery Instructions
            </span>
            <div className="delivery-instruction">
              {instruction.map((items) => (
                <div
                  className={`des-instruction-card ${
                    deliveryInstructions.includes(items) ? "selected" : ""
                  }`}
                  onClick={() => handleAddInstruction(items)}
                  key={items.title}
                >
                  <img src={items.instructionIcons} alt={items.title} />
                  <h3>{items.title}</h3>
                </div>
              ))}
            </div>
          </div>
          {/* Tip Selection */}
          <div className="add-tip-container">
            <div>
              <img src={coin} width={"20px"} alt="Coin" />
              <span>Tip your delivery partner</span>
            </div>

            <div className="button-container">
              <button
                onClick={() => handleTipChange(Math.max(0, tip - 10))}
                className="add-minus-button"
              >
                <span>-</span>
              </button>
              <span>₹{tip.toFixed(2)}</span>
              <button
                onClick={() => handleTipChange(tip + 10)}
                className="add-minus-button"
              >
                <span>+</span>
              </button>
            </div>
          </div>
          {/* Coupon Codes */}
          {couponList ? (
            <div className="coupons-container">
              {CouponCodes.map((items) => (
                <div className="coupon-code-container" key={items.code}>
                  <div className="coupon-code-text-area">
                    <span className="coupon-code">{items.code}</span>
                    <span className="offer-desc">
                      <b>{items.discount}% </b>on this order
                    </span>
                  </div>
                  <button onClick={() => handleApplyCoupon(items)}>
                    Apply
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <div className="coupons-container">
              <div className="coupon-container">
                {coupon != null ? (
                  <div className="applied-coupon-code-container">
                    <div className="coupon-code-text-area">
                      <span className="coupon-code">{coupon.code}</span>
                      <span className="offer-desc">
                        <b>{coupon.discount}% </b>on this order
                      </span>
                    </div>
                    <button onClick={() => setCouponList(true)}>Change</button>
                  </div>
                ) : (
                  <img
                    onClick={() => setCouponList(true)}
                    src={couponBanner}
                    width={"90%"}
                    alt="Coupon Banner"
                  />
                )}
              </div>
              <div className="billing-container">
                <CartBillingComponent
                  totalPrice={totalPrice}
                  tip={tip}
                  coupon={coupon}
                />
              </div>
            </div>
          )}

          <div className="checkout-button-container">
            <img
              src={sticker1}
              className="saving-banner-sticker1"
              width={"35px"}
              alt="Sticker 1"
            />
            <img
              src={sticker2}
              className="saving-banner-sticker2"
              width={"80px"}
              alt="Sticker 2"
            />
            <div className="saving-banner">
              <span>You're saving ₹234 on this order</span>
            </div>
            <button onClick={handleProceedCheckOut} className="checkout-button">
              Proceed to checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartComponent;
