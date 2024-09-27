import React, { useState } from "react";
import MobHeaderComponent from "../MobHeaderComponent";
import { Images } from "../../assets";
import "./MobRequestNewProductSearchComponent.css";

const MobRequestNewProductSearchComponent = () => {
  const [addRequestNewProduct, setAddRequestNewProduct] = useState("");

  const handleRequestNewProduct = () => {
    console.log("addRequestNewProduct ===>", addRequestNewProduct);
    // Here you can perform further actions based on the entered product
  };

  return (
    <>
      <MobHeaderComponent
        isBack={true}
        headerText={"Request New Product"}
        isCartShow={false}
        isEdoboLogo={true}
      />
      <div>
        <div className="mob-request-new-product-submit-component-heading-container">
          <div className="">Request New Product</div>
        </div>

        <div className="mt-3 mx-3">
          <div className="card shadow-sm p-2 cursor-pointer">
            <div>
              <div className="text-danger fs-14 fw-bold">
                Hey Harshil Doshi,
              </div>
              <div className="text-secondary">You didn't find your stuff?</div>
            </div>

            <div className="mt-3">
              <div className="d-flex gap-2">
                <div>
                  <img
                    src={Images.requestNewProductBack}
                    className="mt-2 mob-request-new-product-submit-button-back-btn-img"
                    alt="Back"
                  />
                </div>
                <input
                  type="text"
                  className="form-control fs-12 w-100"
                  placeholder="Search here, the product you didn't find..."
                  aria-label="Search"
                  aria-describedby="addon-wrapping"
                  value={addRequestNewProduct}
                  onChange={(e) => setAddRequestNewProduct(e.target.value)}
                />
              </div>
              <div
                className="mob-request-new-product-submit-button mt-3"
                onClick={handleRequestNewProduct}
              >
                Submit
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobRequestNewProductSearchComponent;
