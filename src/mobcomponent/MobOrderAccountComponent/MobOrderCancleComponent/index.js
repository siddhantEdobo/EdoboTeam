import React, { useState } from "react";
import MobHeaderComponent from "../../MobHeaderComponent";
import "../MobOrderReturnRequest/MobOrderReturnRequest.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router";
import ROUTES_NAVIGATION from "../../../routes/routes";
import MobBottomNavComponent from "../../MobBottomNavComponent";

function MobOrderCancle() {
  const [showInput, setShowInput] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [selectedReason, setSelectedReason] = useState({});

  const navigate = useNavigate();

  const handleSummaryOrder = () => {
    navigate(ROUTES_NAVIGATION.ORDER_SUMMARY);
    console.log("routes url Return", navigate(ROUTES_NAVIGATION.ORDER_SUMMARY));
  };

  const handleRadioClick = (id, title) => {
    setSelectedReason({ id, title });
    if (title === "My delivery address is incorrect") {
      setShowInput(false); // Hide input field when this reason is selected
    } else {
      setShowInput(true); // Show input field for other reasons
    }
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

  const OrderCancle = [
    {
      id: 1,
      orderno: "#89759843",
      statuse: "SELECT ALL",
      schedule: "26th Dec, 2019 8.00 AM to 11.00 AM",
      return: [
        { id: 1, title: "Delivery is always late" },
        { id: 2, title: "I expected faster delivery" },
        { id: 3, title: "I place the order by mistake" },
        {
          id: 4,
          title: "My delivery address is incorrect",
          Alert: "change address",
        },
        { id: 5, title: "Currently not available to receive order" },
        { id: 6, title: "other" },
      ],
    },
  ];

  return (
    <>
      <MobHeaderComponent
        isBack={true}
        headerText={"Return Cancle"}
        isCartShow={false}
        isEdoboLogo={true}
      />

      {OrderCancle.map((order) => (
        <div className="mx-3 pt-4" key={order.id}>
          <div className="card">
            <div className="card-body">
              <div className="d-flex justify-content-between">
                <div className="fw-bold">Order {order.orderno}</div>
              </div>
              <div className=" mt-1 ">{order.schedule}</div>
              <div className="p-2 ">
                <div className="fw-bold">Cancle Reason: </div>
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
                      selectedReason.title === i.title &&
                      i.id === 4 ? (
                        <>
                          <button
                            type="button"
                            class="btn btn-danger btn-sm justify-content-center "
                            style={{ padding: "1px" }}
                            data-bs-toggle="modal"
                            data-bs-target="#staticBackdrop"
                          >
                            change address
                          </button>
                          <div
                            class="modal fade"
                            id="staticBackdrop"
                            data-bs-backdrop="static"
                            data-bs-keyboard="false"
                            tabindex="-1"
                            aria-labelledby="staticBackdropLabel"
                            aria-hidden="true"
                          >
                            <div class="modal-dialog">
                              <div class="modal-content">
                                <div class="modal-header">
                                  <h1
                                    class="modal-title fs-5"
                                    id="staticBackdropLabel"
                                  >
                                    Change Address
                                  </h1>
                                  <button
                                    type="button"
                                    class="btn-close"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                  ></button>
                                </div>
                                <div class="modal-body">Chat with us</div>
                                <div class="modal-footer">
                                  <button
                                    type="button"
                                    class="btn btn-danger p-1"
                                    onClick={() =>
                                      window.open("https://wa.me/+918108359639")
                                    }
                                  >
                                    Proceed
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </>
                      ) : (
                        selectedReason.id === order.id &&
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
                        )
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      <div className="container d-flex justify-content-center align-items-center mt-4">
        <div className="btn-group me-2" role="group">
          <div className="btn btn-outline-danger rounded-5 fs-13">CONFIRM</div>
        </div>
      </div>
      <MobBottomNavComponent />
    </>
  );
}

export default MobOrderCancle;
