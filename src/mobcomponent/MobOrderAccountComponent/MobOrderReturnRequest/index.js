import React, { useState } from "react";
import MobHeaderComponent from "../../MobHeaderComponent";
import "../MobOrderReturnRequest/MobOrderReturnRequest.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import ROUTES_NAVIGATION from "../../../routes/routes";
import { useNavigate } from "react-router";
import MobBottomNavComponent from "../../MobBottomNavComponent";

function MobOrderReturnRequest() {
  const [showInput, setShowInput] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [selectedReason, setSelectedReason] = useState({});

  const navigate = useNavigate();

  const handleSummaryOrder = () => {
    navigate(ROUTES_NAVIGATION.ORDER_CANLE_SUMMARY);
    console.log(ROUTES_NAVIGATION.ORDER_CANLE_SUMMARY);
  };

  const handleRadioClick = (id, title) => {
    setSelectedReason({ id, title });
  };

  const handleRedeliver = () => {
    // Handle redeliver action
  };

  const handleReturn = () => {
    // Handle return action
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const OrderDetails = [
    {
      id: 1,
      orderno: "#89759843",
      statuse: "SELECT ALL",
      schedule: "26th Dec, 2019 8.00 AM to 11.00 AM",
    },
  ];

  const OrderReturn = [
    {
      id: 1,
      orderName: "Wada Kolam",
      imageUrl:
        "https://cdn1.storehippo.com/s/60a39f1801d30d79c4caa94b/6461ce57202645ec68cb941b/cw2607-240x240.png",
      Kg: 25,
      price: 1850,
      statuse: "NO",
      return: [
        { id: 1, title: "Demage" },
        { id: 2, title: "Near to Expiry" },
        { id: 3, title: "Wrong Product" },
        { id: 4, title: "other" },
      ],
    },
    {
      id: 2,
      orderName: "Parle Parle-G",
      imageUrl:
        "https://cdn1.storehippo.com/s/60a39f1801d30d79c4caa94b/6461ce57202645ec68cb941b/cw2607-240x240.png",
      Kg: 25,
      price: 100,
      statuse: "NO",
      return: [
        { id: 1, title: "Demage" },
        { id: 2, title: "Near to Expiry" },
        { id: 3, title: "Wrong Product" },
        { id: 4, title: "other" },
      ],
    },
  ];

  return (
    <>
      <MobHeaderComponent
        isBack={true}
        headerText={"Return Request"}
        isCartShow={false}
        isEdoboLogo={true}
      />

      {OrderDetails.map((order) => (
        <div className="d-flex mx-2 my-2" key={order.id}>
          <div className="card shadow-sm mob-order-checklist-component-card-container">
            <div className="card-body mob-order-checklist-component-card-body">
              <div className="d-flex justify-content-between">
                <div className="fw-bold">Order {order.orderno}</div>
              </div>
              <div className=" mt-1 ">{order.schedule}</div>
            </div>
          </div>
        </div>
      ))}

      {/* <div className="container bg-secondary-subtle fw-bold ">ED #001</div> */}
      {OrderReturn.map((order, index) => (
        <div className="" key={order.id}>
          <div className=" px-4  bg-secondary-subtle fw-bold mt-3">
            ED #00{order.id}
          </div>
          <div className="px-4 d-flex justify-content-between align-items-center my-2">
            <div className="bg-danger">{order.statuse}</div>
            <img src={order.imageUrl} alt={order.orderName} width={70} />
            <div className="flex-grow-1 mx-3">
              <div className="fs-13">{order.orderName}</div>
              <div>{order.Kg}Kg.</div>
            </div>
            <div className="text-right fw-bold ">Rs {order.price}</div>
          </div>
          {/* <div className="container">
            <div className="card rounded shadow p-2 ">
              <div className="">Return Reason: </div>
              <div className="pt-3 ">
                {order.return.map((i) => (
                  <div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="exampleRadios"
                        id="exampleRadios1"
                        value="option1"
                      />
                      <label class="form-check-label" for="exampleRadios1">
                        {i.title}
                      </label>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div> */}

          <div className="container">
            <div className="card rounded shadow p-2 ">
              <div className="">Return Reason: </div>
              <div className="pt-3 ">
                {order.return.map((i) => (
                  <div key={i.id}>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name={`returnReason${order.id}`}
                        id={`returnReason${order.id}_${i.id}`}
                        value={i.title}
                        onClick={() => handleRadioClick(order.id, i.title)}
                      />
                      <label
                        className="form-check-label"
                        htmlFor={`returnReason${order.id}_${i.id}`}
                      >
                        {i.title}
                      </label>
                    </div>
                    {selectedReason.id === order.id &&
                      selectedReason.title === i.title && (
                        <div>
                          <input
                            type="text"
                            className="form-control mt-2"
                            placeholder="Enter additional details"
                          />
                          <div className="text-danger fs-12 px-2 fw-bold  py-2">
                            <FontAwesomeIcon
                              icon={faPenToSquare}
                              className="faicons-size"
                            />
                            Please select accurate reason for quicker refund &
                            redeliver process.
                          </div>
                        </div>
                      )}
                  </div>
                ))}
              </div>
              {selectedReason.id === order.id && (
                <div className="container d-flex justify-content-center align-items-center pt-4">
                  <div className="d-flex gap-3 ">
                    <div
                      className="mob-order-return-request-btn"
                      onClick={handleRedeliver}
                    >
                      {" "}
                      Redelivered
                    </div>
                    <div
                      className="mob-order-return-request-btn"
                      onClick={handleRedeliver}
                    >
                      {" "}
                      Return
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
      <div className="container d-flex justify-content-center align-items-center pt-4">
        <div className="btn-group me-2" role="group">
          <div
            className="btn btn-outline-danger rounded-5  fs-13"
            onClick={() => handleSummaryOrder()}
          >
            PROCEED
          </div>
        </div>
        <div className="btn-group">
          <div className="btn btn-outline-danger rounded-5 fs-13">CANCEL</div>
        </div>
      </div>
      <MobBottomNavComponent />
    </>
  );
}

export default MobOrderReturnRequest;
