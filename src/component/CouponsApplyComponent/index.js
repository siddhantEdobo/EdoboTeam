import React from "react";

function CouponApplyComponent() {
  return (
    <>
      <div className="mt-5 fs-5 fw-bold">Coupons</div>
      <div className="row">
        <div className="col-5">
          <form class="row gx-3 gy-2 align-items-center">
            <div class="col-sm-3">
              <label class="visually-hidden" for="specificSizeInputName">
                Name
              </label>
              <input
                type="text"
                class="form-control"
                id="specificSizeInputName"
                placeholder="Jane Doe"
              />
            </div>
            <div class="col-sm-3">
              <div className="fs-6">Username</div>
            </div>
          </form>
        </div>
        <div className="col-4"></div>
      </div>
    </>
  );
}

export default CouponApplyComponent;
