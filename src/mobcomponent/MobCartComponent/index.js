import React, { useState } from "react";
import MobHeaderComponent from "../MobHeaderNavigation";
import "./mobCartView.css";
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
  faChevronDown,
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
import express from "../../assets/Icon/expressDilev.png";
import slot from "../../assets/Icon/slotDilv.png";
import pickup from "../../assets/Icon/pickup.png";
import location from "../../assets/Icon/location.png";
import delivery from "../../assets/Icon/delivery.png";
import wishlist from "../../assets/Icon/wishlist.png";
import wallet from "../../assets/Icon/wallet.png";
import leaveWithGuard from "../../assets/Icon/leaveWithGuard.png";
import leaveWithDoor from "../../assets/Icon/leaveWithHome.png";
import avoidcall from "../../assets/Icon/avoidCall.png";
import dogs from "../../assets/Icon/bewareOfDog.png";
import coins from "../../assets/Icon/coins.png";
import axios from "axios";
import Cookies from "universal-cookie";
import { useDispatch, useSelector } from "react-redux";
import EmptyCart from "./EmptyCart";
import { addCoupon, removeCoupon } from "../../redux/reducers/coupon";
import {
  applyWalletAmount,
  removeWalletAmount,
} from "../../redux/reducers/walletSlice";
import { removeTip, selectTip } from "../../redux/reducers/tipSlice";
import { toggleCardSelection } from "../../redux/reducers/deliverySlice";
import {
  setDeliveryType,
  setSelectSlot,
  setSelectedDate,
} from "../../redux/reducers/slot";
import MobHeaderNavigation from "../MobHeaderNavigation";
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
  const coupon = useSelector((state) => state.coupons.appliedCoupon);
  const selectedTip = useSelector((state) => state.tip.selectedTip);
  const amount = useSelector((state) => state.totalAmount.amount);
  console.log("amount to pay ", amount);
  const selectedCards = useSelector((state) => state.delivery.selectedCards); // Adjust state path if necessary
  const { deliveryType, selectSlot } = useSelector((state) => state.delivery);
  console.log("cards select", selectedCards);

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
  const [DeliveryOption, SetDeliveryOption] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [selectedSlot, setSelectedSlot] = useState(null);
  const navigate = useNavigate();
  const [instructionCon, setInstruction] = useState(false);
  const [selectedInstructions, setSelectedInstructions] = useState([]);
  const [showCouponComponent, setShowCouponComponent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [walletDownMenu, setWalletDownMenu] = useState(false);
  const [userInstruction, setUserInstruction] = useState([]);
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
    dispatch(toggleCardSelection(index));
    console.log(selectedCards);
    // Dispatch the action to update Redux state

    // const isSelected = selectedCards.includes(index);
    // if (isSelected) {

    //   setSelectedCards(selectedCards.filter((i) => i !== index));
    // } else {
    //   setSelectedCards([...selectedCards, index]);
    // }
  };

  //

  const handleAddInstruction = (data) => {
    if (!userInstruction.includes(data)) {
      setUserInstruction([...userInstruction, data]);
    } else {
      setUserInstruction(userInstruction.filter((item) => item !== data));
    }

    console.log(userInstruction);
  };

  const handleSlotSelection = (slot) => {
    dispatch(setSelectSlot(slot));
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
  console.log("couponsss  ", coupon);

  const dispatch = useDispatch();
  const [code, setCode] = useState(null);
  // const [couponCode, setCouponCode] = useState(coupon.map((item) => item.code));
  const [couponCode, setCouponCode] = useState(coupon ? coupon.code : "");
  const cartItems = useSelector((state) => state.cart.items);
  const [billSummary, setBillSummary] = useState(false);
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

  // Slot delivery - Anirudh Bhardwaj

  const date = [
    {
      date: "20",
      day: "MON",
    },
    {
      date: "21",
      day: "TUE",
    },
    {
      date: "22",
      day: "WED",
    },
    {
      date: "23",
      day: "THUR",
    },
  ];

  const timeSlots = [
    "",
    "10AM-12PM",
    "12PM-2PM",
    "2PM-4PM",
    "4PM-6PM",
    "6PM-8PM",
  ];

  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(2);

  const handleDateClick = (clickedDate) => {
    setSelectedDate(clickedDate);
  };

  const handleTimeSlotClick = (time) => {
    console.log(time);
    setSelectedTime(time);
  };

  const handleConfirmDelivery = () => {
    console.log("clicked");
    console.log("Selected Date:", selectedDate);
    console.log("Selected Time:", selectedTime);
    SetDeliveryOption("");
    alert("Slot booked sucessfully");
  };
  // Swipe Feature

  let touchStartX = 0;

  // Handle touch start
  const handleTouchStart = (e) => {
    touchStartX = e.touches[0].clientX; // Record the touch starting point
  };

  // Handle touch end
  const handleTouchEnd = (e) => {
    const touchEndX = e.changedTouches[0].clientX; // Record where the touch ended
    const touchDifference = touchStartX - touchEndX;

    if (touchDifference > 50 && selectedIndex < timeSlots.length - 1) {
      // Swipe left (move to the next time slot)
      setSelectedIndex(selectedIndex + 1);
    } else if (touchDifference < -50 && selectedIndex > 0) {
      // Swipe right (move to the previous time slot)
      setSelectedIndex(selectedIndex - 1);
    }
  };

  // Slot Delivery - Anirudh -----End

  const handleShowSlot = () => {
    setSlotShow(!slotshow);
    setIsClicked(2);
    dispatch(setDeliveryType(2));
  };

  const handleSelect1 = () => {
    setSlotShow(false);

    setIsClicked(1);
    dispatch(setDeliveryType(1));
  };

  const handleSelect2 = () => {
    setSlotShow(false);

    setIsClicked(3);
    dispatch(setDeliveryType(3));
  };

  const handleDateChange = (date) => {
    setStartDate(date);

    // Dispatch the action to store the selected date in Redux
    // dispatch(setSelectedDate(date));
    dispatch(setSelectedDate(date.toISOString()));
  };

  if (cartItems.length > 0) {
    return (
      <div className="cart-view">
        <MobHeaderNavigation text={`Your Cart (${cartItems.length} item)`} />
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
          <div className=" mt-3 mb-10 border border-danger rounded-3">
            <div className="d-flex align-items-center gap-2 ps-2 mt-1">
              <div className="choose-dilevery-header">
                Choose a dilevery type
              </div>
            </div>
            <div className="dilevery-option-container">
              <div
                className="dilevery-options "
                style={{
                  borderColor: DeliveryOption === "Express" ? "red" : "#e4e4e7",
                  borderWidth: "2px",
                  borderStyle: "solid",
                }}
                onClick={() => {
                  SetDeliveryOption("Express");
                }}
              >
                <img src={express} className="dilvery-icon" />
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column-reverse",
                    alignItems: "center",
                  }}
                >
                  <span>Available</span>
                  <span className="dilevery-options-header">Express</span>
                </div>
              </div>
              <div
                className="dilevery-options"
                style={{
                  borderColor: DeliveryOption === "Slot" ? "red" : "#e4e4e7",
                  borderWidth: "2px",
                  borderStyle: "solid",
                }}
                onClick={() => SetDeliveryOption("Slot")}
              >
                <img src={slot} className="dilvery-icon" />
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column-reverse",
                    alignItems: "center",
                  }}
                >
                  <span>Available</span>
                  <span className="dilevery-options-header">Slot</span>
                </div>
              </div>
              <div
                className="dilevery-options"
                style={{
                  borderColor: DeliveryOption === "Pick_up" ? "red" : "#e4e4e7",
                  borderWidth: "2px",
                  borderStyle: "solid",
                }}
                onClick={() => SetDeliveryOption("Pick_up")}
              >
                <img src={pickup} className="dilvery-icon" />
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column-reverse",
                    alignItems: "center",
                  }}
                >
                  <span>Available</span>
                  <span className="dilevery-options-header">Pickup</span>
                </div>
              </div>
            </div>
          </div>

          {/* Slot Menu */}
          {DeliveryOption === "Slot" && (
            <div className="slot-container">
              <div className="slot-setting-container">
                <h2>Select delivery's date & time</h2>
                <div>
                  <h5>Select available dates</h5>
                  <div className="date-selection-container">
                    {date.map((date, index) => (
                      <div
                        key={index}
                        className={`date-container-${
                          selectedDate === date ? "selected" : "unselected"
                        }`}
                        onClick={() => handleDateClick(date)} // Handle date click
                      >
                        <span>{date.day}</span>
                        <h2>{date.date}</h2>
                        <span>MAY</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h5>Choose time slots</h5>
                  <div
                    className="slider-container"
                    onTouchStart={handleTouchStart}
                    onTouchEnd={handleTouchEnd}
                  >
                    <div className="time-options">
                      {timeSlots
                        .slice(selectedIndex - 1, selectedIndex + 2)
                        .map((time, index) => (
                          <div
                            key={index}
                            className={`time-slot ${
                              index === 1 ? "selected" : ""
                            }`}
                            onClick={() => handleTimeSlotClick(time)}
                          >
                            {time}
                          </div>
                        ))}
                    </div>
                  </div>
                </div>
                <div className="buttons">
                  <button
                    className="cancel-delivery-button"
                    onClick={() => SetDeliveryOption("")}
                  >
                    Cancel Delivery
                  </button>
                  <button
                    className="delivery-button"
                    onClick={handleConfirmDelivery}
                  >
                    Confirm Delivery
                  </button>
                </div>
              </div>
            </div>
          )}

          <div className="dilevery-instruction-container">
            <div className="dilevery-instruction">
              <div>
                <img
                  src={location}
                  width={"20px"}
                  height={"20px"}
                  style={{ marginBottom: "5px", marginRight: "10px" }}
                />
                <span className="header">Delivery address</span>
              </div>

              <div
                onClick={() => {
                  navigate(ROUTES_NAVIGATION.CHANGE_LOCATION);
                }}
              >
                <FontAwesomeIcon icon={faChevronRight} />
              </div>
            </div>
            <div className="down-selection">
              {
                // add
              }
            </div>
          </div>
          <div className="dilevery-instruction-container">
            <div className="dilevery-instruction">
              <div>
                <img
                  src={delivery}
                  width={"20px"}
                  height={"20px"}
                  style={{ marginBottom: "5px", marginRight: "10px" }}
                  alt="Delivery"
                />
                <span
                  className="header"
                  onClick={() => {
                    navigate(ROUTES_NAVIGATION.CHANGE_LOCATION);
                    // navigate(ROUTES_NAVIGATION.ORDER_CONFIRM);
                    // need to ask where will be order confirm redirection.
                  }}
                >
                  Delivery instruction
                </span>
              </div>

              <div onClick={() => setInstruction(!instructionCon)}>
                <FontAwesomeIcon
                  icon={instructionCon ? faChevronDown : faChevronRight}
                  className={`toggle-icon ${instructionCon ? "rotated" : ""}`}
                />
              </div>
            </div>
            <div className="down-selection">
              {instructionCon ? (
                <div className="instruction-card-container">
                  {instruction.map((items) => (
                    <div
                      key={items.title}
                      className={`instruction-card ${
                        userInstruction.includes(items) ? "selected" : ""
                      }`}
                      onClick={() => handleAddInstruction(items)}
                    >
                      <img src={items.instructionIcons} alt={items.title} />
                      <h3>{items.title}</h3>
                    </div>
                  ))}
                </div>
              ) : (
                <span></span>
              )}
            </div>
          </div>

          <div className="dilevery-instruction-container">
            <div className="dilevery-instruction">
              <div>
                <img
                  src={wishlist}
                  width={"20px"}
                  height={"20px"}
                  style={{ marginBottom: "5px", marginRight: "10px" }}
                />
                <span className="header">Expore wish list</span>
              </div>

              <div>
                <FontAwesomeIcon icon={faChevronRight} />
              </div>
            </div>
            <div className="down-selection">
              {
                // add
              }
            </div>
          </div>

          {/* <div className="dilevery-instruction-container">
        <div className="dilevery-instruction">
            <div>
                 <img src={wallet} width={'20px'} height={'20px'}  style={{marginBottom: '5px' , marginRight:'10px'}}/>
                 <span className="header">Wallet</span>
            </div>

            <div onClick={
              ()=>setWalletDownMenu(!walletDownMenu)
              
              }>
                       <FontAwesomeIcon icon={faChevronRight} />
            </div>
        </div>
        <div className="down-selection">
              {  
                 walletDownMenu ? 
                 (
                 <div className="wallet">
                     <img src={coins} width={'30px'} height={'30px'}/>
                      <input className="walletInput" type="text" placeholder="Add the amount which you want to use "/>
                      <button className="apply-cerdit">Apply</button>
                 </div>
                 ): 
                 (
                 <span>
                   ₹234
                 </span>)

                 
              }
</div>
</div> */}

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

          {/* <div className="mt-2 text-secondary">
          Any instructions? eg Delivery before 9 am
        </div> */}
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
              className="fw-bold coupon-image "
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
                <div className="fw-bold coupon-image ">Apply coupons </div>
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
          {/* <div className="mt-3 ">
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
        </div> */}
          {/* <MobCartBillingComponent
          selectedTip={selectedTips}
          coupon={coupon?.amount}
          walletAmount={appliedWalletAmount}
        /> */}
          {/* <div className="d-flex mt-3 p-2 border border-danger rounded-2 gap-2">
          <div className="mob-cart-component-paynow-container-img">
            <img src={Images.paynow} alt="paynow" className="w-100 h-100" />
          </div>

          <div>You will earn 2974 edobo credito worth ₹29.74</div>
        </div> */}

          <div className=" mt-2 mb-2 fw-bold">
            <div>
              Please review your order and address details to avoid
              cancellations
            </div>

            <div className="fs-10 mt-3 text-danger">
              Note: Something will come here.
            </div>
            <div className="fs-10 mt-3 text-danger cursor-pointer">
              Read Refund & Cancellation Policy
            </div>
          </div>
        </div>
        {cartItems.length > 0 && (
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
                <div className="fw-bold">₹{amount}</div>
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
        )}

        <div className="payment-container">
          {/* <div className="Promo-ciode-code">
        <span>Apply promo code</span>
        <div
         onClick={() => {
          navigate(ROUTES_NAVIGATION.ALL_COUPONS_LIST);
        }}
         style={{ display: 'flex',flexDirection: 'row',alignItems: 'center'}}>
          <span>New code</span>
          <FontAwesomeIcon icon={faChevronRight} className="right-icon"/>
        </div>
       </div> */}

          <div className="bill-summary-container">
            <div className="Bill-summary">
              <span>Bill summary</span>
              <div
                onClick={() => {
                  setBillSummary(!billSummary);
                }}
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <span>{cartItems.length} item</span>
                <FontAwesomeIcon icon={faChevronRight} className="right-icon" />
              </div>
            </div>
            {billSummary && (
              <div style={{ padding: "10px" }}>
                <MobCartBillingComponent
                  selectedTip={selectedTips}
                  coupon={coupon?.amount}
                  walletAmount={appliedWalletAmount}
                />
              </div>
            )}
          </div>

          <div className="bill-summary-container">
            <div className="Bill-summary">
              <span>Cash</span>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <span>Change mode</span>
                <FontAwesomeIcon icon={faChevronRight} className="right-icon" />
              </div>
            </div>
            {/*   <div className="payment-modes-container">

       {paymentsModes.map((item, index) => (
        <div key={index} className="payment-mode-card">
          <img src={item.icon} alt={item.title} className="payment-mode-icon" />
          <span className="payment-mode-title">{item.title}</span>
        </div>
      ))}
       </div> */}
          </div>

          <div className=" mt-0 d-flex justify-content-between">
            <div
              className="mob-cart-component-payment-button cursor-pointer"
              onClick={() => {
                navigate(ROUTES_NAVIGATION.ORDER_CONFIRM);
              }}
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
      </div>
    );
  } else {
    return <EmptyCart />;
  }
};

export default MobCartComponent;
