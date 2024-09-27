import React from "react";

const EXPOLRE_LIST = [
  {
    id: 1,
    url: "https://cdn.zeptonow.com/production///tr:w-420,ar-486-333,pr-true,f-webp,q-80/cms/category/4529e4a6-53c8-47c0-9386-bf6da3bbc2d6.png",
    large: true,
  },
  {
    id: 2,
    url: "https://cdn.zeptonow.com/production///tr:w-210,ar-225-333,pr-true,f-webp,q-80/cms/category/f6e33528-b00d-4d6f-9636-2fbd59924201.png",
    large: false,
  },
  {
    id: 3,
    url: "https://cdn.zeptonow.com/production///tr:w-210,ar-225-333,pr-true,f-webp,q-80/cms/category/f6e33528-b00d-4d6f-9636-2fbd59924201.png",
    large: false,
  },
  {
    id: 4,
    url: "https://cdn.zeptonow.com/production///tr:w-210,ar-225-333,pr-true,f-webp,q-80/cms/category/9ab5de50-8c4f-4491-8352-763a8337b59cAttaRiceOilDals.png",
    large: false,
  },
  {
    id: 5,
    url: "https://cdn.zeptonow.com/production///tr:w-210,ar-225-333,pr-true,f-webp,q-80/cms/category/5bab6832-2fa9-476c-96c3-6cfd7a77ce15BreakfastSauces.png",
    large: false,
  },
  {
    id: 6,
    url: "https://cdn.zeptonow.com/production///tr:w-210,ar-225-333,pr-true,f-webp,q-80/cms/category/15f38050-51d2-440c-9b16-8964a166a11cElectricalsAccessories.png",
    large: false,
  },
  {
    id: 7,
    url: "https://cdn.zeptonow.com/production///tr:w-210,ar-225-333,pr-true,f-webp,q-80/cms/category/5bab6832-2fa9-476c-96c3-6cfd7a77ce15BreakfastSauces.png",
    large: false,
  },
  {
    id: 8,
    url: "https://cdn.zeptonow.com/production///tr:w-210,ar-225-333,pr-true,f-webp,q-80/cms/category/15f38050-51d2-440c-9b16-8964a166a11cElectricalsAccessories.png",
    large: false,
  },
  {
    id: 9,
    url: "https://cdn.zeptonow.com/production///tr:w-210,ar-225-333,pr-true,f-webp,q-80/cms/category/15f38050-51d2-440c-9b16-8964a166a11cElectricalsAccessories.png",
    large: false,
  },
  {
    id: 10,
    url: "https://cdn.zeptonow.com/production///tr:w-210,ar-225-333,pr-true,f-webp,q-80/cms/category/9ab5de50-8c4f-4491-8352-763a8337b59cAttaRiceOilDals.png",
    large: false,
  },
  {
    id: 11,
    url: "https://cdn.zeptonow.com/production///tr:w-210,ar-225-333,pr-true,f-webp,q-80/cms/category/9ab5de50-8c4f-4491-8352-763a8337b59cAttaRiceOilDals.png",
    large: false,
  },
  {
    id: 12,
    url: "https://cdn.zeptonow.com/production///tr:w-210,ar-225-333,pr-true,f-webp,q-80/cms/category/9ab5de50-8c4f-4491-8352-763a8337b59cAttaRiceOilDals.png",
    large: false,
  },
  {
    id: 13,
    url: "https://cdn.zeptonow.com/production///tr:w-210,ar-225-333,pr-true,f-webp,q-80/cms/category/9ab5de50-8c4f-4491-8352-763a8337b59cAttaRiceOilDals.png",
    large: false,
  },
];
const FreshVegitablsComponent = () => {
  return (
    <div className="container-lg home-container">
      <div className="fs-4 pb-3 fs-3">Explore By Categories</div>
      <div className="row row-cols-lg-2 g-0 ">
        {/* <div className="row row-cols-2 row-cols-md-4 row-cols-lg-6 g-0"> */}
        {EXPOLRE_LIST?.map((value) => {
          if (value?.large) {
            return (
              <div
                key={value?.id}
                className="ps-2 freshveg-image-large-container"
              >
                <img
                  className="w-100 h-100"
                  src={value?.url}
                  alt={value?.url}
                />
              </div>
            );
          } else {
            return (
              <div key={value?.id} className="ps-2 freshveg-image-container">
                <img
                  className="w-100 h-100"
                  src={value?.url}
                  alt={value?.url}
                />
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default FreshVegitablsComponent;
