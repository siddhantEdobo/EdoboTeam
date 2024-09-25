import React, { useState } from "react";
import MobHeaderComponent from "../MobHeaderComponent";
import "./MobCartComponent.css";
import Slider from "react-slick";
import AddToCartButton from "../../common/AddToCartButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWallet,
  faCar,
  faBus,
  faBagShopping,
  faCalendarDays,
  faTags,
  faHeart,
  faChevronRight,
  faCat,
  faPhoneSlash,
  faUserSecret,
  faDoorClosed,
  faLocationPin,
  faCircle,
} from "@fortawesome/free-solid-svg-icons";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import CartUnlockCardComponent from "../../common/CartUnlockCardComponent";
import { useNavigate } from "react-router";
import ROUTES_NAVIGATION from "../../routes/routes";
import ProductCard from "../../common/ProductCard";
import MobCartProductSelectedList from "./MobCartProductSelectedList";
import MobCartBillingComponent from "./MobCartBillingComponent";
import MobProductCard from "../../common/MobProductCard";
import { Images } from "../../assets";
import axios from "axios";
import Cookies from "universal-cookie";
import { useDispatch, useSelector } from "react-redux";
import { addCoupon, removeCoupon } from "../../redux/reducers/coupon";
import {
  applyWalletAmount,
  removeWalletAmount,
} from "../../redux/reducers/walletSlice";
import { removeTip, selectTip } from "../../redux/reducers/tipSlice";
import { toggleCardSelection } from "../../redux/reducers/deliverySlice";
// import { faUserSecret, faDoorClosed, faPhoneSlash, faCat } from '@fortawesome/free-solid-svg-icons';

const OFFERSCODE = [
  {
    id: 1,
    offerCode: "Add items worth ₹799 to get Upto ₹100 off, Use code SAVER10",
  },
  {
    id: 2,
    offerCode: "Add items worth ₹299 to get Upto ₹49 off Use code FRESH49",
  },
  {
    id: 3,
    offerCode: "Add items worth ₹299 to get Upto ₹49 off Use code FRESH49",
  },
  {
    id: 4,
    offerCode: "Add items worth ₹299 to get Upto ₹49 off Use code FRESH49",
  },
];

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
    id: 6,
    url: "https://cdn1.storehippo.com/s/60a39f1801d30d79c4caa94b/6502ff9d3fcf6003a40dcfa4/8901808006640-320x320.png",
    title: "Green Masala Milk",
    price: "₹ 41.3",
    mrp: "₹ 51.3",
  },
];

