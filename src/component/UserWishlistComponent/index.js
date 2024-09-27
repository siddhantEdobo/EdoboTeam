import React, { useState } from "react";
import "./UserWishListComponent.css";

// import { AddToCartButton } from "../../common/AddToCartButton/";
import AddToCartButton from "../../common/AddToCartButton";

const UserWishlistComponent = () => {
  const [activeButton, setActiveButton] = useState(null);

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  return (
    <div className="container-fluid mt-4 border border-danger-subtle pb-2 ">
      <div className="m-lg-1 fs-5">Wish List</div>
      <div className="d-flex pb-3 border-bottom border-danger-subtle ">
        <div className="d-flex m-1">
          <img
            loading="lezy"
            src="https://cdn1.storehippo.com/s/60a39f1801d30d79c4caa94b/6136e2ca20d2f2aea22eb138/grocery-staples-oils-300X300.jpg"
            alt={""}
            className="wish-list-history-card-fixed-size-image"
          />
        </div>

        <div className="wish-list-details-col2-container">
          <div className="fs-6 fw-bold">Sairaj poli Bahji Kendra</div>
          <div className="fs-14 fw-bold  mt-1 wish-list-text-color">Kalyan</div>
          <div className="mt-2 fs-14 wish-list-text-color  ">
            ORDER #162484116102 | Mon,Dec25,2023,07:58 PM
            <div className="fs-14 fw-bold text-danger mt-2 cursor-pointer">
              VIEW DETAILS
            </div>
          </div>
        </div>
        <div className="d-flex">
          <div className="fs-14 fw-bold">MRP: ₹ 250</div>
          <div className="fs-14 fw-bold text-decoration-line-through text-danger ms-2">
            MRP: ₹ 350
          </div>
        </div>
      </div>

      <div className="d-flex flex-row justify-content-between pt-2 mb-2">
        {/* <div className="wish-list-product-info-text fs-14">
          Product detail will be here
        </div>
        <div className="fs-14 fw-bold">MRP: ₹ 250</div> */}
        <AddToCartButton />
        <div className="mt-1">
          <button
            className={`btn border ${
              activeButton === "REORDER" ? "active" : ""
            }`}
            // onClick={() => handleButtonClick("REORDER")}
          >
            REMOVE
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserWishlistComponent;
