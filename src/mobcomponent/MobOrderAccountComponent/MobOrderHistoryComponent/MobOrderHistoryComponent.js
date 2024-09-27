import { useState } from "react";
import MobHeaderComponent from "../../MobHeaderComponent";
import MobEmptyOrder from "../MobEmptyOrderComponent";
import "../MobOrderHistoryComponent/MobOrderHistoryComponent.css";
import { useNavigate } from "react-router";
import ROUTES_NAVIGATION from "../../../routes/routes";
import MobOrderCofirmProgressComponent from "../../MobOrderConfirmComponent/MobOrderCofirmProgressComponent";
import ridericon from "../../../assets/Icon/rider.png";
import star from "../../../assets/Icon/star.png";
import notes from "../../../assets/Icon/notes.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
import Datepicker from "../Datepicker";
import MobBottomNavComponent from "../../MobBottomNavComponent";

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

  return (
    <>
      <MobHeaderComponent
        isBack={true}
        headerText={"Order Details"}
        isCartShow={false}
        isEdoboLogo={true}
      />

      {OrderDetails.length === 0 ? (
        <MobEmptyOrder />
      ) : (
        <div className="container-fluid m-0 p-0">
          <div className="container d-flex justify-content-between">
            <div className="fs-6 fw-semibold">My Orders</div>
            <div className="btn btn-warning rounded-5 fs-13 fw-bold">
              PAY NOW
            </div>
          </div>
          <div className="border mt-2"></div>
          {OrderDetails.map((order) => (
            <div className="d-flex mx-2 my-2" key={order.id}>
              <input
                type="checkbox"
                data-bs-toggle="collapse"
                href={`#trackorderCollapse${order.id}`}
                role="button"
                aria-expanded="false"
                aria-controls="trackorderCollapse"
                className="me-2 fs-1"
                checked={activeOrderId === order.id}
                onChange={() => handleCheckboxChange(order.id)}
              />

              <div className="card shadow-sm mob-order-history-component-card-container">
                <div className="card-body mob-order-history-component-card-body">
                  <div className="d-flex justify-content-between pt-2">
                    <div className="fw-bold">Order {order.orderno}</div>
                    <div className="fw-bold text-danger">
                      {order.statuse[1].title}
                    </div>
                  </div>
                  <div>
                    <div>{order.date.toLocaleDateString()}</div>
                    <div className=" mt-1 ">
                      <span>Schedule:</span> {order.schedule}
                    </div>
                  </div>
                  {activeOrderId === order.id && (
                    <>
                      {order.id &&
                        RiderDetails.map((rider, index) => (
                          <div
                            className="d-flex align-items-center my-2"
                            key={rider}
                          >
                            <div>
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
                            </div>
                          </div>
                        ))}
                    </>
                  )}
                  <div className="mt-2">
                    <div className="d-flex justify-content-between ">
                      {order.button.slice(0, 3).map((btn) => (
                        <div
                          key={btn.id}
                          className="text-danger fs-13"
                          onClick={btn.onClick}
                        >
                          {btn.title}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div
                    className="collapse"
                    id={`trackorderCollapse${order.id}`}
                  >
                    <MobOrderCofirmProgressComponent />
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className="mob-order-history-component-border"></div>
          {OrderDelivered.map((order) => (
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
          ))}

          {OrderCanelled.map((order) => (
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
      <MobBottomNavComponent />
    </>
  );
};

export default MobOrderHistoryComponent;
