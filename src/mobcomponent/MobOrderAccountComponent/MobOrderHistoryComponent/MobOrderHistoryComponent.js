import { useEffect, useState } from "react";
// import MobHeaderComponent from "../../MobHeaderComponent";
import MobHeaderComponent from "../../MobHeaderNavigation/index";

import MobEmptyOrder from "../MobEmptyOrderComponent";
import "../MobOrderHistoryComponent/MobOrderHistoryComponent.css";
import { useNavigate } from "react-router";
import ROUTES_NAVIGATION from "../../../routes/routes";
// import MobOrderConfirmProgressComponent from "../../MobOrderConfirmComponent/MobOrderCofirmProgressComponent";
import MobOrderCofirmProgressComponent from "../../MobOrderConfirmComponent/MobOrderCofirmProgressComponent";
import ridericon from "../../../assets/Icon/rider.png";
import star from "../../../assets/Icon/star.png";
import notes from "../../../assets/Icon/notes.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
import Datepicker from "../Datepicker";
import MobBottomNavComponent from "../../MobBottomNavComponent";
import axios from "axios";
import Cookies from "universal-cookie";

const MobOrderHistoryComponent = () => {
  const [activeOrderId, setActiveOrderId] = useState(null);
  const [isAddressShow, setIsAddressShow] = useState(false);
  const [selectedCutoffTime, setSelectedCutoffTime] = useState("");
  const [expandedOrderId, setExpandedOrderId] = useState(null);

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
      statuse: [
        { id: 1, title: "ORDER RECEIVED" },
        { id: 2, title: "DISPATCH" },
        { id: 3, title: "CANCELLED" },
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
      statuse: [
        { id: 1, title: "DISPATCH" },
        { id: 2, title: "ORDER RECEIVED" },
        { id: 3, title: "CANCELLED" },
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
      statuse: "DEVLIVERED",
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
      statuse: "DEVLIVERED",
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
      statuse: "CANCELLED",
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
  const cookie = new Cookies();
  const token = cookie.get("auth_token");
  console.log("token is", token);
  const [orderDetails, setOrderDetails] = useState();
  const [orderStatuss, setOrderStatuss] = useState();
  const [status, setStatus] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/user/order-list",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        if (response) {
          console.log(response.data);
          setOrderDetails(response.data.data);
          const orderIds = response.data?.data?.map((order) => order.orderId); // Assuming `id` is the order ID
          // orderStatus(orderIds);

          setStatus(orderIds);

          console.log("O id", orderIds);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false); // End loading
      }
    };
    fetchData();
  }, []);

  console.log(orderDetails);
  useEffect(() => {
    const orderStatus = async () => {
      if (!status || !token) return; // Ensure dependencies are available before proceeding

      try {
        const statuses = await Promise.all(
          status.map(async (orderId) => {
            const response = await axios.get(
              `http://localhost:3000/user/order-status?orderId=${orderId}`,
              {
                headers: {
                  Authorization: `Bearer ${token}`,
                },
              }
            );
            return { orderId, status: response.data };
          })
        );
        console.log("statuses", statuses);
        setOrderStatuss(statuses);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false); // End loading
      }
    };

    orderStatus(); // Call the function immediately on component mount
  }, [status, token]); // Ensure useEffect re-runs when `status` or `token` changes

  console.log(orderDetails);
  useEffect(() => {}, []);

  const handleCancelOrder = async (orderId) => {
    try {
      // Call the Cancel Order API using PUT
      const response = await axios.put(
        `http://localhost:3000/user/cancel-order`,
        { order_id: orderId },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 200) {
        console.log("Order canceled successfully");

        // Update the specific order status in state
        setOrderStatuss((prevStatuses) =>
          prevStatuses.map((status) =>
            status.orderId === orderId
              ? {
                  ...status,
                  status: {
                    data: { status: { order_status_name: "Cancelled" } },
                  },
                }
              : status
          )
        );
      } else {
        console.error("Failed to cancel the order");
      }
    } catch (error) {
      console.error("Error canceling the order:", error);
    } finally {
      setLoading(false);
    }
  };
  const [trackOrder, setTrackOrder] = useState(false);
  const [trackOrderId, setTrackOrderId] = useState(null); // State to track which order is being tracked

  const handleTrackOrder = (orderId) => {
    setTrackOrderId((prevId) => (prevId === orderId ? null : orderId)); // Toggle the orderId
  };

  // if (loading) {
  //   return <div>Loading...</div>; // Show loading state while data is being fetched
  // }

  return (
    <>
      <MobHeaderComponent
        isBack={true}
        text={"My Orders"}
        isCartShow={false}
        isEdoboLogo={true}
      />
      {loading && (
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      )}
      {!loading && orderDetails?.length > 0 ? (
        <div className="container-fluid m-0 p-0">
          <div className="container d-flex justify-content-end mt-2">
            {/* <div className="fs-6 fw-semibold">My Orders</div> */}
            {/* <div className="btn btn-warning rounded-5 fs-13 fw-bold">
              PAY NOW
            </div> */}
          </div>
          {/* <div className="border mt-2"></div> */}
          {orderDetails?.map((order) => {
            const orderStatus = orderStatuss?.find(
              (status) => status.orderId === order.orderId
            );

            const statusName =
              orderStatus?.status?.data?.status?.order_status_name ||
              "Fetching status...";

            // Mapping status to a progress percentage
            const statusMap = {
              Open: 25,
              Packed: 50,
              Shipped: 75,
              Delivered: 100,
            };

            const progressPercentage = statusMap[statusName] || 0;

            return (
              // <div className="d-flex mx-2 my-2" key={order.id}>
              //   <input
              //     type="checkbox"
              //     data-bs-toggle="collapse"
              //     href={`#trackorderCollapse${order.id}`}
              //     role="button"
              //     aria-expanded="false"
              //     aria-controls="trackorderCollapse"
              //     className="me-2 fs-1"
              //     checked={activeOrderId === order.orderId}
              //     onChange={() => handleCheckboxChange(order.id)}
              //   />

              //   <div className="card shadow-sm mob-order-history-component-card-container">
              //     <div className="card-body mob-order-history-component-card-body">
              //       <div className="d-flex justify-content-between pt-2">
              //         <div className="fw-bold">Order Id {order.orderId}</div>
              //         <div className="fw-bold text-danger">
              //           Order Status :
              //           {" " +
              //             orderStatus?.status?.data?.status
              //               ?.order_status_name || "Fetching status..."}
              //         </div>
              //       </div>
              //       <div>
              //         {new Date(order.created_at).toISOString().split("T")[0]}
              //         <div className="mt-1 cancel-schedule">
              //           <span>Schedule:</span>{" "}
              //         </div>
              //       </div>
              //       <div className="status mt-2">
              //         {orderStatus?.status?.data?.status?.order_status_name !==
              //           "Cancelled" && (
              //           <button
              //             className="btn btn-danger trackbutton"
              //             onClick={() => handleTrackOrder(order.orderId)}
              //           >
              //             Track Order
              //           </button>
              //         )}
              //         {orderStatus?.status?.data?.status?.order_status_name !==
              //           "Cancelled" && (
              //           <button
              //             className="btn btn-danger cancelbutton"
              //             onClick={() => handleCancelOrder(order.orderId)}
              //           >
              //             Cancel Order
              //           </button>
              //         )}
              //       </div>
              //       {trackOrderId === order.orderId &&
              //         statusName !== "Cancelled" && (
              //           <div className="mt-3">
              //             <div className="track-order-bar">
              //               <div className="progress">
              //                 <div
              //                   className="progress-bar"
              //                   role="progressbar"
              //                   style={{ width: `${progressPercentage}%` }}
              //                   aria-valuenow={progressPercentage}
              //                   aria-valuemin="0"
              //                   aria-valuemax="100"
              //                 ></div>
              //               </div>
              //               <div className="track-order-status">
              //                 <span
              //                   className={
              //                     progressPercentage >= 25 ? "active" : ""
              //                   }
              //                 >
              //                   Open
              //                 </span>
              //                 <span
              //                   className={
              //                     progressPercentage >= 50 ? "active" : ""
              //                   }
              //                 >
              //                   Packed
              //                 </span>
              //                 <span
              //                   className={
              //                     progressPercentage >= 75 ? "active" : ""
              //                   }
              //                 >
              //                   Shipped
              //                 </span>
              //                 <span
              //                   className={
              //                     progressPercentage === 100 ? "active" : ""
              //                   }
              //                 >
              //                   Delivered
              //                 </span>
              //               </div>
              //             </div>
              //           </div>
              //         )}
              //       <div className="mt-2">{/* Cancel Order Button */}</div>
              //       <div
              //         className="collapse"
              //         id={`trackorderCollapse${order.id}`}
              //       >
              //         {/* <MobOrderCofirmProgressComponent /> */}
              //       </div>
              //     </div>
              //   </div>
              // </div>

              <div className="d-flex mx-2 my-2" key={order.id}>
                <div
                  className="card shadow-sm mob-order-history-component-card-container"
                  data-bs-toggle="collapse"
                  href={`#trackorderCollapse${order.id}`}
                  role="button"
                  aria-expanded="false"
                  aria-controls="trackorderCollapse"
                >
                  <div className="card-body mob-order-history-component-card-body">
                    <div className="d-flex justify-content-between pt-2">
                      <div className="fw-bold">Order Id {order.orderId}</div>
                      <div className="fw-bold text-danger">
                        Order Status:
                        {" " +
                          orderStatus?.status?.data?.status
                            ?.order_status_name || "Fetching status..."}
                      </div>
                    </div>
                    <div>
                      {new Date(order.created_at).toISOString().split("T")[0]}
                      <div className="mt-1 cancel-schedule">
                        <span>Schedule:</span>{" "}
                      </div>
                    </div>
                    <div className="status mt-2">
                      {orderStatus?.status?.data?.status?.order_status_name !==
                        "Cancelled" && (
                        <button
                          className="btn btn-danger trackbutton"
                          onClick={() => handleTrackOrder(order.orderId)}
                        >
                          Track Order
                        </button>
                      )}
                      {orderStatus?.status?.data?.status?.order_status_name !==
                        "Cancelled" && (
                        <button
                          className="btn btn-danger cancelbutton"
                          onClick={() => handleCancelOrder(order.orderId)}
                        >
                          Cancel Order
                        </button>
                      )}
                    </div>
                    {trackOrderId === order.orderId &&
                      statusName !== "Cancelled" && (
                        <div className="mt-3">
                          <div className="track-order-bar">
                            <div className="progress">
                              <div
                                className="progress-bar"
                                role="progressbar"
                                style={{ width: `${progressPercentage}%` }}
                                aria-valuenow={progressPercentage}
                                aria-valuemin="0"
                                aria-valuemax="100"
                              ></div>
                            </div>
                            <div className="track-order-status">
                              <span
                                className={
                                  progressPercentage >= 25 ? "active" : ""
                                }
                              >
                                Open
                              </span>
                              <span
                                className={
                                  progressPercentage >= 50 ? "active" : ""
                                }
                              >
                                Packed
                              </span>
                              <span
                                className={
                                  progressPercentage >= 75 ? "active" : ""
                                }
                              >
                                Shipped
                              </span>
                              <span
                                className={
                                  progressPercentage === 100 ? "active" : ""
                                }
                              >
                                Delivered
                              </span>
                            </div>
                          </div>
                        </div>
                      )}
                    <div
                      className="collapse"
                      id={`trackorderCollapse${order.id}`}
                    >
                      {/* <MobOrderCofirmProgressComponent /> */}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}

          <div className="mob-order-history-component-border"></div>
          {/* {OrderDelivered.map((order) => (
            <div className="d-flex mx-2 my-2" key={order.id}>
              <input type="checkbox" className="me-2 fs-1" checked />
              <div className="card shadow-sm mob-order-history-component-card-delivered">
                <div className="card-body mob-order-history-component-card-body">
                  <div className="d-flex justify-content-between">
                    <div className="fw-bold">Order {order.orderno}</div>
                    <div className="text-success fw-semibold">
                      {order.statuse}
                    </div>
                  </div>
                  <div>
                    <div>{order.date.toLocaleDateString()}</div>
                    <div className="mt-1">
                      <span>Schedule:</span> {order.schedule}
                    </div>
                  </div>
                  <div className="mt-2">
                    <div className="d-flex">
                      {order.button.slice(0, 2).map((btn) => (
                        <div
                          key={btn.id}
                          className="btn btn-outline-danger fs-13 me-2"
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
          ))} */}

          {/* {OrderCanelled.map((order) => (
            <div
              className="d-flex mx-2 my-2"
              key={order.id}
              onClick={() => handleCardClick(order.id)}
            >
              <input type="checkbox" className="me-2 fs-1" checked />
              <div className="card shadow-sm mob-order-history-component-card-canelled">
                <div className="card-body mob-order-history-component-card-body">
                  <div className="d-flex justify-content-between mt-2">
                    <div className="fw-bold">Order {order.orderno}</div>
                    <div className="text-danger">{order.statuse}</div>
                  </div>
                  <div>
                    <div>{order.date.toLocaleDateString()}</div>
                    <div className="mt-1">
                      <span>Schedule:</span> {order.schedule}
                    </div>
                  </div>

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
          ))} */}
        </div>
      ) : (
        <MobEmptyOrder />
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
              <div className="">
                <Datepicker />
              </div>

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

export default MobOrderHistoryComponent;
