// import React, { useState } from "react";
// import "./OrderHistoryCard.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";

// const OrderHistoryCard = () => {
//   const [activeButton, setActiveButton] = useState(null);

//   const handleButtonClick = (buttonName) => {
//     setActiveButton(buttonName);
//   };
//   return (
//     <>
//       <div className="mt-1 fs-5">Orders History List</div>
//       {[...Array(6)].map((value, index) => {
//         return (
//           <div
//             key={index}
//             className="container-fluid mt-2 border border-danger-subtle"
//           >
//             <div className="d-flex p-2 border-bottom border-danger-subtle ">
//               <div className="d-flex align-items-center">
//                 <img
//                   loading="lezy"
//                   src="https://cdn1.storehippo.com/s/60a39f1801d30d79c4caa94b/6136e2ca20d2f2aea22eb138/grocery-staples-oils-300X300.jpg"
//                   alt={""}
//                   className="order-history-card-fixed-size-image"
//                 />
//               </div>
//               <div className="order-details-col2-container">
//                 <div className="fs-5 fw-bold">Sairaj poli Bahji Kendra</div>
//                 <div className="fs-14 fw-bold  mt-1 order-text-color">
//                   Kalyan
//                 </div>
//                 <div className="mt-2 fs-14 order-text-color  ">
//                   ORDER #162484116102 | Mon,Dec25,2023,07:58 PM
//                   <div className="fs-14 fw-bold text-danger mt-2 cursor-pointer">
//                     VIEW DETAILS
//                   </div>
//                 </div>
//               </div>
//               <div className="justify-content-between">
//                 <div className="d-flex align-items-center">
//                   <div className="order-check-text-style ">
//                     Delivered on Mon,25,2023, 08:38 PM
//                   </div>
//                   <div className=" cursor-pointer text-success ">
//                     <FontAwesomeIcon
//                       className="ml-5 faicons-size order-check-style"
//                       icon={faCircleCheck}
//                     />
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="d-flex justify-content-between pt-2">
//               <div className="order-product-info-text fs-14 ">
//                 Product detail will be here
//               </div>
//               <div className="fs-14 fw-bold">Total Paid: ₹ 250</div>
//             </div>
//             <div className="">
//               <button
//                 className={`order-help-button ${
//                   activeButton === "REORDER" ? "active" : ""
//                 }`}
//                 onClick={() => handleButtonClick("REORDER")}
//               >
//                 REORDER
//               </button>
//               <button
//                 className={`order-help-button ${
//                   activeButton === "HELP" ? "active" : ""
//                 }`}
//                 onClick={() => handleButtonClick("HELP")}
//               >
//                 HELP
//               </button>
//             </div>
//           </div>
//         );
//       })}
//     </>
//   );
// };

// export default OrderHistoryCard;

// import React from "react";
// import "./OrderHistoryCard.css";

// const OrderHistoryCard = () => {
//   return (
//     <div className="mt-5">
//       <div className="d-flex justify-content-between">
//         <div className="fs-6 fw-bold"> My Orders</div>
//         <div className="my-order-heading-pay-now "> Pay Now</div>
//       </div>

//       <div className="my-3">test</div>
//     </div>
//   );
// };

import { useEffect, useState } from "react";
// import MobEmptyOrder from "../MobEmptyOrderComponent";
// import "../MobOrderHistoryComponent/MobOrderHistoryComponent.css";
import { useNavigate } from "react-router";
import ROUTES_NAVIGATION from "../../routes/routes";
// import MobOrderCofirmProgressComponent from "../../MobOrderConfirmComponent/MobOrderCofirmProgressComponent";
import MobOrderCofirmProgressComponent from "../../mobcomponent/MobOrderConfirmComponent/MobOrderCofirmProgressComponent";
import ridericon from "../../assets/Icon/rider.png";
import star from "../../assets/Icon/star.png";
import notes from "../../assets/Icon/notes.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faCircleExclamation,
  faStore,
} from "@fortawesome/free-solid-svg-icons";
import track from '../../assets/Icon/trackIcon.png'
import "./OrderHistoryCard.css";
import OrderRescheduleComponent from "../../component/OrderDetailsComponent/OrderRescheduleComponent";
import Express from '../../assets/Icon/Express.png'
import OrderCancel from "../../component/OrderDetailsComponent/OrderCancel";
import useFetchCategoryProducts from "../../hooks/categorySetPincode";
// import Datepicker from "../Datepicker";
// import Datepicker from "../../";
// import MobBottomNavComponent from "../../MobBottomNavComponent";

