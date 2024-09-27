import React from "react";

const DiscountCouponComponent = (props) => {
  const { discountData } = props;
  return (
    <div
      id="carouselExampleInterval"
      className="carousel slide container-lg home-container"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active" data-bs-interval="1000">
          <img
            src="https://cdn.storehippo.com/s/60a39f1801d30d79c4caa94b/ms.files/Banners/dekstop-Appnew-Splash-Coupon-1%20(1).gif"
            className="d-block w-100"
            alt="..."
          />
        </div>
      </div>
    </div>
  );
};

export default DiscountCouponComponent;
