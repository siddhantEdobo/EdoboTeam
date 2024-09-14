import React from "react";
import backgroundbanner from "../../assets/Mob/mob-image/offer-background-banner.png";
import offerBanner1 from "../../assets/Mob/mob-image/Offer-page-banner-1.png";
import offerBanner2 from "../../assets/Mob/mob-image/Offer-page-banner-2.png";
import offerBanner3 from "../../assets/Mob/mob-image/Offer-page-banner-3.png";
import "./MobOfferComponent.css";
import { useNavigate } from "react-router-dom";
import ROUTES_NAVIGATION from "../../routes/routes";
import MobHeaderComponent from "../MobHeaderComponent";

const MobOfferComponent = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(ROUTES_NAVIGATION.OFFERSCOUPON);
  };

  return (
    <>
      <MobHeaderComponent isBack={true} isEdoboLogo={true} />
      <div className="container position-relative">
        <div className="position-relative">
          <div className="background-image-container">
            <div className="position-absolute top-50 w-100 align-items-center justify-content-center d-flex ">
              <div className=" p-4 offer-coupon-code-container shadow-sm">
                <span>Use Couponcode:</span>
                <span className="fs-6">HOWDY10</span>
                <div>And get Discount on First Order</div>
              </div>
            </div>
            <img src={backgroundbanner} alt="r" className="h-100 w-100" />
          </div>
        </div>
        <div className="position-relative align-items-center justify-content-center d-flex offer-coupon-code-subcontainer">
          <div className="p-4 offer-coupon-code-container shadow-sm ">
            <div className="row">
              <div
                className="col offer-coupon-img-container m-1 cursor-pointer"
                onClick={handleClick}
              >
                <img
                  src={
                    "https://png.pngtree.com/png-clipart/20230321/original/pngtree-up-to-25-off-big-sale-discount-tag-design-png-image_8998777.png"
                  }
                  alt="r"
                  className="w-100 h-100 cursor-pointer"
                />
              </div>
              <div
                className="col offer-coupon-img-container m-1 cursor-pointer"
                onClick={handleClick}
              >
                <img
                  src={
                    "https://png.pngtree.com/png-clipart/20220307/original/pngtree-25-discount-and-sale-promotion-banner-png-png-image_7424246.png"
                  }
                  alt="r"
                  className="h-100 w-100"
                />
              </div>
            </div>
          </div>
        </div>
        <div>
          <img src={offerBanner1} alt="r" className="h-100 w-100 mt-3" />
          <img src={offerBanner2} alt="r" className="h-100 w-100 mt-3" />
          <img src={offerBanner3} alt="r" className="h-100 w-100 mt-3" />
        </div>
      </div>
    </>
  );
};

export default MobOfferComponent;
