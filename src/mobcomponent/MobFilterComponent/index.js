
import React, { useState } from "react";
import "./MobFilterComponent.css";

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

const MobFilterComponent = () => {
  const [activeTab, setActiveTab] = useState("v-pills-home"); // State to manage active tab
  const [productRating, setProductRating] = useState(3); // State for product rating

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  // Function to set product rating
  const setRating = (rating) => {
    setProductRating(rating);
  };

  return (
    <div className="container-fluid m-0 p-0">
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
              <input className={checkboxClass} type="checkbox" value="" />
              <label className="form-check-label fs-12 fw-bold flex-nowrap">
                {value.label}
              </label>
            </div>
          );
        })}
      </div>
      <div className="mt-3 row border-bottom  ">
        <div className="d-flex align-items-start">
          <div
            className="nav flex-column nav-pills col-4 "
            id="v-pills-tab"
            role="tablist"
            aria-orientation="vertical"
          >
            {BrandProducts.map((tab) => (
              <div
                key={tab.id}
                className={`nav-link  ${activeTab === tab.id ? "active" : ""}`}
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
            <div className="tab-content" id="v-pills-tabContent">
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
                  <div className="">
                    {/* Add UI for product rating when the "Product Rating" tab is active */}
                    {tab.label === "Product Rating" && (
                      <div className="d-flex">
                        {[...Array(5)].map((item, index) => (
                          <span
                            className="fs-6 me-1"
                            key={index}
                            style={{
                              color:
                                index < productRating ? "red" : "lightgrey",
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
                        <div className="fw-bold">{item}</div>
                        <div className="">
                          <input
                            className="form-check-input"
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
      <div className="d-flex justify-content-end gap-4 pt-2">
        <div className="mob-browse-category-filter-btn-container">
          Reset All
        </div>
        <div className="mob-browse-category-filter-btn-container">
          Apply Filters
        </div>
      </div>
    </div>
  );
};

export default MobFilterComponent;
