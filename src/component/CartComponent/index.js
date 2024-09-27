import {
  faBagShopping,
  faBottleWater,
  faBus,
  faCalendarDays,
  faCar,
  faCat,
  faChevronRight,
  faCirclePlus,
  faClock,
  faDoorClosed,
  faPhoneSlash,
  faTags,
  faTrash,
  faUserSecret,
  faWallet,
} from "@fortawesome/free-solid-svg-icons";
import "./CartComponent.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import AddToCartButton from "../../common/AddToCartButton";
import CartUnlockCardComponent from "../../common/CartUnlockCardComponent";
import { Images } from "../../assets";
import coin from "../../assets/Icon/coins.png";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ROUTES_NAVIGATION from "../../routes/routes";
import { useNavigate } from "react-router-dom";
import MobCartBillingComponent from "../../mobcomponent/MobCartComponent/MobCartBillingComponent";
import MobProductCard from "../../common/MobProductCard";
import CartBillingComponent from "./CartBillingComponent";
import ReplceProductComponent from "../../common/ReplaceProductComponent";

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
  {
    id: 2,
    name: "Madhur 1Kg",
    imageSrc:
      "https://cdn1.storehippo.com/s/60a39f1801d30d79c4caa94b/64f84698d171af6a6696032d/5-1--320x320.jpg",
    price: 9,
    originalPrice: 67,
    quantity: "1 kg",
  },
  {
    id: 3,
    name: "Madhur 1Kg",
    imageSrc:
      "https://cdn1.storehippo.com/s/60a39f1801d30d79c4caa94b/64f84698d171af6a6696032d/5-1--320x320.jpg",
    price: 9,
    originalPrice: 67,
    quantity: "1 kg",
  },
  {
    id: 4,
    name: "Madhur 1Kg",
    imageSrc:
      "https://cdn1.storehippo.com/s/60a39f1801d30d79c4caa94b/64f84698d171af6a6696032d/5-1--320x320.jpg",
    price: 9,
    originalPrice: 67,
    quantity: "1 kg",
  },
];

const EDITIBLE = [
  {
    id: 1,
    url: "https://cdn1.storehippo.com/s/60a39f1801d30d79c4caa94b/6502ff9d3fcf6003a40dcfa4/8901808006640-320x320.png",
    title: "Green Masala Milk",
    price: "₹ 41.3",
    mrp: "₹ 51.3",
  },
  {
    id: 2,
    url: "https://cdn1.storehippo.com/s/60a39f1801d30d79c4caa94b/6502ff9d3fcf6003a40dcfa4/8901808006640-320x320.png",
    title: "Green Masala Milk",
    price: "₹ 41.3",
    mrp: "₹ 51.3",
  },
  {
    id: 3,
    url: "https://cdn1.storehippo.com/s/60a39f1801d30d79c4caa94b/6502ff9d3fcf6003a40dcfa4/8901808006640-320x320.png",
    title: "Green Masala Milk",
    price: "₹ 41.3",
    mrp: "₹ 51.3",
  },
  {
    id: 4,
    url: "https://cdn1.storehippo.com/s/60a39f1801d30d79c4caa94b/6502ff9d3fcf6003a40dcfa4/8901808006640-320x320.png",
    title: "Green Masala Milk",
    price: "₹ 41.3",
    mrp: "₹ 51.3",
  },
  {
    id: 5,
    url: "https://cdn1.storehippo.com/s/60a39f1801d30d79c4caa94b/6502ff9d3fcf6003a40dcfa4/8901808006640-320x320.png",
    title: "Green Masala Milk",
    price: "₹ 41.3",
    mrp: "₹ 51.3",
  },
  {
    id: 7,
    url: "https://cdn1.storehippo.com/s/60a39f1801d30d79c4caa94b/6502ff9d3fcf6003a40dcfa4/8901808006640-320x320.png",
    title: "Green Masala Milk",
    price: "₹ 41.3",
    mrp: "₹ 51.3",
  },
  {
    id: 8,
    url: "https://cdn1.storehippo.com/s/60a39f1801d30d79c4caa94b/6502ff9d3fcf6003a40dcfa4/8901808006640-320x320.png",
    title: "Green Masala Milk",
    price: "₹ 41.3",
    mrp: "₹ 51.3",
  },
  {
    id: 9,
    url: "https://cdn1.storehippo.com/s/60a39f1801d30d79c4caa94b/6502ff9d3fcf6003a40dcfa4/8901808006640-320x320.png",
    title: "Green Masala Milk",
    price: "₹ 41.3",
    mrp: "₹ 51.3",
  },
  {
    id: 10,
    url: "https://cdn1.storehippo.com/s/60a39f1801d30d79c4caa94b/6502ff9d3fcf6003a40dcfa4/8901808006640-320x320.png",
    title: "Green Masala Milk",
    price: "₹ 41.3",
    mrp: "₹ 51.3",
  },

  {
    id: 11,
    url: "https://cdn1.storehippo.com/s/60a39f1801d30d79c4caa94b/6502ff9d3fcf6003a40dcfa4/8901808006640-320x320.png",
    title: "Green Masala Milk",
    price: "₹ 41.3",
    mrp: "₹ 51.3",
  },
  {
    id: 12,
    url: "https://cdn1.storehippo.com/s/60a39f1801d30d79c4caa94b/6502ff9d3fcf6003a40dcfa4/8901808006640-320x320.png",
    title: "Green Masala Milk",
    price: "₹ 41.3",
    mrp: "₹ 51.3",
  },
  {
    id: 13,
    url: "https://cdn1.storehippo.com/s/60a39f1801d30d79c4caa94b/6502ff9d3fcf6003a40dcfa4/8901808006640-320x320.png",
    title: "Green Masala Milk",
    price: "₹ 41.3",
    mrp: "₹ 51.3",
  },
];

