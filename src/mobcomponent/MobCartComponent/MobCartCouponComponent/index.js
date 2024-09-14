import React from "react";
import MobHeaderComponent from "../../MobHeaderComponent";
import MobTabDiscountComponent from "../../MobOfferComponent/MobTabDiscountComponent";
import parse from "html-react-parser";
import imageHowdy10 from "../../../assets/Mob/mob-image/ImageHowdy10.png";
import appNewCoupon from "../../../assets/Mob/mob-image/AppNewCoupon.png";
import bigFamiyCoupon from "../../../assets/Mob/mob-image/BigFamilyCoupon.png";
import overStockedCoupon from "../../../assets/Mob/mob-image/OverStockedCoupon.png";

const DISCOUNT_LIST = [
  {
    id: 1,
    src: imageHowdy10,
    status: true,
    title: "Get discount up to Rs.100",
    subtitle:
      " Use code 125ICICI & get 15% discount up to Rs.100 on orders Rs.500 & above offer valid only on Wednesday",
    more_title: "Applicable on orders above Rs.500",
    discription:
      "<p><strong>Terms and Conditions</strong></p><ul><li>Offer valid for first 5000 customers on a minimum cart value of Rs.300</li><li>Offer valid only on ICICI net-banking payment method</li><li>Offer valid only on Weekends</li><li>Offer valid once per user per week</li><li>Cashback will be credited into ICICI Bank account in 30 working days</li><li>Other T&amp;Cs may apply</li><li>Offer valid till Dec 31, 2019 23:59 PM</li></ul>",
  },
  {
    id: 2,
    status: true,
    src: appNewCoupon,
    title: "Get discount up to Rs.100",
    subtitle:
      " Use code 125ICICI & get 15% discount up to Rs.100 on orders Rs.500 & above offer valid only on Wednesday",
    more_title: "Applicable on orders above Rs.500",
    discription:
      "<p><strong>Terms and Conditions</strong></p><ul><li>Offer valid for first 5000 customers on a minimum cart value of Rs.300</li><li>Offer valid only on ICICI net-banking payment method</li><li>Offer valid only on Weekends</li><li>Offer valid once per user per week</li><li>Cashback will be credited into ICICI Bank account in 30 working days</li><li>Other T&amp;Cs may apply</li><li>Offer valid till Dec 31, 2019 23:59 PM</li></ul>",
  },
  {
    id: 3,
    src: bigFamiyCoupon,
    status: true,
    title: "Get discount up to Rs.100",
    subtitle:
      " Use code 125ICICI & get 15% discount up to Rs.100 on orders Rs.500 & above offer valid only on Wednesday",
    more_title: "Applicable on orders above Rs.500",
    discription:
      "<p><strong>Terms and Conditions</strong></p><ul><li>Offer valid for first 5000 customers on a minimum cart value of Rs.300</li><li>Offer valid only on ICICI net-banking payment method</li><li>Offer valid only on Weekends</li><li>Offer valid once per user per week</li><li>Cashback will be credited into ICICI Bank account in 30 working days</li><li>Other T&amp;Cs may apply</li><li>Offer valid till Dec 31, 2019 23:59 PM</li></ul>",
  },
  {
    id: 4,
    src: overStockedCoupon,
    status: false,
    title: "Get discount up to Rs.100",
    subtitle:
      " Use code 125ICICI & get 15% discount up to Rs.100 on orders Rs.500 & above offer valid only on Wednesday",
    more_title: "Applicable on orders above Rs.500",
    discription:
      "<p><strong>Terms and Conditions</strong></p><ul><li>Offer valid for first 5000 customers on a minimum cart value of Rs.300</li><li>Offer valid only on ICICI net-banking payment method</li><li>Offer valid only on Weekends</li><li>Offer valid once per user per week</li><li>Cashback will be credited into ICICI Bank account in 30 working days</li><li>Other T&amp;Cs may apply</li><li>Offer valid till Dec 31, 2019 23:59 PM</li></ul>",
  },
];

const MobCartCouponComponent = () => {
  return (
    <>
      <MobHeaderComponent
        isBack={true}
        headerText={"Coupons"}
        isCartShow={false}
        isEdoboLogo={true}
      />
      <div className="container home-container">
        <div className="fs-6 border-bottom pb-1">Available Coupons</div>
        {DISCOUNT_LIST.map((value, index) => {
          return (
            <div key={index}>
              {!value?.status && (
                <div className="fs-6 border-bottom pb-1 bg-secondary text-white p-2 ">
                  Unavailable Coupons
                </div>
              )}
              <div
                key={index}
                className={`pt-2 ${!value?.status && " opacity-50"}`}
              >
                <div className="border-bottom 1 pb-1 mt-2">
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="mob-discount-image-container">
                      <img
                        loading="lazy"
                        src={value?.src}
                        alt={value?.src}
                        className="w-100 h-100"
                      />
                    </div>
                    <div
                      className="text-success fs-7 fw-bold cursor-pointer"
                      onClick={() => {
                        if (value?.status) {
                          //here will be Apply coupon's logic
                        }
                      }}
                    >
                      APPLY
                    </div>
                  </div>
                  <div className="mt-1 ">{value?.title}</div>
                </div>
                <div
                  className={`border-bottom 1 pb-1 mt-2 ${
                    value.status ? "false" : "d-none"
                  }`}
                >
                  <div className="two-line-container">
                    <span className="fs-8">{value?.subtitle}</span>
                  </div>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className=" text-danger ">{value?.more_title}</div>
                    <div
                      className="btn text-warning fs-13"
                      data-bs-toggle="collapse"
                      href={`#mob_tab_discount_coupon_more_${index}`}
                      role="button"
                      aria-expanded="false"
                      aria-controls={`mob_tab_discount_coupon_more_${index}`}
                    >
                      + More
                    </div>
                  </div>
                  <div
                    className="collapse"
                    id={`mob_tab_discount_coupon_more_${index}`}
                  >
                    {parse(value?.discription)}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default MobCartCouponComponent;
