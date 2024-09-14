import React from "react";
import "./MobTopCategoryComponent.css";
const POPULAR = [
  {
    id: 1,
    url: "https://cdn1.storehippo.com/s/60a39f1801d30d79c4caa94b/6298378eacd9fb1d022e2eb9/chocolate-and-candies.png",
  },
  {
    id: 2,
    url: "https://cdn1.storehippo.com/s/60a39f1801d30d79c4caa94b/629838b45024fe1366fea5f9/snacks-and-packaged.png",
  },
  {
    id: 3,
    url: "https://cdn1.storehippo.com/s/60a39f1801d30d79c4caa94b/6296098000b6f1cf63dcd5d3/personal-care.png",
  },
  {
    id: 4,
    url: "https://cdn1.storehippo.com/s/60a39f1801d30d79c4caa94b/6298378eacd9fb1d022e2eb9/chocolate-and-candies.png",
  },
];

const MobTopCategoryComponent = () => {
  return (
    <div className="container-lg home-container">
      <div className="fs-4 pb-3 fs-3">TOP CATEGORIES</div>
      <div className="row g-2">
        {POPULAR?.map((value) => {
          return (
            <div key={value?.id} className="col-12 col-sm-12">
              <img
                src={value?.url}
                className="mob-topcategory-card-img-top rounded-3"
                alt="..."
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MobTopCategoryComponent;
