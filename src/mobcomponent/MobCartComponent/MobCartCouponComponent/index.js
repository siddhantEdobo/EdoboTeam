import React, { useEffect, useState } from "react";
import MobHeaderComponent from "../../MobHeaderNavigation";
import parse from "html-react-parser";
import axios from "axios";
import Cookies from "universal-cookie";
import { useDispatch, useSelector } from "react-redux";
import { addCoupon } from "../../../redux/reducers/coupon";
import MobHeaderNavigation from "../../MobHeaderNavigation";

const MobCartCouponComponent = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [couponData, setCouponData] = useState(null);
  const cookies = new Cookies();
  const appliedCoupon = useSelector((state) => state.coupons.appliedCoupon);
  const [couponCode, setCouponCode] = useState(
    appliedCoupon ? appliedCoupon.code : ""
  ); // State for the currently applied coupon ID
  const token = cookies.get("auth_token");
  const dispatch = useDispatch();

  // Fetch coupon data
  useEffect(() => {
    const offer = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          "http://13.61.33.202/api/v2/coupons-list"
        );
        if (response) {
          setCouponData(response.data);
        } else {
          throw new Error("Failed to fetch");
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    offer();
  }, []);

  // Function to apply the selected coupon
  const handleApplyCoupon = async (coupon) => {
    try {
      const response = await axios.post(
        "http://13.61.33.202/api/apply-coupon",
        { coupon_code: coupon.code },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response) {
        dispatch(addCoupon(coupon)); // Replace any previously applied coupon with the new one
        // setAppliedCouponId(coupon.id); // Track the currently applied coupon by ID
        setCouponCode(coupon.code);
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <>
      <MobHeaderNavigation text={"Coupon"} />
      <div className="container home-container">
        <div className="fs-6 border-bottom pb-1">Available Coupons</div>
        {couponData && couponData.data ? (
          couponData.data.map((coupon, index) => {
            return (
              <div key={coupon.id}>
                {!coupon?.amount && (
                  <div className="fs-6 border-bottom pb-1 bg-secondary text-white p-2">
                    Unavailable Coupons
                  </div>
                )}
                <div className={`pt-2 ${!coupon?.amount && "opacity-50"}`}>
                  <div className="border-bottom pb-1 mt-2">
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="mob-discount-image-container">
                        <img
                          loading="lazy"
                          src={coupon?.code}
                          alt={coupon?.code}
                          className="w-100 h-100"
                        />
                      </div>
                      <div
                        className={`text-success fs-7 fw-bold cursor-pointer ${
                          appliedCoupon?.id === coupon.id ? "text-muted" : ""
                        }`}
                        onClick={() => {
                          if (
                            coupon?.amount &&
                            appliedCoupon?.id !== coupon.id
                          ) {
                            handleApplyCoupon(coupon); // Apply only the clicked coupon
                          }
                        }}
                      >
                        {appliedCoupon?.id === coupon.id ? "Applied" : "Apply"}
                      </div>
                    </div>
                    <div className="mt-1">{coupon?.description}</div>
                  </div>
                  <div
                    className={`border-bottom pb-1 mt-2 ${
                      coupon.amount ? "false" : "d-none"
                    }`}
                  >
                    <div className="two-line-container">
                      <span className="fs-8">{coupon?.meta_fields}</span>
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="text-danger">{coupon?.type}</div>
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
                      id={`#mob_tab_discount_coupon_more_${index}`}
                    >
                      {coupon?.discription &&
                      typeof coupon.discription === "string"
                        ? parse(coupon.discription)
                        : "No further details available."}
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <div>No Coupons Available</div>
        )}
      </div>
    </>
  );
};

export default MobCartCouponComponent;
