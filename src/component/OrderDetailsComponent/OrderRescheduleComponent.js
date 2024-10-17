import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useRef, useState } from "react";
import "./OrderRescheduleComponent.css";
import { faCartShopping, faTrashCan } from "@fortawesome/free-solid-svg-icons";
// import AddToCartButton from "../../common/AddToCartButton";
import ROUTES_NAVIGATION from "../../routes/routes";
import { useNavigate } from "react-router-dom";
import AddToCartButtonCustomIcon from "../../common/AddToCartButtonCustomIcon";
import emptycart from "../../assets/Icon/empty-cart.png";
import { Images } from "../../assets";

const OrderRescheduleComponent = ({ items }) => {
  const navigate = useNavigate();
  const closeButtonRef = useRef();

  const [selectedSlot, setSelectedSlot] = useState(null);
  const [selectedCards, setSelectedCards] = useState([]);
  const [selectedTips, setSelectedTips] = useState([]);

  const handleSlotSelection = (slot) => {
    setSelectedSlot(slot);
  };


  const timeSlot = [
    { id: 1, time: "10:00 AM - 11:00 AM"},
    { id: 2, time: "11:00 AM - 12:00 PM"},
    {  id: 3, time: "12:00 PM - 1:00 PM"},
    
    {id: 4 , time: ''}

  ]


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

  return (
    <div className="main-side-view-slot-container">
      <div className="reschedule-header-component offcanvas-header edobo-red">
        <div className="d-flex text-bg-black text-white m-2">
          {/* <FontAwesomeIcon icon={faCartShopping} width="30" height="30" /> */}
          <div className=" order-reschedule-component-header-img">
            <img
              src={Images.rescheduleNoteImg}
              alt="reschedule"
              className="w-100 h-100 "
            />
          </div>
        </div>

        <div className="w-100 justify-content-between ">
          <div className="fs-5 fw-bold text-white">Reschedule</div>
          <div className="offcanvas-title text-white" id="offcanvasRightLabel">
            Reschedule your order with the available date and delivery slot.
          </div>
        </div>

        <button
          type="button"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
          className="btn-close bg-dark bg-white"
          ref={closeButtonRef}
        ></button>
      </div>

      {items && items.length === 0 ? (
        <>
          <div className="offcanvas-body"></div>
        </>
      ) : (
        <>
          <div className="offcanvas-body">
            <div className="mt-2 ">
              <div className=" row  ">
                <div className="d-flex py-3 gap-1 ">
                  <div className=" ms-3 ">
                    <div className="p-2 mb-3 card cart-delivery-type-card border-danger cursor-pointer shadow">
                      <img
                        src={Images.calenderRed}
                        alt=""
                        className="faicons-size my-2"
                      />
                      <div className="text-danger fs-6 fw-bold ">
                        Slot Delivery
                      </div>
                    </div>
                  </div>
                  <div className="d-flex justify-content-evenly ">
                    <div className="col ms-4 mt-2 ">
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
                          <label className="form-check-label fw-bold fs-20">
                            {item.text}
                            <br />
                            <span className=" text-secondary fs-8">
                              {item.date.toLocaleDateString()}
                            </span>
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* <div className="available-slot-container">
              <div className=" mt-3 fw-bold fs-6">AVAILABLE SLOT</div>
              <div className="time-slots-container">
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
            </div> */}

             <div className="time-slots-container">
              <div className="time-slots-header-text">
                  AVAILABLE SLOT
              </div>
               
               {
                timeSlot.map((timeSlot, index) => (
                  <div key={index}
                  className={`${
                    selectedSlot === timeSlot.time
                      ? "mob-cart-component-selected-slot"
                      : "mob-cart-component-normal-slot"
                  }`}
                  onClick={() => handleSlotSelection(timeSlot.time)}
                  >
                    {timeSlot.time}
                  </div>
                ))
               }
               
                  
            </div>

          </div>

        

         
          <div className="offcanvas-bottom">
  <div className="row m-0">
    <div className="col">
      {/* Display selected slot just above the confirm button */}
      {selectedSlot && (
        <div className="selected-slot-text">
          <span>You have selected {selectedSlot} delivery slot, please confirm.</span>
        </div>
      )}

      {/* Confirm button */}
      <div className="confirm-btn">Confirm</div>
    </div>
  </div>
</div>

        </>
      )}
    </div>
  );
};

export default OrderRescheduleComponent;

// import React from 'react'

// const OrderRescheduleComponent = () => {
//   return (
//     <div>OrderRescheduleComponent</div>
//   )
// }

// export default OrderRescheduleComponent
