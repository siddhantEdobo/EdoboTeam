import React from "react";
import refresh from "../../assets/Icon/refresh.png";

function ReplceProductComponent() {
  return (
    <>
      <div className="row">
        <div>
          <div class="card">
            <div className="d-flex justify-content-evenly">
              <img
                src="https://cdn1.storehippo.com/s/60a39f1801d30d79c4caa94b/64f84698d171af6a6696032d/5-1--320x320.jpg"
                alt="..."
                className=""
                height={150}
              />
              <img
                src={refresh}
                alt="..."
                width={40}
                height={40}
                className="mt-5"
              />
              <img
                src="https://cdn1.storehippo.com/s/60a39f1801d30d79c4caa94b/64f84698d171af6a6696032d/5-1--320x320.jpg"
                height={150}
                alt="..."
              />
            </div>
            <div className="d-flex">
              <div class="card-body text-center">
                <h5 class="card-title">Basmati Rice</h5>
                <p class="card-text">5Kg</p>
                <p class="card-text">(2 products)</p>
                <div className="fw-bold fs-5 my-1 ">₹ 2,190</div>
              </div>
              <div class="card-body text-center ">
                <h5 class="card-title">Basmati Rice</h5>
                <p class="card-text">8Kg</p>
                <p class="card-text">(1 products)</p>
                <div className="fw-bold fs-5 my-1 ">₹ 2,190</div>
              </div>
            </div>
            <div className="d-flex justify-content-center mb-3">
              <button className="btn btn-outline-danger fw-bold text-capitalize rounded-5 ">
                replace to save ₹ 105
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ReplceProductComponent;
