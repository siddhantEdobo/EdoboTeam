import React from "react";
import "./MobHouseHoldingProductComponent.css";

const MobHouseHoldingProductComponent = (props) => {
  const {
    houselolding = [
      {
        id: 1,
        url: "https://cdn1.storehippo.com/s/60a39f1801d30d79c4caa94b/64fc0909f70b03c86e342051/rtce.png",
      },
      {
        id: 2,
        url: "https://cdn1.storehippo.com/s/60a39f1801d30d79c4caa94b/64fc0990903dcec7caca2e09/np.png",
      },
      {
        id: 3,
        url: "https://cdn1.storehippo.com/s/60a39f1801d30d79c4caa94b/64fc0990903dcec7caca2e09/np.png",
      },
      {
        id: 4,
        url: "https://cdn1.storehippo.com/s/60a39f1801d30d79c4caa94b/64fc09d51f3e0de0a4c38dd9/js.png",
      },
      {
        id: 5,
        url: "https://cdn1.storehippo.com/s/60a39f1801d30d79c4caa94b/64fc09ec14842ee0ec3eb912/fvs.png",
      },
      {
        id: 6,
        url: "https://cdn1.storehippo.com/s/60a39f1801d30d79c4caa94b/64fc09ec14842ee0ec3eb912/fvs.png",
      },
      {
        id: 7,
        url: "https://cdn1.storehippo.com/s/60a39f1801d30d79c4caa94b/64fc09ec14842ee0ec3eb912/fvs.png",
      },
      {
        id: 8,
        url: "https://cdn1.storehippo.com/s/60a39f1801d30d79c4caa94b/64fc09ec14842ee0ec3eb912/fvs.png",
      },
    ],
  } = props;
  return (
    <div className="container-lg home-container">
      <h3 className="fs-4">SNACKS AND PACKAGED FOODS</h3>
      <div className="row row-cols-2 row-cols-md-4 row-cols-lg-4 house-holding-height">
        {houselolding?.map((value) => {
          return (
            <div key={value?.id} className="col pe-1 ps-1 mt-1">
              <img
                src={value?.url}
                className="card-img-top rounded-3 h-100 "
                alt="..."
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MobHouseHoldingProductComponent;
