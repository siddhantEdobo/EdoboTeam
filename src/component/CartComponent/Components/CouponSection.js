import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { applyCoupon } from "../../../redux/Slices/Cart/cartSlice";
import couponBanner from "../../../assets/Icon/couponBanner.png";

const CouponSection = ({ couponCodes }) => {
  const dispatch = useDispatch();
  const { coupon } = useSelector((store) => store.myCart);
  const [couponList, setCouponList] = useState(false);

  return (
    <div className="coupons-container">
      {couponList ? (
        <div>
          {couponCodes.map((items) => (
            <div className="coupon-code-container" key={items.code}>
              <div className="coupon-code-text-area">
                <span className="coupon-code">{items.code}</span>
                <span className="offer-desc">
                  <b>{items.discount}% </b>on this order
                </span>
              </div>
              <button
                onClick={() => {
                  dispatch(applyCoupon(items));
                  setCouponList(false);
                }}
              >
                Apply
              </button>
            </div>
          ))}
        </div>
      ) : (
        <div className="coupon-container">
          {coupon != null ? (
            <div className="applied-coupon-code-container">
              <div className="coupon-code-text-area">
                <span className="coupon-code">{coupon.code}</span>
                <span className="offer-desc">
                  <b>{coupon.discount}% </b>on this order
                </span>
              </div>
              <button onClick={() => setCouponList(true)}>Change</button>
            </div>
          ) : (
            <img
              onClick={() => setCouponList(true)}
              src={couponBanner}
              width={"90%"}
              alt="Coupon Banner"
            />
          )}
        </div>
      )}
    </div>
  );
};

export default CouponSection;
