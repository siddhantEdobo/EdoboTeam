import React from "react";
import "./MobMultiBannerComponent.css";
const GRAS = [
  {
    id: 1,
    url: "https://cdn.zeptonow.com/production///tr:w-810,ar-810-384,pr-true,f-webp,q-80/inventory/banner/c05d1dae-2adf-4b6e-9c1d-ac2e29c2c339-Multiple_thin-New_UI.png",
  },
  {
    id: 2,
    url: "https://cdn.zeptonow.com/production///tr:w-969,ar-969-558,pr-true,f-webp,q-80/inventory/banner/5774e562-0d61-49cb-9563-2dd7f6e7a944-Banner_Carousel_Comfortable_periods.png",
  },
  {
    id: 3,
    url: "https://cdn.zeptonow.com/production///tr:w-810,ar-810-384,pr-true,f-webp,q-80/inventory/banner/e5d38a4a-9085-4446-bf28-0f8965ab949c-Multiple_thin_Make_heads_turn_(2).png",
  },
  {
    id: 4,
    url: "https://cdn.zeptonow.com/production///tr:w-810,ar-810-384,pr-true,f-webp,q-80/inventory/banner/e5d38a4a-9085-4446-bf28-0f8965ab949c-Multiple_thin_Make_heads_turn_(2).png",
  },
  {
    id: 5,
    url: "https://cdn.zeptonow.com/production///tr:w-969,ar-969-558,pr-true,f-webp,q-80/inventory/banner/5774e562-0d61-49cb-9563-2dd7f6e7a944-Banner_Carousel_Comfortable_periods.png",
  },
  {
    id: 6,
    url: "https://cdn.zeptonow.com/production///tr:w-810,ar-810-384,pr-true,f-webp,q-80/inventory/banner/e5d38a4a-9085-4446-bf28-0f8965ab949c-Multiple_thin_Make_heads_turn_(2).png",
  },
];

const MobMultiBannerComponent = ({ data }) => {
  const hasData =
    data &&
    data.data &&
    data.data.length > 3 && // Ensure that the data array has at least 4 items
    data.data[3] &&
    data.data[3].items;

  return (
    <div>
      {hasData ? (
        <div className="container-fluid home-container">
          <div className="fs-5 pb-3">Multi Banner</div>
          <div className="row row-cols-2 row-cols-md-3 row-cols-lg-6 g-3">
            {data.data[3].items.map((value) => (
              <div key={value?.id} className="col">
                <img
                  src={value?.image1}
                  className="mob-grocery-card-img-top rounded-3"
                  alt="..."
                />
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="container-fluid home-container">
          <div className="fs-5 pb-3">edobo - Grocery Shopping Online</div>
          <div className="row row-cols-2 row-cols-md-3 row-cols-lg-6 g-3">
            {GRAS.map((value) => (
              <div key={value?.id} className="col">
                <img
                  src={value.url}
                  className="mob-grocery-card-img-top rounded-3"
                  alt="..."
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default MobMultiBannerComponent;
