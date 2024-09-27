import React from "react";
import "./MobDiscountCouponComponent.css";
import Slider from "react-slick";
import { Images } from "../../../assets";

const MobDiscountCouponComponent = (props) => {
  const { discountData } = props;
  const settings = {
    className: "center",
    centerMode: true,
    // infinite: true,
    centerPadding: "0px",
    slidesToShow: 1.75,
    speed: 1000,
    arrows: false,
    // dots: true,
  };
  return (
    <div className="container-fluid home-container">
      <div className="fs-5">Discount and Coupons</div>

      <div className="mob-cart-delivery-instuction-container hide-scrollbar">
        {/* <Slider {...settings}>
        <div>
          <img
            src={
              "https://cdn1.storehippo.com/s/60a39f1801d30d79c4caa94b/653905efee7b5c064c2f0e77/fresh49-updated-687x174.png"
            }
            className="mob-cart-delivery-instuction-img-card"
            alt="..."
          />
        </div>
        <div>
          <img
            src={
              "https://cdn1.storehippo.com/s/60a39f1801d30d79c4caa94b/653905faecb48ed31c2b8e70/appnew-updated-687x174.png"
            }
            className="mob-cart-delivery-instuction-img-card"
            alt="..."
          />
        </div>
        <div>
          <img
            src={
              "https://cdn1.storehippo.com/s/60a39f1801d30d79c4caa94b/65390604182d7309459fdf44/splash-updated-687x174.png"
            }
            className="mob-cart-delivery-instuction-img-card"
            alt="..."
          />
        </div>
        <div>
          <img
            src={
              "https://cdn1.storehippo.com/s/60a39f1801d30d79c4caa94b/65390604182d7309459fdf44/splash-updated-687x174.png"
            }
            className="mob-cart-delivery-instuction-img-card"
            alt="..."
          />
        </div>
        <div>
          <img
            src={
              "https://cdn1.storehippo.com/s/60a39f1801d30d79c4caa94b/653905efee7b5c064c2f0e77/fresh49-updated-687x174.png"
            }
            className="mob-cart-delivery-instuction-img-card"
            alt="..."
          />
        </div>
      </Slider> */}
        {[...Array(3)].map((value, index) => {
          return (
            <div key={index} className="mob-cart-delivery-instuction-img-card ">
              <img
                // src="https://cdn1.storehippo.com/s/60a39f1801d30d79c4caa94b/653905efee7b5c064c2f0e77/fresh49-updated-687x174.png"
                src="https://cdn1.storehippo.com/s/60a39f1801d30d79c4caa94b/653905efee7b5c064c2f0e77/fresh49-updated-687x174.png"
                className="h-100"
                alt="..."
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MobDiscountCouponComponent;