const OrderHistoryCard = () => {
  const [activeOrderId, setActiveOrderId] = useState([]);
  const [isAddressShow, setIsAddressShow] = useState(false);
  const [selectedCutoffTime, setSelectedCutoffTime] = useState("");
  const [expandedOrderId, setExpandedOrderId] = useState(null);

  const [trackDropDown , setTrackDropDown] =  useState(false)
  
  const width = window.innerWidth

  useEffect(()=>{
    console.log('width',width)
  }, [width])


  const handleCheck = (orderId) => {
    if (activeOrderId.includes(orderId)) {
      // Remove the orderId if it's already active
      setActiveOrderId(activeOrderId.filter(item => item !== orderId));
    } else {
      // Add the orderId if it's not active
      setActiveOrderId([...activeOrderId, orderId]); // Create a new array with the added orderId
    }
  };




console.log(activeOrderId)

  const handleCardClick = (orderId) => {
    setExpandedOrderId(orderId === expandedOrderId ? null : orderId);
  };

  const handleAddressOpen = () => {
    setIsAddressShow(true);
    console.log(setIsAddressShow(true));
  };

  const handleAddressClose = () => {
    setIsAddressShow(false);
  };

  const navigate = useNavigate();

  const handleCheckboxChange = (orderId) => {
    setActiveOrderId(orderId);
    //  {activeOrderId === order.id}
  };

  const handleSelectChange = (event) => {
    setSelectedCutoffTime(event.target.value);
  };

  const handleCheckList = () => {
    navigate(ROUTES_NAVIGATION.ORDER_CHECKLIST);
    console.log(navigate(ROUTES_NAVIGATION.ORDER_CHECKLIST));
  };

  const handleDetailsummary = () => {
    navigate(ROUTES_NAVIGATION.ORDER_DETAIL_SUMMARY);
    console.log(navigate(ROUTES_NAVIGATION.ORDER_DETAIL_SUMMARY));
  };

  const HandleOrderTimer = () => {
    navigate(ROUTES_NAVIGATION.ORDER_TIMER);
  };

  const handleCancelClick = () => {
    console.log("cancel clicked===>");
    // navigate(ROUTES_NAVIGATION.HOME);
  };

  const handlePayNow = () => {
    if (activeOrderId) {
      // Your payment logic here
      alert("Processing payment for order:", activeOrderId);
    }
  };

  const cutoffTimes = [
    { label: "9:00 AM - 10:00 AM", value: "9:00 AM" },
    { label: "9:00 AM - 10:00 PM", value: "9:30 AM" },
    { label: "1:00 AM - 5:30 AM", value: "10:00 AM" },
    { label: "8:30 AM - 3:30 PM", value: "10:30 AM" },
    { label: "10:00 AM - 1:30 PM", value: "11:00 AM" },
    { label: "9:00 AM - 10:00 PM", value: "9:30 AM" },
    { label: "1:00 AM - 5:30 AM", value: "10:00 AM" },
    { label: "8:30 AM - 3:30 PM", value: "10:30 AM" },
    { label: "10:00 AM - 1:30 PM", value: "11:00 AM" },
  ];

  const OrderDetails = [
    {
      id: 1,
      orderno: "#89759843123",
      date: new Date(),
      deliveryType: 'Express',
      status: [
        { id: 1, title: "ORDER RECEIVED", bg: "#620b94" },
        { id: 2, title: "DISPATCH", bg: "#FF7900" },
        // { id: 3, title: "CANCELLED" },
      ],
      schedule: "26th Dec, 2019 8.00 AM to 11.00 AM",
      button: [
        { id: 1, title: "TRACK ORDER", onClick: HandleOrderTimer },
        { id: 2, title: "CHECKLIST", onClick: HandleOrderTimer },
        { id: 3, title: "CANCEL" },
        { id: 4, title: "RESCHEDULE" },
      ],
    },
    {
      id: 2,
      orderno: "#89759843",
      date: new Date(),
      deliveryType: 'Express',
      status: [
        { id: 1, title: "DISPATCH", bg: "#FF7900" },
        { id: 2, title: "ORDER RECEIVED", bg: "#620b94" },
        // { id: 3, title: "CANCELLED" },
      ],
      schedule: "26th Dec, 2019 8.00 AM to 11.00 AM",
      button: [
        { id: 1, title: "RESCHEDULE", onClick: handleAddressOpen },
        { id: 2, title: "CHECKLIST", onClick: handleCheckList },
        { id: 3, title: "CANCEL" },
      ],
    },
  ];

  const OrderDelivered = [
    {
      id: 1,
      orderno: "#89759843",
      date: new Date(),
      status: "DELIVERED",
      schedule: "26th Dec, 2019 8.00 AM to 11.00 AM",
      button: [
        { id: 1, title: "REORDER", onClick: handleDetailsummary },
        { id: 2, title: "RATE ORDER", onClick: handleDetailsummary },
      ],
    },
    {
      id: 2,
      orderno: "#89759843",
      date: new Date(),
      status: "DELIVERED",
      schedule: "26th Dec, 2019 8.00 AM to 11.00 AM",
      button: [
        { id: 1, title: "REORDER", onClick: HandleOrderTimer },
        { id: 2, title: "RATE ORDER", onClick: HandleOrderTimer },
      ],
    },
  ];

  const OrderCanelled = [
    {
      id: 1,
      orderno: "#89759843",
      date: new Date(),
      status: "CANCELLED",
      schedule: "26th Dec, 2019 8.00 AM to 11.00 AM",
      Invoicedetails: [
        {
          id: 1,
          title: "Invoice amount",
          amount: "2,000",
          description:
            "Refund of 2,000 initiated to original source and can take upto 7 - 10 days to reflect in your account.",
          order: "Order Cancellation",
          orderamount: "-2,000",
          paid: 0,
          paidtitle: "Final paid amount",
          saving: "100(1.10%)",
          savingtitle: "Savings missed",
        },
      ],
    },
  ];

  const RiderDetails = [
    {
      id: 1,
      title: "Rider",
      Name: "Mr. Vikas Singh",
      img: ridericon,
      Star: 4.5,
      starimg: star,
      Rating: "148 Rating",
    },
  ];

  return (
    <>
      {OrderDetails.length === 0 ? (
        ""
      ) : (
        <div className="container-fluid m-0 p-0">
      <div className="order-internal-header">
      <div className="fs-6 fw-semibold">My Orders</div>
      <div 
   className={`btn-paynow ${activeOrderId.length === 0 ? '': 'active'  } `}
    onClick={activeOrderId.length > 0 ? handlePayNow : null}
  >
    PAY NOW
  </div>

      </div>
                               
          {/* <div className="border mt-2"></div>  */}
          {OrderDetails.map((order) => (
            <div className="order-detail-main-container">

<input
  className="checkbox"
  type="checkbox"
  onChange={() => handleCheck(order.id)} // Use a function reference
  checked={activeOrderId.includes(order.id)}
/>

              <div
                className={`card shadow-sm mob-order-history-component-card-container ${
                  activeOrderId === order.id ? "active" : ""
                }`}
                // data-bs-toggle="collapse"
                // href={`#trackorderCollapse${order.id}`}
                // role="button"
                // aria-expanded="false"
                // aria-controls="trackorderCollapse"
                // checked={activeOrderId === order.id}
                // // className="me-2 fs-1"
                // onChange={() => handleCheckboxChange(order.id)}
              >
                <div className="card-body mob-order-history-component-card-body">
                  <div className="row">
                    <div className="order-detail-container d-flex gap-2 pt-2">
                      <div className="col-2">
                        <div className=" d-flex justify-content-between">
                          <div className="orderno-container">
                          <div className="">{width <= 1400 ? 'OR.no': 'Ordered no.'}</div>
                            <div className="fw-bold">{ width <=1400 ? order.orderno.slice(0,6)+'.. ' : order.orderno}</div>
                          </div>

                          <div className="orderon-container">
                            <div className="">{width <= 1400 ? 'OR.on': 'Ordered on'}</div>
                            <div className="fw-bold">
                              {order.date.toLocaleDateString()}
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="col-3">
                        <div className="d-flex justify-content-between">
                          <div className="schedule-container">
                            <div className=" ">Schedule:</div>
                            <div className="fw-bold">{ width ? order.schedule.slice(0,15)+'.. ': order.schedule}</div>
                          </div>

                         
                        </div>
                      </div>
                    {!trackDropDown ? (<div className="order-detail-btns">
                      <div>
                            <div className="my-order-history-track-btn"
                             data-bs-toggle="collapse"
                             href={`#trackorderCollapse${order.id}`}
                             role="button"
                             aria-expanded="false"
                             aria-controls="trackorderCollapse"
                             checked={activeOrderId === order.id}
                             // className="me-2 fs-1"
                             onChange={() => handleCheckboxChange(order.id)}
                             onClick={()=>setTrackDropDown(true)}
                            >
                              Track
                            </div>
                          </div>

                      <div className="col-7  ">
                        <div className=" d-flex  gap-4">
                          <div>
                            <div className="my-order-history-checklist-btn">
                              Checklist
                            </div>
                          </div>
                          <div>
                            {/* <div
        className="offcanvas offcanvas-end"
        tabIndex="-1"
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
      > */}

                           

                            

                            {/* <div
                              className="nav-link text-white cursor-pointer text-white "
                              aria-current="page"
                              data-bs-toggle="offcanvas"
                              data-bs-target="#offcanvasRight"
                              aria-controls="offcanvasRight"
                            >
                              <FontAwesomeIcon
                                icon={faStore}
                                height="100"
                                width="30"
                              />
                              <div className="position-relative d-inline-block ">
                                <FontAwesomeIcon
                                  icon={faCartShopping}
                                  width="50"
                                  height="100"
                                />
                                <span className="cart-number">0</span>
                              </div>
                            </div> */}
                          </div>
                          <div>
                         
                          </div>
                          <div className=" d-flex gap-3">
                          

                            <div className="">
                              {/* <div className="btn btn-warning rounded-5 fs-13 fw-bold">
                                PAY NOW
                              </div> */}
                            </div>
                          </div>

                          {/* <div className="d-flex justify-content-between mt-2 border-top">
                            {order.status.map((statusItem, index) => (
                              <div
                                key={index}
                                className={
                                  statusItem.title === "DISPATCH"
                                    ? "my-order-history-dispatch-btn"
                                    : "my-order-history-order-receive-btn"
                                }
                              >
                                {statusItem.title === "DISPATCH"
                                  ? "DISPATCH"
                                  : "ORDER RECEIVED"}
                              </div>
                            ))}
                          </div> */}

                          {/* <div className="d-flex justify-content-between mt-2 border-top">
                            {order.status.map((statusItem, index) => (
                              <div
                                key={index}
                                className={
                                  statusItem.title === "DISPATCH"
                                    ? "my-order-history-dispatch-btn"
                                    : "my-order-history-order-receive-btn"
                                }
                              >
                                {statusItem.title}
                              </div>
                            ))}
                          </div> */}
                        </div>
                      </div>
                    </div>) : (<img style={{margin: '10px'}} src={Express} width={'80px'} alt={order.deliveryType}/>)}

                    <div className="offcanvas offcanvas-start"
                              tabIndex="-1"
                              id="orderSchedule"
                              aria-labelledby="offcanvasRightLabel"
                            >
                              <OrderRescheduleComponent />
                            </div>     


                            <div
                              className="offcanvas offcanvas-start"
                              tabIndex="-1"
                              id="orderCancel"
                              aria-labelledby="offcanvasRightLabel"
                            >
                              <OrderCancel/>
                            </div> 

               <div className="order-detail-btns">
                
               {/* <div
                              className="fs-12 fw-600 text-danger mt-2"
                              onClick={() => {
                                handleCancelClick();
                              }}
                            >
                              Cancel
                            </div> */}

                            
                    <div
                              className="my-order-history-order-receive-btn"
                              style={{ backgroundColor: order.status[0].bg }}
                            >
                              {order.status[1].title}
                            </div>
               </div>
                    </div>
                  </div>

                  {/* <div className="d-flex gap-5 pt-2">
                    <div>
                      <div className="fw-bold ">Order No.</div>
                      <div>{order.orderno}</div>
                    </div>
                    <div>
                      <div className="fw-bold">Ordered on:</div>
                      <div>{order.date.toLocaleDateString()}</div>
                    </div>
                    <div>
                      <div className="fw-bold ">Schedule:</div>
                      <div>{order.schedule}</div>
                    </div>

                    <div>
                      <div className="my-order-history-track-btn">Track </div>
                    </div>
                    <div>
                      <div className="my-order-history-checklist-btn">
                        Checklist
                      </div>
                    </div>
                    <div>
                      <div className="fs-12 fw-bold text-danger">Cancel</div>
                    </div>

                    <div className="fw-bold text-danger">
                      {order.status[1].title}
                    </div>
                  </div> */}

                  {/* <div>
                    <div>{order.date.toLocaleDateString()}</div>
                    <div className=" mt-1 ">
                      <span>Schedule:</span> {order.schedule}
                    </div>
                  </div> */}

                  {/* <div className="">
                      <div className="d-flex justify-content-between gap-3">
                        {order.button.slice(0, 3).map((btn) => (
                          <div
                            key={btn.id}
                            className="text-danger fs-13 "
                            onClick={btn.onClick}
                          >
                            {btn.title}
                          </div>
                        ))}
                      </div>
                    </div> */}

                  <div
                    className="collapse"
                    id={`trackorderCollapse${order.id}`}
                  >
                    <div className="track-header"
                     data-bs-toggle="collapse"
                     href={`#trackorderCollapse${order.id}`}
                     role="button"
                     aria-expanded="false"
                     aria-controls="trackorderCollapse"
                     checked={activeOrderId === order.id}
                     // className="me-2 fs-1"
                     onChange={() => handleCheckboxChange(order.id)}
                    onClick={()=>setTrackDropDown(false)}
                    ><img src={track} width={'20px'}/>Track</div>
                    <>
                      {console.log("test", activeOrderId)}

                      {order.id &&
                        RiderDetails.map((rider, index) => (
                          <div
                        
                            className="d-flex align-items-center my-2"
                            key={rider}
                          >
                            
                            <div>
                              <div className="otp-container">
                                OTP: 4989
                              </div>
                              <img
                                src={rider.img}
                                alt={rider.Name}
                                width={45}
                              />
                            </div>
                            <div className="ms-2">
                              <div>{rider.title}</div>
                              <div className="fw-bold fs-6">{rider.Name}</div>
                            </div>
                            <div className="ms-auto">
                              <div className="d-flex align-items-center">
                                <img
                                  src={rider.starimg}
                                  alt={rider.Name}
                                  width={15}
                                  className="me-1"
                                />
                                <span>{rider.Star}</span>
                              </div>
                              <div>({rider.Rating})</div>
                              {console.log("rider", rider.id)}
                            </div>
                          </div>
                        ))}
                    </>

                    <MobOrderCofirmProgressComponent />
                <div style={{display:'flex' , flexDirection : 'row', gap: '10px'}}>
                <div
                              className="my-order-history-checklist-btn "
                              // className="nav-link text-white cursor-pointer text-white "
                              aria-current="page"
                              data-bs-toggle="offcanvas"
                              data-bs-target="#orderSchedule"
                              aria-controls="offcanvasRight"
                              onClick={() => {}}
                            >
                              Reschedule
                            </div>

                            <div>
                            <div className="my-order-history-checklist-btn">
                              Checklist
                            </div>
                          </div>

                          <div
                            aria-current="page"
                            data-bs-toggle="offcanvas"
                            data-bs-target="#orderCancel"
                            aria-controls="offcanvasRight"
                              className="fs-12 fw-600 text-danger mt-2"
                              onClick={() => {
                                handleCancelClick();
                              }}
                            >
                              Cancel
                            </div>
                </div>

                            
                  </div>
                </div>
              </div>
            </div>
          ))}
          {/* <div className="mob-order-history-component-border"></div> */}
          {OrderDelivered.map((order) => (
            <div className="d-flex mx-2 my-2" key={order.id}>
              {/* <input type="checkbox" className="me-2 fs-1" checked /> */}

              <div className="card shadow-sm mob-order-history-component-card-delivered">
                <div className="card-body mob-order-history-component-card-body">
                  <div>
                    <div className="d-flex">
                      <div className="col-2 ">
                        <div className="">Order </div>
                        <div className="fw-bold">{order.orderno}</div>
                      </div>

                      <div className="col-2 ">
                        <div>Ordered on:</div>
                        <div className="fw-bold">
                          {order.date.toLocaleDateString()}
                        </div>
                      </div>

                      <div className="col-4 ">
                        <div className="mt-1">
                          <span>Delivered:</span>
                        </div>
                        <div className="fw-bold">{order.schedule}</div>
                      </div>

                      <div className="col-4 d-flex justify-content-center ">
                        <div className="my-order-history-order-delivered-btn fw-bold ">
                          {order.status}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-2">
                    <div className="d-flex">
                      {order.button.slice(0, 2).map((btn) => (
                        <div
                          key={btn.id}
                          className="btn btn-outline-danger fs-13 me-2 fw-bold"
                          onClick={btn.onClick}
                        >
                          {btn.title}
                        </div>
                      ))}
                    </div>
                  </div> 
                </div>
              </div>
            </div>
          ))}

          {OrderCanelled.map((order) => (
            <div
              className="d-flex mx-2 my-2"
              key={order.id}
              onClick={() => handleCardClick(order.id)}
            >
              {/* <input type="checkbox" className="me-2 fs-1" checked /> */}
              <div className="card shadow-sm mob-order-history-component-card-canelled">
                <div className="card-body mob-order-history-component-card-body">
                  <div className="d-flex justify-content-between mt-2">
                    <div className=" col-2 ">
                      <div className="">Order </div>
                      <div className="fw-bold">{order.orderno}</div>
                    </div>

                    <div className=" col-2 ">
                      <div className="">Ordered on: </div>
                      <div className="fw-bold">
                        {order.date.toLocaleDateString()}
                      </div>
                    </div>
                    <div className="col-4  ">
                      <div className="mt-1">
                        <span>Cancelled:</span>
                      </div>
                      <div className="fw-bold">{order.schedule}</div>
                    </div>
                    <div className="col-4  d-flex justify-content-center">
                      <div className="my-order-history-order-cancelled-btn">
                        {order.status}
                      </div>
                    </div>
                  </div>

                  {/* <div>
                    <div className="mt-1">
                      <span>Schedule:</span> {order.schedule}
                    </div>
                  </div> */}

                  {expandedOrderId === order.id && (
                    <>
                      <div className="d-flex justify-content-between mt-2 border-top">
                        <div className="fw-bold fs-13">
                          {order.Invoicedetails[0].title}
                        </div>
                        <div className="fw-bold fs-13">
                          Rs {order.Invoicedetails[0].amount}
                        </div>
                      </div>
                      <div className="my-1 fs-13">
                        <img src={star} alt="star" width={20} />
                        {order.Invoicedetails[0].description}
                      </div>
                      <div className="d-flex justify-content-between mt-2 border-top">
                        <div className="fw-bold fs-13">
                          {order.Invoicedetails[0].order}
                        </div>
                        <div className="fw-bold fs-13">
                          Rs {order.Invoicedetails[0].orderamount}
                        </div>
                      </div>
                      <div className="d-flex justify-content-between mt-2 border-top">
                        <div className="fw-bold fs-13">
                          {order.Invoicedetails[0].paidtitle}
                        </div>
                        <div className="fw-bold fs-13">
                          Rs {order.Invoicedetails[0].paid}
                        </div>
                      </div>
                      <div className="d-flex justify-content-between mt-2 border-top">
                        <div className="fw-bold fs-13 text-success">
                          {order.Invoicedetails[0].savingtitle}
                        </div>
                        <div className="fw-bold fs-13 text-success">
                          Rs {order.Invoicedetails[0].saving}
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {isAddressShow && (
        <>
          <div className="overlay"></div>
          <div
            className="offcanvas offcanvas-bottom show h-50  rounded-top-5"
            tabIndex="-2"
            data-bs-backdrop="static"
            data-bs-scroll="false"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title w-100 fs-13">
                <div className="d-flex fs-12 text-danger me-1">
                  <img src={notes} alt="notes" width={30} className="me-2" />
                  Reschedule your order with the available date and delivery
                  slot.
                </div>
              </h5>
              <button
                type="button"
                className="btn-close"
                onClick={() => {
                  handleAddressClose();
                }}
              ></button>
            </div>
            <div style={{ border: "1px solid rgb(200 200 200)" }}></div>
            <div className="offcanvas-body">
              <div className="">{/* <Datepicker /> */}</div>

              <div className="d-flex justify-content-center pt-3">
                <select
                  id="cutoffTime"
                  className="btn btn-outline-danger rounded-5 me-3"
                  value={selectedCutoffTime}
                  onChange={handleSelectChange}
                >
                  <option value="">Select</option>
                  {cutoffTimes.map((time, index) => (
                    <option key={index} value={time.value}>
                      {time.label}
                    </option>
                  ))}
                </select>
                <div className="btn btn-outline-danger rounded-5 ">CONFIRM</div>
              </div>
              {selectedCutoffTime && (
                <div className="fixed-bottom p-2">
                  <p className="fs-14 my-2">
                    <FontAwesomeIcon
                      icon={faCircleExclamation}
                      className="fs-6 me-2"
                    />{" "}
                    You have selected {selectedCutoffTime} delivery slot, please
                    confirm.
                  </p>
                </div>
              )}
            </div>
          </div>
        </>
      )}
      {/* <MobBottomNavComponent /> */}
    </>
  );
};

export default OrderHistoryCard;