const datesData = [
  { id: 1, text: "Today", date: new Date() },
  {
    id: 2,
    text: "Tomorrow",
    date: new Date(new Date().getTime() + 24 * 60 * 60 * 1000),
  },
  {
    id: 3,
    text: "Sunday",
    date: new Date(new Date().getTime() + 2 * 24 * 60 * 60 * 1000),
  },
  // Add more dates as needed
];

const CartComponent = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [selectedCards, setSelectedCards] = useState([]);
  const [selectedTips, setSelectedTips] = useState([]);

  const navigate = useNavigate();

  const handleSlotSelection = (slot) => {
    setSelectedSlot(slot);
  };

  const toggleCardSelection = (index) => {
    const isSelected = selectedCards.includes(index);
    if (isSelected) {
      setSelectedCards(selectedCards.filter((i) => i !== index));
    } else {
      setSelectedCards([...selectedCards, index]);
    }
  };

  const tipCardSelection = (index) => {
    const selectedIndex = selectedTips.indexOf(index);
    if (selectedIndex === -1) {
      setSelectedTips([...selectedTips, index]); // Add index to selectedTips if not already selected
    } else {
      setSelectedTips(selectedTips.filter((i) => i !== index)); // Remove index from selectedTips if already selected
    }
  };

  return (
    <div className="container-lg home-container">
      <div className="d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center">
          <div className="fs-5 p-4 fw-bold">
            Your Cart <span className="fs-13">{`( 4 items )`}</span>{" "}
          </div>
          {/* <div className="fs-6 p-4">₹231 saved on this order</div> */}
        </div>
        <div className="text-danger">
          <FontAwesomeIcon icon={faCirclePlus} className="text-danger fs-5" />
          <span className="ps-1 fs-5 fw-bold ">Continue Shoping</span>
        </div>
      </div>

      <div className="">
        <div className="row">
          <div className="col-8">
            <div className="">
              <div>
                <div className="card edobo-orange rounded-4 cart-unlock-card-container">
                  <div className="card rounded-4">
                    <div className="d-flex justify-content-between ">
                      <div className="">
                        <div className="d-flex p-3 rounded-4">
                          <div className="ps-0 fs-3 d-flex align-items-center">
                            To get upto <b className="ms-2 me-2">$100</b> OFF
                          </div>
                        </div>
                      </div>
                      <div className="fs-6 d-flex align-items-center p-2">
                        {/* <AddToCartButton /> */}
                        Use Code
                        <span className="fs-6 fw-bold ps-1 pe-1">SAVER10</span>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex justify-content-center p-1 text-white gap-2">
                    <div>
                      <FontAwesomeIcon
                        // icon={faUnlock}
                        className="faicon-size"
                      />
                    </div>
                    <div className="fs-6 pb-2">
                      Add Items worth{" "}
                      <span className="fs-6 fw-bold ps-1 pe-1">$799</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="conatiner d-flex justify-content-between mt-2 mb-4 gap-3">
                <div className="card w-75 cart-delivery-type-card border-danger cursor-pointer shadow">
                  <div className="text-danger fs-12 fw-bold mb-2">
                    <FontAwesomeIcon icon={faClock} /> 15 - 30 mins
                  </div>
                  <div>
                    <img
                      src={Images.delivery}
                      alt=""
                      className="faicons-size mb-1"
                    />
                  </div>
                  <div className="text-danger fs-6 fw-bold mb-3">
                    Express Develiery
                  </div>
                  <div className="position-absolute  bottom-0 bg-danger w-100 d-flex justify-content-center text-white rounded-bottom-1 p-1">
                    *Additional Charges may apply
                  </div>
                </div>
                <div className="card w-75 cart-delivery-type-card border-danger cursor-pointer shadow">
                  <div>
                    <img
                      src={Images.calenderRed}
                      alt=""
                      className="faicons-size my-2"
                    />
                  </div>
                  {/* <FontAwesomeIcon icon={faBus} className="faicons-size" /> */}
                  <div className="text-danger fs-6 fw-bold">Slot Delivery</div>
                  {/* <div className="position-absolute  bottom-0 bg-danger w-100 d-flex justify-content-center text-white rounded-bottom-1 p-1">
                    *Additional Charges may apply
                  </div> */}
                </div>
                <div className="card w-75 cart-delivery-type-card border-danger cursor-pointer shadow">
                  <div>
                    <img
                      src={Images.delivery}
                      alt=""
                      className="faicons-size my-2"
                    />
                  </div>
                  {/* <FontAwesomeIcon icon={faBus} className="faicons-size" /> */}
                  <div className="text-danger fs-6 fw-bold ">Pickup</div>
                  {/* <div className="position-absolute  bottom-0 bg-danger w-100 d-flex justify-content-center text-white rounded-bottom-1 p-1">
                    *Additional Charges may apply
                  </div> */}
                </div>
              </div>
            </div>
          </div>
          <div className="col-4 m-0 p-1">
            <div className="mt-1 d-flex gap-2">
              <FontAwesomeIcon
                icon={faTags}
                className="faicons-size text-danger"
              />
              <div className="fw-bold fs-6 ">Unlock New Offers</div>
            </div>

            <div className=" ">
              <div className="cartcomponent-new-offer-container hide-x-scrollbars">
                {NEWOFFERS.map((item) => {
                  return (
                    <div className="mb-2" key={item.id}>
                      <CartUnlockCardComponent {...item} />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <div className="card shadow-sm edobo-white">
          {[...Array(5)].map((value, index) => {
            return (
              <div key={index} className="p-3">
                <div className="border-bottom d-flex">
                  <div className="cart-product-img-container">
                    <img
                      className="product-image"
                      src={
                        "https://cdn1.storehippo.com/s/60a39f1801d30d79c4caa94b/64f84698d171af6a6696032d/5-1--320x320.jpg"
                      }
                      alt={"productimage"}
                      // onClick={onClick}
                    />
                  </div>
                  <div className=" w-100 d-flex justify-content-between">
                    <div className="p-2 gap-2">
                      <div className="fs-6 fw-bold">Tomato Hybrid</div>
                      <div className="fs-6 fw-lighter">1Kg</div>
                      <div className="d-flex align-items-center gap-3 mt-2">
                        <div className="fs-6 fw-bold text-nowrap">₹ 87</div>
                        <div className="fs-6 text-decoration-line-through fw-medium text-nowrap text-danger">
                          ₹ 100
                        </div>
                      </div>
                      {/* <p className="">
                          With supporting text below as a natural lead-in to
                          additional content.
                        </p> */}
                    </div>
                    <div className="d-flex align-items-center justify-content-center">
                      <AddToCartButton quantity={1} />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        {/* <div className="delivery-instuction-container edobo-white p-4 mt-3 shadow-sm ">
          <div className="fw-bold fs-14">Delivery instructions</div>
          <div className="">Delivery partner will be notified</div>
          <div className="cart-delivery-instuction-container hide-scrollbar">
            {[...Array(6)].map((value, index) => {
              return (
                <div
                  key={index}
                  className="card cart-delivery-instuction-card "
                >
                  <FontAwesomeIcon
                    icon={faBottleWater}
                    className="faicons-size"
                  />
                  <div className="gap-2">
                    <div className="fs-13 fw-bold">Return Pet Bottles</div>
                    <p className="fw-medium">
                      Help us recycle plastic bottles by returning them to our
                      delivery partner
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div> */}

        {/* <div className=" mt-3 border border-danger rounded-3">
          <div className="d-flex align-items-center gap-2 mb-2 ps-2 mt-1">
            <FontAwesomeIcon icon={faWallet} className="faicons-size" />
            <div className="">Pickup and Delivery Options</div>
          </div>
          <div className="conatiner d-flex justify-content-between mb-4 gap-3 ps-2 pe-2">
            <div className="card w-75 cart-delivery-type-card shadow-sm border-danger cursor-pointer">
              <FontAwesomeIcon icon={faBus} className="faicons-size" />
              <div>Shoping</div>
              <div>Express Delivery</div>
            </div>
            <div className="card w-75 cart-delivery-type-card shadow-sm cursor-pointer">
              <FontAwesomeIcon icon={faCar} className="faicons-size" />
              <div>Shoping</div>
              <div>Slot Delivery</div>
            </div>
            <div className="card w-75 cart-delivery-type-card shadow-sm cursor-pointer">
              <FontAwesomeIcon icon={faBagShopping} className="faicons-size" />
              <div>Shoping</div>
              <div>Pickup</div>
            </div>
          </div>
        </div> */}
        <div className="fs-5 fw-bold my-3 ">Delivery 2/3</div>
        <div className="mt-2 border border-danger rounded-3">
          <div className=" row  ">
            <div className="col-8">
              <div className="fs-6 fw-bold p-2">
                How do you want your item ?
              </div>

              {/* <div className="m-2 card w-50 cart-delivery-type-card shadow-sm border-danger cursor-pointer">
                <FontAwesomeIcon
                  icon={faCalendarDays}
                  className="faicons-size text-danger"
                />
                <div className="p-2 pt-2 ">
                  <DatePicker
                    className="w-100  h-25 justify-content-center text-danger p-1"
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                  />
                </div>
              </div> */}
              <div className="d-flex justify-content-evenly ">
                <div className="ms-5 mb-3 card w-25  cart-delivery-type-card border-danger cursor-pointer shadow">
                  <img
                    src={Images.calenderRed}
                    alt=""
                    className="faicons-size my-2"
                  />
                  <div className="text-danger fs-6 fw-bold">Slot Delivery</div>
                </div>

                <div className="col ms-4 mt-2 fs-5">
                  {datesData.map((item, index) => (
                    <div key={index} className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="exampleRadios"
                        id={`exampleRadios${index + 1}`}
                        value={`option${index + 1}`}
                        // Default to the first option being checked
                      />
                      <label className="form-check-label fw-bold">
                        {item.text}
                        <br />
                        <span className="fs-13">
                          {item.date.toLocaleDateString()}
                        </span>
                      </label>
                    </div>
                  ))}
                </div>

                {/* <div className="col ms-4 mt-2 fs-5">
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="exampleRadios"
                      id="exampleRadios1"
                      value="option1"
                      checked
                    />
                    <label
                      class="form-check-label fw-bold "
                      for="exampleRadios1"
                    >
                      Today
                    </label>
                  </div>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="exampleRadios"
                      id="exampleRadios2"
                      value="option2"
                      checked
                    />
                    <label
                      class="form-check-label fw-bold "
                      for="exampleRadios2"
                    >
                      Tommorrow
                    </label>
                  </div>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="exampleRadios"
                      id="exampleRadios3"
                      value="option3"
                      checked
                    />
                    <label
                      class="form-check-label fw-bold "
                      for="exampleRadios3"
                    >
                      Sunday
                    </label>
                  </div>
                </div> */}
              </div>
            </div>

            <div className="col-4">
              <div className=" mt-3 fw-bold fs-6">AVAILABLE SLOT</div>
              <div className="mt-3 me-2 fs-6 mt-4">
                <div
                  className={`${
                    selectedSlot === "7-10"
                      ? "mob-cart-component-selected-slot"
                      : "mob-cart-component-normal-slot"
                  }`}
                  onClick={() => handleSlotSelection("7-10")}
                >
                  7:00 AM - 10:00 AM
                </div>
                <div
                  className={`${
                    selectedSlot === "10-1"
                      ? "mob-cart-component-selected-slot"
                      : "mob-cart-component-normal-slot"
                  } mt-2`}
                  onClick={() => handleSlotSelection("10-1")}
                >
                  10:00 AM - 01:00 PM
                </div>

                <div
                  className={`${
                    selectedSlot === "1-3"
                      ? "mob-cart-component-selected-slot"
                      : "mob-cart-component-normal-slot"
                  } mt-2`}
                  onClick={() => handleSlotSelection("1-3")}
                >
                  10:00 AM - 01:00 PM
                </div>
                <button className="fs-6 fw-bold btn btn-danger my-3 ms-4">
                  CONFIRM
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="fs-5 fw-bold my-3 ">Delivery 3/3</div>

        <div className="card shadow-sm edobo-white mt-3">
          {[...Array(3)].map((value, index) => {
            return (
              <div key={index} className="p-3">
                <div className="border-bottom d-flex">
                  <div className="cart-product-img-container">
                    <img
                      className="product-image"
                      src={
                        "https://cdn1.storehippo.com/s/60a39f1801d30d79c4caa94b/64f84698d171af6a6696032d/5-1--320x320.jpg"
                      }
                      alt={"productimage"}
                      // onClick={onClick}
                    />
                  </div>
                  <div className=" w-100 d-flex justify-content-between">
                    <div className="p-2 gap-2">
                      <div className="fs-6 fw-bold">Tomato Hybrid</div>
                      <div className="fs-6 fw-lighter">1Kg</div>
                      <div className="d-flex align-items-center gap-3 mt-2">
                        <div className="fs-6 fw-bold text-nowrap">₹ 87</div>
                        <div className="fs-6 text-decoration-line-through fw-medium text-nowrap text-danger">
                          ₹ 100
                        </div>
                      </div>
                      {/* <p className="">
                          With supporting text below as a natural lead-in to
                          additional content.
                        </p> */}
                    </div>
                    <div className="d-flex align-items-center justify-content-center">
                      <AddToCartButton quantity={1} />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-2 border border-danger rounded-3">
          <div className=" row  ">
            <div className="col-8">
              <div className="fs-6 fw-bold p-2">
                How do you want your item ?
              </div>

              {/* <div className="m-2 card w-50 cart-delivery-type-card shadow-sm border-danger cursor-pointer">
                <FontAwesomeIcon
                  icon={faCalendarDays}
                  className="faicons-size text-danger"
                />
                <div className="p-2 pt-2 ">
                  <DatePicker
                    className="w-100  h-25 justify-content-center text-danger p-1"
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                  />
                </div>
              </div> */}
              <div className="d-flex justify-content-evenly ">
                <div className="ms-5 mb-3 card w-25  cart-delivery-type-card border-danger cursor-pointer shadow">
                  <img
                    src={Images.calenderRed}
                    alt=""
                    className="faicons-size my-2"
                  />
                  <div className="text-danger fs-6 fw-bold">Slot Delivery</div>
                </div>

                <div className="col ms-4 mt-2 fs-5">
                  {datesData.map((item, index) => (
                    <div key={index} className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="exampleRadios"
                        id={`exampleRadios${index + 1}`}
                        value={`option${index + 1}`}
                        // Default to the first option being checked
                      />
                      <label className="form-check-label fw-bold">
                        {item.text}
                        <br />
                        <span className="fs-13">
                          {item.date.toLocaleDateString()}
                        </span>
                      </label>
                    </div>
                  ))}
                </div>

                {/* <div className="col ms-4 mt-2 fs-5">
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="exampleRadios"
                      id="exampleRadios1"
                      value="option1"
                      checked
                    />
                    <label
                      class="form-check-label fw-bold "
                      for="exampleRadios1"
                    >
                      Today
                    </label>
                  </div>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="exampleRadios"
                      id="exampleRadios2"
                      value="option2"
                      checked
                    />
                    <label
                      class="form-check-label fw-bold "
                      for="exampleRadios2"
                    >
                      Tommorrow
                    </label>
                  </div>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="exampleRadios"
                      id="exampleRadios3"
                      value="option3"
                      checked
                    />
                    <label
                      class="form-check-label fw-bold "
                      for="exampleRadios3"
                    >
                      Sunday
                    </label>
                  </div>
                </div> */}
              </div>
            </div>

            <div className="col-4">
              <div className=" mt-3 fw-bold fs-6">AVAILABLE SLOT</div>
              <div className="mt-3 me-2 fs-6 mt-4">
                <div
                  className={`${
                    selectedSlot === "7-10"
                      ? "mob-cart-component-selected-slot"
                      : "mob-cart-component-normal-slot"
                  }`}
                  onClick={() => handleSlotSelection("7-10")}
                >
                  7:00 AM - 10:00 AM
                </div>
                <div
                  className={`${
                    selectedSlot === "10-1"
                      ? "mob-cart-component-selected-slot"
                      : "mob-cart-component-normal-slot"
                  } mt-2`}
                  onClick={() => handleSlotSelection("10-1")}
                >
                  10:00 AM - 01:00 PM
                </div>

                <div
                  className={`${
                    selectedSlot === "1-3"
                      ? "mob-cart-component-selected-slot"
                      : "mob-cart-component-normal-slot"
                  } mt-2`}
                  onClick={() => handleSlotSelection("1-3")}
                >
                  10:00 AM - 01:00 PM
                </div>
                <button className="fs-6 fw-bold btn btn-danger my-3 ms-4">
                  CONFIRM
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="card shadow-sm edobo-white mt-3">
          {[...Array(3)].map((value, index) => {
            return (
              <div key={index} className="p-3">
                <div className="border-bottom d-flex">
                  <div className="cart-product-img-container">
                    <img
                      className="product-image"
                      src={
                        "https://cdn1.storehippo.com/s/60a39f1801d30d79c4caa94b/64f84698d171af6a6696032d/5-1--320x320.jpg"
                      }
                      alt={"productimage"}
                      // onClick={onClick}
                    />
                  </div>
                  <div className=" w-100 d-flex justify-content-between">
                    <div className="p-2 gap-2">
                      <div className="fs-6 fw-bold">Tomato Hybrid</div>
                      <div className="fs-6 fw-lighter">1Kg</div>
                      <div className="d-flex align-items-center gap-3 mt-2">
                        <div className="fs-6 fw-bold text-nowrap">₹ 87</div>
                        <div className="fs-6 text-decoration-line-through fw-medium text-nowrap text-danger">
                          ₹ 100
                        </div>
                      </div>
                      {/* <p className="">
                          With supporting text below as a natural lead-in to
                          additional content.
                        </p> */}
                    </div>
                    <div className="d-flex align-items-center justify-content-center">
                      <AddToCartButton quantity={1} />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="row">
          <div className="col-7">
            <div className="">
              <div className="mt-3 border border-danger rounded-2">
                <div className="d-flex justify-content-between">
                  <div className="d-flex">
                    <div className="p-3">
                      <FontAwesomeIcon
                        icon={faTags}
                        className="faicons-size text-danger"
                      />
                    </div>

                    <div className=" mt-2">
                      <div className="fw-bold fs-5">APPNEW</div>
                      <div className="text-body-secondary fw-bold fs-12">
                        Save Flat₹75 on this order
                      </div>
                    </div>
                  </div>

                  <div className="p-3">
                    <div className="fw-bold text-danger fs-6">Apply</div>
                  </div>
                </div>

                <div
                  className="p-2 mob-cart-component-view-more-coupon"
                  onClick={() => {
                    navigate(ROUTES_NAVIGATION.ALL_COUPONS_LIST);
                  }}
                >
                  <div className="">View more coupons</div>
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    className="faicon-size ps-2"
                  />
                </div>

                {/* {showCouponComponent && <MobCartCouponComponent />} */}
              </div>
            </div>

            <CartBillingComponent />
          </div>

          <div className="col-5">
            <div className="mt-3">
              <div className="fw-bold fs-6">Delivery Instructions</div>
              <div className="d-flex mt-2">
                <div
                  className={`card mob-cart-component-delivery-instruction ${
                    selectedCards.includes(0)
                      ? "mob-cart-component-selected-delivery-instraction"
                      : ""
                  }`}
                  onClick={() => toggleCardSelection(0)}
                >
                  <FontAwesomeIcon
                    icon={faUserSecret}
                    className="faicons-size pb-1"
                  />
                  <div>Leave with</div>
                  <div>guard</div>
                </div>

                <div
                  className={`card mob-cart-component-delivery-instruction ${
                    selectedCards.includes(1)
                      ? "mob-cart-component-selected-delivery-instraction"
                      : ""
                  }`}
                  onClick={() => toggleCardSelection(1)}
                >
                  <FontAwesomeIcon
                    icon={faDoorClosed}
                    className="faicons-size pb-1"
                  />
                  <div>Leave at</div>
                  <div>door</div>
                </div>

                <div
                  className={`card mob-cart-component-delivery-instruction ${
                    selectedCards.includes(2)
                      ? "mob-cart-component-selected-delivery-instraction"
                      : ""
                  }`}
                  onClick={() => toggleCardSelection(2)}
                >
                  <FontAwesomeIcon
                    icon={faPhoneSlash}
                    className="faicons-size pb-1"
                  />
                  <div>Avoid </div>
                  <div>calling</div>
                </div>

                <div
                  className={`card mob-cart-component-delivery-instruction ${
                    selectedCards.includes(3)
                      ? "mob-cart-component-selected-delivery-instraction"
                      : ""
                  }`}
                  onClick={() => toggleCardSelection(3)}
                >
                  <FontAwesomeIcon icon={faCat} className="faicons-size pb-1" />
                  <div>Beware </div>
                  <div>of pets</div>
                </div>
              </div>
            </div>

            <div className="my-3 card shadow p-2 text-center ">
              <div className="fw-bold fs-6">Tip Your Delivery Partner</div>
              <div className="fs-12 text-secondary">
                The entire amount will be sent to your delivery partner
              </div>

              <div className="my-2 d-flex justify-content-center ">
                {[0, 1, 2, 3].map((index) => (
                  <div
                    key={index}
                    className={`mob-cart-component-tip-selection-bg-white ${
                      selectedTips.includes(index)
                        ? "mob-cart-component-tip-selected-bg-blue"
                        : ""
                    }`}
                    onClick={() => tipCardSelection(index)}
                  >
                    ₹{10 * (index + 1)}
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-3 card shadow p-3">
              <div className="row pt-1">
                <div className="col-3 p-0 ps-3 ">
                  <FontAwesomeIcon icon={faWallet} className="fs-6 pt-1" />
                  <span className="ps-2 fw-bold fs-6">Wallet</span>
                </div>
                <div className="col-4">
                  <div>Available Balance</div>
                </div>
                <div className="col-3">
                  <div className="fs-6 fw-bold ">₹260</div>
                </div>
                <div className="col-2 fw-bold fs-6 text-danger">Use</div>
              </div>

              <div className="row pt-1 border-top">
                <div className="col-3 p-0 ps-3">
                  <img src={coin} alt="paynow" width={25} />
                  <span className="ps-2 fw-bold fs-6">Loyality Points </span>
                </div>
                <div className=" col-4">
                  <div>200 Reward Points worth</div>
                </div>
                <div className="col-3">
                  <div className="fs-6 fw-bold ">₹20</div>
                </div>
                <div className="col-2 fw-bold fs-6 text-danger">Apply</div>
              </div>
            </div>

            <div className="d-flex mt-3 p-2 border border-danger rounded-2 gap-2">
              <div className="">
                <img src={Images.paynow} alt="paynow" width={150} />
              </div>
              <div className="fs-6 ">
                You will earn 2974 edobo credito worth ₹29.74 on this order,
                once it's delivered.
              </div>
            </div>
          </div>
        </div>

        <div className=" mt-3 fs-6 fw-bold">
          <div>
            Please review your order and address details to avoid cancellations
          </div>

          <div className="fs-10 mt-3 fs-6 text-danger">
            Note: Something will come here.
          </div>
          <div className="fs-10 mt-3 fs-6 text-danger cursor-pointer">
            Read Refund & Cancellation Policy
          </div>
        </div>

        <div className="pt-4">
          <div className="fw-bold fs-4 mb-2">Replace Product</div>
          <div className="d-flex hide-scrollbar pt-2 mob-editable-productcard-container gap-2">
            {/* {EDITIBLE?.map((value) => {
              return ( */}
            {[...Array(4)].map((value, index) => {
              return (
                <div key={index}>
                  <div className="edititable-product-image-container me-2">
                    <ReplceProductComponent />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="pt-2">
          <div className="fw-bold fs-4 mb-2">Upsell Products</div>
          <div className="d-flex hide-scrollbar pt-2 mob-editable-productcard-container gap-2">
            {EDITIBLE?.map((value) => {
              return (
                <div key={value?.id}>
                  <div className="edititable-product-image-container me-2">
                    <MobProductCard
                      imageSrc={value?.url}
                      title={value?.title}
                      price={value?.price}
                      mrp={value?.mrp}
                      description={value?.description}
                      onAddtoCartClick={() => {}}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="pt-2">
          <div className="fw-bold fs-4 mb-2">Cross Sell Products</div>

          <div className="d-flex hide-scrollbar pt-2 mob-editable-productcard-container gap-2">
            {EDITIBLE?.map((value) => {
              return (
                <div key={value?.id}>
                  <div className="edititable-product-image-container me-2">
                    <MobProductCard
                      imageSrc={value?.url}
                      title={value?.title}
                      price={value?.price}
                      mrp={value?.mrp}
                      description={value?.description}
                      onAddtoCartClick={() => {}}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="edobo-red p-3 ">
          <div className="d-flex justify-content-between ">
            <div className="text-white fs-6 ">
              Deliver to - 400074, Chembur Colony, Mumbai
            </div>
            <div className="text-white d-flex">
              <div className="fs-5">Amount to pay 2,974</div>
            </div>
            <button className="btn btn-light ">Proceed To Payment</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartComponent;
