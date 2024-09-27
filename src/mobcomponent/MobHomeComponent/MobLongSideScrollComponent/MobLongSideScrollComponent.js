import React from "react";
import "./MobLongSideScrollComponent.css";
import AddToCartButtonCustomIcon from "../../../common/AddToCartButtonCustomIcon";

const LOGINSIDESCCROLL = {
  id: 1,
  long_slide: {
    id: 2,
    url: "https://i5.walmartimages.com/dfw/4ff9c6c9-1bce/k2-_831d49b7-a060-4134-b563-801d5ce611b6.v1.jpg?odnHeight=508&odnWidth=276&odnBg=&odnDynImageQuality=70",
  },
  short_product: [
    {
      id: 3,
      url: "https://cdn1.storehippo.com/s/60a39f1801d30d79c4caa94b/6593c7aa5364d1c6986c757d/layer-34-1--240x240.png",
      title: "Milk Fresh",
      price: "₹ 24",
      mrp: "₹ 30",
      discription: "Fresh Milk on your door",
    },
    {
      id: 4,
      url: "https://cdn1.storehippo.com/s/60a39f1801d30d79c4caa94b/6593c7aa5364d1c6986c757d/layer-34-1--240x240.png",
      title: "Goverdhan Fresh",
      price: "₹ 50",
      mrp: "₹ 56",
      discription: "Fresh Milk on your door",
    },
    {
      id: 5,
      url: "https://cdn1.storehippo.com/s/60a39f1801d30d79c4caa94b/6593c7aa5364d1c6986c757d/layer-34-1--240x240.png",
      title: "Amole Fresh",
      price: "₹ 29",
      mrp: "₹ 35",
      discription: "Fresh Milk on your door",
    },
    {
      id: 6,
      url: "https://cdn1.storehippo.com/s/60a39f1801d30d79c4caa94b/6593c7aa5364d1c6986c757d/layer-34-1--240x240.png",
      title: "MilkDairy",
      price: "₹ 75",
      mrp: "₹ 80",
      discription: "Fresh Milk on your door",
    },
  ],
};

const MobLongSideScrollComponent = () => {
  return (
    <div className="container-lg home-container ">
      <div className="fs-4 ps-3 pt-2 pb-2 rounded-3">Ready to Cook</div>
      <div className="row p-0 m-0">
        <div className="col-5 mob-longimg-container mob-long-slidescroll-container pt-2 pb-2">
          <img
            className="h-100 w-100"
            src={
              LOGINSIDESCCROLL?.long_slide?.url ||
              "https://i5.walmartimages.com/dfw/4ff9c6c9-1bce/k2-_831d49b7-a060-4134-b563-801d5ce611b6.v1.jpg?odnHeight=508&odnWidth=276&odnBg=&odnDynImageQuality=70"
            }
            alt="..."
          />
        </div>
        <div className="col-7 mob-long-slidescroll-container pe-0">
          <div className="mob-shortimg-container hide-x-scrollbar">
            {LOGINSIDESCCROLL?.short_product?.map((value, index) => {
              return (
                <div
                  key={index}
                  className="col mob-shortimg-subcontainer mb-2 position-relative"
                >
                  <div className="mob-short-productcard-container position-relative">
                    <div className="mob-short-productcard-img">
                      <img
                        className="w-100 h-100"
                        src={
                          "https://cdn1.storehippo.com/s/60a39f1801d30d79c4caa94b/6593c7aa5364d1c6986c757d/layer-34-1--240x240.png"
                        }
                        alt="..."
                      />
                    </div>
                    <div className="mob-short-productcard-details position-relative">
                      <div className="fs-14 fw-bold two-line-text">
                        {value?.title}
                      </div>
                      <div className="fs-14 fw-bold">
                        {value?.price}
                        <span className="fs-14 fw-bold text-decoration-line-through text-danger ps-2">
                          {value?.mrp}
                        </span>
                      </div>
                      <div className="fs-12 text-primary one-line-text">
                        {value?.discription}
                      </div>
                    </div>
                  </div>
                  <div className="position-absolute bottom-0 end-0">
                    <AddToCartButtonCustomIcon
                      quantity={"0"}
                      onAddtoCartClick={() => {
                        // onAddtoCartClick();
                      }}
                      onIncrement={() => {
                        // onIncrement();
                      }}
                      onDecrement={() => {
                        // onDecrement();
                      }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobLongSideScrollComponent;
