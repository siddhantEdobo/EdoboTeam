import React, { useRef, useState } from "react";

import { useNavigate } from "react-router-dom";
import { Images } from "../../../assets";

const ProductFilterModalComponent = ({ items }) => {
  const [activeTab, setActiveTab] = useState("v-pills-home"); // State to manage active tab
  const [productRating, setProductRating] = useState(3);
  const navigate = useNavigate();
  const closeButtonRef = useRef();

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  // Function to set product rating
  const setRating = (rating) => {
    setProductRating(rating);
  };

  const PRODUCT_TYPES = [
    { id: 1, label: "Brought By You" },
    { id: 2, label: "Veg" },
    { id: 3, label: "Non Veg" },
    { id: 4, label: "New Arrivals" },
    { id: 5, label: "Vegans" },
    { id: 6, label: "Eggitarian" },
  ];

  const BrandProducts = [
    {
      id: "v-pills-home",
      label: "Brand",
      content: [
        "Fortune",
        "India Gate",
        "Kohinoor",
        "Safe Harvest",
        "Super Saver",
      ],
    },
    {
      id: "v-pills-profile",
      label: "Price",
      content: [
        "Less than ₹20",
        "₹21 to ₹50",
        "₹51 to ₹100",
        "₹101 to ₹200",
        "₹201 to ₹500",
      ],
    },
    {
      id: "v-pills-discount",
      label: "Discount",
      content: [
        "Up to 5%",
        "5% to 10%",
        "10% to 15%",
        "15% to 25%",
        "25% to 50%",
      ],
    },
    {
      id: "v-pills-rating",
      label: "Product Rating",
      content: [],
    },
  ];

  return (
    <>
      <div className="offcanvas-header edobo-red">
        <div className="d-flex text-bg-black text-white m-2">
          {/* <FontAwesomeIcon icon={faCartShopping} width="30" height="30" /> */}
          <div className=" order-reschedule-component-header-img">
            <img
              src={Images.filterIconImg}
              alt="reschedule"
              className="w-100 h-100 "
            />
          </div>
        </div>

        <div className="w-100 justify-content-between ">
          <div className="fs-5 fw-bold text-white">Filter</div>
          <div className="offcanvas-title text-white" id="offcanvasRightLabel">
            Filter product by
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
              <div className="d-flex flex-wrap justify-content-between gap-1 border-bottom ">
                {PRODUCT_TYPES?.map((value) => {
                  let checkboxClass = "form-check-input";

                  if (
                    value.label === "Veg" ||
                    value.label === "Brought By You" ||
                    value.label === "New Arrivals"
                  ) {
                    checkboxClass += " red-checkbox";
                  } else if (value.label === "Eggitarian") {
                    checkboxClass += " yellow-checkbox";
                  }

                  return (
                    <div key={value.id} className="form-check col-3">
                      <input
                        className={checkboxClass}
                        type="checkbox"
                        value=""
                      />
                      <label className="form-check-label fs-12 fw-bold flex-nowrap">
                        {value.label}
                      </label>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="mt-3 row border-bottom ">
              <div className="d-flex align-items-start">
                <div
                  className="nav flex-column nav-pills col-4 pe-2"
                  id="v-pills-tab"
                  role="tablist"
                  aria-orientation="vertical"
                >
                  {BrandProducts.map((tab) => (
                    <div
                      key={tab.id}
                      className={`nav-link my-2 ${
                        activeTab === tab.id ? "active" : ""
                      }`}
                      id={`${tab.id}-tab`}
                      onClick={() => handleTabClick(tab.id)}
                      type="button"
                      role="tab"
                      aria-controls={tab.id}
                      aria-selected={activeTab === tab.id}
                    >
                      {tab.label}
                    </div>
                  ))}
                </div>

                <div className="col-8  ">
                  <div
                    className="tab-content p-4 pe-4  "
                    id="v-pills-tabContent"
                  >
                    {BrandProducts.map((tab) => (
                      <div
                        key={tab.id}
                        className={`tab-pane fade ${
                          activeTab === tab.id ? "show active" : ""
                        }`}
                        id={tab.id}
                        role="tabpanel"
                        aria-labelledby={`${tab.id}-tab`}
                      >
                        <div className=" ">
                          {/* Add UI for product rating when the "Product Rating" tab is active */}
                          {tab.label === "Product Rating" && (
                            <div className="d-flex">
                              {[...Array(5)].map((item, index) => (
                                <span
                                  className="fs-6 me-1"
                                  key={index}
                                  style={{
                                    color:
                                      index < productRating
                                        ? "red"
                                        : "lightgrey",
                                  }}
                                  onClick={() => setRating(index + 1)} // Set product rating on click
                                >
                                  ★
                                </span>
                              ))}
                            </div>
                          )}

                          {/* Render other content if necessary */}
                          {tab.content.map((item, index) => (
                            <div
                              key={index}
                              className="d-flex justify-content-between mx-3 p-1"
                            >
                              <div className="fw-bold my-1">{item}</div>
                              <div className="">
                                <input
                                  className="form-check-input fs-6"
                                  type="checkbox"
                                  value=""
                                  aria-label="Checkbox for following text input"
                                />
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="offcanvas-bottom">
            <div className="row m-0">
              <div className="col bg-danger fw-bold showcartsummar-bottom-button-container">
                <div className="fs-6 text-white">Confirm</div>
              </div>
            </div>
          </div> */}

          <div className="row m-0">
            <div className="col bg-warning showcartsummar-bottom-button-container">
              <div className="fs-6 text-white">Reset All</div>
            </div>

            <div
              className="col bg-danger showcartsummar-bottom-button-container"
              onClick={() => {
                closeButtonRef?.current?.click();
                // navigate(ROUTES_NAVIGATION.CART);
              }}
            >
              <div className="fs-6 text-white">Apply Filters</div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default ProductFilterModalComponent;