const MobCartComponent = () => {
  const [showInput, setShowInput] = useState(false);
  const [walletAmount, setWalletAmount] = useState(0); // Local state to track wallet amount input
  // const dispatchh = useDispatch();
  // const [appliedWalletAmount, setAppliedWalletAmount] = useState(0);
  // const availableBalance = 260; // This should ideally come from your state management (Redux, Context, etc.)
  const appliedWalletAmount = useSelector(
    (state) => state.wallet.appliedWalletAmount
  );
  const availableBalance = useSelector(
    (state) => state.wallet.availableBalance
  );
  const selectedTip = useSelector((state) => state.tip.selectedTip);
  const selectedCards = useSelector((state) => state.delivery.selectedCards); // Adjust state path if necessary

  const handleUseClick = () => {
    setShowInput(!showInput); // Toggle the input box
  };
  const handleApplyClick = () => {
    dispatch(applyWalletAmount(walletAmount)); // Dispatch to Redux
    setShowInput(false); // Hide input after applying
    setWalletAmount(0); // Reset input field
  };

  const handleRemoveClick = () => {
    // setAppliedWalletAmount(0);
    dispatch(removeWalletAmount()); // Remove the applied wallet amount
  };
  const handleInputChange = (e) => {
    const value = Math.max(
      0,
      Math.min(availableBalance, Number(e.target.value))
    ); // Limit input to available balance
    setWalletAmount(value);
  };

  // const handleApplyClick = () => {
  //   // onWalletAmountChange(walletAmount); // Call the function passed from parent to update wallet amount in billing
  //   setAppliedWalletAmount(walletAmount);
  //   setShowInput(false); // Hide input after applying
  // };

  const [startDate, setStartDate] = useState(new Date());
  const [selectedSlot, setSelectedSlot] = useState(null);
  const navigate = useNavigate();

  const [selectedInstructions, setSelectedInstructions] = useState([]);
  const [showCouponComponent, setShowCouponComponent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  // const [selectedCards, setSelectedCards] = useState([]);
  // const [selectedTips, setSelectedTips] = useState([]);
  const [selectedTips, setSelectedTips] = useState(null);
  // const [selectedTip, setSelectedTip] = useState([]);

  // const tipCardSelection = (index) => {
  //   const isTipSelected = selectedTip.includes(index);
  //   if (isTipSelected) {
  //     setSelectedTip(selectedTip.filter((i) => i !== index));
  //   } else {
  //     setSelectedTip([...selectedTip, index]);
  //   }
  // };

  const tipCardSelection = (index) => {
    const tipAmount = 10 * (index + 1);
    // dispatch(selectTip(tipAmount)); // Calculate the tip amount based on the index

    if (selectedTip === tipAmount) {
      // If the clicked tip is already selected, deselect it
      dispatch(removeTip()); // Deselect the tip
    } else {
      // Otherwise, select the new tip
      dispatch(selectTip(tipAmount)); // Dispatch the selected tip to Redux
    }
  };

  // const tipCardDoubleSelect = (index) => {
  //   setSelectedTip(selectedTip.filter((i) => i !== index));
  // };

  const handleToggleCardSelection = (index) => {
    dispatch(toggleCardSelection(index)); // Dispatch the action to update Redux state

    // const isSelected = selectedCards.includes(index);
    // if (isSelected) {

    //   setSelectedCards(selectedCards.filter((i) => i !== index));
    // } else {
    //   setSelectedCards([...selectedCards, index]);
    // }
  };

  //

  const handleInstructionToggle = (instruction) => {
    // Check if the instruction is already selected
    if (selectedInstructions.includes(instruction)) {
      // If selected, remove it from the selected instructions
      setSelectedInstructions(
        selectedInstructions.filter((item) => item !== instruction)
      );
    } else {
      // If not selected, add it to the selected instructions
      setSelectedInstructions([...selectedInstructions, instruction]);
    }
  };

  const handleSlotSelection = (slot) => {
    setSelectedSlot(slot);
  };

  const handleProceedToPayment = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      navigate(ROUTES_NAVIGATION.CHANGE_LOCATION);
    }, 2000);
  };

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const cookies = new Cookies();

  const token = cookies.get("auth_token");
  // const coupon = useSelector((state) => [...state.coupons.appliedCoupons]);
  const coupon = useSelector((state) => state.coupons.appliedCoupon);
  console.log("couponsss  ", coupon);

  const dispatch = useDispatch();
  const [code, setCode] = useState(null);
  // const [couponCode, setCouponCode] = useState(coupon.map((item) => item.code));
  const [couponCode, setCouponCode] = useState(coupon ? coupon.code : "");
  const [slotshow, setSlotShow] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  console.log(couponCode);
  // const couponCode = coupon.map((item) => item.code);
  // setCode(couponCode);
  // console.log(couponCode);

  // console.log("couponiss", coupon.code);

  const handleRemove = async () => {
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/remove-coupon",
        {
          coupon_code: couponCode,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.data.success === true) {
        console.log(
          `remove successfullty deleted coupons is %${couponCode}`,
          response.data
        );
        dispatch(removeCoupon(coupon));
        setCouponCode("");
      } else {
        console.log("dont have any coupon OR already deleted");
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  const handleShowSlot = () => {
    setSlotShow(!slotshow);
    setIsClicked(2);
  };

  const handleSelect1 = () => {
    setSlotShow(false);

    setIsClicked(1);
  };

  const handleSelect2 = () => {
    setSlotShow(false);

    setIsClicked(3);
  };

  return (
    <>
      <MobHeaderComponent
        isBack={true}
        headerText={" Cart"}
        isCartShow={false}
        isEdoboLogo={true}
        isBottomTab={false}
      />
      <div className="container-lg home-container">
        <div
          id="carouselExampleInterval"
          className="carousel slide mb-3"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            {OFFERSCODE?.map((value, index) => (
              <div
                key={index}
                className={`carousel-item ${index === 0 ? "active" : ""}`}
                data-bs-interval="2000"
              >
                <div className="card p-2 mob-category-image-container">
                  <div className="row">
                    <div className="col-2">
                      <img
                        src={Images.offerslide}
                        alt="offerslide"
                        height={38}
                      />
                    </div>
                    <div className="col-10 mob-cart-component-coupon-text-container">
                      {value?.offerCode}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* <ol className="carousel-indicators mb-1 p-0">
            {OFFERSCODE?.map((value, index) => (
              <li
                key={index}
                data-bs-target="#carouselExampleInterval"
                data-bs-slide-to={index}
                className={index === 0 ? "active" : ""}
              >
                <FontAwesomeIcon icon={faCircle} />
              </li>
            ))}
          </ol> */}
        </div>

        <MobCartProductSelectedList />
        {/* <div className="d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center">
            <div className="fw-bold p-4">Cart (16 Items)</div>
            <div className="fw-bold p-4">₹231 saved on this order</div>
          </div>
          <div className="btn">Empty Cart</div>
        </div> */}
        <div className=" mt-3 border border-danger rounded-3">
          <div className="d-flex align-items-center gap-2 mb-2 ps-2 mt-1">
            <FontAwesomeIcon icon={faWallet} className="faicons-size" />
            <div className="">Pickup and Delivery Options</div>
          </div>
          <div className="conatiner d-flex justify-content-between mb-4 gap-3 ps-2 pe-2">
            <div
              className={`card w-75 cart-delivery-type-card shadow-sm cursor-pointer ${
                isClicked === 1 ? "red-border" : ""
              }`}
              onClick={handleSelect1}
            >
              <FontAwesomeIcon icon={faBus} className="faicons-size" />
              <div>Shoping</div>
              <div>Express Delivery</div>
            </div>
            <div
              className={`card w-75 cart-delivery-type-card shadow-sm cursor-pointer ${
                isClicked === 2 ? "red-border" : ""
              }`}
            >
              <FontAwesomeIcon
                icon={faCar}
                className="faicons-size"
                onClick={handleShowSlot}
              />
              <div>Shoping</div>
              <div>Slot Delivery</div>
            </div>
            <div
              className={`card w-75 cart-delivery-type-card shadow-sm cursor-pointer ${
                isClicked === 3 ? "red-border" : ""
              }`}
              onClick={handleSelect2}
            >
              <FontAwesomeIcon icon={faBagShopping} className="faicons-size" />
              <div>Shoping</div>
              <div>Pickup</div>
            </div>
          </div>
        </div>
        {slotshow && (
          <div className="mt-2 border border-danger rounded-3">
            <div className=" row  ">
              <div className="col-7">
                <div className=" fw-bold p-2">How do you want your item ?</div>

                <div className="m-2 card w-50 cart-delivery-type-card shadow-sm border-danger cursor-pointer">
                  <FontAwesomeIcon
                    icon={faCalendarDays}
                    className="faicons-size text-danger"
                  />
                  <div className="p-2 pt-2 ">
                    {/* <DatePicker
                    className="w-100  h-25 justify-content-center text-danger p-1"
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                  /> */}
                    <DatePicker
                      className="w-100  h-25 justify-content-center text-danger p-1"
                      selected={startDate}
                      onChange={(date) => setStartDate(date)}
                      minDate={new Date()} // Disable previous dates
                    />
                  </div>
                </div>
              </div>

              <div className="col-5 border-danger">
                <div className=" mt-2 fw-bold">AVAILABLE SLOT</div>

                <div className="mt-3 me-2">
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
                </div>
              </div>
            </div>
          </div>
        )}
        <div className="mt-2 text-secondary">
          Any instructions? eg Delivery before 9 am
        </div>
        {/* <div className="mt-3 d-flex gap-2">
          <FontAwesomeIcon icon={faTags} className="faicons-size text-danger" />
          <div className=" fw-bold">Unlock New Offers</div>
        </div>
        <div className="mt-2 mob-cartcomponent-scroll-view-container">
          <div className="justify-content-center">
            {NEWOFFERS.map((item) => {
              return (
                <div className="mb-2" key={item.id}>
                  <CartUnlockCardComponent {...item} />
                </div>
              );
            })}
          </div>
        </div> */}
        <div className="border border-danger rounded-3 mt-3 p-2 d-flex justify-content-around cursor-pointer">
          <FontAwesomeIcon icon={faHeart} className="faicon-size mt-1 " />
          <div
            className="fw-bold "
            onClick={() => {
              navigate(ROUTES_NAVIGATION.USER_WISHLIST);
            }}
          >
            View your wishlist
          </div>
          <FontAwesomeIcon icon={faChevronRight} className="faicon-size   " />
        </div>
        {/* <div className="pt-2">
          <div className="fw-bold">You might have missed !</div>

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
        </div> */}

        <div className="">
          {couponCode.length <= 0 ? (
            <div
              className="border border-danger rounded-3 mt-3 p-2 d-flex justify-content-around cursor-pointer"
              onClick={() => {
                navigate(ROUTES_NAVIGATION.ALL_COUPONS_LIST);
              }}
            >
              <FontAwesomeIcon icon={faHeart} className="faicon-size mt-1 " />
              <div className="fw-bold ">Apply coupons </div>
              <FontAwesomeIcon
                icon={faChevronRight}
                className="faicon-size   "
              />
            </div>
          ) : (
            <div className="mt-3 border border-danger rounded-2">
              <div className="d-flex justify-content-between">
                <div className="d-flex">
                  <div className="p-3">
                    <FontAwesomeIcon
                      icon={faTags}
                      className="faicons-size text-danger"
                    />
                  </div>
                  <div className="mt-2">
                    <div className="fw-bold fs-5">
                      {/* Conditionally render "APPLY" or the applied coupon code */}
                      {couponCode}
                    </div>

                    <div className="text-body-secondary fw-bold fs-10">
                      {couponCode.length > 0
                        ? `Coupon ${couponCode} applied!`
                        : "Save Flat ₹75 on this order"}
                    </div>
                  </div>
                </div>

                <div className="p-3">
                  <div
                    className="fw-bold text-danger fs-13"
                    onClick={handleRemove}
                  >
                    Remove
                  </div>
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
          )}
        </div>

        <div className="mt-3 card p-2">
          <div className="fw-bold">Tip Your Delivery Partner</div>
          <div className="fs-10 text-secondary">
            The entire amount will be sent to your delivery partner
          </div>

          <div className="ps-0 mt-2 d-flex">
            {[0, 1, 2, 3].map((index) => (
              <div
                key={index}
                className={`mob-cart-component-tip-selection-bg-white ${
                  selectedTip === 10 * (index + 1) // Compare with the calculated tipAmount
                    ? "mob-cart-component-tip-selected-bg-blue selected-tip"
                    : ""
                }`}
                onClick={() => tipCardSelection(index)}
              >
                ₹{10 * (index + 1)}
              </div>
            ))}
          </div>
        </div>

        {/* <div className="mt-3 card p-2">
          <div className="fw-bold">Tip Your Delivery Partner</div>
          <div className="fs-10 text-secondary">
            The entire amount will be sent to your delivery partner
          </div>

          <div className="ps-0 mt-2 d-flex">
            {[0, 1, 2, 3].map((index) => (
              <div
                key={index}
                className={`mob-cart-component-tip-selection-bg-white ${
                  selectedTip.includes(index)
                    ? "mob-cart-component-tip-selected-bg-blue" // Corrected class name
                    : ""
                }`}
                onClick={() => tipCardSelection(index)}
              >
                ₹{10 * (index + 1)}
              </div>
            ))}
          </div>
        </div> */}
        {/* <div className="mt-3 card p-2">
          <div className="fw-bold">Tip Your Delivery Partner</div>
          <div className="fs-10 text-secondary">
            The entire amount will be sent to your delivery partner
          </div>

          <div className="ps-0 mt-2 d-flex">
            {[0, 1, 2, 3].map((index) => (
              <div
                key={index}
                className={`card ms-0 mob-cart-component-tip-style ${
                  selectedTip.includes(index)
                    ? "mob-cart-component-selected-tip" // Corrected class name
                    : ""
                }`}
                onClick={() => tipCardSelection(index)}
              >
                ₹{10 * (index + 1)}
              </div>
            ))}
          </div>
        </div> */}
        {/* <div className="mt-3 card p-2">
          <div className="fw-bold">Tip Your Delivery Partner</div>
          <div className="fs-10 text-secondary">
            The entire amount will be sent to your delivery partner
          </div>

          <div className="ps-0 mt-2 d-flex">
            {[0, 1, 2, 3].map((index) => (
              <div
                key={index}
                className={`card ms-0 mob-cart-component-delivery-instruction ${
                  selectedTip.includes(index)
                    ? "mob-cart-component-selected-delivery-instruction"
                    : ""
                }`}
                onClick={() => tipCardSelection(index)}
              >
                ₹{10 * (index + 1)}
              </div>
            ))}
          </div>
        </div> */}
        {/* <div className="mt-3 card p-2">
          <div className="fw-bold">Tip Your Delivery Partner</div>
          <div className="fs-10 text-secondary">
            The entire amount will be sent to your delivery partner
          </div>

          <div className="ps-0 mt-2 d-flex">
            <div
              className={`card mob-cart-component-tip-style ${
                selectedTip === "₹10" ? "selected" : ""
              }`}
              onClick={() => handleTipSelection("₹10")}
              onDoubleClick={() => handleTipSelection("₹10")}
            >
              ₹10
            </div>
            <div
              className={`card mob-cart-component-tip-style ${
                selectedTip === "₹20" ? "selected" : ""
              }`}
              onClick={() => handleTipSelection("₹20")}
              onDoubleClick={() => handleTipSelection("₹20")}
            >
              ₹20
            </div>
            <div
              className={`card mob-cart-component-tip-style ${
                selectedTip === "₹30" ? "selected" : ""
              }`}
              onClick={() => handleTipSelection("₹30")}
              onDoubleClick={() => handleTipSelection("₹30")}
            >
              ₹30
            </div>
            <div
              className={`card mob-cart-component-tip-style ${
                selectedTip === "₹40" ? "selected" : ""
              }`}
              onClick={() => handleTipSelection("₹40")}
              onDoubleClick={() => handleTipSelection("₹40")}
            >
              ₹40
            </div>
          </div>
        </div> */}
        {/* <div className="mt-3 card p-2">
          <div className="fw-bold">Tip Your Delivery Partner</div>
          <div className="fs-10 text-secondary ">
            The entire amount will be sent to your delivery partner
          </div>

          <div className="ps-0 mt-2 d-flex">
            <div className="card mob-cart-component-tip-style">₹10</div>
            <div className="card mob-cart-component-tip-style">₹20</div>
            <div className="card mob-cart-component-tip-style">₹30</div>
            <div className="card mob-cart-component-tip-style">₹40</div>
          </div>
        </div> */}
        <div className="mt-3 ">
          <div className="row pt-1 mob-cart-component-view-more-coupon">
            <div className="col-3 p-0 ps-3 ">
              <FontAwesomeIcon icon={faWallet} className="faicons-size pt-1" />
              <span className="ps-2">Wallet</span>
            </div>
            <div className="col-6">
              <div>Available Balance ₹{availableBalance}</div>
            </div>
            <div
              className="col-2 fw-bold text-danger cursor-pointer"
              onClick={
                appliedWalletAmount > 0 ? handleRemoveClick : handleUseClick
              }
            >
              {appliedWalletAmount > 0 ? "Remove" : "Use"}
            </div>
          </div>

          {showInput && (
            <div className="mt-2 border border-danger rounded-3 p-3 d-flex align-items-center justify-content-center">
              <input
                type="" // Assuming the input is for a numeric value
                value={walletAmount}
                onChange={handleInputChange}
                placeholder="Enter amount"
                className="wallet-input form-control"
                max={availableBalance}
              />
              <button
                onClick={handleApplyClick}
                className="btn btn-danger ms-2 btn-wallet" // Margin added to the left of the button
              >
                Apply
              </button>
            </div>
          )}
        </div>
        <MobCartBillingComponent
          selectedTip={selectedTips}
          coupon={coupon?.amount}
          walletAmount={appliedWalletAmount}
        />
        {/* <div className="d-flex mt-3 p-2 border border-danger rounded-2 gap-2">
          <div className="mob-cart-component-paynow-container-img">
            <img src={Images.paynow} alt="paynow" className="w-100 h-100" />
          </div>

          <div>You will earn 2974 edobo credito worth ₹29.74</div>
        </div> */}
        <div className="mt-3">
          <div className="fw-bold">Delivery Instructions</div>
          <div className="d-flex mt-2">
            <div
              className={`card ms-0 mob-cart-component-delivery-instruction ${
                selectedCards?.includes(0)
                  ? "mob-cart-component-selected-delivery-instraction"
                  : ""
              }`}
              onClick={() => handleToggleCardSelection(0)}
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
                selectedCards?.includes(1)
                  ? "mob-cart-component-selected-delivery-instraction"
                  : ""
              }`}
              onClick={() => handleToggleCardSelection(1)}
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
                selectedCards?.includes(2)
                  ? "mob-cart-component-selected-delivery-instraction"
                  : ""
              }`}
              onClick={() => handleToggleCardSelection(2)}
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
                selectedCards?.includes(3)
                  ? "mob-cart-component-selected-delivery-instraction"
                  : ""
              }`}
              onClick={() => handleToggleCardSelection(3)}
            >
              <FontAwesomeIcon icon={faCat} className="faicons-size pb-1" />
              <div>Beware </div>
              <div>of pets</div>
            </div>
          </div>

          {/* <div className="d-flex mt-2">
            <div className="card ms-0 mob-cart-component-delivery-instruction">
              <FontAwesomeIcon
                icon={faUserSecret}
                className="faicons-size pb-1"
              />
              <div>Leave with</div>
              <div>guard</div>
            </div>

            <div className="card mob-cart-component-delivery-instruction">
              <FontAwesomeIcon
                icon={faDoorClosed}
                className="faicons-size pb-1"
              />
              <div>Leave at</div>
              <div>door</div>
            </div>
            <div className="card mob-cart-component-delivery-instruction">
              <FontAwesomeIcon
                icon={faPhoneSlash}
                className="faicons-size pb-1"
              />
              <div>Avoid </div>
              <div>calling</div>
            </div>
            <div className="card mob-cart-component-delivery-instruction">
              <FontAwesomeIcon icon={faCat} className="faicons-size pb-1" />
              <div>Bewear </div>
              <div>of pets</div>
            </div>
          </div> */}
        </div>
        <div className=" mt-3 fw-bold">
          <div>
            Please review your order and address details to avoid cancellations
          </div>

          <div className="fs-10 mt-3 text-danger">
            Note: Something will come here.
          </div>
          <div className="fs-10 mt-3 text-danger cursor-pointer">
            Read Refund & Cancellation Policy
          </div>
        </div>
      </div>
      <div className="card position-fixed bottom-0 w-100 shadow-lg">
        <div className="d-flex justify-content-between">
          <div className="mt-1 mob-cart-component-delivery-payment">
            Deliver to - 400074, Chembur Colony, 123...
          </div>
          <div
            className="text-center cursor-pointer mt-1 pe-2 text-danger"
            onClick={() => {
              // navigate(ROUTES_NAVIGATION.CHANGE_LOCATION);
              navigate(ROUTES_NAVIGATION.ORDER_CONFIRM);
              // need to ask where will be order confirm redirection.
            }}
          >
            <FontAwesomeIcon icon={faLocationPin} className=" pe-1" />
            CHANGE
          </div>
        </div>

        <div className=" mt-1 d-flex justify-content-between">
          <div className=" ps-2 mt-2 ">
            <div className="fs-10">Amount to pay</div>
            <div className="fw-bold">₹2,974</div>
          </div>

          <div
            className="mob-cart-component-payment-button cursor-pointer"
            onClick={handleProceedToPayment}
          >
            {isLoading ? "Loading..." : "Proceed To Payment"}
          </div>

          {/* <div
            className="mob-cart-component-payment-button cursor-pointer" 
            onClick={() => {
              // navigate(ROUTES_NAVIGATION.ORDER_CONFIRM);
              navigate(ROUTES_NAVIGATION.CHANGE_LOCATION);
            }}
          >
            Proceed To Payment
          </div> */}
        </div>
      </div>
    </>
  );
};

export default MobCartComponent;
