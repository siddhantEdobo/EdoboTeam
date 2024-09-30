import React, { useEffect, useState } from "react";
import "./MobTabDiscountComponent.css";
import parse from "html-react-parser";
import MobHeaderComponent from "../../MobHeaderNavigation";
import axios from "axios";

const MobTabDiscountComponent = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [couponData, setCouponData] = useState(null);

  useEffect(() => {
    const offer = async () => {
      setLoading(true); // Start loading
      try {
        const response = await axios.get(
          "http://127.0.0.1:8000/api/v2/coupons-list"
        );
        if (response) {
          const data = response.data;
          setCouponData(data);
        } else {
          throw new Error("Failed to fetch");
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false); // Stop loading
      }
    };
    offer();
  }, []);

  // Check for loading or error state
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <MobHeaderComponent text={'Discount and Coupons'}
        // isBack={true}
        // headerText={"Discount and Coupons"}
        // isCartShow={false}
        // isEdoboLogo={true}
      />
      <div className="container home-container">
        <div className="fs-6 border-bottom pb-1">Available Coupons</div>
        {console.log("Coupon", couponData)}
        {couponData && couponData.data ? (
          couponData.data.map((value, index) => {
            return (
              <div key={value.id}>
                {!value?.amount && (
                  <div className="fs-6 border-bottom pb-1 bg-secondary text-white p-2 ">
                    Unavailable Coupons
                  </div>
                )}
                <div
                  key={value.id}
                  className={`pt-2 ${!value?.amount && " opacity-50"}`}
                >
                  <div className="border-bottom pb-1 mt-2">
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="mob-discount-image-container">
                        <img
                          loading="lazy"
                          src={value?.code}
                          alt={value?.code}
                          className="w-100 h-100"
                        />
                      </div>
                      <div
                        className="text-success fs-7 fw-bold cursor-pointer"
                        onClick={() => {
                          if (value?.amount) {
                            // Logic for applying coupon
                          }
                        }}
                      >
                        APPLY
                      </div>
                    </div>
                    <div className="mt-1 ">{value?.description}</div>
                  </div>
                  <div
                    className={`border-bottom pb-1 mt-2 ${
                      value.amount ? "false" : "d-none"
                    }`}
                  >
                    <div className="two-line-container">
                      <span className="fs-8">{value?.meta_fields}</span>
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className=" text-danger ">{value?.type}</div>
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
                      {value?.discription &&
                      typeof value.discription === "string"
                        ? parse(value.discription)
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

export default MobTabDiscountComponent;
