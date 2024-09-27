import React from "react";

const TopCategoryComponent = () => {
  return (
    <div className="container-lg home-container">
      <div className="fs-4 pb-3 fs-3">TOP CATEGORIES</div>
      <div className="row row-cols-2 row-cols-md-2 row-cols-lg-2 g-3">
        <div className="col">
          <img
            src="https://cdn1.storehippo.com/s/60a39f1801d30d79c4caa94b/6298378eacd9fb1d022e2eb9/chocolate-and-candies.png"
            className="card-img-top rounded-3"
            alt="..."
          />
        </div>
        <div className="col">
          <img
            src="https://cdn1.storehippo.com/s/60a39f1801d30d79c4caa94b/629838b45024fe1366fea5f9/snacks-and-packaged.png"
            className="card-img-top rounded-3"
            alt="..."
          />
        </div>
        <div className="col">
          <img
            src="https://cdn1.storehippo.com/s/60a39f1801d30d79c4caa94b/6296098000b6f1cf63dcd5d3/personal-care.png"
            className="card-img-top rounded-3"
            alt="..."
          />
        </div>
        <div className="col">
          <img
            src="https://cdn1.storehippo.com/s/60a39f1801d30d79c4caa94b/6296098000b6f1cf63dcd5d3/personal-care.png"
            className="card-img-top rounded-3"
            alt="..."
          />
        </div>
      </div>
    </div>
  );
};

export default TopCategoryComponent;
